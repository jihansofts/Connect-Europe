"use client";
import React, { useState } from "react";

import { FaYoutube, FaTiktok, FaPinterest } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";

import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
const navItem = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Get An Employee", link: "/get-an-employee" },
  { name: "HR Support", link: "/get-hr-advice" },
  // { name: "Why Choose Us", link: "/WhyChoose" },
  { name: "References", link: "/reference" },
  { name: "Contact Us", link: "/contact" },
];
const socialLinks = [
  {
    href: "https://www.facebook.com/connectEurope.ag",
    icon: (
      <Facebook
        height={12}
        width={12}
        className="text-white group-hover:text-primary"
      />
    ),
  },
  {
    href: "https://www.instagram.com/connecteurope3/",
    icon: (
      <Instagram
        height={12}
        width={12}
        className="text-white group-hover:text-primary"
      />
    ),
  },
  {
    href: "https://www.linkedin.com/company/107184862/admin/dashboard/",
    icon: (
      <Linkedin
        height={12}
        width={12}
        className="text-white group-hover:text-primary"
      />
    ),
  },
  {
    href: "https://www.youtube.com/@ConnectEurope-0",
    icon: (
      <FaYoutube size={12} className="text-white group-hover:text-primary" />
    ),
  },
  {
    href: "https://www.tiktok.com/@connecteurope25?lang=en",
    icon: (
      <FaTiktok size={12} className="text-white group-hover:text-primary" />
    ),
  },
  {
    href: "https://x.com/ConnectEurope0",
    icon: (
      <FaXTwitter size={12} className="text-white group-hover:text-primary" />
    ),
  },
  {
    href: "https://www.pinterest.com/ConnectEurope/",
    icon: (
      <FaPinterest size={12} className="text-white group-hover:text-primary" />
    ),
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      {/* Top Navbar */}
      <div className="fixed top-0 left-0 right-0 p-4 lg:px-16 md:px-10 sm:px-5 px-5 flex gap-x-5 justify-between items-center bg-primary shadow-md">
        <div className="flex space-x-2 text-white">
          <Menu className="cursor-pointer" onClick={() => setOpen(true)} />
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
          className="border border-white text-[12px] lg:text-[22px] md:text-[18px] sm:text-[16px] lg:px-10 md:px-8 sm:px-6 px-4 py-2 hover:bg-heading hover:border-heading cursor-pointer duration-200 text-white rounded">
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
                {/* <h2 className="text-xl text-white font-semibold">Connect Europe</h2> */}
                <Link href="/">
                  <Image
                    src="/logo.png"
                    alt="logo"
                    width={100}
                    height={100}
                    className="cursor-pointer"
                  />
                </Link>
                <X
                  className="cursor-pointer text-white"
                  onClick={() => setOpen(false)}
                />
              </div>

              <div className="h-full flex items-center justify-center">
                <ul className="space-y-4 flex flex-col items-center">
                  {navItem.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.link}
                        onClick={() => setOpen(false)}
                        className="text-xl font-bold text-white hover:text-heading">
                        {item.name}
                        {/* <ChevronRight className="inline ml-2" /> */}
                      </Link>
                    </li>
                  ))}
                  <div className="flex justify-center items-center">
                    {socialLinks.map((item, index) => (
                      <a
                        key={index}
                        target="_blank"
                        href={item.href}
                        className={`w-7 h-7 bg-heading group p-2 rounded-md flex items-center hover:bg-white duration-200 cursor-pointer justify-center ${
                          index !== 0 ? "ml-2" : ""
                        }`}>
                        {item.icon}
                      </a>
                    ))}
                  </div>
                </ul>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
