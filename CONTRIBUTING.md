# Contributing to Judgify

First off, thank you for considering contributing to Judgify! It's people like you that make Judgify such a great tool for hackathon organizers worldwide.

## 🤝 Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct:

- Use welcoming and inclusive language
- Be respectful of differing viewpoints and experiences
- Gracefully accept constructive criticism
- Focus on what is best for the community
- Show empathy towards other community members

## 🚀 Getting Started

### Prerequisites

- Node.js v22.17.0 (use `.nvmrc`)
- Yarn package manager
- Git
- A Supabase account (for testing authentication features)

### Development Setup

1. Fork the repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone https://github.com/your-username/hackathon-judge.git
   cd hackathon-judge
   ```

3. Add the upstream repository:
   ```bash
   git remote add upstream https://github.com/omkar-yelpale/hackathon-judge.git
   ```

4. Install dependencies:
   ```bash
   nvm use
   yarn install
   ```

5. Create a `.env.local` file with your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

6. Start the development server:
   ```bash
   yarn dev
   ```

## 📝 How to Contribute

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates. When creating a bug report, include:

- A clear and descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots (if applicable)
- Your environment (OS, browser, Node version)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, include:

- A clear and descriptive title
- A detailed description of the proposed feature
- Why this enhancement would be useful
- Possible implementation approach

### Pull Requests

1. Create a new branch from `main`:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following our coding standards

3. Write or update tests as needed

4. Ensure all tests pass:
   ```bash
   yarn test  # Once testing is set up
   ```

5. Run linting and type checking:
   ```bash
   yarn lint
   yarn tsc -b
   ```

6. Commit your changes using conventional commits:
   ```bash
   git commit -m "feat: add new judging criteria component"
   ```

7. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

8. Open a Pull Request

## 📏 Coding Standards

### TypeScript/JavaScript

- Use TypeScript for all new code
- Enable strict mode in TypeScript
- Use functional components with hooks for React
- Prefer `const` over `let`, avoid `var`
- Use meaningful variable and function names

### Styling

- Use Tailwind CSS for layouts and general styling
- Use Mantine components ONLY for:
  - Form inputs and controls
  - Buttons
  - Modals
  - Select dropdowns
  - Notifications
- Follow mobile-first responsive design
- Ensure all interactive elements have at least 44px tap targets

### Git Commit Messages

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, missing semicolons, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Examples:
```
feat: add CSV export for judging results
fix: resolve authentication redirect loop
docs: update README with deployment instructions
style: format code with prettier
refactor: extract judging logic into custom hook
test: add unit tests for score calculation
chore: update dependencies
```

## 🏗️ Project Structure

```
src/
├── components/          # React components
│   ├── common/         # Reusable components
│   ├── features/       # Feature-specific components
│   └── layouts/        # Layout components
├── contexts/           # React contexts
├── hooks/              # Custom React hooks
├── lib/               # Utility libraries and configurations
├── pages/             # Page components (if using file-based routing)
├── styles/            # Global styles
└── types/             # TypeScript type definitions
```

## 🧪 Testing

We aim for high test coverage. Please write tests for:

- New features
- Bug fixes
- Utility functions
- React components

### Running Tests

```bash
yarn test        # Run all tests
yarn test:watch  # Run tests in watch mode
yarn test:coverage  # Generate coverage report
```

## 📚 Documentation

- Update the README.md if needed
- Add JSDoc comments for complex functions
- Update CLAUDE.md for AI-assisted development guidelines
- Keep inline comments minimal and meaningful

## 🔄 Pull Request Process

1. Ensure your PR description clearly describes the problem and solution
2. Include the relevant issue number if applicable
3. Update the documentation if needed
4. Your PR will be reviewed by maintainers
5. Make requested changes if any
6. Once approved, your PR will be merged

## 🎯 Focus Areas

Current areas where we especially welcome contributions:

- [ ] Test coverage improvement
- [ ] Performance optimizations
- [ ] Accessibility enhancements
- [ ] Documentation improvements
- [ ] Bug fixes
- [ ] New judging criteria types
- [ ] Export functionality enhancements
- [ ] Real-time collaboration features

## ❓ Questions?

Feel free to:
- Open an issue for questions
- Start a discussion in GitHub Discussions
- Reach out to maintainers

## 🙏 Recognition

Contributors will be:
- Listed in our README
- Mentioned in release notes
- Given credit in commit messages

Thank you for contributing to Judgify! 🎉