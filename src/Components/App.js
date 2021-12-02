import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AddProject from "./Admin/AddProject/AddProject";
import Error from "./Error/Error";
import Home from "./Home/Home/Home";
import Blog from "./Blog/Blog";
import ProjectDetails from "./Home/ProjectDetails/ProjectDetails";
import Footer from "./Share/Footer/Footer";
import Header from "./Share/Header/Header";

function App() {
    return (
        <div className="App">
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/productdetails/:_id">
                        <ProjectDetails></ProjectDetails>
                    </Route>
                    <Route path="/addproject">
                        <AddProject></AddProject>
                    </Route>
                    <Route path="/blog">
                        <Blog></Blog>
                    </Route>
                    <Route path="*">
                        <Error></Error>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
        </div>
    );
}

export default App;
