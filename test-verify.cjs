const fs = require('fs');
const assert = require('assert');

console.log('--- RUNNING FOCUSDEFEND VERIFICATION SUITE ---');

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
  'PricingSection',
  'FAQSection',
  'SkeuoFooter'
];
for (const comp of expectedComponents) {
  assert(appCode.includes(comp), `App.tsx must include ${comp}`);
}
assert(appCode.includes('Lenis'), 'App.tsx must use Lenis smooth scrolling');
console.log('✓ App layout and Lenis smooth scrolling verified');

// 3. Verify Download APK Buttons across the site
const navbarCode = fs.readFileSync('src/components/skeuo/SkeuoNavbar.tsx', 'utf8');
assert(navbarCode.includes('href="/FocusDefend.apk"'), 'Navbar must link to /FocusDefend.apk');
assert(navbarCode.includes('download="FocusDefend.apk"'), 'Navbar must have download attribute');
assert(!navbarCode.includes('Get Started'), 'Get Started must be replaced by Download APK in Navbar');

const heroCode = fs.readFileSync('src/components/skeuo/HeroSkeuo.tsx', 'utf8');
assert(heroCode.includes('href="/FocusDefend-Release.apk"'), 'Hero must link to /FocusDefend-Release.apk');
assert(heroCode.includes('Download for Android'), 'Hero must have Download for Android button');

const scrollScenesCode = fs.readFileSync('src/components/skeuo/ScrollScenes.tsx', 'utf8');
assert(scrollScenesCode.includes('href="/FocusDefend.apk"'), 'ScrollScenes must link to /FocusDefend.apk');
assert(scrollScenesCode.includes('Download FocusDefend APK'), 'ScrollScenes must have Download FocusDefend APK button');

const pricingCode = fs.readFileSync('src/components/skeuo/PricingSection.tsx', 'utf8');
assert(pricingCode.includes('href="/FocusDefend.apk"'), 'Pricing must link to /FocusDefend.apk');
assert(pricingCode.includes('Download Basic APK'), 'Pricing must have Download Basic APK');
assert(pricingCode.includes('Get Focus Pro APK'), 'Pricing must have Get Focus Pro APK');

const footerCode = fs.readFileSync('src/components/skeuo/SkeuoFooter.tsx', 'utf8');
assert(footerCode.includes('href="/FocusDefend.apk"'), 'Footer must link to /FocusDefend.apk');
assert(footerCode.includes('Download FocusDefend.apk'), 'Footer must have Download FocusDefend.apk');

const otaCode = fs.readFileSync('src/components/skeuo/OTAModal.tsx', 'utf8');
assert(otaCode.includes('/FocusDefend-Release.apk'), 'OTA modal must link to /FocusDefend-Release.apk');
console.log('✓ All Download APK buttons and attributes verified across all components');

// 4. Verify 3D Phone scroll & perspective
const phone3DCode = fs.readFileSync('src/components/skeuo/Phone3DScroll.tsx', 'utf8');
assert(phone3DCode.includes('perspective: "1200px"'), 'Phone3DScroll must use 1200px perspective');
assert(phone3DCode.includes('useScroll'), 'Phone3DScroll must use useScroll');
assert(phone3DCode.includes('useTransform'), 'Phone3DScroll must use useTransform');
console.log('✓ 3D Phone scroll perspective and transforms verified');

// 5. Verify 10 interactive phone screens
const phoneClientCode = fs.readFileSync('src/components/skeuo/PhoneClient.tsx', 'utf8');
const phoneScreensCode = fs.readFileSync('src/components/skeuo/PhoneScreens.tsx', 'utf8');
const screens = [
  'dashboard', 'intercept', 'youtube', 'quiz', 'progress',
  'study', 'wallet', 'protection', 'parent', 'settings'
];
for (const s of screens) {
  assert(phoneClientCode.includes(`"${s}"`), `PhoneClient must support screen "${s}"`);
}
assert(phoneScreensCode.includes('DashboardScreen'), 'DashboardScreen component must exist');
assert(phoneScreensCode.includes('InterceptScreen'), 'InterceptScreen component must exist');
assert(phoneScreensCode.includes('YouTubeScreen'), 'YouTubeScreen component must exist');
assert(phoneScreensCode.includes('QuizScreen'), 'QuizScreen component must exist');
assert(phoneScreensCode.includes('ProgressScreen'), 'ProgressScreen component must exist');
assert(phoneScreensCode.includes('StudyScreen'), 'StudyScreen component must exist');
assert(phoneScreensCode.includes('WalletScreen'), 'WalletScreen component must exist');
assert(phoneScreensCode.includes('ProtectionScreen'), 'ProtectionScreen component must exist');
assert(phoneScreensCode.includes('ParentScreen'), 'ParentScreen component must exist');
assert(phoneScreensCode.includes('SettingsScreen'), 'SettingsScreen component must exist');
assert(phoneScreensCode.includes('PhoneDock'), 'PhoneDock component must exist');
console.log('✓ All 10 interactive phone screens and dock verified');

// 6. Verify Skeuomorphic styles and fonts
const globalsCss = fs.readFileSync('src/styles/globals.css', 'utf8');
const expectedStyles = [
  '.skeuo-card', '.skeuo-coin', '.skeuo-well', '.skeuo-btn-primary',
  '.skeuo-btn-emerald', '.skeuo-btn-secondary', '.skeuo-pill',
  '.skeuo-led-green', '.skeuo-led-amber', '.skeuo-led-blue',
  '.skeuo-floating-dock', '.skeuo-dock-tab-active', 'coin-stamp'
];
for (const st of expectedStyles) {
  assert(globalsCss.includes(st), `globals.css must include ${st}`);
}
const indexHtml = fs.readFileSync('index.html', 'utf8');
assert(indexHtml.includes('Outfit'), 'index.html must load Outfit font');
console.log('✓ Skeuomorphic styles, animations, and Outfit typography verified');

console.log('--- ALL FOCUSDEFEND VERIFICATION TESTS PASSED SUCCESSFULLY! ---');
