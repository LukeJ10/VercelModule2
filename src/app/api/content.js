//src/app/api/content.js
import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const contentFilePath = path.resolve('../../Content.json');
  const contentData = fs.readFileSync(contentFilePath, 'utf8');
  const parsedContent = JSON.parse(contentData);
  res.status(200).json(parsedContent);
}
