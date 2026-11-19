import React, { useState, useEffect } from 'react';
import { 
  X, 
  Bookmark, 
  Printer, 
  Download,
  Building2, 
  Landmark, 
  AlertTriangle, 
  CheckCircle2, 
  Calendar, 
  MapPin, 
  Tag, 
  FileText, 
  ExternalLink,
  ShieldAlert,
  Clock,
  Save,
  Globe,
  Mail,
  Phone
} from 'lucide-react';
import { Organisation, ComplianceUserNote } from '../types/fcra';

interface OrgDetailDrawerProps {
  org: Organisation | null;
  onClose: () => void;
  note?: ComplianceUserNote;
  onSaveNote: (regNumber: string, updated: Partial<ComplianceUserNote>) => void;
  onToggleBookmark: (regNumber: string) => void;
}

const availableComplianceTags = [
  'Verified Compliant',
  'Renewal Application Submitted',
  'FC-4 Return Audited',
  'Notice Under Section 14 Issued',
  'SBI Sansad Marg Reconciled',
  'High Priority Watchlist',
  'Exemption Verified'
];

const DEDICATED_REPORTS: Record<string, { filename: string; title: string }> = {
  '214250027': {
    filename: 'Bosco_Reach_Out_FCRA_214250027_Funding_Report.pdf',
    title: 'Download verified 3-page PDF due diligence report for Bosco Reach Out'
  },
  '020780159': {
    filename: 'Balipara_Foundation_FCRA_020780159_Funding_Report.pdf',
    title: 'Download verified 3-page PDF due diligence report for Balipara Foundation'
  },
  '231660618': {
    filename: 'Goonj_FCRA_231660618_Funding_Report.pdf',
    title: 'Download verified 3-page PDF due diligence report for Goonj'
  }
};

