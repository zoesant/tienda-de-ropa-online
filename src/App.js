// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navBar';
// import hello from './components/ItemListContainer';
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from './components/itemList/ItemListContainer';
import ItemCount from './components/itemCount/ItemCount';
// import ItemList from './components/ItemList';
import ItemDetailContainer from './components/itemDetail/ItemDetailContainer';



function App() {


  return (
    <div className="App">
      <Navbar/>
      <div>
        <ItemListContainer title='Catalogo' />
      </div>
      <div>
        <ItemDetailContainer title='Detalle' />
      </div>
    </div>
  );
}

export default App;
