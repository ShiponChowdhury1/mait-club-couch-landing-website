import { BsUpload } from "react-icons/bs";import { FaArrowTrendUp } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";
;
import { IoIosTrendingUp } from "react-icons/io";
import { LuBrain } from "react-icons/lu";

export default function HowItWorks() {
  const steps = [
    {
      icon: <FiUpload />,
      title: "Upload Your Video",
      description: "Record and/or upload a clip of your chosen movement. Our AI instantly begins analysing your mechanics to find your edge."
    },
    {
      icon: <LuBrain />,
      title: "Get AI Score & Feedback",
      description: "Receive an objective performance score and a frame-by-frame breakdown of your technical strengths and hidden flaws."
    },
    {
      icon: <FaArrowTrendUp />,
      title: "Train & Track Progress",
      description: "Receive a custom-built training plan and track your progression as your scores climb toward greater levels."
    }
  ];

  return (
    <section id="how-it-works" className="py-12 md:py-20 bg-[#0F744F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-8 md:mb-16">
          How It Works
        </h2>

        <div className="flex flex-col md:flex-row md:justify-center items-center gap-8 md:gap-24">
          {steps.map((step, index) => (
            <div key={index} className="text-center w-full md:w-64 lg:w-72 relative flex flex-col items-center">
              {/* Connecting line - box theke box porjonto */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[calc(50%+40px)] md:left-[calc(50%+64px)] top-16 h-0.5 w-[calc(100%-80px)] md:w-[calc(100%-48px)] lg:w-[calc(100%-32px)] bg-white z-0"></div>
              )}

              <div className="size-20 md:size-32 text-[#0F744F]  bg-white rounded-2xl flex items-center justify-center mb-4 md:mb-6 shadow-lg relative z-10 text-[50px]">
                {step.icon}
                <p className="absolute bg-white border-2 border-[#0F744F] rounded-full -top-3 size-6 md:size-7 text-xs md:text-sm font-semibold flex items-center justify-center">{index + 1}</p>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-2 md:mb-3">{step.title}</h3>
              <p className="text-white text-[16px] leading-relaxed max-w-xs mx-auto px-4 md:px-0">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}