/*! © 2026 Andrey (github.com/AndyBroken). All rights reserved. Concept / demo project, see LICENSE. */
const IMG = (id, w = 900) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;
const PHONE = '(614) 555-0188', TEL = 'tel:+16145550188', EMAIL = 'service@ironsidecomfort.example';

const ICONS = {
  snow: '<path d="M12 2v20M4.9 4.9l14.2 14.2M2 12h20M4.9 19.1 19.1 4.9"/><path d="m9 4 3 3 3-3M9 20l3-3 3 3M4 9l3 3-3 3M20 9l-3 3 3 3"/>',
  flame: '<path d="M12 22c4 0 7-3 7-7 0-5-4-7-5-11-2 2-3 4-3 6-1-1-2-2-2-4-2 2-4 5-4 9 0 4 3 7 7 7z"/>',
  drop: '<path d="M12 2.7S5 10 5 15a7 7 0 0 0 14 0c0-5-7-12.3-7-12.3z"/>',
  wind: '<path d="M3 8h11a3 3 0 1 0-3-3M3 12h16a3 3 0 1 1-3 3M3 16h8"/>',
  wrench: '<path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2.8-.7-.7-2.8z"/>',
  gauge: '<path d="M12 14l4-4"/><path d="M3.3 19a10 10 0 1 1 17.4 0"/>',
  pipe: '<path d="M4 4v6h10a2 2 0 0 1 2 2v8h4V12a6 6 0 0 0-6-6H8V4z"/>',
  home: '<path d="M3 11 12 3l9 8v10H3z"/><path d="M9 21v-6h6v6"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  tag: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z"/><circle cx="7" cy="7" r="1.5"/>',
  star: '<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  phone: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  pin: '<path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>',
  truck: '<path d="M1 3h15v13H1zM16 8h4l3 3v5h-7"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>'
};
const icon = (k, s = 24) => `<svg width="${s}" height="${s}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k]}</svg>`;

const CATS = [
  { id: 'cooling', name: 'Cooling', icon: 'snow', blurb: 'AC repair, tune-ups and high-efficiency replacements.' },
  { id: 'heating', name: 'Heating', icon: 'flame', blurb: 'Furnaces, heat pumps and boilers — fixed fast.' },
  { id: 'plumbing', name: 'Plumbing', icon: 'drop', blurb: 'Leaks, drains, water heaters and repiping.' },
  { id: 'air', name: 'Indoor Air', icon: 'wind', blurb: 'Smart thermostats, purifiers and humidity control.' }
];

