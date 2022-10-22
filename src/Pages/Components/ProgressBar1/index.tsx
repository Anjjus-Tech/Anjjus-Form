import React from 'react';
import { Container, CircleOne, Title, CircleTwo, CircleThree } from './style';

function ProgressBar1(): JSX.Element {
  return (
    <Container>
      <CircleOne>
        <Title>1</Title>
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

export { ProgressBar1 };
