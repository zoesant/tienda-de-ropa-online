// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar';
// import hello from './components/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/ItemListContainer';
import Contador from './components/ItemCount';
// import ItemList from './components/ItemList';
import ItemList from './components/ItemListContainer';



function App() {


  return (
    <div className="App">
      <Navbar/>
      
      <div>
      <Header title='Hellooooooooooooo' />
      </div>
      
      <Contador stock={4} initial= {0}/>
    </div>
  );
}

export default App;
