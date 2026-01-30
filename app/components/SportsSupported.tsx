import image1 from "@/public/sports/image1.png";
import image2 from "@/public/sports/image2.png";
import image3 from "@/public/sports/image3.png";
import image4 from "@/public/sports/image4.png";
import image5 from "@/public/sports/image5.png";
import image6 from "@/public/sports/image6.png";
import image7 from "@/public/sports/image7.png";
import image8 from "@/public/sports/image8.png";
import Image from "next/image";

export default function SportsSupported() {
  const sports = [
    {
      icon: image4,
      name: "Golf",
      description: "Deep Swing Analysis & Putting Technique"
    },
    {
      icon: image1,
      name: "Basketball",
      description: "Shooting Form, Consistency and Balance"
    },
    {
      icon: image5,
      name: "Football",
      description: "Passing, Shooting, Dribbling and Control Mechanics"
    },
    {
      icon: image8,
      name: "Cricket",
      description: "Serve & ground strokes"
    },
    {
      icon: image7,
      name: "Boxing",
      description: "Offensive & Defensive Reading"
    },
    {
      icon: image2,
      name: "Tennis",
      description: "Track and Field"
    },
    {
      icon: image6,
      name: "Gym",
      description: "Exercise Safety and Properly"
    },
    {
      icon: image3,
      name: "Ice Hockey",
      description: "Agility and Shooting Techniques"
    }
  ];

  return (
    <section id="sports" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sports Supported
          </h2>
          <p className="text-[#282828] max-w-2xl mx-auto text-xl">
            Choose your sport for each upload — the app remembers your last selection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-[#D4D4D4] hover:border-[#0F744F] hover:shadow-lg transition-all group"
            >
              <div className="flex justify-center items-center w-full">
                <Image src={sport.icon} alt={sport.name} className="size-22"/>
              </div>
              <h3 className="font-semibold text-2xl text-gray-900 mb-1 text-center">{sport.name}</h3>
              <p className="text-sm text-[#54575C]  text-center">
                {sport.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-[#141414] text-sm mt-10">
          More sports coming soon — request yours when you join the waitlist!
        </p>
      </div>
    </section>
  );
}
