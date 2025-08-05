'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';
import { User, Coffee, BarChart3, Settings, MessageSquare, Sparkles } from 'lucide-react';

export default function PersonaShowcase() {
  const [activePersona, setActivePersona] = useState<'alice' | 'bob'>('alice');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const x = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  const personas = {
    alice: {
      name: 'Alice',
      role: 'Platform Engineer',
      avatar: '👩‍💻',
      gradient: 'from-blue-400 via-purple-500 to-cyan-400',
      quote: "I get pinged 12 times a day to approve Kafka stuff I don't even own.",
      pain: "Constantly interrupted by manual approval requests",
      mood: "😤",
      transformation: "☕ → Actually enjoying her coffee",
      skills: ["Kubernetes", "Python", "Terraform", "Kafka"],
      frustrations: [
        "12 Slack pings about topics she doesn't own",
        "Manual ACL configs breaking at 3am",
        "Being the bottleneck for every team",
        "Explaining Kafka basics 100x per day"
      ]
    },
    bob: {
      name: 'Bob',
      role: 'BI Analyst',
      avatar: '📊',
      gradient: 'from-emerald-400 via-teal-500 to-green-400',
      quote: "Kafka Connect configs make me cry in YAML.",
      pain: "Can't get data access without becoming a Kafka expert",
      mood: "😰",
      transformation: "📈 → Reports delivered on time",
      skills: ["SQL", "Tableau", "Python", "Excel"],
      frustrations: [
        "3-day waits for simple topic access",
        "YAML configs from hell",
        "Zero visibility into data sources", 
        "Explaining delays to stakeholders"
      ]
    }
  };

  return (
    <section ref={ref} className="py-32 relative overflow-hidden">
      <motion.div style={{ x }} className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-green-500/20 to-teal-500/20 rounded-full blur-3xl" />
      </motion.div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header - asymmetric */}
        <div className="max-w-4xl mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black mb-8">
              Meet the <span className="gradient-text">humans</span>
            </h2>
            <p className="text-2xl text-white/60 max-w-2xl">
              Two people. Same Kafka. Very different problems.
              <br />
              <span className="text-white/40 text-lg">Sound familiar?</span>
            </p>
          </motion.div>
        </div>

        {/* Persona cards - floating layout */}
        <div className="relative">
          {/* Alice card - top left */}
          <motion.div
            initial={{ opacity: 0, y: 100, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className={`absolute top-0 left-0 w-80 lg:w-96 glass p-8 rounded-3xl cursor-pointer transition-all duration-300 ${
              activePersona === 'alice' ? 'ring-2 ring-blue-400/50 shadow-2xl shadow-blue-500/20' : ''
            }`}
            onClick={() => setActivePersona('alice')}
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{personas.alice.avatar}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{personas.alice.name}</h3>
              <div className={`text-sm bg-gradient-to-r ${personas.alice.gradient} bg-clip-text text-transparent font-semibold`}>
                {personas.alice.role}
              </div>
            </div>
            
            <div className="glass p-4 rounded-2xl mb-4">
              <p className="text-white/80 italic text-sm">&quot;{personas.alice.quote}&quot;</p>
            </div>
            
            <div className="flex items-center justify-between text-sm text-white/60 mb-4">
              <span>Mood: {personas.alice.mood}</span>
              <Sparkles className="w-4 h-4" />
            </div>
            
            {/* Click indicator */}
            <div className="text-center">
              <motion.div 
                className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-xs text-blue-300 font-medium"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span>👆 Click to see skills & tools</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bob card - bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 100, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 2 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileHover={{ rotate: 0, scale: 1.02 }}
            className={`absolute top-32 right-0 w-80 lg:w-96 glass p-8 rounded-3xl cursor-pointer transition-all duration-300 ${
              activePersona === 'bob' ? 'ring-2 ring-green-400/50 shadow-2xl shadow-green-500/20' : ''
            }`}
            onClick={() => setActivePersona('bob')}
          >
            <div className="text-center mb-6">
              <div className="text-6xl mb-4">{personas.bob.avatar}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{personas.bob.name}</h3>
              <div className={`text-sm bg-gradient-to-r ${personas.bob.gradient} bg-clip-text text-transparent font-semibold`}>
                {personas.bob.role}
              </div>
            </div>
            
            <div className="glass p-4 rounded-2xl mb-4">
              <p className="text-white/80 italic text-sm">&quot;{personas.bob.quote}&quot;</p>
            </div>
            
            <div className="flex items-center justify-between text-sm text-white/60 mb-4">
              <span>Mood: {personas.bob.mood}</span>
              <Sparkles className="w-4 h-4" />
            </div>
            
            {/* Click indicator */}
            <div className="text-center">
              <motion.div 
                className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-xs text-green-300 font-medium"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              >
                <span>👆 Click to see skills & tools</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Interactive hint */}
          <div className="text-center mt-96 lg:mt-72 mb-8">
            <div className="inline-flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-400/30 rounded-2xl">
              <div className="text-2xl">🎯</div>
              <div>
                <p className="text-purple-300 font-bold mb-1">Interactive Personas</p>
                <p className="text-white/80 text-sm">Click on Alice or Bob above to explore their skills, tools & frustrations</p>
              </div>
            </div>
          </div>

          {/* Detailed view - center */}
          <motion.div
            key={activePersona}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto"
          >
            <div className="glass p-12 rounded-[2rem] relative overflow-hidden">
              {/* Background gradient */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${personas[activePersona].gradient} opacity-10`}
              />
              
              <div className="relative z-10">
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left - Skills & Transformation */}
                  <div className="space-y-8">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                        <Settings className="w-5 h-5 mr-3" />
                        Skills & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {personas[activePersona].skills.map((skill, i) => (
                          <motion.span
                            key={skill}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/80"
                          >
                            {skill}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-white mb-4">The Transformation</h4>
                      <div className={`text-2xl bg-gradient-to-r ${personas[activePersona].gradient} bg-clip-text text-transparent font-bold`}>
                        {personas[activePersona].transformation}
                      </div>
                    </div>
                  </div>

                  {/* Right - Daily Frustrations */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-6 flex items-center">
                      <Coffee className="w-5 h-5 mr-3" />
                      Daily Frustrations
                    </h4>
                    <div className="space-y-4">
                      {personas[activePersona].frustrations.map((frustration, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="glass p-4 rounded-xl border border-red-400/20"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-red-400/50" />
                            <span className="text-white/80">{frustration}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <p className="text-2xl text-white/60 mb-4">
            Ready to transform their experience?
          </p>
          <div className="text-4xl mb-8">☕ + 📊 = 😊</div>
          <button className="modern-button text-lg px-8 py-4">
            Show me how
          </button>
        </motion.div>
      </div>
    </section>
  );
}