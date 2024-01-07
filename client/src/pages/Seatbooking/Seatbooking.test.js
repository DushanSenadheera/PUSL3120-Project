import { render, fireEvent, screen, test, describe, beforeEach, expect} from '@testing-library/react';
import Seatbooking from './Seatbooking';

describe('SeatBooking component', () => {
    beforeEach(() => {
      render(<Seatbooking />);
    });
  
    test('renders seat booking section', () => {
      expect(screen.getByText(/Screen this way/i)).toBeInTheDocument();
    });
  
    test('renders seat layout', () => {
      expect(screen.getByRole('row')).toBeInTheDocument();
    });
  
    test('handles seat click', () => {
      const seat = screen.getByText(/1/); // Assuming seatNumber 1 exists
      fireEvent.click(seat);
      expect(seat).toHaveClass('seatbooked');
    });
  });