import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Sale } from "./components/Sale/Sale";
import { CatalogPage } from "./pages/CatalogPage";
import { FullProductPage } from "./pages/FullProductPage";
import { CartPage } from "./pages/CartPage";
import { ScrollToTop } from "./helpers/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Sale />
      <Header />
      <main>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path={"/catalog/:id"} element={<FullProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
