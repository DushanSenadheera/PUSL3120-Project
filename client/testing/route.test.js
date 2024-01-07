import { render, screen, describe, expect, test } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../App'; 

describe('Route Tests', () => {
  test('renders Home component when / route is visited', () => {
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);
    expect(screen.getByText('Home Text')).toBeInTheDocument();
  });

  test('renders About component when /about route is visited', () => {
    render(<MemoryRouter initialEntries={['/about']}><App /></MemoryRouter>);
    expect(screen.getByText('About Text')).toBeInTheDocument();
  });

  test('renders Admin_Dashboard component when / route is visited', () => {
    render(<MemoryRouter initialEntries={['/']}><App /></MemoryRouter>);
    expect(screen.getByText('Admin Dashboard Text')).toBeInTheDocument();
  });

  test('renders Admin_Premiere component when /premiere route is visited', () => {
    render(<MemoryRouter initialEntries={['/premiere']}><App /></MemoryRouter>);
    expect(screen.getByText('Admin Premiere Text')).toBeInTheDocument();
  });
});