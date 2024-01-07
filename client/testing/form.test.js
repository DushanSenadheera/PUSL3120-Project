import { render, fireEvent, waitFor, describe, test, expect } from '@testing-library/react';
import LoginForm from '../LoginForm';
import RegistrationForm from '../RegistrationForm'; 

describe('Form Tests', () => {
  test('Login form can be filled out', async () => {
    const { getByLabelText, getByRole } = render(<LoginForm />);

    fireEvent.change(getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(getByLabelText(/password/i), { target: { value: 'testpass' } });

    fireEvent.click(getByRole('button'));

    await waitFor(() => expect(getByLabelText(/username/i).value).toBe('testuser'));
    await waitFor(() => expect(getByLabelText(/password/i).value).toBe('testpass'));
  });

  test('Registration form can be filled out', async () => {
    const { getByLabelText, getByRole } = render(<RegistrationForm />);

    fireEvent.change(getByLabelText(/username/i), { target: { value: 'testuser' } });
    fireEvent.change(getByLabelText(/password/i), { target: { value: 'testpass' } });
    fireEvent.change(getByLabelText(/confirm password/i), { target: { value: 'testpass' } });

    fireEvent.click(getByRole('button'));

    await waitFor(() => expect(getByLabelText(/username/i).value).toBe('testuser'));
    await waitFor(() => expect(getByLabelText(/password/i).value).toBe('testpass'));
    await waitFor(() => expect(getByLabelText(/confirm password/i).value).toBe('testpass'));
  });

});