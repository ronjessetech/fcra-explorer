import Dexie, { type Table } from 'dexie';
import { Organisation, ComplianceUserNote } from '../types/fcra';

export class FCRADatabase extends Dexie {
  organisations!: Table<Organisation, string>;
  complianceNotes!: Table<ComplianceUserNote, string>;

  constructor() {
    super('FCRAExplorerDB');
    this.version(1).stores({
      organisations: 'regNumber, name, state, district, status, validityExpiryDate, lastRenewalDate, *nature',
      complianceNotes: 'orgRegNumber, isBookmarked, riskRating, lastModified'
    });
  }
}

export const db = new FCRADatabase();

export async function getDBStats() {
  const totalOrgs = await db.organisations.count();
  const totalNotes = await db.complianceNotes.count();
  const bookmarkedCount = await db.complianceNotes.where('isBookmarked').equals(1 as any).or('isBookmarked').equals(true as any).count();
  return { totalOrgs, totalNotes, bookmarkedCount };
}
