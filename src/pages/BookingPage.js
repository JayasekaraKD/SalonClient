import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { DatePicker, TimePicker, message } from 'antd'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { hideLoading, showLoading } from '../redux/features/alertSlice'
const BookingPage = () => {
    const { user } = useSelector((state) => state.user);
    const params = useParams();
    const [doctors, setDoctors] = useState([]);
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [isAvailable, setIsAvailable] = useState(false)

    const dispatch = useDispatch()
    //login user data
    const getUserData = async () => {
        try {
            const res = await axios.post('/api/v1/doctor/getDoctorByid', {
                doctorId: params.doctorId
            }, {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            })
            if (res.data.success) {
                setDoctors(res.data.data)
            }
        } catch (error) {
            console.log(error);
        }
    }

    //booking func
    const handleBooking = async () => {
        try {
            setIsAvailable(true)
            if (!date && !time) {
                return alert("Date and time required")
            }
            dispatch(showLoading())
            const res = await axios.post('/api/v1/user/book-appointment', {
                doctorId: params.doctorId,
                userId: user._id,
                doctorInfo: doctors,
                userInfo: user,
                date: date,
                time: time
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(hideLoading())
            if (res.data.success) {
                message.success(res.data.message)
            }
        } catch (error) {
            dispatch(hideLoading());
            console.log(error);
        }

    }
    //check booking availability
    const handleBookingAvailability = async () => {
        try {
            dispatch(showLoading());
            const res = await axios.post('/api/v1/user/booking-availability',
                { doctorId: params.doctorId, date, time },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            dispatch(hideLoading());
            if (res.data.success) {
                setIsAvailable(true);
                console.log(isAvailable)
                message.success(res.data.message)
            } else {
                message.error(res.data.message)
            }
        } catch (error) {
            dispatch(hideLoading());
            console.log(error)
        }
    }


    useEffect(() => {
        getUserData()
        //eslint-disable-next-line
    }, [])
    return (
        <Layout>
            <h1>Booking Page </h1>
            <div className='container m-2'>
                {doctors && doctors.timings && (
                    <div>
                        <h4>Mr.{doctors.firstName} {doctors.lastName}</h4>
                        <h4>Fees(per hour): {doctors.feesAvg}</h4>
                        <h4>Timing {doctors.timings[0]} - {doctors.timings[1]} </h4>
                        <div className='d-flex flex-column w-50'>
                            <DatePicker className='m-2' format="DD-MM-YYYY" onChange={(value) => {
                                setIsAvailable(false);
                                setDate(moment(value).format("DD-MM-YYYY"))
                            }
                            } />

                            <TimePicker className='m-2' format="HH:mm" onChange={(value) => {
                                setIsAvailable(false);
                                setTime(moment(value).format("HH:mm"))
                            }
                            } />
                            <button className='btn btn-primary mt-2' onClick={handleBookingAvailability}>Check Availability</button>
                            {!isAvailable && (
                                <button className='btn btn-primary mt-2  bg-pink-500' onClick={handleBooking} >Book Now</button>

                            )}
                        </div>
                    </div>
                )
                }
            </div>
        </Layout>

    )
}

export default BookingPage
