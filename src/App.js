// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar';
// import hello from './components/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/ItemListContainer';
import Contador from './components/ItemCount';



function App() {


  return (
    <div className="App">
      <Navbar/>
      
      <div>
      <Header title='Hellooooooooooooo' />
      </div>
      
      <Contador/>
    </div>
  );
}

export default App;
