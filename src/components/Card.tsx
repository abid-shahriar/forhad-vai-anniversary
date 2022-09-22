import styled from 'styled-components';
import { comments } from '../static/comments';
import { Comment } from './Comment';

export const Card = () => {
  return (
    <Container>
      <ImgContainer>
        <ImageBox />
      </ImgContainer>
      <CommentContainer>
        {comments.map((comment, index) => (
          <Comment key={index} {...comment} />
        ))}
      </CommentContainer>
    </Container>
  );
};

const Container = styled.div`
  min-width: 700px;
  max-width: 600px;
  height: 90vh;
  background-color: rgba(9, 9, 121, 0.3);
  border: 1px solid rgb(255, 255, 255, 0.2);
  border-radius: 10px;
  box-shadow: 10px 10px 10px rgb(9, 9, 121, 0.1);
  padding: 20px;
  overflow-y: scroll;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 0px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.2);
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(9, 9, 121, 0.5);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageBox = styled.div`
  height: 200px;
  width: 200px;
  border-radius: 50%;
  background-image: linear-gradient(to bottom left, rgb(9, 9, 121, 0.5), rgb(0, 212, 255, 0.5)), url('./forhad.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-blend-mode: screen;
`;

const CommentContainer = styled.div`
  margin-top: 40px;
`;
