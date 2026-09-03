import fs from 'fs';
import path from 'path';

const dataPath = path.join(process.cwd(), 'data.json');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

export default function handler(req, res) {
  const { id } = req.query;
  const item = data.numbers.find(n => n.id === id);
  if (!item) return res.status(404).json({ success: false, message: 'Number not found' });
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({ success: true, ...item });
}
