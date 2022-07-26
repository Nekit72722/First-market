import React from "react";
import logo from '../img/logo.png';
import basket from '../img/basket.png';
import user from '../img/user.png';
import cow1 from '../img/cow1.jpg';
import cow2 from '../img/cow2.jpg'
import cow3 from '../img/cow3.jpg'
import plus from '../img/plus.png'
import search from '../img/search.png'
import remove from "../img/remove.png"
import Card from "./Card";

function Header(props){
    // const [visible, setVisible] = useState('none')
    // const HandleOpener = () =>{
    //     return   setVisible('flex');
    // }
    // const HandleCloser = ()=>{
    //     return setVisible('none');
    // }
return(
    <header className='d-flex justify-between align-center p-40'>
        <div className='d-flex align-center'>
            <img width={50} height={40} src={logo} alt='logo'/>
            <div>
                <h3 className='text-uppercase'>El prezento</h3>
                <p>Best decision for present</p>
            </div>
        </div>
        <ul className='d-flex'>
            <li onClick={props.onClickCart} className='mr-30 cu-p'>
                <img width={18} height={18} src={basket} alt='basket'/>
                <span>100 zl</span>

            </li>
            <li>
                <img width={18} height={18} src={user} alt='user'/>
            </li>
        </ul>
    </header>
)
}
export default Header