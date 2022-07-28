import React from "react";
import {Link} from "react-router-dom";
import logo from '../img/logo.png';
import basket from '../img/basket.png';
import user from '../img/user.png';

function Header(props){



    return(
        <header className='d-flex justify-between align-center p-40'>
            <Link to='/'>
                <div className='d-flex align-center'>

                    <img width={50} height={40} src={logo} alt='logo'/>
                    <div>
                        <h3 className='text-uppercase'>El prezento</h3>
                        <p>Best decision for present</p>
                    </div>

                </div>
            </Link>
            <ul className='d-flex'>
                <li onClick={props.onClickCart} className='mr-30 cu-p'>
                    <img width={18} height={18} src={basket} alt='basket'/>
                    <span>{props.totalPrice} zł</span>

                </li>
                <li>
                    <Link to="/adminpanel">
                        <img width={18} height={18} src={user} alt='user'/>
                    </Link>
                </li>
            </ul>
        </header>
    )
}
export default Header