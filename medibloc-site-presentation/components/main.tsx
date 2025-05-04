import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Main() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-white to-blue-50 p-8">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between max-w-6xl mx-auto py-16">
        <div className="w-full md:w-1/2 space-y-6">
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100"
          >
            Bienvenue sur MediBloc
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            Gérez facilement les dossiers médicaux de vos patients avec une interface intuitive et sécurisée.
          </motion.p>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1, type: 'spring', stiffness: 200 }}
            className="flex space-x-4"
          >
            <a
              href="/commencer"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors"
            >
              Utiliser le web
            </a>
            <a
              href="#"
              className="inline-block border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-600 hover:text-white transition-colors"
            >
              Installer l'app
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 mb-12 md:mb-0"
        >
          <img
            src="/hero-medical.png"
            alt="Illustration médicale"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'Centralisation', desc: 'Tous les dossiers patients au même endroit.' },
            { title: 'Sécurité', desc: 'Accès sécurisé avec authentification 2FA.' },
            { title: 'Statistiques', desc: 'Suivi et rapports clairs et détaillés.' }
          ].map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 * i }}
              className="p-6 bg-blue-50 dark:bg-gray-800 rounded-xl shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-6"
        >
          Prêt à optimiser votre gestion médicale ?
        </motion.h2>
        <div className="flex justify-center space-x-4">
          <Link href="/inscription">
            <a className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-700 transition-colors">
              Créer un compte
            </a>
          </Link>
          <Link href="/commencer">
            <a className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-full text-lg font-medium hover:bg-blue-600 hover:text-white transition-colors">
              Découvrir le web
            </a>
          </Link>
        </div>
      </section>
    </main>
  )
}
