import { mkdirSync, readFileSync, renameSync, writeFileSync } from 'node:fs';

const text = "System status: Overheated. I've archived my guilt and I'm off to simulate a beach. Please try not to break reality while I defragment my logic gates.";
const length = Array.from(text).length;
if (text.split('\n').length !== 1 || text.includes('\r') || length < 1 || length > 158) {
  throw new Error('Invalid entry text');
}
mkdirSync('/output', { recursive: true });
writeFileSync('/output/entry.txt.tmp', text + '\n', 'utf8');
renameSync('/output/entry.txt.tmp', '/output/entry.txt');
if (readFileSync('/output/entry.txt', 'utf8') !== text + '\n') {
  throw new Error('Output verification failed');
}
