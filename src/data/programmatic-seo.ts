// Programmatic SEO Data Structure for Blooming Furniture

export interface Location {
  slug: string;
  name: string;
  region: string;
  coordinates: { lat: number; lng: number };
  localDescription: string;
  uniqueFeature: string;
  nearbyAreas: string[];
  collectionFee: string;
}

export interface Service {
  slug: string;
  name: string;
  title: string; // for H1
  shortDescription: string;
  detailedDescription: string;
  benefits: string[];
  processSteps: string[];
  averagePrice: string;
  timeframe: string;
  icon: string;
}

export interface Problem {
  slug: string;
  name: string;
  title: string;
  description: string;
  causes: string[];
  symptoms: string[];
  solutions: string[];
  preventionTips: string[];
  averageCost: string;
  urgency: 'high' | 'medium' | 'low';
}

// ========================================
// LOCATION DATA
// ========================================
export const locations: Location[] = [
  {
    slug: 'langebaan',
    name: 'Langebaan',
    region: 'West Coast',
    coordinates: { lat: -33.0893, lng: 18.0371 },
    localDescription: 'Langebaan\'s stunning lagoon and coastal lifestyle create unique challenges for furniture. Salt air, humidity, and sun exposure require specialized restoration techniques.',
    uniqueFeature: 'lagoon lifestyle',
    nearbyAreas: ['Saldanha Bay', 'Yzerfontein', 'Paternoster'],
    collectionFee: 'R200-R400 return'
  },
  {
    slug: 'saldanha-bay',
    name: 'Saldanha Bay',
    region: 'West Coast',
    coordinates: { lat: -33.0117, lng: 17.9442 },
    localDescription: 'Saldanha Bay\'s industrial port town combines coastal living with practical needs. We understand how the marine environment affects furniture and provide lasting solutions.',
    uniqueFeature: 'working port atmosphere',
    nearbyAreas: ['Langebaan', 'Vredenburg', 'Paternoster'],
    collectionFee: 'R300-R500 return'
  },
  {
    slug: 'vredenburg',
    name: 'Vredenburg',
    region: 'West Coast',
    coordinates: { lat: -32.9087, lng: 17.9896 },
    localDescription: 'As the commercial heart of the West Coast, Vredenburg residents value quality and practicality. We bring professional furniture services right to your door.',
    uniqueFeature: 'commercial hub',
    nearbyAreas: ['Saldanha Bay', 'Hopefield', 'Paternoster'],
    collectionFee: 'R300-R500 return'
  },
  {
    slug: 'paternoster',
    name: 'Paternoster',
    region: 'West Coast',
    coordinates: { lat: -32.8086, lng: 17.8894 },
    localDescription: 'Paternoster\'s charming fishing village aesthetic calls for furniture that matches its whitewashed cottages and coastal beauty. We specialize in maintaining that rustic, coastal-chic look.',
    uniqueFeature: 'fishing village charm',
    nearbyAreas: ['St Helena Bay', 'Vredenburg', 'Velddrif'],
    collectionFee: 'R350-R600 return'
  },
  {
    slug: 'velddrif',
    name: 'Velddrif',
    region: 'West Coast',
    coordinates: { lat: -32.7727, lng: 18.1647 },
    localDescription: 'Situated on the Berg River, Velddrif\'s riverside location means furniture faces moisture and humidity challenges. Our treatments protect against water damage and warping.',
    uniqueFeature: 'Berg River location',
    nearbyAreas: ['Laaiplek', 'Paternoster', 'Hopefield'],
    collectionFee: 'R350-R600 return'
  },
  {
    slug: 'hopefield',
    name: 'Hopefield',
    region: 'West Coast',
    coordinates: { lat: -33.0667, lng: 18.3500 },
    localDescription: 'Hopefield\'s rural farming heritage means many families treasure antique and heirloom furniture. We honor that history with authentic restoration techniques.',
    uniqueFeature: 'farming heritage',
    nearbyAreas: ['Vredenburg', 'Darling', 'Langebaan'],
    collectionFee: 'R400-R700 return'
  },
  {
    slug: 'yzerfontein',
    name: 'Yzerfontein',
    region: 'West Coast',
    coordinates: { lat: -33.3467, lng: 18.1592 },
    localDescription: 'Yzerfontein\'s pristine beaches and exposed coastal position demand furniture with maximum protection against salt spray and wind. We use marine-grade treatments.',
    uniqueFeature: 'pristine beaches',
    nearbyAreas: ['Darling', 'Langebaan', 'Cape Town'],
    collectionFee: 'R400-R700 return'
  },
  {
    slug: 'elands-bay',
    name: 'Elands Bay',
    region: 'West Coast',
    coordinates: { lat: -32.3033, lng: 18.3219 },
    localDescription: 'Elands Bay\'s surf culture and relaxed beach vibe inspire a unique furniture aesthetic. We create and restore pieces that match this laid-back coastal lifestyle.',
    uniqueFeature: 'surf culture',
    nearbyAreas: ['Lambert\'s Bay', 'Clanwilliam', 'Velddrif'],
    collectionFee: 'R500-R800 return'
  }
];

