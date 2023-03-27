/* app-minimal dummy data list :-
- Key Features
- Choose us
- Wallet Experience
- Features data
- Secure Transaction
- Footer Data
*/

/* ------------------------------------ */
// Menu data section
/* ------------------------------------ */

export const MENU_ITEMS = [{
    label: 'Home', path: '#banner_section', offset: '70',
}, {
    label: 'Feature', path: '#feature_section', offset: '70',
}, {
    label: 'Service', path: '#service_section', offset: '70',
}, {
    label: 'Dashboard', path: '#dashboard_section', offset: '70',
}, {
    label: 'Pricing', path: '#pricing_section', offset: '70',
}, {
    label: 'Blog', path: '#blog_section', offset: '70',
},];

/* ------------------------------------ */
// Banner data section
/* ------------------------------------ */

import bannerMoc from 'common/assets/image/app-minimal/banner-moc-1-1.png';

export const BannerData = {
    image: bannerMoc,
    title: 'Transform your fleet with custom vehicle branding solutions',
    text: '\n' + '\n' + 'Printajo is the most trusted signage and vehicle branding company in Dubai. We offer a wide range of services and products for signage, vehicle branding and wrap in Dubai, UAE. All our materials are manufactured from top quality materials, ensuring the long lasting longevity of your brand.',
    tagline: '*No Credit card required',
    button: {
        link: '#', label: 'Try it for free',
    },
};

/* ------------------------------------ */
// Key Features data section
/* ------------------------------------ */
import keyFeature1 from 'common/assets/image/app-minimal/key-feature/key-feature-1.svg';
import keyFeature2 from 'common/assets/image/app-minimal/key-feature/key-feature-2.svg';
import keyFeature3 from 'common/assets/image/app-minimal/key-feature/key-feature-3.svg';
import keyFeature4 from 'common/assets/image/app-minimal/key-feature/key-feature-4.svg';

export const keyFeatures = {
    title: 'Business start with great features',
    description: 'Build an incredible workplace and grow your business with Gusto’s all-in-one platform with amazing contents.',
    features: [{
        id: 1,
        icon: keyFeature1,
        title: 'Analytics Report',
        description: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    }, {
        id: 2,
        icon: keyFeature2,
        title: 'User Customization',
        description: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    }, {
        id: 3,
        icon: keyFeature3,
        title: 'Help & Support',
        description: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    }, {
        id: 4,
        icon: keyFeature4,
        title: 'Use Accessibility',
        description: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    },],
};

/* ------------------------------------ */
// Choose us data section
/* ------------------------------------ */
import chooseThumb from 'common/assets/image/app-minimal/choose-thumbnail.jpg';

export const chooseUs = {
    title: 'Why you choose Wallet app for your daily use?',
    description: 'Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.',
    thumbnail: chooseThumb,
    features: [{
        id: 1,
        title: 'Easy to use application',
        description: 'We’re driven beyond just finishing the projects. We want to find solutions.',
    }, {
        id: 2,
        title: 'Transfer to touch share',
        description: 'We’re driven beyond just finishing the projects. We want to find solutions.',
    }, {
        id: 3,
        title: '100% Reliable with Privacy',
        description: 'We’re driven beyond just finishing the projects. We want to find solutions.',
    },],
};

/* ------------------------------------ */
// Wallet Experience data section
/* ------------------------------------ */
import walletThumb from 'common/assets/image/app-minimal/wallet-thumbnail.jpg';
import walletBubble1 from 'common/assets/image/app-minimal/wallet-thumbnail-bubble-1.png';
import walletBubble2 from 'common/assets/image/app-minimal/wallet-thumbnail-bubble-2.png';
import walletBubble3 from 'common/assets/image/app-minimal/wallet-thumbnail-bubble-3.png';

import walletExperience1 from 'common/assets/image/app-minimal/wallet-experience/experience-1.svg';
import walletExperience2 from 'common/assets/image/app-minimal/wallet-experience/experience-2.svg';

