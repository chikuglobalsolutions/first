export type AISystem = {
  slug: string;
  icon: string;
  name: string;
  shortDesc: string;
  longDesc: string;
  problem: string;
  solution: string;
  howItWorks: string[];
  outcomes: { metric: string; label: string }[];
  integrations: string[];
  bestFor: string[];
  setupTime: string;
};

export type Industry = {
  slug: string;
  icon: string;
  name: string;
  shortDesc: string;
  pain: string;
  recommendedSystems: string[];
  caseSnapshot: { metric: string; label: string }[];
  exampleWorkflow: string;
};

export const SYSTEMS: AISystem[] = [
  {
    slug: "lead-followup",
    icon: "📞",
    name: "Lead Follow-Up Engine",
    shortDesc: "Every new lead gets an instant, personalized response — across email and SMS — within minutes of inquiry.",
    longDesc:
      "Most businesses lose 40-60% of leads simply because nobody follows up fast enough. The Lead Follow-Up Engine eliminates that gap by responding to every new lead instantly with personalized AI-generated messages — then continuing to nurture them across a 14-day sequence until they book or unsubscribe.",
    problem:
      "Your front desk is busy. Your sales team works business hours. New leads coming in at 8pm wait until tomorrow morning — by which time half of them have moved on to a competitor who answered faster.",
    solution:
      "An AI follow-up system that responds within 2 minutes, 24/7, with a personalized message referencing what the lead asked about. The follow-up continues over 14 days with smart escalation: warm reminders, value-add content, and finally a 'is this still a priority?' close.",
    howItWorks: [
      "Lead submits form, calls, or sends DM — our system captures it in real time",
      "AI generates a personalized response within 2 minutes (mentions their specific question/service)",
      "Sends via email + SMS based on lead preference",
      "If no response in 24 hours, sends value-add content (case study, FAQ, video)",
      "Continues on a 14-day cadence until lead books, unsubscribes, or is marked won/lost",
      "Books qualified leads directly into your calendar — no manual scheduling",
    ],
    outcomes: [
      { metric: "2 min", label: "first response time" },
      { metric: "+45%", label: "lead-to-booking rate" },
      { metric: "24/7", label: "coverage with no staff" },
    ],
    integrations: ["HubSpot", "Salesforce", "Pipedrive", "ActiveCampaign", "Calendly", "Acuity", "Twilio", "Custom CRM"],
    bestFor: ["Local services", "Real estate", "Professional services", "Coaching", "Agencies", "B2B SaaS"],
    setupTime: "2 weeks from kickoff to live",
  },
  {
    slug: "review-generation",
    icon: "⭐",
    name: "Review Generation System",
    shortDesc: "Automated post-service review requests that 3-5× your Google review count in 90 days.",
    longDesc:
      "Reviews drive 60%+ of new customer trust before they ever talk to you. Most businesses leave this to chance — asking once at checkout and forgetting. The Review Generation System asks at the exact right moment, in the right channel, with personalization that turns review requests from awkward asks into easy yes-es.",
    problem:
      "Your happy customers don't leave reviews because nobody reminds them at the right moment. Your unhappy customers leave reviews loudly. The math compounds against you over years.",
    solution:
      "An AI-powered review system that triggers a personalized review request 24-72 hours after service (the proven optimal window). Routes happy customers to public review platforms, and unhappy customers to a private feedback channel where issues get resolved before becoming 1-star reviews.",
    howItWorks: [
      "Customer completes service / appointment / purchase",
      "System waits the optimal window (24-72 hours, configurable per industry)",
      "Sends a personalized message via SMS or email asking about their experience",
      "Happy responses → routed to Google / Yelp / industry-specific platforms",
      "Unhappy responses → routed to a private feedback form, owner notified immediately",
      "Tracks review volume, conversion rates, and platform-by-platform performance",
    ],
    outcomes: [
      { metric: "3-5×", label: "more reviews in 90 days" },
      { metric: "4.6+", label: "average star rating maintained" },
      { metric: "<24h", label: "negative feedback intercepted" },
    ],
    integrations: ["Google Business", "Yelp", "Trustpilot", "Healthgrades", "Avvo", "Zillow", "Industry-specific platforms"],
    bestFor: ["Dental & medical", "Restaurants", "Salons & spas", "Contractors", "Local services", "Hotels"],
    setupTime: "1-2 weeks from kickoff to live",
  },
  {
    slug: "booking-optimization",
    icon: "📅",
    name: "Booking Optimization System",
    shortDesc: "Reduce no-shows 40-80% with smart reminders, fill cancellations with a waitlist, and maximize your schedule without extra staff.",
    longDesc:
      "Every empty appointment slot is lost revenue you can't get back. The Booking Optimization System closes the three biggest gaps: no-shows (with smart multi-touch reminders), cancellations (with an AI-managed waitlist that fills slots automatically), and underutilization (with intelligent scheduling suggestions).",
    problem:
      "No-shows kill 15-25% of your revenue. Cancellations leave empty slots you can't fill on short notice. And your schedule has gaps you don't even notice because nobody's looking at the bigger pattern.",
    solution:
      "An AI booking system that sends personalized reminders 24h, 4h, and 30min before appointments. When cancellations happen, it auto-contacts the waitlist via SMS to fill the slot. It also identifies scheduling patterns (gaps, peak times, idle blocks) and suggests optimizations weekly.",
    howItWorks: [
      "Customer books an appointment (your existing system)",
      "AI sends personalized reminder at 24h before",
      "Smart reminder at 4h with one-tap confirm / reschedule",
      "Final reminder at 30 min with location + parking info",
      "If cancellation happens, AI texts top waitlist matches within 60 seconds",
      "Weekly report shows utilization rate, no-show patterns, and revenue recovered",
    ],
    outcomes: [
      { metric: "-60%", label: "no-show rate" },
      { metric: "+15%", label: "schedule utilization" },
      { metric: "$8K+", label: "monthly recovered revenue (avg)" },
    ],
    integrations: ["Calendly", "Acuity", "Cliniko", "Mindbody", "Square Appointments", "Custom calendars"],
    bestFor: ["Healthcare", "Fitness studios", "Salons & spas", "Law firms", "Consultants", "Tutors & coaches"],
    setupTime: "2 weeks from kickoff to live",
  },
  {
    slug: "ai-sales-assistant",
    icon: "🤖",
    name: "AI Sales Assistant",
    shortDesc: "An always-on assistant that answers FAQs, qualifies leads, quotes pricing, and books calls — 24/7, no hiring required.",
    longDesc:
      "Most prospects ask the same 15 questions before they buy. An AI Sales Assistant answers them instantly on your website, in your DMs, and via email — qualifying the serious ones and booking them directly into your calendar while disqualifying the time-wasters.",
    problem:
      "You're answering the same questions 50 times a week. Your team is bottlenecked on qualification. Hot leads cool off while you're 'in a meeting.' Hiring an SDR costs $60K+/year before they're trained.",
    solution:
      "A custom-trained AI assistant that knows your offer, your pricing, your common objections, and your scheduling rules. Embedded on your website chat, your social DMs, and your email autoresponder. Qualifies prospects against your criteria, quotes pricing where allowed, and books calls directly.",
    howItWorks: [
      "We train the AI on your full sales playbook (offer, pricing, objections, FAQs, qualification criteria)",
      "Deploy across website chat, Instagram/Facebook DMs, and email",
      "AI handles 70-80% of inquiries fully autonomously",
      "Qualified leads get booked into your calendar with full context delivered to you",
      "Complex / high-value conversations get handed to a human (you) with full transcript",
      "Weekly improvement cycle based on real conversation data",
    ],
    outcomes: [
      { metric: "70-80%", label: "of inquiries handled autonomously" },
      { metric: "<30s", label: "average response time" },
      { metric: "+35%", label: "qualified call bookings" },
    ],
    integrations: ["Intercom", "Drift", "Instagram", "Facebook Messenger", "WhatsApp", "Email autoresponders", "Calendly"],
    bestFor: ["E-commerce", "SaaS", "Coaching", "Agencies", "Service businesses", "Info products"],
    setupTime: "3 weeks from kickoff to live",
  },
  {
    slug: "reactivation-campaigns",
    icon: "📧",
    name: "Reactivation Campaigns",
    shortDesc: "Turn dormant leads and past customers into revenue with AI-personalized win-back sequences.",
    longDesc:
      "Your CRM is full of money you forgot about. Leads that ghosted six months ago, customers who haven't bought in a year, prospects who said 'not now.' The Reactivation Campaign system uses AI to personalize win-back sequences at scale — turning your dead list into the cheapest customer acquisition channel you have.",
    problem:
      "Your most valuable asset is a list of people who already engaged with you once — and you're ignoring it because you don't have time to write 500 personalized re-engagement emails.",
    solution:
      "AI scans your contact list, segments by recency and engagement history, and generates personalized re-engagement sequences referencing the specific context of each contact (what they inquired about, what they bought, what they ignored). Customers wake up and convert at 3-8× the rate of cold prospects.",
    howItWorks: [
      "We import your full contact list with engagement history",
      "AI segments contacts by recency, last engagement type, and purchase history",
      "Generates personalized 3-email reactivation sequences per segment",
      "Sends sequences staggered to protect deliverability",
      "Re-engaged contacts get routed back into your normal sales process",
      "Monthly campaigns keep the pipeline warm without manual work",
    ],
    outcomes: [
      { metric: "3-8×", label: "conversion vs cold leads" },
      { metric: "$0", label: "ad spend required" },
      { metric: "10-15%", label: "of dormant list reactivated" },
    ],
    integrations: ["Mailchimp", "ActiveCampaign", "Klaviyo", "ConvertKit", "HubSpot", "Custom CRMs"],
    bestFor: ["Any business with an existing contact list of 500+", "E-commerce", "SaaS", "Agencies", "Coaches"],
    setupTime: "2 weeks from kickoff to live",
  },
  {
    slug: "reporting-automation",
    icon: "📊",
    name: "Reporting & Insights Automation",
    shortDesc: "A weekly snapshot of what's working, what isn't, and where your next dollar should go — without building dashboards.",
    longDesc:
      "Most business owners spend hours pulling numbers from 5 different tools — and still can't tell you why this week was different from last week. The Reporting Automation system pulls from all your platforms, runs AI analysis on the patterns, and delivers a single weekly summary that actually tells you what to do.",
    problem:
      "You have data in 5 tools. None of them talk. You don't have time to build dashboards, and the dashboards you do build don't tell you anything useful. So you operate on gut — which is fine until you can't explain why revenue dropped.",
    solution:
      "An AI reporting system that pulls weekly data from your CRM, ad platforms, sales tools, and operations software. Identifies what changed, why it likely changed, and what to investigate. Delivered as a single 5-minute Monday morning email/PDF you actually read.",
    howItWorks: [
      "We connect to your existing tools (no migration required)",
      "Weekly automated pull of all relevant metrics",
      "AI analyzes week-over-week, month-over-month, and year-over-year changes",
      "Identifies anomalies, opportunities, and risks",
      "Delivers a single weekly summary with 3-5 specific action items",
      "Quarterly deep-dive reports on trends and strategy",
    ],
    outcomes: [
      { metric: "5 min", label: "weekly time to read full report" },
      { metric: "1", label: "source of truth across all tools" },
      { metric: "3-5", label: "actionable insights per week" },
    ],
    integrations: ["Google Analytics", "Meta Ads", "Google Ads", "Stripe", "Shopify", "HubSpot", "Salesforce", "Custom databases"],
    bestFor: ["Agency owners", "Multi-location businesses", "E-commerce brands", "SaaS founders", "Service businesses"],
    setupTime: "2-3 weeks from kickoff to live",
  },
];

