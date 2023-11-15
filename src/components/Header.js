import { useState } from "react";
import { LOGO_URL } from "../utils/constans";


export const Header = ()=>{

    const [btnName, setBtnName] = useState("Login");

    console.log("Header comp. rendering....");

    return (
        <div className='header'>
            <div className='logo-container'>
                <img className='logo' 
                    src={LOGO_URL}
                />
            </div>
            <div className='nav-items'>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <li><button className="login-btn" onClick={()=>{ btnName==='Login'?setBtnName("Logout"):setBtnName("Login")}}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    );
}