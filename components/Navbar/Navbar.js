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
import Image from "next/image";
import { useRouter } from "next/router";
import { Column } from "components/Container/Column";
import { Menu, X } from "react-feather";

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
  const [showMenu, setShowMenu] = useState(true);

  const scrollTop = useScrollTop();
  const router = useRouter();

  return (
    <>
      <Cont
        xl={xl}
        lg={lg}
        md={md}
        sm={sm}
        xs={xs}
        initial={initial}
        whileInView={whileInView}
        viewport={viewport}
        transition={router.pathname === "/" ? "0.3s ease" : ""}
        background={
          (scrollTop === 0 && router.pathname === "/") || showMenu
            ? "none"
            : "rgba(0, 0, 0, 0.5)"
        }
        color={themes[theme].text}
        boxShadow={showMenu ? "0" : "0px 4px 20px rgba(0, 0, 0, 0.1)"}
      >
        <Link
          href={"/"}
          setShowMenu={setShowMenu}
          xl={
            "font-size: 20px; font-weight: 500; width: 160px; height: 100%; position: relative;"
          }
        >
          <Image alt="logo" src="/images/logo.svg" fill />
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

          <ThemeSwitch xl={"margin: 0 40px 0 0;"} />

          <MobileUI>
            {showMenu ? (
              <X onClick={() => setShowMenu(false)} />
            ) : (
              <Menu onClick={() => setShowMenu(true)} />
            )}
          </MobileUI>

          <Button sm={"display: none"} initial={{ opacity: 1 }} href="/contact">
            Contact Us
          </Button>
        </Container>
      </Cont>

      {showMenu && (
        <MobileMenuUI theme={theme} themes={themes}>
          <Column xl="align-items: center; justify-content: center; height: 100%;">
            {links.map((item, i) => {
              return (
                <>
                  <Link
                    key={i}
                    href={item.url}
                    setShowMenu={setShowMenu}
                    xl={
                      "font-size: 16px; font-weight: 500; margin: 0 0 60px 0;"
                    }
                  >
                    {item.text}
                  </Link>
                </>
              );
            })}
            <Button
              initial={{ opacity: 1 }}
              href="/contact"
              setShowMenu={setShowMenu}
            >
              Contact Us
            </Button>
          </Column>
        </MobileMenuUI>
      )}
    </>
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
  z-index: 1000;
  box-sizing: border-box;
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  color: white;
  transition: ${({ transition }) => transition};
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

const MobileMenuUI = styled.div`
  position: fixed;
  display: none;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  background: #222;
  color: white;
  @media (max-width: ${sizes.sm}) {
    display: flex;
    padding: 0px 5% 0 5%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const MobileUI = styled.div`
  display: none;
  @media (max-width: ${sizes.sm}) {
    display: flex;
  }
`;
