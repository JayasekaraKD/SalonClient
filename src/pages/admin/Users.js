import React, { useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import axios from 'axios'
import { Table } from 'antd'
const Users = () => {
    const [users, setUsers] = useState([])

    //get users
    const getUsers = async () => {
        try {
            const res = await axios.get('/api/v1/admin/getAllUsers', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            });
            if (res.data.success) {
                setUsers(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        getUsers()
    }, []);

    //antD table col
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name'
        },
        {
            title: 'Email',
            dataIndex: 'email'
        }, {
            title: 'Doctor',
            dataIndex: 'isOwner',
            render: (text, record) => (
                <span> {record.isOwner ? 'yes' : 'No'} </span>
            )
        },
        {
            title: 'Created At',
            dataIndex: 'createdat'
        },
        {
            title: 'Action',
            dataIndex: 'action',
            render: (text, record) => (
                <div className='d-flex'>
                    <button className='btn btn-danger' >Block</button>
                </div>
            )
        },

    ]
    return (
        <Layout>
            <h1 className='text-center m-2'>User List</h1>
            <Table columns={columns} dataSource={users} />
        </Layout  >
    )
}

export default Users