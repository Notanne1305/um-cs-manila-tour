export interface Donor {
  id: string;
  name: string;
  amount: number;
  dateAdded: string;
}

const STORAGE_KEY = 'gcash_donations';

// Initialize with default data if storage is empty
const defaultDonors: Donor[] = [
  { id: '1', name: "A**Y GA**E A.", amount: 2000.00, dateAdded: new Date().toISOString() },
  { id: '2', name: "R** AL*****E J.", amount: 9.00, dateAdded: new Date().toISOString() },
  { id: '3', name: "KE**N JO*N A.", amount: 6.00, dateAdded: new Date().toISOString() },
  { id: '4', name: "R*****O F.", amount: 5.00, dateAdded: new Date().toISOString() },
  { id: '5', name: "J***E S.", amount: 500.00, dateAdded: new Date().toISOString() },
  { id: '6', name: "H***L J** G.", amount: 1000.00, dateAdded: new Date().toISOString() },
  { id: '7', name: "HE***R J* G.", amount: 500.00, dateAdded: new Date().toISOString() },
  { id: '8', name: "ED***N G.", amount: 500.00, dateAdded: new Date().toISOString() },
  { id: '9', name: "KR*****E G.", amount: 1000.00, dateAdded: new Date(). toISOString()}
];

export const getDonations = (): Donor[] => {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // No donations saved yet
      return [];
    }

    const existingDonations: Donor[] = JSON.parse(stored);

    const normalizeDonor = (donor: Donor): Donor => ({
      ...donor,
      amount: typeof donor.amount === 'number' ? donor.amount : parseFloat(String(donor.amount)) || 0,
    });

    let normalized = existingDonations.map(normalizeDonor);

    // Remove any seeded default donors (they should not appear in a real donor list)
    const defaultIds = new Set(defaultDonors.map(d => d.id));
    const filtered = normalized.filter(d => !defaultIds.has(d.id));
    if (filtered.length !== normalized.length) {
      // Save the filtered list back to storage and notify listeners
      localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('donationsUpdated'));
      }
      normalized = filtered;
    }

    // Sort by amount descending; on ties use dateAdded (newer first)
    normalized.sort((a, b) => {
      if (b.amount !== a.amount) return b.amount - a.amount;
      return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
    });

    return normalized;
  } catch (error) {
    console.error('Error reading donations from localStorage:', error);
    return [];
  }
};

export const addDonation = (name: string, amount: number): Donor => {
  const donations = getDonations();
  const newDonation: Donor = {
    id: Date.now().toString(),
    name: name.trim(),
    amount: amount,
    dateAdded: new Date().toISOString(),
  };
  
  // Check if donor already exists (by name)
  const existingIndex = donations.findIndex(
    d => d.name.toLowerCase() === name.toLowerCase().trim()
  );
  
  if (existingIndex >= 0) {
    // Update existing donor's amount
    donations[existingIndex].amount += amount;
    donations[existingIndex].dateAdded = new Date().toISOString();
  } else {
    // Add new donor
    donations.push(newDonation);
  }
  
  // Sort by amount descending
  donations.sort((a, b) => b.amount - a.amount);
  
  localStorage.setItem(STORAGE_KEY, JSON.stringify(donations));
  
  // Dispatch custom event to notify all components
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('donationsUpdated'));
  }
  
  return newDonation;
};

export const deleteDonation = (id: string): void => {
  const donations = getDonations();
  const filtered = donations.filter(d => d.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
};

export const updateDonation = (id: string, name: string, amount: number): void => {
  const donations = getDonations();
  const index = donations.findIndex(d => d.id === id);
  
  if (index >= 0) {
    donations[index].name = name.trim();
    donations[index].amount = amount;
    donations[index].dateAdded = new Date().toISOString();
    
    // Re-sort after update
    donations.sort((a, b) => b.amount - a.amount);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(donations));
  }
};

export const getRankedDonors = (): Array<Donor & { rank: number; iconType: 'trophy' | 'medal' | 'award' | null; rankClass: string; rankSize: number }> => {
  // Use ONLY the 8 default donors from defaultDonors array
  const baseDonors: Donor[] = defaultDonors.map(d => ({ ...d }));

  // Sort by amount descending; on ties use dateAdded (newer first)
  const sortedDonations = [...baseDonors].sort((a, b) => {
    if (b.amount !== a.amount) return b.amount - a.amount;
    return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
  });

  // Assign sequential ranks and icon types
  return sortedDonations.map((donor, index) => {
    const rank = index + 1;

    // Presentation hints for the rank number (UI can use these classes/sizes)
    let rankClass = 'text-base';
    let rankSize = 16;
    if (rank === 1) {
      rankClass = 'text-3xl font-extrabold'; // much bigger
      rankSize = 28;
    } else if (rank === 2) {
      rankClass = 'text-2xl font-semibold'; // slightly smaller
      rankSize = 22;
    } else if (rank === 3) {
      rankClass = 'text-xl font-semibold'; // slightly smaller
      rankSize = 20;
    }

    return {
      ...donor,
      rank,
      iconType: rank === 1 ? 'trophy' : rank === 2 ? 'medal' : rank === 3 ? 'award' : null,
      rankClass,
      rankSize,
    };
  });
};

export const resetDonations = (): void => {
  if (typeof window === 'undefined') return;
  // Reset to an empty donation list (no default donors will appear in the leaderboard)
  localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('donationsUpdated'));
  }
};

export const getTotalDonations = (): number => {
  const donations = getDonations();
  return donations.reduce((total, donor) => total + donor.amount, 0);
};

