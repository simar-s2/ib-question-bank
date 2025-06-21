import { notFound } from 'next/navigation';

const topicData: Record<string, string[]> = {
  algebra: ['Solve for x in 2x + 3 = 7', 'Factorize x² - 4x + 3'],
  functions: ['Sketch y = 1/x', 'Find inverse of f(x) = 2x + 1'],
  calculus: ['Differentiate y = x²', 'Integrate y = 3x²'],
  statistics: ['Mean and Standard Deviation question', 'Interpret a histogram'],
  probability: ['P(A ∩ B) question', 'Binomial probability example'],
  vectors: ['Find angle between vectors', 'Vector magnitude task'],
  geometry: ['Find area of triangle using trigonometry', 'Circle theorems question'],
  'number-&-sets': ['Set notation question', 'Prime factorization of a number'],
};

type Params = {
  params: {
    slug: string;
  };
};

export default function TopicPage({ params }: Params) {
  const questions = topicData[params.slug];
  const displayName = params.slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

  if (!questions) return notFound();

  return (
    <main className="min-h-screen px-4 py-8 bg-white text-gray-900">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {displayName}
        </h2>

        <ul className="space-y-4">
          {questions.map((q, index) => (
            <li
              key={index}
              className="p-4 border border-gray-300 rounded-xl shadow-sm bg-gray-50"
            >
              {q}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
