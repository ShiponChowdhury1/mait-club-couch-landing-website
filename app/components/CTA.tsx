"use client";

import { useState } from "react";
import { MdAutoAwesome } from "react-icons/md";
import { toast } from "react-toastify";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setSuccessMessage("");

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
        toast.success("Successfully subscribed! We'll keep you updated.");
        setSuccessMessage("✓ Successfully subscribed! Check your inbox.");
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
    <section id="subscribe" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-50 text-[#0F744F] border border-green-300 px-4 py-2 rounded-full text-sm font-medium mb-8">
          <MdAutoAwesome />
          Limited Early Access
        </div>

        <h2 className="text-4xl md:text-7xl font-bold text-gray-900 mb-4">
          Be the First to Try<br /> Mait Club
        </h2>
        <p className="text-[#141414] mb-8 max-w-lg mx-auto text-[20px]">
          Join our waitlist and get exclusive early access when we launch. Limited spots available.
        </p>

        {/* Email Form */}
        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0F744F] focus:border-transparent"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="bg-[#0F744F] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#0a5a3d] transition-colors whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Subscribing..." : "Join the Waitlist"}
          </button>
        </form>
        {successMessage ? (
          <p className="text-sm text-green-600 font-medium mb-2">
            {successMessage}
          </p>
        ) : (
          <p className="text-sm text-[#141414">
            🔒 We respect your privacy. No spam, ever. Only launch updates and early access info.
          </p>
        )}
      </div>
    </section>
  );
}
