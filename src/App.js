import logo from './logo.svg';
import './App.css';
import { useContext, useEffect } from 'react';
import Contex from './store/Context';
import { SetCart, SetCount } from './store/Actions';
import Header from './components/Header';
import ProductList from './components/ProductList';

function App() {
  const {state, depatch} = useContext(Contex)
  //detructering...
  const {totalProduct, totalPrice, cart} = state
 console.log(cart);
 console.log(totalProduct);
 console.log(totalPrice);
  //call one time -> call api
  useEffect(()=>{
    
    fetch('https://course-api.com/react-useReducer-cart-project')
    .then(res => res.json())
    .then(data =>{
      //set cart co trong gio hang tu API
      depatch(SetCart(data))
   
    })
    

  }, [])
  
  return (
    <div className="App">
      <Header />
      {cart.length === 0 ? <h4>No product</h4>:  <ProductList />}
    </div>
  );
}

export default App;
