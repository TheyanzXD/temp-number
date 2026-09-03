# Temp Number

Free temporary phone numbers web app — receive SMS online without registration.

## Tech Stack

- **Framework**: Next.js 14 (Pages Router)
- **Frontend**: React 18 + Tailwind CSS
- **Backend**: Next.js API Routes
- **Data**: Static `data.json` for local/dev use

## Project Structure

```
pages/
  index.js              # Main app page
  docs.js               # API docs page
  api/
    countries.js        # GET /api/countries
    numbers/
      index.js          # GET /api/numbers
      [id].js           # GET /api/numbers/:id
    messages/
      [id].js           # GET /api/messages/:id
public/
  docs.html             # API documentation page
data.json               # Numbers, messages, countries
```

## API Endpoints

| Method | Path | Description |
|--------|------|-------------|
| GET | `/api/countries` | List available countries with number counts |
| GET | `/api/numbers` | List numbers with pagination and country filter |
| GET | `/api/numbers/:id` | Get number details by ID |
| GET | `/api/messages/:id` | Get inbox messages for a number |

## Getting Started

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to Vercel

Import repo in Vercel dashboard. It auto-detects Next.js.

## Notes

- This project is for development and testing purposes only.
- Numbers are public/shared. Do not use for sensitive communications.
