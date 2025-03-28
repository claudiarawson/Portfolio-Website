import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import AppRouter from "./router";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <AppRouter />
            </Layout>
        </BrowserRouter>
    );
};

export default App;
