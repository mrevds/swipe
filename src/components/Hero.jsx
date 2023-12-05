import spiral from '../assets/spiral.svg'
import '../styles/Hero.css'
import fb from '../assets/facebook.svg'
import x from '../assets/twitter.svg'
import inst from '../assets/instagram.svg'


const Hero = () => {
  return (
    <div classname="container">
      <div className="hero">
        <div className="left-hero">
          <h1>Accessible way to <br />start your business</h1>
          <h3>Simple. Customizable. Stylish.</h3>
          <button>Get demo for free</button>
          <div className="lastline">
            <div className='square'></div>
            <h1 lastline-text>watch full video</h1>
          </div>
        </div>
        <div className="right-hero">
          <img src={spiral} alt="spiral" className='spiral' />
          <div className="icons">
            <img src={x} alt="x" />
            <img src={inst} alt="instagram" />
            <img src={fb} alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero