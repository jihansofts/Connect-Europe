"use client";
import React, { useState } from "react";
import { useInputModel } from "@/context/ModelContext";

const tabs = [
  "I need an employee",
  "HR Council",
  "Interim manager",
  "Looking for work",
];

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
    <div className="fixed inset-0 bg-black/70 bg-opacity-40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-lg w-[500px] max-w-full p-8 relative">
        <button onClick={closeModel} className="absolute top-3 right-4 text-xl">
          ✕
        </button>

        <h2 className="text-center mb-2 text-gray-700">
          Where can we help you?
        </h2>
        <p className="text-center mb-6 font-semibold">I need:</p>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-6 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full border transition ${
                activeTab === tab
                  ? "bg-[#c01e4d] text-white shadow-md"
                  : "bg-gray-100 text-gray-700"
              }`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full border px-4 py-2 rounded"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full border px-4 py-2 rounded"
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="w-full border px-4 py-2 rounded"
            onChange={handleChange}
          />
          {/* Hide report if last tab (Looking for work) */}
          {activeTab !== "Looking for work" && (
            <textarea
              name="report"
              placeholder="Report"
              className="w-full border px-4 py-2 rounded h-24"
              onChange={handleChange}
            />
          )}

          <label className="flex items-center space-x-2 text-sm">
            <input type="checkbox" name="consent" onChange={handleChange} />
            <span>I consent to the processing of personal data</span>
          </label>

          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded hover:bg-heading">
            Send to
          </button>
        </form>
      </div>
    </div>
  );
}
