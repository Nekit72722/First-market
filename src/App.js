import React, {useEffect, useState} from "react";
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

// const arr = [{
//     "name": "Cow1",
//     "price": 100,
//     "imgUrl": `${cow1}`
// },
//     {
//         "name": "Cow2",
//         "price": 110,
//         "imgUrl": `${cow2}`
//     },
//     {
//         "name": "Cow3",
//         "price": 150,
//         "imgUrl": `${cow3}`
//     }
// ];
function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [drawerVisible, setDrawerVisible] = useState(false);

    useEffect(()=>{
     fetch('https://62df9b5e976ae7460bef93b4.mockapi.io/Items').then(res =>{
         return res.json();
     }).then(json =>{
         setItems(json);
     });
    }, [])
    // const HandleCloser = ()=>{
    //     return setVisible('none');
    // }
    const onAddToCart=(obj)=>{
        setCartItems(prev=>[...prev, obj]);
    }

          return(
              <div className='wrapper clear'>
                  {drawerVisible && <Drawer items={cartItems} onCloseCart={()=> setDrawerVisible(false)}/>}
                       <Header onClickCart={() => setDrawerVisible(true)}/>

                  <div className='content p-40'>
                      <div className='d-flex align-center justify-between p-40 mb-40'>
                          <h1>All Products</h1>
                          <div className='search-block d-flex'>
                              <img width={18} height={18} src={search} alt=""/>
                              <input placeholder='Search...' type="text"/>
                          </div>
                      </div>
                      <div className='d-flex flex-wrap'>
                          {/*<Card title='cow1' price='123' imgUrl={cow1}/>*/}
                          {/*<Card title='cow2' price='150' imgUrl={cow2}/>*/}
                          {items.map((item)=>(
                              <Card
                                  name={item.name}
                                  price={item.price}
                                  imgUrl={item.imgUrl}
                                  onPlus={(obj)=> onAddToCart(obj)}
                              />
                              )
                          )}


                      </div>
                  </div>
              </div>

          )
      }



export default App;
