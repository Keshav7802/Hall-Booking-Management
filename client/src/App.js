import "./App.css";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import LoginPage from "./components/LoginPage.js";

function App() {
  return (
    <div className="vh-100">
      <Header />
      <LoginPage />
      <Footer />
    </div>
  );
}

export default App;
