import React from 'react'
import image from '../components/images/card_img.png'
import './Payment.css';
import { Link } from "react-router-dom";

export default function Payment() {
  return (
    <div>
        
<div className="container">

    <form action="">

        <div className="row">

            <div className="col">

                <h3 className="title">booking address</h3>

                <div className="inputBox">
                    <span>full name :</span>
                    <input type="text" placeholder="My name"></input>
                </div>
                <div className="inputBox">
                    <span>email :</span>
                    <input type="email" placeholder="example@example.com"></input>
                </div>
                <div className="inputBox">
                    <span>Phone :</span>
                    <input type="text" placeholder="1234"></input>
                </div>
                <div className="inputBox">
                    <span>address :</span>
                    <input type="text" placeholder="house- street - locality"></input>
                </div>
                <div className="inputBox">
                    <span>city :</span>
                    <input type="text" placeholder="home town"></input>
                </div>
                <div className="inputBox">
                    <span>container size :</span>
                    <input type="text" placeholder="size"></input>
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span>state :</span>
                        <input type="text" placeholder="My State"></input>
                    </div>
                    <div className="inputBox">
                        <span>zip code :</span>
                        <input type="text" placeholder="123 456"></input>
                    </div>
                </div>

            </div>

            <div className="col">

                <h3 className="title">payment</h3>

                <div className="inputBox">
                    <span>cards accepted :</span>
                    <img src={image} alt=""></img>
                </div>
                <div className="inputBox">
                    <span>name on card :</span>
                    <input type="text" placeholder="My Name"></input>
                </div>
                <div className="inputBox">
                    <span>credit card number :</span>
                    <input type="number" placeholder="1111-2222-3333-4444"></input>
                </div>
                <div className="inputBox">
                    <span>exp month :</span>
                    <input type="text" placeholder="january"></input>
                </div>

                <div className="flex">
                    <div className="inputBox">
                        <span>exp year :</span>
                        <input type="number" placeholder="2022"></input>
                    </div>
                    <div className="inputBox">
                        <span>CVV :</span>
                        <input type="text" placeholder="1234"></input>
                    </div>
                </div>

            </div>
    
        </div>

        <Link
          to="/Home"
        >
           <input type="submit" value="proceed to checkout" className="submit-btn"></input>
        </Link>

    </form>

</div>  

    </div>
  )
}
