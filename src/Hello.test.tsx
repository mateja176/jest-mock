import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Hello from './Hello';
import { jest } from '@jest/globals';
import * as Utils from './utils';

describe('Hello', () => {
  test('it should render', () => {
    render(<Hello />);

    expect(screen.queryByText('Hello World!')).toBeInTheDocument();
  });
  test('it should mock', () => {
    jest.spyOn(Utils, 'getName').mockImplementationOnce(() => 'Mock');

    render(<Hello />);

    expect(screen.getByText('Hello Mock!')).toBeInTheDocument();
  });
  test('it should override mock', () => {
    jest.spyOn(Utils, 'getName').mockImplementationOnce(() => 'Rock');

    render(<Hello />);

    expect(screen.getByText('Hello Rock!')).toBeInTheDocument();
  });
});
