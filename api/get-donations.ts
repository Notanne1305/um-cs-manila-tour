// API endpoint to fetch all donations
// This will be called by your frontend to get the latest donations

import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // TODO: Fetch from database (Supabase, MongoDB, etc.)
    // For now, return empty array - implement database fetching
    
    const donations: Array<{
      id: string;
      name: string;
      amount: number;
      dateAdded: string;
    }> = [];

    // Sort by amount descending
    donations.sort((a, b) => b.amount - a.amount);

    return res.status(200).json({
      success: true,
      donations,
    });
  } catch (error) {
    console.error('Error fetching donations:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}


