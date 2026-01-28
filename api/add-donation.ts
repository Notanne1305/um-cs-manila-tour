// Serverless API endpoint for receiving GCash donation notifications
// Deploy this to Vercel, Netlify Functions, or similar serverless platform

import type { VercelRequest, VercelResponse } from '@vercel/node';

// Simple in-memory store (in production, use a database like Supabase, MongoDB, etc.)
// For now, we'll use a simple JSON file or database
let donations: Array<{
  id: string;
  name: string;
  amount: number;
  dateAdded: string;
}> = [];

// Simple authentication token (store in environment variable)
const API_TOKEN = process.env.API_TOKEN || 'your-secret-token-change-this';

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Verify API token
  const authToken = req.headers.authorization?.replace('Bearer ', '') || req.body.token;
  if (authToken !== API_TOKEN) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    const { name, amount } = req.body;

    // Validate input
    if (!name || !amount) {
      return res.status(400).json({ error: 'Name and amount are required' });
    }

    const donationAmount = parseFloat(amount);
    if (isNaN(donationAmount) || donationAmount <= 0) {
      return res.status(400).json({ error: 'Invalid amount' });
    }

    // Add donation (in production, save to database)
    const newDonation = {
      id: Date.now().toString(),
      name: name.trim(),
      amount: donationAmount,
      dateAdded: new Date().toISOString(),
    };

    // TODO: Save to database (Supabase, MongoDB, etc.)
    // For now, this is a placeholder - you'll need to implement database storage
    
    return res.status(200).json({
      success: true,
      donation: newDonation,
      message: 'Donation added successfully',
    });
  } catch (error) {
    console.error('Error processing donation:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}

