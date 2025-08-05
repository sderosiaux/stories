'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import React from 'react';
import { Terminal, Play, CheckCircle, Users, Database, Shield } from 'lucide-react';

export default function PlatformSetup() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      id: 'script',
      title: 'Run start.sh',
      description: 'Alice kicks off the demo environment with one command',
      icon: <Terminal className="w-6 h-6" />,
      code: `./start.sh --env cs-playground
✅ Spinning up Kafka cluster...
✅ Loading sample data...
✅ Setting up users in LDAP...`,
      explanation: "One script sets up everything: Kafka, data, users. Alice doesn't want to babysit infrastructure."
    },
    {
      id: 'api',
      title: 'Python API Magic',
      description: 'Automated topic creation and permissions via Conduktor API',
      icon: <Database className="w-6 h-6" />,
      code: `import conduktor

# Create topics with ownership
conduktor.create_topic(
    name="order_validated",
    owner="alice@company.com",
    visibility="public"
)

# Set up permissions
conduktor.assign_permission(
    topic="order_validated",
    action="read",
    approver="alice@company.com"
)`,
      explanation: "Real APIs, real configurations. No manual clicking through UI forms."
    },
    {
      id: 'ownership',
      title: 'Define Ownership',
      description: 'Clear topic ownership eliminates approval bottlenecks',
      icon: <Users className="w-6 h-6" />,
      code: `Topic Ownership Map:
📊 order_validated    → Alice (Platform)
💰 payment_processed → Finance Team  
🚚 shipment_tracking → Logistics Team
📧 user_notifications → Product Team`,
      explanation: "Each topic has a clear owner. No more central bottleneck for approvals."
    },
    {
      id: 'security',
      title: 'Guardrails in Place',
      description: 'RBAC and audit logging configured automatically',
      icon: <Shield className="w-6 h-6" />,
      code: `Security Configuration:
🔐 RBAC: Role-based access control
📝 Audit: All actions logged
🎭 Masking: PII automatically hidden
🚫 Policies: Prevent dangerous operations`,
      explanation: "Enterprise security without enterprise complexity. Set it once, trust it forever."
    }
  ];

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
            How Alice Sets the <span className="text-blue-400">Stage</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Alice configures it once. She doesn't want to babysit it. 
            <br />
            <em className="text-blue-400">Smart defaults, not endless options.</em>
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto mb-16">
          {/* Alice's Setup Timeline */}
          <div className="relative mb-16">
            {/* Connecting line */}
            <div className="absolute top-12 left-16 right-16 h-0.5 bg-gradient-to-r from-blue-400/30 via-cyan-400/30 to-purple-400/30"></div>
            
            {/* Timeline steps */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative cursor-pointer group"
                  onClick={() => setCurrentStep(index)}
                >
                  {/* Step circle */}
                  <motion.div
                    className={`w-24 h-24 rounded-full mx-auto mb-6 border-4 transition-all duration-500 ${
                      currentStep === index
                        ? 'bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-400 shadow-2xl shadow-blue-500/40 scale-110'
                        : index < currentStep
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-400 shadow-lg shadow-green-500/30'
                        : 'glass border-white/30 group-hover:border-blue-400/50'
                    } flex items-center justify-center relative overflow-hidden`}
                    whileHover={{ scale: 1.05 }}
                  >
                    {/* Animated background for active step */}
                    {currentStep === index && (
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: 'conic-gradient(from 0deg, #3b82f6, #06b6d4, #8b5cf6, #3b82f6)'
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                      />
                    )}
                    
                    {/* Icon container */}
                    <div className={`relative z-10 ${
                      currentStep === index || index < currentStep ? 'text-white' : 'text-white/60'
                    }`}>
                      {React.cloneElement(step.icon, { size: 32 })}
                    </div>
                    
                    {/* Completion checkmark */}
                    {index < currentStep && (
                      <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        className="absolute top-1 right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      </motion.div>
                    )}
                  </motion.div>
                  
                  {/* Step info */}
                  <div className="text-center space-y-2">
                    <h4 className={`font-bold text-lg transition-colors ${
                      currentStep === index ? 'text-white' : 'text-white/70 group-hover:text-white'
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm transition-colors ${
                      currentStep === index ? 'text-white/80' : 'text-white/50'
                    }`}>
                      {step.description}
                    </p>
                    
                    {/* Step number */}
                    <div className={`inline-flex items-center justify-center w-6 h-6 rounded-full text-xs font-bold transition-colors ${
                      currentStep === index
                        ? 'bg-blue-500 text-white'
                        : index < currentStep
                        ? 'bg-green-500 text-white'
                        : 'bg-white/20 text-white/60'
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Connection arrow (except for last step) */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-400/30 to-cyan-400/30">
                      <motion.div
                        className="w-2 h-2 bg-blue-400 rounded-full absolute -right-1 -top-0.5"
                        animate={{ 
                          scale: currentStep > index ? [1, 1.5, 1] : 1,
                          opacity: currentStep > index ? [1, 0.5, 1] : 0.3
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            key={currentStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-2 gap-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-2 flex items-center">
                  {steps[currentStep].icon}
                  <span className="ml-3">{steps[currentStep].title}</span>
                </h3>
                <p className="text-gray-400 text-lg">
                  {steps[currentStep].description}
                </p>
              </div>

              <div className="bg-slate-800 border border-blue-500/30 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-4"></div>
                  <span className="text-sm text-gray-400">Terminal</span>
                </div>
                <pre className="text-sm text-green-400 font-mono whitespace-pre-wrap">
                  {steps[currentStep].code}
                </pre>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-300">💡 {steps[currentStep].explanation}</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-slate-800 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-4 text-blue-400">Alice's Setup Checklist</h4>
                <div className="space-y-3">
                  {steps.map((step, index) => (
                    <div
                      key={step.id}
                      className={`flex items-center space-x-3 p-3 rounded-lg transition-all ${
                        index <= currentStep
                          ? 'bg-green-500/20 border border-green-500/30'
                          : 'bg-slate-700/50 border border-slate-600'
                      }`}
                    >
                      {index <= currentStep ? (
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-gray-400 rounded-full"></div>
                      )}
                      <span className={index <= currentStep ? 'text-white' : 'text-gray-400'}>
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-6">
                <h4 className="text-lg font-semibold mb-3 text-blue-400">Demo Environment Structure</h4>
                <div className="text-sm text-gray-300 font-mono">
                  <div>📁 cs-playground/</div>
                  <div>├── 🐍 demo/start.py</div>
                  <div>├── ⚙️  config/topics.yaml</div>
                  <div>├── 👥 users/ldap-sync.json</div>
                  <div>├── 🔐 security/rbac-rules.yaml</div>
                  <div>└── 📊 data/sample-events.avro</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-slate-800 rounded-xl p-6 inline-block">
              <p className="text-lg text-gray-300">
                <strong className="text-blue-400">Result:</strong> Alice's environment is ready in minutes, not days.
                <br />
                <em className="text-sm text-gray-400">Now she can finally enjoy her coffee ☕</em>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}