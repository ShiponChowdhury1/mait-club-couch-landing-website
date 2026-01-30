import { Award } from "lucide-react";
import { FiUsers } from "react-icons/fi";
import { IoBarChartOutline } from "react-icons/io5";
import { LuTarget, LuVideo } from "react-icons/lu";
import { SlEnergy } from "react-icons/sl";

export default function KeyFeatures() {
  const features = [
    {
      icon: Award,
      title: "AI Performance Score",
      description: "Get an instant, pro-grade performance score out of 100 every time you train, giving you a clear benchmark for your progress."
    },
    {
      icon: SlEnergy,
      title: "Frame-by-Frame Analysis",
      description: "Our AI dissects your movement frame by frame, pinpointing the microscopic flaws in your mechanics that the human eye misses. It's like having a high speed lab in your pocket."
    },
    {
      icon: LuTarget,
      title: "Personalized Training Plan",
      description: "No more generic YouTube tutorials. Mait Club builds a dynamic training plan specifically for your sport, serving up the exact drills you need to turn your biggest weaknesses into your greatest strengths."
    },
    {
      icon: IoBarChartOutline,
      title: "Weekly Progress Tracking",
      description: "Watch your improvement from session to session. Track your 'first attempts', monitor your rising averages, and see exactly how you did the work than you were last month."
    },
    {
      icon: LuVideo,
      title: "Instant Video Access",
      description: "Never lose a breakthrough moment again. Instantly access your full library of past performances to see how far you've come and stay connected to your progress wherever you go."
    },
    {
      icon: FiUsers,
      title: "Compare Performance",
      description: "Overlay your video directly against a professional's to see exactly where your angles, timing, and efficiency differ. It's the ultimate visual roadmap to elite technique."
    }
  ];

  return (
    <section id="features" className="py-20 bg-radial-[at_5%_5%] to-white via-white from-[#e4f3f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Key Features
          </h2>
          <p className="text-[#282828] max-w-2xl mx-auto text-xl">
            Everything you need to take your athletic performance to the next level
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-[14px] border border-[#D5D5D5] hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-[#00786F1A] rounded-xl flex items-center justify-center mb-4">
                <feature.icon className="text-[#0F744F]" size={24} />
              </div>
              <h3 className="text-[20px] font-bold text-black mb-2">
                {feature.title}
              </h3>
              <p className="text-[#282828] text-[16px] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
