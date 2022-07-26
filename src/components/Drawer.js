import remove from "../img/remove.png";
import cow1 from "../img/cow1.jpg";
import React from "react";

const Drawer = ({onCloseCart, items = []}) =>{
    return (
        <div className='overlay'>
    <div className='drawer'>
        <div className='cartHeader'>
            <h2 className='mb-30'>Koszyk</h2>
            <img onClick={onCloseCart} style={{cursor: "pointer"}} width={20} height={20} src={remove} alt="remove"/>
        </div>
        <div className='cartContainer'>
            {items.map((obj)=>(
            <div className='cartItem d-flex align-center mb-20'>
                <div style={{backgroundImage: `url(${obj.imgUrl})`}} className='cartItemImg'></div>
                <div className='mr-20'>
                    <p className='mb-5'>{obj.name}</p>
                    <b>{obj.price}</b>
                </div>
                <img className='removeBtn' src={remove} alt="remove"/>
            </div>
            ))}


        </div>
        <div className='cartTotalBlock'>
            <ul className=''>
                <li className='d-flex'>
                    <span>Do zaplaty</span>
                    <div></div>
                    <b>200 zl</b>
                </li>

            </ul>
            <button className='greenButton'>Zlozyc zamowienie</button>
        </div>
    </div>
</div>
    )
}
export default Drawer