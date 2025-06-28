import React from "react";

interface Datatype {
  title: string;
  desc: string;
}
const data: Datatype[] = [
  {
    title: "The origin of TRIGON",
    desc: "The year 2004 marked our entry into the market of consultancy services in the field of human resources management and recruitment agencies. Full of enthusiasm, we developed our academic know-how in this field with new knowledge and started to put it into practice with the first steps. Since then, the trend of continuous professional and personal growth, learning and increasing professionalism is constantly present in our company.",
  },
  {
    title: "Maturing",
    desc: "The year 2008 was marked by two events. The first one was to change the legal form and establish a limited liability company right at the beginning. The second was a less pleasant event, namely the onset of the economic crisis, which was probably the most visible in this segment. We have adapted, we have persevered and we are still here stronger and more capable than ever before.",
  },
  {
    title: "Launch of international recruitment",
    desc: "The year 2010 was marked by the launch of international business and the experience of international recruitment. We have improved our processes, broadened our horizons and know-how and we are still benefiting from it. Our international headhunting division for specialist positions continues to thrive.",
  },
  {
    title: "The largest in the region",
    desc: "Thanks to our efforts, quality services, but mainly based on our results and client satisfaction, we have become the largest recruiting agency in the Banská Bystrica region. Clients have learned that they can rely on us and that is why they remain loyal to us.",
  },
  {
    title: "We are one step closer to you",
    desc: "We have launched a model of external consultants. We have a team of experienced recruiters who can help companies with their recruitment needs thanks to our proven processes and experience. We cover the whole of Slovakia and we can be closer to you, our clients.",
  },
];
export default function Ourway() {
  return (
    <section className=" bg-white py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-heading mb-6">
          Our way of working
        </h1>

        {data.map((item, index) => (
          <div key={index} className="max-w-3xl mx-auto  mt-16">
            <h5 className="text-primary text-2xl font-bold">{item.title}</h5>
            <p className="text-gray-600 text-start mt-3">{item.desc}</p>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto mt-20">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-heading ">
          We are close to you
        </h1>
        <p className="text-gray-600 text-center font-bold mt-3">
          We are a 100% Slovak recruitment agency
        </p>
        <div className="max-w-3xl mx-auto  mt-16">
          <p className="text-gray-600 text-start mt-3">
            Thanks to our network of senior consultants, we serve the whole of
            Slovakia. In addition to the company headquarters in Banská
            Bystrica, we have consultants in Bratislava, Nitra, Trnava, Levice,
            Ziar nad Hronom, Zvolen and Košice. We have experience in a variety
            of industries and can successfully fill different types of
            positions. We will find you the best candidates in your region.
          </p>
          <p className="text-gray-600 text-start mt-3 mx-auto">
            Your new employees are closer than you think!
          </p>
          <button className="border border-heading text-heading hover:bg-heading hover:text-white hover:border-heading cursor-pointer duration-200 capitalize px-10 py-3 font-semibold rounded font-sans mt-5">
            I need an employee
          </button>
        </div>
      </div>
    </section>
  );
}
