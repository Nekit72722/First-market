import React, {useState} from "react";

import plus from "../img/plus.png";

import check from "../img/check.png";

const Card = ({name, imgUrl, price, onPlus})=>{
    // const myTimeout = setTimeout(myGreeting, 5000);

    const [isAdded, setIsAdded] = useState(false);
    const onClickPlus = () =>{
        onPlus({name, imgUrl, price})
        setIsAdded(!isAdded);
        setTimeout(()=>{
            window.location.reload();

        },200)


    }
// console.log(isAdded);
    return (
        <div className='card'>
            <img width={133} height={112} src={imgUrl} alt=""/>
            <h5>{name}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column '>
                    <span>Price:</span>
                    <b className='opacity-5'>{price} zl</b>

                </div>
                {/*<button className='button'>*/}
                <img className='plus' onClick={onClickPlus} width={20} height={20} src={isAdded ? check : plus} alt="plus"/>
                {/*</button>*/}
            </div>
        </div>
    )
}
export default Card