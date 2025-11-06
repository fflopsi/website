import fs from 'fs';
import path from 'path';

export const prerender = true;

export function load() {
  const pdfs: string[] = fs
    .readdirSync(path.join(process.cwd(), 'static', 'ta', 'complex-analysis'))
    .filter((f) => /^handout-\d{2}\.pdf$/.test(f))
    .sort();
  return { pdfs: pdfs };
}
