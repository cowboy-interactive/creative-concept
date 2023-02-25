import styled from "styled-components";
import { sizes, themes } from "utils/variables";
import { motion } from "framer-motion";
import { useTheme } from "utils/provider";

export const Hero = ({
  children,
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
      backgroundImage={"/images/hero-1.png"}
    >
      {children}
    </Cont>
  );
};

const Cont = styled(motion.section)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: white;

  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
    url(${({ backgroundImage }) => backgroundImage});

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  min-height: 1000px;

  ${({ xl }) => xl};

  @media (max-width: ${sizes.lg}) {
    ${({ lg }) => lg};
  }

  @media (max-width: ${sizes.md}) {
    padding: 0 5%;
    ${({ md }) => md};
  }

  @media (max-width: ${sizes.sm}) {
    flex-direction: column;
    ${({ sm }) => sm};
  }

  @media (max-width: ${sizes.xs}) {
    ${({ xs }) => xs};
  }
`;
