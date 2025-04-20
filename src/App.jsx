
import './App.scss'
import Admin from './components/Admin';
import Header from './components/Header'
import Home from './components/Home';
import Basket from './components/Basket';
import { Route, Routes } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function App() {
  let router = [
    {
      id:1,
      link:"/",
      element:<Home/>
    },
    {
      id:2,
      link:"/admin",
      element:<Admin/>
    },
    {
      id:3,
      link:"/basket",
      element:<Basket/>
    },
   
  ]
  return (
<div className="App">
<Header/>
<Routes>
  {router.map((el) => (
    <Route path={el.link} element={el.element} key={el.id}/>
  ))}
</Routes>
</div>    
  )
}

export default App;