export const walletExperience = {
    title: 'Take your wallet experience to new ultimate level',
    description: 'Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.',
    image: {
        thumb: walletThumb, bubble: [{
            image: walletBubble1,
        }, {
            image: walletBubble2,
        }, {
            image: walletBubble3,
        },],
    },
    features: [{
        id: 1,
        icon: walletExperience1,
        title: 'Fast & Instant Transfer',
        description: 'We’re driven beyond just finishing the projects. We want to find solutions.',
    }, {
        id: 2,
        icon: walletExperience2,
        title: 'File Management System',
        description: 'We’re driven beyond just finishing the projects. We want to find smart solutions.',
    },],
};

/* ------------------------------------ */
// Features data section
/* ------------------------------------ */
import featureIcon1 from 'common/assets/image/app-minimal/feature/feature-icon-1.svg';
import featureIcon2 from 'common/assets/image/app-minimal/feature/feature-icon-2.svg';
import featureIcon3 from 'common/assets/image/app-minimal/feature/feature-icon-3.svg';
import featureIcon4 from 'common/assets/image/app-minimal/feature/feature-icon-4.svg';
import featureIcon5 from 'common/assets/image/app-minimal/feature/feature-icon-5.svg';
import featureIcon6 from 'common/assets/image/app-minimal/feature/feature-icon-6.svg';

export const features = {
    title: 'So How Does Printajo Work ?',
    description: 'See some of the features below and learn why businesses trust Printajo',
    items: [{
        id: 1,
        icon: featureIcon1,
        title: 'Vehicle Branding',
        description: 'With years of experience and an unwavering commitment to quality, Printajo is the trusted source for vehicle branding in Dubai. From full vehicle wraps to window decals, we provide comprehensive solutions for businesses looking to increase their visibility and connect with their audience.\n' + '\n' + 'Whether you’re launching a new product, rebranding, or simply looking to update your company vehicles, we have the expertise and resources to bring your vision to life. Let us help you take your brand to the next level with effective, eye-catching vehicle branding solutions. Contact us today to learn more and receive a free quote!',
    }, {
        id: 2,
        icon: featureIcon2,
        title: 'RTA Approval',
        description: 'Vehicle graphics approval is a crucial step in the process of advertising your vehicle in Dubai. Before applying for approval, it’s important to familiarize yourself with the design regulations and necessary documents required by the RTA. The design will need to be inspected by an RTA officer to ensure that it follows the rules and regulations set by the Dubai government. Once the design is approved, RTA will issue a permit for each vehicle for one year. By being well-informed and prepared for the approval process, you can save time and money and ensure a smooth and successful vehicle branding campaign.',
    }, {
        id: 3,
        icon: featureIcon3,
        title: 'Signage',
        description: 'Whether you need a small sign, a massive branding campaign with various signage and signboards, or even vehicle graphics, our state-of-the-art signage, and vehicle branding workshop will bring your vision to life. You can always count on our highly trained and talented team of graphic designers, installers, and customer service personnel to carry out even the most complex requests with ease.',
    }, {
        id: 4,
        icon: featureIcon4,
        title: 'Printajo offers Sticker Printing in Dubai!',
        description: 'We are your one-stop shop for all your printing needs. Whether you are looking for window decals, window graphics, window branding or window signage, we have the perfect solution. Our experienced team of professionals use cutting-edge technology to produce top-quality stickers that are sure to leave a lasting impression. We use only top-grade materials to ensure your stickers stand the test of time. From colorful window decals to more intricate designs, our sticker printing services in Dubai offer the perfect way to display your business logo and brand identity. And with our user-friendly website, you can easily upload your design and get a quote in no time. So, if you’re looking for top-notch sticker printing services in Dubai, contact Printajo today!',
    }, {
        id: 5,
        icon: featureIcon5,
        title: 'Flex Printing',
        description: 'Flex Printing in Dubai is available at affordable prices through Printajo. This Dubai-based printing company offers advanced and personalized banner printing solutions for different sizes and shapes of banners anywhere in the UAE. With Flex Printing or Large Format Printing, Hoardings, Banners, and all signage are sure to stand out in any space. Printajo specializes in flex, banner, flex printing, banner printing, backlit flex, flex face signboard, flex sign, and flex signage.',
    }, {
        id: 6,
        icon: featureIcon6,
        title: 'Customize your brand.',
        description: 'Branding is about customized messaging for your business. It’s about delivering a message that resonates with your target audience and that stands out in a crowded market space. We offer branding solutions that are perfect for companies looking to make a big impact and grow their customer base in the UAE region.',
    },],
};

