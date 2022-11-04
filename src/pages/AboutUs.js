import React from 'react'
import "../pages/about.css"
const AboutUs = () => {
  return (
    <section className="showcase">
    <header>
      <h2 className="logo">Store-Center</h2>
    </header>
    <img src="https://arquitecturaviva.com/assets/uploads/obras/40817/av_imagen.jpeg" alt='containers'></img>
    <div className="overlay"></div>
    <div className="text">
      <h2>Need Storage? </h2> 
      <h3>We've got you!</h3>
      <p>Welcome to Storage-Centre!.We are the world’s best storage facility. We offer storage facilities at the best rates in town.Our facilities are secure with 24hr CCTV surveilance and fire proofed for any form of damage.We offer cold rooms, secure lock storage and ample space for any goods you have.BOOK WITH US NOW!!</p>
      <button>Explore</button>
    </div>
    </section>
  )
}

export default AboutUs;