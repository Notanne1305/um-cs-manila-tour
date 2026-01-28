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
  { id: '4', name: "A**E G.", amount: 5.75, dateAdded: new Date().toISOString() },
  { id: '6', name: "C*****A L.", amount: 5.25, dateAdded: new Date().toISOString() },
  { id: '7', name: "R*****O F.", amount: 5.00, dateAdded: new Date().toISOString() },
  { id: '8', name: "J***E S.", amount: 500.00, dateAdded: new Date().toISOString() },
];

export const getDonations = (): Donor[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const existingDonations = JSON.parse(stored);
      // Merge any new default donors that don't exist yet (by id)
      const existingIds = new Set(existingDonations.map((d: Donor) => d.id));
      const newDonors = defaultDonors.filter(d => !existingIds.has(d.id));
      
      if (newDonors.length > 0) {
        const merged = [...existingDonations, ...newDonors];
        // Sort by amount descending
        merged.sort((a, b) => b.amount - a.amount);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        return merged;
      }
      
      return existingDonations;
    }
    // Initialize with default data
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultDonors));
    return defaultDonors;
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

export const getRankedDonors = (): Array<Donor & { rank: number; iconType: 'trophy' | 'medal' | 'award' | null }> => {
  const donations = getDonations();
  
  // Sort by amount descending to ensure proper ranking
  const sortedDonations = [...donations].sort((a, b) => b.amount - a.amount);
  
  return sortedDonations.map((donor, index) => ({
    ...donor,
    rank: index + 1,
    iconType: index === 0 ? 'trophy' : index === 1 ? 'medal' : index === 2 ? 'award' : null,
  }));
};

export const resetDonations = (): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultDonors));
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('donationsUpdated'));
  }
};

