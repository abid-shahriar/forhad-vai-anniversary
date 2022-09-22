import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { Card } from '../components/Card';
import MotionWrapper from '../framer-motion/MotionWrapper';

const Wishes: NextPage = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);

  if (!windowSize.height) return <div></div>;

  if (windowSize.width < 800) {
    return <div>Mobile Version is not available..!!</div>;
  }
  return (
    <MotionWrapper>
      <Container>
        <Card />

        <Background>
          <p>V</p>
        </Background>
      </Container>
    </MotionWrapper>
  );
};

export default Wishes;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  isolation: isolate;
  max-width: 1200px;
`;

const Background = styled.div`
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40vw;
    z-index: -1;
    color: rgb(0, 212, 255, 0.3);
  }
`;
