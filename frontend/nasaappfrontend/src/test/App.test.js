import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import App from '../App';


jest.mock("../redux/authSlice");
const mockStore = configureStore();

test('renders learn react link', () => {

  const initialState = {
    auth: {
      loggedIn: true,
    },

  };


  const store = mockStore(initialState);


  render(
    <Provider store={store}>
      <App />
    </Provider>
  );


  const linkElement = screen.getAllByText(/NasaApp/i)[0];
  expect(linkElement).toBeInTheDocument();
});

