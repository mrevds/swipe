import d3 from '../assets/greentriangle.svg'
import '../styles/Numbers.css'

const Numbers = () => {
  return (
    <div className="container">
        <div className="numbers">
            <div className="left-numbers">
                <h5>SINCE 2019</h5>
                <h1>In numbers</h1>
                <img src={d3} alt="triangle-3d" className='d3'/>
            </div>
            <div className="right-numbers">
                <div className="numbers-column">
                    <div className="column-left">
                        <h1>Happy clients</h1>
                        <h5>Lorem ipsum dolor sit amet, consectetur <br />bradipiscing 
                            elit. Ut fringilla interdum aliquet.</h5>
                    </div>
                    <h1 className='price'>1000+</h1>
                </div>
                <div className="numbers-column">
                    <div className="column-left">
                        <h1>Products created</h1>
                        <h5>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. Ut fringilla interdum aliquet.</h5>
                    </div>
                    <h1 className='price'>20+</h1>
                </div>
                <div className="numbers-column">
                    <div className="column-left">
                        <h1>Investments received</h1>
                        <h5>Lorem ipsum dolor sit amet, consectetur <br />
                        adipiscing elit. Ut fringilla interdum aliquet.</h5>
                    </div>
                    <h1 className='price'>$5M+</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Numbers