import swipe from '../assets/logo.svg'
import webflow from '../assets/webflow.svg'
import '../styles/Banner.css'

const Banner = () => {
  return (
    <div className="container">
      <div className="banner">
        <img src={swipe} alt="swipe" />
        <img src={webflow} alt="webflow" />
        <img src={swipe} alt="swipe" />
        <img src={webflow} alt="webflow" />
      </div>
    </div>
  )
}

export default Banner