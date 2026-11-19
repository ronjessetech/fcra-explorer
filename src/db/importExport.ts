import Papa from 'papaparse';
import { db } from './database';
import { sampleOrganisations } from './seedData';
import { Organisation, ComplianceUserNote, ImportPreviewResult, FCRAStatus, FCRANature } from '../types/fcra';

export async function initializeDatabaseIfEmpty(): Promise<boolean> {
  const count = await db.organisations.count();
  // Check if we need to migrate to ensure complete list of Assam and all North East states are loaded
  const hasOldMockData = await db.organisations.get("083780012");
  const hasAaranyak = await db.organisations.get("020780080");
  const hasMeghalaya = await db.organisations.get("214250065");
  const hasKohimaOrphanage = await db.organisations.get("164730028");
  const hasSSCShillong = await db.organisations.get("214530005");
  
  if (count === 0 || hasOldMockData || !hasAaranyak || !hasMeghalaya || !hasKohimaOrphanage || !hasSSCShillong) {
    await db.transaction('rw', db.organisations, db.complianceNotes, async () => {
      await db.organisations.clear();
      await db.organisations.bulkPut(sampleOrganisations);
      await db.complianceNotes.bulkPut([
        {
          orgRegNumber: "020780080",
          isBookmarked: true,
          notes: "Assam Wildlife Due Diligence: Aaranyak verified. Leading biodiversity research in Kaziranga & Manas. SBI Sansad Marg designated account confirmed.",
          complianceTags: ["Verified Compliant", "SBI Sansad Marg Reconciled", "FC-4 Return Audited"],
          riskRating: "Low",
          renewalReminderDate: "2026-04-01",
          lastModified: new Date().toISOString()
        },
        {
          orgRegNumber: "020780030",
          isBookmarked: true,
          notes: "Assam Disability Rehabilitation: Shishu Sarothi verified. Form FC-4 filed on time. Excellent governance and audit track record.",
          complianceTags: ["Verified Compliant", "FC-4 Return Audited"],
          riskRating: "Low",
          renewalReminderDate: "2026-09-01",
          lastModified: new Date().toISOString()
        },
        {
          orgRegNumber: "214250065",
          isBookmarked: true,
          notes: "Meghalaya Due Diligence: Bethany Society verified. Landmark inclusive education and disability empowerment across Shillong & Garo Hills. SBI NDMB account active.",
          complianceTags: ["Verified Compliant", "SBI Sansad Marg Reconciled", "FC-4 Return Audited"],
          riskRating: "Low",
          renewalReminderDate: "2026-05-01",
          lastModified: new Date().toISOString()
        },
        {
          orgRegNumber: "164730024",
          isBookmarked: true,
          notes: "Nagaland Social Action: Development Association of Nagaland (DAN) verified. Regional community development, livelihoods, and youth skilling across Dimapur and Kohima.",
          complianceTags: ["Verified Compliant", "FC-4 Return Audited"],
          riskRating: "Low",
          renewalReminderDate: "2026-06-01",
          lastModified: new Date().toISOString()
        },
        {
          orgRegNumber: "083780207",
          isBookmarked: true,
          notes: "Due diligence complete. SBI Sansad Marg account verified. FC-4 filed on time with zero adverse audit remarks. Dedicated to child rights.",
          complianceTags: ["Verified Compliant", "SBI Sansad Marg Reconciled", "FC-4 Return Audited"],
          riskRating: "Low",
          renewalReminderDate: "2026-05-01",
          lastModified: new Date().toISOString()
        },
        {
          orgRegNumber: "231650007R",
          isBookmarked: true,
          notes: "REGULATORY NOTICE: Registration cancelled by MHA under Section 14 in January 2024. All foreign contribution receipts barred.",
          complianceTags: ["Notice Under Section 14 Issued", "High Priority Watchlist"],
          riskRating: "High",
          lastModified: new Date().toISOString()
        },
        {
          orgRegNumber: "231661066",
          isBookmarked: true,
          notes: "RENEWAL ALERT: Validity expiring soon on 2025-04-14. Form FC-3C renewal submission required at least 6 months prior to expiry.",
          complianceTags: ["Renewal Application Submitted"],
          riskRating: "Medium",
          renewalReminderDate: "2024-10-15",
          lastModified: new Date().toISOString()
        }
      ]);
    });
    return true;
  }
  return false;
}

