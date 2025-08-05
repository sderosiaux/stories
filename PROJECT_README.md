# Kafka Self-Service Storytelling Website

An interactive, one-page storytelling website that explains how Conduktor's Self-Service product for Apache Kafka works — and **why it matters**.

## 🚀 Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎯 What This Is

This is not documentation. This is not marketing fluff. This is an **experience** that feels **alive, smart, visual, and funny**, while being **technically real and credible**.

The website tells the story of:
- **Alice (Platform Engineer)** - who gets pinged 12 times a day about Kafka stuff she doesn't own
- **Bob (BI Analyst)** - who cries in YAML when dealing with Kafka Connect configs

And how Conduktor Self-Service transforms their experience from chaos to zen.

## 🧱 Website Structure

1. **🚀 Hero**: "Kafka Self-Service, Without the Kafkaesque" with before/after comparison
2. **🧑‍🤝‍🧑 Personas**: Meet Alice & Bob with interactive toggles
3. **🧰 Platform Setup**: How Alice configures once, never babysits
4. **📡 Bob's Journey**: Interactive topic catalog and access request flow
5. **🔐 Governance**: RBAC, audit trails, and data masking
6. **⚙️ Operations**: Visual config wizard and auto-recovery
7. **📈 Federated Access**: Decentralized approval workflow
8. **🧠 Product Philosophy**: Multimodal access and metadata-first approach
9. **🤯 Big Picture**: Sankey diagram vision for data flow visualization
10. **🎬 Call to Action**: Try the demo, watch live demo, read docs, contact us

## 🛠️ Tech Stack

- **Next.js 15** with App Router
- **React** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons

## 🎨 Design Philosophy

- **Dark theme** with orange/pink accents
- **Scroll-driven** animations and interactions
- **Responsive** design for all devices
- **Playful** copy with developer humor
- **Technical credibility** with real product features

## 🏗️ Component Architecture

Each section is a self-contained React component:

```
src/components/
├── HeroSection.tsx          # Hero with comparison animation
├── PersonaShowcase.tsx      # Alice & Bob personas
├── PlatformSetup.tsx        # Platform team workflow
├── BobJourney.tsx           # Interactive access request flow
├── GovernanceSection.tsx    # Security & compliance features
├── OperationsSection.tsx    # Monitoring & operations
├── FederatedAccess.tsx      # Decentralized approvals
├── ProductPhilosophy.tsx    # Product principles
├── BigPicture.tsx           # Data flow visualization
└── CallToAction.tsx         # Final CTA section
```

## 🎭 The Story

The website takes users through a complete narrative:

1. **Pain Points**: Show the chaos of traditional Kafka management
2. **Characters**: Introduce relatable personas with real problems  
3. **Solution**: Demonstrate how Self-Service solves their pain
4. **Journey**: Walk through actual user workflows
5. **Technical Depth**: Show enterprise-grade features
6. **Vision**: Paint the picture of transformed data infrastructure
7. **Action**: Invite users to experience it themselves

## 🎯 Key Features

- **Interactive Elements**: Toggles, step-by-step flows, tabs
- **Real Workflows**: Actual product features and user journeys
- **Scroll Animations**: Smooth transitions and reveals
- **Responsive Design**: Works on desktop, tablet, mobile
- **Technical Accuracy**: Based on real Conduktor Self-Service capabilities
- **Engaging Copy**: Developer humor mixed with technical credibility

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎨 Color Palette

- **Background**: Slate-900, Slate-800
- **Primary**: Orange-400, Pink-600
- **Secondary**: Blue-400, Green-400, Purple-400
- **Text**: White, Gray-300, Gray-400
- **Accents**: Red-400, Yellow-400, Cyan-400

## 🚀 Deployment

This is a standard Next.js application that can be deployed to:
- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

```bash
npm run build
npm start
```

## 🧠 Philosophy

The website embodies the core message: **Kafka's complex. Your teams shouldn't suffer for it.**

Every interaction, animation, and piece of copy reinforces this theme while building empathy for both platform and application teams.

---

Built for **Kafka**. Loved by **humans**. 🚀