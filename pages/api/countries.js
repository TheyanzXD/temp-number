import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ success: true, countries: data.countries });
}
