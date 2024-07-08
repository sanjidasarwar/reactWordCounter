import { Provider } from "react-redux";
import "./App.css";
import WordCounter from "./pages/WordCounter";
import { store } from "./app/store";

function App() {
  return (
    <Provider store={store}>
      <WordCounter />
    </Provider>
  );
}

export default App;
