import React from "react";
import cow1 from "../img/cow1.jpg";
import plus from "../img/plus.png";
// import React from "@types/react";

const Card = (props)=>{

return (
<div className='card'>
    <img width={133} height={112} src={cow1} alt=""/>
    <h5>Lorem ipsum dolor sit amet.</h5>
    <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column '>
            <span>Price:</span>
            <b className='opacity-5'>100 zl</b>

        </div>
        <button className='button'>
            <img width={15} height={15} src={plus} alt="plus"/>
        </button>
    </div>
</div>
)
}
export default Card