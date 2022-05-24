import { fireEvent, render, screen } from '@testing-library/react';
import AddInput from './AddInput';

const mockSetTodo = jest.fn();

describe('AddInput', () => {
  it('should render input element', () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type into input', () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);

    fireEvent.change(inputElement, {
      target: {
        value: 'Go Grocery Shopping'
      }
    });

    expect(inputElement.value).toBe('Go Grocery Shopping');
  });

  it('should have empty input when "Add" button is clicked', () => {
    render(<AddInput todos={[]} setTodos={mockSetTodo} />);
    const inputElement = screen.getByPlaceholderText(/Add a new task here.../i);
    fireEvent.change(inputElement, {
      target: {
        value: 'Go Grocery Shopping'
      }
    });

    const buttonElement = screen.getByRole('button');
    fireEvent.click(buttonElement);

    expect(inputElement.value).toBe('');
  });
});
