import '../css/form.css'
import { useState } from 'react';

function Form(){
  const [tripDetails, setTripDetails] = useState({place: null,amount: null, startDate: null, endDate: null})

    function submitDetails(){
  
      alert("Submitted");
    }

    return (
    <>
      <div id = "form">
        <h3>Trip Details</h3>
        <form>
          <label>Place Visited</label>
          <input type='text' name='place' id='place' value={tripDetails.place} placeholder='Enter place you visited' required/>
          <label>Amount Used</label>
          <input type='number' name = 'amount' id='amount' value={tripDetails.amount} placeholder='Enter amount' required/>    
          <label>Start Date</label>
          <input type='date' name = 'startDate' id='startDate'value={tripDetails.startDate}  required/>
          <label>End Date</label>
          <input type='date' name = 'endDate' id = 'endDate' value={tripDetails.endDate} required/>
          <button onClick={submitDetails}>Submit</button>
        </form>
      </div>
    </>
    )
}

export default Form