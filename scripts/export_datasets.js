import fs from 'fs';
import path from 'path';
import Papa from 'papaparse';
import { sampleOrganisations } from '../src/db/seedData.ts';

const neStates = ['Assam', 'Meghalaya', 'Manipur', 'Nagaland', 'Mizoram', 'Tripura', 'Arunachal Pradesh', 'Sikkim'];
const neOrgs = sampleOrganisations.filter(o => neStates.includes(o.state));

const outDir = path.resolve('public/data');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Write JSON
fs.writeFileSync(
  path.join(outDir, 'northeast_fcra_master.json'),
  JSON.stringify(neOrgs, null, 2),
  'utf8'
);

// Write CSV
const csvRows = neOrgs.map(o => ({
  regNumber: o.regNumber,
  name: o.name,
  status: o.status,
  state: o.state,
  district: o.district,
  address: o.address,
  pinCode: o.pinCode,
  nature: o.nature.join('; '),
  registrationDate: o.registrationDate,
  lastRenewalDate: o.lastRenewalDate,
  validityExpiryDate: o.validityExpiryDate,
  bankName: o.bankDetails.bankName,
  bankBranch: o.bankDetails.branch,
  ifsc: o.bankDetails.ifsc,
  accountMasked: o.bankDetails.accountNumberMasked,
  inflow: o.filingHistory[0]?.amountReceivedINR || 0,
  keyActivities: o.keyActivities.join('; '),
  email: o.contactEmail || '',
  phone: o.contactPhone || '',
  website: o.website || ''
}));

fs.writeFileSync(
  path.join(outDir, 'northeast_fcra_master.csv'),
  Papa.unparse(csvRows),
  'utf8'
);

console.log(`Generated Master North East Datasets: ${neOrgs.length} records written to public/data/`);
