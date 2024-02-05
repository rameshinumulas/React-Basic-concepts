import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // For extended matchers
import Counter from './Counter';

describe('Counter component', () => {
  test('renders with initial count of 0', () => {
    const { getByText } = render(<Counter />);
    expect(getByText('Count: 0')).toBeInTheDocument();
  });

  test('increments count on button click', () => {
    const { getByText } = render(<Counter />);
    const incrementButton = getByText('Increment');

    fireEvent.click(incrementButton);

    expect(getByText('Count: 1')).toBeInTheDocument();
  });

  test('decrements count on button click', () => {
    const { getByText } = render(<Counter />);
    const decrementButton = getByText('Decrement');

    fireEvent.click(decrementButton);

    expect(getByText('Count: -1')).toBeInTheDocument();
  });
});