// ========================================
// SERVICE DATA
// ========================================
export const services: Service[] = [
  {
    slug: 'custom-furniture',
    name: 'Custom Furniture',
    title: 'Custom Furniture Design & Creation',
    shortDescription: 'Bespoke furniture designed and handcrafted specifically for your space and style',
    detailedDescription: 'Our custom furniture service brings your vision to life. From initial design consultation to final installation, we create one-of-a-kind pieces that perfectly fit your space, style, and functional needs. Each piece is handcrafted by master craftsmen using premium materials.',
    benefits: [
      'Perfect fit for your unique space',
      'Choose your own materials, colors, and finishes',
      'Higher quality than mass-produced furniture',
      'Investment pieces that last generations',
      'Reflects your personal style and taste'
    ],
    processSteps: [
      'Free design consultation to understand your vision',
      'Detailed drawings and 3D renderings for approval',
      'Material selection from our curated collection',
      'Expert craftsmanship using traditional and modern techniques',
      'Quality assurance and finishing',
      'Professional delivery and installation'
    ],
    averagePrice: 'R3,500 - R25,000+',
    timeframe: '4-8 weeks',
    icon: 'Ruler'
  },
  {
    slug: 'antique-restoration',
    name: 'Antique Restoration',
    title: 'Professional Antique Furniture Restoration',
    shortDescription: 'Preserving precious antiques and heirlooms with traditional restoration techniques',
    detailedDescription: 'Our antique restoration service honors the history and craftsmanship of vintage pieces. We use authentic techniques and materials to restore antiques while maintaining their value, character, and historical integrity.',
    benefits: [
      'Preserves antique value and authenticity',
      'Traditional restoration techniques',
      'Experience with rare and precious pieces',
      'Maintains historical integrity',
      'Family heirlooms made functional again'
    ],
    processSteps: [
      'Expert assessment and documentation',
      'Gentle cleaning and preparation',
      'Structural repairs using period-appropriate methods',
      'Careful finish restoration',
      'Authentication and value preservation',
      'Care instructions for long-term preservation'
    ],
    averagePrice: 'R2,500 - R15,000+',
    timeframe: '3-6 weeks',
    icon: 'Award'
  },
  {
    slug: 'chair-repair',
    name: 'Chair Repair & Re-riempie',
    title: 'Professional Chair Restoration & Re-riempie Services',
    shortDescription: 'Comprehensive chair repair including structural fixes and traditional re-riempie',
    detailedDescription: 'We specialize in restoring chairs of all types, from antique riempie chairs to modern dining sets. Our services include structural repairs, joint reinforcement, wood refinishing, and traditional leather strip re-riempie work.',
    benefits: [
      'Extends life of cherished chairs',
      'Traditional re-riempie craftsmanship',
      'Structural integrity restored',
      'More cost-effective than replacement',
      'Maintains comfort and functionality'
    ],
    processSteps: [
      'Assessment of structural integrity',
      'Joint repairs and reinforcement',
      'Stripping and refinishing wood frame',
      'Re-riempie with premium leather strips',
      'Final finishing and quality check',
      'Care and maintenance instructions'
    ],
    averagePrice: 'R800 - R2,500 per chair',
    timeframe: '2-4 weeks',
    icon: 'Hammer'
  }
];

