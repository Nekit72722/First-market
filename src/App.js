import React, {useEffect, useState} from "react";
import './App.css';
import axios from "axios";
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
    const [searchValue, setSearchValue] = useState('')

    useEffect(()=>{
     // fetch('https://62df9b5e976ae7460bef93b4.mockapi.io/Items').then(res =>{
     //     return res.json();
     // }).then(json =>{
     //     setItems(json);
     // });
     axios.get('https://62df9b5e976ae7460bef93b4.mockapi.io/Items').then((res) => {
         setItems(res.data);
     })
        axios.get('https://62df9b5e976ae7460bef93b4.mockapi.io/cart').then((res) =>{
        setCartItems(res.data);
        })
    }, [])
    // const HandleCloser = ()=>{
    //     return setVisible('none');
    // }
    const onAddToCart=(obj)=>{
        axios.post('https://62df9b5e976ae7460bef93b4.mockapi.io/cart', obj)
        setCartItems(prev=>[...prev, obj]);
    }
    const onRemoveFromCart=(id)=>{
        // console.log(id)
        axios.delete(`https://62df9b5e976ae7460bef93b4.mockapi.io/cart/${id}`)
        setCartItems(prev=> prev.filter(item=> item.id !== id));
    }
    const onChangeSearchInput = (e)=>{
        setSearchValue(e.target.value)
    }

          return(
              <div className='wrapper clear'>
                  {drawerVisible && <Drawer items={cartItems} onRemove={onRemoveFromCart} onCloseCart={()=> setDrawerVisible(false)}/>}
                       <Header onClickCart={() => setDrawerVisible(true)}/>

                  <div className='content p-40'>
                      <div className='d-flex align-center justify-between p-40 mb-40'>
                          <h1>{searchValue ? `Resultat wyszukiwania po: ${searchValue}` : 'Wszystkie produkty'}</h1>
                          <div className='search-block d-flex'>
                              <img width={18} height={18} src={search} alt=""/>
                              {searchValue && <img onClick={()=> setSearchValue('')} className='clear cu-p' src={remove} alt="Close"/>}
                              <input onChange={onChangeSearchInput} value={searchValue} placeholder='Search...' type="text"/>
                          </div>
                      </div>
                      <div className='d-flex flex-wrap'>
                          {/*<Card title='cow1' price='123' imgUrl={cow1}/>*/}
                          {/*<Card title='cow2' price='150' imgUrl={cow2}/>*/}
                          {items.filter((item)=>item.name.toLowerCase().includes(searchValue)).map((item, index)=>(
                              <Card
                                  key={index}
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
