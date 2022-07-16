import React, {useState} from "react";
import logo from '../img/logo.png';
import basket from '../img/basket.png';
import user from '../img/user.png';
import cow1 from '../img/cow1.jpg';
import cow2 from '../img/cow2.jpg'
import cow3 from '../img/cow3.jpg'
import plus from '../img/plus.png'
import search from '../img/search.png'
import remove from "../img/remove.png"

function Header(){
    const [visible, setVisible] = useState('none')
    const HanldeOpener = () =>{
        return   setVisible('flex');
    }
    const HandleCloser = ()=>{
        return setVisible('none');
    }

    return(
        <div className='wrapper clear'>
            <div style={{display: visible}} className='overlay'>
                <div className='drawer'>
                    <div className='cartHeader'>
                    <h2 className='mb-30'>Koszyk</h2>
                        <img onClick={HandleCloser} style={{cursor: "pointer"}} width={20} height={20} src={remove} alt="remove"/>
                    </div>
                    <div className='cartContainer'>
                    <div className='cartItem d-flex align-center'>

                       <div style={{backgroundImage: `url(${cow1})`}} className='cartItemImg'></div>
                        <div className='mr-20'>
                            <p className='mb-5'>Lorem ipsum dolor sit amet.</p>
                            <b>100 zl</b>
                        </div>
                        <img className='removeBtn' src={remove} alt="remove"/>
                    </div>
                    <div className='cartItem d-flex align-center'>

                        <div style={{backgroundImage: `url(${cow1})`}} className='cartItemImg'></div>
                        <div className='mr-20'>
                            <p className='mb-5'>Lorem ipsum dolor sit amet.</p>
                            <b>100 zl</b>
                        </div>
                        <img className='removeBtn' src={remove} alt="remove"/>
                    </div>
                    </div>
                    <div className='cartTotalBlock'>
                    <ul className=''>
                        <li className='d-flex'>
                            <span>Do zaplaty</span>
                            <div></div>
                            <b>200 zl</b>
                        </li>

                    </ul>
                    <button>Zlozyc zamowienie</button>
                    </div>
                </div>
            </div>


        <header className='d-flex justify-between align-center p-40'>
            <div className='d-flex align-center'>
                <img width={50} height={40} src={logo} alt='logo'/>
            <div>
                <h3 className='text-uppercase'>El prezento</h3>
                <p>Best decision for present</p>
            </div>
            </div>
            <ul className='d-flex'>
                <li className='mr-30'>
                    <img style={{cursor: "pointer"}} onClick={HanldeOpener} width={18} height={18} src={basket} alt='basket'/>
                    <span>100 zl</span>

                </li>
                <li>
                    <img width={18} height={18} src={user} alt='user'/>
                </li>
            </ul>
         </header>
            <div className='content p-40'>
                <div className='d-flex align-center justify-between p-40 mb-40'>
                <h1>All Cows</h1>
                    <div className='search-block d-flex'>
                        <img width={18} height={18} src={search} alt=""/>
                        <input placeholder='Search...' type="text"/>
                    </div>
                </div>
                <div className='d-flex'>
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
                <div className='card'>
                    <img width={133} height={112} src={cow2} alt=""/>
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
                <div className='card'>
                    <img width={133} height={112} src={cow3} alt=""/>
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
                </div>
            </div>
        </div>

    )
}
export default Header