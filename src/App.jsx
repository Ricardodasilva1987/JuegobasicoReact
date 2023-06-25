import "./App.css";
import Funcionamiento from "./components/pages/Funcionamiento";
import Titulo from "./components/pages/Titulo";

function App() {
  return (
    <div>
      <Titulo />
      <Funcionamiento maximo={10} />
    </div>
  );
}

export default App;
