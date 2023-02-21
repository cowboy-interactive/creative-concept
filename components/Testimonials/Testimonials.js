import styled from "styled-components";
import { links } from "./data";
import { sizes, themes } from "../../utils/variables";
import Image from "next/image";
import { useState } from "react";

import { ArrowLeft, ArrowRight } from "react-feather";
import { useTheme } from "../../utils/provider";
import { motion } from "framer-motion";

export const Testimonials = ({
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
    head: "Testemonial 1",
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
      <ImageOverlay>
        <NavLeft background={themes[theme].primary} color={themes[theme].secondary} onClick={showPreviousImage}>
          <ArrowLeft color={themes[theme].highlight} />
        </NavLeft>
        <NavRight background={themes[theme].primary} color={themes[theme].secondary} onClick={showNextImage}>
          <ArrowRight color={themes[theme].highlight} />
        </NavRight>
        <Card background={themes[theme].primary}>{showImage.head}</Card>
      </ImageOverlay>
    </>
  );
};

const ImageOverlay = styled.div`
  display: flex;

  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: ${sizes.sm}) {
    width: 100%;
  }
`;

const NavRight = styled.div`
  display: flex;
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
  height: 50px;
  width: 50px;
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  position: absolute;
  left: 20px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
`;

const Card = styled.div`
  display: flex;
  padding: 60px;

  background: ${({ background }) => background};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;
