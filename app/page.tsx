"use client";
import Image from "next/image";
import { toast } from "@/hooks/use-toast";
import { joinWaitlist } from "@/actions/waitlist";
import { useState } from "react";
import PhoneSvg from "@/components/svgs/PhoneSvg";
import NameSvg from "@/components/svgs/NameSvg";
import SchoolName from "@/components/svgs/SchoolName";

import type {WaitlistPayload} from "@/actions/waitlist";
import { Modal } from "@/components/Modal";
import Spinner from "@/components/Spinner";

export default function Home() {
  const [formDetails, setFormDetails] = useState<WaitlistPayload>({
    email: "",
    phone: "",
    name: "",
    school: "",
  });
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)


  const hasInvalidFields = Object.values(formDetails).some((value) => !value);

  const handleSubmit = () => {
    setLoading(true)
    if (hasInvalidFields) {
      return toast({
        title: "Error",
        description: "Please fill all fields",
        variant: "destructive",
      });
    }

      // const data = {email, phone, school, name}
      joinWaitlist(formDetails)
        .then(() => {
          setFormDetails({
            email: "",
            phone: "",
            name: "",
            school: "",
          });
          setShowModal(true)
          toast({
            title: "Success",
            description: "You have successfully joined the waitlist"
          })
        })
        .catch(() =>
          toast({
            title: "Error",
            description: "An error occurred while joining the waitlist",
            variant: "destructive",
          })
        ).finally(() => setLoading(false))
  
  }

  const updateFormDetails = (key: keyof WaitlistPayload, value: string) => {
    setFormDetails((prev) => ({ ...prev, [key]: value }));
  }

  return (
    <main className="min-h-screen bg-black font-segoe text-white bg-custom-image bg-contain bg-left-bottom md:bg-left-bottom bg-no-repeat flex flex-col justify-between">
      <header className="flex justify-center py-4 mt-8">
        <Image
          src="/waitlistlogo.png"
          width={150}
          height={150}
          className=""
          alt="logo"
        />
      </header>
      <div className="flex flex-col items-center justify-center flex-grow space-y-6">
        <div className="text-center px-4">
          <h2 className="md:text-[32px] font-tttravels text-[2rem] text-[#fff] font-medium">
            A revolutionary new School Management
            <br /> is coming soon.
          </h2>
          <p className="md:mt-2 mt-8 text-[#fff] md:text-[20px] text-[12px]">
            Our engineers are hard at work building the first of its kind
            product for educators and <br /> academic institutions in Africa.
          </p>
          <p className="text-[31px] font-semibold md:text-[80px] mt-8 ">
            Join Our Waitlist
          </p>
          <p className="md:text-[16px] text-[10px]">
            Get to be part of the first to use the app for free.
          </p>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 md:w-1/3 items-center gap-6 mt-10 px-4">
          <div className="flex items-center space-x-2 bg-black  bg-opacity-50 border-white border rounded-md px-4 py-4 w-full max-w-md">
          <span className="text-white"><SchoolName /></span>

            <input
              type="text"
              placeholder="Enter Name Of School"
              className="bg-transparent text-white placeholder-gray- focus:outline-none flex-1"
              value={formDetails.school}
              onChange={(e) => updateFormDetails("school", e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2 bg-black  bg-opacity-50 border-white border rounded-md px-4 py-4 w-full max-w-md">
          <span className="text-white"><NameSvg /></span>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="bg-transparent text-white placeholder-gray- pl focus:outline-none flex-1"
              value={formDetails.name}
              onChange={(e) => updateFormDetails("name", e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2 bg-black  bg-opacity-50 border-white border rounded-md px-4 py-4 w-full max-w-md">
            <span className="text-white"><PhoneSvg /></span>
            <input
              type="number"
              placeholder="Enter your phone number"
              className="bg-transparent text-white placeholder-gray- pl focus:outline-none flex-1"
              value={formDetails.phone}
              onChange={(e) => updateFormDetails("phone", e.target.value)}
            />
          </div>
          <div className="flex items-center space-x-2 bg-black  bg-opacity-50 border-white border rounded-md px-4 py-4 w-full max-w-md">
            <span className="text-white text-[23px]">@</span>
            <input
              type="email"
              placeholder="Enter email address"
              className="bg-transparent text-white placeholder-gray- pl focus:outline-none flex-1"
              value={formDetails.email}
              onChange={(e) => updateFormDetails("email", e.target.value)}
            />
          </div>
        </div>
          <button
            className="bg-teal-400 text-black rounded-full px-8 py-4 disabled:cursor-not-allowed disabled:bg-gray-400"
            disabled={hasInvalidFields}
            onClick={handleSubmit}
          >
            {loading ? <Spinner/> : 'Get Early Invitation'}
          </button>
      </div>
      <footer className="text-center py-4 text-[10px]">
        All Rights Reserved 2024 © Scholẽ.com
      </footer>
      <Modal open={showModal} onOpenChange={setShowModal} />
    </main>
  );
}
