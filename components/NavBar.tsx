"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Image from "next/image";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const { scrollY } = useScroll();
  const lastY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = lastY.current;
    const difference = latest - previous;

    if (latest < 40) {
      setIsCollapsed(false);
    } else if (difference > 8) {
      setIsCollapsed(true);
    } else if (difference < -8) {
      setIsCollapsed(false);
    }

    lastY.current = latest;
  });

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <header className="fixed left-0 top-4 z-50 w-full px-4 sm:top-6 sm:px-6 lg:px-8">
        <motion.div
          animate={{
            maxWidth: isCollapsed ? 300 : 1024,
          }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mx-auto"
        >
          <motion.div
            animate={{
              paddingTop: isCollapsed ? 10 : 12,
              paddingBottom: isCollapsed ? 10 : 12,
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative flex items-center justify-between rounded-full px-4 backdrop-blur-md sm:px-6"
          >
            {/* subtle background */}
            <div className="pointer-events-none absolute inset-0 rounded-full " />
            <div className="pointer-events-none absolute inset-1px rounded-full bg-black/45" />

            {/* left */}
            <Link
              href="/"
              onClick={closeMobileMenu}
              className="relative z-10 flex min-w-0 shrink items-center gap-3"
            >
              <motion.div
                animate={{
                  width: isCollapsed ? 40 : 44,
                  height: isCollapsed ? 40 : 44,
                  borderRadius: isCollapsed ? 999 : 12,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex shrink-0 items-center justify-center  "
              >
                <Image
                  src="/profile-photo.png"
                  alt="Logo"
                  width={44}
                  height={44}
                  className="rounded-full"
                />
              </motion.div>

              <div className="min-w-0 leading-none">
                <motion.p
                  animate={{
                    fontSize: isCollapsed ? "1rem" : "1.25rem",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="truncate font-semibold tracking-tight text-white"
                >
                  Creative Flux Co.
                </motion.p>

                <AnimatePresence initial={false}>
                  {!isCollapsed && (
                    <motion.p
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="mt-1 hidden truncate text-[10px] uppercase tracking-[0.22em] text-white/55 sm:block lg:text-[11px] lg:tracking-[0.28em]"
                    >
                      Visual Storyteller
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            </Link>

            {/* desktop right side */}
            <div className="relative z-10 hidden lg:flex items-center">
              <AnimatePresence mode="wait" initial={false}>
                {!isCollapsed ? (
                  <motion.nav
                    key="expanded-nav"
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="flex items-center gap-8"
                  >
                    {navLinks.map((item) => {
                      const isActive = pathname === item.href;

                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`group relative text-[15px] font-medium transition ${
                            isActive
                              ? "text-[#698675]"
                              : "text-white/80 hover:text-white"
                          }`}
                        >
                          {item.label}
                          <span
                            className={`absolute -bottom-2 left-0 h-0.75 rounded-full bg-[#698675] transition-all duration-300 ${
                              isActive ? "w-full" : "w-0 group-hover:w-full"
                            }`}
                          />
                        </Link>
                      );
                    })}
                  </motion.nav>
                ) : (
                  <motion.div
                    key="collapsed-dots"
                    initial={{ opacity: 0, scale: 0.85, y: -8 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.85, y: 8 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="flex items-center gap-2 rounded-full px-3 py-2"
                    aria-label="Navigation minimized"
                  >
                    {[0, 1, 2].map((dot) => (
                      <motion.span
                        key={dot}
                        animate={{
                          opacity: [0.35, 1, 0.35],
                          scale: [1, 1.25, 1],
                        }}
                        transition={{
                          duration: 1.2,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: dot * 0.18,
                        }}
                        className="h-2.5 w-2.5 rounded-full bg-white/80"
                      />
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* mobile hamburger */}
            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              className="relative z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/10 text-white transition hover:bg-white/15 lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </motion.div>
        </motion.div>
      </header>

      {/* mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-black/92 px-4 pt-24 backdrop-blur-xl lg:hidden"
          >
            <div className="mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="rounded-[28px] border border-white/10 bg-white/5 p-4"
              >
                <nav className="flex flex-col">
                  {navLinks.map((item, index) => {
                    const isActive = pathname === item.href;

                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ delay: index * 0.04, duration: 0.18 }}
                      >
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className={`flex items-center justify-between rounded-2xl px-4 py-4 text-base font-medium transition ${
                            isActive
                              ? "bg-white text-black"
                              : "text-white/85 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          <span>{item.label}</span>
                          <span
                            className={`h-2.5 w-2.5 rounded-full ${
                              isActive ? "bg-black/70" : "bg-[#698675]"
                            }`}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                <div className="mt-4 border-t border-white/10 pt-4">
                  <Link
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90"
                  >
                    Let’s Work Together
                  </Link>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
