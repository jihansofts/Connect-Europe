import React from "react";
import { Linkedin, Mail } from "lucide-react";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  email: string;
  twitter: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Miroslav Lichy",
    role: "Managing Partner",
    image: "/images/team1.jpg",
    linkedin: "#",
    email: "#",
    twitter: "#",
  },
  {
    name: "Miriam Kypelárová",
    role: "Managing Director | Head of Consulting",
    image: "/images/team2.jpg",
    linkedin: "#",
    email: "#",
    twitter: "#",
  },
  {
    name: "Marcela Mihalčeková",
    role: "Client Partner | Senior Recruiter",
    image: "/images/team3.jpg",
    linkedin: "#",
    email: "#",
    twitter: "#",
  },
  {
    name: "Petr Mihalčeková",
    role: "Client Partner | Senior Recruiter",
    image: "/images/team4.jpg",
    linkedin: "#",
    email: "#",
    twitter: "#",
  },
  {
    name: "Petr Mihalčeková",
    role: "Client Partner | Senior Recruiter",
    image: "/images/team5.jpg",
    linkedin: "#",
    email: "#",
    twitter: "#",
  },
  {
    name: "Petr Mihalčeková",
    role: "Client Partner | Senior Recruiter",
    image: "/images/team6.jpg",
    linkedin: "#",
    email: "#",
    twitter: "#",
  },
];

export default function Team() {
  return (
    <section className="bg-white py-20 px-5">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-[48px] font-bold text-center text-heading font-sans">
          Read more about our colleagues
        </h1>
        <p className="text-gray-600 font-normal text-start mt-5 font-sans text-[16px]">
          Expertise is the fundamental pillar on which our company stands and
          also what our partners can rely on 100%. Expertise is what we pride
          ourselves on and continually develop in our consultants.
        </p>
      </div>
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mt-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              {/* Team Member Image with hover effect */}
              <div className="relative h-[400px]">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-all cursor-pointer duration-500 group-hover:opacity-100 "
                />

                {/* Overlay with social icons */}
                <div className="absolute inset-0  bg-opacity-75 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 group-hover:bg-black/50 ">
                  <div className="flex absolute bottom-0">
                    <a href={member.linkedin} className="text-white  p-3 ">
                      <Linkedin size={20} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-white  p-3 ">
                      <Mail />
                    </a>
                  </div>
                </div>
              </div>

              {/* Team Member Info */}
              <div className="bg-white p-6 text-center">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-600 mt-2">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
