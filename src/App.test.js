import React from 'react';
import { render } from '@testing-library/react';
import Ecomerce from './ecomerce';

test('renders learn react link', () => {
  const { getByText } = render(<Ecomerce />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
