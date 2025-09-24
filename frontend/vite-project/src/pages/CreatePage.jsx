import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";

const CreatePage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("")
  const [description, setDescription] = useState("")
  const [duration, setDuration] = useState("")
  const [date, setDate] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {username, description, duration: Number(duration), date}
    const res = await fetch("http://localhost:5002/exercises/add", {
      method: "POST",
      headers: {"Content-Type":"application/json"}, 
      body: JSON.stringify(payload)
    })

    setUsername("")
    setDescription("")
    setDuration("")
    setDate("")

    navigate(`/?refresh=${Date.now()}`, { replace: true });
  }


  return (
    <div className='modal modal-open'>
      <div className="modal-box max-w-2xl h-[400px] overflow-y-auto">
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-5xl font-semibold'>Workout</h2>
          <button type='submit' form='create-form' className='btn btn-primary text-lg'>Create</button>
        </div>
        <form id="create-form" onSubmit={handleSubmit}>
          <div className='form-control mb-4'>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Enter Workout Name' className='input input-bordered w-1/2' required/>
          </div>
          <div className='form-control mb-4'>
            <input type='text' value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Enter Description' className='input input-bordered w-1/2' required/>
          </div>
          <div className='form-control mb-4'>
            <input type='number' value={duration} onChange={(e) => setDuration(e.target.value)} placeholder='Enter Duration (min)' className='input input-bordered w-1/2' required/>
          </div>
          <div className='form-control mb-4'>
            <input type='date'value={date} onChange={(e) => setDate(e.target.value)} placeholder='Enter Date' className='input input-bordered w-1/2' required/>
          </div>
        </form>
        <button className='btn btn-error' onClick={() => navigate(-1)}>Cancel</button>
      </div>
    </div>
  )
}

export default CreatePage