export async function resetToSampleData(): Promise<void> {
  await db.transaction('rw', db.organisations, db.complianceNotes, async () => {
    await db.organisations.clear();
    await db.complianceNotes.clear();
    await db.organisations.bulkPut(sampleOrganisations);
    await db.complianceNotes.bulkPut([
      {
        orgRegNumber: "020780080",
        isBookmarked: true,
        notes: "Assam Wildlife Due Diligence: Aaranyak verified. Leading biodiversity research in Kaziranga & Manas. SBI Sansad Marg designated account confirmed.",
        complianceTags: ["Verified Compliant", "SBI Sansad Marg Reconciled", "FC-4 Return Audited"],
        riskRating: "Low",
        renewalReminderDate: "2026-04-01",
        lastModified: new Date().toISOString()
      },
      {
        orgRegNumber: "020780030",
        isBookmarked: true,
        notes: "Assam Disability Rehabilitation: Shishu Sarothi verified. Form FC-4 filed on time. Excellent governance and audit track record.",
        complianceTags: ["Verified Compliant", "FC-4 Return Audited"],
        riskRating: "Low",
        renewalReminderDate: "2026-09-01",
        lastModified: new Date().toISOString()
      },
      {
        orgRegNumber: "083780207",
        isBookmarked: true,
        notes: "Due diligence complete. SBI Sansad Marg account verified. FC-4 filed on time with zero adverse audit remarks. Dedicated to child rights.",
        complianceTags: ["Verified Compliant", "SBI Sansad Marg Reconciled", "FC-4 Return Audited"],
        riskRating: "Low",
        renewalReminderDate: "2026-05-01",
        lastModified: new Date().toISOString()
      },
      {
        orgRegNumber: "231650007R",
        isBookmarked: true,
        notes: "REGULATORY NOTICE: Registration cancelled by MHA under Section 14 in January 2024. All foreign contribution receipts barred.",
        complianceTags: ["Notice Under Section 14 Issued", "High Priority Watchlist"],
        riskRating: "High",
        lastModified: new Date().toISOString()
      },
      {
        orgRegNumber: "231661066",
        isBookmarked: true,
        notes: "RENEWAL ALERT: Validity expiring soon on 2025-04-14. Form FC-3C renewal submission required at least 6 months prior to expiry.",
        complianceTags: ["Renewal Application Submitted"],
        riskRating: "Medium",
        renewalReminderDate: "2024-10-15",
        lastModified: new Date().toISOString()
      }
    ]);
  });
}

