import "./App.css";
import AppRouter from "./routers/AppRouter";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1 className="title">🎬 App de Películas</h1>
        <p className="subtitle">
          Explora películas populares y consulta su detalle
        </p>
      </header>

      <main className="main-content">
        <AppRouter />
      </main>

      <Footer />
    </div>
  );
}

export default App;