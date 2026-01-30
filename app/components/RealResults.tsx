import { FaQuoteRight } from "react-icons/fa6";

export default function RealResults() {
  const testimonials = [
    {
      nameTag: "M",
      quote: "After just one month on Mait Club I dropped my handicap by 4 shots in a month. I've been playing golf for 20 years and never had this much improvement.",
      name: "John Mitchell",
      sport: "Golf"
    },
    {
      nameTag: "J",
      quote: "I'm finally starting to beat some of my teammates at our social basketball nights, they think I've been getting secret 1 on 1 coaching.",
      name: "Jane Rodriguez",
      sport: "Basketball"
    },
    {
      nameTag: "K",
      quote: "I played my first tournament since joining Mait Club and I have never felt more confident in my technique and play.",
      name: "Marcus Chen",
      sport: "Tennis"
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-0">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Results
          </h2>
          <p className="text-[#282828] max-w-2xl mx-auto text-xl">
            Join athletes who are already improving their game
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl border border-[#D4D4D4] shadow-sm hover:shadow-md transition-shadow space-y-4 relative"
            >
              <div className="absolute top-3 right-3">
                <FaQuoteRight size={25} className="text-[#00786F33]"/>
              </div>
              <div className="bg-[#028479] rounded-full p-3 text-white capitalize size-14 flex justify-center items-center">
                <p className="text-2xl">{testimonial.nameTag}</p>
              </div>

              <p className="text-[#1D1D1D] text-[17px] leading-relaxed">
                {testimonial.quote}
              </p>

              <div className="">
                <p className="font-bold text-[#018278] text-[18px]">{testimonial.name}</p>
                <p className="text-[#0F744F] text-sm">{testimonial.sport}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
