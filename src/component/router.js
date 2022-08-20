import { BrowserRouter, Switch, Route } from "react-router-dom";
import Root from "../view/root";
import PageOneStatic from "../view/pageOneStatic";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact>
                    <Root />
                </Route>
                <Route path="/page-one-static">
                    <PageOneStatic />
                </Route>
                <Route path="/:id">todo: route</Route>
                <Route path="*">404</Route>
            </Switch>
        </BrowserRouter>
    );
}