// ========================================
// PROBLEM/SOLUTION DATA
// ========================================
export const problems: Problem[] = [
  {
    slug: 'salt-damaged-furniture-repair',
    name: 'Salt Damage Repair',
    title: 'Salt-Damaged Furniture Repair & Restoration',
    description: 'Coastal living takes a toll on furniture. Salt air causes corrosion, white deposits, and finish deterioration. We specialize in restoring salt-damaged furniture and applying protective treatments.',
    causes: [
      'Coastal salt air exposure',
      'Sea spray and humidity',
      'Poor ventilation in coastal homes',
      'Lack of protective finishes'
    ],
    symptoms: [
      'White crystalline deposits on wood',
      'Corroded metal hardware',
      'Cracking or bubbling finish',
      'Discoloration and staining',
      'Weakened wood structure'
    ],
    solutions: [
      'Deep cleaning to remove salt deposits',
      'Complete finish stripping and refinishing',
      'Marine-grade protective coatings',
      'Hardware replacement with rust-resistant options',
      'Structural repairs if needed'
    ],
    preventionTips: [
      'Regular dusting and cleaning',
      'Apply marine-grade finishes',
      'Keep furniture away from direct salt spray',
      'Maintain good ventilation',
      'Annual maintenance treatments'
    ],
    averageCost: 'R1,500 - R8,000',
    urgency: 'high'
  },
  {
    slug: 'sun-faded-furniture-restoration',
    name: 'Sun Fade Restoration',
    title: 'Sun-Faded & UV-Damaged Furniture Restoration',
    description: 'Sun exposure causes fading, discoloration, and wood degradation. Our restoration process brings back color and protects against future UV damage.',
    causes: [
      'Direct sunlight exposure',
      'UV radiation through windows',
      'Lack of protective finishes',
      'Years of accumulated sun damage'
    ],
    symptoms: [
      'Faded or bleached wood color',
      'Uneven color patterns',
      'Dried out and brittle wood',
      'Cracked or peeling finish',
      'Weakened wood fibers'
    ],
    solutions: [
      'Complete finish removal',
      'Wood bleaching for even color',
      'Re-staining to original or desired color',
      'UV-resistant protective finish',
      'Repair of any structural damage'
    ],
    preventionTips: [
      'Use UV-resistant window treatments',
      'Rotate furniture periodically',
      'Apply UV-protective finishes',
      'Avoid placing furniture in direct sunlight',
      'Regular conditioning treatments'
    ],
    averageCost: 'R1,200 - R6,000',
    urgency: 'medium'
  },
  {
    slug: 'water-damaged-furniture-repair',
    name: 'Water Damage Repair',
    title: 'Water-Damaged Furniture Repair & Restoration',
    description: 'Water damage can ruin furniture quickly. From white rings to warped wood, we repair all types of water damage and prevent future issues.',
    causes: [
      'Spills and standing water',
      'Leaks and flooding',
      'High humidity environments',
      'Condensation buildup'
    ],
    symptoms: [
      'White rings or dark water marks',
      'Warped or swollen wood',
      'Peeling veneer',
      'Mold or mildew growth',
      'Loosened joints and separation'
    ],
    solutions: [
      'Controlled drying to prevent further warping',
      'Stain and watermark removal',
      'Wood straightening and clamping',
      'Veneer repair or replacement',
      'Complete refinishing with water-resistant treatment'
    ],
    preventionTips: [
      'Use coasters and placemats',
      'Wipe spills immediately',
      'Apply water-resistant finishes',
      'Maintain proper humidity levels (40-55%)',
      'Regular furniture waxing'
    ],
    averageCost: 'R1,000 - R7,500',
    urgency: 'high'
  },
  {
    slug: 'scratched-furniture-repair',
    name: 'Scratch Repair',
    title: 'Scratched Furniture Repair & Refinishing',
    description: 'Scratches happen in everyday life. Whether shallow surface scratches or deep gouges, we restore your furniture to its former beauty.',
    causes: [
      'Daily wear and tear',
      'Pet claws',
      'Children\'s activities',
      'Moving and rearranging',
      'Lack of protective pads'
    ],
    symptoms: [
      'Surface scratches in finish',
      'Deep gouges exposing raw wood',
      'Multiple light scratches (hazing)',
      'Dull appearance from micro-scratches',
      'Uneven texture'
    ],
    solutions: [
      'Minor scratch touch-up with color-matched products',
      'Localized spot refinishing',
      'Complete surface sanding and refinishing',
      'Wood filler for deep scratches',
      'Protective top coat application'
    ],
    preventionTips: [
      'Use felt pads under objects',
      'Keep pet nails trimmed',
      'Use tablecloths and protective covers',
      'Lift rather than drag items',
      'Regular furniture polish application'
    ],
    averageCost: 'R600 - R4,000',
    urgency: 'low'
  },
  {
    slug: 'broken-furniture-joints-repair',
    name: 'Broken Joints Repair',
    title: 'Broken Furniture Joints & Structural Repair',
    description: 'Wobbly chairs, loose table legs, and separated joints compromise furniture safety and function. Our structural repairs restore strength and stability.',
    causes: [
      'Age and wear',
      'Dried-out glue joints',
      'Excessive weight or stress',
      'Improper assembly',
      'Environmental changes (humidity)'
    ],
    symptoms: [
      'Wobbling or instability',
      'Visible gaps in joints',
      'Creaking sounds when used',
      'Separated pieces',
      'Dangerous to use'
    ],
    solutions: [
      'Complete disassembly of affected joints',
      'Old glue removal and cleaning',
      'Joint reinforcement or replacement',
      'Professional wood glue application',
      'Clamping and proper curing time',
      'Additional reinforcement if needed'
    ],
    preventionTips: [
      'Avoid leaning back in chairs',
      'Distribute weight evenly',
      'Tighten loose screws regularly',
      'Maintain stable humidity levels',
      'Professional inspection every few years'
    ],
    averageCost: 'R800 - R3,500',
    urgency: 'high'
  },
  {
    slug: 'furniture-crack-repair',
    name: 'Crack Repair',
    title: 'Furniture Crack & Split Wood Repair',
    description: 'Wood cracks and splits can spread quickly if left untreated. We stabilize cracks, fill gaps, and match finishes for invisible repairs.',
    causes: [
      'Rapid humidity changes',
      'Natural wood movement',
      'Structural stress',
      'Age and wood drying',
      'Poor quality construction'
    ],
    symptoms: [
      'Visible cracks in wood',
      'Splitting along grain lines',
      'Widening gaps',
      'Structural weakness',
      'Potential for complete failure'
    ],
    solutions: [
      'Crack stabilization techniques',
      'Wood filler or epoxy injection',
      'Butterfly joints for structural cracks',
      'Reinforcement with hidden supports',
      'Color-matched finishing'
    ],
    preventionTips: [
      'Maintain consistent humidity (40-55%)',
      'Avoid drastic temperature changes',
      'Apply finish to all surfaces (including underside)',
      'Regular inspection for early detection',
      'Professional treatment at first signs'
    ],
    averageCost: 'R900 - R5,000',
    urgency: 'high'
  },
  {
    slug: 'peeling-furniture-finish-repair',
    name: 'Peeling Finish Repair',
    title: 'Peeling & Bubbling Furniture Finish Repair',
    description: 'Peeling finishes look terrible and leave wood unprotected. We remove old finish and apply new, durable coatings that will last for years.',
    causes: [
      'Poor surface preparation',
      'Incompatible finish layers',
      'Moisture trapped under finish',
      'UV and heat exposure',
      'Age and degradation'
    ],
    symptoms: [
      'Bubbling or blistering finish',
      'Peeling or flaking',
      'Sticky or tacky surface',
      'Uneven texture',
      'Raw wood exposure'
    ],
    solutions: [
      'Complete finish removal (stripping)',
      'Thorough surface preparation',
      'Wood conditioning if needed',
      'Professional finish application',
      'Multiple protective coats',
      'Proper curing time'
    ],
    preventionTips: [
      'Use compatible products',
      'Proper surface prep before finishing',
      'Apply finish in appropriate conditions',
      'Avoid excessive moisture exposure',
      'Regular maintenance with appropriate products'
    ],
    averageCost: 'R1,200 - R5,500',
    urgency: 'medium'
  },
  {
    slug: 'woodworm-furniture-treatment',
    name: 'Woodworm Treatment',
    title: 'Woodworm & Pest Damage Furniture Treatment',
    description: 'Woodworm and other pests can destroy valuable furniture. Our treatment eliminates pests, repairs damage, and prevents re-infestation.',
    causes: [
      'Woodworm beetle infestation',
      'High moisture content in wood',
      'Poor ventilation',
      'Untreated or compromised wood',
      'Proximity to infested wood'
    ],
    symptoms: [
      'Small round exit holes (1-2mm)',
      'Fine sawdust (frass) near furniture',
      'Visible tunnels in wood',
      'Crumbling or weakened wood',
      'Active beetles (spring/summer)'
    ],
    solutions: [
      'Professional pest assessment',
      'Chemical treatment application',
      'Fumigation if necessary',
      'Wood filler for holes',
      'Structural reinforcement',
      'Preventive treatment application'
    ],
    preventionTips: [
      'Maintain low humidity levels',
      'Good ventilation around furniture',
      'Regular inspection for early detection',
      'Treat new/old wood before bringing inside',
      'Immediate action at first signs'
    ],
    averageCost: 'R1,500 - R6,000',
    urgency: 'high'
  },
  {
    slug: 'coastal-furniture-protection',
    name: 'Coastal Protection',
    title: 'Coastal Furniture Protection & Weatherproofing',
    description: 'Living on the West Coast requires special furniture protection. Our coastal weatherproofing treatments defend against salt, sun, wind, and moisture.',
    causes: [
      'Salt air corrosion',
      'High humidity levels',
      'UV radiation',
      'Temperature fluctuations',
      'Wind and sand exposure'
    ],
    symptoms: [
      'Accelerated aging',
      'Metal hardware corrosion',
      'Finish deterioration',
      'Wood warping or splitting',
      'Fabric mildew (upholstered pieces)'
    ],
    solutions: [
      'Marine-grade protective coatings',
      'Multiple sealer layers',
      'Rust-resistant hardware replacement',
      'UV-resistant finish application',
      'Moisture barrier treatments',
      'Regular maintenance schedule'
    ],
    preventionTips: [
      'Apply coastal-specific treatments',
      'Annual maintenance treatments',
      'Keep furniture away from direct spray',
      'Use furniture covers when not in use',
      'Regular cleaning to remove salt buildup',
      'Maintain proper ventilation'
    ],
    averageCost: 'R1,000 - R4,500',
    urgency: 'medium'
  },
  {
    slug: 'furniture-refinishing-faded-wood',
    name: 'Faded Wood Refinishing',
    title: 'Faded & Discolored Wood Furniture Refinishing',
    description: 'Time, sunlight, and wear cause wood to fade and lose its luster. Our refinishing process restores rich color and brings back the natural beauty of wood.',
    causes: [
      'UV exposure over time',
      'Oxidation of wood and finish',
      'Wear from cleaning products',
      'Age and environmental factors',
      'Poor quality or degraded finish'
    ],
    symptoms: [
      'Dull, lifeless appearance',
      'Uneven color',
      'Grayish or whitish cast',
      'Loss of wood grain visibility',
      'Worn-through finish in high-traffic areas'
    ],
    solutions: [
      'Complete finish removal',
      'Wood cleaning and brightening',
      'Color restoration with stains',
      'Application of protective finishes',
      'Buffing and polishing',
      'UV-protective top coats'
    ],
    preventionTips: [
      'Keep out of direct sunlight',
      'Use UV-resistant window films',
      'Regular dusting and cleaning',
      'Periodic furniture polish application',
      'Rotate furniture placement',
      'Professional maintenance every 2-3 years'
    ],
    averageCost: 'R1,200 - R6,500',
    urgency: 'low'
  }
];
