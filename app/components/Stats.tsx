export default function Stats() {
  const stats = [
    {
      value: "1000+",
      label: "Athletes Waiting"
    },
    {
      value: "8",
      label: "Sports Supported"
    },
    {
      value: "AI",
      label: "Powered Analysis"
    }
  ];

  return (
    <section className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-3xl md:text-4xl font-bold text-[#0F744F] mb-1">
                {stat.value}
              </div>
              <div className="text-white text-lg">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
