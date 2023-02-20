import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import { links } from "./data";
import { useTheme } from "utils/provider";
import { sizes, themes } from "utils/variables";
import { Link } from "components/Link/Link";
import ThemeSwitch from "components/Switch/ThemeSwitch";
import { Container } from "components/Container/Container";
import { Button } from "components/Button/Button";
import { Img } from "components/Img/Img";
import useScrollTop from "hooks/useScrollTop";

export const Navbar = ({
  xl,
  lg,
  md,
  sm,
  xs,
  initial = {},
  whileInView = {},
  viewport = {},
  transition = {},
}) => {
  const { theme } = useTheme();
  const [showMenu, setShowMenu] = useState(false);

  const scrollTop = useScrollTop();

  return (
    <Cont
      xl={xl}
      lg={lg}
      md={md}
      sm={sm}
      xs={xs}
      initial={initial}
      whileInView={whileInView}
      viewport={viewport}
      transition={transition}
      background={scrollTop === 0 ? "none" : "rgba(0, 0, 0, 0.5)"}
      color={themes[theme].text}
      boxShadow={showMenu ? "0" : "0px 4px 20px rgba(0, 0, 0, 0.1)"}
    >
      <Link
        href={"/"}
        setShowMenu={setShowMenu}
        xl={"font-size: 20px; font-weight: 500;"}
      >
        <img src="/images/logo.svg" width="200px;"/>
      </Link>
      <Container xl={"align-items: center;"}>
        {links.map((item, i) => {
          return (
            <Link
              key={i}
              href={item.url}
              setShowMenu={setShowMenu}
              xl={"font-size: 16px; font-weight: 500; margin: 0 40px 0 0"}
              sm={"display: none"}
            >
              {item.text}
            </Link>
          );
        })}
        <ThemeSwitch />
        <Button xl={"margin: 0 0 0 40px;"} sm={"display: none"}>
          Contact Us
        </Button>
      </Container>
    </Cont>
  );
};

const Cont = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 3;
  box-sizing: border-box;
  backdrop-filter: blur( 20px );
  -webkit-backdrop-filter: blur( 20px );
  color: white;
  transition: 0.3s ease;
  background: ${({ background }) => background};
  box-shadow: ${({ boxShadow }) => boxShadow};

  ${({ xl }) => xl};

  @media (max-width: ${sizes.lg}) {
    ${({ lg }) => lg};
  }

  @media (max-width: ${sizes.md}) {
    ${({ md }) => md};
  }

  @media (max-width: ${sizes.sm}) {
    ${({ sm }) => sm};
  }

  @media (max-width: ${sizes.xs}) {
    ${({ xs }) => xs};
  }
`;
