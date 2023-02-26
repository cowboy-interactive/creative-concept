import styled from "styled-components";
import Link from "next/link";
import { links } from "./data";
import { sizes, themes } from "../../utils/variables";
import { H3 } from "../Text/H3";
import { Text } from "../Text/Text";
import { motion } from "framer-motion";
import { useTheme } from "../../utils/provider";

export const Plans = ({
  all,
  large,
  medium,
  small,
  initial = { opacity: 0 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { ease: "ease", duration: 0.5 },
}) => {
  const { theme } = useTheme();

  return (
    <Cont all={all} large={large} medium={medium} small={small}>
      <Grid>
        {links.map((item, i) => {
          return (
            <Card
              key={i}
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
              transition={{ ease: "linear", duration: 0.5 }}
              all={all}
              large={large}
              medium={medium}
              small={small}
              background={
                item.style === "fill"
                  ? themes[theme].button
                  : themes[theme].primary
              }
              border={"none"}
            >
              <H3
                xl={`text-align: center; margin: 0 0 20px 0; color: ${
                  item.style === "fill" ? "white" : themes[theme].secondary
                }`}
              >
                {item.head}
              </H3>
              <Column>
                {item.text ? (
                  <>
                    <Text xl="margin: 0;"> {item.text}</Text>
                  </>
                ) : (
                  <></>
                )}

                <List>
                  {item.list.map((listItem, key) => {
                    return (
                      <ListItem
                        key={key}
                        color={
                          item.style === "fill"
                            ? "white"
                            : themes[theme].secondary
                        }
                      >
                        <Icon color={ item.style === "fill" ? "white" : themes[theme].highlight}>
                          {listItem.icon}
                        </Icon>
                        <Text xl="margin: 0;">{listItem.head}</Text>
                      </ListItem>
                    );
                  })}
                </List>
              </Column>
            </Card>
          );
        })}
      </Grid>
    </Cont>
  );
};

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  text-align: center;

  @media (max-width: ${sizes.xs}) {
    text-align: left;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  grid-gap: 20px;
  width: 100%;
  justify-items: center;
  margin: 0 0 40px 0;

  @media (max-width: ${sizes.sm}) {
    grid-template-columns: 2fr;
    grid-gap: 40px;
  }
`;

const Card = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 15px;
  flex-direction: column;
  transition: 0.2s ease;
  width: 100%;
  max-width: 600px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  border: 2px solid ${({ border }) => border};
  @media (max-width: ${sizes.sm}) {
    justify-content: flex-start;
    align-items: flex-start;
    width: 80%;
    min-height: 0px;
    max-width: 500px;
  }
`;

const Column = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
  z-index: 0;

  @media (max-width: ${sizes.sm}) {
    justify-content: flex-start;
    align-items: center;
  }

  @media (max-width: ${sizes.xs}) {
    justify-content: flex-start;
    align-items: flex-start;
    text-align: left;
    width: 80%;
  }
`;

const Head = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: ${({ color }) => color};
`;

const Price = styled.div`
  font-weight: 700;
  font-size: 36px;
  justify-content: flex-end;
  align-items: center;
  display: flex;
  margin-bottom: 20px;
  color: ${({ color }) => color};
  white-space: nowrap;
`;

const List = styled.div`
  font-weight: 00;
  font-size: 36px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  display: flex;
  width: 100%;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ color }) => color};
  border-radius: 5px;
  transition: 0.2s ease;
  margin: 0 20px 0 0;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  align-items: center;
  width: 100%;
  margin: 0 0 20px 0;
  color: ${({ color }) => color};

  @media (max-width: ${sizes.xs}) {
    flex-direction: row;
  }
`;