export function parseCSVFile(fileContent: string): ImportPreviewResult {
  const parsed = Papa.parse<Record<string, string>>(fileContent, {
    header: true,
    skipEmptyLines: true,
    transformHeader: (h) => h.trim().toLowerCase().replace(/[^a-z0-9]/g, '')
  });

  const validRows: Organisation[] = [];
  const errors: string[] = [];

  parsed.data.forEach((row, idx) => {
    const rowNum = idx + 2; // header is row 1
    // flexible header lookup matching MHA, Dataful, and standard CSV exports
    const regNo = row['regnumber'] || row['registrationnumber'] || row['registrationno'] || row['fcrano'] || row['fcrano.'] || row['fcracertificateno'] || row['regno'] || row['id'];
    const name = row['name'] || row['nameofassociation'] || row['associationname'] || row['organisationname'] || row['association'] || row['ngo'] || row['ngoname'];
    const state = row['state'] || row['stateut'] || row['statename'] || 'Unknown';
    const district = row['district'] || row['districtname'] || row['city'] || row['cityname'] || 'Unknown';
    const address = row['address'] || row['registeredaddress'] || row['officeaddress'] || row['postaladdress'] || `${district}, ${state}`;
    const pinCode = row['pincode'] || row['pin'] || row['postalcode'] || '000000';

    if (!regNo || !regNo.trim()) {
      errors.push(`Row ${rowNum}: Missing Registration Number`);
      return;
    }
    if (!name || !name.trim()) {
      errors.push(`Row ${rowNum}: Missing Organisation Name`);
      return;
    }

    // Normalizing status
    const rawStatus = (row['status'] || 'Active').trim();
    let status: FCRAStatus = 'Active';
    if (/cancel/i.test(rawStatus)) status = 'Cancelled';
    else if (/deem/i.test(rawStatus)) status = 'Deemed Expired';
    else if (/expir/i.test(rawStatus)) status = 'Expired';
    else status = 'Active';

    // Nature parsing
    const rawNature = row['nature'] || row['natureofassociation'] || row['natureofactivity'] || row['natureofactivities'] || 'Social';
    const natureList: FCRANature[] = [];
    const validNatures: FCRANature[] = ['Cultural', 'Economic', 'Educational', 'Religious', 'Social'];
    validNatures.forEach(n => {
      if (rawNature.toLowerCase().includes(n.toLowerCase())) {
        natureList.push(n);
      }
    });
    if (natureList.length === 0) natureList.push('Social');

    const regDate = row['registrationdate'] || row['regdate'] || '2015-01-01';
    const renewalDate = row['lastrenewaldate'] || row['renewaldate'] || '2020-01-01';
    const expiryDate = row['validityexpirydate'] || row['validity'] || row['validupto'] || row['validtill'] || row['expirydate'] || '2025-12-31';

    const bankName = row['bankname'] || 'State Bank of India';
    const bankBranch = row['bankbranch'] || 'New Delhi Main Branch, 11 Sansad Marg';
    const ifsc = row['ifsc'] || 'SBIN0000691';
    const accountMasked = row['accountmasked'] || row['accountnumber'] || '4099XXXX1234';

    const keyActivitiesStr = row['keyactivities'] || row['activities'] || row['purposes'] || '';
    const keyActivities = keyActivitiesStr ? keyActivitiesStr.split(';').map(s => s.trim()).filter(Boolean) : ['Community Development'];

    // Optional inflow amount
    const inflow = parseFloat(row['inflow'] || row['latestinflow'] || row['amount'] || '0') || 0;

    const org: Organisation = {
      id: regNo.trim(),
      regNumber: regNo.trim(),
      name: name.trim(),
      state: state.trim(),
      district: district.trim(),
      address: address.trim(),
      pinCode: pinCode.trim(),
      nature: natureList,
      status,
      registrationDate: regDate.trim(),
      lastRenewalDate: renewalDate.trim(),
      validityExpiryDate: expiryDate.trim(),
      bankDetails: {
        bankName,
        branch: bankBranch,
        ifsc,
        accountNumberMasked: accountMasked,
        isMainSBIAccount: bankBranch.toLowerCase().includes('sansad') || bankBranch.toLowerCase().includes('main branch')
      },
      filingHistory: [
        {
          financialYear: '2023-24',
          status: status === 'Active' ? 'Filed' : 'Pending',
          amountReceivedINR: inflow,
          filingDate: status === 'Active' ? '2024-11-15' : undefined,
          auditorRemarks: status === 'Active' ? 'Imported from local data file' : 'Pending or non-compliant'
        }
      ],
      keyActivities,
      contactEmail: row['email'] || undefined,
      contactPhone: row['phone'] || undefined,
      website: row['website'] || undefined,
      isSampleData: false,
      importedAt: new Date().toISOString()
    };

    validRows.push(org);
  });

  return {
    totalRows: parsed.data.length,
    validRows,
    errors
  };
}

