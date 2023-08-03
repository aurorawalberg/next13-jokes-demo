import Link from 'next/link';
import React from 'react';

export default function Footer() {
  return (
    <footer className="pt-8 pb-4 border-t-2 border-purple-light">
      <div className="flex gap-4">
        <Link href="/jokes.rss">RSS</Link>
      </div>
    </footer>
  );
}
