import type { NextPage } from 'next';
import styled from 'styled-components';

import { Card } from '../components/Card';
import MotionWrapper from '../framer-motion/MotionWrapper';

const Wishes: NextPage = () => {
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
