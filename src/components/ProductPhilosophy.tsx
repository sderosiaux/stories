'use client';

import { motion } from 'framer-motion';
import { Command, GitBranch, Mouse } from 'lucide-react';

export default function ProductPhilosophy() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Product <span className="text-cyan-400">Philosophy</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Click, type, or commit — your choice. All tracked. All safe.
            <br />
            <em className="text-cyan-400">Built for humans, not just machines.</em>
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-xl p-6 text-center"
          >
            <Mouse className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Multimodal Access</h3>
            <p className="text-gray-400">UI, CLI, GitOps, Terraform - use what works for your team</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-xl p-6 text-center"
          >
            <Command className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Metadata-First</h3>
            <p className="text-gray-400">No need for naming convention gymnastics - rich metadata tells the story</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-xl p-6 text-center"
          >
            <GitBranch className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-3">Approval, Not Chaos</h3>
            <p className="text-gray-400">Self-service with guardrails - freedom within boundaries</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}