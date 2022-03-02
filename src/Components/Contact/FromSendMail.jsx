import React from 'react'
import { useForm } from '../../hooks/useForm'
import Swal from 'sweetalert2'
import { isEmpty, isEmail } from 'validator'

export const FromSendMail = () => {

    const [values, handleValuesChange, resetForm] = useForm({ name: '', email: '', message: '' });
    const { name, email, message } = values;

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isEmpty(name) || isEmpty(email) || isEmpty(message)) {
            return Swal.fire({
                title: 'Campos vacios'
            })
        }
        if (!isEmail(email)) {
            return Swal.fire({
                title: 'Email invalido'
            })
        }
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
        if (resp.ok) {
            Swal.fire({
                title: 'Mensaje enviado',
                text: `${name}, en breves me pondre en contacto con usted.`
            })
            resetForm();
        } else {
            Swal.fire({
                title: 'Error',
                text: 'Ah ocurrido un error, contactame por otro medio'
            })
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
                placeholder='Nombre'
                value={name}
                
            />
            <input
                type="text"
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
                placeholder='Mensaje'
                value={message}
            >
            </textarea>
            <button className='button-primary'>Submit</button>
        </form>

    )
}
