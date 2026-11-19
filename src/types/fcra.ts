export type FCRAStatus = 'Active' | 'Expired' | 'Cancelled' | 'Deemed Expired';

export type FCRANature = 'Cultural' | 'Economic' | 'Educational' | 'Religious' | 'Social';

export interface FC4FilingRecord {
  financialYear: string; // e.g. "2023-24", "2022-23"
  status: 'Filed' | 'Pending' | 'Exempted';
  amountReceivedINR: number; // in INR
  filingDate?: string; // YYYY-MM-DD
  auditorRemarks?: string;
}

export interface FCRABankDetails {
  bankName: string;
  branch: string;
  ifsc: string;
  accountNumberMasked: string;
  isMainSBIAccount: boolean; // Mandated SBI New Delhi Main Branch
}

export interface Organisation {
  id: string; // usually regNumber
  regNumber: string; // e.g. "083780012"
  name: string;
  state: string;
  district: string;
  address: string;
  pinCode: string;
  nature: FCRANature[];
  status: FCRAStatus;
  registrationDate: string; // YYYY-MM-DD
  lastRenewalDate: string; // YYYY-MM-DD
  validityExpiryDate: string; // YYYY-MM-DD
  bankDetails: FCRABankDetails;
  filingHistory: FC4FilingRecord[];
  keyActivities: string[];
  contactEmail?: string;
  contactPhone?: string;
  website?: string;
  isSampleData?: boolean;
  importedAt?: string;
  updatedAt?: string;
}

export interface ComplianceUserNote {
  orgRegNumber: string; // Foreign key to Organisation.regNumber
  isBookmarked: boolean;
  notes: string;
  complianceTags: string[]; // e.g., "Renewal Filed", "Pending 60-day notice", "Verified", "High Risk"
  renewalReminderDate?: string;
  riskRating?: 'Low' | 'Medium' | 'High';
  lastModified: string;
}

export interface FilterOptions {
  searchQuery: string;
  selectedState: string;
  selectedStatus: string;
  selectedNature: string;
  expiryFilter: 'all' | 'expiring_3m' | 'expiring_6m' | 'expired' | 'active';
  bookmarkedOnly: boolean;
  sortBy: 'name' | 'regNumber' | 'expiryDate' | 'state' | 'inflow';
  sortOrder: 'asc' | 'desc';
}

export interface ImportPreviewResult {
  totalRows: number;
  validRows: Organisation[];
  errors: string[];
}
