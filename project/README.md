# AmberClone - Student Accommodation Platform

A fully responsive React.js application that replicates the design and functionalities of [Amber Student](https://amberstudent.com/), offering a platform for students to find and book accommodations worldwide.

## 📝 Features

- **Responsive Design**: Fully optimized for mobile, tablet, and desktop
- **User Authentication**: Secure login/signup with form validation
- **Property Listings**: Searchable and filterable property database
- **Interactive UI**: Modern interface with animations and intuitive design
- **Protected Routes**: Secure dashboard access for authenticated users
- **State Management**: Using React Context API for global state
- **Local Storage**: Persistent authentication across sessions

## 🛠️ Tech Stack

- [React](https://reactjs.org/) - UI library
- [React Router DOM](https://reactrouter.com/) - Navigation and routing
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icon set
- [Date-fns](https://date-fns.org/) - Date manipulation

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── auth/         # Authentication-related components
│   ├── layout/       # Layout components (Header, Footer)
│   ├── property/     # Property-related components
│   └── ui/           # Generic UI components
├── contexts/         # Context providers for state management
├── data/             # Mock data for development
├── pages/            # Page components
├── types/            # TypeScript type definitions
└── App.tsx           # Main application component
```

## ✨ Design Analysis

The design follows modern web aesthetics with:

1. **Color System**:
   - Primary blue (#2563EB)
   - Secondary teal (#0EA5E9)
   - Accent gold (#F59E0B)
   - Success, warning, and error states

2. **Typography**:
   - Clear hierarchy with consistent font weights
   - Readable text with proper contrast
   - Responsive sizing across breakpoints

3. **Spacing**:
   - Consistent 8px spacing system
   - Proper whitespace for readability
   - Responsive padding and margins

4. **Components**:
   - Card-based UI for property listings
   - Comprehensive forms with validation
   - Interactive elements with hover/focus states

## 🚀 Getting Started

### Prerequisites

- Node.js 14+
- npm or yarn

### Installation

1. Clone the repository
   ```
   git clone https://github.com/yourusername/amberstudent-clone.git
   cd amberstudent-clone
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm run dev
   ```

4. Build for production
   ```
   npm run build
   ```

## 🌟 Future Improvements

- Implement real backend API integration
- Add filtering by price range, property type, and amenities
- Implement virtual tours feature
- Add reviews and ratings system
- Integrate map view for properties

## 📄 License

This project is for educational purposes only. All rights belong to their respective owners.

## 🙏 Acknowledgements

- [Amber Student](https://amberstudent.com/) for design inspiration
- [Pexels](https://www.pexels.com/) for stock images

---

Created with ❤️ using React and Tailwind CSS