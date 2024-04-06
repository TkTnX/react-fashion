import { Header } from "./components/Header/Header";
import { Sale } from "./components/Sale/Sale";
import { Top } from "./components/Top/Top";

function App() {
  return (
    <>
      <Sale />
      <Header />

      <main>
        <Top />
      </main>
    </>
  );
}

export default App;
