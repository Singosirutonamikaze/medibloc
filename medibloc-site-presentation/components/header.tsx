"use client";
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false)
    const [showContact, setShowContact] = useState(false)

    return (
        <>
            <header className="flex items-center justify-between w-full px-6 py-4 bg-white shadow-sm rounded-lg">
                <div className="flex items-center space-x-4">
                    <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2L2 7v10l10 5 10-5V7l-10-5zM12 19.08l-7-3.5v-7l7 3.5 7-3.5v7l-7 3.5z" />
                        <path d="M12 15.73l-7-3.5v-5l7 3.5 7-3.5v5l-7 3.5z" />
                    </svg>
                    <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-400 cursor-pointer" onClick={() => window.location.href = '/'}>
                        Medibloc
                    </h1>
                </div>

                <nav className="hidden md:flex space-x-8 items-center">
                    <button
                        onClick={() => window.location.href = '/'}
                        className="text-gray-700 dark:text-gray-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-bold"
                    >
                        Accueil
                    </button>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="text-gray-700 dark:text-gray-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-bold"
                    >
                        services
                    </button>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="text-gray-700 dark:text-gray-900 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-bold"
                    >
                        A propos
                    </button>
                    <button
                        onClick={() => setShowContact(true)}
                        className="bg-[#161925] font-bold text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                    >
                        Contact
                    </button>

                    <button
                        className="bg-[#161925] font-bold text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
                        onClick={() => window.location.href = '/connexion'}
                    >
                        commencer
                    </button>
                </nav>

                <button
                    className="md:hidden text-gray-700 dark:text-gray-300"
                    onClick={() => setMenuOpen(open => !open)}
                >
                    {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-white dark:bg-gray-900 shadow-md overflow-hidden"
                    >
                        <div className="flex flex-col p-4 space-y-4">
                            <button onClick={() => window.location.href = '/'} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Accueil</button>
                            <button onClick={() => window.location.href = '/commencer'} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Commencer</button>
                            <button onClick={() => setShowContact(true)} className="text-gray-700 dark:text-gray-300 hover:text-blue-600 transition-colors">Contact</button>
                            <button onClick={() => window.location.href = '/connexion'} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">Connexion</button>
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>

            {/* Contact Modal */}
            <AnimatePresence>
                {showContact && (
                    <motion.div
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-lg relative"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <button
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                                onClick={() => setShowContact(false)}
                                title="Close contact modal"
                            >
                                <FiX size={24} />
                            </button>

                            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Contactez-nous</h2>
                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="Votre nom"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                                <input
                                    type="email"
                                    placeholder="Votre email"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                />
                                <textarea
                                    placeholder="Votre message"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    rows={4}
                                />
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-2 rounded-full hover:bg-blue-700 transition-colors"
                                >
                                    Envoyer
                                </button>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
