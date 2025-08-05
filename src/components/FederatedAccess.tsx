'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Users, CheckCircle, Shield, Trash2, Database, Clock, Zap } from 'lucide-react';

export default function FederatedAccess() {
  const [activeTab, setActiveTab] = useState<'scale' | 'cleanup' | 'rbac'>('scale');

  const stats = {
    scale: {
      users: '50,000+',
      acls: '2.3M',
      topics: '180K',
      environments: '500+'
    },
    cleanup: {
      staleACLs: '847K',
      cleaned: 'last 30 days',
      automated: '100%',
      securityGain: 'Zero stale access'
    },
    rbac: {
      roles: '2,500+',
      policies: '15K',
      principals: '50K',
      compliance: 'SOX/PCI/GDPR'
    }
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-gradient-to-l from-orange-500/10 to-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header - asymmetric */}
        <div className="max-w-5xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-16 items-end"
          >
            <div>
              <h2 className="text-6xl md:text-8xl font-black mb-8 leading-none">
                <span className="gradient-text">Enterprise</span>
                <br />
                Scale
              </h2>
              <p className="text-2xl text-white/60">
                Platform team isn&apos;t the bottleneck anymore
                <br />
                <span className="text-white/40">Handle millions of ACLs effortlessly</span>
              </p>
            </div>
            <div className="text-right">
              <div className="text-6xl mb-4">🚀</div>
              <p className="text-lg text-white/50 italic">
                &quot;50,000 users. Zero platform team burnout.&quot;
              </p>
            </div>
          </motion.div>  
        </div>

        {/* Interactive tabs */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="flex justify-center mb-12">
            <div className="glass rounded-full p-2 flex space-x-1">
              <button
                onClick={() => setActiveTab('scale')}
                className={`px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'scale'
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg shadow-orange-500/25'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                <Users className="w-5 h-5" />
                <span>Massive Scale</span>
              </button>
              <button
                onClick={() => setActiveTab('cleanup')}
                className={`px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'cleanup'
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                <Trash2 className="w-5 h-5" />
                <span>Auto-Cleanup</span>
              </button>
              <button
                onClick={() => setActiveTab('rbac')}
                className={`px-8 py-4 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                  activeTab === 'rbac'
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-white/60 hover:text-white/80'
                }`}
              >
                <Shield className="w-5 h-5" />
                <span>Confluent RBAC</span>
              </button>
            </div>
          </div>

          {/* Content based on active tab */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === 'scale' && (
              <div className="space-y-12">
                {/* Stats grid */}
                <div className="grid md:grid-cols-4 gap-6">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="glass p-6 rounded-2xl text-center"
                  >
                    <div className="text-4xl font-black bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-2">
                      {stats.scale.users}
                    </div>
                    <p className="text-white/60 text-sm">Active Users</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="glass p-6 rounded-2xl text-center"
                  >
                    <div className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                      {stats.scale.acls}
                    </div>
                    <p className="text-white/60 text-sm">ACLs Managed</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                    className="glass p-6 rounded-2xl text-center"
                  >
                    <div className="text-4xl font-black bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {stats.scale.topics}
                    </div>
                    <p className="text-white/60 text-sm">Topics</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="glass p-6 rounded-2xl text-center"
                  >
                    <div className="text-4xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                      {stats.scale.environments}
                    </div>
                    <p className="text-white/60 text-sm">Environments</p>
                  </motion.div>
                </div>

                {/* Flow diagram */}
                <div className="glass p-8 rounded-3xl">
                  <div className="flex items-center justify-between">
                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-4 mx-auto relative">
                        <Users className="w-10 h-10 text-white" />
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="absolute inset-0 bg-green-400/20 rounded-full"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">50K Users Request</h3>
                      <p className="text-white/60 text-sm">Millions of daily requests</p>
                    </div>

                    <div className="flex-1 mx-8 flex items-center">
                      <motion.div
                        animate={{ x: [0, 20, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="w-full h-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-full relative"
                      >
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs text-white/60">
                          Auto-routed
                        </div>
                      </motion.div>
                    </div>

                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4 mx-auto relative">
                        <Database className="w-10 h-10 text-white" />
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                          className="absolute inset-2 border-2 border-blue-300/30 border-t-blue-300 rounded-full"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Topic Owners</h3>
                      <p className="text-white/60 text-sm">Distributed approvals</p>
                    </div>

                    <div className="flex-1 mx-8 flex items-center">
                      <motion.div
                        animate={{ x: [0, 20, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                        className="w-full h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full relative"
                      >
                        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs text-white/60">
                          Instant deploy
                        </div>
                      </motion.div>
                    </div>

                    <div className="text-center">
                      <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-4 mx-auto relative">
                        <Zap className="w-10 h-10 text-white" />
                        <motion.div
                          animate={{ scale: [1, 1.1, 1], opacity: [1, 0.7, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                          className="absolute inset-0 bg-purple-400/30 rounded-full"
                        />
                      </div>
                      <h3 className="text-xl font-bold mb-2">2.3M ACLs</h3>
                      <p className="text-white/60 text-sm">Applied automatically</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'cleanup' && (
              <div className="space-y-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">Automatic ACL Cleanup</h3>
                  <p className="text-white/60 max-w-2xl mx-auto">
                    Stale ACLs are security risks - forgotten credentials that bad actors or ex-employees could exploit. Conduktor automatically identifies and removes them.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="glass p-8 rounded-2xl">
                    <div className="flex items-center mb-6">
                      <Trash2 className="w-8 h-8 text-red-400 mr-4" />
                      <h4 className="text-xl font-bold">Before Cleanup</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-red-500/10 rounded-lg border border-red-500/20">
                        <span className="text-white/80">Stale ACLs detected</span>
                        <span className="text-red-400 font-bold">{stats.cleanup.staleACLs}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-white/80">Security risk</span>
                        <span className="text-white/60">High exposure</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                        <span className="text-white/80">Manual cleanup time</span>
                        <span className="text-white/60">3-6 months</span>
                      </div>
                    </div>
                  </div>

                  <div className="glass p-8 rounded-2xl">
                    <div className="flex items-center mb-6">
                      <CheckCircle className="w-8 h-8 text-green-400 mr-4" />
                      <h4 className="text-xl font-bold">After Cleanup</h4>
                    </div>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                        <span className="text-white/80">Auto-cleaned</span>
                        <span className="text-green-400 font-bold">{stats.cleanup.automated}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                        <span className="text-white/80">Security improved</span>
                        <span className="text-green-400 font-bold">{stats.cleanup.securityGain}</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-green-500/10 rounded-lg border border-green-500/20">
                        <span className="text-white/80">Cleanup frequency</span>
                        <span className="text-green-400 font-bold">Daily</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="glass p-6 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                  <div className="flex items-center justify-center space-x-4">
                    <Clock className="w-6 h-6 text-purple-400" />
                    <p className="text-lg text-white/80">
                      <strong className="text-purple-400">Last cleanup run:</strong> {stats.cleanup.cleaned} - 
                      <strong className="text-green-400 ml-2">847K stale ACLs removed</strong>
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'rbac' && (
              <div className="space-y-12">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold mb-4">Confluent RBAC Integration</h3>
                  <p className="text-white/60 max-w-2xl mx-auto">
                    Not just Kafka ACLs. Full Confluent Platform RBAC support with role-based permissions.
                  </p>
                </div>

                <div className="grid md:grid-cols-4 gap-6">
                  <div className="glass p-6 rounded-2xl text-center">
                    <Shield className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-blue-400 mb-2">{stats.rbac.roles}</div>
                    <p className="text-white/60 text-sm">RBAC Roles</p>
                  </div>
                  
                  <div className="glass p-6 rounded-2xl text-center">
                    <Database className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-green-400 mb-2">{stats.rbac.policies}</div>
                    <p className="text-white/60 text-sm">Policies</p>
                  </div>
                  
                  <div className="glass p-6 rounded-2xl text-center">
                    <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-purple-400 mb-2">{stats.rbac.principals}</div>
                    <p className="text-white/60 text-sm">Principals</p>
                  </div>
                  
                  <div className="glass p-6 rounded-2xl text-center">
                    <CheckCircle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                    <div className="text-sm font-bold text-orange-400 mb-2">{stats.rbac.compliance}</div>
                    <p className="text-white/60 text-sm">Compliant</p>
                  </div>
                </div>

                <div className="glass p-8 rounded-2xl">
                  <h4 className="text-xl font-bold mb-6 text-center">Unified Permission Model</h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="font-semibold mb-4 text-blue-400">Kafka ACLs</h5>
                      <ul className="space-y-2 text-sm text-white/80">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>Topic-level permissions</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>Consumer group access</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>Producer permissions</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-semibold mb-4 text-green-400">Confluent RBAC</h5>
                      <ul className="space-y-2 text-sm text-white/80">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Schema Registry roles</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Connect cluster permissions</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>ksqlDB access control</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-2xl text-white/60 mb-8">
            Ready to handle enterprise scale?
          </p>
          <button className="modern-button text-lg px-8 py-4">
            See the architecture
          </button>
        </motion.div>
      </div>
    </section>
  );
}