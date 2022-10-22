import React from 'react';
import { Container, CircleOne, Title, CircleTwo, CircleThree } from './style';
import { FaCheck } from 'react-icons/fa';

function ProgressBar2(): JSX.Element {
  return (
    <Container>
      <CircleOne>
        <Title>
          <FaCheck />
        </Title>
      </CircleOne>
      <CircleTwo>
        <Title>2</Title>
      </CircleTwo>
      <CircleThree>
        <Title>3</Title>
      </CircleThree>
    </Container>
  );
}

export { ProgressBar2 };
