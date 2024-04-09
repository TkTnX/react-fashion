import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Sale } from "./components/Sale/Sale";
import { CatalogPage } from "./pages/CatalogPage";

function App() {
  return (
    <>
      <Sale />
      <Header />
      <main>
        <Routes>
          {/* 
      //TODO: Сделать валидацию формы
      // TODO: При отправлении формы закрывать её.
      // TODO: Если смогу, сделать отдельную страницу для товара
    */}

          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
