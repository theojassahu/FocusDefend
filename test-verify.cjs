const fs = require('fs');
const assert = require('assert');

console.log('--- RUNNING RIGOROUS TASK VERIFICATION SUITE ---');

// 1. Verify App.tsx narrative order
const appContent = fs.readFileSync('src/App.tsx', 'utf8');
const expectedOrder = [
  'AnnouncementBar',
  'Navbar',
  'Hero',
  'ProblemSection',
  'SolutionSection',
  'HowItWorks',
  'ProductShowcase',
  'AISection',
  'ParentControls',
  'LearningSection',
  'TrustSection',
  'FAQ',
  'CTASection',
  'Footer'
];
let lastIdx = -1;
for (const comp of expectedOrder) {
  const idx = appContent.indexOf('<' + comp);
  assert(idx !== -1, `${comp} must be rendered in App.tsx`);
  assert(idx > lastIdx, `${comp} must appear in strict narrative order`);
  lastIdx = idx;
}
console.log('✓ Section narrative sequence strictly verified (13/13 sections in order)');

// 2. Verify Exact Headlines
const checks = [
  { file: 'src/components/Hero.tsx', text: 'YOUR FOCUS.' },
  { file: 'src/components/Hero.tsx', text: 'YOUR FUTURE.' },
  { file: 'src/components/Hero.tsx', text: 'Technology should help students grow, not distract them from their potential.' },
  { file: 'src/components/Hero.tsx', text: 'FocusDefend transforms digital habits through intelligent app restrictions, learning-based rewards, and AI-powered digital wellbeing.' },
  { file: 'src/components/Hero.tsx', text: 'Explore FocusDefend' },
  { file: 'src/components/Hero.tsx', text: 'Discover How It Works' },
  { file: 'src/sections/ProblemSection.tsx', text: 'THE DIGITAL CHALLENGE' },
  { file: 'src/sections/ProblemSection.tsx', text: 'Technology is everywhere. But is it helping students grow?' },
  { file: 'src/sections/SolutionSection.tsx', text: 'A BETTER APPROACH' },
  { file: 'src/sections/SolutionSection.tsx', text: 'Don\'t just block screen time. Make it meaningful.' },
  { file: 'src/components/HowItWorks.tsx', text: 'Learn. Earn. Unlock.' },
  { file: 'src/components/ProductShowcase.tsx', text: 'Meet your new digital wellbeing companion.' },
  { file: 'src/sections/AISection.tsx', text: 'INTELLIGENCE WITH PURPOSE' },
  { file: 'src/sections/AISection.tsx', text: 'Understand digital habits. Build better ones.' },
  { file: 'src/components/ParentControls.tsx', text: 'CONTROL WITH UNDERSTANDING' },
  { file: 'src/components/ParentControls.tsx', text: 'Parents stay informed. Students build responsibility.' },
  { file: 'src/sections/LearningSection.tsx', text: 'A smarter alternative to purely restrictive screen-time management.' },
  { file: 'src/sections/TrustSection.tsx', text: 'Student wellbeing comes first.' },
  { file: 'src/components/FAQ.tsx', text: 'Frequently Asked Questions' },
  { file: 'src/components/CTASection.tsx', text: 'Your time is valuable.' },
  { file: 'src/components/CTASection.tsx', text: 'Make every minute count.' },
  { file: 'src/components/CTASection.tsx', text: 'Build healthier digital habits and turn learning into a more rewarding experience with FocusDefend.' },
  { file: 'src/components/CTASection.tsx', text: 'Explore FocusDefend' },
  { file: 'src/components/CTASection.tsx', text: 'Get in Touch' }
];

for (const { file, text } of checks) {
  const content = fs.readFileSync(file, 'utf8');
  assert(content.includes(text), `Expected "${text}" in ${file}`);
}
console.log('✓ All 24 mandatory headlines and copy requirements verified');

// 3. Verify Comparison Section Exact Headers & Pairs
const featuresContent = fs.readFileSync('src/data/features.ts', 'utf8');
const comparisonSectionContent = fs.readFileSync('src/sections/LearningSection.tsx', 'utf8');
assert(comparisonSectionContent.includes('Traditional restrictive approach'));
assert(comparisonSectionContent.includes('FocusDefend approach'));
assert(featuresContent.includes('Primarily blocks access'));
assert(featuresContent.includes('Encourages responsible usage'));
assert(featuresContent.includes('Focuses on restriction'));
assert(featuresContent.includes('Combines learning and restriction'));
assert(featuresContent.includes('Limited learning incentives'));
assert(featuresContent.includes('Learning-based Focus Credits'));
assert(featuresContent.includes('Screen-time management'));
assert(featuresContent.includes('Digital wellbeing development'));
assert(featuresContent.includes('Fixed control experience'));
assert(featuresContent.includes('Guided student participation'));
console.log('✓ Section 9 comparison table columns and 5 pairs verified');

// 4. Verify FAQ items count & questions
const faqContent = fs.readFileSync('src/data/faq.ts', 'utf8');
const expectedQuestions = [
  'What is FocusDefend?',
  'How does the Learn-Earn-Unlock system work?',
  'Does FocusDefend completely block social media?',
  'How do students earn Focus Credits?',
  'How does AI analyse digital habits?',
  'Can parents approve temporary access?',
  'Does FocusDefend support NCERT learning material?',
  'Which devices are supported?'
];
for (const q of expectedQuestions) {
  assert(faqContent.includes(q), `FAQ must contain question: ${q}`);
}
console.log('✓ All 8 mandatory FAQ questions verified');

// 5. Verify absence of invented statistics / false claims
assert(!fs.readFileSync('src/components/Hero.tsx', 'utf8').includes('3.8 hrs/day'), 'Must not invent 3.8 hrs/day');
assert(!fs.readFileSync('src/components/Hero.tsx', 'utf8').includes('< 2% Impact'), 'Must not invent < 2% Impact claim');
assert(!fs.readFileSync('src/components/Footer.tsx', 'utf8').includes('Sub-2% Battery'), 'Must not invent Sub-2% Battery claim');
assert(!fs.readFileSync('src/data/faq.ts', 'utf8').includes('cross-platform web dashboard'), 'Must not invent cross-platform web dashboard');
console.log('✓ Absence of invented statistics and unverified claims verified');

// 6. Verify ProductShowcase adheres to genuine screenshot / placeholder policy
const showcaseContent = fs.readFileSync('src/components/ProductShowcase.tsx', 'utf8');
assert(showcaseContent.includes('screenshotFile'), 'Must track screenshot asset file');
assert(showcaseContent.includes('Genuine Screenshot Required') || showcaseContent.includes('Awaiting authentic production screen capture'), 'Must have explicit placeholder identification');
assert(!showcaseContent.includes('Redeem Credits for Apps'), 'Must not contain fabricated app button');
console.log('✓ ProductShowcase compliance with Section 6 screenshot/placeholder policy verified');

console.log('ALL VERIFICATION CHECKS PASSED SUCCESSFULLY!');
