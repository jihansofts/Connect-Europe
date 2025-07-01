"use client";

import Image from "next/image";
import { useInputModel } from "@/context/ModelContext";
import React, { useState } from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus } from "lucide-react";

type ServiceSectionProps = {
  id: string;
  title: string;
  subtitle: string;
  paragraphs: string[];
  expandableContent?: string[]; // New prop for expandable content
  imageSrc: string;
  imageAlt?: string;
  showMoreInfoButton?: boolean;
  reverse?: boolean;
  hideButton?: boolean;
};

const ServiceSection: React.FC<ServiceSectionProps> = ({
  id,
  title,
  subtitle,
  paragraphs,
  expandableContent,
  imageSrc,
  imageAlt = "Service Image",
  showMoreInfoButton = true,
  hideButton = false,
  reverse = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const { openModel } = useInputModel();

  return (
    <section id={id} className="w-full px-6 py-12 md:py-20 max-w-7xl mx-auto">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-16 ${
          reverse ? "lg:[direction:rtl]" : ""
        }`}>
        {/* Text Content */}
        <div className={`${reverse ? "lg:[direction:ltr]" : ""}`}>
          <h4 className="text-lg font-medium text-gray-500">{subtitle}</h4>
          <h2 className="text-4xl font-bold text-heading mb-6">{title}</h2>
          {paragraphs.map((text, i) => (
            <p
              key={i}
              className="text-gray-700 mb-4 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: text }}
            />
          ))}

          {/* Expandable content section */}
          {expandableContent && (
            <div className="mb-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex items-center gap-2 text-primary font-semibold hover:text-heading duration-200 cursor-pointer">
                {isExpanded ? <Minus /> : <Plus />}
                {isExpanded ? "Less" : "More"}
              </button>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden">
                    <div className="pt-4">
                      {expandableContent.map((text, i) => (
                        <p
                          key={i}
                          className="text-gray-700 mb-4 leading-relaxed">
                          {text}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          {/* Buttons */}
          <div className="mt-6 flex flex-wrap gap-4">
            {showMoreInfoButton && (
              <Link
                href="/recruiting"
                className="border-2 border-primary text-primary px-6 py-3 rounded-md font-semibold hover:bg-primary hover:text-white transition-all">
                MORE INFORMATION
              </Link>
            )}

            {
              // Hide the button if hideButton is true
              !hideButton && (
                <button
                  onClick={openModel}
                  className="bg-primary hover:bg-heading cursor-pointer text-white px-6 py-3 rounded-md font-semibold transition-all">
                  {" "}
                  I AM INTERESTED
                </button>
              )
            }
          </div>
        </div>

        {/* Image */}
        <div className="self-start">
          {" "}
          {/* Add self-start here */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
