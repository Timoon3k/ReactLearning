import React from 'react';
import UsersList from 'components/organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/icons/styles/GlobalStyle';
import { theme } from 'assets/icons/styles/theme';
import { Wrapper } from './Root.styles';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <UsersList />
    </Wrapper>
  </ThemeProvider>
);

export default Root;
