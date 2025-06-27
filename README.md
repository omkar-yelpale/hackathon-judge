# 🏆 Judgify - Hackathon Judging Platform

<div align="center">
  <img src="public/judgify-icon.svg" alt="Judgify Logo" width="120" height="120">
  
  <p align="center">
    <strong>A modern, real-time hackathon judging platform built with React, TypeScript, and Supabase</strong>
  </p>

  <p align="center">
    <a href="https://github.com/omkar-yelpale/hackathon-judge/actions">
      <img src="https://img.shields.io/github/actions/workflow/status/omkar-yelpale/hackathon-judge/ci.yml?style=flat-square" alt="Build Status">
    </a>
    <a href="https://github.com/omkar-yelpale/hackathon-judge/blob/main/LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License">
    </a>
    <a href="https://github.com/omkar-yelpale/hackathon-judge">
      <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
    </a>
  </p>
</div>

## ✨ Features

- 🔐 **Secure Authentication** - Google OAuth via Supabase
- 🎨 **Modern UI** - Beautiful dark theme with purple accents
- 📱 **Fully Responsive** - Works seamlessly on all devices
- ⚡ **Real-time Updates** - Live judging progress tracking
- 🚀 **Fast Performance** - Built with Vite for optimal speed
- 🔒 **Type-Safe** - Full TypeScript support with strict mode

## 🛠️ Tech Stack

- **Frontend Framework:** React 19.1.0 with TypeScript
- **Build Tool:** Vite 7.0.0
- **Styling:** Tailwind CSS 3.4.0
- **UI Components:** Mantine (selective usage)
- **State Management:** TanStack Query + Context API
- **Authentication:** Supabase Auth with Google OAuth
- **Routing:** React Router DOM v7
- **Code Quality:** ESLint with TypeScript integration

## 🚀 Quick Start

### Prerequisites

- Node.js v22.17.0 (use `.nvmrc`)
- Yarn package manager
- Supabase account with Google OAuth enabled

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/omkar-yelpale/hackathon-judge.git
   cd hackathon-judge
   ```

2. **Install dependencies**
   ```bash
   nvm use  # Uses Node v22.17.0 from .nvmrc
   yarn install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Add your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Configure Supabase**
   - Enable Google OAuth in your Supabase dashboard
   - Set redirect URL to `http://localhost:3000/dashboard`

5. **Start development server**
   ```bash
   yarn dev
   ```
   
   Visit [http://localhost:3000](http://localhost:3000) 🎉

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Dashboard.tsx   # Main application dashboard
│   ├── Login.tsx       # Google sign-in page
│   └── ProtectedRoute.tsx
├── contexts/           # React contexts
│   └── AuthContext.tsx # Authentication state management
├── hooks/              # Custom React hooks
│   └── useAuth.ts     # Authentication hook
├── lib/               # Utility libraries
│   ├── supabase.ts    # Supabase client configuration
│   └── auth-context.ts
├── App.tsx            # Root component with routing
├── main.tsx           # Application entry point
└── index.css          # Global styles with Tailwind
```

## 🎨 Design Principles

### Component Usage
- **Mantine** - Used ONLY for:
  - Form inputs and controls
  - Buttons
  - Modals
  - Select dropdowns
  - Notifications
- **Tailwind CSS** - Used for all other styling and layouts

### Responsive Design
- Mobile-first approach
- Breakpoints: 320px, 768px, 1024px, 1440px+
- Touch-friendly interfaces (min 44px tap targets)
- Flexible layouts using Flexbox and Grid

## 📝 Available Scripts

```bash
yarn dev        # Start development server on port 3000
yarn build      # Build for production
yarn preview    # Preview production build
yarn lint       # Run ESLint
yarn tsc -b     # Run TypeScript type checking
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/omkar-yelpale/hackathon-judge)

1. Click the button above
2. Add your environment variables
3. Deploy!

### Manual Deployment

1. Build the project:
   ```bash
   yarn build
   ```

2. The `dist` folder contains the production build

3. Deploy to any static hosting service (Vercel, Netlify, etc.)

## 🤝 Contributing

We love contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with ❤️ using [Claude Code](https://claude.ai/code)
- UI inspiration from modern SaaS platforms
- Icons from Heroicons

---

<div align="center">
  <p>
    <strong>Ready to revolutionize hackathon judging? Let's build together! 🚀</strong>
  </p>
  
  <p>
    <a href="https://github.com/omkar-yelpale/hackathon-judge/issues">Report Bug</a>
    ·
    <a href="https://github.com/omkar-yelpale/hackathon-judge/issues">Request Feature</a>
    ·
    <a href="https://github.com/omkar-yelpale/hackathon-judge/discussions">Discussions</a>
  </p>
</div>
