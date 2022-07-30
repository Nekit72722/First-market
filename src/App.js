import React, {useEffect, useState} from "react";
import './App.css';
import axios from "axios";
import remove from "./img/remove.png";
import search from "./img/search.png";
import Card from "./components/Card";

import Header from "./components/Header";
import Drawer from "./components/Drawer";
import { Route} from "react-router-dom";
import AdminPanel from "./components/AdminPanel";

function App() {
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [searchValue, setSearchValue] = useState('');


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
    const totalPrice = cartItems.reduce((sum,obj)=>obj.price + sum,0);
    // const onBlockScroll = ()=>{
    //
    // }

    return(

        <div className='wrapper clear'>
            {drawerVisible && <Drawer totalPrice={totalPrice} items={cartItems} onRemove={onRemoveFromCart} onCloseCart={()=> setDrawerVisible(false)}/>}
            <Header totalPrice={totalPrice} cartItem={cartItems} onClickCart={() => setDrawerVisible(true)}/>


            {/*<Route path='/test'>test</Route>*/}
            <Route path='/' exact>
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
            </Route>
            <Route path='/adminpanel'>
                <AdminPanel/>
            </Route>
        </div>


    )
}



export default App;
