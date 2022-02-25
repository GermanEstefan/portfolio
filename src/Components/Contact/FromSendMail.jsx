import React from 'react'
import { useForm } from '../../hooks/useForm'

export const FromSendMail = () => {

    const [values, handleValuesChange, resetForm] = useForm({ name: '', email: '', message: '' });
    const { name, email, message } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values)
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Mail me</h2>
            <i className='fas fa-envelope'></i>
            <input
                type="text"
                name='name'
                onChange={handleValuesChange}
                autoComplete='off'
                placeholder='Name'
            />
            <input
                type="email"
                name='email'
                onChange={handleValuesChange}
                autoComplete='off'
                placeholder='Email'
            />
            <textarea
                name='message'
                onChange={handleValuesChange}
                autoComplete="off"
                placeholder='Type your inquire'
            >
            </textarea>
            <button>Submit</button>
        </form>

    )
}
