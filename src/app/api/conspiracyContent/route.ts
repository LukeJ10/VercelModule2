import { NextApiRequest, NextApiResponse } from 'next';

interface ConspiracyContent {
  paragraphs: string[];
  title: string;
  values: string[];
}

const conspiracyContent: ConspiracyContent = {
  paragraphs: [
    'In conspiracy mode, we reveal hidden truths.',
    'Stay woke, the truth is out there!',
  ],
  title: 'Conspiracy Mode',
  values: ['Secrets', 'Cover-ups', 'Truth'],
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(conspiracyContent);
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
