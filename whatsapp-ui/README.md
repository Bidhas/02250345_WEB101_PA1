# WhatsApp Chat List UI - React Recreation

## Overview
A recreation of the WhatsApp Chat List screen built with React and Vite. 
This project demonstrates React's component-based architecture by breaking 
down the WhatsApp UI into reusable, independent components.

## Functionality
- Displays a list of chats with contact name, last message and timestamp
- Real-time search filtering - type in the search bar to filter chats by name
- Responsive layout that adapts to mobile, tablet and desktop screen sizes
- Avatar automatically generated from first letter of contact name
- Hover effect on each chat item for better user experience

## Component Structure
```
App
├── Navbar        → Top green bar with app title and icons
├── SearchBar     → Controlled input for filtering chats in real time
└── ChatItem      → Reusable chat card displaying avatar, name, message and time
```

## Data Source
Chat data is stored as an array of objects in App.jsx and passed 
down to each ChatItem component via props.

## Responsive Design
- Desktop: centered 400px container
- Tablet: full width layout
- Mobile: adjusted font sizes and avatar dimensions

## How to Run
npm install
npm run dev

## Tech Stack
- React.js
- Vite
- CSS