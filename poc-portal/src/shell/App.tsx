import { BrowserRouter as Router } from "react-router-dom";

import Footer from "./Footer";
import Header from "./Header";
import Routes from "./Routes";

function App() {
  return (
    <div>
      <div style={{ margin: "0 auto" }}>
        <Router>
          <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
            <Header />
            <main style={{ flex: "1 1 0", margin: "2rem 0" }}>
              <div className="container py-2">
                <Routes />
              </div>
            </main>
            <Footer />
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
