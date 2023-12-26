import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import ReservationForm from './components/sections/reservePages/BookingForm';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

describe('ReservationForm', () => {
  test('render form elements', () => {
    render(<ReservationForm />);

    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of People/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Seating preferences/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Additional Comments/i)).toBeInTheDocument();
    expect(screen.getByText(/Book Table/i)).toBeInTheDocument();
  });

  test('validates HTML attributes for inputs fields', () => {
    render(<ReservationForm />);

    const firstNameInput = screen.getByLabelText(/First Name/i);
    expect(firstNameInput).toHaveAttribute('required');
    expect(firstNameInput).toHaveAttribute('minLength', '2');
    expect(firstNameInput).toHaveAttribute('maxLength', '50') ;
  });

})