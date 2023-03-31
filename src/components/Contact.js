import React from 'react'
import {
  Form,
  FormGroup,
  Label,
  Input,
}from 'reactstrap'
import { useState } from 'react'
import { toast } from 'react-toastify'
import emailjs from '@emailjs/browser';




const Contact = () => {
  const [message,setMessage]=useState(false)
  
  const handdleSend=()=>{
    setMessage(!message)
    
  }

  const mensaje=()=>toast.success('GRACIAS POR CONTACTARNOS')
  
  const sendEmail=(e)=>{
    // https://www.youtube.com/watch?v=GkwNBPtwdbo&ab_channel=TechRiders-Espa%C3%B1a-
    e.preventDefault();
    //emailjs.sendForm('service','template',e.target,'publickey')
    emailjs.sendForm('service_1p6d16e','template_bpls7wr', e.target,'KUSXCbciQv1hSFHiO').then(res=>{
    console.log(res);
    })
  }

  return (
    <div className='Formulario'>
      <h2 id='Contact'>CONTACTANOS</h2>
      <div className='Formulario--comple'>
        <Form onSubmit={sendEmail}>
        <FormGroup>
            <Label>
              Nombre
            </Label>
            <Input
              id="nombre"
              name="nombre"
              placeholder="Escriba su nombre"
              type="text"
            />
          </FormGroup>

          <FormGroup>
            <Label>
              Email
            </Label>
            <Input
              id="email"
              name="email"
              placeholder="Escriba su email"
              type="email"
            />
          </FormGroup>
        
          <FormGroup>
            <Label>
              Text Area
            </Label>
            <Input
              id="texto"
              name="text"
              placeholder="Escriba su mensaje"
              type="textarea"
            />
          </FormGroup>

          {/* <button onClick={()=>{handdleSend}}>
            Submit
          </button>
           <div className='Mensaje'>
          {message?(
            <div className='Mensajevisible'>
              <p>GRACIAS POR CONTACTARNOS, PRONTO RESPONDEREMOS SU MENSAJE</p>
            </div>
            ):(
            <div className='Mensajeoculto'>
              <p></p>
            </div>
            )}
          </div> */}
          <button onClick={mensaje} className='btn btn-secondary'>
            Submit
          </button>

        </Form>
      </div>
      
    </div>
  )
}

export default Contact








