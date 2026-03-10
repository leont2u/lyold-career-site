"use client";

import Link from "next/link";
import { Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-black text-white ">
      {/* subtle glow */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(white_0.6px,transparent_0.6px)] bg-size-[7px_7px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 sm:px-10 lg:px-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-semibold tracking-tight">
              Lyold Ndebele
            </h3>
            <p className="mt-3 text-sm uppercase tracking-[0.3em] text-white/50">
              Cinematographer • 1st AC • Drone Operator
            </p>

            <p className="mt-6 max-w-sm text-sm text-white/60 leading-relaxed">
              Crafting cinematic visuals through precision, movement, and
              storytelling. Available for local and international productions.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.35em] text-white/50">
              Navigation
            </h4>

            <ul className="mt-6 space-y-4 text-white/80">
              <li>
                <Link href="/work" className="hover:text-white transition">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm uppercase tracking-[0.35em] text-white/50">
              Get In Touch
            </h4>

            <div className="mt-6 space-y-5 text-sm text-white/80">
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-white/60" />
                <a
                  href="mailto:hello@lyoldndebele.com"
                  className="hover:text-white transition"
                >
                  hello@lyoldndebele.com
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={16} className="text-white/60" />
                <a
                  href="tel:+263000000000"
                  className="hover:text-white transition"
                >
                  +263 00 000 0000
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MapPin size={16} className="text-white/60" />
                <span>Harare, Zimbabwe</span>
              </div>

              <div className="flex items-center gap-4 pt-4">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  className="hover:text-white transition"
                >
                  <Instagram size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6  pt-8 text-xs uppercase tracking-[0.3em] text-white/40 sm:flex-row">
          <span>© {new Date().getFullYear()} Lyold Ndebele</span>
          <span>All rights reserved</span>
        </div>
      </div>
    </footer>
  );
}
