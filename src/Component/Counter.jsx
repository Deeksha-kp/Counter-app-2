import React, { useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../Redux/counterSlice'
useState
increment

function Counter() {
  const [amount,setAmount]=useState(0)
  const dispatch=useDispatch()
  const { count} =useSelector(state=>state.counterReducer)
  const handleincrementByAmount=()=>{
    if (amount){
      dispatch(incrementByAmount(Number(amount)))
    }
    else{
      alert("enter the amount to incement counter value")
    }
  }
  return (
    <>
    <div style={{minHeight:'100vh',backgroundColor:'black'}} className='text-center'>
    <h1 className='text-center text-white'>Counter App</h1>
    <div className='w-100 d-flex align-items-center justify-content-center' >
    <div className='border border-3 border-light rounded p-3 mt-5' style={{height:'400px',width:'700px'}} >

        <h1 className='my-5 text-white'>{count}</h1>

    <div className='d-flex align-item-center justify-content-around mt-5'>
        <button onClick={()=>dispatch(increment())}className='btn btn-warning'>Increment</button>
        <button onClick={()=>dispatch(reset())} className='btn btn-danger'>Reset</button>
        <button onClick={()=>dispatch(decrement())} className='btn btn-success'>Decrement</button>

    </div>

<div className='d-flex align-item-center justify-content-around mt-5' >
            <input onChange={(e)=>setAmount(e.target.value)} className='form-control' type="text" placeholder='Incremented Counter Amount' ></input>
            <button onClick={handleincrementByAmount} className='btn btn-primary ms-3'>Increment By Amount</button>



</div>



    </div>
    </div>

    </div>
    
    
    </>
  )
}

export default Counter