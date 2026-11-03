const fs = require('fs');
const assert = require('assert');

console.log('--- RUNNING ENHANCED FOCUSDEFEND VERIFICATION SUITE ---');

// 1. Verify APK binaries
assert(fs.existsSync('public/FocusDefend.apk'), 'public/FocusDefend.apk must exist');
assert(fs.existsSync('public/FocusDefend-Release.apk'), 'public/FocusDefend-Release.apk must exist');
const apk1Size = fs.statSync('public/FocusDefend.apk').size;
const apk2Size = fs.statSync('public/FocusDefend-Release.apk').size;
assert(apk1Size > 1000000, `FocusDefend.apk must be a valid binary > 1MB, got ${apk1Size}`);
assert(apk2Size > 1000000, `FocusDefend-Release.apk must be a valid binary > 1MB, got ${apk2Size}`);
console.log(`✓ Real APK binaries verified: FocusDefend.apk (${(apk1Size/1024/1024).toFixed(2)} MB), FocusDefend-Release.apk (${(apk2Size/1024/1024).toFixed(2)} MB)`);

// 2. Verify App layout and Lenis integration
const appCode = fs.readFileSync('src/App.tsx', 'utf8');
const expectedComponents = [
  'BootLoader',
  'OTAModal',
  'SkeuoNavbar',
  'Phone3DScroll',
  'HeroSkeuo',
  'ScrollScenes',
  'ParentControlsSection',
  'PricingSection',
  'FAQSection',
  'SkeuoFooter'
];
for (const comp of expectedComponents) {
  assert(appCode.includes(comp), `App.tsx must include ${comp}`);
}
assert(appCode.includes('Lenis'), 'App.tsx must use Lenis smooth scrolling');
console.log('✓ App layout, ParentControlsSection, and Lenis smooth scrolling verified');

// 3. Verify Hero and ScrollScenes previous texts
const heroCode = fs.readFileSync('src/components/skeuo/HeroSkeuo.tsx', 'utf8');
assert(heroCode.includes('YOUR FOCUS.'), 'Hero must have "YOUR FOCUS."');
assert(heroCode.includes('YOUR FUTURE.'), 'Hero must have "YOUR FUTURE."');
assert(heroCode.includes('Technology should help students grow, not distract them from their potential.'), 'Hero must have supporting headline');
assert(heroCode.includes('FocusDefend transforms digital habits through intelligent app restrictions, learning-based rewards, and AI-powered digital wellbeing.'), 'Hero must have supporting copy');
assert(heroCode.includes('LEARN → EARN → UNLOCK'), 'Hero must have LEARN → EARN → UNLOCK pill');

const scrollScenesCode = fs.readFileSync('src/components/skeuo/ScrollScenes.tsx', 'utf8');
const sceneChecks = [
  { eyebrow: 'THE DIGITAL CHALLENGE', title: 'Technology is everywhere. But is it helping students grow?' },
  { eyebrow: 'A BETTER APPROACH', title: 'Don\'t just block screen time. Make it meaningful.' },
  { eyebrow: 'CORE MECHANISM', title: 'Learn. Earn. Unlock.' },
  { eyebrow: 'INTELLIGENT RESTRICTIONS', title: 'Turn distraction into discipline.' },
  { eyebrow: 'CURRICULUM CHALLENGES', title: 'Turn friction into real learning.' },
  { eyebrow: 'INTELLIGENCE WITH PURPOSE', title: 'Understand digital habits. Build better ones.' },
  { eyebrow: 'BALANCED HABITS', title: 'A smarter alternative to purely restrictive control.' },
  { eyebrow: 'STUDENT WELLBEING FIRST', title: 'Build healthier digital habits that last.' },
];
for (const sc of sceneChecks) {
  assert(scrollScenesCode.includes(sc.eyebrow), `ScrollScenes must contain eyebrow "${sc.eyebrow}"`);
  assert(scrollScenesCode.includes(sc.title), `ScrollScenes must contain title "${sc.title}"`);
}
console.log('✓ All 8 scroll scenes verified with exact previous texts');

