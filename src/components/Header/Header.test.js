import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header', () => {
  it('Should render the same text passed into title', () => {
    render(<Header title={'My Title'} />);
    const headingElement = screen.queryByText('My Title');
    expect(headingElement).toBeInTheDocument();
  });
});
