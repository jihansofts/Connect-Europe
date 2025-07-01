import React from "react";
import { Facebook, Linkedin } from "lucide-react";

export default function ContactArea() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16">
          {/* Left Column - Contact Form */}
          <div className="space-y-6">
            <h1 className="text-[24px] font-bold text-heading">
              In what area can we help you?
            </h1>

            <div className="space-y-4">
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label
                    htmlFor="employee"
                    className="text-sm font-bold text-heading mb-1">
                    Get
                  </label>
                  <select
                    id="employee"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:primary appearance-none bg-white ">
                    <option value="Employee">Employee</option>
                    <option value="hrcouncil">HR Council</option>
                    <option value="interim">Interim Manager</option>
                  </select>
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="name"
                    className="text-sm font-bold text-heading mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:primary"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="email"
                    className="text-sm font-bold text-heading mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:primary"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="phone"
                    className="text-sm font-bold text-heading mb-1">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="px-3 py-2 border border-gray-300 rounded-md 
            focus:outline-none 
            focus:ring-2 
            focus:ring-primary
            focus:border-primary"
                  />
                </div>

                <div className="flex flex-col">
                  <label
                    htmlFor="report"
                    className="text-sm font-bold text-heading mb-1">
                    Report
                  </label>
                  <textarea
                    id="report"
                    rows={4}
                    className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:primary"
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="consent"
                className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
              />
              <label htmlFor="consent" className="ml-2 text-sm text-gray-700">
                I consent to the processing of personal data
              </label>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <button className="bg-primary hover:bg-heading cursor-pointer text-white px-6 py-3 rounded-md font-semibold transition-all">
                {" "}
                Send To
              </button>
            </div>
          </div>

          {/* Right Column - Contact Information */}
          <div className="space-y-8">
            {/* Contact Information */}
            <div>
              <h2 className="text-[24px] font-semibold text-heading ">
                Contact information
              </h2>
              {/* <p className="text-[16px] text-gray-600">
                Killary Janunkova 2 | Banská Bystrica | 97401 | Slovakia
              </p> */}
              <address className="not-italic  cursor-pointer space-y-1 mt-20 ">
                <p className="text-heading font-bold text-[20px]">
                  📧 Get in Touch by Email
                </p>
                <a
                  href="mailto:contact@connecteurope.agency"
                  className="text-[20px] text-primary">
                  contact@connecteurope.agency
                </a>
              </address>
            </div>

            {/* Invoicing Data */}
            {/* <div className="mt-20">
              <h2 className="text-[24px] font-semibold text-heading ">
                Invoicing data
              </h2>
              <div className="text-gray-700 space-y-5">
                <p className="mt-4">
                  <span className="font-bold">Name:</span> TRIGON Consulting
                  s.r.o.
                </p>
                <p>
                  <span className="font-bold mt-4">Address:</span> Kilary
                  Janunkova | 2 | Banská Bystrica | 974 01 | Slovensko
                </p>
                <p>
                  <span className="font-bold">VAT ID:</span> SK 2022519246
                </p>
                <p>
                  <span className="font-bold">IČO:</span> 43932282
                </p>
              </div>
            </div> */}
            <div className="flex items-center gap-4">
              <div className="p-5 bg-primary rounded-full hover:bg-heading duration-200 cursor-pointer w-8 h-8 flex items-center justify-center">
                <span className="">
                  <Facebook className="w-5 h-5 text-white" />
                </span>
              </div>
              <div className="p-5 bg-primary rounded-full hover:bg-heading duration-200 cursor-pointer w-8 h-8 flex items-center justify-center">
                <span className="">
                  <Linkedin className="w-5 h-5 text-white" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
