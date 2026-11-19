import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell, 
  Legend,
  CartesianGrid
} from 'recharts';
import { Organisation } from '../types/fcra';
import { BarChart3, TrendingUp, MapPin, PieChart as PieIcon, ShieldAlert } from 'lucide-react';

interface AnalyticsDashboardProps {
  organisations: Organisation[];
  onSelectState?: (state: string) => void;
}

const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#8b5cf6', '#ec4899', '#06b6d4', '#64748b'];
const STATUS_COLORS: Record<string, string> = {
  'Active': '#10b981',
  'Expired': '#64748b',
  'Cancelled': '#ef4444',
  'Deemed Expired': '#f97316'
};

export const AnalyticsDashboard: React.FC<AnalyticsDashboardProps> = ({ organisations }) => {
  // 1. State Distribution (Top 8)
  const stateCounts: Record<string, number> = {};
  organisations.forEach(o => {
    stateCounts[o.state] = (stateCounts[o.state] || 0) + 1;
  });
  const stateData = Object.entries(stateCounts)
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  // 2. Nature Breakdown
  const natureCounts: Record<string, number> = {};
  organisations.forEach(o => {
    o.nature.forEach(n => {
      natureCounts[n] = (natureCounts[n] || 0) + 1;
    });
  });
  const natureData = Object.entries(natureCounts)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  // 3. Status Breakdown
  const statusCounts: Record<string, number> = {};
  organisations.forEach(o => {
    statusCounts[o.status] = (statusCounts[o.status] || 0) + 1;
  });
  const statusData = Object.entries(statusCounts).map(([name, value]) => ({ name, value }));

  // 4. Inflow by State (in INR Crores)
  const stateInflow: Record<string, number> = {};
  organisations.forEach(o => {
    const latest = o.filingHistory && o.filingHistory[0];
    const amount = latest ? latest.amountReceivedINR : 0;
    stateInflow[o.state] = (stateInflow[o.state] || 0) + amount;
  });
  const inflowData = Object.entries(stateInflow)
    .map(([name, total]) => ({ name, totalCr: Number((total / 10000000).toFixed(2)) }))
    .sort((a, b) => b.totalCr - a.totalCr)
    .slice(0, 6);

  // 5. Expiry Year Distribution
  const expiryYearCounts: Record<string, number> = {};
  organisations.forEach(o => {
    const yr = o.validityExpiryDate.substring(0, 4);
    expiryYearCounts[yr] = (expiryYearCounts[yr] || 0) + 1;
  });
  const expiryData = Object.entries(expiryYearCounts)
    .map(([year, count]) => ({ year, count }))
    .sort((a, b) => a.year.localeCompare(b.year));

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <BarChart3 className="w-5 h-5 text-blue-600" />
            <span>FCRA Public Data Analytics & Trends</span>
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            Real-time aggregate calculations generated completely offline in-browser from IndexedDB records.
          </p>
        </div>
        <div className="flex items-center space-x-2 text-xs bg-slate-50 px-3 py-2 rounded-lg border border-slate-200">
          <span className="text-slate-500">Total Analyzed:</span>
          <strong className="text-slate-900 font-mono">{organisations.length} Organisations</strong>
        </div>
      </div>

      {/* Grid of Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Chart 1: State Distribution */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-blue-600" />
              <span>Top States by Registered NGOs</span>
            </h3>
            <span className="text-[11px] text-slate-400">Indexed Count</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={stateData} margin={{ top: 10, right: 10, left: -20, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 11, fill: '#64748b' }} 
                  angle={-25} 
                  textAnchor="end"
                  interval={0}
                />
                <YAxis tick={{ fontSize: 11, fill: '#64748b' }} allowDecimals={false} />
                <Tooltip 
                  formatter={(val: any) => [`${val} NGOs`, 'Registered Count']}
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                />
                <Bar dataKey="count" fill="#2563eb" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Nature / Sector Breakdown */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center space-x-2">
              <PieIcon className="w-4 h-4 text-emerald-600" />
              <span>Nature of Association / Purpose</span>
            </h3>
            <span className="text-[11px] text-slate-400">Sectoral Share</span>
          </div>
          <div className="h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={natureData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={45}
                  dataKey="value"
                  paddingAngle={3}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {natureData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(val: any) => [`${val} associations`, 'Total']}
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 3: Foreign Inflow by State */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center space-x-2">
              <TrendingUp className="w-4 h-4 text-indigo-600" />
              <span>Foreign Contribution Received by State (₹ Crores)</span>
            </h3>
            <span className="text-[11px] text-slate-400">Latest Annual Filings</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={inflowData} margin={{ top: 10, right: 10, left: -10, bottom: 25 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: 11, fill: '#64748b' }} 
                  angle={-25} 
                  textAnchor="end"
                  interval={0}
                />
                <YAxis tick={{ fontSize: 11, fill: '#64748b' }} unit=" Cr" />
                <Tooltip 
                  formatter={(val: any) => [`₹${val} Cr`, 'Foreign Inflow']}
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                />
                <Bar dataKey="totalCr" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 4: Expiry Year Timeline */}
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-bold text-slate-800 flex items-center space-x-2">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>Certificate Expiry Distribution by Year</span>
            </h3>
            <span className="text-[11px] text-slate-400">Renewal Cycle</span>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={expiryData} margin={{ top: 10, right: 10, left: -20, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="year" tick={{ fontSize: 11, fill: '#64748b' }} />
                <YAxis tick={{ fontSize: 11, fill: '#64748b' }} allowDecimals={false} />
                <Tooltip 
                  formatter={(val: any) => [`${val} certificates`, 'Expiring in Year']}
                  contentStyle={{ backgroundColor: '#0f172a', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                />
                <Bar dataKey="count" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};
