"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo/Container.png";
import footerBg from "@/public/footer/footer.png";
import { FaInstagram } from "react-icons/fa";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { CiTwitter } from "react-icons/ci";
import { toast } from "react-toastify";

export default function Footer() {
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
        toast.success("Successfully subscribed!");
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
    <footer className="relative bg-[#111111] text-white py-16">
      <Image
        src={footerBg}
        alt=""
        fill
        className="object-cover opacity-50"
        priority
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 md:justify-items-center">
          {/* Logo & Description */}
          <div className="md:col-span-1 md:justify-self-start">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image
                src={logo}
                alt="Mait Club"
                width={40}
                height={40}
                className=""
              />
              <span className="font-semibold text-lg"><span className="text-[#0F744F]">Mait</span> Club</span>
            </Link>
            <p className="text-[#99A1AF] text-sm mb-6">
              AI-powered video analysis for athletes who want to train smarter and perform better.
            </p>

            {/* Social Links */}
            <div className="mb-4">
              <div className="flex gap-3">
                <Link className="bg-[#101828] p-2 rounded-sm" href={"#"}>
                  <FaInstagram size={22} />
                </Link>
                <Link className="bg-[#101828] p-2 rounded-sm" href={"#"}>
                  <PiYoutubeLogoLight size={22} />
                </Link>
                <Link className="bg-[#101828] p-2 rounded-sm" href={"#"}>
                  <CiTwitter size={22} />
                </Link>
              </div>
            </div>

            {/* Newsletter in footer */}
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-[#1E2939] border border-gray-700 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#0F744F] focus:border-transparent"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-[#0F744F] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#0a5a3d] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "..." : "Join the Waitlist"}
              </button>
            </form>
            {successMessage ? (
              <p className="text-xs text-green-400 font-medium mt-2">
                {successMessage}
              </p>
            ) : (
              <p className="text-xs text-gray-400 mt-2">🔒 We respect your privacy. No spam, ever.</p>
            )}
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1 md:justify-self-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link></li>
              <li><Link href="#sports" className="hover:text-white transition-colors">Supported Sports</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-1 md:justify-self-end">
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>Email: james@maitclub.com</li>
             

            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500 text-sm">
           © {new Date().getFullYear()} Mait Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
