# Contact List App 📇

A modern, responsive contact management application built with React and Supabase. Create, search, and manage your contacts with a beautiful UI powered by Tailwind CSS.

## 🌐 Live Demo

**🔗 [View Live App](https://contacts-app-weld.vercel.app/)**


## Features

- ✅ Add new contacts with name, email, and phone
- 🔍 Real-time search functionality with debouncing
- 🎨 Modern, responsive UI with Tailwind CSS
- 📱 Mobile-friendly design
- ⚡ Fast performance with Supabase backend
- 🎭 Smooth animations with Framer Motion
- 🔔 Toast notifications for user feedback

## Tech Stack

- **React** - UI library
- **Tailwind CSS** - Styling
- **Supabase** - Backend and database
- **Lucide React** - Icon library
- **Framer Motion** - Animations

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Supabase account (free tier available)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/averageguy989/Conatact-App.git
cd contact-lis
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase

1. Go to [Supabase](https://supabase.com) and create a new project
2. In your Supabase project, go to **SQL Editor**
3. Create a `contacts` table with the following schema:

```sql
CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

4. Go to **Project Settings** → **API** to get your credentials

### 4. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
touch .env
```

Add the following environment variables:

```env
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Example:**
```env
REACT_APP_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
REACT_APP_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

### 5. Start the Development Server

```bash
npm start
```

The app will open at [http://localhost:3000](http://localhost:3000)

## Available Scripts

### `npm start`

Runs the app in development mode. The page will reload when you make changes.

### `npm run build`

Builds the app for production to the `build` folder. The build is optimized for best performance.

### `npm test`

Launches the test runner in interactive watch mode.

## Project Structure

```
contact-lis/
├── src/
│   ├── components/       # React components
│   │   ├── AddContactButton.js
│   │   ├── AddContactForm.js
│   │   ├── ContactCard.js
│   │   ├── ContactList.js
│   │   ├── HomeHeader.js
│   │   └── SearchBar.js
│   ├── hooks/            # Custom React hooks
│   │   └── useDebounce.js
│   ├── lib/              # API and client configuration
│   │   ├── api.js
│   │   └── supabaseClient.js
│   ├── pages/            # Page components
│   │   └── HomePage.js
│   └── index.js          # Entry point
├── .env                  # Environment variables (create this)
├── package.json
└── tailwind.config.js
```

## Environment Variables

The following environment variables are required for the app to function:

| Variable | Description | Required |
|----------|-------------|----------|
| `REACT_APP_SUPABASE_URL` | Your Supabase project URL | Yes |
| `REACT_APP_SUPABASE_ANON_KEY` | Your Supabase anonymous/public key | Yes |

## Troubleshooting

### App won't connect to Supabase

- Verify your `.env` file exists in the root directory
- Check that environment variable names start with `REACT_APP_`
- Restart the development server after creating/modifying `.env`
- Verify your Supabase URL and API key are correct

### Styling not working

- Make sure you installed Tailwind CSS dependencies: `npm install -D tailwindcss postcss autoprefixer`
- Verify `tailwind.config.js` is properly configured

## Learn More

- [React Documentation](https://reactjs.org/)
- [Supabase Documentation](https://supabase.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)