export function parseJSONFile(jsonContent: string): ImportPreviewResult {
  try {
    const data = JSON.parse(jsonContent);
    const rows = Array.isArray(data) ? data : (data.organisations || []);
    const validRows: Organisation[] = [];
    const errors: string[] = [];

    rows.forEach((item: any, idx: number) => {
      if (!item.regNumber && !item.id) {
        errors.push(`Item ${idx + 1}: Missing regNumber`);
        return;
      }
      if (!item.name) {
        errors.push(`Item ${idx + 1}: Missing name`);
        return;
      }

      const org: Organisation = {
        id: (item.regNumber || item.id).toString(),
        regNumber: (item.regNumber || item.id).toString(),
        name: item.name,
        state: item.state || 'Unknown',
        district: item.district || 'Unknown',
        address: item.address || '',
        pinCode: item.pinCode || '000000',
        nature: Array.isArray(item.nature) ? item.nature : ['Social'],
        status: item.status || 'Active',
        registrationDate: item.registrationDate || '2015-01-01',
        lastRenewalDate: item.lastRenewalDate || '2020-01-01',
        validityExpiryDate: item.validityExpiryDate || '2025-12-31',
        bankDetails: item.bankDetails || {
          bankName: 'State Bank of India',
          branch: 'New Delhi Main Branch, 11 Sansad Marg',
          ifsc: 'SBIN0000691',
          accountNumberMasked: '4088XXXX9911',
          isMainSBIAccount: true
        },
        filingHistory: Array.isArray(item.filingHistory) ? item.filingHistory : [],
        keyActivities: Array.isArray(item.keyActivities) ? item.keyActivities : [],
        contactEmail: item.contactEmail,
        contactPhone: item.contactPhone,
        website: item.website,
        isSampleData: false,
        importedAt: new Date().toISOString()
      };
      validRows.push(org);
    });

    return {
      totalRows: rows.length,
      validRows,
      errors
    };
  } catch (err: any) {
    return {
      totalRows: 0,
      validRows: [],
      errors: [`Invalid JSON file format: ${err.message}`]
    };
  }
}

export async function importOrganisations(
  orgs: Organisation[],
  mode: 'append' | 'replace'
): Promise<number> {
  if (mode === 'replace') {
    await db.organisations.clear();
  }
  await db.organisations.bulkPut(orgs);
  return orgs.length;
}

