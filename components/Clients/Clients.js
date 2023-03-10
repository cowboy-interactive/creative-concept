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

export const Clients = ({
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
            height={i + 1 === active ? "none" : "none"}
            href={item.url}
            target="_blank"
          >
          
            
                <Img src={item.image}/>

         


          </Card>
        );
      })}
    </Cont>
  );
};

const Cont = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr 2fr;
  grid-gap: 20px;
  width: 100%;
  margin: 0 0 40px 0;

  @media (max-width: ${sizes.lg}) {
  }

  @media (max-width: ${sizes.md}) {
  }

  @media (max-width: ${sizes.xs}) {
    grid-template-columns: 2fr 2fr;
  }
`;

const Card = styled(motion.a)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  transition: 0.2s ease;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 0px;
  max-height: ${({ height }) => height};
  cursor: pointer;

  &:hover {
    filter: brightness(110%);
    box-shadow: 0px 4px 20px rgba(255, 255, 255, 0.25);
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
