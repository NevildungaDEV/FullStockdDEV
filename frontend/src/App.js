
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Webfont from "webfontloader"
import Header from "./component/layout/Header/Header"
import Footer from "./component/layout/Footer/Footer"
import Home from './component/Home/Home'
import react from 'react';



function App() {
  react.useEffect(()=>{
    Webfont.load({
      google:{
        families:["Roboto","Droid Sans","Chilanka"]
      }
    })
  })
  return (
    <BrowserRouter>
   <Header/>
   <Home/>
   <Footer />
   </BrowserRouter>
  );
}

export default App;
