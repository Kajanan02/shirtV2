import './App.css';
import Footer from './Components/footer';
import HomeIndex from './Components/Pages/Home/home_index';
import MainNavBar from './Components/main-navbar';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Design from "./Components/Pages/Design/design";

function App() {

    function error() {
        return <h1>Page Not Found</h1>
    }

    return (

        <div className="App">
            <MainNavBar/>
            <Router>
                <Routes>
                    <Route path={'/'} element={<HomeIndex/>}/>
                    <Route path={'/design'} element={<Design/>}/>
                    <Route path={'*'} element={error()}/>
                </Routes>
            </Router>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
