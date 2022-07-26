import React from "react";
import './App.css';
// import Header from "./components/Header";
// import {useState} from "@types/react";
import remove from "./img/remove.png";
import cow1 from "./img/cow1.jpg";
import logo from "./img/logo.png";
import basket from "./img/basket.png";
import user from "./img/user.png";
import search from "./img/search.png";
import Card from "./components/Card";
import cow2 from "./img/cow2.jpg";
import plus from "./img/plus.png";
import cow3 from "./img/cow3.jpg";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [{
    name: 'Cow1',
    price: 100
},
    {
        name: 'Cow2',
        price: 110
    }
];
function App() {
    // const [visible, setVisible] = useState('none')
    //
    // const HandleCloser = ()=>{
    //     return setVisible('none');
    // }

          return(
              <div className='wrapper clear'>

                      <Drawer/>


                       <Header/>

                  <div className='content p-40'>
                      <div className='d-flex align-center justify-between p-40 mb-40'>
                          <h1>All Cows</h1>
                          <div className='search-block d-flex'>
                              <img width={18} height={18} src={search} alt=""/>
                              <input placeholder='Search...' type="text"/>
                          </div>
                      </div>
                      <div className='d-flex'>
                          <Card/>
                          {/*{arr.map((obj)=>(*/}
                          {/*    <Card/>*/}
                          {/*    )*/}
                          {/*)}*/}


                      </div>
                  </div>
              </div>

          )
      }



export default App;
