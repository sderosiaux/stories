'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Search, Eye, Lock, Clock, CheckCircle, GitBranch, MousePointer } from 'lucide-react';

export default function BobJourney() {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [accessGranted, setAccessGranted] = useState(false);

  const topics = [
    {
      id: 'order_validated',
      name: 'order_validated',
      description: 'Validated customer orders ready for processing',
      owner: 'Alice (Platform)',
      schema: 'OrderValidated.avro',
      visibility: 'public',
      status: 'active',
      messages: '1.2M/day'
    },
    {
      id: 'payment_processed',
      name: 'payment_processed',
      description: 'Payment transactions completed successfully',
      owner: 'Finance Team',
      schema: 'PaymentEvent.avro',
      visibility: 'restricted',
      status: 'active',
      messages: '800K/day'
    },
    {
      id: 'user_notifications',
      name: 'user_notifications',
      description: 'Notification events for user communications',
      owner: 'Product Team',
      schema: 'NotificationEvent.avro',
      visibility: 'public',
      status: 'active',
      messages: '2.1M/day'
    },
    {
      id: 'internal_metrics',
      name: 'internal_metrics',
      description: 'Internal system metrics and monitoring data',
      owner: 'Platform Team',
      schema: 'MetricsEvent.avro',
      visibility: 'hidden',
      status: 'active',
      messages: '5.2M/day'
    }
  ];

  const steps = [
    { id: 'discover', title: 'Discover Topics', description: 'Browse the topic catalog' },
    { id: 'request', title: 'Request Access', description: 'Submit access request' },
    { id: 'approve', title: 'Wait for Approval', description: 'Topic owner reviews' },
    { id: 'consume', title: 'Start Consuming', description: 'ACLs applied automatically' }
  ];

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
  };

  const handleRequestAccess = () => {
    setRequestSubmitted(true);
    setCurrentStep(2);
    setTimeout(() => {
      setAccessGranted(true);
      setCurrentStep(3);
    }, 3000);
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-l from-green-500/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-r from-teal-500/10 to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Asymmetric header */}
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
                Bob's <span className="gradient-text">Journey</span>
              </h2>
              <p className="text-2xl text-white/60">
                From &quot;I need data&quot; to &quot;I have data&quot;
                <br />
                <span className="text-white/40">in minutes, not days</span>
              </p>
            </div>
            <div className="text-right">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-lg text-white/50 italic">
                &quot;Yes, Bob. There&apos;s a UI for that.&quot;
              </p>
            </div>
          </motion.div>
        </div>

        <div className="max-w-5xl mx-auto mb-16">
          {/* Visual Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-8 left-8 right-8 h-1 bg-gradient-to-r from-white/20 via-white/20 to-white/20 rounded-full">
              <motion.div
                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ 
                  width: currentStep === 0 ? "0%" : 
                         currentStep === 1 ? "33%" : 
                         currentStep === 2 ? "66%" : "100%" 
                }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            </div>
            
            {/* Timeline steps */}
            <div className="grid grid-cols-4 gap-4">
              {steps.map((step, index) => (
                <motion.div
                  key={`${step.id}-${currentStep}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center cursor-pointer group hover:scale-105 transition-transform duration-200"
                  onClick={() => {
                    console.log(`Clicking step ${index}, currentStep was ${currentStep}`);
                    setCurrentStep(index);
                  }}
                >
                  {/* Step circle */}
                  <div className="relative mb-4">
                    <motion.div
                      className={`w-16 h-16 rounded-full mx-auto border-4 transition-all duration-500 ${
                        currentStep > index
                          ? 'bg-gradient-to-r from-green-500 to-emerald-500 border-green-400 shadow-lg shadow-green-500/30'
                          : currentStep === index
                          ? 'bg-gradient-to-r from-yellow-500 to-orange-500 border-yellow-400 shadow-lg shadow-yellow-500/30 scale-110'
                          : 'bg-white/10 border-white/30 group-hover:bg-white/20 group-hover:border-white/50 group-hover:shadow-lg group-hover:shadow-white/20'
                      } flex items-center justify-center relative overflow-hidden`}
                      whileHover={{ scale: 1.1 }}
                    >
                      {/* Pulsing effect for current step */}
                      {currentStep === index && (
                        <>
                          <motion.div
                            className="absolute inset-0 rounded-full bg-yellow-400/20"
                            animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          />
                          <motion.div
                            className="absolute -inset-2 rounded-full border-2 border-yellow-400/30"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.8, 0.2, 0.8] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          />
                        </>
                      )}
                      
                      {/* Step number */}
                      <span className={`text-lg font-bold ${
                        currentStep >= index ? 'text-white' : 'text-white/60 group-hover:text-white'
                      }`}>
                        {index + 1}
                      </span>
                      
                      {/* Click indicator for non-active steps */}
                      {currentStep !== index && (
                        <motion.div
                          className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 1, repeat: Infinity }}
                        />
                      )}
                      
                      {/* Checkmark for completed steps */}
                      {currentStep > index && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="absolute inset-0 flex items-center justify-center"
                        >
                          <CheckCircle className="w-8 h-8 text-white" />
                        </motion.div>
                      )}
                    </motion.div>
                    
                    {/* Step status indicator */}
                    {currentStep > index && (
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-medium border transition-all duration-300 bg-green-500/20 border-green-400/30 text-green-300">
                        Done
                      </div>
                    )}
                    {currentStep === index && (
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-medium border transition-all duration-300 bg-yellow-500/20 border-yellow-400/30 text-yellow-300">
                        Active
                      </div>
                    )}
                    {currentStep < index && (
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-medium border transition-all duration-300 bg-white/10 border-white/20 text-white/50">
                        Pending
                      </div>
                    )}
                  </div>
                  
                  {/* Step info */}
                  <div className="space-y-2 mt-8" key={`info-${index}-${currentStep}`}>
                    <h4 className={`font-semibold transition-colors duration-300 ${
                      currentStep >= index ? 'text-white' : 'text-white/60 group-hover:text-white/80'
                    }`}>
                      {step.title}
                    </h4>
                    <p className={`text-sm transition-colors duration-300 ${
                      currentStep >= index ? 'text-white/80' : 'text-white/40 group-hover:text-white/60'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Timeline labels */}
            <div className="flex justify-between mt-8 px-8 text-xs text-white/40">
              <span>Start</span>
              <span>Request</span>
              <span>Review</span>
              <span>Success!</span>
            </div>
            
            {/* Interactive hint */}
            <div className="text-center mt-6">
              <div className="bg-blue-500/20 border border-blue-400/30 rounded-xl p-4 max-w-md mx-auto">
                <p className="text-blue-300 font-medium mb-2">
                  🎯 Interactive Timeline
                </p>
                <p className="text-sm text-white/80">
                  👆 <strong>Click any step above</strong> to see Bob&apos;s detailed journey
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="discover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div className="bg-slate-900 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold flex items-center">
                      <Search className="w-6 h-6 mr-3 text-green-400" />
                      Topic Catalog
                    </h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-400">
                      <Eye className="w-4 h-4" />
                      <span>Showing only accessible topics</span>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {topics.filter(topic => topic.visibility !== 'hidden').map((topic) => (
                      <motion.div
                        key={topic.id}
                        whileHover={{ scale: 1.02 }}
                        className={`border rounded-lg p-4 cursor-pointer transition-all ${
                          selectedTopic === topic.id
                            ? 'border-green-500 bg-green-500/10'
                            : 'border-slate-600 bg-slate-800 hover:border-slate-500'
                        }`}
                        onClick={() => handleTopicSelect(topic.id)}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-2">
                              <h4 className="text-lg font-semibold text-white">{topic.name}</h4>
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                topic.visibility === 'public' 
                                  ? 'bg-green-500/20 text-green-400' 
                                  : 'bg-yellow-500/20 text-yellow-400'
                              }`}>
                                {topic.visibility}
                              </span>
                              <span className="text-xs text-gray-400">{topic.messages}</span>
                            </div>
                            <p className="text-gray-400 mb-2">{topic.description}</p>
                            <div className="flex items-center space-x-4 text-sm text-gray-500">
                              <span>Owner: {topic.owner}</span>
                              <span>Schema: {topic.schema}</span>
                            </div>
                          </div>
                          {selectedTopic === topic.id && (
                            <motion.div
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="text-green-400"
                            >
                              <CheckCircle className="w-6 h-6" />
                            </motion.div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {selectedTopic && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 flex justify-center"
                    >
                      <button
                        onClick={() => setCurrentStep(1)}
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
                      >
                        <MousePointer className="w-4 h-4" />
                        <span>Request Access to {topics.find(t => t.id === selectedTopic)?.name}</span>
                      </button>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            )}

            {currentStep === 1 && (
              <motion.div
                key="request"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="space-y-6"
              >
                <div className="bg-slate-900 rounded-xl p-6">
                  <h3 className="text-2xl font-bold mb-6 flex items-center">
                    <GitBranch className="w-6 h-6 mr-3 text-green-400" />
                    Request Access
                  </h3>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Topic</label>
                        <div className="bg-slate-800 border border-slate-600 rounded-lg p-3">
                          <span className="text-white font-semibold">
                            {topics.find(t => t.id === selectedTopic)?.name}
                          </span>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Access Type</label>
                        <select className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white">
                          <option>Read (Consumer)</option>
                          <option>Write (Producer)</option>
                          <option>Admin</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">Reason</label>
                        <textarea
                          className="w-full bg-slate-800 border border-slate-600 rounded-lg p-3 text-white"
                          rows={3}
                          placeholder="Nico needs a report on order validation trends for Q4 planning..."
                        />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-400 mb-2">GitOps Alternative</h4>
                        <div className="text-sm text-gray-300 font-mono bg-slate-800 rounded p-3">
                          <div className="text-green-400"># Pull Request</div>
                          <div>apiVersion: conduktor/v1</div>
                          <div>kind: TopicAccess</div>
                          <div>metadata:</div>
                          <div>  name: bob-order-access</div>
                          <div>spec:</div>
                          <div>  topic: order_validated</div>
                          <div>  access: read</div>
                          <div>  reason: "Q4 reporting"</div>
                        </div>
                      </div>

                      <div className="bg-slate-800 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-300 mb-2">What Happens Next?</h4>
                        <ul className="space-y-2 text-sm text-gray-400">
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span>Request sent to Alice (topic owner)</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <span>Alice reviews and approves</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                            <span>ACLs applied automatically</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                            <span>You get notification to start consuming</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <button
                      onClick={handleRequestAccess}
                      className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                    >
                      Submit Request
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div
                key="waiting"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-center space-y-6"
              >
                <div className="bg-slate-900 rounded-xl p-8">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full mx-auto mb-6"
                  />
                  <h3 className="text-2xl font-bold mb-4 flex items-center justify-center">
                    <Clock className="w-6 h-6 mr-3 text-yellow-400" />
                    Waiting for Approval
                  </h3>
                  <p className="text-gray-400 mb-6">
                    Alice is reviewing your request for <strong>order_validated</strong> topic access.
                    <br />
                    <em>No 17-layer approval process. Just the topic owner.</em>
                  </p>

                  <div className="bg-slate-800 rounded-lg p-4 max-w-md mx-auto">
                    <div className="text-sm text-gray-300">
                      <div className="flex justify-between mb-2">
                        <span>Request submitted:</span>
                        <span>Just now</span>
                      </div>
                      <div className="flex justify-between mb-2">
                        <span>Estimated response:</span>
                        <span className="text-green-400">~3 minutes</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Typical enterprise time:</span>
                        <span className="text-red-400 line-through">3-5 business days</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div
                key="approved"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4 text-green-400">
                    Access Granted! 🎉
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Alice approved your request. ACLs have been applied automatically.
                    <br />
                    <strong>Bob can now consume from order_validated topic.</strong>
                  </p>

                  <div className="bg-slate-800 rounded-lg p-4 text-left max-w-lg mx-auto">
                    <div className="text-sm text-gray-300 font-mono">
                      <div className="text-green-400 mb-2">✅ Consumer Group Created</div>
                      <div>📊 bob-analytics-consumer</div>
                      <div className="text-green-400 mb-2 mt-3">✅ ACLs Applied</div>
                      <div>🔐 READ access to order_validated</div>
                      <div>📍 From offset: latest</div>
                      <div className="text-green-400 mb-2 mt-3">✅ Ready to Consume</div>
                      <div>🚀 Start your consumer now!</div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <p className="text-sm text-gray-400">
                      Total time: <strong className="text-green-400">3 minutes</strong>
                      <br />
                      Enterprise alternative: <span className="text-red-400 line-through">3-5 business days + 12 emails</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}