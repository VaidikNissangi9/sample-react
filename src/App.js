import "./styles.css";
import MainPage from "./pages/MainPage";
import { Provider } from "react-redux";
import store from "./store/store";

export default () => (
  <Provider store={store}>
    <MainPage />
  </Provider>
);
