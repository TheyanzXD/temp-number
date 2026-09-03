<div align="center">
  <h1>📱 Temp Number</h1>
  <p>
    <b>Free Temporary Phone Numbers — Receive SMS Online</b><br>
    No registration. No hidden fees. Just pick a number and read your SMS instantly.
  </p>

  <p>
    <a href="https://github.com/TheyanzXD/temp-number">
      <img src="https://img.shields.io/github/repo-size/TheyanzXD/temp-number?style=flat-square" alt="Repo size" />
    </a>
    <a href="https://github.com/TheyanzXD/temp-number/blob/main/README.md">
      <img src="https://img.shields.io/badge/version-2.0.0-blue?style=flat-square" alt="Version" />
    </a>
    <a href="https://vercel.com">
      <img src="https://img.shields.io/badge/deploy-Vercel-black?style=flat-square&logo=vercel" alt="Deploy" />
    </a>
    <a href="https://opensource.org/licenses/MIT">
      <img src="https://img.shields.io/badge/License-MIT-yellow?style=flat-square" alt="License" />
    </a>
  </p>

  <p>
    <a href="https://yandez.my.id">🌐 Portfolio</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/TheyanzXD">GitHub</a>
    &nbsp;·&nbsp;
    <a href="https://vercel.com">Vercel</a>
  </p>
</div>

---

## ✨ Features

- 🌍 **50+ Countries** — US, UK, Canada, Netherlands, Germany, and more
- ⚡ **Instant Access** — No signup, no verification, no waiting
- 📨 **Realtime Inbox** — Monitor incoming SMS messages in real-time
- 🔑 **OTP Extraction** — Automatically detect and display OTP codes
- 🔗 **Verification Links** — Extract and highlight verification URLs
- 📋 **One-Click Copy** — Copy phone numbers instantly
- 🔍 **Smart Search** — Filter numbers by country or search by number
- 📱 **Mobile Friendly** — Fully responsive dark-themed UI
- 📄 **API Docs** — Built-in API documentation at `/docs.html`
- 🚀 **Vercel Ready** — One-click deploy with included `vercel.json`

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 14 (Pages Router) |
| **Frontend** | React 18 + Tailwind CSS |
| **Backend** | Next.js API Routes |
| **Data Source** | Scraped from temp-number.com |
| **Deployment** | Vercel |

## 📁 Project Structure

```
temp-number/
├── data.json              # Numbers, messages, countries data
├── next.config.js         # Next.js configuration
├── vercel.json            # Vercel deployment config
├── package.json           # Dependencies & scripts
├── README.md              # This file
├── public/
│   ├── index.html         # Main UI (vanilla JS + Tailwind)
│   └── docs.html          # API documentation page
└── pages/
    ├── index.js           # App shell
    ├── docs.js            # Docs shell
    └── api/
        ├── countries.js   # GET /api/countries
        ├── numbers/
        │   ├── index.js   # GET /api/numbers
        │   └── [id].js    # GET /api/numbers/:id
        └── messages/
            └── [id].js    # GET /api/messages/:id
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/TheyanzXD/temp-number.git
cd temp-number

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
# Build for production
npm run build

# Start production server
npm start
```

## ☁️ Deploy to Vercel

### Option 1: Vercel Dashboard (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import `TheyanzXD/temp-number`
4. Vercel auto-detects Next.js and deploys
5. Done! Your app is live at `https://temp-number.vercel.app`

### Option 2: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option 3: Vercel Git Integration

Connect your GitHub repo in Vercel dashboard for automatic deployments on every push.

## 📡 API Reference

### Base URL

```
https://your-domain.vercel.app
```

### Endpoints

#### `GET /api/countries`

Returns list of available countries with number counts.

**Response:**
```json
{
  "success": true,
  "countries": [
    { "name": "United States", "slug": "united-states", "count": 31 },
    { "name": "United Kingdom", "slug": "united-kingdom", "count": 4 },
    { "name": "Canada", "slug": "canada", "count": 4 },
    { "name": "Netherlands", "slug": "netherlands", "count": 3 },
    { "name": "Germany", "slug": "germany", "count": 2 }
  ]
}
```

