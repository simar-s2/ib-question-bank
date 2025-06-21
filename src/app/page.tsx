'use client';

import Link from 'next/link';
import { useState } from 'react';

const topics = [
  'Algebra',
  'Functions',
  'Calculus',
  'Statistics',
  'Probability',
  'Vectors',
  'Geometry',
  'Number & Sets',
];

export default function HomePage() {
  const [search, setSearch] = useState('');

  const filteredTopics = topics.filter((topic) =>
    topic.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen px-4 py-8 bg-gray-50 text-gray-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-4 text-center">
          IB Math Question Bank
        </h1>
        <p className="text-center text-gray-600 mb-8">
          Browse exam questions sorted by topic.
        </p>

        <input
          type="text"
          placeholder="Search topics..."
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredTopics.map((topic) => {
            const slug = topic.toLowerCase().replace(/\s+/g, '-');
            return (
              <Link key={slug} href={`/topics/${slug}`}>
                <li className="p-4 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer">
                  {topic}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
