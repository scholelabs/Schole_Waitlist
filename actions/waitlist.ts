"use server"
import { WaitlistEmailTemplate } from "@/components/email-templates/waitlist";
import prisma from "@/lib/prisma"
import { faker } from "@faker-js/faker";
import { Resend } from "resend";


const resend = new Resend("re_d3hvTxy4_3C41SX4qWtP2tb7X6xXiEtcU");


export const joinWaitlist = async (email: string) => {
  try {
    await prisma.waitlist.create({
      data: {
        email: email,
        phone: faker.phone.number(),
        name: faker.person.fullName(),
        school: faker.company.name(),
      },
    });
    const { data, error } = await resend.emails.send({
      from: "Schole Labs <info@scholelabs.com>",
      to: email,
      subject: "Get ready for something exciting",
      react: WaitlistEmailTemplate()
    });
    if (error) {
      throw error;
    }
    console.log(data);
  } catch (error) {
   throw error;
  }
};