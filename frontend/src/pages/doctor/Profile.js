import axios from 'axios'
import Layout from './../../components/Layout'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Form, Col, Input, Row, message, TimePicker, } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { showLoading, hideLoading } from '../../redux/features/alertSlice'
import moment from 'moment'
//import doctorModel from '../../../../models/ownerModels'



const Profile = () => {
    const { user } = useSelector((state) => state.user);
    const [doctor, setDoctor] = useState(null);
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate()
    //update doc
    const handleFinish = async (values) => {
        try {
            dispatch(showLoading())
            const res = await axios.post('/api/v1/doctor/updateProfile', {
                ...values, userId: user._id, timings: [
                    moment(values[0]).format("HH:mm"),
                    moment(values[1]).format("HH:mm"),
                ]
            }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            dispatch(hideLoading())
            if (res.data.success) {
                message.success('Succesfuty Added')
                navigate('/')

            } else message.error(res.data.success);
        } catch (error) {
            dispatch(hideLoading())
            console.log(error)
            message.error('Something went wrong')

        }

    }
    //update doc

    //get doc details
    const getDoctorInfo = async () => {
        try {
            const res = await axios.post("/api/v1/doctor/getDoctorInfo", { userId: params.id }, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`
                }
            })
            if (res.data.success) {
                setDoctor(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getDoctorInfo()
        //eslint-disable-next-line 
    }, [])
    return (

        <Layout>
            <h1> Manage Profile </h1>
            {doctor && (

                <Form layout="vertical" onFinish={handleFinish} className='m-3' initialValues={{
                    ...doctor, timings: [

                        moment(doctor.timings[0], "HH:mm"),
                        moment(doctor.timings[1], "HH:mm"),
                    ]
                }}>
                    <h4 className=''> Personal Details : </h4>
                    <Row gutter={20}>
                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label="First Name" name="firstName" required rules={[{ required: true }]}>
                                <Input type='text' placeholder='Your Name' />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label="Last Name" name="lastName" required rules={[{ required: true }]}>
                                <Input type='text' placeholder='Your Name' />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label="Phone" name="phone" required rules={[{ required: true }]}>
                                <Input type='text' placeholder='Phone number' />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label="email" name="email" required rules={[{ required: true }]}>
                                <Input type='text' placeholder='Your email' />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label="website" name="website" required >
                                <Input type='text' placeholder='Your website' />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label="address" name="address" required rules={[{ required: true }]}>
                                <Input type='text' placeholder='Your address' />
                            </Form.Item>
                        </Col>
                    </Row>
                    <h4 className=''> Other Details : </h4>

                    <Row gutter={20}>
                        <Col xs={24} md={24} lg={8}  >
                            <Form.Item label="description" name="description" required rules={[{ required: true }]}>
                                <Input type='text' placeholder='Your description' />
                            </Form.Item>
                        </Col>

                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label="features" name="features" required rules={[{ required: true }]}>
                                <Input type='text' placeholder=' features' />
                            </Form.Item>
                        </Col>


                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label="Price Range" name="feesAvg" required rules={[{ required: true }]}>
                                <Input type='text' placeholder='Price Range' />
                            </Form.Item>
                        </Col>


                        <Col xs={24} md={24} lg={8}>
                            <Form.Item label="timings" name="timings" required rules={[{ required: true }]}>
                                <TimePicker.RangePicker format="HH:mm" />
                            </Form.Item>
                        </Col>
                        <Col xs={24} md={24} lg={8}></Col>
                        <Col xs={24} md={24} lg={8}>

                        </Col>
                    </Row>
                    <div className='d-flex justify-content-end'>
                        <button type="submit" class="  text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 content-center ">Update</button>
                    </div>

                </Form>
            )}
        </Layout>

    )
}

export default Profile
