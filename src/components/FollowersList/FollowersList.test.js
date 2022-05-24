import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from './FollowersList';

const MockFollowersList = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe('FollowersList', () => {
  it('Should render first follower item', async () => {
    render(<MockFollowersList />);

    const followerDivEle = await screen.findByTestId('follower-item-0');
    expect(followerDivEle).toBeInTheDocument();
  });

  it('Should render all follower items', async () => {
    render(<MockFollowersList />);

    const followerDivElements = await screen.findAllByTestId(/follower-item/i);
    expect(followerDivElements.length).toBe(5);
  });
});
