import styled from "styled-components";
import { links } from "./data";
import { sizes, themes } from "../../utils/variables";
import { motion } from "framer-motion";
import { useTheme } from "../../utils/provider";
import { Img } from "components/Img/Img";
import { H3 } from "components/Text/H3";
import { Text } from "components/Text/Text";

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
  return (
    <Cont xl={xl} lg={lg} md={md} sm={sm}>
      {links.map((item, i) => {
        return (
          <Card
            key={i}
            background={themes[theme].primary}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={{ ease: "easeOut", duration: 0.5 }}
          >
            <Icon>{item.image} </Icon>
            {/* <Img src={item.image} alt={item.head} xl={"margin: 0 0 20px 0;"} /> */}
            <Column>
              <H3 xl={"margin: 0 0 20px 0; text-align: center;"}>
                {item.head}
              </H3>
              <Text initial={{opacity: 1}}>{item.text}</Text>
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

  @media (max-width: ${sizes.sm}) {
    grid-template-columns: 2fr;
  }
`;

const Card = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border-radius: 15px;
  overflow: hidden;
  transition: 0.2s ease;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(50px);
  padding: 20px;
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 100;
  text-align: left;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  margin: 0 0 20px 0;
`;
