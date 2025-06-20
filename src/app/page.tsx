'use client';

import { useState } from 'react';

const topics = [
  'Number and Algebra',
  'Functions',
  'Geometry and Trigonometry',
  'Statistics and Probability',
  'Calculus',
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
          Browse exam questions sorted by topic. Free, clear, and easy to use.
        </p>

        <input
          type="text"
          placeholder="Search topics..."
          className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filteredTopics.map((topic) => (
            <li
              key={topic}
              className="p-4 bg-white rounded-xl shadow hover:shadow-md transition cursor-pointer"
            >
              {topic}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
