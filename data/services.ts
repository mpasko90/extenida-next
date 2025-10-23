export interface ServiceSummary {
  slug: string;
  name: string;
  description: string;
  longDescription: string;
  heroTagline: string;
  averagePrice: { min: number; max: number };
  duration: { min: number; max: number; unit: string };
  features: string[];
  seoTitle?: string;
  seoDescription?: string;
  benefits?: string[];
  process?: { step: string; detail: string }[];
  faqs?: { q: string; a: string }[];
}

// Minimal seed dataset derived from Alpha structure (can be expanded later)
export const services: ServiceSummary[] = [
  {
    slug: 'home-extensions',
    name: 'Home Extensions',
    description: 'Single and double-storey extensions engineered for light, flow and added value.',
    longDescription: 'We design and deliver single and double-storey home extensions that unlock space, natural light and modern functionality while maximising planning viability and return on investment.',
    heroTagline: 'Space, light & modern functionality for growing families',
    averagePrice: { min: 15000, max: 95000 },
    duration: { min: 8, max: 24, unit: 'weeks' },
    features: [
      'Planning & design coordination',
      'Structural alterations & steelwork',
      'High-performance insulation & glazing',
      'Kitchen integration & open-plan structuring',
      'Electrical & plumbing upgrades',
      'Finishes & project sign-off'
    ],
    seoTitle: 'Home Extensions London | Space, Light & Value | Extendia',
    seoDescription: 'Premium home extensions in South West London delivering space, light and long-term value with disciplined project management.'
  },
  {
    slug: 'loft-conversions',
    name: 'Loft Conversions',
    description: 'Transform unused roof space into functional, high-value living areas.',
    longDescription: 'From Velux to full dormer and mansard structures, our loft conversions create bright, comfortable new bedrooms, offices and living zones with compliant structural upgrades and thermal performance.',
    heroTagline: 'Elevate unused roof volume into purposeful living space',
    averagePrice: { min: 20000, max: 65000 },
    duration: { min: 6, max: 18, unit: 'weeks' },
    features: [
      'Velux, dormer & mansard options',
      'Structural strengthening & floor systems',
      'Natural light optimisation',
      'Fire & building regulation compliance',
      'Integrated storage solutions',
      'Heating & insulation upgrades'
    ],
    seoTitle: 'Loft Conversions London | Add Space & Value | Extendia',
    seoDescription: 'Velux, dormer and mansard loft conversions engineered for structural integrity, comfort and value across South West London.'
  },
  {
    slug: 'house-renovations',
    name: 'House/Flat Renovations',
    description: 'Whole-home and flat refurbishments: reconfiguration, services upgrades and premium finishes.',
    longDescription: 'We deliver comprehensive house and flat renovations that balance structural reconfiguration, services upgrades (electrical, plumbing, HVAC), acoustic and thermal improvements, and cohesive interior finishes. From layout optimisation and steelwork to waterproofing, tiling, joinery and decorating, we manage every stage for predictable quality and programme.',
    heroTagline: 'Coordinated structural, services and finish upgrades — all under one roof',
    averagePrice: { min: 15000, max: 120000 },
    duration: { min: 4, max: 24, unit: 'weeks' },
    features: [
      'Layout reconfiguration & structural openings',
      'Rewiring, plumbing & heating upgrades',
      'Acoustic & thermal performance improvements',
      'Bathroom & kitchen refurbishment integration',
      'Tiling, flooring & decorating',
      'Project management & building control liaison'
    ],
    seoTitle: 'House & Flat Renovations London | Complete Refurbishments | Extendia',
    seoDescription: 'End-to-end house and flat renovations: structural reconfiguration, services upgrades and premium finishes delivered across South West London.'
  },
  {
    slug: 'bathroom-renovations',
    name: 'Bathroom Renovations',
    description: 'Modern, durable bathrooms with optimised layouts and premium finishes.',
    longDescription: 'We deliver bathroom refurbishments and reconfigurations with careful attention to moisture control, ventilation, specification detail and long-term maintainability.',
    heroTagline: 'Refined performance & comfort in every square metre',
    averagePrice: { min: 8000, max: 28000 },
    duration: { min: 2, max: 8, unit: 'weeks' },
    features: [
      'Layout reconfiguration',
      'Underfloor heating & ventilation',
      'Premium tiling & waterproofing',
      'Custom cabinetry & storage',
      'Lighting & electrical upgrades',
      'Quality fittings & finish management'
    ],
    seoTitle: 'Bathroom Renovations London | Design, Fit & Finish | Extendia',
    seoDescription: 'High-quality bathroom renovations with waterproofing, ventilation, heating and premium finishes delivered across South West London.'
  },
  {
    slug: 'kitchen-renovations',
    name: 'Kitchen Renovations',
    description: 'Design-led kitchen refurbishments enhancing layout, light and daily workflow.',
    longDescription: 'Our kitchen renovations unify structure, services and finishes to create ergonomic, light‑rich cooking and social zones. We optimise circulation, storage density and natural illumination while coordinating structural openings, ventilation and power for long-term adaptability.',
    heroTagline: 'Ergonomic, light‑filled kitchens engineered for daily performance',
    averagePrice: { min: 10000, max: 65000 },
    duration: { min: 3, max: 14, unit: 'weeks' },
    features: [
      'Layout & workflow optimisation',
      'Structural openings & steel coordination',
      'Ventilation & extraction design',
      'Custom cabinetry & storage solutions',
      'Lighting layering & smart controls',
      'Premium surfaces & appliance integration'
    ],
    benefits: [
      'Improved cooking & social flow',
      'Higher resale & lifestyle value',
      'Future‑ready services & ventilation',
      'Enhanced natural + task lighting'
    ],
    process: [
      { step: 'Brief & Survey', detail: 'Assess existing structure, services routes, appliance schedule and natural light potential.' },
      { step: 'Design Development', detail: 'Refine layout, structural openings, storage strategy, lighting & extraction.' },
      { step: 'Pre‑Construction', detail: 'Confirm specifications, order long lead items & finalise programme.' },
      { step: 'Shell & First Fix', detail: 'Execute openings, steels, ventilation ducting, electrical & plumbing rough‑in.' },
      { step: 'Installation', detail: 'Cabinetry, worktops, lighting, appliance integration & second fix.' },
      { step: 'Commission & Handover', detail: 'Final adjustments, performance checks & maintenance guidance.' }
    ],
    faqs: [
      { q: 'Do you supply the kitchen furniture?', a: 'We can work with client‑supplied or partner-manufacturer cabinetry; we coordinate installation tolerances and services alignment.' },
      { q: 'Typical functional upgrade examples?', a: 'Opening structural walls to connect dining, adding island prep zones, dedicated pantry storage and layered task + ambient lighting.' }
    ],
    seoTitle: 'Kitchen Renovations London | Layout, Light & Workflow | Extendia',
    seoDescription: 'Design-led kitchen renovations: structural openings, ventilation, ergonomic layout, custom storage and premium finish integration across South West London.'
  },
  // (Deprecated 'kitchen-installations' service removed – consolidated under 'kitchen-renovations')
  {
    slug: 'architectural-design',
    name: 'Architectural Design',
    description: 'Planning-led residential design balancing form, daylight, buildability & compliance.',
    longDescription: 'Our architectural design service translates household objectives into spatial strategies, technical drawings and planning submissions that optimise daylight, flow, thermal efficiency and build cost certainty.',
    heroTagline: 'Clarity, compliance & constructability from concept to submission',
    averagePrice: { min: 3000, max: 18000 },
    duration: { min: 3, max: 12, unit: 'weeks' },
    features: [
      'Measured survey & feasibility',
      'Concept & option development',
      'Planning & permitted development strategy',
      'Technical drawings for pricing',
      'Regulatory & building control liaison',
      'Specification & value engineering'
    ],
    benefits: [
      'Reduced planning risk',
      'Optimised daylight & spatial efficiency',
      'Cost & build methodology forethought',
      'Cleaner contractor tendering'
    ],
    process: [
      { step: 'Survey & Brief', detail: 'Capture dimensions, constraints & functional priorities.' },
      { step: 'Concept Options', detail: 'Iterate massing, circulation, openings & elevation language.' },
      { step: 'Planning Package', detail: 'Prepare drawings, statements & compliance documents.' },
      { step: 'Technical Refinement', detail: 'Detail structural zones, insulation, drainage & services.' },
      { step: 'Issue & Support', detail: 'Submit or support submission; answer authority queries.' }
    ],
    faqs: [
      { q: 'Can you work with my existing architect?', a: 'Yes, we can provide peer review, structural coordination or value engineering alongside external designers.' },
      { q: 'Do you handle conservation area constraints?', a: 'We assess heritage impact early and adapt massing, materials and detailing to align with local character guidance.' }
    ],
    seoTitle: 'Residential Architectural Design London | Planning & Technical | Extendia',
    seoDescription: 'Planning-led residential architectural design: surveys, concepts, planning submissions & technical detailing for efficient build outcomes.'
  },
  {
    slug: 'structural-engineering',
    name: 'Structural Engineering',
    description: 'Pragmatic structural design integrating architecture, build cost & programme.',
    longDescription: 'We engineer steel, timber and masonry alterations with efficient load paths, coordinated service penetrations and build methodology in mind, reducing on‑site rework and cost variability.',
    heroTagline: 'Efficient load paths, coordinated penetrations, fewer surprises',
    averagePrice: { min: 1200, max: 9500 },
    duration: { min: 1, max: 6, unit: 'weeks' },
    features: [
      'Structural surveys & calculations',
      'Steel & timber beam design',
      'Load assessment & deflection checks',
      'Temporary works guidance',
      'Connection & padstone detailing',
      'On-site inspection & sign-off'
    ],
    benefits: [
      'Reduced overspecification / material waste',
      'Cleaner service routing',
      'Programme predictability',
      'Regulatory assurance'
    ],
    process: [
      { step: 'Information Review', detail: 'Analyse architectural intent & survey data.' },
      { step: 'Preliminary Sizing', detail: 'Select structural scheme & members for coordination.' },
      { step: 'Detailed Calculations', detail: 'Finalise beams, bearings, connections & lateral stability.' },
      { step: 'Issue Pack', detail: 'Provide marked drawings, calc sheets & supporting notes.' },
      { step: 'Site Support', detail: 'Answer RFIs, inspect works & adjust if site variances arise.' }
    ],
    faqs: [
      { q: 'Do you provide calculations for building control?', a: 'Yes, we issue full calculation packs and are available for clarification with control officers.' },
      { q: 'Can you value engineer existing designs?', a: 'We frequently refine over-specified members to reduce steel weight and fabrication complexity while preserving performance.' }
    ],
    seoTitle: 'Structural Engineering London | Efficient Residential Design | Extendia',
    seoDescription: 'Residential structural engineering: calculations, beam design & site support focused on efficiency and buildability.'
  },
  {
    slug: 'planning-permission',
    name: 'Planning Permission Support',
    description: 'Strategic guidance & documentation to maximise approval probability.',
    longDescription: 'We evaluate planning policy, site constraints and precedent to position your application for favourable review, minimising redesign cycles and time risk.',
    heroTagline: 'Policy-aware strategies that accelerate approvals',
    averagePrice: { min: 1500, max: 7500 },
    duration: { min: 2, max: 10, unit: 'weeks' },
    features: [
      'Policy & precedent review',
      'Design refinement for compliance',
      'Application document assembly',
      'Neighbour & stakeholder considerations',
      'Response handling & amendments',
      'Discharge of conditions guidance'
    ],
    benefits: [
      'Higher first-time approval odds',
      'Reduced iteration & delay',
      'Transparent authority dialogue',
      'Better risk forecasting'
    ],
    process: [
      { step: 'Feasibility', detail: 'Assess policy constraints & site data for viability.' },
      { step: 'Option Tuning', detail: 'Shape massing & fenestration to policy envelopes.' },
      { step: 'Submission Pack', detail: 'Compile forms, drawings, statements & visuals.' },
      { step: 'Liaison', detail: 'Engage planners, clarify queries & refine if needed.' },
      { step: 'Decision & Conditions', detail: 'Track decision & outline discharge roadmap.' }
    ],
    faqs: [
      { q: 'Approval timeframe?', a: 'Standard householder applications typically 8 weeks; we plan buffer for queries or committee escalation.' },
      { q: 'Difference vs permitted development?', a: 'Permitted development relies on defined dimensional criteria; planning permission evaluates design, context & amenity impacts.' }
    ],
    seoTitle: 'Planning Permission Support London | Strategy & Submission | Extendia',
    seoDescription: 'Strategic planning permission guidance & submission packages increasing first-time approval probability.'
  },
  {
    slug: 'project-management',
    name: 'Project Management',
    description: 'Transparent coordination of programme, cost, quality & risk across residential builds.',
    longDescription: 'Our project management frameworks integrate schedule control, cost surveillance, change management and quality assurance to keep residential construction predictable and communicative.',
    heroTagline: 'Clarity, cost control & disciplined delivery cadence',
    averagePrice: { min: 2500, max: 18000 },
    duration: { min: 4, max: 52, unit: 'weeks' },
    features: [
      'Programme development & tracking',
      'Cost reporting & change control',
      'Risk register & mitigation',
      'Quality inspections & snag control',
      'Stakeholder & authority coordination',
      'Handover documentation & close-out'
    ],
    benefits: [
      'Reduced overruns & scope creep',
      'Improved decision velocity',
      'Transparent financial visibility',
      'Higher built quality consistency'
    ],
    process: [
      { step: 'Initiation', detail: 'Define scope, stakeholders, success metrics & constraints.' },
      { step: 'Planning', detail: 'Develop programme, budget baseline & risk register.' },
      { step: 'Execution', detail: 'Coordinate trades, monitor progress & manage changes.' },
      { step: 'Monitoring', detail: 'Track KPIs, cost drift & quality benchmarks.' },
      { step: 'Close-out', detail: 'Snag resolution, documentation & lessons learned.' }
    ],
    faqs: [
      { q: 'How do you bill project management?', a: 'Typically a hybrid fixed + milestone structure tied to programme phases, ensuring alignment on deliverables.' },
      { q: 'Do you take over from another PM mid-project?', a: 'Yes, after a structured health audit & documentation handover to stabilise programme and risk profile.' }
    ],
    seoTitle: 'Construction Project Management London | Cost & Quality Control | Extendia',
    seoDescription: 'Residential project management: programme, cost and quality coordination delivering predictable outcomes.'
  },
  {
    slug: 'interior-fit-out',
    name: 'Interior Fit Out',
    description: 'Precision interior packages aligning finishes, joinery, lighting & services.',
    longDescription: 'We orchestrate cohesive interior fit outs that integrate bespoke joinery, acoustic performance, lighting layers, climate comfort and durable surface specification.',
    heroTagline: 'Finish cohesion & functional comfort delivered systematically',
    averagePrice: { min: 10000, max: 85000 },
    duration: { min: 4, max: 20, unit: 'weeks' },
    features: [
      'Custom joinery & storage',
      'Acoustic & thermal upgrades',
      'Lighting design & control',
      'Surface & material specification',
      'Smart home & AV coordination',
      'Final detailing & sign-off'
    ],
    benefits: [
      'Improved daily usability',
      'Elevated visual consistency',
      'Longevity through material choice',
      'Integrated technology readiness'
    ],
    process: [
      { step: 'Concept Alignment', detail: 'Define interior intent, palette & functional priorities.' },
      { step: 'Detail Development', detail: 'Produce joinery, lighting & material schedules.' },
      { step: 'Procurement', detail: 'Sequence lead items & coordinate supplier logistics.' },
      { step: 'Installation', detail: 'Execute fit out with staged quality checks.' },
      { step: 'Completion', detail: 'Final detailing, protection removal & client orientation.' }
    ],
    faqs: [
      { q: 'Can we phase the fit out?', a: 'Yes, we structure scope into logical zones or trade bundles to align with budget release.' },
      { q: 'Do you supply furnishings?', a: 'We coordinate built-ins and fixed elements; loose furniture procurement can be supported via partners.' }
    ],
    seoTitle: 'Interior Fit Out London | Integrated Joinery & Finishes | Extendia',
    seoDescription: 'Integrated interior fit out services combining joinery, lighting, surfaces and smart readiness for cohesive living environments.'
  },
  {
    slug: 'basement-conversions',
    name: 'Basement Conversions',
    description: 'Structural excavation & waterproofed lower ground living expansion.',
    longDescription: 'Our basement conversions deliver dry, structurally secure and naturally lit lower ground spaces through robust waterproofing design, ventilation planning and precise temporary works coordination.',
    heroTagline: 'Secure, dry & liveable lower ground transformations',
    averagePrice: { min: 45000, max: 250000 },
    duration: { min: 16, max: 52, unit: 'weeks' },
    features: [
      'Feasibility & soil assessment liaison',
      'Temporary works & underpin sequencing',
      'Waterproofing design (Type A/B/C)',
      'Drainage & sump integration',
      'Mechanical ventilation & dehumidification',
      'Egress & natural light solutions'
    ],
    benefits: [
      'High-value floor area gain',
      'Moisture & structural risk mitigation',
      'Multi-functional layout potential',
      'Future services flexibility'
    ],
    process: [
      { step: 'Feasibility & Desk Study', detail: 'Review constraints, soils info & planning parameters.' },
      { step: 'Design & Engineering', detail: 'Coordinate structural scheme, waterproofing & ventilation.' },
      { step: 'Excavation & Temporary Works', detail: 'Managed underpinning / propping maintaining stability.' },
      { step: 'Shell & Waterproofing', detail: 'Apply membranes / integral systems & drainage details.' },
      { step: 'Fit Out & Commission', detail: 'Services, finishes & performance validation.' }
    ],
    faqs: [
      { q: 'Will a basement need planning permission?', a: 'Often yes for excavation or external alterations; we assess policy and advise early on risk and timing.' },
      { q: 'How do you control damp risk?', a: 'Layered waterproofing strategy (e.g. combined Type A + C), ventilation design and moisture monitoring during cure.' }
    ],
    seoTitle: 'Basement Conversions London | Waterproofed Structural Expansion | Extendia',
    seoDescription: 'Basement conversions delivering secure, dry and naturally lit lower ground space with engineered waterproofing and structural control.'
  }
];

export function getServiceBySlug(slug: string) {
  return services.find(s => s.slug === slug);
}
