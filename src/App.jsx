import "./App.css";
import AppRouter from "./AppRouter";
import Preloader from "./Component/loader/Preloader";

function App() {
  return (
    <>
      <Preloader>
        <AppRouter />
      </Preloader>
    </>
  );
}

export default App;
