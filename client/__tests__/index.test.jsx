
import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
 
describe('Home', () => {
  it('Form', () => {
    render(<Home />);
 
    const heading = screen.getByRole('heading', {
      name: /Sign In/i,
    })
 
    expect(heading).toBeInTheDocument();
  })
})
