'use client';

import { submitContactForm } from '@/actions/submitContactForm';
import Form from 'next/form';
import { useActionState } from 'react';

export default function ContactForm() {
  const [state, action, isLoading] = useActionState(submitContactForm, {
    success: false,
    successMsg: '',
    name: '',
    email: '',
    subject: 'question',
    message: '',
  });

  return (
    <Form action={action}>
      <div className='form-grid'>
        <label htmlFor='name'>Name *: </label>
        <input
          type='text'
          id='name'
          name='name'
          placeholder='Robin Miller'
          defaultValue={state.name}
          minLength={2}
          maxLength={32}
          required
        />
        <label htmlFor='email'>Email address: </label>
        <input
          type='email'
          id='email'
          name='email'
          placeholder='robin.miller@gmail.com'
          defaultValue={state.email}
          minLength={6}
          maxLength={64}
        />
        <label htmlFor='subject'>Subject: </label>
        <select id='subject' name='subject' defaultValue={state.subject}>
          <option value='ta'>Concerning TA</option>
          <option value='question'>Question</option>
          <option value='suggestion'>Suggestion</option>
          <option value='bug'>Bug</option>
          <option value='other'>Other</option>
        </select>
      </div>
      <label htmlFor='message'>Your message *:</label>
      <br />
      <textarea
        id='message'
        name='message'
        placeholder={`Your message to me...\nDon't share any sensitive info like passwords and such.`}
        defaultValue={state.message}
        rows={4}
        cols={64}
        required
      />
      <br />
      <label>
        <i>*: Required</i>
      </label>
      <br />
      <button disabled={isLoading} type='submit'>
        {isLoading ? 'Sending...' : 'Submit message'}
      </button>{' '}
      <span style={{ color: state.success ? '' : 'orange' }}>
        {state ? state.successMsg : ''}
      </span>
    </Form>
  );
}
