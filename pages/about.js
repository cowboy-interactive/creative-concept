import { useState } from "react";
import { Button } from "components/Button/Button";
import { Card } from "components/Card/Card";
import { Container } from "components/Container/Container";
import { Column } from "components/Container/Column";
import { Section } from "components/Container/Section";
import { Grid } from "components/Grid/Grid";
import { Img } from "components/Img/Img";
import { H1 } from "components/Text/H1";
import { H2 } from "components/Text/H2";
import { H3 } from "components/Text/H3";
import { Text } from "components/Text/Text";
import useScrollTop from "hooks/useScrollTop";
import useWindowSize from "hooks/useWindowSize";
import dynamic from "next/dynamic";
import { Hero } from "components/Container/Hero";
import { Plans } from "components/Plans/Plans";
import { Footer } from "components/Footer/Footer";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Gallery } from "components/Gallery/Gallery";
import { Testimonials } from "components/Testimonials/Testimonials";
import { themes } from "utils/variables";
import { useTheme } from "utils/provider";
const Scene = dynamic(() => import("components/Scene"), { ssr: true });

export default function Home() {
  const scrollTop = useScrollTop();
  const windowSize = useWindowSize();
  const [position] = useState({ x: 0, y: 0 });

  const { theme } = useTheme();

  return (
    <>
      <Section
        xl="align-items: center; margin: 200px 0 20px 0;"
        sm="flex-direction: column;"
      >
        <Column
          xl="margin: 0 60px 0 0; width: 50%;"
          sm="width: 100%; margin: 0 0 60px 0;"
        >
          <H2>About Our Company</H2>
          <Text xl="margin: 0;">
            At Creative Concept Media, we believe that building a strong network
            of individuals is essential for success in the digital age. That's
            why we connect individuals so they can collaborate and grow
            together. Whether you're an entrepreneur, marketer, content creator,
            or just looking to expand your network, we welcome you to join us
            and become a part of our growing community of individuals striving
            for success.
            <br />
            <br />
            Our aim is to provide a platform where like-minded individuals can
            come together, share their ideas, and support each other in their
            personal and professional growth. Through our network, individuals
            can connect with others in their industry or niche, gain insights
            and knowledge from industry experts, and access valuable resources
            that can help them achieve their goals.
            <br />
            <br />
            We understand the power of collaboration and believe that by working
            together, we can achieve greater things. By building a community of
            individuals who share similar goals and values, we hope to create a
            supportive and empowering environment that fosters growth,
            innovation, and success.
          </Text>
        </Column>
        <Column xl="width: 50%;" sm="align-items: center; width: 100%;">
          <Img src="/images/about-1.png" />
        </Column>
      </Section>

      <Section>
        <ContactForm />
      </Section>
      <Footer />
    </>
  );
}
