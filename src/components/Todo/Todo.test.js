import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Todo from './Todo';

const MockTodo = () => {
  return (
    <BrowserRouter>
      <Todo />
    </BrowserRouter>
  );
};

const addTask = (tasks) => {
  const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
  const buttonElement = screen.getByRole('button', { name: 'Add' });

  tasks.forEach((task) => {
    fireEvent.change(inputElement, {
      target: {
        value: task
      }
    });

    fireEvent.click(buttonElement);
  });
};

describe('Todo', () => {
  it('Add Single Item', () => {
    render(<MockTodo />);

    addTask(['Go Grocery Shopping']);

    const divElement = screen.getByText('Go Grocery Shopping');
    expect(divElement).toBeInTheDocument();
  });

  it('Add Multiple Items', () => {
    render(<MockTodo />);

    addTask(['Go Grocery Shopping', 'Wash Car', 'Play with dog']);

    const divElements = screen.getAllByTestId('task-container');
    expect(divElements.length).toBe(3);
  });

  it('task should not have "completed" class when initially rendered', () => {
    render(<MockTodo />);

    addTask(['Go Grocery Shopping']);

    const divElement = screen.getByText('Go Grocery Shopping');
    expect(divElement).toHaveClass('todo-item');
    expect(divElement).not.toHaveClass('todo-item-complete');
  });

  it('task should have "completed" class when clicked', () => {
    render(<MockTodo />);

    addTask(['Go Grocery Shopping']);

    const divElement = screen.getByText('Go Grocery Shopping');
    fireEvent.click(divElement);
    expect(divElement).toHaveClass('todo-item');
    expect(divElement).toHaveClass('todo-item-complete');
  });
});
