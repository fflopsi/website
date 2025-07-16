'use client';

import Script from 'next/script';

declare global {
  const grecaptcha: {
    enterprise: {
      ready: (cb: () => void) => void;
      execute: (
        siteKey: string,
        options: { action: string },
      ) => Promise<string>;
    };
  };
}

export function Recaptcha({ action }: { action: string }) {
  const siteKey = '6LdtGYUrAAAAALmAOd-PSkICuKw65bMJNh1FS_Ox';
  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/enterprise.js`}
        strategy='afterInteractive'
      />
      <div
        className='g-recaptcha'
        data-sitekey={siteKey}
        data-action={action}
      />
    </>
  );
}

export function RecaptchaHidden({ action }: { action: string }) {
  const siteKey = '6LcGOYUrAAAAAPIVkoLzsJPbWlzt_QZoAQ0sWPzE';
  const executeRecaptcha = () => {
    if (typeof grecaptcha !== 'undefined') {
      grecaptcha.enterprise.ready(async () => {
        try {
          const token = await grecaptcha.enterprise.execute(siteKey, {
            action,
          });
          const tokenInput = document.getElementById(
            'recaptcha-token',
          ) as HTMLInputElement;
          if (tokenInput) tokenInput.value = token;
        } catch (e) {
          console.error('Recaptcha error', e);
        }
      });
    }
  };

  return (
    <>
      <Script
        src={`https://www.google.com/recaptcha/enterprise.js?render=${siteKey}`}
        strategy='afterInteractive'
        onLoad={executeRecaptcha}
      />
      <input type='hidden' name='g-recaptcha-response' id='recaptcha-token' />
    </>
  );
}
