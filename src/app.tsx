import React from "react";
import Router from "./component/router";
import Layout from "./ui/layout";
import "./ui/common/common.module.css";

const App = () => {
    return (
        <Layout>
            <Router />
        </Layout>
    );
};

export default App;
