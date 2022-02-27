import React from 'react'
import { useForm } from '../../hooks/useForm'

export const FromSendMail = () => {

    const [values, handleValuesChange, resetForm] = useForm({ name: '', email: '', message: '' });
    const { name, email, message } = values;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', name);
        data.append('email', email);
        data.append('message', message);
        const resp = await fetch('https://formspree.io/f/xdoborjj', {
            method: 'POST',
            body: data,
            headers: {
                'Accept': 'application/json'
            }
        })
        console.log(resp)
        if (resp.ok) {
            alert('form enviado')
            resetForm();
        } else {
            alert('Error pa')
        }
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
                value={name}
            />
            <input
                type="email"
                name='email'
                onChange={handleValuesChange}
                autoComplete='off'
                placeholder='Email'
                value={email}
            />
            <textarea
                name='message'
                onChange={handleValuesChange}
                autoComplete="off"
                placeholder='Type your inquire'
                value={message}
            >
            </textarea>
            <button>Submit</button>
        </form>

    )
}
