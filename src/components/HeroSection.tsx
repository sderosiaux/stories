'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { AlertTriangle, CheckCircle, Sparkles, Zap } from 'lucide-react';

export default function HeroSection() {
  const [showAfter, setShowAfter] = useState(false);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="min-h-screen relative overflow-hidden">
      {/* Floating orbs */}
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      <div className="floating-orb"></div>
      
      {/* Main content with parallax */}
      <motion.div style={{ y, opacity }} className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left side - Hero text (asymmetric) */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-20 -left-20 w-40 h-40 border border-pink-500/20 rounded-full"
              />
              
              <h1 className="text-7xl lg:text-9xl font-black mb-8 leading-none">
                <span className="gradient-text">Conduktor</span>
                <br />
                <span className="text-white/90">Self-Service</span>
              </h1>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl lg:text-3xl text-white/70 mb-4 font-light"
              >
                Without the <em className="gradient-text font-medium">Kafkaesque</em>
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-lg text-white/50 mb-12 max-w-lg"
              >
                Transform your team&apos;s Kafka experience from chaos to zen. 
                Alice finally gets her coffee. Bob gets his reports.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
                className="flex gap-4"
              >
                <button className="modern-button flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  See the magic
                </button>
                <button className="glass px-8 py-4 rounded-full text-white/80 hover:text-white transition-colors border border-white/20 hover:border-white/40">
                  Watch demo
                </button>
              </motion.div>
            </motion.div>

            {/* Right side - Interactive comparison */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              {/* Toggle */}
              <div className="flex justify-center mb-8">
                <div className="glass rounded-full p-2 flex">
                  <button
                    onClick={() => setShowAfter(false)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 ${
                      !showAfter 
                        ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/25' 
                        : 'text-white/60 hover:text-white/80'
                    }`}
                  >
                    <AlertTriangle className="w-4 h-4 inline mr-2" />
                    Before
                  </button>
                  <button
                    onClick={() => setShowAfter(true)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 ${
                      showAfter 
                        ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white shadow-lg shadow-green-500/25' 
                        : 'text-white/60 hover:text-white/80'
                    }`}
                  >
                    <CheckCircle className="w-4 h-4 inline mr-2" />
                    After
                  </button>
                </div>
              </div>

              {/* Comparison cards - floating and asymmetric */}
              <div className="relative">
                <motion.div
                  key={showAfter ? 'after' : 'before'}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="glass p-8 rounded-3xl relative overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-300"
                  style={{ 
                    background: showAfter 
                      ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.1), rgba(16, 185, 129, 0.1))' 
                      : 'linear-gradient(135deg, rgba(239, 68, 68, 0.1), rgba(244, 63, 94, 0.1))'
                  }}
                >
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-4 right-4 w-12 h-12 rounded-full bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm"
                  />
                  
                  {!showAfter ? (
                    <div className="space-y-6">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-red-500 to-pink-500 flex items-center justify-center mr-4">
                          <AlertTriangle className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">The Chaos</h3>
                      </div>
                      
                      {[
                        "12 Slack pings per day about topics Alice doesn't own",
                        "JIRA tickets for every ACL change",
                        "Manual JSON configs breaking in production",
                        "3-day waits for simple topic access",
                        "Zero visibility into data flows"
                      ].map((pain, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-red-400/50" />
                          <span className="text-white/80">{pain}</span>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="flex items-center mb-6">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">The Zen</h3>
                      </div>
                      
                      {[
                        "Alice sets policies once, delegates safely forever",
                        "Topic owners approve their own requests",
                        "Automatic ACL deployment with full audit trail",
                        "UI, GitOps, or CLI - teams choose their flow",
                        "Production debugging with data masking"
                      ].map((benefit, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start space-x-3"
                        >
                          <div className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-green-400/50" />
                          <span className="text-white/80">{benefit}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white/40 text-center"
        >
          <Zap className="w-6 h-6 mx-auto mb-2" />
          <p className="text-sm">Scroll to meet the team</p>
        </motion.div>
      </motion.div>
    </section>
  );
}