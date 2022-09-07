import React from 'react';
import FormField from './FormField';
import { renderWithThemeProvider } from 'helpers/renderWithThemeProvider';

describe('Input With Button', () => {
  it('Renders at component', () => {
    renderWithThemeProvider(<FormField label="name" name="name" id="name" />);
  });
});
