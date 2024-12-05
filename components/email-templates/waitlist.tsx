import * as React from "react";
import {
  Body,
  Container,
  Head,
  Html,
  Img,
  Link,
  Section,
  Text,
  Row,
  Column,
} from "@react-email/components";

function getImageUrl(path: string) {
  // In Next.js, use the full site URL
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";
  return `${baseUrl}${path}`;
}

interface WaitlistEmailProps {
  recipientName?: string;
}

export const WaitlistEmailTemplate: React.FC<WaitlistEmailProps> = ({
  recipientName = "Joke",
}) => {
  const steps = [
    {
      icon: getImageUrl("/mail.png"),
      text: "Keep an eye on your inbox! Your early access invitation is coming soon.",
      bgColor: "#F3E8FF", // Equivalent to bg-purple-100
    },
    {
      icon: getImageUrl("/gift.png"),
      text: "Exclusive perks await our early adopters (hint: you're one of them!).",
      bgColor: "#FFF1F2", // Equivalent to bg-pink-100
    },
    {
      icon: "/rocket.png",
      text: "Be among the first to experience a smarter way to manage school operations.",
      bgColor: "#DBEAFE", // Equivalent to bg-blue-100
    },
  ];

  const socialLinks = [
    { name: "X", icon: "x-logo.png", url: "#" },
    { name: "Instagram", icon: "instagram-logo.png", url: "#" },
    { name: "Facebook", icon: "facebook-logo.png", url: "#" },
    { name: "YouTube", icon: "youtube-logo.png", url: "#" },
    { name: "LinkedIn", icon: "linkedin-logo.png", url: "#" },
  ];

  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <style>
          {`
          body {
            font-family: 'Inter', sans-serif;
          }
        `}
        </style>
      </Head>
      <Body
        style={{
          backgroundColor: "#EAF0F3",
          fontFamily: "'Inter', sans-serif",
        }}
      >
        <Container className="!p-[40px] bg-[#EAF0F3] max-w-[650px] mx-auto">
          {/* Logo Section */}
          <Section className="text-center mb-5">
            <Img
              src={getImageUrl("/logo-image.png")}
              alt="Schole App Logo"
              width={80}
              height={80}
              style={{ margin: "0 auto" }}
            />
          </Section>

          <Section
            style={{
              textAlign: "center",
            }}
          >
            <Text className="!text-[32px] !mb-4 !text-black">
              Hi <span style={{ fontWeight: "bold" }}>{recipientName}</span>,
            </Text>

            <Text
              style={{
                fontSize: "27px",
                color: "#000000",
                textAlign: "center",
                margin: "0 0 10px 0",
              }}
            >
              You're on the List 🚀
            </Text>
            <Text
              style={{
                fontSize: "14px",
                color: "#5E5E5E",
                textAlign: "center",
                margin: "0 0 20px 0",
              }}
            >
              Get Ready for Something Exciting
            </Text>
          </Section>

          {/* Main Content */}
          <Section
            style={{
              backgroundColor: "white",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            <Text
              style={{
                color: "#292929",
                textAlign: "center",
                fontWeight: "400",
                lineHeight: "1.6",
                margin: "34px 0 15px 0",
                fontSize: "15px",
                padding: "0 20px",
              }}
            >
              We're thrilled to welcome you to the Schole App community! 🎉
            </Text>

            <Text
              style={{
                color: "#292929",
                textAlign: "center",
                fontWeight: 400,
                lineHeight: "1.6",
                margin: "0 0 20px 0",
                fontSize: "15px",
                padding: "0 20px",
              }}
            >
              By signing up for our waitlist, you've taken the first step toward
              transforming how schools manage their records. Schole App is more
              than just a filing system, it's your school's new best friend for
              simplifying documentation, saving time, and staying organized.
            </Text>

            <Text
              style={{
                color: "#292929",
                textAlign: "center",
                fontWeight: 400,
                margin: "24px 0 0 0",
                fontSize: "15px",
                padding: "10px 0 30px 0",
              }}
            >
              Here's what's next:
            </Text>

            {/* Steps */}
            {steps.map((step, index) => (
              <Row
                key={index}
                style={{
                  marginBottom: "32px",
                  alignItems: "center",
                  padding: "0 20px",
                }}
              >
                <Column
                  width={80}
                  style={{ textAlign: "center", paddingLeft: "30px" }}
                >
                  <Img
                    src={step.icon}
                    alt={`Step ${index + 1}`}
                    width={100}
                    height={100}
                    style={{
                      borderRadius: "50%",
                      height: "100px!important",
                      width: "100px!important",
                    }}
                  />
                </Column>
                <Column>
                  <Text
                    style={{
                      color: "#292929",
                      margin: 0,
                      padding: "0 30px 0 20px",
                      fontSize: "15px",
                    }}
                  >
                    {step.text}
                  </Text>
                </Column>
              </Row>
            ))}

            <Text
              style={{
                color: "#292929",
                textAlign: "center",
                fontSize: "15px",
                margin: "40px 0 10px 0",
              }}
            >
              We're counting down the days until we can share Schole App with
              you!
            </Text>

            <Text
              style={{
                color: "#292929",
                textAlign: "center",
                fontSize: "15px",
                margin: "40px 20px 30px",
              }}
            >
              Thank you for being part of this journey. If you have any
              questions or ideas to share, we'd love to hear from you.
            </Text>
          </Section>

          {/* Closing Messages */}
          <Section style={{ textAlign: "center", marginTop: "20px" }}></Section>

          {/* Social Links */}
          <Section style={{ textAlign: "center", marginTop: "20px" }}>
            {socialLinks.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                style={{
                  margin: "0 10px",
                  display: "inline-block",
                  textDecoration: "none",
                }}
              >
                <Img src={link.icon} alt={link.name} width={24} height={24} />
              </Link>
            ))}
          </Section>

          {/* Footer */}
          <Section
            style={{ textAlign: "center", marginTop: "20px", color: "#292929" }}
          >
            <Text style={{ margin: 0, fontSize: "12px" }}>
              Copyright © {new Date().getFullYear()}
            </Text>
            <Text
              style={{
                margin: "5px 0",
                fontWeight: "bold",
                fontSize: "14px",
                color: "#292929",
              }}
            >
              Schole Labs Limited
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default WaitlistEmailTemplate;
