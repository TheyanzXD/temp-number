import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

export default function handler(req, res) {
  const { country, page = 1, limit = 20 } = req.query;
  let items = data.numbers;
  if (country) items = items.filter(n => n.slug === country || n.country.toLowerCase() === country.toLowerCase());
  const pageNum = parseInt(page, 10);
  const limitNum = Math.min(parseInt(limit, 10), 100);
  const start = (pageNum - 1) * limitNum;
  const paginated = items.slice(start, start + limitNum);
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ success: true, count: items.length, page: pageNum, limit: limitNum, numbers: paginated });
}
