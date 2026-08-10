"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card, Button } from "@sryn/ui";
import { collection, getDocs, doc, updateDoc, serverTimestamp, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { UserProfileDocument } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import { SystemRole, BusinessVertical, isSuperAdmin } from "@sryn/auth";
import { UserCheck, Edit2, CheckCircle2, UserX } from "lucide-react";

export default function AdminUsersPage() {
  const { role: currentRole } = useAuth();
  const [users, setUsers] = useState<UserProfileDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingUser, setEditingUser] = useState<UserProfileDocument | null>(null);
  const [newRole, setNewRole] = useState<SystemRole>(SystemRole.EXECUTIVE);
  const [newVertical, setNewVertical] = useState<BusinessVertical | "NONE">("NONE");
  const [updating, setUpdating] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const snap = await getDocs(collection(getFirebaseDb(), COLLECTIONS.USERS));
      const list: UserProfileDocument[] = [];
      snap.forEach((d) => list.push(d.data() as UserProfileDocument));
      setUsers(list);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleOpenEdit = (u: UserProfileDocument) => {
    setEditingUser(u);
    setNewRole(u.role);
    setNewVertical(u.businessVertical || "NONE");
  };

  const handleSaveUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingUser) return;
    setUpdating(true);

    try {
      const userRef = doc(getFirebaseDb(), COLLECTIONS.USERS, editingUser.uid);
      await updateDoc(userRef, {
        role: newRole,
        businessVertical: newVertical === "NONE" ? null : newVertical,
        updatedAt: serverTimestamp(),
      });

      setEditingUser(null);
      await fetchUsers();
    } catch (err) {
      console.error("Failed to update user:", err);
      alert("Failed to update user profile.");
    } finally {
      setUpdating(false);
    }
  };

  const handleToggleStatus = async (u: UserProfileDocument) => {
    const nextStatus = u.status === "ACTIVE" ? "SUSPENDED" : "ACTIVE";
    try {
      const userRef = doc(getFirebaseDb(), COLLECTIONS.USERS, u.uid);
      await updateDoc(userRef, {
        status: nextStatus,
        updatedAt: serverTimestamp(),
      });
      await fetchUsers();
    } catch (err) {
      console.error("Failed to toggle status:", err);
    }
  };

  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      <div className="flex items-center justify-between border-b border-slate-800 pb-6">
        <div>
          <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
            GLOBAL USER MANAGEMENT
          </Badge>
          <h1 className="text-3xl font-bold text-white tracking-tight mt-1">Master User Directory</h1>
          <p className="text-slate-400 text-xs mt-0.5">Manage user roles, business vertical assignments, and status activation</p>
        </div>
        <Button variant="outline" onClick={fetchUsers}>Refresh</Button>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading users...</p>
        ) : users.length === 0 ? (
          <div className="text-center space-y-3 py-8">
            <UserCheck className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">No registered user profiles found in database.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {users.map((u) => (
              <div key={u.uid} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-base font-bold text-white">{u.name || "User Account"}</h4>
                    <Badge variant={u.status === "ACTIVE" ? "success" : "danger"}>{u.status}</Badge>
                  </div>
                  <p className="text-slate-400 text-[11px]">{u.email} • {u.phone || "No phone"}</p>
                  <p className="text-emerald-400 font-mono text-[10px]">Role: {u.role} | Vertical: {u.businessVertical || "GLOBAL"}</p>
                </div>

                {isSuperAdmin(currentRole) && (
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline" className="border-slate-700 text-xs" onClick={() => handleOpenEdit(u)}>
                      <Edit2 className="w-3.5 h-3.5 mr-1" /> Edit Access
                    </Button>
                    <Button
                      size="sm"
                      variant={u.status === "ACTIVE" ? "danger" : "outline"}
                      className="text-xs"
                      onClick={() => handleToggleStatus(u)}
                    >
                      {u.status === "ACTIVE" ? <UserX className="w-3.5 h-3.5 mr-1" /> : <CheckCircle2 className="w-3.5 h-3.5 mr-1" />}
                      {u.status === "ACTIVE" ? "Suspend" : "Activate"}
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </Card>

      {/* EDIT ACCESS MODAL */}
      {editingUser && (
        <div className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="bg-slate-900 border border-slate-800 p-8 max-w-md w-full space-y-6 shadow-2xl">
            <h3 className="text-xl font-bold text-white">Modify User Access</h3>
            <p className="text-xs text-slate-400">Target User: {editingUser.email}</p>

            <form onSubmit={handleSaveUser} className="space-y-4">
              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold uppercase text-slate-300">System Role</label>
                <select
                  value={newRole}
                  onChange={(e) => setNewRole(e.target.value as SystemRole)}
                  className="h-11 rounded-lg border border-slate-700 bg-slate-800 px-3 text-xs text-white"
                >
                  {Object.values(SystemRole).map((r) => (
                    <option key={r} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label className="text-xs font-semibold uppercase text-slate-300">Business Vertical Assignment</label>
                <select
                  value={newVertical}
                  onChange={(e) => setNewVertical(e.target.value as BusinessVertical | "NONE")}
                  className="h-11 rounded-lg border border-slate-700 bg-slate-800 px-3 text-xs text-white"
                >
                  <option value="NONE">GLOBAL / NONE</option>
                  {Object.values(BusinessVertical).map((bv) => (
                    <option key={bv} value={bv}>{bv}</option>
                  ))}
                </select>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <Button type="button" variant="outline" onClick={() => setEditingUser(null)}>Cancel</Button>
                <Button type="submit" className="bg-emerald-600 hover:bg-emerald-500 text-white font-semibold" disabled={updating}>
                  {updating ? "Saving..." : "Save User Access"}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </div>
  );
}
