import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {
  const [principle, setPrinciple] = useState(0)
  const [rate, setRate] = useState(0)
  const [year, setYear] = useState(0)
  const [interest, setInterest] = useState(0)

  const [invalidPrinciple, setInvalidPrinciple] = useState(false)
  const [invalidRate, setInvalidRate] = useState(false)
  const [invalidYear, setInvalidYear] = useState(false)

  const validateInput = (event) => {
    const { name, value } = event.target
    if (name === 'principle') {
      setPrinciple(value)
      if (/^\d+(\.\d+)?$/.test(value)) {
        setInvalidPrinciple(false)
      } else {
        setInvalidPrinciple(true)
      }
    } else if (name === 'rate') {
      setRate(value)
      if (/^\d+(\.\d+)?$/.test(value)) {
        setInvalidRate(false)
      } else {
        setInvalidRate(true)
      }
    } else if (name === 'year') {
      setYear(value)
      if (/^\d+(\.\d+)?$/.test(value)) {
        setInvalidYear(false)
      } else {
        setInvalidYear(true)
      }
    }
  }

  const handleCalculate = (event) => {
    event.preventDefault()
    console.log("inside Calculate")
    if (principle && rate && year) {
      setInterest(principle * rate * year / 100)
    } else {
      alert("Please fill all the fields")
    }
  }

  const handleReset = () => {
    setInterest(0)
    setPrinciple(0)
    setRate(0)
    setYear(0)
    setInvalidPrinciple(false)
    setInvalidRate(false)
    setInvalidYear(false)
  }

  return (
    <>
      <div style={{ width: '100%', minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>
        <div style={{ width: '600px' }} className='bg-light p-5 rounded'>
          <h3 className='text-center '>Simple Interest Calculator</h3>
          <p className='text-center'>Calculate simple interest Easily !</p>
          <div className='bg-warning p-3 text-light text-center rounded'>
            <h1>₹ {interest}</h1>
            <p className='fw-bolder'>Total Simple Interest</p>
          </div>
          <form className='mt-3'>
            {/* principle amount */}
            <div className='mb-3'>
              <TextField
              value={principle || ""}
                name='principle'
                onChange={validateInput}
                className='w-100'
                id="outlined-principle"
                label="Principle Amount"
                variant="outlined"
              />
            </div>
            {/* invalid principle */}
            {invalidPrinciple && <div className='text-danger'>Please Enter Valid Amount</div>}
            {/* Rate amount */}
            <div className='mb-3'>
              <TextField
               value={rate || ""}
                name='rate'
                onChange={validateInput}
                className='w-100'
                id="outlined-rate"
                label="Rate"
                variant="outlined"
              />
            </div>
            {/* invalid Rate */}
            {invalidRate && <div className='text-danger'>Please Enter Valid Rate</div>}
            {/* Year amount */}
            <div className='mb-3'>
              <TextField
               value={year || ""}
                name='year'
                onChange={validateInput}
                type='number'
                className='w-100'
                id="outlined-year"
                label="Year"
                variant="outlined"
              />
            </div>
            <div>

            </div>
            <Stack direction="row" spacing={2}>
              <Button onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} style={{ width: '50%', height: '70px' }} className='bg-dark' variant="contained">Calculate </Button>
              <Button onClick={handleReset} style={{ width: '50%', height: '70px' }} variant="outlined">Reset</Button>
            </Stack>
          </form>

        </div>
      </div>
    </>
  )
}

export default App

