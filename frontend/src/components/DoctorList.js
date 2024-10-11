//import { Cursor } from 'mongoose'
import React from 'react'
import { useNavigate } from 'react-router-dom'
const DoctorList = ({ doctor }) => {
    const navigate = useNavigate()
    return (
        <div>
            <div className='card m-2' style={{ cursor: 'pointer' }} onClick={() => { navigate(`/doctor/book-appointment/${doctor._id}`) }}>
                <div className='card-header'>
                    Mr. {doctor.firstName} {doctor.lastName}
                </div>
                <div className='card-body'>
                    <p> <b>Description</b> {doctor.description} </p>
                    <p> <b>Features</b> {doctor.features} </p>
                    <p> <b>Email</b> {doctor.email} </p>
                    <p> <b>Timing</b> {doctor.timings[0]} - {doctor.timings[1]} </p>
                    <p> <b></b> { } </p>
                    <p> <b></b> { } </p>
                </div>
            </div>
        </div>
    )
}

export default DoctorList