export async function exportFilteredToCSV(orgs: Organisation[], filename = 'fcra_organisations_export.csv'): Promise<void> {
  const exportRows = orgs.map(org => {
    const latestFiling = org.filingHistory && org.filingHistory.length > 0 ? org.filingHistory[0] : null;
    return {
      'FCRA Reg Number': org.regNumber,
      'Organisation Name': org.name,
      'Status': org.status,
      'State': org.state,
      'District': org.district,
      'Address': org.address,
      'Pin Code': org.pinCode,
      'Nature of Association': org.nature.join('; '),
      'Registration Date': org.registrationDate,
      'Last Renewal Date': org.lastRenewalDate,
      'Validity Expiry Date': org.validityExpiryDate,
      'Designated Bank': org.bankDetails.bankName,
      'Bank Branch': org.bankDetails.branch,
      'IFSC Code': org.bankDetails.ifsc,
      'Latest FY Inflow (INR)': latestFiling ? latestFiling.amountReceivedINR : 0,
      'Latest Filing Status': latestFiling ? latestFiling.status : 'N/A',
      'Key Activities': org.keyActivities.join('; '),
      'Email': org.contactEmail || '',
      'Phone': org.contactPhone || '',
      'Website': org.website || ''
    };
  });

  const csv = Papa.unparse(exportRows);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function createFullDatabaseBackup(): Promise<void> {
  const organisations = await db.organisations.toArray();
  const complianceNotes = await db.complianceNotes.toArray();

  const backupData = {
    metadata: {
      appName: 'FCRA Explorer & Compliance Tracker',
      version: '1.0.0',
      exportedAt: new Date().toISOString(),
      totalOrganisations: organisations.length,
      totalNotes: complianceNotes.length
    },
    organisations,
    complianceNotes
  };

  const jsonStr = JSON.stringify(backupData, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const dateStr = new Date().toISOString().split('T')[0];
  link.setAttribute('href', url);
  link.setAttribute('download', `fcra_full_backup_${dateStr}.json`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function restoreFullDatabaseBackup(jsonContent: string): Promise<{ orgCount: number, notesCount: number }> {
  const data = JSON.parse(jsonContent);
  if (!data.organisations || !Array.isArray(data.organisations)) {
    throw new Error('Invalid backup file: missing organisations array');
  }

  const organisations: Organisation[] = data.organisations;
  const complianceNotes: ComplianceUserNote[] = Array.isArray(data.complianceNotes) ? data.complianceNotes : [];

  await db.transaction('rw', db.organisations, db.complianceNotes, async () => {
    await db.organisations.clear();
    await db.complianceNotes.clear();
    await db.organisations.bulkPut(organisations);
    if (complianceNotes.length > 0) {
      await db.complianceNotes.bulkPut(complianceNotes);
    }
  });

  return { orgCount: organisations.length, notesCount: complianceNotes.length };
}

export function downloadSampleCSVTemplate(): void {
  const sampleData = [
    {
      'regNumber': '083780207',
      'name': 'Child Rights and You (CRY)',
      'status': 'Active',
      'state': 'Maharashtra',
      'district': 'Mumbai City',
      'address': '189/A Anand Estate, Sane Guruji Marg, Mahalaxmi',
      'pinCode': '400011',
      'nature': 'Social; Educational',
      'registrationDate': '1985-04-12',
      'lastRenewalDate': '2021-11-20',
      'validityExpiryDate': '2026-11-19',
      'bankName': 'State Bank of India',
      'bankBranch': 'New Delhi Main Branch, 11 Sansad Marg',
      'ifsc': 'SBIN0000691',
      'accountMasked': '4009XXXX1207',
      'inflow': '198500000',
      'keyActivities': 'Child Rights Advocacy; Malnutrition Eradication; Girl Child Education',
      'email': 'cryinfo.mum@crymail.org',
      'phone': '+91-22-23063607',
      'website': 'https://www.cry.org'
    }
  ];

  const csv = Papa.unparse(sampleData);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('download', 'fcra_import_sample_template.csv');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function downloadNorthEastCSV(): void {
  const neStates = ['Assam', 'Meghalaya', 'Manipur', 'Nagaland', 'Mizoram', 'Tripura', 'Arunachal Pradesh', 'Sikkim'];
  const neOrgs = sampleOrganisations.filter(o => neStates.includes(o.state));
  const exportRows = neOrgs.map(o => ({
    'regNumber': o.regNumber,
    'name': o.name,
    'status': o.status,
    'state': o.state,
    'district': o.district,
    'address': o.address,
    'pinCode': o.pinCode,
    'nature': o.nature.join('; '),
    'registrationDate': o.registrationDate,
    'lastRenewalDate': o.lastRenewalDate,
    'validityExpiryDate': o.validityExpiryDate,
    'bankName': o.bankDetails.bankName,
    'bankBranch': o.bankDetails.branch,
    'ifsc': o.bankDetails.ifsc,
    'accountMasked': o.bankDetails.accountNumberMasked,
    'inflow': o.filingHistory[0]?.amountReceivedINR || 0,
    'keyActivities': o.keyActivities.join('; '),
    'email': o.contactEmail || '',
    'phone': o.contactPhone || '',
    'website': o.website || ''
  }));

  const csv = Papa.unparse(exportRows);
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  const dateStr = new Date().toISOString().split('T')[0];
  link.setAttribute('href', url);
  link.setAttribute('download', `fcra_verified_northeast_dataset_${dateStr}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export async function reloadVerifiedNorthEastDataset(): Promise<number> {
  await db.organisations.bulkPut(sampleOrganisations);
  return sampleOrganisations.length;
}
