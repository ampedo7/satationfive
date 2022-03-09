import React from 'react';

import { Wrapper } from './styles';
import { Container } from 'react-bootstrap';

export default function MainLayout({ children }) {
  return (
    <Wrapper>
      <Container className="main" fluid>
        {/* header */}
        <Container className="main_content container" fluid>
          {children}
        </Container>
      </Container>
    </Wrapper>
  );
}
