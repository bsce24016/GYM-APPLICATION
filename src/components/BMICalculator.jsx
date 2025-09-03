import React,{useState} from 'react'
import { toast } from 'react-toastify'

const BMICalculator = () => {
  const [weight, setWeight] = useState('')
  const [height, setHeight] = useState('')
  const [gender, setGender] = useState('')
  const [bmi, setBmi] = useState("")

  const calculateBMI = (e) => {
    e.preventDefault()
    if(!height||!weight||!gender){
      toast.error("Please enter valid height, weight and gender")
      return
    }
    const heightInMeters = height / 100
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2)     //tofixed for decimal
    setBmi(bmiValue)
    if(bmiValue < 18.5) {
      toast.warning("You are underweight. Consider seeking advice from a healthcare provider.")
    } else if(bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success(" CONGRATS:You have a normal weight. Keep up the good work!")
    } else if(bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning("You are overweight. Consider a balanced diet and regular exercise.")
    
  }
  else{
    toast.error(" OOPS:you're in a obese range.Consult a healthcare provider ASAP!!!.")

  }
}

  return (
    <section className='bmi'>
      <h1>BMI Calculator</h1>
    <div className='container'>
      <div className="wrapper">
        <form onSubmit={calculateBMI}>
          <div>
            <label>Height(cm)</label>
            <input type='number' 
            value={height} 
            onChange={(e) => setHeight(e.target.value)} 
            required/>
          </div>
           <div>
            <label>Weight(kg)</label>
            <input type='number' 
            value={weight}
             onChange={(e) => setWeight(e.target.value)} 
            required/>
          </div>
           <div>
            <label>Gender</label>
            <select name="gender" id="gender" onChange={(e) => setGender(e.target.value)} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <button type="submit">Calculate BMI</button>
        </form>
      </div>
      <div className="wrapper">
        <img src="/bmi-calculator.jpg" alt="bmiImage" />
      </div>

    </div>
    </section>
  )
}

export default BMICalculator
