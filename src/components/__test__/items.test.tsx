import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Items, { ItemsProps } from '../Items';

test('Items', () => {
  const { items }: ItemsProps = {
    items: [
      {
        id: 1,
        brand: 'DISTURBIA',
        name: 'Stellar Oversized Jumper',
        finalPrice: 87736,
        currency: '£',
        image: 'https://www.disturbia.co.uk/products/womens-all-tops/Stellar-Oversized-Jumper/image/15797.jpeg',
        sizes: ['XS-S', 'M-L', 'XL-2XL'],
      },
    ],
  };

  render((
    <MemoryRouter>
      <Items items={items} />
    </MemoryRouter>
  ));
});
