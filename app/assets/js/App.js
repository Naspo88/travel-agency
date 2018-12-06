import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Model from './modules/model';

const mobileMenu = new MobileMenu();
new RevealOnScroll('.feature-item', "85%");
new RevealOnScroll('.testimonial', "60%");
const stickyHeader = new StickyHeader();
new Model();
