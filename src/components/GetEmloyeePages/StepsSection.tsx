import React from "react";
import StepItem from "@/common/StepItem";
import {
  PieChart,
  User,
  Users,
  CalendarClock,
  CheckCircle,
  Flag,
} from "lucide-react"; // Or use your icons

const steps = [
  {
    icon: <PieChart />,
    title: "Detailed analysis",
    subtitle: "job position",
  },
  {
    icon: <User />,
    title: "Getting candidates",
    subtitle: "from various sources",
  },
  {
    icon: <Users />,
    title: "Interviews with candidates",
    subtitle: "and verification of references",
  },
  {
    icon: <CalendarClock />,
    title: "Arranging an interview",
    subtitle: "with selected candidates at your place",
  },
  {
    icon: <CheckCircle />,
    title: "Getting feedback",
    subtitle: "on the candidate",
  },
  {
    icon: <Flag />,
    title: "Candidate's entry",
    subtitle: "to the company",
  },
];

export default function StepsSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl text-heading md:text-4xl font-bold text-center mb-12">
          How does it work?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step, i) => (
            <StepItem
              key={i}
              icon={step.icon}
              step={i + 1}
              title={step.title}
              subtitle={step.subtitle}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
