import { render, screen } from "@testing-library/react";
import App from "./App";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";


jest.mock("./store/login-slice");
const mockStore = configureStore([]);

describe("App Component", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      isLoggedIn: false,
    });
  });

  test("renders learn react link", () => {
    render(<Provider store={store}><App /></Provider>);
    const linkElement = screen.getAllByText(/NasaApp/i)[0];
    expect(linkElement).toBeInTheDocument();
  });
});