export const INDUSTRIES: Industry[] = [
  {
    slug: "dental-medical",
    icon: "🦷",
    name: "Dental & Medical Practices",
    shortDesc: "AI systems for patient communication, review generation, and booking optimization built for healthcare regulations.",
    pain: "Patient no-shows. Inconsistent review collection. Front desk overwhelmed answering the same insurance and scheduling questions 100 times a day.",
    recommendedSystems: ["review-generation", "booking-optimization", "ai-sales-assistant"],
    caseSnapshot: [
      { metric: "-65%", label: "no-show rate" },
      { metric: "+4.2 stars", label: "Google rating improvement" },
      { metric: "12 hrs/wk", label: "saved at front desk" },
    ],
    exampleWorkflow:
      "After every appointment, the system sends a personalized SMS asking about the visit. Happy patients are guided to Google Reviews. Unhappy ones are routed to a private feedback form that pings the practice owner immediately. Cancellations trigger automated SMS to the waitlist within 60 seconds, filling 70%+ of last-minute openings.",
  },
  {
    slug: "legal",
    icon: "⚖️",
    name: "Law Firms & Legal Services",
    shortDesc: "Intake automation, lead qualification, and follow-up systems tuned for professional services and high-value clients.",
    pain: "Lead-to-consult conversion is low because follow-up isn't fast enough. Intake forms take 30+ minutes for paralegals to process. Hot inquiries cool off over weekends.",
    recommendedSystems: ["lead-followup", "ai-sales-assistant", "reporting-automation"],
    exampleWorkflow:
      "When a potential client submits an intake form, the AI Sales Assistant qualifies the case type, urgency, and fit within 2 minutes. Qualified cases get a personalized response with attorney bio and a calendar link — books a consult directly. Unqualified cases get a polite redirect or referral. Weekend leads are handled identically.",
    caseSnapshot: [
      { metric: "<2 min", label: "response time on new intakes" },
      { metric: "+55%", label: "consultation booking rate" },
      { metric: "8 hrs/wk", label: "saved on intake processing" },
    ],
  },
  {
    slug: "real-estate",
    icon: "🏘️",
    name: "Real Estate & Brokerages",
    shortDesc: "Lead nurture, showing booking, and listing alert automation that keeps every lead warm across long buying cycles.",
    pain: "Most real estate leads convert 6-18 months after first contact. Agents lose 70%+ of them because nobody nurtures the long-cycle prospects.",
    recommendedSystems: ["lead-followup", "reactivation-campaigns", "ai-sales-assistant"],
    exampleWorkflow:
      "Every new lead gets a personalized response within minutes — referencing the specific property or neighborhood they inquired about. The AI then nurtures them over months with hyper-relevant new listings, market updates, and timed check-ins. Hot leads get routed to the agent with full conversation history. Cold leads get reactivated quarterly.",
    caseSnapshot: [
      { metric: "+40%", label: "leads kept engaged past month 3" },
      { metric: "+25%", label: "showing-to-offer conversion" },
      { metric: "12-18 mo", label: "average nurture cycle automated" },
    ],
  },
  {
    slug: "local-services",
    icon: "🔧",
    name: "Local Services (HVAC, Plumbing, Contractors)",
    shortDesc: "Quote-to-job conversion systems, review automation, and emergency-call handling for trade businesses.",
    pain: "Emergency calls coming in after-hours go to voicemail (and competitors). Quotes go out but nobody follows up. Reviews are inconsistent.",
    recommendedSystems: ["lead-followup", "review-generation", "ai-sales-assistant"],
    exampleWorkflow:
      "After-hours inquiries get an instant AI response qualifying urgency and offering same-day callback or next-day appointment. Quotes are automatically followed up at 24h, 72h, and 7 days with personalized check-ins. Every completed job triggers a review request 48 hours later, routing happy customers to Google.",
    caseSnapshot: [
      { metric: "100%", label: "after-hours coverage" },
      { metric: "+38%", label: "quote-to-job conversion" },
      { metric: "5×", label: "Google reviews in 90 days" },
    ],
  },
  {
    slug: "restaurants",
    icon: "🍽️",
    name: "Restaurants & Hospitality",
    shortDesc: "Reservation reminders, review generation, and customer reactivation systems for restaurants and hotels.",
    pain: "No-shows kill table revenue. Bad reviews from one-off issues drag down ratings. Customers who came once never come back.",
    recommendedSystems: ["booking-optimization", "review-generation", "reactivation-campaigns"],
    exampleWorkflow:
      "Reservations get smart reminders (24h + 4h) with one-tap confirm. After dining, customers receive a personalized SMS — happy ones routed to Google / Yelp, complaints intercepted to a private feedback form. Customers who haven't visited in 60+ days get a personalized 'we miss you' offer.",
    caseSnapshot: [
      { metric: "-55%", label: "no-show rate" },
      { metric: "+4.7 stars", label: "average rating maintained" },
      { metric: "+22%", label: "repeat customer rate" },
    ],
  },
  {
    slug: "ecommerce",
    icon: "🛒",
    name: "E-commerce & DTC Brands",
    shortDesc: "Cart recovery, AI shopping assistant, and personalized win-back sequences that compound monthly revenue.",
    pain: "70%+ of carts are abandoned. Customer service tickets eat margins. Past customers don't come back without expensive paid retargeting.",
    recommendedSystems: ["ai-sales-assistant", "reactivation-campaigns", "reporting-automation"],
    exampleWorkflow:
      "AI shopping assistant answers product questions 24/7 in chat and DMs — handling 75% autonomously. Abandoned carts trigger personalized 3-email recovery sequences referencing the specific products. Past customers get monthly AI-personalized win-back offers based on what they bought before.",
    caseSnapshot: [
      { metric: "+18%", label: "cart recovery rate" },
      { metric: "75%", label: "of CS tickets handled by AI" },
      { metric: "4×", label: "win-back vs cold acquisition" },
    ],
  },
  {
    slug: "saas",
    icon: "💻",
    name: "SaaS & Digital Products",
    shortDesc: "Trial-to-paid conversion automation, in-product qualification, and customer health monitoring.",
    pain: "Free trial users churn before activation. Sales team can't qualify fast enough. Customer health is invisible until users cancel.",
    recommendedSystems: ["ai-sales-assistant", "lead-followup", "reporting-automation"],
    exampleWorkflow:
      "AI Sales Assistant handles website chat and qualifies demo requests against ICP criteria. Trial users get personalized onboarding sequences based on the actions they took (and didn't take) in-product. Customer health scores trigger automated check-ins from CS before users churn.",
    caseSnapshot: [
      { metric: "+30%", label: "trial-to-paid conversion" },
      { metric: "<60s", label: "demo qualification time" },
      { metric: "-25%", label: "preventable churn" },
    ],
  },
  {
    slug: "coaching-consulting",
    icon: "🎯",
    name: "Coaching & Consulting",
    shortDesc: "Lead qualification, intake automation, and client onboarding systems that scale your time.",
    pain: "You're personally answering every Instagram DM and discovery call inquiry. Most aren't qualified. You're spending 20+ hours/week on intake instead of delivering.",
    recommendedSystems: ["ai-sales-assistant", "lead-followup", "reactivation-campaigns"],
    exampleWorkflow:
      "AI Assistant handles all DMs and website chat — qualifies leads against your ideal client profile, books qualified discovery calls automatically. Past clients get monthly check-ins and personalized upsell offers. Cold leads get nurtured with value-add content until they're ready.",
    caseSnapshot: [
      { metric: "20 hrs/wk", label: "reclaimed time" },
      { metric: "+50%", label: "qualified discovery calls" },
      { metric: "3×", label: "past client reactivation rate" },
    ],
  },
  {
    slug: "fitness-wellness",
    icon: "💪",
    name: "Fitness Studios & Wellness",
    shortDesc: "Member retention, class booking optimization, and lead-to-trial conversion systems.",
    pain: "New members churn in the first 90 days. Class no-shows leave seats empty. Leads ghost between inquiry and first session.",
    recommendedSystems: ["lead-followup", "booking-optimization", "reactivation-campaigns"],
    exampleWorkflow:
      "New inquiries get personalized responses within minutes with a free first-class offer. Class bookings get smart reminders + waitlist auto-fill. New members get a structured 90-day onboarding sequence to drive habit formation. Members who skip 7+ days get a check-in.",
    caseSnapshot: [
      { metric: "+40%", label: "lead-to-trial conversion" },
      { metric: "-50%", label: "no-show rate" },
      { metric: "+25%", label: "90-day member retention" },
    ],
  },
  {
    slug: "agencies",
    icon: "🎨",
    name: "Agencies & Creative Studios",
    shortDesc: "Lead qualification, proposal automation, and reporting systems for client-services businesses.",
    pain: "Bad-fit leads waste hours. Proposals take days to write. Client reporting eats team capacity that should be billable.",
    recommendedSystems: ["ai-sales-assistant", "lead-followup", "reporting-automation"],
    exampleWorkflow:
      "AI assistant qualifies inquiries against project size, industry, and budget — books qualified discovery calls automatically. Post-call, the AI drafts personalized proposals using your templates. Weekly client reports are generated automatically from your tools and delivered to clients with a custom summary.",
    caseSnapshot: [
      { metric: "+60%", label: "qualified call rate" },
      { metric: "2 hrs → 15 min", label: "proposal generation time" },
      { metric: "8 hrs/wk", label: "reporting time eliminated" },
    ],
  },
  {
    slug: "financial-services",
    icon: "💰",
    name: "Financial Services",
    shortDesc: "Lead qualification, compliance-aware client communication, and review systems built for regulated industries.",
    pain: "Compliance requirements slow down communication. Lead follow-up is inconsistent. Reviews are sparse despite happy clients.",
    recommendedSystems: ["lead-followup", "review-generation", "ai-sales-assistant"],
    exampleWorkflow:
      "AI assistant qualifies inquiries against service fit, asset levels, and compliance flags. Pre-approved response templates handle 80% of inquiries within compliance guidelines. Qualified leads book consultations directly. Post-engagement, clients receive review requests routed to industry-specific platforms.",
    caseSnapshot: [
      { metric: "100%", label: "compliance-reviewed messaging" },
      { metric: "+40%", label: "consultation booking rate" },
      { metric: "4×", label: "review volume increase" },
    ],
  },
  {
    slug: "automotive",
    icon: "🚗",
    name: "Automotive & Dealerships",
    shortDesc: "Lead nurture, test drive booking, and service department follow-up systems for dealerships and shops.",
    pain: "Internet leads are slow to follow up. Service appointments have high no-show rates. Past customers don't come back for service.",
    recommendedSystems: ["lead-followup", "booking-optimization", "reactivation-campaigns"],
    exampleWorkflow:
      "New internet leads get personalized responses within 2 minutes — referencing the specific vehicle or service they inquired about. Test drives and service appointments get smart reminder sequences. Past customers receive timed maintenance reminders based on vehicle history.",
    caseSnapshot: [
      { metric: "<2 min", label: "internet lead response time" },
      { metric: "-45%", label: "service no-show rate" },
      { metric: "+30%", label: "service customer retention" },
    ],
  },
];

export function getSystem(slug: string): AISystem | undefined {
  return SYSTEMS.find((s) => s.slug === slug);
}

export function getIndustry(slug: string): Industry | undefined {
  return INDUSTRIES.find((i) => i.slug === slug);
}
