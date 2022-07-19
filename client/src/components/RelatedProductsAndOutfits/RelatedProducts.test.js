/**
 * @jest-environment jsdom
*/

import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import RelatedProductsAndOutfits from './index.jsx';
import RelatedProducts from './RelatedProducts.jsx';



// use describe, it pattern
describe('<Index /> and its subcomponents rendering', () => {
  it('Renders <RelatedProducts /> component correctly', () => {
    render(<RelatedProductsAndOutfits relatedProducts={[
      71698,
      71699,
      71704,
      71703
    ]}/>);
    expect(screen.getByText(/RELATED PRODUCTS/i)).toBeInTheDocument();
    expect(screen.getByText(/YOUR OUTFIT/i)).toBeInTheDocument();
  });


});