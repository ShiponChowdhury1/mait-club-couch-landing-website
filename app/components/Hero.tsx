"use client";

import { useState } from "react";
import Image from "next/image";
import hero from "@/public/hero/hero.png";
import bgHero from "@/public/hero/bg-hero.png";
import { toast } from "react-toastify";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SUBSCRIBE_URL!, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        toast.success("🎉 Successfully subscribed!");
        setEmail("");
      } else if (response.status === 400) {
        toast.warning("You are already subscribed!");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch {
      toast.error("Failed to subscribe. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="home" className="py-20 md:mt-24 mt-14 relative overflow-hidden">
      <Image
        src={bgHero}
        alt=""
        fill
        className="object-cover"
        priority
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-0 relative z-100">
        <div className="grid lg:grid-cols-2 gap-12 items-center justify-between min-h-150">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl max-w-lg lg:text-6xl font-bold text-gray-900 leading-tight">
              Mait Club - A Coach in your Pocket
            </h1>
            <p className="text-[28px] text-[#2B2B2B]">
              Master your Swing, Shot or Strike - Without the $100hr price tag
            </p>
            <p className="text-[#6A7282] max-w-md">
              Upload a short video clip and get instant AI-powered feedback along with a personalized training plan.
            </p>

            {/* Email Subscription */}
            <div className="pt-4">
              <p className="text-[28px] font-bold text-[#0F744F] mb-3">Become a Foundation Member</p>
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F744F] focus:border-transparent bg-white"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#0F744F] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#0a5a3d] transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
              <p className="text-xs text-gray-400 mt-2">🔒 We respect your privacy. No spam, ever. Only launch updates and early access info.</p>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <Image
                src={hero}
                alt="Mait Club App"
                width={700}
                height={800}
                className=""
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
