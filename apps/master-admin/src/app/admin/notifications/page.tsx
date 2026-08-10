"use client";

import React, { useState, useEffect } from "react";
import { Badge, Card } from "@sryn/ui";
import { collection, getDocs, query, where, getFirebaseDb, COLLECTIONS } from "@sryn/database";
import type { NotificationDocument } from "@sryn/database";
import { useAuth } from "@sryn/database/context/auth-context";
import { Bell } from "lucide-react";

export default function AdminNotificationsPage() {
  const { currentUser: user } = useAuth();
  const [notifications, setNotifications] = useState<NotificationDocument[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotifications() {
      if (!user) {
        setLoading(false);
        return;
      }
      try {
        const q = query(
          collection(getFirebaseDb(), COLLECTIONS.NOTIFICATIONS),
          where("recipientUid", "==", user.uid)
        );
        const snap = await getDocs(q);
        const list: NotificationDocument[] = [];
        snap.forEach((d) => list.push(d.data() as NotificationDocument));
        setNotifications(list);
      } catch (err) {
        console.error("Error fetching notifications:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchNotifications();
  }, [user]);

  return (
    <div className="space-y-6 text-left max-w-7xl mx-auto">
      <div className="border-b border-slate-800 pb-6">
        <Badge variant="secondary" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
          NOTIFICATION CENTER
        </Badge>
        <h1 className="text-3xl font-bold text-white tracking-tight mt-1">My System Notifications</h1>
      </div>

      <Card className="bg-slate-900 border-slate-800 p-6">
        {loading ? (
          <p className="text-slate-400 text-sm text-center">Loading notifications...</p>
        ) : notifications.length === 0 ? (
          <div className="text-center space-y-3 py-8">
            <Bell className="w-10 h-10 text-slate-500 mx-auto" />
            <p className="text-slate-400 text-sm">You have no unread system notifications.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {notifications.map((n) => (
              <div key={n.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-300">
                <div>
                  <h4 className="text-base font-bold text-white">{n.title}</h4>
                  <p className="text-slate-400 text-[11px]">{n.message}</p>
                </div>
                <Badge variant={n.read ? "secondary" : "success"}>{n.read ? "Read" : "New"}</Badge>
              </div>
            ))}
          </div>
        )}
      </Card>
    </div>
  );
}
