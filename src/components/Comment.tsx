import styled, { css } from 'styled-components';

interface CommentProps {
  id: number;
  name: string;
  comment: string;
}

export const Comment = ({ comment, name, id }: CommentProps) => {
  return (
    <Container id={id}>
      <TextContainer>
        <h3>{name}</h3>
        <p>{comment}</p>
      </TextContainer>
    </Container>
  );
};

const Container = styled.div<any>`
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  padding: 8px;
  font-size: 14px;
  color: #000000;
  margin: ${(props) => (props.id % 2 !== 0 ? '0 20px 0 0' : '0 0 0 20px')};
  position: relative;
  opacity: 0;

  animation: fadeUp 1s ease-in-out forwards;
  animation-delay: ${(props) => props.id * 0.9}s;

  h3 {
    color: #333333;
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }

  ${({ id }) =>
    id % 2 !== 0 &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 40%;
        left: 0;
        transform: translate(-100%, -50%);
        border-style: solid;
        border-width: 0 20px 20px 0;
        border-color: transparent rgba(255, 255, 255, 0.5) transparent transparent;
      }
    `}
  ${({ id }) =>
    id % 2 === 0 &&
    css`
      &::before {
        content: '';
        position: absolute;
        top: 40%;
        right: 0;
        transform: translate(100%, -50%);
        border-style: solid;
        border-width: 0 0 20px 20px;
        border-color: transparent transparent transparent rgba(255, 255, 255, 0.5);
      }
    `}


  

  @keyframes fadeUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const TextContainer = styled.div``;
