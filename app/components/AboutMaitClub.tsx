import Image from "next/image";

export default function AboutMaitClub() {
  return (
    <section className="py-20 bg-[#0F744F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About Mait Club
          </h2>
          <p className="text-white max-w-2xl mx-auto text-xl">
            Because great coaching should feel personal, not overpriced.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed md:text-[28px] text-lg">
              {`We started Mait Club because we were fed up with paying hundreds for coaching that felt impersonal and overpriced. There’s nothing worse than a lesson with someone who doesn't know your game 'from a bar of soap.' You deserve better. Our mission is to give every athlete a dedicated 'coach in your pocket.' Mait Club doesn't just analyse; it remembers. It tracks your progress over time, knows your game inside and out, and helps you improve every day without breaking the bank.`}
            </p>
          </div>

          {/* Right Content - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/about/about.png"
                alt="Golf coaching"
                width={579}
                height={576}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
