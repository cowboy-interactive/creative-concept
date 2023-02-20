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
import styled from "styled-components";
import { motion, useScroll, useTransform } from "framer-motion";

import dynamic from "next/dynamic";
import { Hero } from "components/Container/Hero";
import { Plans } from "components/Plans/Plans";
import { Footer } from "components/Footer/Footer";
import { Slider } from "components/Slider/Slider";
import Image from "next/image";
import { ContactForm } from "components/ContactForm/ContactForm";
import { Gallery } from "components/Gallery/Gallery";
const Scene = dynamic(() => import("components/Scene"), { ssr: true });

export default function Home() {
  const scrollTop = useScrollTop();
  const windowSize = useWindowSize();
  const [position] = useState({ x: 0, y: 0 });

  return (
    <>
      <Hero>
        <H1 xl="max-width: 600px; text-align: center; margin: 0 0 40px 0;">
          Digital Marketing Made Simple
        </H1>

        <Button xl="color: white;">Get a Free Quote</Button>
      </Hero>

      <Section xl="margin: 200px 0 300px 0;" sm="flex-direction: column;">
        <Column
          xl="margin: 0 40px 0 0; width: 50%;"
          sm="align-items: center; width: 100%; margin: 0 0 60px 0;"
        >
          <H2>
            Digital Marketing, Social Media Managment, Photography, Content
            Creation
          </H2>
          <Text>
            Since 2016, Mach Media has been helping small businesses establish a
            larger digital footprint. We live in a world of technology, BE
            ONLINE! BE PRESENT!! We are a Calgary based digital advertising
            agency. Our goal is to help small businesses grow their social media
            presence by managing their digital platforms. We produce results!
          </Text>
          <Button>Learn More</Button>
        </Column>
        <Column xl="width: 50%;" sm="align-items: center; width: 100%;">
          <Img
            src="/images/about-1.png"
            xl={`position: absolute; width: 500px; right: -200px; z-index: 1; top: -100px`}
            md="position: relative; width: 100%; left: 0; top: 0px; margin: 0 0 20px 0;"
          />
          <Img
            src="/images/about-2.png"
            xl="position: absolute; width: 500px; left: 0; top: 200px;"
            md="position: relative; width: 100%; left: 0; top: 0px; margin: 0 0 20px 0;"
          />
        </Column>
      </Section>
      <Section xl="padding: 0 10%; flex-direction: column; align-items: center; text-align: center;">
        <Column xl="max-width: 600px;">
          <H2>
            Digital Marketing, Social Media Managment, Photography, Content
            Creation
          </H2>
          <Text>
            Since 2016, Mach Media has been helping small businesses establish a
            larger digital footprint. We live in a world of technology, BE
            ONLINE! BE PRESENT!! We are a Calgary based digital advertising
            agency. Our goal is to help small businesses grow their social media
            presence by managing their digital platforms. We produce results!
          </Text>
        </Column>

        <Plans />
        <Button>Geta Quote</Button>
      </Section>

      <Section xl="padding: 0 5%; flex-direction: column; align-items: center; text-align: center;">
        <Column xl="max-width: 600px;">
          <H2>
            Digital Marketing, Social Media Managment, Photography, Content
            Creation
          </H2>
          <Text>
            Since 2016, Mach Media has been helping small businesses establish a
            larger digital footprint. We live in a world of technology, BE
            ONLINE! BE PRESENT!! We are a Calgary based digital advertising
            agency. Our goal is to help small businesses grow their social media
            presence by managing their digital platforms. We produce results!
          </Text>
        </Column>
        <Gallery />

        <Button xl="margin: 60px 0 0 0;">See More</Button>
      </Section>

      <Section>
        <ContactForm />
      </Section>
      <Footer />
    </>
  );
}
