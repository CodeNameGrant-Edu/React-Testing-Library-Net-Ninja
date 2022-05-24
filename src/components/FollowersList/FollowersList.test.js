import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { BrowserRouter } from 'react-router-dom';
import FollowersList from './FollowersList';

const MOCK_DATA = {
  results: [
    {
      name: {
        first: 'brad',
        last: 'gibson'
      },
      login: {
        username: 'silverswan131'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/75.jpg'
      }
    },
    {
      name: {
        first: 'dean',
        last: 'ryan'
      },
      login: {
        username: 'deanr'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/23.jpg'
      }
    },
    {
      name: {
        first: 'julian',
        last: 'allen'
      },
      login: {
        username: 'juliana'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/32.jpg'
      }
    },
    {
      name: {
        first: 'lester',
        last: 'chaves'
      },
      login: {
        username: 'lesterc'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/46.jpg'
      }
    },
    {
      name: {
        first: 'terrance',
        last: 'wright'
      },
      login: {
        username: 'terrw'
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/50.jpg'
      }
    }
  ]
};

const server = setupServer(
  rest.get('https://randomuser.me/api', (req, res, ctx) => {
    return res(ctx.json(MOCK_DATA));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

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
