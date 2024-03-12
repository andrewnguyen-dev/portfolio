import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

const ContactFormEmail = ({
  message,
  senderEmail,
}: {
  message: string;
  senderEmail: string;
}) => {
  return (
    <Html>
      <Head />
      <Preview>New message from your porfolio site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight text-lg">
                You received the following message from the Contact Form on your Portfolio Site
              </Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>The sender email is {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
