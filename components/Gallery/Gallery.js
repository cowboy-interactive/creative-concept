import styled from "styled-components";
import { links } from "./data";
import { sizes, themes } from "../../utils/variables";
import Image from "next/image";
import { useState } from "react";

import { ArrowLeft, ArrowRight } from "react-feather";
import { useTheme } from "../../utils/provider";
import { motion } from "framer-motion";
import { Img } from "components/Img/Img";

export const Gallery = ({
  xl,
  lg,
  md,
  sm,
  initial = { opacity: 0 },
  whileInView = { opacity: 1 },
  viewport = { once: true },
  transition = { ease: "easeOut", duration: 1 },
}) => {
  const [overlay, setOverlay] = useState(false);
  const [showImage, setShowImage] = useState({
    head: "Project Planning",
    name: "interior-2",
    image: "/images/about-2.png",
  });
  const [index, setIndex] = useState(0);
  const { theme } = useTheme();

  const handleImageClick = (item, i) => {
    setShowImage(item);
    setOverlay(true);
    setIndex(i);
  };

  const closeOverlay = () => {
    setOverlay(false);
  };

  const showNextImage = () => {
    const length = links.length - 1;

    if (index < length) {
      setShowImage(links[index + 1]);
      setIndex(index + 1);
    } else {
      setShowImage(links[0]);
      setIndex(0);
    }
  };

  const showPreviousImage = () => {
    const length = links.length - 1;

    if (index == 0) {
      setShowImage(links[length]);
      setIndex(length);
    } else {
      setShowImage(links[index - 1]);
      setIndex(index - 1);
    }
  };

  console.log(showImage);

  return (
    <>
      <OverlayCont overlay={overlay ? "flex" : "none"}>
        <ImageOverlay>
          <NavLeft
            background={themes[theme].button}
            onClick={showPreviousImage}
          >
            <ArrowLeft color="white" />
          </NavLeft>
          <NavRight background={themes[theme].button} onClick={showNextImage}>
            <ArrowRight color="white" />
          </NavRight>
          <Img src={showImage.image} alt={showImage.head} />
          <CloseButton color={themes["dark"].primary} onClick={closeOverlay}>
            close
          </CloseButton>
        </ImageOverlay>

        <Overlay onClick={closeOverlay}></Overlay>
      </OverlayCont>

      <Cont xl={xl} lg={lg} md={md} sm={sm}>
        {links.map((item, i) => {
          return (
            <Card
              onClick={() => handleImageClick(item, i)}
              key={i}
              initial={initial}
              whileInView={whileInView}
              viewport={viewport}
              transition={{ ease: "easeOut", duration: 1, delay: i / 4 }}
            >
              <Img src={item.image} alt={item.head} />
            </Card>
          );
        })}
      </Cont>
    </>
  );
};

const Cont = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 2fr;
  grid-gap: 20px;
  width: 100%;

  @media (max-width: ${sizes.sm}) {
    grid-template-columns: 2fr 2fr;
  }

  @media (max-width: ${sizes.xs}) {
    grid-template-columns: 2fr;
  }
`;

const Card = styled(motion.div)`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
  flex-direction: column;
  overflow: hidden;
  transition: 0.2s ease;
`;

const OverlayCont = styled.div`
  display: ${({ overlay }) => overlay};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Overlay = styled.div`
  display: flex;
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 50%;
  background: white;
  cursor: pointer;
  top: 0;
  left: 0;
  z-index: 999;
`;

const ImageOverlay = styled.div`
  display: flex;
  z-index: 9999;
  background: white;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: ${sizes.sm}) {
    width: 100%;
  }
`;

const NavRight = styled.div`
  display: flex;
  z-index: 9999;
  height: 50px;
  width: 50px;
  position: absolute;
  right: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: ${({ background }) => background};
  cursor: pointer;
`;

const NavLeft = styled.div`
  display: flex;
  z-index: 9999;
  height: 50px;
  width: 50px;
  background: ${({ background }) => background};
  position: absolute;
  left: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
`;

const CloseButton = styled.div`
  display: flex;
  z-index: 9999;
  position: absolute;
  top: -40px;
  right: 0px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  color: ${({ color }) => color};
  width: 100%;
`;
