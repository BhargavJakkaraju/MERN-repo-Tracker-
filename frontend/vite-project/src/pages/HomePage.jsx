import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react";
import DetailPage from './DetailPage';

const HomePage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const openCreate = () => {
        navigate('/create', { state: {background: location} })
    }

    const handleDelete = async (id) => {
        try {
            await fetch(`http://localhost:5002/exercises/${id}`, {method: 'DELETE'}),
            setWorkouts(prev => prev.filter(w => w._id !== id))
        } catch (e) {
            console.error("Delete failed", e);
        }
    }

    const [workouts, setWorkouts] = useState([])
    useEffect(() => {
        const load = async () => {
          const res = await fetch("http://localhost:5002/exercises");
          const data = await res.json();
          setWorkouts(data);
        };
        load();
      }, [location.search]);


  return (
    <><div className="navbar bg-blue-800">
          <div className="navbar-start">
              <button className='btn btn-ghost text-4xl'>Exercise Tracker</button>
          </div>
          <div className="navbar-end">
              <button className="btn bg-primary text-white-4xl" onClick={openCreate}>Add Workout</button>
          </div>
      </div>
      <main className='p-4'>
        <div className='flex flex-wrap gap-4'>
            {workouts.map(w => (
                <DetailPage 
                key={w._id}
                username = {w.username}
                description={w.description}
                duration={w.duration}
                date={w.date}
                onDelete={() => handleDelete(w._id)}
                />
            ))}
        </div>
    </main>
    </>
  )
}

export default HomePage