/* ------------------------------------ */
// Secure Transaction data section
/* ------------------------------------ */
import transactionThumb from 'common/assets/image/app-minimal/secure-transaction.jpg';
import transactionThumbBubble from 'common/assets/image/app-minimal/secure-transaction-bubble-1.png';

export const secureTransaction = {
    image: {
        thumb: transactionThumb, bubble: transactionThumbBubble,
    },
    title: 'Most promising secure transaction with fast & Entertaining',
    description: 'Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.',
};

/* ------------------------------------ */
// WalletDashboard data section
/* ------------------------------------ */

import walletDashboardImage from 'common/assets/image/app-minimal/wallet-dashboard-1.png';

export const WalletDashboardData = [{
    step: 'Step 01', title: 'Create a free Account', image: walletDashboardImage,
}, {
    step: 'Step 02', title: 'Verified your Account', image: walletDashboardImage,
}, {
    step: 'Step 03', title: 'Monitor your Dashboard', image: walletDashboardImage,
}, {
    step: 'Step 04', title: 'Promote & Refer Account', image: walletDashboardImage,
},];

/* ------------------------------------ */
// Track data section
/* ------------------------------------ */

import trackImage1 from 'common/assets/image/app-minimal/graph-1-1.png';
import trackImage2 from 'common/assets/image/app-minimal/graph-1-2.png';

export const TrackData = {
    title: 'The Most Effective wallet app to track your ultimate daily transaction', paragraph: [{
        text: 'Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. There will be a day–in our lifetime–when we get to celebrate every person on the planet having access. Moment Pro is the best software platform to collect reviews.',
    }, {
        text: 'There will be a day–in our lifetime–when we get to celebrate every person on the planet having access. Moment Pro is the best software platform to collect reviews. Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool. Pick one of our stock themes, or create your custom theme with the most advanced theme editor on any online survey building tool.',
    },], trackBox: [{
        image: trackImage1, count: '38', text: 'Avarage Convension Rate',
    }, {
        image: trackImage2, count: '53', text: 'Avarage Growth Rate',
    },],
};
/* ------------------------------------ */
// Gallery data section
/* ------------------------------------ */

import galleryImage1 from 'common/assets/image/app-minimal/gallery/gallery-1-1.png';
import galleryImage2 from 'common/assets/image/app-minimal/gallery/gallery-1-2.png';
import galleryImage3 from 'common/assets/image/app-minimal/gallery/gallery-1-3.png';
import galleryImage4 from 'common/assets/image/app-minimal/gallery/gallery-1-4.png';

export const GalleryData = [{
    image: galleryImage1,
}, {
    image: galleryImage2,
}, {
    image: galleryImage3,
}, {
    image: galleryImage4,
},];

/* ------------------------------------ */
// Counter data section
/* ------------------------------------ */

export const CounterData = {
    blockTitle: {
        title: 'Over 10 years of experience.',
        tagline: 'You can rely on us to make your next vehicle advertising or brand experience a memorable one. With our expert staff, we have many years of experience and proven success in the outdoor advertising industry in Dubai.',
    }, countBox: [{
        number: '20', text: 'Years of operation', button: {
            label: 'Years of operation', link: '#',
        },
    }, {
        number: '5,000', text: 'Project Delivered', button: {
            label: 'Read story', link: '#',
        },
    }, {
        number: '15', text: 'Specialist', button: {
            label: 'Read story', link: '#',
        },
    },],
};

/* ------------------------------------ */
// Pricing data section
/* ------------------------------------ */

