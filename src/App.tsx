import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Sale } from "./components/Sale/Sale";
import { CatalogPage } from "./pages/CatalogPage";
import { FullProductPage } from "./pages/FullProductPage";
import { CartPage } from "./pages/CartPage";
import { ScrollToTop } from "./helpers/ScrollToTop";
import { useEffect, useState } from "react";
import { Loader } from "./components/Loader/Loader";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    window.addEventListener("load", () => {
      setLoading(false);
    });
  }, []);

  return (
    <>
      {loading && <Loader loading={loading} />}
      <ScrollToTop />
      <Sale />
      <Header />
      <main>
        {
          // TODO: Сделать, чтобы был путь к странице)
          // todo: Фильрация в каталоге
        }

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/catalog" element={<CatalogPage />} />
          <Route path="/catalog/:id" element={<FullProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
