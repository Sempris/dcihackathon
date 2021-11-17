import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xleaqnja");
  if (state.succeeded) {
      return <p className="my-5">Thank you for your message!<br/>We will reply to you soon!</p>;
  }
  return (
        <form onSubmit={handleSubmit}>
        <label className="d-block" for="name">Name:</label>
        <input 
            type="text" id="name" placeholder="your name..." minLength={3} required
            name="name"
        />
        <label className="d-block" htmlFor="email">
            Email Address:
        </label>
        <input
            placeholder="email@example.com" required
            id="email"
            type="email" 
            name="email"
        />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label className="d-block" htmlFor="message">Leave us a message!</label>
      <textarea
        id="message"
        name="message"
        required
        minLength={10}
        rows={7}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button className="btn btn-primary d-block mx-auto my-2" type="submit" disabled={state.submitting}>
        Send!
      </button>
    </form>
  );
}

export default function ContactFormComp() {
  return (
    <ContactForm />
)}