import Link from 'next/link';

export default function DevWarning() {
  return process.env.VERCEL_ENV !== 'production' ? (
    <>
      <h2 style={{ color: 'red', fontSize: '2rem' }}>
        THIS IS A PREVIEW/DEVELOPMENT VERSION OF THIS WEBSITE!
      </h2>
      <p style={{ fontSize: '1.5rem', fontStyle: 'italic' }}>
        I do not guarantee that anything on this version works as expected. If you want to see the normal, functional version, <Link style={{ color: 'red' }} href={`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`}>click here</Link>.
      </p>
      <hr />
    </>
  ) : '';
}