export const OrgDetailDrawer: React.FC<OrgDetailDrawerProps> = ({
  org,
  onClose,
  note,
  onSaveNote,
  onToggleBookmark
}) => {
  const [activeTab, setActiveTab] = useState<'details' | 'filings' | 'notes'>('details');
  const [notesContent, setNotesContent] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [riskRating, setRiskRating] = useState<'Low' | 'Medium' | 'High'>('Low');
  const [reminderDate, setReminderDate] = useState('');
  const [saveToast, setSaveToast] = useState(false);

  useEffect(() => {
    if (note) {
      setNotesContent(note.notes || '');
      setSelectedTags(note.complianceTags || []);
      setRiskRating(note.riskRating || 'Low');
      setReminderDate(note.renewalReminderDate || '');
    } else {
      setNotesContent('');
      setSelectedTags([]);
      setRiskRating('Low');
      setReminderDate('');
    }
  }, [note, org]);

  if (!org) return null;

  const now = new Date();
  const expiry = new Date(org.validityExpiryDate);
  const diffDays = Math.ceil((expiry.getTime() - now.getTime()) / (1000 * 3600 * 24));
  const isExpiringSoon = diffDays > 0 && diffDays <= 180;
  const isExpired = diffDays <= 0 || org.status === 'Expired' || org.status === 'Deemed Expired';

  const handleSaveNotes = () => {
    onSaveNote(org.regNumber, {
      notes: notesContent,
      complianceTags: selectedTags,
      riskRating,
      renewalReminderDate: reminderDate,
      lastModified: new Date().toISOString()
    });
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 2000);
  };

  const toggleTag = (tag: string) => {
    const updated = selectedTags.includes(tag)
      ? selectedTags.filter(t => t !== tag)
      : [...selectedTags, tag];
    setSelectedTags(updated);
  };

  const handlePrint = () => {
    window.print();
  };

  const formatCurrency = (amount: number) => {
    if (!amount) return '₹0';
    if (amount >= 10000000) return `₹${(amount / 10000000).toFixed(2)} Cr`;
    return `₹${(amount / 100000).toFixed(2)} Lakhs`;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex justify-end bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Drawer Header */}
        <div className="p-4 sm:p-5 bg-gov-navy text-white flex items-start justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center space-x-2 mb-1.5">
              <span className="font-mono text-xs font-semibold px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 border border-blue-400/30">
                FCRA Reg: {org.regNumber}
              </span>
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                org.status === 'Active' ? 'bg-emerald-500/20 text-emerald-300' : 'bg-rose-500/20 text-rose-300'
              }`}>
                {org.status}
              </span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-white leading-snug">
              {org.name}
            </h2>
            <div className="flex items-center space-x-2 text-xs text-slate-300 mt-1">
              <MapPin className="w-3.5 h-3.5 text-slate-400" />
              <span>{org.district}, {org.state} • PIN: {org.pinCode}</span>
            </div>
          </div>

          <div className="flex items-center space-x-1.5 shrink-0">
            {/* Download Dedicated PDF Due Diligence Report if available */}
            {DEDICATED_REPORTS[org.regNumber] && (
              <a
                href={`/reports/${DEDICATED_REPORTS[org.regNumber].filename}`}
                download={DEDICATED_REPORTS[org.regNumber].filename}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-1 px-2.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs transition-colors"
                title={DEDICATED_REPORTS[org.regNumber].title}
              >
                <Download className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">PDF Report</span>
              </a>
            )}

            {/* Bookmark */}
            <button
              onClick={() => onToggleBookmark(org.regNumber)}
              className={`p-2 rounded-lg border transition-colors ${
                note?.isBookmarked 
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300' 
                  : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700'
              }`}
              title={note?.isBookmarked ? "Bookmarked in Watchlist" : "Bookmark this organization"}
            >
              <Bookmark className={`w-4 h-4 ${note?.isBookmarked ? 'fill-amber-400 text-amber-400' : ''}`} />
            </button>

            {/* Print compliance report */}
            <button
              onClick={handlePrint}
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 transition-colors"
              title="Print Compliance Due Diligence Sheet"
            >
              <Printer className="w-4 h-4" />
            </button>

            {/* Close */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Expiry Alert Warning Banner if < 180 days */}
        {isExpiringSoon && (
          <div className="bg-amber-500/10 border-b border-amber-300/60 px-4 py-2.5 flex items-center space-x-2 text-amber-900 text-xs">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <div>
              <span className="font-semibold">Action Required: </span>
              Registration certificate expires in <strong>{diffDays} days</strong> on <strong>{org.validityExpiryDate}</strong>. MHA requires Form FC-3C renewal submission 6 months prior to expiry.
            </div>
          </div>
        )}

        {isExpired && (
          <div className="bg-rose-50 border-b border-rose-200 px-4 py-2.5 flex items-center space-x-2 text-rose-900 text-xs">
            <ShieldAlert className="w-4 h-4 text-rose-600 shrink-0" />
            <div>
              <span className="font-semibold">Certificate Status Expired / Inactive: </span>
              Receipt of foreign contribution is prohibited under Section 11 of FCRA 2010 until renewal order is issued.
            </div>
          </div>
        )}

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-4 text-xs font-medium text-slate-600">
          <button
            onClick={() => setActiveTab('details')}
            className={`py-3 px-3 border-b-2 transition-all ${
              activeTab === 'details'
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            Organisation Details
          </button>
          <button
            onClick={() => setActiveTab('filings')}
            className={`py-3 px-3 border-b-2 transition-all ${
              activeTab === 'filings'
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            FC-4 Filing History ({org.filingHistory?.length || 0})
          </button>
          <button
            onClick={() => setActiveTab('notes')}
            className={`py-3 px-3 border-b-2 transition-all flex items-center space-x-1 ${
              activeTab === 'notes'
                ? 'border-blue-600 text-blue-600 font-semibold'
                : 'border-transparent hover:text-slate-900'
            }`}
          >
            <span>Local Notes & Audit</span>
            {note?.notes && (
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            )}
          </button>
        </div>

        {/* Tab Contents (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-6">
          {/* TAB 1: DETAILS */}
          {activeTab === 'details' && (
            <div className="space-y-5 text-xs sm:text-sm">
              {/* Validity timeline cards */}
              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-[10px] uppercase font-semibold text-slate-500 mb-1">Registered On</div>
                  <div className="font-mono font-medium text-slate-900">{org.registrationDate}</div>
                </div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="text-[10px] uppercase font-semibold text-slate-500 mb-1">Last Renewed</div>
                  <div className="font-mono font-medium text-slate-900">{org.lastRenewalDate}</div>
                </div>
                <div className={`p-3 rounded-xl border ${
                  isExpiringSoon ? 'bg-amber-50 border-amber-300' : 'bg-slate-50 border-slate-200'
                }`}>
                  <div className="text-[10px] uppercase font-semibold text-slate-500 mb-1">Certificate Expiry</div>
                  <div className={`font-mono font-bold ${isExpiringSoon ? 'text-amber-700' : 'text-slate-900'}`}>
                    {org.validityExpiryDate}
                  </div>
                </div>
              </div>

              {/* Designated SBI Bank Account Section (FCRA Amendment 2020 Requirement) */}
              <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2 text-blue-900 font-semibold text-xs sm:text-sm">
                    <Landmark className="w-4 h-4 text-blue-700" />
                    <span>Mandated Designated FCRA Account</span>
                  </div>
                  {org.bankDetails.isMainSBIAccount && (
                    <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full text-[11px] font-medium bg-emerald-100 text-emerald-800 border border-emerald-300">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>SBI Sansad Marg Verified</span>
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 mt-2">
                  <div>
                    <span className="text-slate-500 block text-[11px]">Designated Bank:</span>
                    <strong className="text-slate-900">{org.bankDetails.bankName}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Branch:</span>
                    <strong className="text-slate-900">{org.bankDetails.branch}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">IFSC Code:</span>
                    <strong className="font-mono text-slate-900">{org.bankDetails.ifsc}</strong>
                  </div>
                  <div>
                    <span className="text-slate-500 block text-[11px]">Masked Account Number:</span>
                    <strong className="font-mono text-slate-900">{org.bankDetails.accountNumberMasked}</strong>
                  </div>
                </div>
              </div>

              {/* Nature / Purposes */}
              <div>
                <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-2">
                  Nature of Association
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {org.nature.map(nat => (
                    <span
                      key={nat}
                      className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200"
                    >
                      {nat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Activities */}
              <div>
                <h4 className="font-semibold text-slate-800 text-xs uppercase tracking-wider mb-2">
                  Key Mandate & Activities
                </h4>
                <ul className="space-y-1 text-slate-700 text-xs list-disc list-inside bg-slate-50 p-3 rounded-xl border border-slate-200">
                  {org.keyActivities.map((act, i) => (
                    <li key={i} className="leading-relaxed">{act}</li>
                  ))}
                </ul>
              </div>

              {/* Registered Address & Contacts */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs text-slate-700">
                <h4 className="font-semibold text-slate-800 uppercase tracking-wider text-[11px]">
                  Registered Office Address
                </h4>
                <p className="text-slate-800 leading-relaxed">{org.address}</p>
                <p className="text-slate-600">{org.district}, {org.state} — PIN {org.pinCode}</p>

                <div className="pt-2 border-t border-slate-200 flex flex-wrap gap-4 text-xs">
                  {org.contactEmail && (
                    <div className="flex items-center space-x-1.5 text-blue-600">
                      <Mail className="w-3.5 h-3.5" />
                      <a href={`mailto:${org.contactEmail}`} className="hover:underline">{org.contactEmail}</a>
                    </div>
                  )}
                  {org.contactPhone && (
                    <div className="flex items-center space-x-1.5 text-slate-700">
                      <Phone className="w-3.5 h-3.5" />
                      <span>{org.contactPhone}</span>
                    </div>
                  )}
                  {org.website && (
                    <div className="flex items-center space-x-1.5 text-blue-600">
                      <Globe className="w-3.5 h-3.5" />
                      <a href={org.website} target="_blank" rel="noreferrer" className="hover:underline flex items-center space-x-0.5">
                        <span>{org.website.replace('https://', '')}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: FC-4 FILING HISTORY */}
          {activeTab === 'filings' && (
            <div className="space-y-4">
              <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 text-xs text-slate-600">
                Under FCRA rules, every registered organisation must submit Annual Return (Form FC-4) online within 9 months of the close of financial year (by Dec 31).
              </div>

              <div className="space-y-3">
                {org.filingHistory && org.filingHistory.length > 0 ? (
                  org.filingHistory.map((filing, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl border border-slate-200 bg-white hover:border-blue-300 transition-colors"
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="font-bold text-slate-800 text-xs sm:text-sm">
                          Financial Year {filing.financialYear}
                        </span>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                          filing.status === 'Filed' 
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                            : 'bg-rose-50 text-rose-700 border border-rose-200'
                        }`}>
                          {filing.status}
                        </span>
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-600 mt-2">
                        <span>Foreign Contribution Inflow:</span>
                        <strong className="font-mono text-slate-900 text-sm">
                          {formatCurrency(filing.amountReceivedINR)}
                        </strong>
                      </div>

                      {filing.filingDate && (
                        <div className="text-[11px] text-slate-500 mt-1">
                          Filed on: <span className="font-mono">{filing.filingDate}</span>
                        </div>
                      )}

                      {filing.auditorRemarks && (
                        <div className="mt-2 text-[11px] text-slate-600 bg-slate-50 p-2 rounded border border-slate-200 italic">
                          "{filing.auditorRemarks}"
                        </div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="text-center py-8 text-xs text-slate-500">
                    No FC-4 filing records documented in the local database for this organisation.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 3: LOCAL NOTES & DUE DILIGENCE AUDIT */}
          {activeTab === 'notes' && (
            <div className="space-y-4">
              <div className="bg-amber-50/60 p-3 rounded-lg border border-amber-200 text-xs text-amber-900">
                Private notes and audit flags are stored locally in your browser's IndexedDB. They are never sent to any external server.
              </div>

              {/* Risk Rating */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Internal Risk Rating
                </label>
                <div className="flex space-x-2">
                  {(['Low', 'Medium', 'High'] as const).map(rate => (
                    <button
                      key={rate}
                      type="button"
                      onClick={() => setRiskRating(rate)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                        riskRating === rate
                          ? rate === 'Low'
                            ? 'bg-emerald-100 text-emerald-800 border-emerald-400 font-semibold'
                            : rate === 'Medium'
                            ? 'bg-amber-100 text-amber-800 border-amber-400 font-semibold'
                            : 'bg-rose-100 text-rose-800 border-rose-400 font-semibold'
                          : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      {rate} Risk
                    </button>
                  ))}
                </div>
              </div>

              {/* Renewal Reminder Date */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Renewal Due Diligence Reminder
                </label>
                <input
                  type="date"
                  value={reminderDate}
                  onChange={(e) => setReminderDate(e.target.value)}
                  className="py-1.5 px-3 text-xs bg-slate-50 border border-slate-300 rounded-lg text-slate-800 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>

              {/* Compliance Tags */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Compliance & Audit Tags
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {availableComplianceTags.map(tag => {
                    const isSelected = selectedTags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        onClick={() => toggleTag(tag)}
                        className={`text-xs px-2.5 py-1 rounded-full border transition-colors ${
                          isSelected
                            ? 'bg-blue-100 text-blue-800 border-blue-400 font-medium'
                            : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}{tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Freeform Notes */}
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Due Diligence Notes & Case Diary
                </label>
                <textarea
                  value={notesContent}
                  onChange={(e) => setNotesContent(e.target.value)}
                  rows={5}
                  placeholder="Record findings, meeting minutes, Form 10BD reconciliation notes, or bank certificate status..."
                  className="w-full p-3 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 text-slate-900 placeholder-slate-400 font-sans"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-slate-500">
                  {note?.lastModified ? `Last saved: ${new Date(note.lastModified).toLocaleDateString()}` : 'Not yet saved'}
                </span>

                <button
                  onClick={handleSaveNotes}
                  className="flex items-center space-x-1.5 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Save Notes to Local DB</span>
                </button>
              </div>

              {saveToast && (
                <div className="p-2 rounded bg-emerald-100 text-emerald-800 text-xs text-center border border-emerald-300 animate-in fade-in">
                  ✓ Notes and compliance tags saved locally!
                </div>
              )}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-3 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <span>Data source: Local IndexedDB database</span>
          <button
            onClick={onClose}
            className="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
