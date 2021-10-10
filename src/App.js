import './App.css';
import Footer from './Components/footer';
import HomeIndex from './Components/Home/home_index';
import MainNavBar from './Components/main-navbar';

function App() {
  return (
    
    <div className="App">
      <MainNavBar/>      
      <HomeIndex/>
      <Footer/>
    </div>
  );
}

export default App;
