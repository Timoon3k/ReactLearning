import React from 'react';
import { Logo, StyledLink, Wrapper } from 'components/organisms/Navigation/Navigation.styles';

const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink end to="/">
        Dashboard
      </StyledLink>
      <StyledLink to="/add-user">Add users</StyledLink>
    </Wrapper>
  );
};

export default Navigation;
