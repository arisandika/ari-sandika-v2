import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ButtonNav from "./buttonNav";
import { CustomLink } from "@/utils/hooks/routerCustom";
import Link from "next/link";
import { useRouter } from "next/router";
import { AnimatedTopToBottom } from "@/utils/motion";

const Navbar = () => {
  const router = useRouter();
  const [bgNav, setBgNav] = useState(false);

  useEffect(() => {
    const changeBg = () => {
      setBgNav(window.scrollY >= 300);
    };

    window.addEventListener("scroll", changeBg);

    return () => {
      window.removeEventListener("scroll", changeBg);
    };
  }, []);

  return (
    <>
      <AnimatedTopToBottom>
        <nav
          className={`${
            bgNav ? "bg-nav-show backdrop-blur-sm" : "bg-nav-hide"
          } navbar-container`}
        >
          <div className="navbar">
            <div className="nav-link-container">
              <Link href="/" className={`nav-logo nav-logo-dark`}>
                Ari Sandika
              </Link>
              <div className="nav-link-wrapper">
                <CustomLink href="/projects" title="Projects" />
                <CustomLink href="/about" title="About" />
                <CustomLink href="/contact" title="Contact" />
              </div>
            </div>
            <div className="btn-nav-hidden">
              <ButtonNav />
            </div>
          </div>
        </nav>
      </AnimatedTopToBottom>
      <AnimatePresence>
        {bgNav && (
          <motion.div
            initial={{ opacity: 0, y: -70 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className={`floating-button`}
          >
            <ButtonNav />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
