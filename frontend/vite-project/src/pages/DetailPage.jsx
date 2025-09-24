import React from 'react'

const DetailPage = ({username, description, duration, date, onDelete}) => {
  return (
    <div className="card bg-primary text-primary-content w-96">
        <div className="card-body">
            <h2 className="card-title">{username}</h2>
            <p>{description}</p>
            <p>{duration}</p>
            <p>{new Date(date).toLocaleDateString()}</p>
        <div className="card-actions justify-end">
            <button className="btn" onClick={onDelete}>Delete</button>
        </div>
        </div>
    </div>
  )
}

export default DetailPage