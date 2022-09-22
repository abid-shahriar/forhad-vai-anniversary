import type { NextPage } from 'next';
import styled from 'styled-components';
// import Confetti from 'react-confetti';
import { useEffect, useState } from 'react';
import Typewriter from 'typewriter-effect';
import Link from 'next/link';
import MotionWrapper from '../framer-motion/MotionWrapper';

const Home: NextPage = () => {
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

  return (
    <MotionWrapper>
      <Container>
        {/* <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={700} recycle={true} /> */}

        <ContentContainer>
          <AnniversaryText>
            <div className='text'>
              <Typewriter
                options={{
                  strings: ['Happy One Year <br/> Anniversary!'],
                  autoStart: true,
                  deleteSpeed: 1000000000,
                  delay: 100,
                  loop: false
                }}
              />
            </div>
          </AnniversaryText>
          <Link href='/wishes'>
            <Button>&gt;</Button>
          </Link>
        </ContentContainer>
      </Container>
    </MotionWrapper>
  );
};

export default Home;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  isolation: isolate;
  max-width: 1200px;

  canvas {
    opacity: 0.8;
    z-index: -1;
  }
`;

const ContentContainer = styled.div``;

const AnniversaryText = styled.div`
  margin-top: -80px;
  div.text {
    span {
      text-align: center;
      font-size: 100px;
      font-weight: bolder;
      font-family: 'Courgette';
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;

const Button = styled.a`
  display: block;
  text-align: center;
  appearance: none;
  border: none;
  background: rgba(255, 255, 255, 0.73);
  color: rgba(255, 255, 255, 0.8);
  height: 80px;
  width: 80px;
  border-radius: 50%;
  font-size: 40px;
  font-weight: bolder;
  padding: 10px;
  cursor: pointer;
  position: absolute;
  bottom: 10rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounce 2s forwards;
  animation-delay: 4s;
  opacity: 0;
  transition: 250ms;

  :hover {
    background: rgba(255, 255, 255, 0.93);
    color: rgba(125, 125, 125, 0.769);
  }

  @keyframes bounce {
    0% {
      transform: translateX(-50%) translateY(0);
      opacity: 0;
    }
    50% {
      transform: translateX(-50%) translateY(-20px);
      opacity: 1;
    }
    100% {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
  }
`;
