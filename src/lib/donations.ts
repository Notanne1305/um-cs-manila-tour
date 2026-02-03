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
  { id: '6', name: "H****L J** G.", amount: 1000.00, dateAdded: new Date().toISOString() },
  { id: '7', name: "HE***R J* G.", amount: 500.00, dateAdded: new Date().toISOString() },
  { id: '8', name: "ED***N G.", amount: 500.00, dateAdded: new Date().toISOString() },
];

export const getDonations = (): Donor[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const existingDonations: Donor[] = JSON.parse(stored);
      const defaultIds = new Set(defaultDonors.map(d => d.id));
      
      // Ensure all amounts are numbers (handle JSON parsing issues)
      const normalizeDonor = (donor: Donor): Donor => ({
        ...donor,
        amount: typeof donor.amount === 'number' ? donor.amount : parseFloat(String(donor.amount)) || 0,
      });
      
      // Create a map of existing donations by id for quick lookup
      const existingMap = new Map<string, Donor>(
        existingDonations.map((d: Donor) => [d.id, normalizeDonor(d)])
      );
      
      // Start with default donors, preserving any UI-updated amounts
      const mergedDonors: Donor[] = defaultDonors.map(defaultDonor => {
        const existing = existingMap.get(defaultDonor.id);
        if (existing && existing.amount !== defaultDonor.amount) {
          // Preserve UI-updated amount, but update other fields from defaults
          return {
            ...defaultDonor,
            amount: existing.amount,
          };
        }
        // Use default data
        return defaultDonor;
      });
      
      // Add any new donations that aren't in the default list
      existingDonations.forEach(existing => {
        if (!defaultIds.has(existing.id)) {
          mergedDonors.push(normalizeDonor(existing));
        }
      });
      
      // Sort by amount descending
      mergedDonors.sort((a, b) => b.amount - a.amount);
      
      // Save the merged list back to localStorage
      localStorage.setItem(STORAGE_KEY, JSON.stringify(mergedDonors));
      return mergedDonors;
    }
    // Initialize with default data (sorted by amount descending)
    const sortedDefaults = [...defaultDonors].sort((a, b) => b.amount - a.amount);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sortedDefaults));
    return sortedDefaults;
  } catch (error) {
    console.error('Error reading donations from localStorage:', error);
    return defaultDonors;
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
  // Start with the canonical default donors (use amounts from defaultDonors[])
  const baseDonors: Donor[] = defaultDonors.map(d => ({ ...d }));
  
  // Append any non-default donations found in localStorage (preserve their amounts)
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const existingDonations: Donor[] = JSON.parse(stored);
        const defaultIds = new Set(defaultDonors.map(d => d.id));
        existingDonations.forEach(d => {
          if (!defaultIds.has(d.id)) {
            baseDonors.push({
              ...d,
              amount: typeof d.amount === 'number' ? d.amount : parseFloat(String(d.amount)) || 0,
            });
          }
        });
      }
    } catch (error) {
      console.error('Error reading donations from localStorage in getRankedDonors:', error);
    }
  }

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
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultDonors));
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('donationsUpdated'));
  }
};

export const getTotalDonations = (): number => {
  const donations = getDonations();
  return donations.reduce((total, donor) => total + donor.amount, 0);
};

