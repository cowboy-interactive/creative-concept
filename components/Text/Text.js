import styled from "styled-components";
import { motion } from "framer-motion";
import { sizes, text } from "utils/variables";
import { font } from "utils/variables/font";

export const Text = ({
  children,
  xl,
  lg,
  md,
  sm,
  xs,
  initial = { opacity: 0 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { ease: "easeOut", duration: 1 },
}) => {
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
    >
      {children}
    </Cont>
  );
};

const Cont = styled(motion.p)`
  margin: 0 0 40px 0;
  font-weight: 450;
  font-size: ${font.p.xl.size};
  line-height: ${font.p.xl.height};

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
