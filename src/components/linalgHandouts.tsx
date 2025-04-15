import { list } from '@vercel/blob';
import { unstable_cache } from 'next/cache';
import Link from 'next/link';

export default async function LinalgHandouts() {
  const handouts = await unstable_cache(
    async () => await list({ prefix: 'ta/linalg/' }),
    [],
    { revalidate: 60 },
  )();
  return (
    <ul>
      {handouts.blobs.map((blob) => {
        const match = blob.pathname.match(/ta\/linalg\/handout-(\d{2})\.pdf/);
        if (match)
          return (
            <li key={blob.pathname}>
              [ES{match[1]}] <Link href={blob.url}>Handout</Link>
            </li>
          );
      })}
    </ul>
  );
}
