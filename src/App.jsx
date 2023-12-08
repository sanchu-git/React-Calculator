
import { TextField, Button, Stack } from '@mui/material'
import './App.css'
import { useState } from 'react'


function App() {
  const [interest,setInterest] = useState(0)
  const [principle,setPrinciple] = useState(0)
  const [rate,setRte] = useState(0)
  const [year,setYear] = useState(0)  

  const [ValidPrinciple,setValidPrinciple] = useState(true)
  const [ValidRate,setValidRate] = useState(true)
  const [ValidYear,setValidYear] = useState(true)


  const validateUserInput =(e)=>{
    const {name,value} = e.target
    console.log(`${name} , ${typeof value}`);
    console.log(!!value.match(/^\d+(\.\d+)?$/));
    if(!!value.match(/^\d+(\.\d+)?$/)){
      // VALID PATTERN
      if(name==='principle'){
        setPrinciple(value)
        setValidPrinciple(true)
      }else if(name==='rate'){
        setRte(value)
        setValidRate(true)
      }else{
        setYear(value)
        setValidYear(true)
      }
    }else{
      // INVALID PATTERN
      if(name==='principle'){
        setPrinciple(value)
        setValidPrinciple(false)
      }else if(name==='rate'){
        setRte(value)
        setValidRate(false)
      }else{
        setYear(value)
        setValidYear(false)
      }
    }
  }

  const handleReset = ()=>{
    setPrinciple(0)
    setRte(0)
    setYear(0)
    setInterest(0)
    setValidPrinciple(true)
    setValidRate(true)
    setValidYear(true)
  }

  const handleCalculate = (e)=>{
    e.preventDefault()
    if(!principle || !rate || !year){
      alert("Please fill the Form completely")
    }else{
      setInterest(principle*rate*year/100)
    }
  }



  return (
    <div style={{ width: '100%', height: '100vh', }} className='d-flex justify-content-center align-items-center bg-dark'>
      <div style={{ width: '600px' }} className='bg-light p-5 rounded'>
        <h1 style={{ height: '55px' }}>Simple Interest Calculator</h1>
        <p>Calculate Your simple interest Easily</p>
        <div style={{ width: '100%', height: '150px' }} className='d-flex justify-content-center align-items-center bg-warning mt-5
        text-light shadow rounded flex-column'>
          <h1 style={{ height: '55px' }}> ₹ {interest}</h1>
          <p className='fw-bolder'>Total simple interest</p>
        </div>
        <form className='mt-5' onSubmit={handleCalculate}>
          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-principle" label="₹ Principle Amount" variant="outlined" name='principle' 
              value={principle || ""} onChange={e=>validateUserInput(e)}  />
          </div>
            {!ValidPrinciple&&<div className='mb-3 text-danger fw-bolder'> Invalid Principle Amount </div>}
            <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-rate" label="Rate of Interest (%)" variant="outlined" name='rate'   
             value={rate || ""} onChange={e=>validateUserInput(e)}/>
          </div>
          {!ValidRate&&<div className='mb-3 text-danger fw-bolder'> Invalid Principle Amount </div>}

          <div className="mb-3">
            <TextField className='w-100' id="outlined-basic-time" label="Time Period (Yr)" variant="outlined" name='year'
              value={year || ""} onChange={e=>validateUserInput(e)}/>
          {!ValidYear&&<div className='mb-3 text-danger fw-bolder'> Invalid Principle Amount </div>}

          </div>
          <Stack direction={'row'} spacing={2}>
            <Button type='submit' style={{height:'70px',width:'50%'}} className='bg-dark' variant="contained" 
            disabled={ValidPrinciple&&ValidRate&&ValidYear?false:true}>CALCULATE</Button>
            <Button style={{height:'70px',width:'50%'}} className='text-dark' variant="outlined"
             onClick={handleReset} >RESET</Button>
          </Stack>
        </form>
      </div>
    </div>
  )
}

export default App
