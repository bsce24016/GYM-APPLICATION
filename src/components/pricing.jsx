import React from 'react'
import { Check } from 'lucide-react'
import { Link} from 'react-router-dom'


const pricing = () => {
  const pricing=[{
    imgUrl:"/pricing.jpg",
    title:"MONTHLY",
    price:"6000",
    length:"1 Month"
  },
  {
    imgUrl:"/pricing.jpg",
     title:"QUARTERLY",
    price:"18000",
    length:"3 Months"
  },
  {
    imgUrl:"/pricing.jpg",
    title:"YEARLY",
    price:"60000",
    length:"12 Months"
  }
  ]
  return (
    <section className='pricing'>
      <h1>ELITE EDGE FITNESS PLANS</h1>
      <div className="wrapper">
        {
          pricing.map(element=>{
            return(
              <div className="card" key={element.title}>
                <img src={element.imgUrl} alt={element.title} />
                <div className="title">
                  <h1>{element.title}</h1>
                  <h1>PACKAGE</h1>
                  <h3>{element.price}</h3>
                  <p>for {element.length}</p>
                </div>
                <div className="description">
                  <p>
                    <Check/>Equipment
                  </p>
                  <p>
                    <Check/>All day Free Training
                  </p>
                  <p>
                    <Check/>Nutrition Plan
                  </p>
                  <p>
                    <Check/>24/7 Skilled Support
                  </p>
                  <p>
                    <Check/>20 days freezing option
                  </p>
                  <Link to="/">Join Now
                  </Link>

                </div>
              </div>
            )
          })
        }
      </div>
      
    </section>
  )
}

export default pricing
