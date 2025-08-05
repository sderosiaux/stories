'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Play, Book, MessageCircle } from 'lucide-react';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to <span className="text-orange-400">Transform</span>
            <br />
            Your Kafka Experience?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
            Join the companies who&apos;ve made Kafka accessible to everyone.
            <br />
            <em className="text-orange-400">Alice finally gets to enjoy her coffee. Bob gets his reports on time.</em>
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <motion.a
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-r from-orange-500 to-pink-500 text-white p-6 rounded-xl text-center block hover:shadow-lg transition-all"
          >
            <Play className="w-8 h-8 mx-auto mb-4" />
            <h3 className="font-bold mb-2">Try the Demo</h3>
            <p className="text-sm opacity-90">Interactive sandbox</p>
          </motion.a>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 border border-slate-600 text-white p-6 rounded-xl text-center block hover:border-orange-400 transition-all"
          >
            <ExternalLink className="w-8 h-8 mx-auto mb-4 text-orange-400" />
            <h3 className="font-bold mb-2">Watch Live Demo</h3>
            <p className="text-sm text-gray-400">See it in action</p>
          </motion.a>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 border border-slate-600 text-white p-6 rounded-xl text-center block hover:border-orange-400 transition-all"
          >
            <Book className="w-8 h-8 mx-auto mb-4 text-orange-400" />
            <h3 className="font-bold mb-2">Read the Docs</h3>
            <p className="text-sm text-gray-400">Implementation guide</p>
          </motion.a>

          <motion.a
            href="#"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-slate-800 border border-slate-600 text-white p-6 rounded-xl text-center block hover:border-orange-400 transition-all"
          >
            <MessageCircle className="w-8 h-8 mx-auto mb-4 text-orange-400" />
            <h3 className="font-bold mb-2">Contact Us</h3>
            <p className="text-sm text-gray-400">Let&apos;s talk</p>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-2xl font-light text-gray-300 mb-4">
            Built for <span className="text-orange-400 font-semibold">Kafka</span>.
            <br />
            Loved by <span className="text-orange-400 font-semibold">humans</span>.
          </p>
          <div className="flex justify-center items-center space-x-2 text-sm text-gray-500">
            <span>© 2024 Conduktor</span>
            <span>•</span>
            <span>Making Kafka accessible to everyone</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}