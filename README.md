# 📦 Sample Next.js Application for Loudly API Integration

This is a sample **Next.js** application that demonstrates how to integrate and use the **Loudly API** services on the frontend. The project is designed to showcase how developers can fetch data from the API, handle responses, and render them in a modern, responsive UI.

---

## 🚀 Features

- ⚡ Built with **Next.js 13+ App Router**
- 🛠️ Typed API integration using `lib/api.ts`
- 🎨 Reusable UI components for genres and songs
- 📂 Organized folder structure with `app/`, `components/`, `lib/`, and `types/`
- 🌐 Environment-based API configuration

---

## 📂 Project Structure

```
src/
├── app/
│   ├── generate/page.tsx     # Page that shows generated content (e.g., song lists)
│   ├── layout.tsx            # Shared layout for pages
│   ├── page.tsx              # Homepage (API service listing or entry point)
│   └── globals.css           # Global styles
├── components/
│   ├── GenreList.tsx         # Component to display genre data
│   └── SongsList.tsx         # Component to display songs
├── lib/
│   └── api.ts                # API client functions (fetchGenres, fetchSongs, etc.)
└── types/
    └── index.ts              # TypeScript interfaces for API responses
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v16+
- npm or yarn

### Installation

```bash
git clone https://github.com/Loudly-AI/quickstart.git
cd quickstart
npm install
# or
yarn install
```

## Environment Setup

Create a `.env.local` file at the root:

```env
NEXT_PUBLIC_LOUDLY_API_KEY=''
```

Get your API key from → https://www.loudly.com/music-api

Simply register and follow the straight-forward instructions to get your API key which you can replace in the `.env.local` `NEXT_PUBLIC_LOUDLY_API_KEY` variable. 

## Run the app

```bash
npm run dev
# or
yarn dev
```

Then open http://localhost:3000 in your browser.

---

## 📜 License

This project is licensed under the MIT License. See the LICENSE file for details.

---

**Made with ❤️ by the Loudly Team**