#### `GET /api/numbers`

List temporary phone numbers with pagination and country filter.

**Query Parameters:**
| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `country` | string | No | — | Filter by country slug (e.g. `united-states`) |
| `page` | integer | No | `1` | Page number |
| `limit` | integer | No | `20` | Items per page (max 100) |

**Response:**
```json
{
  "success": true,
  "count": 44,
  "page": 1,
  "limit": 20,
  "numbers": [
    {
      "id": "12048138644",
      "country": "United States",
      "slug": "united-states",
      "added": "4 days ago"
    }
  ]
}
```

#### `GET /api/numbers/:id`

Get details of a specific phone number.

**Response:**
```json
{
  "success": true,
  "id": "12048138644",
  "country": "United States",
  "slug": "united-states",
  "added": "4 days ago"
}
```

#### `GET /api/messages/:id`

Get inbox messages for a specific phone number.

**Response:**
```json
{
  "success": true,
  "number": "12048138644",
  "total_messages": 2,
  "messages": [
    {
      "from": "WhatsApp",
      "body": "Your code: 482921",
      "received": "2 min ago"
    },
    {
      "from": "Telegram",
      "body": "Login code: 9021",
      "received": "1 hour ago"
    }
  ]
}
```

### Interactive Documentation

Visit `/docs.html` on your deployed app for interactive API documentation with examples.

## 🎨 UI/UX Features

- **Dark Theme** — Modern dark glassmorphism design
- **Responsive Layout** — Optimized for mobile, tablet, and desktop
- **Smooth Animations** — Fade-in, slide-up, and hover effects
- **Toast Notifications** — User-friendly feedback for actions
- **Skeleton Loading** — Loading states for better UX
- **Copy to Clipboard** — One-click copy for numbers and JSON
- **Smart Filtering** — Real-time search by number or country
- **Auto-refresh** — Optional inbox polling for new messages

## 🌐 Browser Support

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## ⚠️ Important Notes

> **This project is for development and testing purposes only.**

- Numbers are **public and shared** — anyone can see incoming messages
- Do **not** use for sensitive, financial, or private communications
- Messages are automatically deleted after ~7 days
- Some services may block shared/public numbers
- This is a **local replica** of temp-number.com for educational use
- In production, replace `data.json` with a real database or API integration

## 🔧 Customization

### Adding More Numbers

Edit `data.json` and add entries to the `numbers` array:

```json
{
  "id": "1234567890",
  "country": "United States",
  "slug": "united-states",
  "added": "just now"
}
```

### Adding Seed Messages

Add test messages to the `messages` object in `data.json`:

```json
{
  "1234567890": [
    {
      "from": "WhatsApp",
      "body": "Your verification code: 123456",
      "received": "just now"
    }
  ]
}
```

### Changing Theme

Edit `public/index.html` to customize:
- Colors and gradients
- Animations and transitions
- Fonts and spacing
- Logo and branding

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

## 👤 Author

**TheyanzXD**

- 🌐 Portfolio: [yandez.my.id](https://yandez.my.id)
- 🐙 GitHub: [@TheyanzXD](https://github.com/TheyanzXD)
- 📧 Email: m.23.idanish@gmail.com
- ▲ Vercel: [yanzxddda](https://vercel.com/yanzxddda)

## 🙏 Acknowledgments

- UI inspired by [temp-number.com](https://temp-number.com)
- Built with [Next.js](https://nextjs.org), [React](https://react.dev), and [Tailwind CSS](https://tailwindcss.com)
- Deployed on [Vercel](https://vercel.com)

---

<div align="center">
  <p>Made with ❤️ by <a href="https://github.com/TheyanzXD">TheyanzXD</a></p>
  <p>
    <a href="https://yandez.my.id">Portfolio</a>
    &nbsp;·&nbsp;
    <a href="https://github.com/TheyanzXD/temp-number">GitHub</a>
    &nbsp;·&nbsp;
    <a href="https://vercel.com">Vercel</a>
  </p>
</div>
