import styled from "styled-components";
import { links } from "./data";
import { sizes, themes } from "../../utils/variables";
import { motion } from "framer-motion";
import { useTheme } from "../../utils/provider";
import { Img } from "components/Img/Img";
import { H3 } from "components/Text/H3";
import { Text } from "components/Text/Text";
import { useState } from "react";
import { Container } from "components/Container/Container";

export const Services = ({
  xl,
  lg,
  md,
  sm,
  initial = { opacity: 0 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
}) => {
  const { theme } = useTheme();
  const [active, setActive] = useState(0);

  return (
    <Cont xl={xl} lg={lg} md={md} sm={sm}>
      {links.map((item, i) => {
        return (
          <Card
            key={i}
            background={themes[theme].primary}
            highlight={themes[theme].highlight}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={{ ease: "easeOut", duration: 0.5 }}
            area={i + 1 === active ? "6fr" : "2fr"}
            height={i + 1 === active ? "none" : "0px"}
            onClick={() => i + 1 === active ? setActive(0) : setActive(i + 1)}
          >
            <Column>
              <Container>
                <Icon className="icon" color={themes[theme].highlight}>{item.image} </Icon>
                <H3 xl={"margin: 0 0 0px 0; text-align: left;"}>{item.head}</H3>
              </Container>

              {i + 1 === active && (
                <Text xl="margin: 20px 0 0 0;" initial={{ opacity: 1 }}>
                  {item.text}
                </Text>
              )}
            </Column>
          </Card>
        );
      })}
    </Cont>
  );
};

const Cont = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 20px;
  width: 100%;
  margin: 0 0 40px 0;

  @media (max-width: ${sizes.lg}) {
  }

  @media (max-width: ${sizes.md}) {
  }

  @media (max-width: ${sizes.sm}) {
    grid-template-columns: 2fr;
  }
`;

const Card = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  transition: 0.2s ease;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  max-height: ${({ height }) => height};
  cursor: pointer;

  &:hover{
    color: white;
    background: ${({ highlight }) => highlight};

    .icon{
      color: white;
    }
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  position: relative;
  text-align: left;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 0 20px 0 0;
  color: ${({ color }) => color};
`;
