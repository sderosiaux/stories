'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Shield, Eye, FileText, Users, Lock, AlertCircle } from 'lucide-react';

export default function GovernanceSection() {
  const [activeTab, setActiveTab] = useState<'rbac' | 'audit' | 'masking'>('rbac');

  const auditLogs = [
    {
      timestamp: '2024-01-15 14:23:01',
      user: 'bob@company.com',
      action: 'ACCESS_REQUESTED',
      resource: 'order_validated',
      status: 'SUCCESS',
      details: 'Requested READ access for Q4 reporting'
    },
    {
      timestamp: '2024-01-15 14:26:33',
      user: 'alice@company.com',
      action: 'ACCESS_APPROVED',
      resource: 'order_validated',
      status: 'SUCCESS',
      details: 'Approved access for bob@company.com'
    },
    {
      timestamp: '2024-01-15 14:26:34',
      user: 'system',
      action: 'ACL_CREATED',
      resource: 'order_validated',
      status: 'SUCCESS',
      details: 'Created consumer ACL for bob-analytics-consumer'
    },
    {
      timestamp: '2024-01-15 14:28:15',
      user: 'bob@company.com',
      action: 'CONSUMER_STARTED',
      resource: 'order_validated',
      status: 'SUCCESS',
      details: 'Started consuming from offset 1234567'
    }
  ];

  const maskedData = {
    original: {
      orderId: 'ORD-2024-001234',
      customerEmail: 'john.doe@example.com',
      customerName: 'John Doe',
      amount: 299.99,
      creditCard: '4532-1234-5678-9012',
      phoneNumber: '+1-555-123-4567',
      address: '123 Main St, New York, NY 10001'
    },
    masked: {
      orderId: 'ORD-2024-001234',
      customerEmail: 'j***.***@example.com',
      customerName: 'J*** D**',
      amount: 299.99,
      creditCard: '****-****-****-9012',
      phoneNumber: '+1-***-***-4567',
      address: '*** Main St, New York, NY *****'
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-red-400">Governance</span> & Guardrails
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            This is the basic requirement for enterprise adoption.
            <br />
            <em className="text-red-400">Security that doesn&apos;t get in the way.</em>
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-slate-700 rounded-full p-2 flex">
              <button
                onClick={() => setActiveTab('rbac')}
                className={`px-6 py-3 rounded-full transition-all flex items-center space-x-2 ${
                  activeTab === 'rbac'
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Users className="w-4 h-4" />
                <span>RBAC</span>
              </button>
              <button
                onClick={() => setActiveTab('audit')}
                className={`px-6 py-3 rounded-full transition-all flex items-center space-x-2 ${
                  activeTab === 'audit'
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <FileText className="w-4 h-4" />
                <span>Audit Trail</span>
              </button>
              <button
                onClick={() => setActiveTab('masking')}
                className={`px-6 py-3 rounded-full transition-all flex items-center space-x-2 ${
                  activeTab === 'masking'
                    ? 'bg-red-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>Data Masking</span>
              </button>
            </div>
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800 rounded-2xl p-8"
          >
            {activeTab === 'rbac' && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <Shield className="w-8 h-8 text-red-400 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">Role-Based Access Control</h3>
                    <p className="text-gray-400">Define who can do what, where, and when</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 rounded-xl p-6">
                    <h4 className="text-lg font-semibold mb-4 text-red-400">Permission Matrix</h4>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-slate-600">
                            <th className="text-left py-2">Role</th>
                            <th className="text-center py-2">View</th>
                            <th className="text-center py-2">Request</th>
                            <th className="text-center py-2">Approve</th>
                            <th className="text-center py-2">Admin</th>
                          </tr>
                        </thead>
                        <tbody className="text-gray-300">
                          <tr className="border-b border-slate-700">
                            <td className="py-2 font-medium">App Developer</td>
                            <td className="text-center">✅</td>
                            <td className="text-center">✅</td>
                            <td className="text-center">❌</td>
                            <td className="text-center">❌</td>
                          </tr>
                          <tr className="border-b border-slate-700">
                            <td className="py-2 font-medium">Topic Owner</td>
                            <td className="text-center">✅</td>
                            <td className="text-center">✅</td>
                            <td className="text-center">✅</td>
                            <td className="text-center">❌</td>
                          </tr>
                          <tr className="border-b border-slate-700">
                            <td className="py-2 font-medium">Platform Admin</td>
                            <td className="text-center">✅</td>
                            <td className="text-center">✅</td>
                            <td className="text-center">✅</td>
                            <td className="text-center">✅</td>
                          </tr>
                          <tr>
                            <td className="py-2 font-medium">Read-Only</td>
                            <td className="text-center">✅</td>
                            <td className="text-center">❌</td>
                            <td className="text-center">❌</td>
                            <td className="text-center">❌</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-slate-900 rounded-xl p-4">
                      <h5 className="font-semibold mb-3 flex items-center">
                        <Lock className="w-4 h-4 mr-2 text-yellow-400" />
                        Policy Enforcement
                      </h5>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Topic access requires owner approval</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Producer permissions need admin review</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Delete operations require dual approval</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <span>Cross-environment access blocked by default</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
                      <h5 className="font-semibold mb-2 text-blue-400">Integration Ready</h5>
                      <div className="text-sm text-gray-300">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>LDAP/Active Directory sync</span>
                        </div>
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>SAML/OIDC single sign-on</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                          <span>Custom identity providers</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'audit' && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <FileText className="w-8 h-8 text-red-400 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">Complete Audit Trail</h3>
                    <p className="text-gray-400">Every action logged, tracked, and searchable</p>
                  </div>
                </div>

                <div className="bg-slate-900 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-red-400">Recent Activity</h4>
                  <div className="space-y-3">
                    {auditLogs.map((log, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-slate-800 rounded-lg"
                      >
                        <div className="flex items-center space-x-4">
                          <div className={`w-3 h-3 rounded-full ${
                            log.status === 'SUCCESS' ? 'bg-green-400' : 'bg-red-400'
                          }`}></div>
                          <div>
                            <div className="flex items-center space-x-2">
                              <span className="font-medium text-white">{log.action}</span>
                              <span className="text-sm text-gray-400">{log.user}</span>
                            </div>
                            <div className="text-sm text-gray-500">{log.details}</div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400">{log.timestamp}</div>
                          <div className="text-sm font-medium text-gray-300">{log.resource}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-slate-900 rounded-xl p-4">
                    <h5 className="font-semibold mb-3 text-yellow-400">Compliance Features</h5>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>SOX compliance reporting</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>GDPR data lineage tracking</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>PCI DSS access monitoring</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <span>Custom retention policies</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-slate-900 rounded-xl p-4">
                    <h5 className="font-semibold mb-3 text-purple-400">Search & Analytics</h5>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Full-text search across all logs</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Time-based filtering</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>User activity dashboards</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>Anomaly detection alerts</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'masking' && (
              <div className="space-y-6">
                <div className="flex items-center mb-6">
                  <Eye className="w-8 h-8 text-red-400 mr-4" />
                  <div>
                    <h3 className="text-2xl font-bold">Data Masking & Privacy</h3>
                    <p className="text-gray-400">Safe production debugging without data exposure</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="bg-slate-900 rounded-xl p-4">
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <AlertCircle className="w-5 h-5 mr-2 text-red-400" />
                        Original Data (Admin View)
                      </h4>
                      <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                        <div className="space-y-1 text-gray-300">
                          {Object.entries(maskedData.original).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-blue-400">{key}:</span>
                              <span className={
                                ['customerEmail', 'creditCard', 'phoneNumber', 'address'].includes(key)
                                  ? 'text-red-400' : 'text-white'
                              }>
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-red-400 flex items-center">
                        <Lock className="w-3 h-3 mr-1" />
                        Contains PII - Admin access required
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-slate-900 rounded-xl p-4">
                      <h4 className="text-lg font-semibold mb-4 flex items-center">
                        <Eye className="w-5 h-5 mr-2 text-green-400" />
                        Masked Data (Developer View)
                      </h4>
                      <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                        <div className="space-y-1 text-gray-300">
                          {Object.entries(maskedData.masked).map(([key, value]) => (
                            <div key={key} className="flex justify-between">
                              <span className="text-blue-400">{key}:</span>
                              <span className={
                                ['customerEmail', 'creditCard', 'phoneNumber', 'address'].includes(key)
                                  ? 'text-yellow-400' : 'text-white'
                              }>
                                {value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="mt-2 text-xs text-green-400 flex items-center">
                        <Shield className="w-3 h-3 mr-1" />
                        PII masked - Safe for debugging
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                  <h4 className="text-lg font-semibold mb-4 text-green-400">Masking Features</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-medium mb-2">Built-in Patterns</h5>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>📧 Email addresses</li>
                        <li>💳 Credit card numbers</li>
                        <li>📞 Phone numbers</li>
                        <li>🏠 Physical addresses</li>
                        <li>🆔 Social security numbers</li>
                        <li>💰 Financial account numbers</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Custom Rules</h5>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>🎯 Regex-based matching</li>
                        <li>🏷️ Field-level masking</li>
                        <li>🔀 Format-preserving encryption</li>
                        <li>🎭 Role-based visibility</li>
                        <li>🌍 Region-specific compliance</li>
                        <li>📊 Statistical preservation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}