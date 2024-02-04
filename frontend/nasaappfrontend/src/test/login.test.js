import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import axios from 'axios';
import Login from "../pages/Login";  // Adjust the path accordingly

jest.mock('axios');

describe('SignIn Component', () => {
    test('renders SignIn component', () => {
        render(<Login />);
        expect(screen.getByText('Sign In')).toBeInTheDocument();
    });

    test('', async () => {
        axios.post.mockResolvedValueOnce({
            data: {
                username: 'testuser',
                message: 'Login successful',
            },
        });

        render(<Login />);
        fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'testpassword' } });
        fireEvent.submit(screen.getByRole('button', { name: /login/i }));

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
        });

        expect(screen.getByText('Log In Successfull')).toBeInTheDocument();
    });

    test('handles login failure', async () => {
        axios.post.mockRejectedValueOnce({
            response: {
                data: {
                    message: 'Wrong Password. Try again or click Forget password to reset it.',
                },
            },
        });

        render(<Login />);
        fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'wrongpassword' } });
        fireEvent.submit(screen.getByRole('button', { name: /login/i }));

        await act(async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000));
        });

        expect(screen.getByText('Wrong Password. Try again or click Forget password to reset it.')).toBeInTheDocument();
    });
});
