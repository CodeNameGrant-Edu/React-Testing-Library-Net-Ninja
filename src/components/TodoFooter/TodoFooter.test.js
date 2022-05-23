import { BrowserRouter } from 'react-router-dom';
import TodoFooter from './TodoFooter';
const { render, screen } = require('@testing-library/react');

const MockTodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <BrowserRouter>
      <TodoFooter numberOfIncompleteTasks={numberOfIncompleteTasks} />
    </BrowserRouter>
  );
};

describe('TodoFooter', () => {
  it('should render the correct amount of incomplete tasks', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={5} />);
    const pElement = screen.getByText(/5 tasks left/i);
    expect(pElement).toBeVisible();
  });

  it('should render "task" when the number of incomplete tasks is 1', () => {
    render(<MockTodoFooter numberOfIncompleteTasks={1} />);
    const pElement = screen.getByText('1 task left');
    expect(pElement).toBeVisible();
  });
});
