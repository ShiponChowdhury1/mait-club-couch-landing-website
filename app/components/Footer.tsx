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
        <div className="flex flex-col md:flex-row gap-20 md:gap-0 justify-between">
          {/* Logo & Description */}
          <div>
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
                {loading ? "..." : "Subscribe"}
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
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link href="#features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#how-it-works" className="hover:text-white transition-colors">How it Works</Link></li>
              <li><Link href="#sports" className="hover:text-white transition-colors">Supported Sports</Link></li>
            </ul>
          </div>

          {/* App Store Links */}
          <div>
            <div className="space-y-3">
              <a href="#" className="block">
                <div className="bg-black border border-gray-700 rounded-lg px-4 py-2 flex items-center gap-3 hover:bg-gray-900 transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5ZM16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12ZM20.16 10.81C20.5 11.08 20.75 11.5 20.75 12C20.75 12.5 20.53 12.9 20.18 13.18L17.89 14.5L15.39 12L17.89 9.5L20.16 10.81ZM6.05 2.66L16.81 8.88L14.54 11.15L6.05 2.66Z" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-400">GET IT ON</div>
                    <div className="text-sm font-medium">Google Play</div>
                  </div>
                </div>
              </a>
              <a href="#" className="block">
                <div className="bg-black border border-gray-700 rounded-lg px-4 py-2 flex items-center gap-3 hover:bg-gray-900 transition-colors">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09997 22C7.78997 22.05 6.79997 20.68 5.95997 19.47C4.24997 17 2.93997 12.45 4.69997 9.39C5.56997 7.87 7.12997 6.91 8.81997 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                  </svg>
                  <div>
                    <div className="text-xs text-gray-400">Download on the</div>
                    <div className="text-sm font-medium">App Store</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Mait Club. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
