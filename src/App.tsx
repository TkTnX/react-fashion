import { Categories } from "./components/Categories/Categories";
import { Festival } from "./components/Festival/Festival";
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
        <Festival />
        <Categories />
      </main>
    </>
  );
}

export default App;