const SERVICES = [
  { id: 'ac-repair', cat: 'cooling', icon: 'snow', name: 'AC Repair', price: 89, unit: 'diagnostic', img: '1724488751821-1415f5cf4960',
    short: 'Same-day air conditioner repair for all makes and models.',
    desc: 'When your AC quits on a 90° day, you need it fixed today — not next week. Our technicians arrive in fully stocked trucks, diagnose the problem with the latest tools and give you a flat, upfront price before any work starts. Most repairs are completed in a single visit.',
    signs: ['Warm air coming from the vents', 'Unit is short-cycling or won’t turn on', 'Loud grinding, banging or squealing', 'Water pooling around the indoor unit', 'Energy bills suddenly spiked'],
    includes: ['21-point system diagnostic', 'Refrigerant & pressure check', 'Electrical & capacitor testing', 'Upfront flat-rate quote', '1-year parts & labor warranty'],
    faq: [['How fast can you get here?', 'We offer same-day service when you call before 2 PM, and 24/7 emergency service for no-cooling situations.'], ['Do you repair all brands?', 'Yes — our technicians are trained on every major brand of central air and ductless systems.'], ['Is the diagnostic fee waived?', 'Yes. If you approve the repair, the $89 diagnostic fee is credited toward the job.']] },
  { id: 'ac-install', cat: 'cooling', icon: 'snow', name: 'AC Installation', price: 4900, unit: 'installed', img: '1570129477492-45c003edd2be',
    short: 'High-efficiency systems sized right for your home.',
    desc: 'A new air conditioner is a big investment, so we start with a free in-home load calculation to size the system correctly. You’ll get good-better-best options with clear pricing, available rebates and financing — and a clean, code-compliant install from our own crew, never subcontractors.',
    signs: ['System is 12+ years old', 'Repairs cost more than half a new unit', 'Uneven temperatures room to room', 'Uses R-22 refrigerant', 'Constant humidity indoors'],
    includes: ['Free in-home estimate & load calculation', 'Removal & disposal of the old unit', 'New pad, line set & thermostat', 'Permits and city inspection', '10-year parts & labor warranty'],
    faq: [['How long does installation take?', 'Most replacements are completed in one day.'], ['Do you offer financing?', 'Yes — 0% APR for 18 months on approved credit, or low monthly payments up to 10 years.'], ['Are there rebates?', 'Many high-efficiency systems qualify for utility rebates and federal tax credits. We’ll help with the paperwork.']] },
  { id: 'furnace-repair', cat: 'heating', icon: 'flame', name: 'Furnace Repair', price: 89, unit: 'diagnostic', img: '1621905251189-08b45d6a269e',
    short: 'Gas and electric furnace repair, 24/7 in winter.',
    desc: 'No heat on a January night in Ohio isn’t an inconvenience — it’s an emergency. Ironside technicians are on call around the clock to get your furnace running safely again, with carbon monoxide testing on every visit.',
    signs: ['Furnace runs but blows cold air', 'Pilot light or igniter won’t light', 'Burning or gas smell', 'Frequent cycling on and off', 'Yellow instead of blue flame'],
    includes: ['Full safety inspection', 'Carbon monoxide testing', 'Igniter, flame sensor & blower check', 'Upfront flat-rate quote', '1-year parts & labor warranty'],
    faq: [['Do you charge extra at night?', 'Emergency after-hours visits have a flat $49 surcharge — Comfort Club members never pay it.'], ['Should I repair or replace?', 'If your furnace is over 15 years old and needs a major repair, we’ll show you both options honestly.'], ['Is a gas smell an emergency?', 'Yes. Leave the house, call your gas utility, then call us.']] },
  { id: 'heat-pump', cat: 'heating', icon: 'flame', name: 'Heat Pump Systems', price: 6200, unit: 'installed', img: '1583608205776-bfd35f0d9f83',
    short: 'All-in-one heating and cooling that cuts energy bills.',
    desc: 'Modern cold-climate heat pumps heat efficiently down to sub-zero temperatures and cool in summer — one system for year-round comfort. We design, install and maintain ducted and ductless heat pumps throughout Central Ohio.',
    signs: ['You want lower monthly energy bills', 'Replacing both furnace and AC', 'Adding comfort to a room addition', 'Interested in tax credits', 'Moving away from fossil fuels'],
    includes: ['Free in-home consultation', 'Ducted or ductless design', 'Smart thermostat setup', 'Rebate & tax-credit paperwork', '12-year parts & labor warranty'],
    faq: [['Do heat pumps work in Ohio winters?', 'Yes. Cold-climate models keep heating efficiently well below 0°F, and we can pair them with a backup furnace.'], ['How much can I save?', 'Homeowners typically save 25–40% on heating costs compared to electric resistance or older gas furnaces.'], ['Can you install ductless mini-splits?', 'Absolutely — perfect for additions, garages and older homes without ductwork.']] },
  { id: 'plumbing-repair', cat: 'plumbing', icon: 'wrench', name: 'Plumbing Repair', price: 79, unit: 'service call', img: '1676210134188-4c05dd172f89',
    short: 'Leaks, clogs, faucets, toilets and burst pipes.',
    desc: 'From a dripping faucet to a burst pipe flooding the basement, our licensed plumbers fix it right the first time. We protect your floors, clean up after ourselves and stand behind every repair.',
    signs: ['Dripping faucets or running toilets', 'Low water pressure', 'Water stains on ceilings or walls', 'Sound of running water when taps are off', 'Visible pipe corrosion'],
    includes: ['Licensed master plumber', 'Leak detection', 'Shoe covers & drop cloths', 'Upfront flat-rate pricing', '1-year workmanship warranty'],
    faq: [['Do you handle emergencies?', 'Yes — burst pipes and major leaks are handled 24/7.'], ['Can you replace fixtures I bought?', 'Sure. We can install customer-supplied faucets, toilets and disposals.'], ['Do you offer repiping?', 'Yes, we repipe whole homes with PEX or copper.']] },
  { id: 'water-heater', cat: 'plumbing', icon: 'drop', name: 'Water Heaters', price: 1650, unit: 'installed', img: '1620653713380-7a34b773fef8',
    short: 'Tank and tankless repair and same-day replacement.',
    desc: 'Out of hot water? We repair and replace gas, electric and tankless water heaters — often the same day. We carry the most common sizes on our trucks and haul away your old tank.',
    signs: ['No hot water or it runs out fast', 'Rusty or discolored water', 'Rumbling or popping noises', 'Leaking around the tank base', 'Tank is 10+ years old'],
    includes: ['Same-day replacement on most models', 'Expansion tank & code upgrades', 'Haul-away of old unit', 'Permit & inspection', '6–12 year manufacturer warranty'],
    faq: [['Tank or tankless?', 'Tankless saves space and energy; tanks cost less upfront. We’ll compare both for your household.'], ['How long do water heaters last?', 'Tank models typically last 8–12 years; tankless 20+ with annual flushing.'], ['Do you flush water heaters?', 'Yes — annual flushing is included in the Comfort Club plan.']] },
  { id: 'drain-cleaning', cat: 'plumbing', icon: 'pipe', name: 'Drain & Sewer', price: 129, unit: 'per drain', img: '1676210133055-eab6ef033ce3',
    short: 'Hydro-jetting, camera inspections and sewer repair.',
    desc: 'Slow drains and backups are more than gross — they can signal a bigger problem in your sewer line. We clear clogs with professional augers and hydro-jetting, then use a camera inspection to show you exactly what’s going on.',
    signs: ['Multiple slow drains', 'Gurgling toilets', 'Sewage odors', 'Water backing up in the shower', 'Soggy patches in the yard'],
    includes: ['Drain clearing with auger or jetter', 'HD camera inspection', 'Video recording for your records', 'Root removal', '90-day clog-free guarantee'],
    faq: [['What is hydro-jetting?', 'High-pressure water that scours pipe walls clean — far more thorough than a snake.'], ['Can you fix sewer lines without digging?', 'Often, yes. We offer trenchless pipe lining for many repairs.'], ['How often should drains be cleaned?', 'Older homes with trees benefit from yearly maintenance jetting.']] },
  { id: 'indoor-air', cat: 'air', icon: 'wind', name: 'Thermostats & Air Quality', price: 249, unit: 'installed', img: '1774876549246-dfa8eae5d9f5',
    short: 'Smart thermostats, purifiers and whole-home humidifiers.',
    desc: 'Breathe cleaner air and control your comfort from your phone. We install and set up smart thermostats, whole-home air purifiers, UV lights and humidifiers that work with your existing HVAC system.',
    signs: ['Allergies or asthma at home', 'Dry skin and static in winter', 'Dusty rooms soon after cleaning', 'Lingering odors', 'Wanting to control temperature remotely'],
    includes: ['Smart thermostat installation & app setup', 'Air quality assessment', 'Purifier, UV or humidifier options', 'Filter subscription available', '5-year equipment warranty'],
    faq: [['Will a smart thermostat work with my system?', 'Most systems are compatible. If yours needs a C-wire, we add it during installation.'], ['Do air purifiers really help?', 'Whole-home purifiers capture far more particles than portable units and treat every room.'], ['Can you test my air?', 'Yes — our assessment measures particulates, VOCs and humidity.']] }
];

