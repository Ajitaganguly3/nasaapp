import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { act } from 'react-dom/test-utils';
import axios from 'axios';
import Login from '../pages/Login';


jest.mock('axios');
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: jest.fn(),
}));

const mockStore = configureStore();

describe('Login Component', () => {
    let store;

    beforeEach(() => {
        jest.clearAllMocks();
        store = mockStore();
    });

    it('renders login form correctly', () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                    </Routes>

                </MemoryRouter>
            </Provider>
        );
    });

    it('handles form submission and successful login', async () => {
        const mockNavigate = jest.fn();
        require('react-router-dom').useNavigate.mockReturnValue(mockNavigate);

        axios.post.mockResolvedValue({ data: { message: 'Login successful', user: 'testUser' } });

        render(
            <Provider store={store}>
                <MemoryRouter>
                    <Routes>
                        <Route path="/login" element={<Login />} />
                    </Routes>
                </MemoryRouter>
            </Provider>
        );
    });
});
