import remove from "../img/remove.png";
import React from "react";

const Drawer = ({onCloseCart,onRemove,totalPrice, items = []}) =>{
    return (
        <div className='overlay'>
            <div className='drawer'>
                <div className='cartHeader'>
                    <h2 className='mb-30'>Koszyk</h2>
                    <img onClick={onCloseCart} style={{cursor: "pointer"}} width={20} height={20} src={remove} alt="remove"/>
                </div>
                {items.length > 0 ? (
                    <>
                        <div className='cartContainer'>
                            {items.map((obj)=>(
                                <div className='cartItem d-flex align-center justify-between mb-20'>
                                    <div style={{backgroundImage: `url(${obj.imgUrl})`}} className='cartItemImg'></div>
                                    <div className='mr-20'>
                                        <p className='mb-5'>{obj.name}</p>
                                        <b>{obj.price} zł</b>
                                    </div>
                                    <img className='removeBtn'
                                         onClick={()=> onRemove(obj.id)}
                                         src={remove} alt="remove"/>
                                </div>
                            ))}


                        </div>
                        <div className='cartTotalBlock'>
                            <ul className=''>
                                <li className='d-flex'>
                                    <span>Do zaplaty</span>
                                    <div></div>
                                    <b>{totalPrice} zl</b>
                                </li>

                            </ul>
                            <button className='greenButton'>Zlozyć zamówienie</button>
                        </div>
                    </>
                ) :(
                    <div style={{height: '100%'}}>
                        <div>Twój koszyk jest pusty</div>
                        <button onClick={onCloseCart}>Zamknij koszyk</button>
                    </div>
                )}



            </div>
        </div>
    )
}
export default Drawer