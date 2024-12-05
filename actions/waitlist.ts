"use server"
import { WaitlistEmailTemplate } from "@/components/email-templates/waitlist";
import prisma from "@/lib/prisma"
import { Resend } from "resend";


const resend = new Resend("re_d3hvTxy4_3C41SX4qWtP2tb7X6xXiEtcU");

export interface WaitlistPayload {
  email: string;
  phone: string;
  name: string;
  school: string;
}

export const joinWaitlist = async (payload: WaitlistPayload) => {
  try {
    await prisma.waitlist.create({
      data: payload,
    });
    const { data, error } = await resend.emails.send({
      from: "Schole Labs <info@scholelabs.com>",
      to: payload.email,
      subject: "Get ready for something exciting",
      react: WaitlistEmailTemplate({recipientName: payload.name}),
    });
    if (error) {
      throw error;
    }
  } catch (error) {
    throw error;
  }
};