import { render, screen, describe, test, expect } from '@testing-library/react';
import Admin from './Admin'; 
import SeatBooking from './SeatBooking'; 
import Profile from './Profile'; 
import About from './About'; 
import Contact from './Contact'; 

describe('Page Tests', () => {
  test('renders Admin page', () => {
    render(<Admin />);
    expect(screen.getByText('Admin Text')).toBeInTheDocument();
  });

  test('renders SeatBooking page', () => {
    render(<SeatBooking />);
    expect(screen.getByText('SeatBooking Text')).toBeInTheDocument();
  });

  test('renders Profile page', () => {
    render(<Profile />);
    expect(screen.getByText('Profile Text')).toBeInTheDocument();
  });

  test('renders About page', () => {
    render(<About />);
    expect(screen.getByText('About Text')).toBeInTheDocument();
  });

  test('renders Contact page', () => {
    render(<Contact />);
    expect(screen.getByText('Contact Text')).toBeInTheDocument();
  });
});