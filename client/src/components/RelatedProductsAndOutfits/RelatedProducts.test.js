/**
 * @jest-environment jsdom
*/

import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Index from './index.jsx';
import RelatedProducts from './RelatedProducts.jsx';



// use describe, it pattern
describe('<Index /> and its subcomponents rendering', () => {
  it('Renders <RelatedProducts /> component correctly', () => {
    render(<Index />);
    expect(screen.getByText(/RELATED PRODUCTS/i)).toBeInTheDocument();
  });


});