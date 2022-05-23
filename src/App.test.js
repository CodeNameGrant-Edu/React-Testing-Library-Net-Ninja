import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('Should render the entire App', () => {
    render(<App />);
  });
});
