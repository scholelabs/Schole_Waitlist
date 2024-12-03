import React from "react";

import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
  FaLinkedin,
} from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

export const WaitlistEmailTemplate = () => {
  const steps = [
    {
      icon: (
        <Image
          src="/mail.png"
          alt="Mail Icon"
          width={80} height={80}
        />
      ),
      text: "Keep an eye on your inbox! Your early access invitation is coming soon.",
      bgColor: "bg-purple-100",
    },
    {
      icon: (
        <Image
          src="/gift.png"
          alt="Gift Icon"
          width={80} height={80}
        />
      ),
      text: "Exclusive perks await our early adopters (hint: you’re one of them!).",
      bgColor: "bg-pink-100",
    },
    {
      icon: (
        <Image
          src="/rocket.png" 
          alt="Rocket Icon"
          width={80} height={80}
        />
      ),
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
    <div className="bg-[#EAF0F3] min-h-screen flex items-center justify-center">
      <div className="max-w-lg w-full rounded-lg p-8 text-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-blue-100">
            <Image
              src="/logo-image.png"
              alt="Schole App Logo"
              width={40}
              height={40}
            />
          </div>

          <h1 className="text-xl text-black font-normal mb-2">
            Hi <span className="text-black font-bold">Joke</span>,
          </h1>
          <p className="font-normal text-[#000000] text-[27px]">
            You’re on the List 🚀
          </p>
          <p className="text-sm text-[#5E5E5E] mt-1">
            Get Ready for Something Exciting
          </p>
        </div>

        <div className="text-left mt-6 shadow-xl rounded-xl p-8 bg-white w-full">
          <p className="text-[#292929] leading-[20px] text-center text-[24px">
            We’re thrilled to welcome you to the Schole App community! 🎉
          </p>
          <p className="text-[#292929] leading-[20px] mt-3 text-center mb-3">
            By signing up for our waitlist, you’ve taken the first step toward
            transforming how schools manage their records. Schole App is more
            than just a filing system, it’s your school’s new best friend for
            simplifying documentation, saving time, and staying organized.
          </p>
          <p className="text-center text-[#292929]">Here’s what’s next:</p>

          <div className="mt-6 space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start">
                <div
                  className={` flex items-center justify-center ${step.bgColor} rounded-full`}
                >
                  {step.icon}
                </div>
                <p className="ml-5 text-[#292929] font-inter">{step.text}</p>
              </div>
            ))}
          </div>

         <div className=" flex flex-col items-center justify-center gap-7">
         <p className="text-gray-700 mt-6 text-center">
            We’re counting down the days until we can share Schole App with you!
          </p>

          <button className="bg-[#41EEEE] text-[#000000] text-xs font-normal w-[200px] px-4 py-2 rounded-full mx-auto">Learn more about Schole App </button>

          <p className="text-[#292929] text-sm text-center">
            Thank you for being part of this journey. If you have any questions
            or ideas to share, we’d love to hear from you.
          </p>
         </div>
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
          <p className="text-[#000000 font-normal]">Copyright © 2024</p>
          <p className="font-bold my-2 text-[#000000]">Schole Labs Limited</p>
        </footer>
      </div>
    </div>
  );
};

export default WaitlistEmailTemplate;
