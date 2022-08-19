import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import PublicRoutes from "./routes/PublicRoutes";

function App() {
  return (
    <div className="app">
      <Header />
      <PublicRoutes />
      <Footer />
    </div>
  );
}

export default App;
