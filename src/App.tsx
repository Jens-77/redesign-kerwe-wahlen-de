// TODO: Implementiere das Redesign basierend auf SPEC.md
// Original-Webseite: https://kerwe-wahlen.de
// Alle Inhalte von der Original-URL übernehmen und modern umsetzen

import { motion } from 'framer-motion'

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* TODO: Navigation */}
      {/* TODO: Hero Section */}
      {/* TODO: Hauptinhalt */}
      {/* TODO: Footer */}
      <div className="flex items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center p-8"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Redesign: kerwe-wahlen.de
          </h1>
          <p className="text-gray-600 mb-6">
            Implementierung basierend auf SPEC.md
          </p>
          <a
            href="https://kerwe-wahlen.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Original-Webseite ansehen →
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default App
