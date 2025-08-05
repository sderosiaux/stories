'use client';

import { motion } from 'framer-motion';
import { Settings, Zap, Activity, Bell } from 'lucide-react';

export default function OperationsSection() {
  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-purple-400">Operations</span> & Monitoring
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Kafka Connect config: now 70% less YAML-induced anxiety.
            <br />
            <em className="text-purple-400">Conduktor watches so you don't have to.</em>
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-2xl p-6"
          >
            <div className="flex items-center mb-4">
              <Settings className="w-8 h-8 text-purple-400 mr-4" />
              <h3 className="text-2xl font-bold">Visual Config Wizard</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Build Kafka Connect configs with guided forms and real-time validation.
            </p>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400">✅ JSON validation passed</div>
              <div className="text-blue-400">🔧 Schema compatibility verified</div>
              <div className="text-yellow-400">⚡ Performance optimizations applied</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-slate-800 rounded-2xl p-6"
          >
            <div className="flex items-center mb-4">
              <Activity className="w-8 h-8 text-purple-400 mr-4" />
              <h3 className="text-2xl font-bold">Auto-Restart & Recovery</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Automatic failure detection and recovery with customizable policies.
            </p>
            <div className="bg-slate-900 rounded-lg p-4 font-mono text-sm">
              <div className="text-red-400">🚨 Connector failed: network timeout</div>
              <div className="text-yellow-400">🔄 Retry attempt 1/3...</div>
              <div className="text-green-400">✅ Recovery successful</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}