import { useState } from "react";
import { Button } from "components/Button/Button";
import { Column } from "components/Container/Column";
import { Section } from "components/Container/Section";
import { Img } from "components/Img/Img";
import { H1 } from "components/Text/H1";
import { H2 } from "components/Text/H2";
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
import { links } from "components/Gallery/home";
import { Services } from "components/Services/Services";
import Head from "next/head";
import { Clients } from "components/Clients/Clients";
const Scene = dynamic(() => import("components/Scene"), { ssr: true });

export default function Home() {
  const scrollTop = useScrollTop();
  const windowSize = useWindowSize();
  const [position] = useState({ x: 0, y: 0 });

  const { theme } = useTheme();

  return (
    <main>
      <Hero>
        <H1 xl="max-width: 600px; text-align: center; margin: 0 0 40px 0;">
          Personalized digital marketing for your business
        </H1>
        <Text xl="font-weight: 500; max-width: 600px; text-align: center;">
          We provide personalized content creation, social media management, and
          website services for your unique brand. Let’s Connect and Build your
          Unique Brand Together.
        </Text>

        <Button xl="color: white;" href="/contact">
          Get a Free Quote
        </Button>
      </Hero>

      <Section xl="margin: 200px 0 300px 0;" sm="flex-direction: column;">
        <Column
          xl="margin: 0 40px 0 0; width: 50%;"
          sm="align-items: center; width: 100%; margin: 0 0 60px 0;"
          xs="align-items: flex-start;"
        >
          <H2>Why Digital marketing?</H2>
          <Text>
            Digital marketing is essential for any business looking to succeed
            in today's digital age with the rise of the internet and the
            proliferation of digital devices. Digital marketing helps increase
            brand awareness, increase traffic, and increase leads. Digital
            marketing provides a level of targeting and personalization. We are
            a Calgary based social media agency and our goal is to help build a
            brand and share who you are as a business with the world. Let’s go
            on this journey together!
          </Text>
          <Button href="/about">Learn More</Button>
        </Column>
        <Column xl="width: 50%;" sm="align-items: center; width: 100%;">
          <Img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            src="/gallery/gallery-9.jpg"
            xl={`position: absolute; width: 500px; right: -200px; z-index: 1; top: -100px; max-width: 700px;`}
            md="position: relative; width: 100%; left: 0; top: 0px; margin: 0 0 20px 0;"
          />
          <Img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeOut", duration: 0.5 }}
            src="/gallery/gallery-1.jpg"
            xl="position: absolute; width: 500px; left: 0; top: 200px; max-width: 700px;"
            md="position: relative; width: 100%; left: 0; top: 0px; margin: 0 0 20px 0;"
          />
        </Column>
      </Section>

      <Section
        xl="padding: 0 20%; flex-direction: column; align-items: center; text-align: center;"
        lg="padding: 0 10%;"
      >
        <Column xl="max-width: 500px; justify-conte0nt: center;">
          <H2 xl="justify-content: center;">Services</H2>
          <Text>
            Offering comprehensive digital solutions to grow your brand. From content creation to
            web design we've
            got you covered.
          </Text>
        </Column>

        <Services />
        <Button href="/contact">Get a Free Quote</Button>
      </Section>

      <Section xl={`padding: 100px 20%; flex-direction: column; align-items: center; text-align: center; background:${themes[theme].button}; color: white;`} md={`padding: 100px 5%;`}>
        <Column xl="max-width: 450px;">
          <H2 xl="justify-content: center;   margin: 0 0 40px 0;">Our Clients</H2>
        </Column>
        <Clients />
      </Section>

      <Section xl="padding: 0 5%; flex-direction: column; align-items: center; text-align: center;">
        <H2>Portofolio</H2>
        <Text xl="max-width: 400px;">
          Take a look at some of the work I have done for clients and on my own
          time over the years
        </Text>

        <Gallery links={links} />

        <Button xl="margin: 60px 0 0 0;" href="/portfolio">
          See More
        </Button>
      </Section>



      <Section xl="padding: 0 20%; flex-direction: column; align-items: center; text-align: center;">
        <Column xl="max-width: 450px;">
          <H2 xl="justify-content: center;">Packages</H2>
          <Text>
            There’s a package for everyone. Choose the right package for you and
            let’s go on this journey together!
          </Text>
        </Column>

        <Plans />
        <Button href="/contact">Get a Free Quote</Button>
      </Section>



      {/* <Section
        xl={`padding: 100px 20%; flex-direction: column; align-items: center; text-align: center; background: ${themes[theme].button}`}
        md="padding: 100px 20%;"
        sm="padding: 100px 5%;"
      >
        <Column xl="margin: 0 0 60px 0; align-items: center;">
          <H2 xl="color: white;">Testimonials</H2>
          <Text xl="color: white; max-width: 600px;">
            Hear what our clients have to say!
          </Text>
        </Column>
        <Testimonials />
      </Section> */}

      <Section>
        <ContactForm />
      </Section>
      <Footer />
    </main>
  );
}
