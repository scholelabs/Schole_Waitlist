import React from "react";
import { FiMail, FiGift } from "react-icons/fi";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

import { IoIosRocket } from "react-icons/io";
import Link from "next/link";
import Image from "next/image";

export const WaitlistEmailTemplate = () => {
  const steps = [
    {
      icon: <FiMail className="w-6 h-6 text-purple-500" />,
      text: "Keep an eye on your inbox! Your early access invitation is coming soon.",
      bgColor: "bg-purple-100",
    },
    {
      icon: <FiGift className="w-6 h-6 text-pink-500" />,
      text: "Exclusive perks await our early adopters (hint: you’re one of them!).",
      bgColor: "bg-pink-100",
    },
    {
      icon: <IoIosRocket className="w-6 h-6 text-blue-500" />,
      text: "Be among the first to experience a smarter way to manage school operations.",
      bgColor: "bg-blue-100",
    },
  ];

  const socialLinks = [
    { name: "X", icon: <FaTwitter className="w-5 h-5" />, url: "#" },
    { name: "Instagram", icon: <FaInstagram className="w-5 h-5" />, url: "#" },
    { name: "Facebook", icon: <FaFacebook className="w-5 h-5" />, url: "#" },
    { name: "YouTube", icon: <FaYoutube className="w-5 h-5" />, url: "#" },
    { name: "LinkedIn", icon: <FaLinkedin className="w-5 h-5" />, url: "#" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full rounded-lg p-8 text-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-blue-100">
            <Image
              src="/waitlistlogo.png"
              alt="Schole App Logo"
              width={40}
              height={40}
            />
          </div>

          <h1 className="text-xl text-black font-normal mb-2">
            Hi <span className="text-black font-bold">Joke</span>,
          </h1>
          <p className="text-lg font-medium text-gray-700">
            You’re on the List 🚀
          </p>
          <p className="text-sm text-gray-600 mt-1">
            Get Ready for Something Exciting
          </p>
        </div>

        <div className="text-left mt-6 shadow-xl rounded-xl p-8 bg-white">
          <p className="text-gray-700 leading-relaxed text-center">
            We’re thrilled to welcome you to the Schole App community! 🎉
          </p>
          <p className="text-gray-700 leading-relaxed mt-3 text-center">
            By signing up for our waitlist, you’ve taken the first step toward
            transforming how schools manage their records. Schole App is more
            than just a filing system, it’s your school’s new best friend for
            simplifying documentation, saving time, and staying organized.
          </p>

          <div className="mt-6 space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div
                  className={`w-8 h-8 flex items-center justify-center ${step.bgColor} text-purple-500 rounded-full`}
                >
                  {step.icon}
                </div>
                <p className="ml-3 text-gray-700">{step.text}</p>
              </div>
            ))}
          </div>

          <p className="text-gray-700 mt-6 text-center">
            We’re counting down the days until we can share Schole App with you!
          </p>

          <p className="text-gray-700 text-sm mt-7 text-center">
            Thank you for being part of this journey. If you have any questions
            or ideas to share, we’d love to hear from you.
          </p>
        </div>

        <footer className="mt-8 text-sm text-gray-500">
          <div className="flex justify-center space-x-4 my-3">
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                className="hover:text-blue-500"
                aria-label={link.name}
              >
                {link.icon}
              </Link>
            ))}
          </div>
          <p>Copyright © 2024 Schole Labs Limited</p>
          <p className="font-bold my-2">Schole Labs Limited</p>
        </footer>
      </div>
    </div>
  );
};

export default WaitlistEmailTemplate;
