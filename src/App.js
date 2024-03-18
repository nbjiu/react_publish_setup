import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./layout/header";
import Main from "./pages/main";
import "./assets/css/reset.css";
import "./assets/css/main.css";
import "./assets/css/sub.css";
import "./assets/css/common.css";
import "./assets/css/media.css";
import Footer from "./layout/footer";
import NotFound from "./pages/NotFound";
import Sponsor from "./pages/sponsor/sponsor";

function App() {
    return (
        <div className="wrap">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/sponsor" element={<Sponsor />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
