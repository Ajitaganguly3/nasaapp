import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';
import Register from '../pages/Register';

jest.mock('axios');

describe('SignUp Component', () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <Register />
            </BrowserRouter>
        );
    });

    it('renders SignUp component', () => {
        const linkElement = screen.getAllByText(/Sign Up/i);
        expect(linkElement.length).toBeGreaterThan(0);
    });

    it('displays error messages for required fields when submitting empty form', async () => {
        fireEvent.click(screen.getByRole('button', { name: 'Sign Up' }));
        await waitFor(() => {
            expect(screen.getByText(/First Name is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Last Name is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Username is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Invalid email format/i)).toBeInTheDocument();
            expect(screen.getByText(/Contact Number is required/i)).toBeInTheDocument();
            expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
            expect(screen.queryByText(/Passwords do not match/i)).toBeNull();
        });
    });

    it('submits form with valid data', async () => {
        axios.post.mockResolvedValueOnce({ data: 'Successfully Registered!' });

        // Fill out the form with valid data
        fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: 'Ajita' } });
        fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: 'Ganguly' } });
        fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'ajita.ganguly@example.com' } });
        fireEvent.change(screen.getByLabelText(/Username/i), { target: { value: 'ajitaGanguly' } });
        fireEvent.change(screen.getByLabelText(/Contact Number/i), { target: { value: '7766552841' } });
        fireEvent.change(screen.getByLabelText('/Password', { selector: 'input[type="password"]' }), { target: { value: 'Password@123' } });
        fireEvent.change(screen.getByLabelText('/Confirm Password', { selector: 'input[type="password"]' }), { target: { value: 'Password@123' } });


        fireEvent.click(screen.getByRole('button', { name: /Sign Up/i })); // Click the Sign Up button

        await waitFor(() => {
            // Assert that the success snackbar appears
            expect(screen.queryByText(/Successfully Registered!/i)).toBeInTheDocument();
        });
    });
});

