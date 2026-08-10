"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "./button";

export interface SlideData {
  id: number;
  image: string;
  badgeText: string;
  badgeBorderClass?: string;
  badgeTextClass?: string;
  title: string;
  highlightText: string;
  titleEnd?: string;
  description: string;
  primaryCtaText: string;
  primaryCtaHref: string;
  secondaryCtaText?: string;
  secondaryCtaHref?: string;
  accentGlowClass?: string;
  buttonVariant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "tech" | "finserv" | "recruitment";
}

interface HeroSliderProps {
  slides: SlideData[];
  autoPlayInterval?: number;
  fullBleed?: boolean;
}

export function HeroSlider({ slides, autoPlayInterval = 6000, fullBleed = false }: HeroSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, autoPlayInterval);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide, autoPlayInterval]);

  if (!slides || slides.length === 0) return null;

  return (
    <div
      className={`relative w-full overflow-hidden bg-slate-950 flex items-center ${
        fullBleed
          ? "min-h-[85vh] sm:min-h-[90vh] rounded-b-3xl shadow-2xl"
          : "rounded-3xl shadow-2xl border border-slate-800 min-h-[500px] sm:min-h-[560px]"
      }`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background Slides */}
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            {/* Slide Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[8000ms] ease-out"
              style={{
                backgroundImage: `url('${slide.image}')`,
                transform: isActive ? "scale(1.03)" : "scale(1.08)",
              }}
            />

            {/* Dark & Vibrant Overlay Gradients for Superior Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/45" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />

            {/* Glowing Backdrop Circle */}
            <div
              className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-30 pointer-events-none ${
                slide.accentGlowClass || "bg-blue-500/20"
              }`}
            />

            {/* Slide Content */}
            <div
              className={`relative z-20 max-w-7xl h-full mx-auto px-6 sm:px-12 flex flex-col justify-center text-left space-y-6 ${
                fullBleed ? "pt-28 sm:pt-36 pb-16" : "py-16"
              }`}
            >
              <div className="inline-flex items-center space-x-2">
                <span
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-slate-950/90 border ${
                    slide.badgeBorderClass || "border-blue-500/40"
                  } ${slide.badgeTextClass || "text-blue-400"}`}
                >
                  {slide.badgeText}
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
                {slide.title}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-sky-300">
                  {slide.highlightText}
                </span>{" "}
                {slide.titleEnd || ""}
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-2xl font-normal leading-relaxed drop-shadow-sm">
                {slide.description}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link href={slide.primaryCtaHref}>
                  <Button
                    variant={slide.buttonVariant || "danger"}
                    size="lg"
                    className="font-bold shadow-xl shadow-black/40 hover:scale-105 transition-transform"
                  >
                    <span>{slide.primaryCtaText}</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                {slide.secondaryCtaText && slide.secondaryCtaHref && (
                  <Link href={slide.secondaryCtaHref}>
                    <Button
                      variant="outline"
                      size="lg"
                      className="border-white/30 text-white hover:bg-white/10 font-semibold backdrop-blur-sm"
                    >
                      {slide.secondaryCtaText}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        );
      })}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-white/20 text-white backdrop-blur-md transition-all hover:scale-110 shadow-xl"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-slate-950/70 hover:bg-slate-900 border border-white/20 text-white backdrop-blur-md transition-all hover:scale-110 shadow-xl"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center space-x-3 bg-slate-950/80 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 rounded-full ${
              idx === currentIndex
                ? "w-8 h-2.5 bg-white shadow-md shadow-white/50"
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
