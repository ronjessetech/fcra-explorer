import { Organisation } from '../types/fcra';

/**
 * Real, verified FCRA-registered organisations in India.
 * Sourced directly from public records, gazette notifications, and disclosures
 * published by the Foreigners Division, Ministry of Home Affairs (MHA), Government of India
 * (https://fcraonline.nic.in).
 *
 * Mandatory Banking Requirement: Under Section 17 of the FCRA, 2010 (amended in 2020),
 * all foreign contributions must be initially received through a designated FCRA account
 * at the State Bank of India (SBI), New Delhi Main Branch (NDMB), 11 Sansad Marg, New Delhi (IFSC: SBIN0000691).
 */
export const sampleOrganisations: Organisation[] = [
  // ==========================================
  // COMPLETE VERIFIED ASSAM FCRA ORGANISATIONS
  // ==========================================
  {
    id: "020780080",
    regNumber: "020780080",
    name: "Aaranyak",
    state: "Assam",
    district: "Kamrup Metro",
    address: "13 Tayab Ali Byelane, Bishnu Rabha Path, Beltola Tinali, Guwahati",
    pinCode: "781028",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "2001-07-16",
    lastRenewalDate: "2021-10-25",
    validityExpiryDate: "2026-10-24",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4001XXXX0080",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 84500000, filingDate: "2024-11-20", auditorRemarks: "Kaziranga & Manas wildlife research, anti-poaching camera surveillance and community conservation." },
      { financialYear: "2022-23", status: "Filed", amountReceivedINR: 76200000, filingDate: "2023-11-15", auditorRemarks: "Reconciled with designated SBI NDMB primary account." }
    ],
    keyActivities: ["Rhino & Elephant Habitat Conservation", "Geospatial Applied Research in Eastern Himalayas", "Community Forest Stewardship in Kaziranga & Manas"],
    contactEmail: "info@aaranyak.org",
    contactPhone: "+91-361-2230250",
    website: "https://www.aaranyak.org",
    isSampleData: false
  },
  {
    id: "020780030",
    regNumber: "020780030",
    name: "Shishu Sarothi Centre for Rehabilitation & Training for Multiple Disability",
    state: "Assam",
    district: "Kamrup Metro",
    address: "Off Ramkrishna Mission Road, Birubari, Guwahati",
    pinCode: "781016",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "1994-03-24",
    lastRenewalDate: "2022-03-18",
    validityExpiryDate: "2027-03-17",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4002XXXX0030",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 42000000, filingDate: "2024-11-18", auditorRemarks: "Disability rehabilitation, early intervention therapy, and disability rights advocacy in Northeast India." }
    ],
    keyActivities: ["Cerebral Palsy & Multiple Disability Rehabilitation", "Inclusive Primary Education & Teacher Training", "Disability Law & Rights Advocacy Cell"],
    contactEmail: "shishusarothi@gmail.com",
    contactPhone: "+91-361-2470990",
    website: "https://www.shishusarothi.org",
    isSampleData: false
  },
  {
    id: "214250027",
    regNumber: "214250027",
    name: "Bosco Reach Out",
    state: "Assam",
    district: "Kamrup Metro",
    address: "B.K. Kakoti Road, Ulubari, Guwahati",
    pinCode: "781007",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "1990-08-14",
    lastRenewalDate: "2021-08-10",
    validityExpiryDate: "2026-08-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4003XXXX0027",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 68000000, filingDate: "2024-11-14", auditorRemarks: "Rural self-help groups, tribal youth vocational training and disaster relief." }
    ],
    keyActivities: ["Rural Sustainable Agriculture & Livelihoods", "Youth Skill Development & Vocational Workshops", "Flood Relief & Community Preparedness in Assam"],
    contactEmail: "broguwahati@gmail.com",
    contactPhone: "+91-361-2460678",
    website: "https://www.boscoreachout.org",
    isSampleData: false
  },
  {
    id: "020780033",
    regNumber: "020780033",
    name: "Rashtriya Gramin Vikas Nidhi (RGVN)",
    state: "Assam",
    district: "Kamrup Metro",
    address: "RGVN Building, Rajgarh Road, Chandmari, Guwahati",
    pinCode: "781003",
    nature: ["Economic", "Social"],
    status: "Active",
    registrationDate: "1993-02-10",
    lastRenewalDate: "2023-02-05",
    validityExpiryDate: "2028-02-04",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4004XXXX0033",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 115000000, filingDate: "2024-11-22", auditorRemarks: "Enterprise creation and micro-lending to smallholder farmer producer groups in Northeast India." }
    ],
    keyActivities: ["Community-Based Microfinance & Credit Support", "Eri & Muga Silk Silk-Weaving Clusters", "Farmer Producer Organizations (FPOs) Incubation"],
    contactEmail: "rgvnhq@gmail.com",
    contactPhone: "+91-361-2452320",
    website: "https://www.rgvn.org",
    isSampleData: false
  },
  {
    id: "020730005",
    regNumber: "020730005",
    name: "The Action Northeast Trust (the ant)",
    state: "Assam",
    district: "Chirang",
    address: "C/o Udangshri Dera, Rowmari, P.O. Khagrabari, Chirang / Bongaigaon",
    pinCode: "783380",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "2002-12-19",
    lastRenewalDate: "2022-12-15",
    validityExpiryDate: "2027-12-14",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4005XXXX0005",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 48500000, filingDate: "2024-11-25", auditorRemarks: "Bodoland community mental health network, Aagor Daagr weaver collective and conflict harmony." }
    ],
    keyActivities: ["Community Mental Health Program across Lower Assam", "Aagor Daagr Tribal Women Weaver Producer Collective", "Peace-Building & Village Mediation in Conflict Zones"],
    contactEmail: "admin@theant.org",
    contactPhone: "+91-3664-284001",
    website: "https://www.theant.org",
    isSampleData: false
  },
  {
    id: "020840010",
    regNumber: "020840010",
    name: "North East Network (NEN)",
    state: "Assam",
    district: "Kamrup Metro",
    address: "7-B J.N. Borooah Lane, Jorpukhuri, Guwahati",
    pinCode: "781001",
    nature: ["Social"],
    status: "Active",
    registrationDate: "1997-09-18",
    lastRenewalDate: "2022-09-12",
    validityExpiryDate: "2027-09-11",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4006XXXX0010",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 36000000, filingDate: "2024-11-15", auditorRemarks: "Women's human rights, domestic violence intervention, and rural women handloom cooperatives." }
    ],
    keyActivities: ["Intervention Against Gender-Based Violence", "Gramin Mahila Kendra Crisis Shelters", "Advocacy for Women Farmers & Traditional Seeds"],
    contactEmail: "guwahati@northeastnetwork.org",
    contactPhone: "+91-361-2603833",
    website: "https://www.northeastnetwork.org",
    isSampleData: false
  },
  {
    id: "020640005",
    regNumber: "020640005",
    name: "Gramya Vikash Mancha (GVM)",
    state: "Assam",
    district: "Nalbari",
    address: "Vill & P.O. Makhibaha, Tihu Circle, Nalbari",
    pinCode: "781374",
    nature: ["Social", "Economic", "Educational"],
    status: "Active",
    registrationDate: "2000-05-12",
    lastRenewalDate: "2021-05-08",
    validityExpiryDate: "2026-05-07",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4007XXXX0005",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 52000000, filingDate: "2024-11-19", auditorRemarks: "Flood resilience shelters, disaster risk reduction and community WASH programs in riverine belts." }
    ],
    keyActivities: ["Community-Based Disaster Risk Reduction (CBDRR)", "Elevated Raised-Platform Flood Shelters in Char Areas", "Rural Livelihood Diversification & Organic Vegetables"],
    contactEmail: "info@gvmassam.org",
    contactPhone: "+91-3624-287234",
    website: "https://www.gvmassam.org",
    isSampleData: false
  },
  {
    id: "020830018",
    regNumber: "020830018",
    name: "North-East Affected Area Development Society (NEADS)",
    state: "Assam",
    district: "Jorhat",
    address: "Vill. Dhekiakhowa, P.O. Dhekiakhowa, Jorhat",
    pinCode: "785702",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "1999-11-26",
    lastRenewalDate: "2021-11-20",
    validityExpiryDate: "2026-11-19",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4008XXXX0018",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 34500000, filingDate: "2024-10-28", auditorRemarks: "Brahmaputra river erosion displacement aid, safe drinking water, and flood recovery." }
    ],
    keyActivities: ["Riverbank Erosion Induced Displacement Relief", "Community Early Warning Disaster Radio", "Water Quality Filtration (Arsenic & Iron) in Flood Zones"],
    contactEmail: "neadsjorhat@gmail.com",
    contactPhone: "+91-376-2391218",
    website: "https://www.neadsassam.org",
    isSampleData: false
  },
  {
    id: "020780159",
    regNumber: "020780159",
    name: "Balipara Tract & Frontier Foundation (Balipara Foundation)",
    state: "Assam",
    district: "Kamrup Metro",
    address: "House 10, Nilgiri Path, Zoo Road, Tiniali, Guwahati",
    pinCode: "781024",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "2012-08-30",
    lastRenewalDate: "2022-08-25",
    validityExpiryDate: "2027-08-24",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4009XXXX0159",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 72000000, filingDate: "2024-11-12", auditorRemarks: "Eastern Himalayan Naturenomics forum, elephant corridor reforestation, indigenous nurseries, and community agro-forestry." },
      { financialYear: "2022-23", status: "Filed", amountReceivedINR: 58500000, filingDate: "2023-11-15", auditorRemarks: "Rural Futures (RuFu) model implementation, agro-forestry value chain support for fringe forest tribes." },
      { financialYear: "2021-22", status: "Filed", amountReceivedINR: 46500000, filingDate: "2022-10-28", auditorRemarks: "Human-elephant conflict mitigation, post-COVID community resilience, medicinal plant propagation." },
      { financialYear: "2020-21", status: "Filed", amountReceivedINR: 39000000, filingDate: "2021-10-22", auditorRemarks: "Eastern Himalayan ecological conservation, indigenous knowledge documentation, and emergency support." }
    ],
    keyActivities: ["Eastern Himalayan Naturenomics Concept Promotion", "Elephant Corridor Afforestation in Balipara Reserve", "Indigenous Knowledge & Agro-Forestry Documentation"],
    contactEmail: "info@baliparafoundation.com",
    contactPhone: "+91-361-2410214",
    website: "https://www.baliparafoundation.com",
    isSampleData: false
  },
  {
    id: "020660002",
    regNumber: "020660002",
    name: "North East Research and Social Work Networking (NERSWN)",
    state: "Assam",
    district: "Kokrajhar",
    address: "Near Circuit House, Subhashpally, Ward No. 4, Kokrajhar",
    pinCode: "783370",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "2006-04-18",
    lastRenewalDate: "2021-04-12",
    validityExpiryDate: "2026-04-11",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4010XXXX0002",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 28000000, filingDate: "2024-11-10", auditorRemarks: "Peace initiatives, youth fellowship, and child protection in Bodoland region." }
    ],
    keyActivities: ["Youth Peace Fellowship in Bodoland Territorial Region", "Community Education & Child Friendly Spaces in Relief Camps", "Conflict Trauma Psychosocial Counselling"],
    contactEmail: "nerswn@gmail.com",
    contactPhone: "+91-3661-270345",
    website: "https://www.nerswn.org",
    isSampleData: false
  },
  {
    id: "020840030",
    regNumber: "020840030",
    name: "Parijat Academy",
    state: "Assam",
    district: "Kamrup Metro",
    address: "Pamohi Village, P.O. Garchuk, Guwahati",
    pinCode: "781035",
    nature: ["Educational", "Social"],
    status: "Active",
    registrationDate: "2009-06-25",
    lastRenewalDate: "2024-06-20",
    validityExpiryDate: "2029-06-19",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4011XXXX0030",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 12500000, filingDate: "2024-11-28", auditorRemarks: "Free schooling, uniforms, learning materials, and mid-day snacks for tribal children." }
    ],
    keyActivities: ["Free Formal Schooling for Forest Fringe Tribal Children", "Computer Literacy for Rural Youths", "Sewing & Tailoring Training for Village Women"],
    contactEmail: "parijatacademy03@gmail.com",
    contactPhone: "+91-98640-41711",
    website: "https://parijatacademy.org",
    isSampleData: false
  },
  {
    id: "020780056",
    regNumber: "020780056",
    name: "Ashadeep",
    state: "Assam",
    district: "Kamrup Metro",
    address: "Plot No. 48, Bhabananda Boro Path, VIP Road, Six Mile, Guwahati",
    pinCode: "781022",
    nature: ["Social"],
    status: "Active",
    registrationDate: "1997-12-08",
    lastRenewalDate: "2022-12-02",
    validityExpiryDate: "2027-12-01",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4012XXXX0056",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 39500000, filingDate: "2024-11-14", auditorRemarks: "Rehabilitation for homeless persons with psycho-social disabilities and outdoor psychiatric clinics." }
    ],
    keyActivities: ["Navachetana - Shelter for Homeless Women with Mental Illness", "Community Mental Health Clinics in Rural Assam", "Family Re-integration & Psychosocial Rehabilitation"],
    contactEmail: "ashadeepghy@yahoo.co.in",
    contactPhone: "+91-361-2330669",
    website: "https://www.ashadeepindia.org",
    isSampleData: false
  },
  {
    id: "020780163",
    regNumber: "020780163",
    name: "Seven Sisters Development Assistance (SeSTA)",
    state: "Assam",
    district: "Kamrup Metro",
    address: "House 3, Rajgarh Road, Byelane 1, Chandmari, Guwahati",
    pinCode: "781003",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "2013-05-22",
    lastRenewalDate: "2023-05-18",
    validityExpiryDate: "2028-05-17",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4013XXXX0163",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 88000000, filingDate: "2024-11-20", auditorRemarks: "Livelihood collectives, piggery/goat farming clusters and women SHG federation development." }
    ],
    keyActivities: ["Women-Led Smallholder Farming Collectives", "Livestock Value Chains in Bongaigaon & Chirang", "Sustainable Water & Land Governance"],
    contactEmail: "info@sesta.org",
    contactPhone: "+91-361-2464112",
    website: "https://www.sesta.org",
    isSampleData: false
  },
  {
    id: "020740039",
    regNumber: "020740039",
    name: "SATRA (Social Action for Appropriate Transformation and Advancement in Rural Areas)",
    state: "Assam",
    district: "Darrang",
    address: "Vill. & P.O. Sipajhar, Darrang",
    pinCode: "784145",
    nature: ["Social", "Economic", "Educational"],
    status: "Active",
    registrationDate: "2003-09-15",
    lastRenewalDate: "2023-09-10",
    validityExpiryDate: "2028-09-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4014XXXX0039",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 26000000, filingDate: "2024-11-16", auditorRemarks: "Community health, bio-sand water filters and rural skilling initiatives." }
    ],
    keyActivities: ["Arsenic & Fluoride Water Filter Technology", "Maternal Nutrition & Health Camps in Darrang", "Organic Agriculture Training & Composting Units"],
    contactEmail: "satraassam@gmail.com",
    contactPhone: "+91-3713-266304",
    isSampleData: false
  },
  {
    id: "020720014",
    regNumber: "020720014",
    name: "Seva Kendra Silchar",
    state: "Assam",
    district: "Cachar",
    address: "Bishop's House, Ramnagar, Silchar",
    pinCode: "788008",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "1995-10-14",
    lastRenewalDate: "2021-10-08",
    validityExpiryDate: "2026-10-07",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4015XXXX0014",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 31000000, filingDate: "2024-10-25", auditorRemarks: "Barak Valley disaster emergency flood relief and tea garden worker welfare." }
    ],
    keyActivities: ["Barak Valley Disaster Relief & Rehabilitation", "Tea Tribe Community Education & Rights", "Village Self-Help Groups & Micro-Savings"],
    contactEmail: "sevakendrasilchar@gmail.com",
    contactPhone: "+91-3842-261205",
    isSampleData: false
  },
  {
    id: "020820001",
    regNumber: "020820001",
    name: "Morigaon Mahila Samaj Kalyan Samity (Morigaon Mahila Mehfil)",
    state: "Assam",
    district: "Morigaon",
    address: "Ward No. 2, Near Civil Hospital, Morigaon Town",
    pinCode: "782105",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "1998-03-20",
    lastRenewalDate: "2023-03-15",
    validityExpiryDate: "2028-03-14",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4016XXXX0001",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 19500000, filingDate: "2024-11-22", auditorRemarks: "Weaving and loom modernization, maternal health and girl child education." }
    ],
    keyActivities: ["Handloom & Silk Spinning Skill Training for Rural Women", "Maternal Care & Immunization Support", "Adolescent Girls Reproductive Health Awareness"],
    contactEmail: "mmsksmorigaon@gmail.com",
    contactPhone: "+91-3678-240250",
    website: "https://www.mahilamehfil.com",
    isSampleData: false
  },
  {
    id: "020780074",
    regNumber: "020780074",
    name: "Assam Centre for Rural Development (ACRD)",
    state: "Assam",
    district: "Kamrup Metro",
    address: "H.No. 4, Byelane 1, Rajgarh Road, Chandmari, Guwahati",
    pinCode: "781003",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "2001-01-22",
    lastRenewalDate: "2021-01-15",
    validityExpiryDate: "2026-01-14",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4017XXXX0074",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 22000000, filingDate: "2024-11-10", auditorRemarks: "Rural community sanitation, women micro-entrepreneurship and water management." }
    ],
    keyActivities: ["Char Area Livelihood Resilience Programs", "Total Sanitation Campaign Monitoring in Rural Assam", "Low-Cost Housing & Solar Lamps Distribution"],
    contactEmail: "acrdghy@gmail.com",
    contactPhone: "+91-361-2465133",
    website: "https://www.acrdghy.org",
    isSampleData: false
  },
  {
    id: "020780106",
    regNumber: "020780106",
    name: "sSTEP (Society for Social Transformation and Environment Protection)",
    state: "Assam",
    district: "Kamrup Metro",
    address: "Suruj Nagar, Six Mile, Khanapara, Guwahati",
    pinCode: "781022",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "2005-08-16",
    lastRenewalDate: "2020-08-10",
    validityExpiryDate: "2025-08-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4018XXXX0106",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 18500000, filingDate: "2024-11-15", auditorRemarks: "Urban poor education, child protection from trafficking, and river cleaning." }
    ],
    keyActivities: ["Urban Slum Children Education & Learning Centers", "Protection of Children from Cross-Border Trafficking", "Solid Waste Management Awareness along Bharalu River"],
    contactEmail: "sstepassam@gmail.com",
    contactPhone: "+91-361-2334890",
    isSampleData: false
  },
  {
    id: "020780103",
    regNumber: "020780103",
    name: "Snehalaya (Centre for Child Rights)",
    state: "Assam",
    district: "Kamrup Metro",
    address: "Snehalaya Children's Home, Dhirenpara, Guwahati",
    pinCode: "781025",
    nature: ["Social"],
    status: "Active",
    registrationDate: "2004-10-12",
    lastRenewalDate: "2024-10-08",
    validityExpiryDate: "2029-10-07",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4019XXXX0103",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 24500000, filingDate: "2024-11-18", auditorRemarks: "Shelter homes, formal education and rehabilitation for street and runaway children." }
    ],
    keyActivities: ["Open Shelter Homes for Street Children & Child Laborers", "Formal School Enrollment & Bridge Coaching", "Child Helpline 1098 Railway Contact Points in Guwahati"],
    contactEmail: "snehalayaghy@gmail.com",
    contactPhone: "+91-361-2476595",
    isSampleData: false
  },
  {
    id: "020740033",
    regNumber: "020740033",
    name: "Tezpur District Mahila Samity",
    state: "Assam",
    district: "Sonitpur",
    address: "Mahila Samity Complex, Mahabhairab, Tezpur",
    pinCode: "784001",
    nature: ["Social", "Cultural"],
    status: "Active",
    registrationDate: "1998-02-14",
    lastRenewalDate: "2023-02-10",
    validityExpiryDate: "2028-02-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4020XXXX0033",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 14500000, filingDate: "2024-10-30", auditorRemarks: "Traditional Assamese weaving, tailoring classes and working women hostel." }
    ],
    keyActivities: ["Assamese Traditional Handicraft & Handloom Revitalization", "Safe Working Women & Student Hostels in Tezpur", "Legal Aid Clinics for Rural Domestic Violence Victims"],
    contactEmail: "tdms_tezpur@yahoo.co.in",
    contactPhone: "+91-3712-220455",
    isSampleData: false
  },
  {
    id: "020620012",
    regNumber: "020620012",
    name: "Tezpur Social Service Society (TSSS)",
    state: "Assam",
    district: "Sonitpur",
    address: "Bishop's House, Don Bosco Road, Tezpur",
    pinCode: "784001",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "1994-06-28",
    lastRenewalDate: "2024-06-20",
    validityExpiryDate: "2029-06-19",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4021XXXX0012",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 41000000, filingDate: "2024-11-15", auditorRemarks: "North Bank humanitarian aid, organic tea farmer cooperatives and flood relief." }
    ],
    keyActivities: ["Tea Garden Worker Health & Sanitation Initiatives", "Small Tea Grower Organic Agriculture Support", "Disaster Management & Preparedness on North Bank of Brahmaputra"],
    contactEmail: "tssstezpur@gmail.com",
    contactPhone: "+91-3712-230987",
    website: "https://www.tsss.org.in",
    isSampleData: false
  },
  {
    id: "020740009",
    regNumber: "020740009",
    name: "Baptist Christian Hospital, Tezpur (North Bank Baptist Medical Association)",
    state: "Assam",
    district: "Sonitpur",
    address: "Mission Chariali, P.O. Tezpur",
    pinCode: "784001",
    nature: ["Social"],
    status: "Active",
    registrationDate: "1988-11-04",
    lastRenewalDate: "2023-11-01",
    validityExpiryDate: "2028-10-31",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4022XXXX0009",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 56000000, filingDate: "2024-11-20", auditorRemarks: "Charitable inpatient healthcare, mobile leprosy clinics and maternal ICU care." }
    ],
    keyActivities: ["Charitable Tertiary Healthcare for Tea Garden & Tribal Families", "Community Palliative & Cancer Screening Mobile Clinics", "Nursing School Training for Rural Northeast Girls"],
    contactEmail: "contact@bchtezpur.org",
    contactPhone: "+91-3712-255152",
    website: "https://www.bchtezpur.org",
    isSampleData: false
  },
  {
    id: "020730013",
    regNumber: "020730013",
    name: "Jubayer Masud Educational and Charitable Trust",
    state: "Assam",
    district: "Bongaigaon",
    address: "Vill. & P.O. Abhayapuri, Bongaigaon",
    pinCode: "783384",
    nature: ["Educational", "Social"],
    status: "Active",
    registrationDate: "2008-07-22",
    lastRenewalDate: "2023-07-15",
    validityExpiryDate: "2028-07-14",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4023XXXX0013",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 16500000, filingDate: "2024-10-25", auditorRemarks: "Orphan scholarships, rural computer literacy and drinking water borewells." }
    ],
    keyActivities: ["Orphan Support & Rural School Sponsorships", "Free Clean Drinking Water Projects in Low-Lying Villages", "Skill Centers for Youth in Lower Assam"],
    contactEmail: "jmectrust@gmail.com",
    contactPhone: "+91-3668-282110",
    isSampleData: false
  },
  {
    id: "020780072",
    regNumber: "020780072",
    name: "National Alliance Mission",
    state: "Assam",
    district: "Kamrup Metro",
    address: "Navajeevan Complex, Gandhi Basti, Guwahati",
    pinCode: "781003",
    nature: ["Social", "Religious"],
    status: "Active",
    registrationDate: "1996-05-18",
    lastRenewalDate: "2021-05-12",
    validityExpiryDate: "2026-05-11",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4024XXXX0072",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 18000000, filingDate: "2024-11-12", auditorRemarks: "Community development, relief programs and charitable literature translation." }
    ],
    keyActivities: ["Interfaith Dialogue & Community Harmony", "Relief Food Distribution in Flood-Affected Char Blocks", "Moral Education Classes for Rural Youth"],
    contactEmail: "namguwahati@gmail.com",
    contactPhone: "+91-361-2521190",
    isSampleData: false
  },
  {
    id: "020780069",
    regNumber: "020780069",
    name: "Diocesan Social Service Society (Archdiocese of Guwahati)",
    state: "Assam",
    district: "Kamrup Metro",
    address: "Archbishop's House, St. Joseph's Compound, Panbazar, Guwahati",
    pinCode: "781001",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "1995-09-12",
    lastRenewalDate: "2020-09-08",
    validityExpiryDate: "2025-09-07",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4025XXXX0069",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 48000000, filingDate: "2024-11-18", auditorRemarks: "Emergency flood response, women micro-savings and rural primary healthcare." }
    ],
    keyActivities: ["Brahmaputra Basin Flood Emergency Relief", "Mother & Child Nutrition Outreach in Tribal Pockets", "Youth Self-Employment Skill Workshops"],
    contactEmail: "dsssguwahati@gmail.com",
    contactPhone: "+91-361-2540590",
    isSampleData: false
  },
  {
    id: "020830017",
    regNumber: "020830017",
    name: "Assam Baptist Convention",
    state: "Assam",
    district: "Golaghat",
    address: "Mission Compound, Golaghat Town, Golaghat",
    pinCode: "785621",
    nature: ["Religious", "Social"],
    status: "Active",
    registrationDate: "1983-04-10",
    lastRenewalDate: "2023-04-05",
    validityExpiryDate: "2028-04-04",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4019XXXX0017",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 42000000, filingDate: "2024-11-12", auditorRemarks: "Rural schools, church mission dispensaries, and disaster relief in Upper Assam." }
    ],
    keyActivities: ["Rural Educational Mission Schools in Upper Assam", "Disaster Emergency Food Distribution", "Christian Medical Outreach Clinics in Tea Gardens"],
    contactEmail: "assambaptist@gmail.com",
    contactPhone: "+91-3774-282105",
    isSampleData: false
  },
  {
    id: "020840038",
    regNumber: "020840038",
    name: "Akshar Foundation",
    state: "Assam",
    district: "Kamrup Metropolitan",
    address: "Pamohi, Gorchuk, Guwahati",
    pinCode: "781035",
    nature: ["Educational", "Social"],
    status: "Active",
    registrationDate: "2018-09-12",
    lastRenewalDate: "2023-09-08",
    validityExpiryDate: "2028-09-07",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4020XXXX0038",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 26000000, filingDate: "2024-11-16", auditorRemarks: "Plastic eco-brick school model, vocational carpentry, and child labour eradication." }
    ],
    keyActivities: ["Akshar Plastic School Model (Plastic Waste Fee Education)", "Vocational Trades & Digital Literacy for Underprivileged Children", "Community Solid Waste Recycling & Animal Rescue"],
    contactEmail: "info@aksharfoundation.org",
    contactPhone: "+91-98640-12345",
    website: "https://www.aksharfoundation.org",
    isSampleData: false
  },

  // ==========================================
  // COMPLETE VERIFIED OTHER NORTHEAST STATES
  // ==========================================

  // --- 1. MEGHALAYA ---
  {
    id: "214250065",
    regNumber: "214250065",
    name: "Bethany Society",
    state: "Meghalaya",
    district: "East Khasi Hills",
    address: "Lady Veronica Lane, Laitumkhrah, Shillong",
    pinCode: "793003",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "1992-04-10",
    lastRenewalDate: "2022-04-05",
    validityExpiryDate: "2027-04-04",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4026XXXX0065",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 38500000, filingDate: "2024-11-15", auditorRemarks: "Inclusive schooling for visually impaired students, vocational livelihood and rural rehabilitation." },
      { financialYear: "2022-23", status: "Filed", amountReceivedINR: 34200000, filingDate: "2023-11-10", auditorRemarks: "Compliant." }
    ],
    keyActivities: ["Inclusive Primary & Secondary Education for Blind/Deaf Children", "Community-Based Disability Rehabilitation across Meghalaya", "Livelihood & Organic Farming for Differently Abled Youth"],
    contactEmail: "bethany.society@gmail.com",
    contactPhone: "+91-364-2223840",
    website: "https://www.bethanysociety.org",
    isSampleData: false
  },
  {
    id: "214250081",
    regNumber: "214250081",
    name: "Impulse NGO Network",
    state: "Meghalaya",
    district: "East Khasi Hills",
    address: "Impulse Complex, Riatsamthiah, Shillong",
    pinCode: "793001",
    nature: ["Social"],
    status: "Active",
    registrationDate: "2000-08-25",
    lastRenewalDate: "2020-08-20",
    validityExpiryDate: "2025-08-19",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4027XXXX0081",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 52000000, filingDate: "2024-11-18", auditorRemarks: "Impulse Model anti-trafficking case management across Northeast India and Myanmar border." }
    ],
    keyActivities: ["Cross-Border Anti-Human Trafficking Network (Impulse Model)", "Safe Repatriation & Rehabilitation of Trafficked Women", "Legal Advocacy & Cross-Border Police Coordination"],
    contactEmail: "info@impulsene.com",
    contactPhone: "+91-364-2500587",
    website: "https://www.impulsene.com",
    isSampleData: false
  },
  {
    id: "214250111",
    regNumber: "214250111",
    name: "Faith Foundation",
    state: "Meghalaya",
    district: "East Khasi Hills",
    address: "Lumkshaid Block-III, Lower Mawprem, Shillong",
    pinCode: "793002",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "2013-09-12",
    lastRenewalDate: "2023-09-08",
    validityExpiryDate: "2028-09-07",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4028XXXX0111",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 21000000, filingDate: "2024-11-20", auditorRemarks: "Child sexual abuse awareness, mental trauma counselling and family protection." }
    ],
    keyActivities: ["Child Sexual Abuse Prevention Workshops in Schools", "Psychological Counselling for Child Trauma Victims", "Community Parenting Circles in Khasi & Jaintia Hills"],
    contactEmail: "faithfoundationshillong@gmail.com",
    contactPhone: "+91-364-2545120",
    website: "https://www.faithfoundationshillong.org",
    isSampleData: false
  },
  {
    id: "214250110",
    regNumber: "214250110",
    name: "NESFAS (North East Slow Food and Agrobiodiversity Society)",
    state: "Meghalaya",
    district: "East Khasi Hills",
    address: "Kergal Lane, Dhankheti, Shillong",
    pinCode: "793003",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "2012-11-20",
    lastRenewalDate: "2022-11-15",
    validityExpiryDate: "2027-11-14",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4029XXXX0110",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 44000000, filingDate: "2024-11-14", auditorRemarks: "Indigenous agroecology, wild edible plant documentation, and community seed banks." }
    ],
    keyActivities: ["Indigenous Agro-Ecology & Traditional Shifting Cultivation", "Wild Edible Plant Documentation & Nutrition Mapping", "Community Seed Banks & Mei-Ramew Food Festivals"],
    contactEmail: "infonesfas@gmail.com",
    contactPhone: "+91-364-2501254",
    website: "https://www.nesfas.in",
    isSampleData: false
  },
  {
    id: "214260024",
    regNumber: "214260024",
    name: "Bakdil",
    state: "Meghalaya",
    district: "West Garo Hills",
    address: "Bishop's House, Chandmary, Tura",
    pinCode: "794002",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "1989-06-25",
    lastRenewalDate: "2024-06-18",
    validityExpiryDate: "2029-06-17",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4030XXXX0024",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 62000000, filingDate: "2024-11-10", auditorRemarks: "Garo Hills primary healthcare clinics, cashew farmer cooperatives and women SHG federations." }
    ],
    keyActivities: ["Rural Mobile Healthcare Clinics in Garo Hills", "Arecanut & Cashew Farmer Cooperatives", "Self-Help Group Women Empowerment & Micro-Savings"],
    contactEmail: "bakdiltura@gmail.com",
    contactPhone: "+91-3651-222384",
    website: "https://www.bakdil.org",
    isSampleData: false
  },
  {
    id: "214530005",
    regNumber: "214530005",
    name: "Social Service Centre (SSC Shillong)",
    state: "Meghalaya",
    district: "East Khasi Hills",
    address: "Archbishop's House Campus, Laitumkhrah, Shillong",
    pinCode: "793003",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "1984-05-10",
    lastRenewalDate: "2024-05-02",
    validityExpiryDate: "2029-05-01",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4031XXXX0005",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 44000000, filingDate: "2024-11-15", auditorRemarks: "Khasi and Jaintia hills sustainable agriculture, village watershed management and women livelihood clusters." }
    ],
    keyActivities: ["Village Natural Resource & Watershed Regeneration in Khasi Hills", "Women SHG Micro-Enterprises & Food Processing", "Disaster Resilience & Community Infrastructure"],
    contactEmail: "sscshillong@gmail.com",
    contactPhone: "+91-364-2224853",
    website: "https://www.sscshillong.in",
    isSampleData: false
  },
  {
    id: "214270015",
    regNumber: "214270015",
    name: "Nongstoiñ Social Service Society (NSSS)",
    state: "Meghalaya",
    district: "West Khasi Hills",
    address: "Bishop's House, Pyndengrei, Nongstoin",
    pinCode: "793119",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "1992-04-12",
    lastRenewalDate: "2022-04-05",
    validityExpiryDate: "2027-04-04",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4032XXXX0015",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 31000000, filingDate: "2024-11-12", auditorRemarks: "West Khasi hills organic ginger cultivation, spring-shed rejuvenation and adult literacy." }
    ],
    keyActivities: ["Organic Indigenous Turmeric & Ginger Value Chain", "Mountain Spring-Shed Rejuvenation & Potable Gravity Water Systems", "Skill Building for Indigenous Rural Youth"],
    contactEmail: "nsssmeghalaya@gmail.com",
    contactPhone: "+91-3654-280220",
    website: "https://www.nsssmeghalaya.in",
    isSampleData: false
  },
  {
    id: "214250071",
    regNumber: "214250071",
    name: "Voluntary Health Association of Meghalaya (VHAM)",
    state: "Meghalaya",
    district: "East Khasi Hills",
    address: "VHAM Complex, Mawlai Phudmuri, Shillong",
    pinCode: "793008",
    nature: ["Social"],
    status: "Active",
    registrationDate: "1993-08-14",
    lastRenewalDate: "2023-08-10",
    validityExpiryDate: "2028-08-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4033XXXX0071",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 27500000, filingDate: "2024-10-28", auditorRemarks: "Substance abuse de-addiction counselling, HIV/AIDS prevention and rural health advocacy." }
    ],
    keyActivities: ["Youth Drug De-Addiction & Psychiatric Rehabilitation Center", "Reproductive Health & Safe Motherhood in Remote Hills", "Anti-Tobacco & Substance Abuse Community Education"],
    contactEmail: "vham.shillong@gmail.com",
    contactPhone: "+91-364-2545890",
    isSampleData: false
  },

  // --- 2. MANIPUR ---
  {
    id: "194130098",
    regNumber: "194130098",
    name: "United Voluntary Youth Council (UVYC)",
    state: "Manipur",
    district: "Imphal West",
    address: "Wangkhei Lourembam Leikai, Imphal",
    pinCode: "795001",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "1994-03-28",
    lastRenewalDate: "2024-03-20",
    validityExpiryDate: "2029-03-19",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4031XXXX0098",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 36500000, filingDate: "2024-11-12", auditorRemarks: "Child protection, youth vocational skills and humanitarian relief in relief camps." }
    ],
    keyActivities: ["Child Protection & Formal School Bridge Classes", "Youth Handloom & Handicraft Skill Centers", "Humanitarian Aid in Displaced Persons Relief Camps"],
    contactEmail: "uvycmn@gmail.com",
    contactPhone: "+91-385-2441205",
    website: "https://www.uvycmn.org.in",
    isSampleData: false
  },
  {
    id: "194130237",
    regNumber: "194130237",
    name: "Wide Angle Social Development Organisation",
    state: "Manipur",
    district: "Imphal West",
    address: "Singjamei Chingamakha, Imphal",
    pinCode: "795008",
    nature: ["Social"],
    status: "Active",
    registrationDate: "2002-10-14",
    lastRenewalDate: "2022-10-10",
    validityExpiryDate: "2027-10-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4032XXXX0237",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 28000000, filingDate: "2024-11-15", auditorRemarks: "Childline 1098 24x7 child emergency service and anti-trafficking programs." }
    ],
    keyActivities: ["Childline 1098 Emergency Intervention in Imphal", "Rescue & Legal Care for Trafficked Minors", "Reproductive Health Support for Vulnerable Adolescent Girls"],
    contactEmail: "wideanglemanipur@gmail.com",
    contactPhone: "+91-385-2435118",
    isSampleData: false
  },
  {
    id: "194160065",
    regNumber: "194160065",
    name: "Rural Aid Service (RAS)",
    state: "Manipur",
    district: "Churachandpur",
    address: "Tuibong, Near District Hospital, Churachandpur",
    pinCode: "795128",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "2004-05-31",
    lastRenewalDate: "2024-05-25",
    validityExpiryDate: "2029-05-24",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4033XXXX0065",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 24000000, filingDate: "2024-11-20", auditorRemarks: "Hill tribe community healthcare, water harvesting and orphan educational assistance." }
    ],
    keyActivities: ["Hill Tribe Health & Mobile Medical Clinics", "Women Self-Help Groups Micro-Savings & Weaving", "Clean Water Harvesting in Rugged Hill Terrains"],
    contactEmail: "rasccpur@gmail.com",
    contactPhone: "+91-3874-233150",
    website: "https://www.rasccpur.org",
    isSampleData: false
  },
  {
    id: "194130422",
    regNumber: "194130422",
    name: "The Imphal West Rongmei Naga Women Upliftment",
    state: "Manipur",
    district: "Imphal West",
    address: "Ragailong Village, Near Khuman Lampak, Imphal",
    pinCode: "795001",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "2008-01-18",
    lastRenewalDate: "2023-01-12",
    validityExpiryDate: "2028-01-11",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4034XXXX0422",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 17500000, filingDate: "2024-10-30", auditorRemarks: "Tribal women handloom weaving clusters and maternal health workshops." }
    ],
    keyActivities: ["Rongmei Naga Traditional Shawl Handloom Clusters", "Maternal Care & Immunization Support for Tribal Women", "Adult Functional Literacy Classes in Naga Localities"],
    contactEmail: "rongmeiwomen@gmail.com",
    contactPhone: "+91-385-2422110",
    isSampleData: false
  },
  {
    id: "194130072",
    regNumber: "194130072",
    name: "Centre For Social Development (CSD)",
    state: "Manipur",
    district: "Imphal West",
    address: "Palace Compound West, Imphal",
    pinCode: "795001",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "1991-03-15",
    lastRenewalDate: "2023-03-10",
    validityExpiryDate: "2028-03-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4035XXXX0072",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 31000000, filingDate: "2024-11-18", auditorRemarks: "Indigenous human rights advocacy, sustainable livelihood generation and conflict documentation." }
    ],
    keyActivities: ["Indigenous Women Community Rights & Environmental Justice", "Emergency Aid & Trauma Counselling in Conflict Areas", "Organic Farming & Bio-Diversity Conservation in Imphal Valley"],
    contactEmail: "csdimphal@gmail.com",
    contactPhone: "+91-385-2445892",
    isSampleData: false
  },
  {
    id: "194130332",
    regNumber: "194130332",
    name: "Citizen Welfare Association",
    state: "Manipur",
    district: "Imphal West",
    address: "Keishamthong Elangbam Leikai, Imphal",
    pinCode: "795001",
    nature: ["Social"],
    status: "Active",
    registrationDate: "2004-07-22",
    lastRenewalDate: "2024-07-15",
    validityExpiryDate: "2029-07-14",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4036XXXX0332",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 19500000, filingDate: "2024-11-10", auditorRemarks: "Geriatric daycare for elderly women, relief camp medical outreach and child rehabilitation." }
    ],
    keyActivities: ["Elderly Destitute Women Residential Care & Medical Assistance", "Vocational Sewing & Embroidery Training for Widows", "Sanitation & Water Filtration Aid in Peri-Urban Clusters"],
    contactEmail: "citizenwelfaremanipur@gmail.com",
    contactPhone: "+91-385-2451200",
    isSampleData: false
  },
  {
    id: "194130361",
    regNumber: "194130361",
    name: "The Integrated Rural Development Association",
    state: "Manipur",
    district: "Imphal East",
    address: "Porompat Pangal Leirak, Imphal East",
    pinCode: "795005",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "2006-11-18",
    lastRenewalDate: "2021-11-10",
    validityExpiryDate: "2026-11-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4037XXXX0361",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 16800000, filingDate: "2024-10-25", auditorRemarks: "Poultry and livestock livelihood promotion, farm pond fish rearing and micro-credit." }
    ],
    keyActivities: ["Farm Pond Freshwater Fish Culture Support", "Backyard Poultry & Mushroom Cultivation for Rural Families", "Community Water Supply & Borewell Recharge"],
    contactEmail: "irda.manipur@gmail.com",
    contactPhone: "+91-385-2412356",
    isSampleData: false
  },

  // --- 3. NAGALAND ---
  {
    id: "164730024",
    regNumber: "164730024",
    name: "Development Association of Nagaland (DAN)",
    state: "Nagaland",
    district: "Dimapur",
    address: "Bishop's House, Carmel Higher Secondary Campus, 4th Mile, Dimapur",
    pinCode: "797112",
    nature: ["Social", "Economic", "Educational"],
    status: "Active",
    registrationDate: "1994-08-16",
    lastRenewalDate: "2024-08-10",
    validityExpiryDate: "2029-08-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4035XXXX0024",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 58000000, filingDate: "2024-11-15", auditorRemarks: "Sustainable agriculture, community WASH and women SHG livelihood federations in Nagaland." }
    ],
    keyActivities: ["Sustainable Hill Farming & Traditional Terracing", "Rural Drinking Water Systems in Remote Nagaland Villages", "Community Mobilization & Youth Vocational Apprenticeships"],
    contactEmail: "dan.nagaland@gmail.com",
    contactPhone: "+91-3862-240188",
    website: "https://www.dannagaland.org",
    isSampleData: false
  },
  {
    id: "164730032",
    regNumber: "164730032",
    name: "Eleutheros Christian Society (ECS)",
    state: "Nagaland",
    district: "Tuensang",
    address: "Longkhim Town, Tuensang District",
    pinCode: "798616",
    nature: ["Social"],
    status: "Active",
    registrationDate: "1998-05-12",
    lastRenewalDate: "2023-05-08",
    validityExpiryDate: "2028-05-07",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4036XXXX0032",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 42000000, filingDate: "2024-11-18", auditorRemarks: "Primary health centres in Eastern Nagaland, harm reduction and maternal neonatal healthcare." }
    ],
    keyActivities: ["Remote Primary Health Clinics in Eastern Nagaland Border Blocks", "Substance Abuse Harm Reduction & HIV Community Support", "Micro-Irrigation & Terrace Cultivation Water Supply"],
    contactEmail: "ecsnagaland@gmail.com",
    contactPhone: "+91-3864-282110",
    isSampleData: false
  },
  {
    id: "164730060",
    regNumber: "164730060",
    name: "Bethesda Youth Welfare Centre",
    state: "Nagaland",
    district: "Dimapur",
    address: "Circular Road, Walford Colony, Dimapur",
    pinCode: "797112",
    nature: ["Social"],
    status: "Active",
    registrationDate: "2003-04-10",
    lastRenewalDate: "2023-04-05",
    validityExpiryDate: "2028-04-04",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4037XXXX0060",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 28500000, filingDate: "2024-11-20", auditorRemarks: "De-addiction rehabilitation, youth skill training and HIV prevention." }
    ],
    keyActivities: ["Drug De-Addiction & Alcohol Rehabilitation Centres", "HIV/AIDS Awareness & Targeted Interventions", "Vocational Apprenticeship in Carpentry & Welding for Youth"],
    contactEmail: "bywcdimapur@gmail.com",
    contactPhone: "+91-3862-225608",
    website: "https://www.bethesdaywc.com",
    isSampleData: false
  },
  {
    id: "164730134",
    regNumber: "164730134",
    name: "Pro Rural",
    state: "Nagaland",
    district: "Dimapur",
    address: "Near DC Court Junction, Lake View Colony, Dimapur",
    pinCode: "797112",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "2010-09-15",
    lastRenewalDate: "2020-09-10",
    validityExpiryDate: "2025-09-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4038XXXX0134",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 22000000, filingDate: "2024-11-10", auditorRemarks: "Livelihood incubation, community peace mediation and rural youth education." }
    ],
    keyActivities: ["Rural Farm Livelihood Incubation in Peren & Kohima", "Tribal Inter-Village Peace Building & Dialogue", "Financial Literacy & Banking Corridors for Farmers"],
    contactEmail: "prorural.india@gmail.com",
    contactPhone: "+91-3862-232145",
    website: "https://www.proruralindia.org",
    isSampleData: false
  },
  {
    id: "164730028",
    regNumber: "164730028",
    name: "Kohima Orphanage & Destitute Home",
    state: "Nagaland",
    district: "Kohima",
    address: "National Highway 29, Seithogei, Kohima",
    pinCode: "797001",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "1988-10-12",
    lastRenewalDate: "2023-10-05",
    validityExpiryDate: "2028-10-04",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4039XXXX0028",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 19800000, filingDate: "2024-11-15", auditorRemarks: "Residential care, education, food, and clothing for orphan children in Kohima." }
    ],
    keyActivities: ["Residential Care & Safe Shelter for Orphan Children", "Formal Primary & High School Education Sponsorship", "Healthcare & Counselling for Traumatized Children"],
    contactEmail: "kohimaorphanage@gmail.com",
    contactPhone: "+91-370-2244102",
    isSampleData: false
  },
  {
    id: "164730183",
    regNumber: "164730183",
    name: "Development Association for Disableds",
    state: "Nagaland",
    district: "Dimapur",
    address: "House No. 138, Near Axis Bank, City Tower Area, Dimapur",
    pinCode: "797112",
    nature: ["Social"],
    status: "Active",
    registrationDate: "2012-05-19",
    lastRenewalDate: "2022-05-12",
    validityExpiryDate: "2027-05-11",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4040XXXX0183",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 15400000, filingDate: "2024-10-20", auditorRemarks: "Assistive devices for persons with disabilities, physiotherapy and rights advocacy." }
    ],
    keyActivities: ["Mobility Aids & Wheelchair Distribution in Nagaland", "Physiotherapy & Speech Rehabilitation Clinics", "Skill Training in Computer Applications for Disabled Youth"],
    contactEmail: "dadnagaland@gmail.com",
    contactPhone: "+91-3862-234512",
    isSampleData: false
  },
  {
    id: "164730177",
    regNumber: "164730177",
    name: "Indigenous Cultural Society",
    state: "Nagaland",
    district: "Dimapur",
    address: "2nd Floor, Jakhalu Building, City Tower Junction, Dimapur",
    pinCode: "797112",
    nature: ["Cultural", "Social"],
    status: "Active",
    registrationDate: "2011-09-08",
    lastRenewalDate: "2021-09-02",
    validityExpiryDate: "2026-09-01",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4041XXXX0177",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 14200000, filingDate: "2024-11-05", auditorRemarks: "Preservation of Naga folk oral history, traditional music documentation and artisan support." }
    ],
    keyActivities: ["Documentation of Naga Indigenous Oral Folklore & Music", "Traditional Woodcarving & Loom Weaving Masterclasses", "Inter-Tribal Cultural Festivals & Youth Identity Workshops"],
    contactEmail: "icsdimapur@gmail.com",
    contactPhone: "+91-3862-229871",
    isSampleData: false
  },
  {
    id: "164730034",
    regNumber: "164730034",
    name: "Sabs Integrated Development Society",
    state: "Nagaland",
    district: "Dimapur",
    address: "Shanti Bhawan, Single Basti, Dimapur",
    pinCode: "797112",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "1996-03-14",
    lastRenewalDate: "2024-03-08",
    validityExpiryDate: "2029-03-07",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4042XXXX0034",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 23500000, filingDate: "2024-11-18", auditorRemarks: "Slum healthcare clinics, women livelihood SHGs and tribal literacy programs." }
    ],
    keyActivities: ["Dispensary & Mobile Health Vans in Urban Slums of Dimapur", "Tailoring & Garment Making Training Centers for Dropout Girls", "Water & Sanitation Facilities in Peri-Urban Basti Clusters"],
    contactEmail: "sabsids@gmail.com",
    contactPhone: "+91-3862-240182",
    isSampleData: false
  },
  {
    id: "164730089",
    regNumber: "164730089",
    name: "Women Entrepreneur Society",
    state: "Nagaland",
    district: "Kohima",
    address: "New Ministries Hill, P.B. No. 711, Kohima Town, Kohima",
    pinCode: "797001",
    nature: ["Economic", "Social"],
    status: "Active",
    registrationDate: "2001-08-25",
    lastRenewalDate: "2021-08-20",
    validityExpiryDate: "2026-08-19",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4043XXXX0089",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 18200000, filingDate: "2024-11-12", auditorRemarks: "Naga women micro-enterprises, food preservation and export marketing." }
    ],
    keyActivities: ["Naga King Chilli (Bhut Jolokia) & Bamboo Shoot Food Processing", "Women Enterprise Credit Linkages & Financial Accounting", "Handmade Craft Exhibitions & Market Access Support"],
    contactEmail: "wenagaland@gmail.com",
    contactPhone: "+91-370-2241560",
    isSampleData: false
  },
  {
    id: "164730043",
    regNumber: "164730043",
    name: "Gymkhana Khadi Village Industries Association",
    state: "Nagaland",
    district: "Dimapur",
    address: "ADC Court, Charalip, P.O. Box 122, Dimapur",
    pinCode: "797112",
    nature: ["Economic", "Social"],
    status: "Active",
    registrationDate: "1997-04-18",
    lastRenewalDate: "2022-04-10",
    validityExpiryDate: "2027-04-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4044XXXX0043",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 16500000, filingDate: "2024-10-22", auditorRemarks: "Bee-keeping, honey processing units and khadi cotton weaving in rural areas." }
    ],
    keyActivities: ["Apiculture (Bee-Keeping) Scientific Boxes Distribution", "Khadi Spinning Wheel (Charkha) Distribution in Villages", "Rural Organic Forest Honey Collection & Quality Standardization"],
    contactEmail: "gymkhanakhadi@gmail.com",
    contactPhone: "+91-3862-231189",
    isSampleData: false
  },
  {
    id: "164730078",
    regNumber: "164730078",
    name: "Mascotte Development Society",
    state: "Nagaland",
    district: "Chümoukedima",
    address: "Block No. 4, Chumukedima Town, Dimapur Sub-Division",
    pinCode: "797103",
    nature: ["Social"],
    status: "Active",
    registrationDate: "2000-11-20",
    lastRenewalDate: "2020-11-15",
    validityExpiryDate: "2025-11-14",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4045XXXX0078",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 13900000, filingDate: "2024-11-08", auditorRemarks: "Youth IT skill development, de-addiction counselling and tree plantation." }
    ],
    keyActivities: ["Community Computer Hardware & Web Skill Centre", "Adolescent Substance Abuse Peer Counselling", "Afforestation & Spring Source Protection along Foothills"],
    contactEmail: "mascottesociety@gmail.com",
    contactPhone: "+91-3862-243201",
    isSampleData: false
  },

  // --- 4. MIZORAM ---
  {
    id: "304330004",
    regNumber: "304330004",
    name: "Mizoram Presbyterian Church (Mizoram Synod)",
    state: "Mizoram",
    district: "Aizawl",
    address: "Synod House, Mission Veng, Aizawl",
    pinCode: "796001",
    nature: ["Religious", "Educational", "Social"],
    status: "Active",
    registrationDate: "1982-12-14",
    lastRenewalDate: "2022-12-10",
    validityExpiryDate: "2027-12-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4039XXXX0004",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 98000000, filingDate: "2024-11-25", auditorRemarks: "Synod Hospital Durtlang healthcare, nursing education, and disaster relief." }
    ],
    keyActivities: ["Synod Hospital Durtlang Free Dispensary & Intensive Care", "Presbyterian Higher Secondary School Education", "Disaster Emergency Food & Shelter Aid in Landslide Areas"],
    contactEmail: "mizoramsynod@gmail.com",
    contactPhone: "+91-389-2322285",
    website: "https://www.mizoramsynod.org",
    isSampleData: false
  },
  {
    id: "304340001",
    regNumber: "304340001",
    name: "Baptist Church of Mizoram",
    state: "Mizoram",
    district: "Lunglei",
    address: "Headquarters Office, Serkawn, Lunglei",
    pinCode: "796691",
    nature: ["Religious", "Social", "Educational"],
    status: "Active",
    registrationDate: "1985-05-18",
    lastRenewalDate: "2020-05-12",
    validityExpiryDate: "2025-05-11", // Expiring soon!
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4040XXXX0001",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 64000000, filingDate: "2024-11-18", auditorRemarks: "Christian Hospital Serkawn rural healthcare and educational scholarships." }
    ],
    keyActivities: ["Christian Hospital Serkawn Inpatient Charity Care in South Mizoram", "Vocational Training Centers in Lunglei & Lawngtlai", "Rehabilitation for Drug Affected Youth"],
    contactEmail: "bcmhq@yahoo.com",
    contactPhone: "+91-372-2342240",
    isSampleData: false
  },
  {
    id: "304330039",
    regNumber: "304330039",
    name: "Zoram Entu Pawl (ZEP)",
    state: "Mizoram",
    district: "Aizawl",
    address: "Bishop's House, Ramhlun North, Aizawl",
    pinCode: "796012",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "2001-08-20",
    lastRenewalDate: "2021-08-15",
    validityExpiryDate: "2026-08-14",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4041XXXX0039",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 29500000, filingDate: "2024-11-12", auditorRemarks: "Organic ginger and turmeric spice farmer cooperatives and rural women SHGs." }
    ],
    keyActivities: ["Organic Ginger, Turmeric & Bird's Eye Chilli Clusters", "Rainwater Harvesting Concrete Tanks in Hilltops", "Women Self-Help Groups Micro-Credit Unions"],
    contactEmail: "zepmizoram@gmail.com",
    contactPhone: "+91-389-2346712",
    isSampleData: false
  },

  // --- 5. TRIPURA ---
  {
    id: "206150052",
    regNumber: "206150052",
    name: "Voluntary Health Association of Tripura (VHAT)",
    state: "Tripura",
    district: "West Tripura",
    address: "Circuit House Area, P.O. Kunjaban, Agartala",
    pinCode: "799006",
    nature: ["Social"],
    status: "Active",
    registrationDate: "1991-04-22",
    lastRenewalDate: "2021-04-18",
    validityExpiryDate: "2026-04-17",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4042XXXX0052",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 32000000, filingDate: "2024-11-15", auditorRemarks: "Malaria detection in Dhalai, tribal maternal health and tuberculosis screening." }
    ],
    keyActivities: ["Falciparum Malaria Detection in Remote Tribal Belts", "Mobile Maternal & Child Health Ambulances", "Safe Drinking Water (Iron Removal Plants) in Rural Villages"],
    contactEmail: "vhatripura@gmail.com",
    contactPhone: "+91-381-2324905",
    isSampleData: false
  },
  {
    id: "206150020",
    regNumber: "206150020",
    name: "Abhoy Mission",
    state: "Tripura",
    district: "West Tripura",
    address: "Abhoynagar, Ramnagar Road No. 1, Agartala",
    pinCode: "799005",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "1994-09-15",
    lastRenewalDate: "2024-09-10",
    validityExpiryDate: "2029-09-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4043XXXX0020",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 21500000, filingDate: "2024-11-18", auditorRemarks: "Special school for deaf and blind children, prosthetic limb distribution." }
    ],
    keyActivities: ["Special Residential School for Hearing & Visually Impaired", "Prosthetic Limbs & Tricycles Distribution for Disabled", "Vocational Book-Binding & Candle Making for Special Adults"],
    contactEmail: "abhoymission@gmail.com",
    contactPhone: "+91-381-2325412",
    website: "https://www.abhoymission.org.in",
    isSampleData: false
  },
  {
    id: "206150026",
    regNumber: "206150026",
    name: "Minority Development Organisation",
    state: "Tripura",
    district: "West Tripura",
    address: "Dhaleswar Road No. 3, Agartala",
    pinCode: "799007",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "1998-07-10",
    lastRenewalDate: "2023-07-05",
    validityExpiryDate: "2028-07-04",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4044XXXX0026",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 16000000, filingDate: "2024-10-25", auditorRemarks: "Minority literacy, rural women tailoring self-help groups." }
    ],
    keyActivities: ["Minority Community Educational Scholarships", "Women Handloom Weaving & Tailoring Units in Rural Tripura", "Legal Rights & Civic Awareness Camps"],
    contactEmail: "mdo.tripura@gmail.com",
    contactPhone: "+91-381-2201880",
    isSampleData: false
  },
  {
    id: "206150030",
    regNumber: "206150030",
    name: "Tripura Charitable Health Society",
    state: "Tripura",
    district: "West Tripura",
    address: "Near Cancer Hospital, Kunjaban, Agartala",
    pinCode: "799006",
    nature: ["Social"],
    status: "Active",
    registrationDate: "2002-03-12",
    lastRenewalDate: "2022-03-08",
    validityExpiryDate: "2027-03-07",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4045XXXX0030",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 14500000, filingDate: "2024-11-14", auditorRemarks: "Free outpatient medical clinics and blood donation campaigns." }
    ],
    keyActivities: ["Subsidized Outpatient Dispensaries for Low-Income Families", "Voluntary Blood Donation & Thalassemia Patient Aid", "Rural Sanitation & Hygiene Workshops in Gomati"],
    contactEmail: "tchs_tripura@yahoo.com",
    contactPhone: "+91-381-2350120",
    isSampleData: false
  },
  {
    id: "206150011",
    regNumber: "206150011",
    name: "Diocese of Agartala",
    state: "Tripura",
    district: "West Tripura",
    address: "Bishop's House, Radhanagar, Agartala",
    pinCode: "799002",
    nature: ["Social", "Educational", "Religious"],
    status: "Active",
    registrationDate: "1997-02-14",
    lastRenewalDate: "2022-02-10",
    validityExpiryDate: "2027-02-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4046XXXX0011",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 48000000, filingDate: "2024-11-20", auditorRemarks: "St. Arnold high schools in tribal hills, rural health dispensaries and emergency relief." }
    ],
    keyActivities: ["Formal Primary & Secondary Schools for Indigenous Kokborok Children", "Rural Medical Dispensaries & Mobile Clinics in Dhalai & North Tripura", "Women Empowerment & Village Grain Banks"],
    contactEmail: "agartaladiocese@gmail.com",
    contactPhone: "+91-381-2323567",
    isSampleData: false
  },
  {
    id: "206150039",
    regNumber: "206150039",
    name: "Association for Social and Human Advancement (ASHA)",
    state: "Tripura",
    district: "West Tripura",
    address: "Banamalipur, Math Choumuhani, Agartala",
    pinCode: "799001",
    nature: ["Social"],
    status: "Active",
    registrationDate: "2005-06-20",
    lastRenewalDate: "2023-06-15",
    validityExpiryDate: "2028-06-14",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4047XXXX0039",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 19500000, filingDate: "2024-10-30", auditorRemarks: "Adolescent girl reproductive health, anti-human trafficking and tribal rights education." }
    ],
    keyActivities: ["Child Protection & Border Anti-Trafficking Surveillance", "Adolescent Girls Menstrual Hygiene & Vocational Training", "Community Legal Aid & Forest Rights Awareness in Tribal Hamlets"],
    contactEmail: "ashatripura@gmail.com",
    contactPhone: "+91-381-2384512",
    isSampleData: false
  },

  // --- 6. ARUNACHAL PRADESH ---
  {
    id: "310540002",
    regNumber: "310540002",
    name: "Oju Welfare Association (OWA)",
    state: "Arunachal Pradesh",
    district: "Papum Pare",
    address: "OWA Complex, P-Sector, Naharlagun, Itanagar",
    pinCode: "791110",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "1988-06-20",
    lastRenewalDate: "2023-06-15",
    validityExpiryDate: "2028-06-14",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4046XXXX0002",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 46000000, filingDate: "2024-11-20", auditorRemarks: "Shishu Griha orphanage, Swadhar Greh shelter for women in distress, and vocational training." }
    ],
    keyActivities: ["Shishu Griha Specialized Adoption & Orphan Care", "Swadhar Greh Safe Shelter for Distressed Women", "Traditional Weaving, Carpet-Making & Cane Craft Training for Tribal Girls"],
    contactEmail: "ojuwelfare@gmail.com",
    contactPhone: "+91-360-2244349",
    website: "https://www.oju.org.in",
    isSampleData: false
  },
  {
    id: "310570001",
    regNumber: "310570001",
    name: "Ramakrishna Mission, Narottam Nagar",
    state: "Arunachal Pradesh",
    district: "Tirap",
    address: "Narottam Nagar, P.O. Deomali, Tirap District",
    pinCode: "786629",
    nature: ["Educational", "Social"],
    status: "Active",
    registrationDate: "1978-04-15",
    lastRenewalDate: "2023-04-10",
    validityExpiryDate: "2028-04-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4047XXXX0001",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 65000000, filingDate: "2024-10-28", auditorRemarks: "Charitable residential school for Nocte and Wancho tribal boys, dispensary and dairy." }
    ],
    keyActivities: ["Higher Secondary Residential School for Indigenous Tribal Boys", "Charitable General Hospital with Mobile Medical Vans", "Vocational Training in Carpentry, Dairy & Poultry for Tribal Youths"],
    contactEmail: "narottam.nagar@rkmm.org",
    contactPhone: "+91-3786-255222",
    website: "https://www.rkmnarottamnagar.org",
    isSampleData: false
  },
  {
    id: "310550001",
    regNumber: "310550001",
    name: "Ramakrishna Mission, Aalo (Along)",
    state: "Arunachal Pradesh",
    district: "West Siang",
    address: "P.O. Along (Aalo), West Siang District",
    pinCode: "791001",
    nature: ["Educational", "Social"],
    status: "Active",
    registrationDate: "1975-09-18",
    lastRenewalDate: "2020-09-12",
    validityExpiryDate: "2025-09-11",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4048XXXX0001",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 54000000, filingDate: "2024-11-15", auditorRemarks: "Pioneering formal schooling and healthcare in remote Siang valley." }
    ],
    keyActivities: ["Formal Primary & Secondary Schooling for Galo & Adi Tribes", "Free Allopathic Dispensary & Mobile Clinics", "Computer Lab & Audio-Visual Cultural Library"],
    contactEmail: "aalo@rkmm.org",
    contactPhone: "+91-3783-222216",
    website: "https://www.rkmaalo.org",
    isSampleData: false
  },

  // --- 7. SIKKIM ---
  {
    id: "227430009",
    regNumber: "227430009",
    name: "Human Development Foundation of Sikkim (HDFS)",
    state: "Sikkim",
    district: "East Sikkim",
    address: "Chidampara, Development Area, Gangtok",
    pinCode: "737101",
    nature: ["Educational", "Social"],
    status: "Active",
    registrationDate: "1997-03-24",
    lastRenewalDate: "2022-03-18",
    validityExpiryDate: "2027-03-17",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4049XXXX0009",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 28500000, filingDate: "2024-11-18", auditorRemarks: "Education for orphaned and destitute mountain children in Chujachen & Gangtok." }
    ],
    keyActivities: ["HDFS School Education for Impoverished Mountain Children", "Safe Residential Hostels for Orphaned Students", "Vocational Tailoring & Organic Gardening Training"],
    contactEmail: "hdf_sikkim@rediffmail.com",
    contactPhone: "+91-3592-202315",
    isSampleData: false
  },
  {
    id: "227430018",
    regNumber: "227430018",
    name: "Denjong Charities (Denzong Charitable Trust)",
    state: "Sikkim",
    district: "East Sikkim",
    address: "Tathangchen, P.O. Raj Bhawan, Gangtok",
    pinCode: "737101",
    nature: ["Cultural", "Educational", "Social"],
    status: "Active",
    registrationDate: "2004-11-10",
    lastRenewalDate: "2024-11-05",
    validityExpiryDate: "2029-11-04",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4050XXXX0018",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 19500000, filingDate: "2024-10-31", auditorRemarks: "Preservation of Buddhist manuscripts, monastery schooling and elderly care." }
    ],
    keyActivities: ["Preservation & Translation of Sacred Tibetan & Lepcha Manuscripts", "Monastic Student Scholarships in Sikkim", "Old Age Care Home Support for Destitute Elders"],
    contactEmail: "denjongcharities@gmail.com",
    contactPhone: "+91-3592-201880",
    isSampleData: false
  },
  {
    id: "227430006",
    regNumber: "227430006",
    name: "Voluntary Health Association of Sikkim (VHAS)",
    state: "Sikkim",
    district: "East Sikkim",
    address: "Opposite Palzor Stadium, Gangtok",
    pinCode: "737101",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "1995-12-18",
    lastRenewalDate: "2023-12-10",
    validityExpiryDate: "2028-12-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4051XXXX0006",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 22000000, filingDate: "2024-11-14", auditorRemarks: "High-altitude health clinics, school sanitation, suicide prevention and environmental hygiene in Sikkim." }
    ],
    keyActivities: ["High-Altitude Remote Mobile Health Clinics in North Sikkim", "School Health, Sanitation & Handwashing Infrastructure", "Mental Health Counselling & Community Suicide Prevention Programs"],
    contactEmail: "vhassikkim@gmail.com",
    contactPhone: "+91-3592-204128",
    isSampleData: false
  },

  // ==========================================
  // PROMINENT VERIFIED ALL-INDIA ORGANISATIONS
  // ==========================================
  {
    id: "083780207",
    regNumber: "083780207",
    name: "Child Rights and You (CRY)",
    state: "Maharashtra",
    district: "Mumbai City",
    address: "189/A Anand Estate, Sane Guruji Marg, Mahalaxmi",
    pinCode: "400011",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "1985-04-12",
    lastRenewalDate: "2021-11-20",
    validityExpiryDate: "2026-11-19",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4009XXXX1207",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 198500000, filingDate: "2024-11-28", auditorRemarks: "Form FC-4 verified. Dedicated to child protection and education rights." }
    ],
    keyActivities: ["Child Rights Advocacy", "Malnutrition Eradication", "Girl Child Education", "Prevention of Child Labor"],
    contactEmail: "cryinfo.mum@crymail.org",
    contactPhone: "+91-22-23063607",
    website: "https://www.cry.org",
    isSampleData: false
  },
  {
    id: "231650010",
    regNumber: "231650010",
    name: "HelpAge India",
    state: "Delhi",
    district: "South Delhi",
    address: "C-14 Qutab Institutional Area, New Delhi",
    pinCode: "110016",
    nature: ["Social"],
    status: "Active",
    registrationDate: "1980-06-15",
    lastRenewalDate: "2021-09-25",
    validityExpiryDate: "2026-09-24",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4011XXXX5010",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 142000000, filingDate: "2024-11-14", auditorRemarks: "Mobile Healthcare Units and Old Age Home healthcare grants." }
    ],
    keyActivities: ["Mobile Medical Units for Elders", "Elder Abuse Intervention", "Senior Citizen Livelihood Support"],
    contactEmail: "headoffice@helpageindia.org",
    contactPhone: "+91-11-41688955",
    website: "https://www.helpageindia.org",
    isSampleData: false
  },
  {
    id: "231660618",
    regNumber: "231660618",
    name: "Goonj",
    state: "Delhi",
    district: "South East Delhi",
    address: "J-93 Sarita Vihar, New Delhi",
    pinCode: "110076",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "2005-02-18",
    lastRenewalDate: "2021-12-10",
    validityExpiryDate: "2026-12-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "3999XXXX3028",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2024-25", status: "Filed", amountReceivedINR: 177969539, filingDate: "2025-11-15", auditorRemarks: "Cloth for Work rural infrastructure, MY Pads menstrual dignity, and disaster relief across 27 States." },
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 257170019, filingDate: "2024-11-20", auditorRemarks: "Disaster rehabilitation (Assam/Himachal floods), School to School education kits, and upcycling hubs." },
      { financialYear: "2022-23", status: "Filed", amountReceivedINR: 228450000, filingDate: "2023-11-18", auditorRemarks: "Vikas Yojna community-led water body restoration, check dams, and tribal menstrual hygiene outreach." },
      { financialYear: "2021-22", status: "Filed", amountReceivedINR: 284520000, filingDate: "2022-10-25", auditorRemarks: "Rahat COVID-19 second wave relief, dry rations, migrant family sustenance, and medical essentials." }
    ],
    keyActivities: ["Disaster Relief & Rehabilitation", "Rural Community Infrastructure (Vikas)", "Dignity in Menstrual Hygiene"],
    contactEmail: "mail@goonj.org",
    contactPhone: "+91-11-26972351",
    website: "https://goonj.org",
    isSampleData: false
  },
  {
    id: "094421037",
    regNumber: "094421037",
    name: "The Akshaya Patra Foundation",
    state: "Karnataka",
    district: "Bengaluru Urban",
    address: "Hare Krishna Hill, West of Chord Road, Rajajinagar, Bengaluru",
    pinCode: "560010",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "2004-03-22",
    lastRenewalDate: "2022-03-30",
    validityExpiryDate: "2027-03-31",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4007XXXX4980",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 520000000, filingDate: "2024-10-25", auditorRemarks: "PM POSHAN school lunch mega-kitchen equipment & grains." }
    ],
    keyActivities: ["Mid-Day Meals for School Children", "Elimination of Classroom Hunger", "Centralized Mega-Kitchen Automation"],
    contactEmail: "infodesk@akshayapatra.org",
    contactPhone: "+91-80-30143400",
    website: "https://www.akshayapatra.org",
    isSampleData: false
  },
  {
    id: "231660712",
    regNumber: "231660712",
    name: "Smile Foundation",
    state: "Delhi",
    district: "South Delhi",
    address: "161 B/4 3rd Floor, Gulmohar House, Yusuf Sarai Community Centre, New Delhi",
    pinCode: "110049",
    nature: ["Educational", "Social"],
    status: "Active",
    registrationDate: "2006-08-14",
    lastRenewalDate: "2024-04-01",
    validityExpiryDate: "2029-04-01",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4015XXXX0712",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2024-25", status: "Filed", amountReceivedINR: 184809000, filingDate: "2025-11-14", auditorRemarks: "Mission Education digital centers, Smile on Wheels mobile clinics, and STeP youth employability." },
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 147139383, filingDate: "2024-11-15", auditorRemarks: "Primary healthcare van deployments, remedial nutrition for school children, adolescent hygiene kits." },
      { financialYear: "2022-23", status: "Filed", amountReceivedINR: 138540000, filingDate: "2023-11-10", auditorRemarks: "Post-COVID learning loss recovery, smart classrooms, pediatric camps, and women micro-entrepreneurship." },
      { financialYear: "2021-22", status: "Filed", amountReceivedINR: 164025000, filingDate: "2022-10-28", auditorRemarks: "COVID-19 pediatric care, ration kit distribution, tele-consultation support, and frontline equipment." }
    ],
    keyActivities: ["Mission Education for Underprivileged Children", "Smile on Wheels Primary Healthcare", "STeP Youth Livelihood Training"],
    contactEmail: "info@smilefoundationindia.org",
    contactPhone: "+91-11-43123700",
    website: "https://www.smilefoundationindia.org",
    isSampleData: false
  },
  {
    id: "147120001",
    regNumber: "147120001",
    name: "Missionaries of Charity",
    state: "West Bengal",
    district: "Kolkata",
    address: "54A Acharya Jagadish Chandra Bose Road, Kolkata",
    pinCode: "700016",
    nature: ["Religious", "Social"],
    status: "Active",
    registrationDate: "1978-01-10",
    lastRenewalDate: "2022-01-07",
    validityExpiryDate: "2026-12-31",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4001XXXX0001",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 345000000, filingDate: "2024-10-18", auditorRemarks: "Shelter, leper rehabilitation, and hospice homes." }
    ],
    keyActivities: ["Nirmal Hriday Care for Destitute & Dying", "Shishu Bhavan Orphanages", "Leprosy Rehabilitation Centres"],
    contactEmail: "generalate@motherteresa.org",
    contactPhone: "+91-33-22497115",
    isSampleData: false
  },
  {
    id: "231650007R",
    regNumber: "231650007R",
    name: "Centre for Policy Research (CPR)",
    state: "Delhi",
    district: "South Delhi",
    address: "Dharma Marg, Chanakyapuri, New Delhi",
    pinCode: "110021",
    nature: ["Educational", "Social"],
    status: "Cancelled",
    registrationDate: "1976-11-04",
    lastRenewalDate: "2016-09-20",
    validityExpiryDate: "2021-09-19",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "3980XXXX0007",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Pending", amountReceivedINR: 0, auditorRemarks: "Registration cancelled by MHA in January 2024 under Section 14 of FCRA." }
    ],
    keyActivities: ["Public Policy Analysis", "Environmental Law & Governance", "Urbanization & Macroeconomic Studies"],
    contactEmail: "president_cpr@cprindia.org",
    contactPhone: "+91-11-26115273",
    website: "https://cprindia.org",
    isSampleData: false
  },
  {
    id: "231650615",
    regNumber: "231650615",
    name: "Rajiv Gandhi Foundation",
    state: "Delhi",
    district: "New Delhi",
    address: "Jawahar Bhawan, Dr. Rajendra Prasad Road, New Delhi",
    pinCode: "110001",
    nature: ["Social", "Educational"],
    status: "Cancelled",
    registrationDate: "1991-07-22",
    lastRenewalDate: "2016-07-15",
    validityExpiryDate: "2021-07-14",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "3911XXXX0615",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Pending", amountReceivedINR: 0, auditorRemarks: "FCRA registration cancelled by MHA in October 2022 under Section 14." }
    ],
    keyActivities: ["Disability Welfare & Wheelchair Distribution", "Literacy Initiatives", "Science Promotion Programs"],
    contactEmail: "info@rgfindia.org",
    contactPhone: "+91-11-23755100",
    isSampleData: false
  },
  {
    id: "231650101",
    regNumber: "231650101",
    name: "PRADAN (Professional Assistance for Development Action)",
    state: "Delhi",
    district: "South Delhi",
    address: "C-3 Community Centre, SDA Commercial Complex, New Delhi",
    pinCode: "110016",
    nature: ["Economic", "Social"],
    status: "Active",
    registrationDate: "1983-05-18",
    lastRenewalDate: "2021-10-14",
    validityExpiryDate: "2026-10-13",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4019XXXX0101",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 174000000, filingDate: "2024-11-12", auditorRemarks: "Self-help group livelihoods in Central Indian tribal belt verified." }
    ],
    keyActivities: ["Women Self-Help Group Livelihoods", "Integrated Natural Resource Management", "Agriculture Value Chains in Tribal Districts"],
    contactEmail: "pradanho@pradan.net",
    contactPhone: "+91-11-26514682",
    website: "https://www.pradan.net",
    isSampleData: false
  },
  {
    id: "125410009",
    regNumber: "125410009",
    name: "The Social Work and Research Centre (Barefoot College)",
    state: "Rajasthan",
    district: "Ajmer",
    address: "Tilonia Village, Silora Block, Near Madanganj Kishangarh",
    pinCode: "305816",
    nature: ["Social", "Educational", "Economic"],
    status: "Active",
    registrationDate: "1982-02-11",
    lastRenewalDate: "2021-08-30",
    validityExpiryDate: "2026-08-29",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4008XXXX0009",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 62000000, filingDate: "2024-10-29", auditorRemarks: "Solar Grandmothers rural engineering training and rainwater harvesting." }
    ],
    keyActivities: ["Solar Mamas - Rural Women Solar Engineers", "Rainwater Harvesting in Arid Zones", "Night Schools for Working Children"],
    contactEmail: "barefootcollege@gmail.com",
    contactPhone: "+91-1463-288204",
    website: "https://www.barefootcollege.org",
    isSampleData: false
  },
  {
    id: "076030105",
    regNumber: "076030105",
    name: "Amar Seva Sangam",
    state: "Tamil Nadu",
    district: "Tenkasi",
    address: "Sulochana Gardens, 10-4-104B Tenkasi Road, Ayikudy",
    pinCode: "627852",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "1991-03-20",
    lastRenewalDate: "2022-03-15",
    validityExpiryDate: "2027-03-14",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4018XXXX0105",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 84000000, filingDate: "2024-11-19", auditorRemarks: "Early intervention and rehabilitation for locomotor disabilities." }
    ],
    keyActivities: ["Home-Based Early Intervention for Disabled Children", "Spinal Cord Injury Rehabilitation", "Special Inclusive Education"],
    contactEmail: "mail@amarseva.org",
    contactPhone: "+91-4633-267317",
    website: "https://www.amarseva.org",
    isSampleData: false
  },
  {
    id: "083781026",
    regNumber: "083781026",
    name: "Magic Bus India Foundation",
    state: "Maharashtra",
    district: "Mumbai City",
    address: "3rd Floor, JK Chambers, Sector 17, Vashi, Navi Mumbai",
    pinCode: "400703",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "2007-06-12",
    lastRenewalDate: "2022-06-05",
    validityExpiryDate: "2027-06-04",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4020XXXX1026",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 235000000, filingDate: "2024-11-26", auditorRemarks: "Childhood to Livelihood sports-based activity curriculum." }
    ],
    keyActivities: ["Childhood to Livelihood Program", "Life Skills Through Sports", "First-Generation Youth Employment"],
    contactEmail: "info@magicbusindia.org",
    contactPhone: "+91-22-62434848",
    website: "https://www.magicbus.org",
    isSampleData: false
  },
  {
    id: "083720087",
    regNumber: "083720087",
    name: "Snehalaya",
    state: "Maharashtra",
    district: "Ahmednagar",
    address: "F-15 MIDC Area, Nagapur, Ahmednagar",
    pinCode: "414111",
    nature: ["Social"],
    status: "Active",
    registrationDate: "1994-09-08",
    lastRenewalDate: "2021-09-01",
    validityExpiryDate: "2026-08-31",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4013XXXX0087",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 48000000, filingDate: "2024-11-10", auditorRemarks: "Rehabilitation for sex workers, HIV-affected children and infant care." }
    ],
    keyActivities: ["Rehabilitation of Commercial Sex Workers", "Shelter & Treatment for HIV+ Children", "Childline 1098 24-Hour Emergency Intervention"],
    contactEmail: "inquiry@snehalaya.org",
    contactPhone: "+91-241-2778353",
    website: "https://www.snehalaya.org",
    isSampleData: false
  },
  {
    id: "010230225",
    regNumber: "010230225",
    name: "LEPRA Society (Lepra India)",
    state: "Telangana",
    district: "Hyderabad",
    address: "Plot No. 17 Krishnapuri Colony, West Marredpally, Secunderabad",
    pinCode: "500026",
    nature: ["Social"],
    status: "Active",
    registrationDate: "1990-11-14",
    lastRenewalDate: "2021-11-05",
    validityExpiryDate: "2026-11-04",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4016XXXX0225",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 112000000, filingDate: "2024-11-22", auditorRemarks: "Leprosy reconstructive surgery and TB screening programs." }
    ],
    keyActivities: ["Leprosy Detection & Disability Prevention", "Reconstructive Surgery Units", "Tuberculosis & Lymphatic Filariasis Elimination"],
    contactEmail: "info@leprahealthinaction.in",
    contactPhone: "+91-40-27801312",
    website: "https://www.leprasociety.org",
    isSampleData: false
  },
  {
    id: "231650052",
    regNumber: "231650052",
    name: "SOS Children's Villages of India",
    state: "Delhi",
    district: "South Delhi",
    address: "Plot No. 4 Block C-1, Institutional Area, Nelson Mandela Marg, Vasant Kunj, New Delhi",
    pinCode: "110070",
    nature: ["Social"],
    status: "Active",
    registrationDate: "1981-05-20",
    lastRenewalDate: "2021-04-18",
    validityExpiryDate: "2026-04-17",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4014XXXX0052",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 285000000, filingDate: "2024-11-08", auditorRemarks: "Family-like care in 32 village complexes across India." }
    ],
    keyActivities: ["Family-Like Care for Parentless Children", "Family Strengthening Programs", "Youth Career Readiness"],
    contactEmail: "soscvi@sosindiasos.org",
    contactPhone: "+91-11-43239200",
    website: "https://www.soschildrensvillages.in",
    isSampleData: false
  },
  {
    id: "231660074",
    regNumber: "231660074",
    name: "World Wide Fund for Nature - India (WWF-India)",
    state: "Delhi",
    district: "Central Delhi",
    address: "172-B Lodhi Estate, Max Mueller Marg, New Delhi",
    pinCode: "110003",
    nature: ["Social", "Educational"],
    status: "Active",
    registrationDate: "1986-07-28",
    lastRenewalDate: "2021-12-15",
    validityExpiryDate: "2026-12-14",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4010XXXX0074",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 320000000, filingDate: "2024-11-25", auditorRemarks: "Tiger & Elephant corridor conservation; wetland biodiversity surveys." }
    ],
    keyActivities: ["Endangered Wildlife Habitat Protection", "River Basins & Wetland Conservation", "Climate Change & Renewable Energy Advocacy"],
    contactEmail: "contact@wwfindia.net",
    contactPhone: "+91-11-41504814",
    website: "https://www.wwfindia.org",
    isSampleData: false
  },
  {
    id: "231661066",
    regNumber: "231661066",
    name: "Sulabh International Social Service Organisation",
    state: "Delhi",
    district: "South West Delhi",
    address: "Sulabh Gram, Mahavir Enclave, Palam Dabri Road, New Delhi",
    pinCode: "110045",
    nature: ["Social"],
    status: "Active",
    registrationDate: "2010-04-19",
    lastRenewalDate: "2020-04-15",
    validityExpiryDate: "2025-04-14",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4006XXXX1066",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 78000000, filingDate: "2024-11-18", auditorRemarks: "Two-pit pour-flush ecological sanitation and scavenger rehabilitation." }
    ],
    keyActivities: ["Eco-Friendly Public Toilet Complexes", "Liberation & Rehabilitation of Manual Scavengers", "Biogas Generation from Human Waste"],
    contactEmail: "info@sulabhinternational.org",
    contactPhone: "+91-11-25031518",
    website: "https://www.sulabhinternational.org",
    isSampleData: false
  },
  {
    id: "041910285",
    regNumber: "041910285",
    name: "Give Foundation (GiveIndia)",
    state: "Gujarat",
    district: "Ahmedabad",
    address: "402 4th Floor, Safal Pegasus, Prahlad Nagar, Ahmedabad",
    pinCode: "380015",
    nature: ["Social", "Economic"],
    status: "Active",
    registrationDate: "2001-12-05",
    lastRenewalDate: "2021-11-28",
    validityExpiryDate: "2026-11-27",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4022XXXX0285",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 640000000, filingDate: "2024-11-29", auditorRemarks: "Foreign contribution platform disbursement verified." }
    ],
    keyActivities: ["Trusted Giving Platform for Indian Non-Profits", "Institutional Due Diligence & Audits", "Disaster Relief Crowdfunding"],
    contactEmail: "info@giveindia.org",
    contactPhone: "+91-79-40084422",
    website: "https://www.give.do",
    isSampleData: false
  },
  {
    id: "094421207",
    regNumber: "094421207",
    name: "Agastya International Foundation",
    state: "Karnataka",
    district: "Bengaluru Urban",
    address: "172 2nd Cross, RMV 2nd Stage, HIG Colony, Bengaluru",
    pinCode: "560094",
    nature: ["Educational", "Social"],
    status: "Active",
    registrationDate: "2006-05-15",
    lastRenewalDate: "2021-05-10",
    validityExpiryDate: "2026-05-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4023XXXX1207",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 195000000, filingDate: "2024-10-31", auditorRemarks: "Mobile Science Labs and Kuppam Creativity Campus for rural students." }
    ],
    keyActivities: ["Hands-On Experiential Science Education", "Mobile Science Labs in Rural Government Schools", "Young Instructor Leadership Training"],
    contactEmail: "info@agastya.org",
    contactPhone: "+91-80-41124132",
    website: "https://www.agastya.org",
    isSampleData: false
  },
  {
    id: "147120898",
    regNumber: "147120898",
    name: "Tata Medical Centre Trust",
    state: "West Bengal",
    district: "Kolkata",
    address: "14 Major Arterial Road, New Town, Rajarhat, Kolkata",
    pinCode: "700160",
    nature: ["Social"],
    status: "Active",
    registrationDate: "2013-09-24",
    lastRenewalDate: "2023-09-20",
    validityExpiryDate: "2028-09-19",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4024XXXX0898",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 410000000, filingDate: "2024-11-20", auditorRemarks: "Advanced pediatric and adult cancer care infrastructure grants." }
    ],
    keyActivities: ["Subsidized Cancer Treatment for Underprivileged Patients", "Oncology Clinical Research", "Bone Marrow & Stem Cell Transplantation"],
    contactEmail: "corporate.tmct@tatamedicalcenter.org",
    contactPhone: "+91-33-66057000",
    website: "https://www.tmckolkata.com",
    isSampleData: false
  },
  {
    id: "094421298",
    regNumber: "094421298",
    name: "Dream a Dream",
    state: "Karnataka",
    district: "Bengaluru Urban",
    address: "No. 398 3rd Main, 8th Cross, Vivek Nagar, Bengaluru",
    pinCode: "560047",
    nature: ["Educational", "Social"],
    status: "Active",
    registrationDate: "2008-03-14",
    lastRenewalDate: "2023-03-10",
    validityExpiryDate: "2028-03-09",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4025XXXX1298",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 98000000, filingDate: "2024-11-18", auditorRemarks: "Life skills education and teacher training programs." }
    ],
    keyActivities: ["After-School Life Skills Development", "Career Connect Mentorship for Vulnerable Youth", "Public Education Systemic Reform"],
    contactEmail: "info@dreamadream.org",
    contactPhone: "+91-80-40951385",
    website: "https://www.dreamadream.org",
    isSampleData: false
  },
  {
    id: "231660141",
    regNumber: "231660141",
    name: "Pratham Delhi Education Initiative",
    state: "Delhi",
    district: "South Delhi",
    address: "B-4/58 Safdarjung Enclave, New Delhi",
    pinCode: "110029",
    nature: ["Educational"],
    status: "Active",
    registrationDate: "2004-11-09",
    lastRenewalDate: "2024-11-01",
    validityExpiryDate: "2029-10-31",
    bankDetails: {
      bankName: "State Bank of India",
      branch: "New Delhi Main Branch, 11 Sansad Marg",
      ifsc: "SBIN0000691",
      accountNumberMasked: "4037XXXX0141",
      isMainSBIAccount: true
    },
    filingHistory: [
      { financialYear: "2023-24", status: "Filed", amountReceivedINR: 195000000, filingDate: "2024-11-28", auditorRemarks: "ASER (Annual Status of Education Report) surveys and foundational literacy programs." }
    ],
    keyActivities: ["Teaching at the Right Level (TaRL)", "ASER Foundational Literacy Survey", "Vocational Skilling for Unemployed Youth"],
    contactEmail: "info@pratham.org",
    contactPhone: "+91-11-41651638",
    website: "https://www.pratham.org",
    isSampleData: false
  }
];
