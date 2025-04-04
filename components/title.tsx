'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Suspense } from 'react';
import { getAttr } from './routing';

export default function Title() {
  const title = getAttr(usePathname(), 'title');
  const titles = title.match(/^Florian(\b.*)/);
  return (
    <Suspense fallback={<h1>Florian</h1>}>
      <h1>
        {titles ? (
          <>
            <Link href='/' className='normal'>
              Florian
            </Link>
            {titles[1]}
          </>
        ) : (
          title
        )}
      </h1>
    </Suspense>
  );
}
