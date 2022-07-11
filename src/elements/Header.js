import React from "react";

function Header(){
    return(
        <header>
        <div className='open-logo'>
        <svg className='header-svg'/>
        <div>
            <h1>El Kubko</h1>
            <p>Best decision for present</p>
        </div>
        </div>

        <div>Nasze produkty</div>
        <div>
            <svg className='koszyk-svg'/>
            <div>Koszyk</div>
        </div>
         </header>
    )
}
export default Header