const REVIEWS = [
  { n: 'Sarah K.', city: 'Dublin', cat: 'cooling', s: 5, d: 'Aug 2026', t: 'AC died on the hottest day of the year. Called at 10 AM, Andre was here by 1 PM and had it running in an hour. Price was exactly what he quoted.' },
  { n: 'Tom H.', city: 'Westerville', cat: 'heating', s: 5, d: 'Jan 2026', t: 'Furnace went out at 11 PM with a newborn in the house. Ironside answered right away and had heat back on before 1 AM. Lifesavers.' },
  { n: 'Priya M.', city: 'Hilliard', cat: 'plumbing', s: 5, d: 'Oct 2026', t: 'Dana replaced our water heater the same day. She explained everything, protected the floors and left the utility room cleaner than she found it.' },
  { n: 'Greg L.', city: 'Upper Arlington', cat: 'cooling', s: 5, d: 'Jun 2026', t: 'Got three quotes for a new AC. Ironside wasn’t the cheapest but they were the only ones who did a real load calculation. House has never been this comfortable.' },
  { n: 'Linda R.', city: 'Grove City', cat: 'plumbing', s: 4, d: 'Sep 2026', t: 'Main drain backed up on a Sunday. They came out, jetted the line and showed me the camera footage of the tree roots. Fair price for a weekend call.' },
  { n: 'Marcus J.', city: 'Gahanna', cat: 'heating', s: 5, d: 'Nov 2025', t: 'Switched to a heat pump this year and our winter bill dropped by a third. Tyler walked us through the tax credit forms too.' },
  { n: 'Emily W.', city: 'Worthington', cat: 'air', s: 5, d: 'Mar 2026', t: 'Had a whole-home humidifier and smart thermostat installed. No more static shocks and I can adjust the heat from work. Super professional team.' },
  { n: 'Dave P.', city: 'Pickerington', cat: 'plumbing', s: 5, d: 'Jul 2026', t: 'Burst pipe under the kitchen sink. Plumber was here in 45 minutes. The Comfort Club discount alone paid for the membership.' },
  { n: 'Angela S.', city: 'Powell', cat: 'cooling', s: 5, d: 'May 2026', t: 'Annual tune-up was thorough — they found a weak capacitor before it failed. Love the text updates with the tech’s photo before arrival.' }
];

