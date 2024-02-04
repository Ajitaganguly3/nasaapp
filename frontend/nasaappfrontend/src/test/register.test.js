import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Register from '../pages/Register';
import {expect, jest, test} from '@jest/globals';

describe('Register Component', () => {
    test('renders register form correctly', () => {
        render(<Register />);

        // Ensure all form elements are rendered
        expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/last name/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/username/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/contact number/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/confirm password/i)).toBeInTheDocument();
        expect(screen.getByLabelText(/i want to receive/i)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
    });

    test('validates form inputs and displays errors', async () => {
        render(<Register />);

        // Submit form without filling required fields
        fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

        // Check for error messages
        await waitFor(() => {
            expect(screen.getByText(/first name is required/i)).toBeInTheDocument();
            expect(screen.getByText(/last name is required/i)).toBeInTheDocument();
            expect(screen.getByText(/invalid email format/i)).toBeInTheDocument();
            expect(screen.getByText(/username is required/i)).toBeInTheDocument();
            expect(screen.getByText(/contact number is required/i)).toBeInTheDocument();
            expect(screen.getByText(/password is required/i)).toBeInTheDocument();
            expect(screen.getByText(/passwords do not match/i)).toBeInTheDocument();
        });
    });

    test('submits the form with valid inputs', async () => {
        render(<Register />);

        // Fill in valid form inputs
        userEvent.type(screen.getByLabelText(/first name/i), 'Ajita');
        userEvent.type(screen.getByLabelText(/last name/i), 'Ganguly');
        userEvent.type(screen.getByLabelText(/email address/i), 'ajita.ganguly@example.com');
        userEvent.type(screen.getByLabelText(/username/i), 'ajitaGanguly');
        userEvent.type(screen.getByLabelText(/contact number/i), '7439615330');
        userEvent.type(screen.getByLabelText(/password/i), 'Password123');
        userEvent.type(screen.getByLabelText(/confirm password/i), 'Password123');

        // Submit the form
        fireEvent.click(screen.getByRole('button', { name: /sign up/i }));

        // Check for successful registration message
        await waitFor(() => {
            expect(screen.getByText(/successfully registered/i)).toBeInTheDocument();
        });
    });
});
