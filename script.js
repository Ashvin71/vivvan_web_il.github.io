const galleries = {
  web: [
    "images/hero-digital.jpg",
    "images/hero-media.jpg",
    "images/hero-photo.jpg"
  ],
  commercial: [
    "images/real-gallery-perfume-green-bottle.jpg",
    "images/real-gallery-perfume-dropper-orchid.jpg",
    "images/real-gallery-perfume-lily-bottle.jpg",
    "images/real-gallery-samsung-phone.jpg",
    "images/real-gallery-real-apple-juice.jpg",
    "images/real-gallery-himalaya-face-wash.jpg",
    "images/real-gallery-coffee-packaging-mockup.jpg",
    "images/real-gallery-mens-skincare.jpg",
    "images/real-gallery-tomato-paste.jpg",
    "images/real-gallery-tomato-soup.jpg",
    "images/real-gallery-starbucks-drink.jpg",
    "images/real-gallery-mcdonalds-burger.jpg",
    "images/real-gallery-dessert-pastry.jpg",
    "images/real-gallery-grocery-green-poster.jpg",
    "images/real-gallery-grocery-yellow-poster.jpg",
    "images/real-gallery-grocery-black-poster.jpg"
  ],
  product: [
    "images/real-gallery-perfume-green-bottle.jpg",
    "images/real-gallery-perfume-dropper-orchid.jpg",
    "images/real-gallery-perfume-lily-bottle.jpg",
    "images/real-gallery-samsung-phone.jpg",
    "images/real-gallery-real-apple-juice.jpg",
    "images/real-gallery-himalaya-face-wash.jpg",
    "images/real-gallery-coffee-packaging-mockup.jpg",
    "images/real-gallery-mens-skincare.jpg",
    "images/real-gallery-tomato-paste.jpg",
    "images/real-gallery-tomato-soup.jpg"
  ],
  food: [
    "images/real-gallery-starbucks-drink.jpg",
    "images/real-gallery-mcdonalds-burger.jpg",
    "images/real-gallery-dessert-pastry.jpg",
    "images/real-gallery-real-apple-juice.jpg",
    "images/real-gallery-coffee-packaging-mockup.jpg",
    "images/real-gallery-tomato-paste.jpg",
    "images/real-gallery-tomato-soup.jpg",
    "images/real-gallery-grocery-green-poster.jpg",
    "images/real-gallery-grocery-yellow-poster.jpg",
    "images/real-gallery-grocery-black-poster.jpg"
  ]
};

const galleryTrack = document.querySelector(".gallery-track");
const galleryDots = document.querySelector(".gallery-dots");
const prev = document.querySelector(".gallery-arrow.prev");
const next = document.querySelector(".gallery-arrow.next");
const galleryTabs = document.querySelectorAll(".gallery-tabs button");
let activeGallery = "commercial";
let activeIndex = 0;
let galleryTimer;

function renderGallery() {
  const images = galleries[activeGallery];
  const img = document.createElement("img");
  img.src = images[activeIndex];
  img.alt = "";
  galleryTrack.replaceChildren(img);
  renderDots();
}

function renderDots() {
  const dots = [];
  for (let index = 0; index < galleries[activeGallery].length; index += 1) {
    const dot = document.createElement("button");
    dot.className = `gallery-dot${index === activeIndex ? " active" : ""}`;
    dot.type = "button";
    dot.setAttribute("aria-label", `Show gallery page ${index + 1}`);
    dot.addEventListener("click", () => {
      activeIndex = index;
      renderGallery();
      startGalleryTimer();
    });
    dots.push(dot);
  }
  galleryDots.replaceChildren(...dots);
}

function showNext(step = 1) {
  const images = galleries[activeGallery];
  activeIndex = (activeIndex + step + images.length) % images.length;
  renderGallery();
}

function startGalleryTimer() {
  clearInterval(galleryTimer);
  galleryTimer = setInterval(() => showNext(1), 4000);
}

prev.addEventListener("click", () => {
  showNext(-1);
  startGalleryTimer();
});

next.addEventListener("click", () => {
  showNext(1);
  startGalleryTimer();
});

galleryTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    activeGallery = tab.dataset.gallery;
    activeIndex = 0;
    galleryTabs.forEach((item) => item.classList.toggle("active", item === tab));
    renderGallery();
    startGalleryTimer();
  });
});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const articleModal = document.querySelector("#article-modal");
const modalCategory = document.querySelector("#modal-category");
const modalTitle = document.querySelector("#modal-title");
const modalContent = document.querySelector("#modal-content");
const modalClose = document.querySelector(".modal-close");

