"use client";
import React, { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, ChevronRight } from "lucide-react";

import Link from "next/link";
const navItem = [
  { name: "About Us", link: "/about" },
  { name: "Get An Employee", link: "/get-an-employee" },
  { name: "HR Support", link: "/get-hr-advice" },
  // { name: "HR Blog", link: "/hr-blog" },
  { name: "References", link: "/reference" },
  { name: "Contact Us", link: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 right-0 p-4 px-10 flex justify-between items-center bg-primary shadow-md">
        <div className="flex space-x-2 text-white">
          <Menu className="cursor-pointer" onClick={() => setOpen(true)} />
          <span>Menu</span>
        </div>
        <Link href="/">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="cursor-pointer"
          />
        </Link>
        <Link
          href="/contact"
          className="border border-white px-10 py-2 hover:bg-heading hover:border-heading cursor-pointer duration-200  text-white rounded">
          Contact Us
        </Link>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {open && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "tween" }}
              className="fixed top-0 left-0 h-full w-[300px] bg-primary shadow-lg z-50 p-6">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-xl text-white font-semibold">Menu</h2>
                <X
                  className="cursor-pointer text-white"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="h-full flex items-center justify-center">
                <ul className="space-y-4 flex flex-col items-end">
                  {navItem.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        onClick={() => setOpen(false)}
                        className="text-xl font-bold text-white hover:text-heading">
                        {item.name}
                        <ChevronRight className="inline ml-2" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
