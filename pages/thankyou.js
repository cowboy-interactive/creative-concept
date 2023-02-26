import { themes } from "../utils/variables";
import { useState } from "react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { Container } from "components/Container/Container";
import { Section } from "components/Container/Section";
import { H2 } from "components/Text/H2";
import { Text } from "components/Text/Text";
import { Button } from "components/Button/Button";
import { Footer } from "components/Footer/Footer";
import { Column } from "components/Container/Column";

export default function ThankYou(props) {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");

  const router = useRouter();

  useEffect(() => {
    setName(router.query.name);
    setEmail(router.query.email);
    setWebsite(router.query.website);
    setMessage(router.query.message);
  }, [router.query]);

  return (
    <Column all={"align-items: center"}>
      <Section
        xl={
          "margin: 180px 0 60px 0; min-height: calc(100vh - 550px); align-items: flex-start;"
        }
        sm={"margin: 180px 0 40px 0; align-items: center;"}
      >
        <Column
          sm={"align-items: center; text-align: center; "}
          xs={"align-items: flex-start; text-align: left;"}
        >
          <H2
            initial={{ opacity: 0 }}
            xl="max-width: 1000px;"
            lg="max-width: 700px;"
            xs="max-width: 400px;"
          >
            Thanks for getting in touch{name && ", " + name}.
          </H2>
          <Text
            xl={"margin: 0 0 40px 0; max-width: 5000px;"}
            initial={{ opacity: 0 }}
          >
            We will get back to you as soon as we can{email && " at " + email}!
          </Text>
          <Container
            xl={"flex-direction: row"}
            xs={"flex-direction: column"}
          >
            <Button
              href={"/"}
              xl={`background: ${themes.button}; color: #fff; border: none`}
              initial={{ opacity: 0 }}
            >
              Back to Home
            </Button>
          </Container>
        </Column>
      </Section>
      <Footer/>
    </Column>
  );
}