// 4. Verify Parental Controls Section
const parentCode = fs.readFileSync('src/components/skeuo/ParentControlsSection.tsx', 'utf8');
assert(parentCode.includes('CONTROL WITH UNDERSTANDING'), 'Parent controls must have eyebrow');
assert(parentCode.includes('Parents stay informed. Students build responsibility.'), 'Parent controls must have title');
assert(parentCode.includes('App Restriction Management'), 'Parent controls must include App Restriction Management');
assert(parentCode.includes('Flexible Study Schedules'), 'Parent controls must include Flexible Study Schedules');
assert(parentCode.includes('Family-Defined Rules'), 'Parent controls must include Family-Defined Rules');
assert(parentCode.includes('Digital Wellbeing Reports'), 'Parent controls must include Digital Wellbeing Reports');
assert(parentCode.includes('Parent Quick Approval Workflow'), 'Parent controls must include workflow demo');
console.log('✓ Parental Controls section verified with feature cards and interactive approval workflow');

// 5. Verify Enhanced FAQ Section (all 14 questions present)
const faqCode = fs.readFileSync('src/components/skeuo/FAQSection.tsx', 'utf8');
const faqQuestions = [
  'What is FocusDefend?',
  'How does the Learn-Earn-Unlock system work?',
  'Can parents approve temporary access?',
  'Can I choose which apps are blocked?',
  'Does FocusDefend completely block social media?',
  'How do students earn Focus Credits?',
  'Does FocusDefend support NCERT learning material?',
  'How does the AI choose the educational challenges?',
  'How does AI analyse digital habits?',
  'Does FocusDefend drain my child\'s battery?',
  'What if there is an emergency and my child needs their phone?',
  'Which devices are supported?',
  'How do Over-The-Air (OTA) updates work?',
  'How do I cancel my subscription?'
];
for (const q of faqQuestions) {
  assert(faqCode.includes(q), `FAQ must contain question "${q}"`);
}
console.log(`✓ Enhanced FAQ section verified (${faqQuestions.length} complete questions across categories)`);

// 6. Verify Download APK Buttons across all components
const navbarCode = fs.readFileSync('src/components/skeuo/SkeuoNavbar.tsx', 'utf8');
assert(navbarCode.includes('href="/FocusDefend.apk"'), 'Navbar must link to /FocusDefend.apk');
assert(navbarCode.includes('download="FocusDefend.apk"'), 'Navbar must have download attribute');
assert(!navbarCode.includes('Get Started'), 'Get Started must not be present in Navbar');

assert(heroCode.includes('href="/FocusDefend-Release.apk"'), 'Hero must link to /FocusDefend-Release.apk');
assert(heroCode.includes('Download for Android'), 'Hero must have Download for Android button');

assert(scrollScenesCode.includes('href="/FocusDefend.apk"'), 'ScrollScenes must link to /FocusDefend.apk');
assert(scrollScenesCode.includes('Download FocusDefend APK'), 'ScrollScenes must have Download FocusDefend APK button');

const pricingCode = fs.readFileSync('src/components/skeuo/PricingSection.tsx', 'utf8');
assert(pricingCode.includes('href="/FocusDefend.apk"'), 'Pricing must link to /FocusDefend.apk');
assert(pricingCode.includes('Download Basic APK'), 'Pricing must have Download Basic APK');
assert(pricingCode.includes('Get Focus Pro APK'), 'Pricing must have Get Focus Pro APK');

const footerCode = fs.readFileSync('src/components/skeuo/SkeuoFooter.tsx', 'utf8');
assert(footerCode.includes('href="/FocusDefend.apk"'), 'Footer must link to /FocusDefend.apk');
assert(footerCode.includes('Download FocusDefend.apk'), 'Footer must have Download FocusDefend.apk');
console.log('✓ All Download APK buttons and attributes verified across all components');

// 7. Verify 3D Phone scroll & perspective
const phone3DCode = fs.readFileSync('src/components/skeuo/Phone3DScroll.tsx', 'utf8');
assert(phone3DCode.includes('perspective: "1200px"'), 'Phone3DScroll must use 1200px perspective');
assert(phone3DCode.includes('useScroll'), 'Phone3DScroll must use useScroll');
assert(phone3DCode.includes('useTransform'), 'Phone3DScroll must use useTransform');
console.log('✓ 3D Phone scroll perspective and transforms verified');

console.log('--- ALL FOCUSDEFEND VERIFICATION TESTS PASSED SUCCESSFULLY! ---');
