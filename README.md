# LMS (Learning Management System)

A modern, full-stack Learning Management System (LMS) built with React 18, Vite, Redux Toolkit, TipTap/ReactQuill rich text editing, and a Node.js/Express backend. This project supports course creation, editing, and management for administrators and instructors.

## Features
- **React 18 + Vite**: Fast, modern frontend development.
- **Redux Toolkit**: State management and API integration.
- **Rich Text Editor**: TipTap (for React 19) or ReactQuill (for React 18) for course descriptions.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Authentication**: (Pluggable, add as needed)
- **Course CRUD**: Create, update, delete, and manage courses.
- **Admin Dashboard**: Manage courses, users, and content.
- **Responsive UI**: Works on desktop and mobile.

## Tech Stack
- **Frontend**: React 18, Vite, Redux Toolkit, React Router DOM, Tailwind CSS, Lucide React Icons
- **Rich Text Editor**: ReactQuill (for React 18), TipTap (for React 19+)
- **Backend**: Node.js, Express (see `/server` folder)

## Getting Started

### Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Lms-pro.git
   cd Lms-pro
   ```
2. **Install client dependencies**
   ```bash
   cd client
   npm install
   ```
3. **Install server dependencies**
   ```bash
   cd ../server
   npm install
   ```

### Running the App

#### Start the Client (Frontend)
```bash
cd client
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

#### Start the Server (Backend)
```bash
cd server
npm run dev
```

## Project Structure
```
LMS/
├── client/         # React frontend (Vite)
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── features/
│   │   └── ...
│   └── package.json
├── server/         # Node.js backend
│   ├── src/
│   └── package.json
├── README.md       # Project documentation
└── ...
```

## Customization
- **Rich Text Editor**: By default, ReactQuill is used for React 18. For React 19+, you can switch to TipTap for a more modern experience.
- **Styling**: Tailwind CSS classes are used throughout. Customize in `tailwind.config.js`.
- **API Endpoints**: Update or extend backend endpoints as needed in `/server`.

## Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](LICENSE)

## Acknowledgements
- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [ReactQuill](https://github.com/zenoamaro/react-quill)
- [TipTap](https://tiptap.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide Icons](https://lucide.dev/)
