import Image from "next/image";
import { TestimonialCardProps } from "../types/types";

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  companyLogo,
  quote,
  name,
  title,
  positions,
  company,
}) => {
  return (
    <div className="border border-primary rounded-2xl p-6 bg-white shadow-md flex flex-col gap-4 w-full max-w-md sm:max-w-lg lg:max-w-full ">
      <div className="flex flex-col sm:flex-row py-6 sm:py-10 gap-4 sm:gap-0 items-start sm:items-center justify-between">
        <Image
          src={companyLogo}
          alt={`${company} logo`}
          width={100}
          height={20}
          className="h-12 w-32 object-contain"
        />
        <p className="text-sm italic text-gray-500 max-w-full sm:max-w-xs">
          {`"${quote}"`}
        </p>
      </div>

      <div>
        <p className="font-bold text-lg text-primary">{name}</p>
        <p className="font-semibold text-sm">{title}</p>
      </div>

      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
        <p className="text-gray-500 text-sm">
          We have also filled these positions:
        </p>
        <div className="flex flex-wrap gap-2">
          {positions.map((pos, idx) => (
            <span
              key={idx}
              className="bg-green-100 text-primary text-sm px-3 py-1 rounded-full shadow">
              {pos}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
