import styled from "styled-components";
import { sizes } from "utils/variables";
import { motion } from "framer-motion";
import Image from "next/image";

export const Img = ({
  xl,
  lg,
  md,
  sm,
  xs,
  initial = {},
  whileInView = {},
  viewport = {},
  transition = {},
  src = "",
  alt = "",
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
      <Image src={src} fill className="image" alt={alt} />
    </Cont>
  );
};

const Cont = styled(motion.div)`
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  overflow: hidden;

  .image {
    object-fit: contain;
    position: relative !important;
  }

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
