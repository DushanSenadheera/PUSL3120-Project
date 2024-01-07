import { render, screen, describe, test, expect } from '@testing-library/react';
import Navbar from './Navbar'; 
import Footer from './Footer'; 
import Admin from './Admin'; 
import Register from './Register'; 
import Login from './Login'; 

describe('Component Tests', () => {
  test('renders Navbar component', () => {
    render(<Navbar />);
    expect(screen.getByText('Navbar Text')).toBeInTheDocument();
  });

  test('renders Footer component', () => {
    render(<Footer />);
    expect(screen.getByText('Footer Text')).toBeInTheDocument();
  });

  test('renders Admin component', () => {
    render(<Admin />);
    expect(screen.getByText('Admin Text')).toBeInTheDocument();
  });

  test('renders Register component', () => {
    render(<Register />);
    expect(screen.getByText('Register Text')).toBeInTheDocument();
  });

  test('renders Login component', () => {
    render(<Login />);
    expect(screen.getByText('Login Text')).toBeInTheDocument();
  });

});