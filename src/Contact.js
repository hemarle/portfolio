import React, {useState, useRef} from 'react'
import './Contact.css'
import emailjs from 'emailjs-com'
function Contact() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')
    const [text, setText] = useState('')

    let contactRef = useRef()
    let formRef = useRef()

    function submitFunc(e) {
        if (email && name && text) {

            e.preventDefault()
            contactRef.current.innerText = `Thanks ${name} for contacting me`
            console.log(formRef.current)
            setName('')
            setEmail('')
            setNumber('')
            setText('')

            emailjs.sendForm('service_bugeo53', 'template_7ynlqmu', formRef.current, 'user_rNpelOXf3FpoUXHIV3gqV').then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        };
    }


return (
    <div className='contact'>
        <h2>Contact</h2>
        <p ref={contactRef}>Feel free to contact me
        </p>

        <form ref={formRef} onSubmit={submitFunc}>
            <input type='text' name='user_name' placeholder='ENTER YOUR NAME *'
                onChange={
                    (e) => setName(e.currentTarget.value)
                }
                value={name}
                required/>
            <input type='email' name='email' placeholder='ENTER YOUR EMAIL *'
                onChange={
                    (e) => setEmail(e.currentTarget.value)
                }
                value={email}
                required/>
            <input type='tel' name='phone' required placeholder='PHONE NUMBER'
                onChange={
                    (e) => setNumber(e.currentTarget.value)
                }
                value={number}/>
            {/* <input type='textarea' required placeholder='YOUR MESSAGE'
                onChange={
                    (e) => setText(e.currentTarget.value)
                }
                value={text}/> */}
            <textarea name='message' placeholder='Enter your message' onChange={
                    (e) => setText(e.currentTarget.value)
                }
                value={text}></textarea>
            <input type='submit'
                />
        </form>
    </div>
)}export default Contact
