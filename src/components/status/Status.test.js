import React from 'react';
import { render, screen } from '@testing-library/react';
import { Status } from './Status';

describe('Status', () => {
  test('snapshot', () => {
    const {asFragment} = render(<Status _status={{props: {cell: {value: 'up'}}}} />);
    expect(asFragment()).toMatchSnapshot();
  });

});