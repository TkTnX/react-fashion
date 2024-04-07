import { Categories } from "./components/Categories/Categories";
import { Discount } from "./components/Discount/Discount";
import { Festival } from "./components/Festival/Festival";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { News } from "./components/News/News";
import { Popular } from "./components/Popular/Popular";
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
        <Popular />
        <Discount />
        <News />
      </main>
      <Footer />
    </>
  );
}

export default App;