export const MONTHLY_PRICING_DATA = [{
    recommended: false,
    title: 'Lite',
    price: 'Free',
    tagline: 'with restrictions',
    planLabel: 'Plan includes:',
    options: [{
        text: 'Manage conversations directly from your websites optimization.',
    }, {
        text: 'Unlimited links',
    }, {
        text: 'Chat promt supported',
    }, {
        text: 'Optimzed hashtags',
    }, {
        text: 'Own analytics platform',
    },],
    button: {
        label: 'Start 14 days of free trial', link: '#',
    },
}, {
    recommended: true, title: 'Pro', price: '$15.93', tagline: 'Monthly', planLabel: 'Plan includes:', options: [{
        text: 'Manage conversations directly from your websites optimization.',
    }, {
        text: 'Unlimited links',
    }, {
        text: 'Chat promt supported',
    }, {
        text: 'Optimzed hashtags',
    }, {
        text: 'Own analytics platform',
    },], button: {
        label: 'Start 14 days of free trial', link: '#',
    },
},];

export const YEARLY_PRICING_DATA = [{
    recommended: false,
    title: 'Lite',
    price: 'Free',
    tagline: 'with restrictions',
    planLabel: 'Plan includes:',
    options: [{
        text: 'Manage conversations directly from your websites optimization.',
    }, {
        text: 'Unlimited links',
    }, {
        text: 'Chat promt supported',
    }, {
        text: 'Optimzed hashtags',
    }, {
        text: 'Own analytics platform',
    },],
    button: {
        label: 'Start 14 days of free trial', link: '#',
    },
}, {
    recommended: true, title: 'Pro', price: '$99.93', tagline: 'Yearly', planLabel: 'Plan includes:', options: [{
        text: 'Manage conversations directly from your websites optimization.',
    }, {
        text: 'Unlimited links',
    }, {
        text: 'Chat promt supported',
    }, {
        text: 'Optimzed hashtags',
    }, {
        text: 'Own analytics platform',
    },], button: {
        label: 'Start 14 days of free trial', link: '#',
    },
},];

/* ------------------------------------ */
// Blog data section
/* ------------------------------------ */
import blogImage1 from 'common/assets/image/app-minimal/blog/blog-1-1.png';
import blogImage2 from 'common/assets/image/app-minimal/blog/blog-1-2.png';
import blogImage3 from 'common/assets/image/app-minimal/blog/blog-1-3.png';

export const BlogData = [{
    image: blogImage1, title: 'The 3 Fundamental Rules to Keep Your Website Goal Orientated', link: '#',
}, {
    image: blogImage2, title: 'Why the Best Websites Focus on Their Conversion Funnel', link: '#',
}, {
    image: blogImage3, title: 'Acquire More Leads Through Your Website By Switching Perspectives', link: '#',
},];

/* ------------------------------------ */
// Call To Action data section
/* ------------------------------------ */

export const CallToActionData = {
    title: 'Are you Interested? Join our waitlist',
    text: "We're launching soon - join our waitlist to get early access.",
    link: {
        label: 'Join Waitlist Today', path: '#',
    },
};

/* ------------------------------------ */
// Footer data section
/* ------------------------------------ */

import footerLogo from 'common/assets/image/app-minimal/footer/logo-footer.svg';
import footerDribble from 'common/assets/image/app-minimal/footer/footer-dribble.svg';
import footerFacebook from 'common/assets/image/app-minimal/footer/footer-facebook.svg';
import footerTwitter from 'common/assets/image/app-minimal/footer/footer-twitter.svg';

export const FooterData = {
    menu: [{
        link: '#', label: 'Support',
    }, {
        link: '#', label: 'About Us',
    }, {
        link: '#', label: 'Privacy',
    }, {
        link: '#', label: 'Contact',
    },], logo: footerLogo, social: [{
        link: '#', icon: footerFacebook,
    }, {
        link: '#', icon: footerTwitter,
    }, {
        link: '#', icon: footerDribble,
    },],
};
