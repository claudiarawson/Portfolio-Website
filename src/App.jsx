import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./router";

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <AppRouter />
            <Footer />
        </BrowserRouter>
    );
};

export default App;
