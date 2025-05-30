import { useState } from 'react'

const newsData = [
  {
    title: "AI Breakthrough in Medicine",
    description: "New AI model can predict heart disease with 97% accuracy.",
    date: "May 30, 2025",
  },
  {
    title: "Global Markets Rally",
    description: "Stocks are surging after central banks hint at rate cuts.",
    date: "May 29, 2025",
  },
  {
    title: "Mars Mission Update",
    description: "NASA's rover finds promising signs of microbial life.",
    date: "May 28, 2025",
  },
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">📰 Today's News</h1>
        <p className="text-gray-600">Latest headlines around the world</p>
      </header>

      <main className="max-w-3xl mx-auto">
        {newsData.map((item, index) => (
          <div key={index} className="bg-white rounded-2xl p-5 mb-6 shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-gray-700 my-2">{item.description}</p>
            <p className="text-sm text-gray-400">{item.date}</p>
          </div>
        ))}
      </main>
    </div>
  )
}

export default App