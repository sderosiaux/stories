'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Network, Eye, Database, Users, Shield, Zap } from 'lucide-react';

export default function BigPicture() {
  const [selectedFlow, setSelectedFlow] = useState<string | null>(null);

  // Mock data for the Sankey diagram
  const dataFlows = [
    {
      id: 'orders',
      from: 'Order Service',
      topic: 'order_validated',
      to: ['Analytics Team', 'Billing Service', 'Warehouse'],
      volume: '1.2M/day',
      owner: 'Alice (Platform)',
      color: 'from-blue-400 to-cyan-400'
    },
    {
      id: 'payments',
      from: 'Payment Gateway',
      topic: 'payment_processed',
      to: ['Finance Dashboard', 'Fraud Detection'],
      volume: '800K/day',
      owner: 'Finance Team',
      color: 'from-green-400 to-emerald-400'
    },
    {
      id: 'users',
      from: 'User Service',
      topic: 'user_registered',
      to: ['CRM System', 'Email Service', 'Analytics'],
      volume: '50K/day',
      owner: 'Product Team',
      color: 'from-purple-400 to-pink-400'
    },
    {
      id: 'notifications',
      from: 'Notification Hub',
      topic: 'user_notifications',
      to: ['Mobile App', 'Email Service', 'SMS Gateway'],
      volume: '2.1M/day',
      owner: 'Product Team',
      color: 'from-orange-400 to-red-400'
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8">
              The <span className="gradient-text">Big Picture</span>
            </h2>
            <p className="text-2xl text-white/60 max-w-3xl">
              One picture. Ten thousand Kafka configs avoided.
              <br />
              <span className="text-white/40 text-lg">See your data flow like never before.</span>
            </p>
          </motion.div>
        </div>

        {/* Interactive Sankey Diagram */}
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-8 relative overflow-hidden"
          >
            {/* Diagram container */}
            <div className="relative min-h-[500px] flex items-center">
              {/* Producers column */}
              <div className="flex-1 space-y-8">
                <h3 className="text-xl font-bold text-center text-white/80 mb-8">Producers</h3>
                {dataFlows.map((flow, index) => (
                  <motion.div
                    key={`producer-${flow.id}`}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass p-4 rounded-xl text-center relative group cursor-pointer"
                    onClick={() => setSelectedFlow(selectedFlow === flow.id ? null : flow.id)}
                  >
                    <div className="w-3 h-3 bg-white/60 rounded-full mx-auto mb-2" />
                    <p className="text-sm font-medium text-white/80">{flow.from}</p>
                    <p className="text-xs text-white/50">{flow.volume}</p>
                  </motion.div>
                ))}
              </div>

              {/* Flow lines and topics */}
              <div className="flex-2 relative mx-8">
                <h3 className="text-xl font-bold text-center text-white/80 mb-8">Topics</h3>
                
                {dataFlows.map((flow, index) => (
                  <div key={`flow-${flow.id}`} className="relative mb-8">
                    {/* Topic node */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                      className={`relative mx-auto w-48 h-16 glass rounded-full flex items-center justify-center cursor-pointer group ${
                        selectedFlow === flow.id ? 'ring-2 ring-white/50 shadow-2xl' : ''
                      }`}
                      onClick={() => setSelectedFlow(selectedFlow === flow.id ? null : flow.id)}
                      whileHover={{ scale: 1.05 }}
                    >
                      {/* Animated background */}
                      <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${flow.color} opacity-20 group-hover:opacity-30 transition-opacity`} />
                      
                      {/* Topic info */}
                      <div className="relative z-10 text-center px-4">
                        <p className="font-bold text-white text-sm">{flow.topic}</p>
                        <p className="text-xs text-white/60">{flow.owner}</p>
                      </div>

                      {/* Flow lines from producer */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.8 }}
                        viewport={{ once: true }}
                        className={`absolute -left-20 top-1/2 w-20 h-0.5 bg-gradient-to-r ${flow.color} transform -translate-y-1/2 origin-left`}
                      />

                      {/* Flow lines to consumers */}
                      {flow.to.map((consumer, consumerIndex) => (
                        <motion.div
                          key={consumerIndex}
                          initial={{ scaleX: 0 }}
                          whileInView={{ scaleX: 1 }}
                          transition={{ delay: 0.7 + index * 0.1 + consumerIndex * 0.05, duration: 0.8 }}
                          viewport={{ once: true }}
                          className={`absolute -right-20 bg-gradient-to-r ${flow.color} transform origin-left`}
                          style={{
                            top: `${50 + (consumerIndex - (flow.to.length - 1) / 2) * 25}%`,
                            width: '80px',
                            height: '2px',
                            transform: 'translateY(-50%)'
                          }}
                        />
                      ))}

                      {/* Animated particles */}
                      <motion.div
                        animate={{ x: [-20, 180], opacity: [0, 1, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                        className={`absolute top-1/2 w-2 h-2 rounded-full bg-gradient-to-r ${flow.color} transform -translate-y-1/2`}
                      />
                    </motion.div>

                    {/* Topic details (when selected) */}
                    {selectedFlow === flow.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-20 left-1/2 transform -translate-x-1/2 glass p-4 rounded-xl border border-white/20 z-20 min-w-[300px]"
                      >
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-white/60">Volume:</span>
                            <span className="text-white">{flow.volume}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/60">Owner:</span>
                            <span className="text-white">{flow.owner}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-white/60">Consumers:</span>
                            <span className="text-white">{flow.to.length}</span>
                          </div>
                          <div className="flex items-center space-x-2 mt-3">
                            <Shield className="w-4 h-4 text-green-400" />
                            <span className="text-xs text-green-300">Access controlled</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              {/* Consumers column */}
              <div className="flex-1 space-y-4">
                <h3 className="text-xl font-bold text-center text-white/80 mb-8">Consumers</h3>
                {dataFlows.flatMap(flow => 
                  flow.to.map((consumer, consumerIndex) => (
                    <motion.div
                      key={`${flow.id}-${consumerIndex}`}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + consumerIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="glass p-3 rounded-xl text-center relative group cursor-pointer"
                    >
                      <div className="w-2 h-2 bg-white/60 rounded-full mx-auto mb-1" />
                      <p className="text-xs font-medium text-white/80">{consumer}</p>
                    </motion.div>
                  ))
                )}
              </div>
            </div>

            {/* Legend */}
            <div className="mt-12 flex justify-center space-x-8 text-sm text-white/60">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-white/60 rounded-full" />
                <span>Producer</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
                <span>Topic</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-white/60 rounded-full" />
                <span>Consumer</span>
              </div>
            </div>

            {/* Interactive hint */}
            <div className="text-center mt-8">
              <p className="text-sm text-white/50">
                👆 Click any topic to see details and access policies
              </p>
            </div>
          </motion.div>

          {/* Benefits callout */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-16"
          >
            <div className="glass p-6 rounded-2xl text-center">
              <Eye className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Full Visibility</h4>
              <p className="text-sm text-white/60">See every data flow, owner, and dependency at a glance</p>
            </div>
            
            <div className="glass p-6 rounded-2xl text-center">
              <Users className="w-8 h-8 text-green-400 mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Clear Ownership</h4>
              <p className="text-sm text-white/60">Know exactly who owns what and who to ask for access</p>
            </div>
            
            <div className="glass p-6 rounded-2xl text-center">
              <Zap className="w-8 h-8 text-purple-400 mx-auto mb-4" />
              <h4 className="font-bold text-white mb-2">Instant Impact Analysis</h4>
              <p className="text-sm text-white/60">Understand downstream effects before making changes</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}