const articles = {
  "ai-small-business": {
    category: "Artificial Intelligence",
    title: "How AI Is Transforming Small Businesses in 2026",
    content: [
      "Artificial Intelligence is changing the way businesses operate. What was once available only to large corporations is now affordable and practical for local businesses, startups, and growing companies.",
      "Whether you own a restaurant, medical office, law firm, retail store, contractor business, hotel, or photography studio, AI can help you work smarter, serve customers faster, and grow your business without dramatically increasing your operating costs.",
      "Modern AI can answer customer questions, schedule appointments, respond to emails, create marketing content, generate blog articles, manage customer inquiries, analyze business data, assist sales teams, and improve customer support.",
      "An AI Agent is much more than a chatbot. It can answer customer questions, book appointments, collect customer information, recommend services, send follow-up emails, generate estimates, connect with your CRM, notify your sales team, schedule meetings, and qualify leads.",
      "AI chatbots improve customer service by responding instantly to website visitors. AI voice assistants can greet callers professionally, answer common questions, schedule appointments, route urgent calls, take messages, confirm bookings, and send reminders.",
      "AI can also help with marketing by creating blog articles, social media posts, email newsletters, product descriptions, Google Business Profile updates, landing pages, advertising copy, and video scripts.",
      "Search engines reward websites that publish helpful, high-quality content. AI can assist with topic ideas, article outlines, keyword placement, FAQ sections, meta descriptions, and internal linking when combined with human review and local expertise.",
      "Vivaan Web Media provides AI Agents, AI Chatbots, AI Voice Receptionists, appointment automation, email automation, AI content creation, AI workflow automation, web design, SEO, digital marketing, commercial photography, branding, and website maintenance."
    ]
  },
  "ai-agent-guide": {
    category: "Artificial Intelligence",
    title: "What Is an AI Agent? The Complete Business Owner's Guide",
    content: [
      "An AI Agent is an intelligent software assistant that can understand conversations, make decisions, automate tasks, and work with your existing business systems.",
      "For small businesses, AI Agents provide an affordable way to improve customer service, reduce manual work, and increase sales without hiring additional staff.",
      "An AI Agent can answer customer questions, book appointments, generate quotes, send follow-up emails, recommend products or services, qualify leads, connect to your CRM, schedule meetings, and respond 24/7.",
      "A traditional chatbot follows pre-programmed scripts. An AI Agent can understand context, ask follow-up questions, remember information during the conversation, and provide more natural, helpful responses.",
      "AI Agents are valuable for restaurants, hotels, medical clinics, dental offices, law firms, contractors, HVAC companies, electricians, plumbers, auto repair shops, retail stores, real estate agencies, wedding photographers, event planners, and insurance agencies.",
      "Benefits include 24/7 customer support, lead capture, appointment scheduling, reduced workload, and a better customer experience.",
      "Vivaan Web Media builds website AI agents, AI chatbots, AI voice assistants, appointment booking automation, CRM integration, lead qualification, AI email automation, and customer support automation."
    ]
  },
  "modern-website": {
    category: "Web Design",
    title: "Why Every Small Business Needs a Professional Website in 2026",
    content: [
      "In today's digital world, your website is often the first impression customers have of your business. If it looks outdated, loads slowly, or does not work well on mobile devices, many visitors will leave before contacting you.",
      "A professional website builds trust with clean design, clear contact information, detailed service descriptions, professional photos, secure forms, and fast loading pages.",
      "Your website works 24 hours a day. Visitors can learn about your services, view your portfolio, submit forms, request quotes, book appointments, read articles, find your location, and contact you.",
      "Vivaan Web Media builds responsive, SEO-friendly, AI-powered websites with contact forms, AI agents, appointment booking, local SEO, commercial photography, and website maintenance."
    ]
  },
  "ai-chatbots-human": {
    category: "Artificial Intelligence",
    title: "AI Chatbots vs. Human Customer Service: Which Is Better?",
    content: [
      "Customers now expect instant answers, whether it is morning or midnight. Hiring enough employees for around-the-clock support is expensive for many small businesses.",
      "AI chatbots can answer common questions, explain services, collect customer information, schedule appointments, recommend products, and route inquiries to the right person.",
      "Human service still matters for complex issues, emotional conversations, negotiations, custom projects, high-value sales, and complaint resolution.",
      "The best solution is AI plus human support. AI greets visitors, answers routine questions, captures leads, books appointments, and transfers important conversations to staff when needed.",
      "Vivaan Web Media builds AI chatbot solutions with lead capture, appointment scheduling, CRM integration, email follow-up, FAQ automation, Google Calendar integration, multi-language support, and reporting."
    ]
  },
  "ai-lead-generation": {
    category: "Artificial Intelligence",
    title: "How AI Can Generate More Leads for Your Business",
    content: [
      "AI lead generation uses intelligent software to identify, engage, and qualify potential customers. Instead of waiting for customers to call, AI actively engages visitors in real time.",
      "AI can welcome visitors, answer questions, recommend services, collect contact information, schedule consultations, and turn more visitors into opportunities.",
      "AI can ask useful questions about service needs, timeline, budget, location, and project details so your sales team receives better qualified leads.",
      "AI also supports appointment scheduling, follow-up automation, personalized recommendations, marketing content, and performance insights.",
      "Vivaan Web Media helps businesses generate leads through AI Agents, AI Chatbots, AI Voice Receptionists, website design, landing pages, local SEO, Google Business Profile optimization, CRM integration, marketing automation, and commercial photography."
    ]
  },
  "gbp-guide": {
    category: "Local SEO",
    title: "Google Business Profile Optimization Guide",
    content: [
      "When someone searches for services near them, Google often shows map results before regular websites. Appearing there can increase phone calls, website visits, direction requests, and customer inquiries.",
      "A complete Google Business Profile includes business name, address, phone number, website, hours, reviews, photos, services, and questions and answers.",
      "Important improvements include completing every section, adding high-quality photos, encouraging customer reviews, responding professionally, publishing weekly updates, and connecting the profile to a strong website.",
      "Vivaan Web Media provides Google Business Profile setup, profile optimization, SEO-friendly descriptions, photo optimization, review strategy, local keyword research, AI chatbot integration, web design, local SEO, digital marketing, and commercial photography."
    ]
  },
  "digital-marketing-guide": {
    category: "Digital Marketing",
    title: "The Complete Digital Marketing Guide for Small Businesses in 2026",
    content: [
      "Digital marketing helps businesses connect with potential customers, build trust, and generate more sales through web design, SEO, Google Business Profile, social media, email, AI automation, content, video, and reputation management.",
      "Your website is the center of your online presence. It should load quickly, work on mobile, explain your services, show testimonials, include contact forms, display professional photos, and integrate AI support.",
      "SEO, local SEO, social media, email marketing, AI-powered marketing, and professional photography work together to increase visibility and trust.",
      "Vivaan Web Media provides website design, AI agents, AI chatbots, local SEO, Google Business Profile optimization, social media marketing, content creation, commercial photography, and website maintenance."
    ]
  },
  "restaurant-ai": {
    category: "AI for Restaurants",
    title: "How AI Can Help Restaurants Increase Sales and Improve Customer Service",
    content: [
      "Restaurants manage reservations, online orders, customer service, staffing, marketing, and reviews while providing a great dining experience.",
      "AI chatbots can answer questions about hours, reservations, catering, holidays, menu options, location, and online ordering even after closing.",
      "AI can automate reservations, confirm bookings, send reminders, reduce no-shows, assist online ordering, recommend dishes, suggest add-ons, and answer allergy questions.",
      "Vivaan Web Media helps restaurants with AI chatbots, reservation systems, local SEO, Google Business Profile optimization, restaurant websites, digital marketing, social media content, and professional food photography."
    ]
  },
  "hotel-ai": {
    category: "AI for Hotels",
    title: "Why Hotels and Motels Should Use AI to Improve Guest Experience",
    content: [
      "Travelers expect quick responses, easy online booking, and personalized service. AI helps hotels provide better guest experiences while reducing staff workload.",
      "AI assistants can answer questions about check-in, check-out, room availability, parking, Wi-Fi, pet policies, breakfast hours, and local attractions.",
      "AI can support reservations, confirmation emails, pricing questions, room recommendations, special offers, and concierge suggestions.",
      "Vivaan Web Media helps hotels with website design, AI guest assistants, SEO, local SEO, Google Business Profile optimization, commercial photography, digital marketing, and maintenance."
    ]
  },
  "healthcare-ai": {
    category: "AI for Healthcare",
    title: "How AI Is Transforming Medical and Dental Clinics",
    content: [
      "Patients expect healthcare providers to be easy to reach, responsive, and organized. AI helps clinics improve communication and reduce repetitive administrative work.",
      "AI can schedule appointments, send reminders, reduce missed appointments, answer scheduling questions, and manage cancellations or rescheduling.",
      "AI patient assistants can answer questions about office hours, insurance, new patient forms, emergency procedures, and available services.",
      "Vivaan Web Media provides medical and dental website design, AI appointment assistants, local SEO, Google Business Profile optimization, digital marketing, and professional photography."
    ]
  },
  "law-firm-ai": {
    category: "AI for Law Firms",
    title: "Why Law Firms Should Invest in AI and Professional Web Design",
    content: [
      "Most people searching for legal help begin with Google. A modern website, AI, and local SEO help attorneys create a strong first impression and improve communication.",
      "AI can answer common questions, explain practice areas, collect consultation requests, schedule appointments, and gather initial case information after business hours.",
      "Law firm websites should include attorney profiles, practice areas, testimonials, case results where appropriate, FAQs, secure contact forms, and an AI consultation assistant.",
      "Vivaan Web Media provides attorney website design, AI client assistants, SEO, local SEO, Google Business Profile optimization, digital marketing, branding, and website maintenance."
    ]
  },
  "real-estate-ai": {
    category: "AI for Real Estate",
    title: "How Real Estate Agents Can Generate More Leads with AI",
    content: [
      "Real estate is competitive. Buyers and sellers expect fast responses, accurate property information, and professional online experiences.",
      "AI can ask visitors whether they are buying or selling, preferred location, budget, property type, and timeline, then send qualified leads to the agent.",
      "AI can recommend properties by budget, neighborhood, home size, features, and lifestyle preferences.",
      "Vivaan Web Media provides real estate website design, AI chatbots, AI lead generation, SEO, local SEO, commercial photography, digital marketing, and branding."
    ]
  },
  "blogging-seo": {
    category: "Local SEO",
    title: "Why Blogging Improves SEO",
    content: [
      "Blogging gives your website fresh, useful content that can answer customer questions and support search visibility.",
      "Articles about services, locations, customer problems, AI, web design, and local business topics help search engines understand your expertise.",
      "A consistent blog can build topical authority and give customers helpful information before they call or request a quote."
    ]
  },
  "visual-branding": {
    category: "Commercial Photography",
    title: "Why Product and Food Images Matter on a Business Website",
    content: [
      "Customers trust what they can see. Strong product photos, food images, service photos, and brand visuals make a website feel more real and professional.",
      "Better images can improve confidence, help visitors understand your offer, and support social media, advertising, menus, product pages, and landing pages.",
      "Vivaan Web Media combines commercial photography with website design so your visual brand and online presence work together."
    ]
  },
  "ai-chatbots-human": {
    category: "Artificial Intelligence",
    title: "AI Chatbots vs. Human Customer Service",
    content: [
      "Businesses are expected to answer questions instantly, whether it is morning or midnight. AI chatbots make around-the-clock support practical for small businesses.",
      "AI can answer common questions, explain services, collect customer information, schedule appointments, recommend products, and route inquiries to the right team member.",
      "Human customer service still matters for complex issues, emotional conversations, custom projects, high-value sales, and complaint resolution.",
      "The best system combines both. AI handles routine conversations quickly, while your team focuses on personal conversations where human attention matters."
    ]
  },
  "ai-lead-generation": {
    category: "Artificial Intelligence",
    title: "How AI Can Generate More Leads for Your Business",
    content: [
      "AI lead generation uses intelligent software to identify, engage, and qualify potential customers in real time.",
      "AI can welcome visitors, answer questions, recommend services, collect contact information, schedule consultations, and send qualified leads to your team.",
      "It can ask useful questions about service needs, timeline, budget, location, and project details, giving your sales team better information.",
      "Vivaan Web Media helps businesses generate leads through AI agents, chatbots, voice receptionists, landing pages, local SEO, CRM integration, and marketing automation."
    ]
  },
  "gbp-guide": {
    category: "Local SEO",
    title: "Google Business Profile Optimization Guide",
    content: [
      "Google Business Profile helps local businesses appear in Google Search, Google Maps, mobile search, and voice search.",
      "A complete profile includes business name, address, phone number, website, business hours, reviews, photos, services, and questions and answers.",
      "Strong profiles use complete service information, high-quality photos, review strategy, regular updates, local keywords, and a well-optimized website.",
      "Vivaan Web Media provides Google Business Profile setup, profile optimization, local keyword research, photo optimization, review strategy, local SEO, web design, and commercial photography."
    ]
  },
  "digital-marketing-guide": {
    category: "Digital Marketing",
    title: "The Complete Digital Marketing Guide for Small Businesses in 2026",
    content: [
      "Digital marketing includes website design, SEO, Google Business Profile optimization, social media, email marketing, AI automation, content marketing, video, and reputation management.",
      "Your website should load quickly, work on mobile, clearly explain your services, display professional photos, include contact forms, and integrate AI tools for customer support.",
      "SEO, local SEO, social media, email marketing, AI-powered marketing, and professional photography work together to increase visibility and trust.",
      "Vivaan Web Media combines AI, web design, SEO, digital marketing, and commercial photography to help businesses grow."
    ]
  },
  "restaurant-ai": {
    category: "AI for Restaurants",
    title: "How AI Can Help Restaurants Increase Sales and Improve Customer Service",
    content: [
      "Restaurants manage reservations, online orders, customer service, staffing, marketing, and reviews while providing a great dining experience.",
      "AI chatbots can answer questions about hours, reservations, catering, menu options, holidays, location, and online ordering.",
      "AI can automate reservations, confirm bookings, send reminders, reduce no-shows, assist online ordering, recommend dishes, and suggest add-ons.",
      "Vivaan Web Media helps restaurants with AI chatbots, reservation systems, restaurant websites, local SEO, Google Business Profile optimization, digital marketing, social media content, and food photography."
    ]
  },
  "hotel-ai": {
    category: "AI for Hotels",
    title: "Why Hotels and Motels Should Use AI to Improve Guest Experience",
    content: [
      "Travelers expect quick responses, easy online booking, and personalized service. AI helps hotels improve guest experience while reducing staff workload.",
      "AI assistants can answer questions about check-in, check-out, room availability, parking, Wi-Fi, pet policies, breakfast hours, and local attractions.",
      "AI can assist reservations, confirm bookings, answer pricing questions, recommend room types, promote offers, and provide concierge-style recommendations.",
      "Vivaan Web Media helps hotels with website design, AI guest assistants, SEO, local SEO, Google Business Profile optimization, commercial photography, digital marketing, and website maintenance."
    ]
  },
  "healthcare-ai": {
    category: "AI for Healthcare",
    title: "How AI Is Transforming Medical and Dental Clinics",
    content: [
      "Patients expect healthcare providers to be easy to reach, responsive, and organized. AI helps clinics improve communication and reduce administrative workload.",
      "AI can schedule appointments, send reminders, reduce missed appointments, answer scheduling questions, and manage cancellations or rescheduling.",
      "AI patient assistants can answer questions about office hours, insurance, new patient forms, emergency procedures, and available services.",
      "Vivaan Web Media provides medical website design, dental website design, AI appointment assistants, local SEO, Google Business Profile optimization, digital marketing, and professional photography."
    ]
  },
  "law-firm-ai": {
    category: "AI for Law Firms",
    title: "Why Law Firms Should Invest in AI and Professional Web Design",
    content: [
      "Most people searching for legal help begin with Google. A modern website, AI, and local SEO help law firms create a strong first impression.",
      "AI can answer common questions, explain practice areas, collect consultation requests, schedule appointments, and gather initial case information.",
      "Legal websites should include attorney profiles, practice areas, testimonials, case results where appropriate, FAQs, secure forms, and AI consultation assistance.",
      "Vivaan Web Media provides attorney website design, AI client assistants, SEO, local SEO, Google Business Profile optimization, digital marketing, branding, and website maintenance."
    ]
  },
  "real-estate-ai": {
    category: "AI for Real Estate",
    title: "How Real Estate Agents Can Generate More Leads with AI",
    content: [
      "Real estate is competitive. Buyers and sellers expect fast responses, accurate property information, and professional online experiences.",
      "AI can ask visitors if they are buying or selling, their preferred location, budget, property type, and timeline.",
      "AI can recommend properties based on budget, neighborhood, home size, features, and lifestyle preferences.",
      "Vivaan Web Media provides real estate website design, AI chatbots, AI lead generation, SEO, local SEO, commercial photography, digital marketing, and branding."
    ]
  }
};

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    navToggle.setAttribute("aria-expanded", "false");
  });
});

document.querySelectorAll("[data-article]").forEach((button) => {
  button.addEventListener("click", () => {
    const article = articles[button.dataset.article];
    modalCategory.textContent = article.category;
    modalTitle.textContent = article.title;
    modalContent.replaceChildren(...article.content.map((paragraph) => {
      const p = document.createElement("p");
      p.textContent = paragraph;
      return p;
    }));
    articleModal.showModal();
  });
});

modalClose.addEventListener("click", () => articleModal.close());

articleModal.addEventListener("click", (event) => {
  if (event.target === articleModal) {
    articleModal.close();
  }
});

renderGallery();
startGalleryTimer();

