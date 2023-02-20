import styled from "styled-components";
import { links } from "./data";
import { sizes, themes } from "../../utils/variables";
import { useTheme } from "../../utils/provider";
import { H3 } from "../Text/H3";
import { Text } from "../Text/Text";
import { motion } from "framer-motion";

export const ContactCard = ({
  xl,
  lg,
  md,
  sm,
  xsm,
  color,
  initial = { opacity: 0 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { ease: "easeOut", duration: 1 },
}) => {
  return (
    <Cont xl={xl} lg={lg} md={md} sm={sm} xsm={xsm}>
      {links.map((item, i) => {
        return (
          <motion.a
            href={item.url}
            target={item.target}
            key={i}
            initial={initial}
            whileInView={whileInView}
            viewport={viewport}
            transition={{ ease: "easeOut", duration: 1, delay: i / 4 }}
          >
            <Card xl={xl} lg={lg} md={md} sm={sm}>
              <Icon themes={themes}>{item.icon}</Icon>
              <Column>
                <H3 xl={"margin: 0 0 5px 0;"}>{item.head}</H3>
                <Text color={color} all={"width: 170px;"}>
                  {item.text}
                </Text>
              </Column>
            </Card>
          </motion.a>
        );
      })}
    </Cont>
  );
};

const Cont = styled.div`
  display: flex;
  grid-gap: 40px;

  ${(props) => props.all};

  @media (max-width: ${sizes.md}) {
    ${(props) => props.md};
  }
  @media (max-width: ${sizes.sm}) {
    ${(props) => props.sm};
  }
  @media (max-width: ${sizes.xsm}) {
    width: 90vw;
    ${(props) => props.xsm};
  }
`;

const Icon = styled.div`
  min-width: 50px;
  min-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.themes.button};
  color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  transition: 0.2s ease;

  &:hover {
    filter: brightness(120%);
    box-shadow: 0px 4px 10px rgba(255, 255, 255, 0.25);
  }
`;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  cursor: pointer;

  @media (max-width: ${sizes.sm}) {
    justify-content: flex-start;
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin-left: 20px;
`;
