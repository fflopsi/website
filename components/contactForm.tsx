'use client';

import { submitContactForm } from '@/actions/submitContactForm';
import Form from 'next/form';
import Link from 'next/link';
import { useActionState, useState } from 'react';

export default function ContactForm() {
  const [state, action, isLoading] = useActionState(submitContactForm, {
    success: false,
    successMsg: '',
    name: '',
    email: '',
    subject: 'Question',
    message: '',
  });

  const [subject, setSubject] = useState(state.subject);
  const [email, setEmail] = useState(state.email);
  const [isEmailValid, setIsEmailValid] = useState(false);

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
          value={email}
          defaultValue={state.email}
          maxLength={64}
          onChange={(e) => {
            setEmail(e.target.value);
            setIsEmailValid(e.target.validity.valid);
          }}
        />
        <label htmlFor='subject'>Subject: </label>
        <select
          id='subject'
          name='subject'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        >
          <option value='TA'>Concerning TA</option>
          <option value='Question'>Question</option>
          <option value='Suggestion'>Suggestion</option>
          <option value='Bug'>Bug</option>
          <option value='Other'>Other</option>
        </select>
        {subject === 'Bug' && (
          <i style={{ gridColumn: '1 / -1' }}>
            If you know how,{' '}
            <Link
              target='_blank'
              href={`https://${process.env.VERCEL_GIT_PROVIDER}.com/${process.env.VERCEL_GIT_REPO_OWNER}/${process.env.VERCEL_GIT_REPO_SLUG}/issues/new`}
            >
              create an issue on GitHub
            </Link>{' '}
            instead.
          </i>
        )}
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
      <input
        type='checkbox'
        id='copy'
        name='copy'
        value='true'
        disabled={!isEmailValid || email === ''}
        style={{ minWidth: 0 }}
      />
      <label htmlFor='copy'> Receive a copy of your message by email</label>
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
