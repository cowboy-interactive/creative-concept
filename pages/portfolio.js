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
import { links } from "components/Gallery/portfolio";
const Scene = dynamic(() => import("components/Scene"), { ssr: true });

export default function Home() {
  const scrollTop = useScrollTop();
  const windowSize = useWindowSize();
  const [position] = useState({ x: 0, y: 0 });

  const { theme } = useTheme();

  return (
    <>
      <Section xl="padding: 0 5%; flex-direction: column; align-items: center; text-align: center;">
        <H2>Portofolio</H2>
        <Text xl="max-width: 600px;">
          Take a look at some of the work I have done for clients and on my own
          time over the years
        </Text>
        <Gallery links={links}/>
      </Section>

      <Section>
        <ContactForm />
      </Section>
      <Footer />
    </>
  );
}
