"use client";
import React, { useState } from "react";
import { useInputModel } from "@/context/ModelContext";
import { X } from "lucide-react";

const tabs = ["I need an employee", "I need Workers"];

export default function InputModal() {
  const { isOpen, closeModel } = useInputModel();
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    report: "",
    consent: false,
  });
  if (!isOpen) return null;
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked =
      type === "checkbox" && e.target instanceof HTMLInputElement
        ? e.target.checked
        : undefined;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted", { activeTab, ...formData });
    // Optional: Add validation + backend API call here
  };

  return (
    <div className="fixed inset-0 bg-black/70  flex justify-center items-center z-50">
      <div className="bg-white rounded-xl lg:mr-0 md:mr-0 sm:mr-5 mr-20  shadow-lg w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-3xl px-5  sm:px-10  md:px-10 py-8 sm:py-12 relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={closeModel}
          className="absolute cursor-pointer top-3 right-4 text-xl">
          <X />
        </button>

        <h2 className="text-center mb-2 text-gray-700">
          Fill out the form below, and a member of our team will get back to you
          shortly.
        </h2>
        <p className="text-center mb-6 font-semibold">Position Needed</p>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 cursor-pointer py-2 rounded-full border transition ${
                activeTab === tab
                  ? "bg-primary text-white shadow-md"
                  : "bg-gray-100 text-gray-700"
              }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:primary "
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:primary "
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:primary "
            onChange={handleChange}
          />
          {/* Hide report if last tab (Looking for work) */}

          {activeTab !== "Looking for work" && (
            <textarea
              name="report"
              placeholder="Message / Job Description"
              className="w-full border px-4 py-2 rounded h-24 focus:outline-none focus:ring-2 focus:ring-primary focus:primary"
              onChange={handleChange}
            />
          )}

          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" name="consent" onChange={handleChange} />
            <span>
              I consent to the processing of my personal data in accordance with
              GDPR.
            </span>
          </label>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-heading">
            Send Request
          </button>
        </form>
      </div>
    </div>
  );
}