const AREAS = ['Columbus', 'Dublin', 'Westerville', 'Hilliard', 'Upper Arlington', 'Worthington', 'Grove City', 'Gahanna', 'Reynoldsburg', 'Pickerington', 'Powell', 'Delaware', 'Lewis Center', 'New Albany', 'Grandview Heights', 'Canal Winchester'];

const FAQ = [
  ['Do you offer 24/7 emergency service?', 'Yes. Our phones are answered by a real person 24 hours a day, 365 days a year, and an on-call technician can usually be at your home within 2 hours.'],
  ['How much does a service call cost?', 'HVAC diagnostics are $89 and plumbing service calls are $79. If you approve the repair, that fee is credited toward the work.'],
  ['Do you give upfront pricing?', 'Always. You’ll see a flat-rate price for the job before we start — no hourly billing, no surprises.'],
  ['Are your technicians licensed and insured?', 'Every technician is licensed, background-checked, drug-tested and covered by our liability insurance.'],
  ['What areas do you serve?', 'Columbus and surrounding communities within about 30 miles — see the Service Areas page or check your ZIP code.'],
  ['Do you offer financing?', 'Yes. Approved customers can choose 0% APR for 18 months or low monthly payments on new systems.'],
  ['What is the Comfort Club?', 'Our maintenance plan: two HVAC tune-ups per year, an annual plumbing inspection, 15% off repairs, priority scheduling and no overtime fees — $14.95/month.'],
  ['What warranty do you offer?', 'Every repair carries a 1-year parts & labor warranty. New system installations carry up to 12 years.']
];

const TEAM = [
  { n: 'Marcus Reyes', r: 'Founder & Master HVAC Tech', img: '1758887261865-a2b89c0f7ac5', y: 22, b: 'Started Ironside out of his garage in 2009 with one van and a promise: show up when you say you will.' },
  { n: 'Dana Kowalski', r: 'Master Plumber', img: '1687462970787-61d953508926', y: 15, b: 'Leads our plumbing team. Known for explaining every option in plain English — and leaving no mess behind.' },
  { n: 'Tyler Brooks', r: 'Heat Pump Specialist', img: '1709675155252-f00141380412', y: 9, b: 'Designs most of our heat pump systems and knows every rebate program in Central Ohio by heart.' },
  { n: 'Andre Mitchell', r: 'Senior Service Technician', img: '1787672357797-f5fa35bb0d18', y: 12, b: 'Our customers’ most-requested tech. Andre has fixed over 6,000 systems and still loves a good puzzle.' }
];
