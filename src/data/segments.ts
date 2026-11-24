export type Segment = {
  slug: string;
  name: string;
  pain: string;
  buyingCycle: string;
  emailPriorities: string[];
  topApps: string[];
  metrics: string[];
};

// Planning hypotheses, not observed category benchmarks. Metrics are proposed measures;
// define denominators and observation windows before evaluating a cohort.
// topApps preserves legacy editorial navigation candidates, not winners or verified integrations.
export const SEGMENTS: Segment[] = [
  {
    slug: 'fashion',
    name: 'fashion stores',
    pain: 'seasonality, size availability, drops, and fast-moving inventory',
    buyingCycle: "Use collection demand and variant availability; merchandising owns drop eligibility and cancels alerts when a size sells out.",
    emailPriorities: ['Drop and waitlist campaigns', 'Size and fit education', 'Back-in-stock by variant', 'Seasonal winback before clearance'],
    topApps: ['klaviyo', 'sequenzy', 'omnisend', 'privy'],
    metrics: ['Revenue per recipient by collection', 'Second purchase within a preselected cohort window', 'Return rate by email segment', 'Full-price vs discount purchase ratio'],
  },
  {
    slug: 'beauty',
    name: 'beauty brands',
    pain: 'replenishment timing, bundles, subscriptions, shades, and routine education',
    buyingCycle: "Estimate depletion from pack size and customer usage; the product team owns routine guidance and subscriptions suppress duplicate reorder prompts.",
    emailPriorities: ['Replenishment by product usage', 'Routine education sequences', 'Shade matching follow-up', 'Subscription skip/churn prevention'],
    topApps: ['klaviyo', 'sequenzy', 'omnisend', 'yotpo-email-sms'],
    metrics: ['Replenishment conversion rate', 'Subscription retention by renewal cohort', 'Bundle attach rate from email', 'Unsubscribe rate on education vs promo'],
  },
  {
    slug: 'supplements',
    name: 'supplement stores',
    pain: 'compliance-safe claims, subscriptions, replenishment, and education',
    buyingCycle: "Use labeled serving quantities and confirmed purchase history; a qualified content reviewer owns claims and the subscription owner checks renewal state.",
    emailPriorities: ['Compliance-safe education content', 'Replenishment timing by SKU', 'Subscription management emails', 'Ingredient and usage guides'],
    topApps: ['klaviyo', 'sequenzy', 'drip', 'omnisend'],
    metrics: ['Subscription churn from email touchpoints', 'Replenishment revenue per active subscriber', 'Compliance review pass rate', 'LTV by acquisition source'],
  },
  {
    slug: 'jewelry',
    name: 'jewelry stores',
    pain: 'gift timing, high-consideration purchases, and trust-building',
    buyingCycle: "Follow the stated occasion and unresolved sizing or engraving decision; an advisor owns handoff and fulfillment confirms any gift cutoff.",
    emailPriorities: ['Gift guide and occasion campaigns', 'Trust-building education', 'Financing and warranty proof', 'Anniversary and milestone reminders'],
    topApps: ['klaviyo', 'sequenzy', 'activecampaign', 'omnisend'],
    metrics: ['Gift purchase attribution', 'Average consideration time', 'High-AOV conversion from nurture', 'Repeat gift buyer rate'],
  },
  {
    slug: 'home-goods',
    name: 'home goods stores',
    pain: 'larger catalogs, style preferences, and delayed purchase cycles',
    buyingCycle: "Follow the room project and confirmed dimensions; merchandising owns compatible recommendations and support resolves delivery or installation blockers.",
    emailPriorities: ['Room and style segmentation', 'Inspiration content series', 'Cross-sell by room completion', 'Seasonal refresh campaigns'],
    topApps: ['klaviyo', 'sequenzy', 'drip', 'mailchimp'],
    metrics: ['Cross-sell revenue per room segment', 'Browse-to-purchase window', 'Catalog engagement depth', 'Project completion rate'],
  },
  {
    slug: 'food-and-beverage',
    name: 'food and beverage brands',
    pain: 'repeat purchase windows, subscriptions, and limited-time flavors',
    buyingCycle: "Use pack quantity, storage needs and actual reorder history; fulfillment owns destination availability and subscription state gates repeat prompts.",
    emailPriorities: ['Replenishment by consumption rate', 'New flavor launch alerts', 'Subscription box previews', 'Perishability and shipping clarity'],
    topApps: ['klaviyo', 'omnisend', 'sequenzy', 'rejoiner'],
    metrics: ['Reorder rate by product', 'Subscription skip recovery', 'Launch sell-through from email', 'Margin after shipping promos'],
  },
  {
    slug: 'pet-products',
    name: 'pet product stores',
    pain: 'pet lifecycle, reorder timing, and product education',
    buyingCycle: "Use household consumption and the purchased SKU rather than breed alone; the customer can correct usage and the subscription owner cancels duplicate reminders.",
    emailPriorities: ['Pet life-stage segmentation', 'Reorder by consumption math', 'Breed/size-specific recommendations', 'New pet onboarding series'],
    topApps: ['klaviyo', 'omnisend', 'sequenzy', 'drip'],
    metrics: ['Reorder rate by pet segment', 'Life-stage transition revenue', 'Subscription retention', 'Education-to-purchase conversion'],
  },
  {
    slug: 'digital-products',
    name: 'digital product shops',
    pain: 'delivery, onboarding, cross-sells, and low-inventory constraints',
    buyingCycle: "Confirm access and activation before an upgrade invitation; support owns failed delivery and product education follows the first incomplete task.",
    emailPriorities: ['Instant delivery and access emails', 'Onboarding and activation series', 'Cross-sell by purchase behavior', 'Renewal and upgrade paths'],
    topApps: ['sequenzy', 'activecampaign', 'klaviyo', 'drip'],
    metrics: ['Activation rate post-purchase', 'Cross-sell after confirmed activation', 'Renewal conversion', 'Support ticket reduction from onboarding'],
  },
  {
    slug: 'print-on-demand',
    name: 'print-on-demand stores',
    pain: 'trend cycles, personalization, and margin-sensitive promos',
    buyingCycle: "Follow proof approval, blank availability and production capacity; production owns readiness and a completed customization cancels unfinished-order nudges.",
    emailPriorities: ['Trend and design drop alerts', 'Personalization follow-up', 'Margin-safe discount rules', 'Creator and niche community content'],
    topApps: ['omnisend', 'privy', 'klaviyo', 'sequenzy'],
    metrics: ['Margin per email order', 'Trend drop sell-through', 'Personalization completion rate', 'Discount dependency ratio'],
  },
  {
    slug: 'high-aov',
    name: 'high-AOV stores',
    pain: 'longer consideration, trust, financing, and expert proof',
    buyingCycle: "Follow the unresolved specification, consultation or financing decision; the assigned advisor owns the next contact and stops nurture after purchase.",
    emailPriorities: ['Extended nurture sequences', 'Expert proof and case studies', 'Financing and warranty education', 'Consultation booking follow-up'],
    topApps: ['klaviyo', 'activecampaign', 'sequenzy', 'drip'],
    metrics: ['Consideration-to-purchase window', 'Financing attach rate', 'Consultation-to-sale conversion', 'Full-price purchase percentage'],
  },
  {
    slug: 'subscription-boxes',
    name: 'subscription box brands',
    pain: 'subscriber retention, skips, churn, and upcoming-box previews',
    buyingCycle: "Use the current contract, edition, skip and prepaid-gift state; the subscription team owns change cutoffs and excludes canceled or paused contracts as appropriate.",
    emailPriorities: ['Upcoming box preview emails', 'Skip recovery sequences', 'Churn prevention at risk months', 'Referral and gifting campaigns'],
    topApps: ['klaviyo', 'sequenzy', 'rejoiner', 'omnisend'],
    metrics: ['Skip-to-active recovery rate', 'Churn by subscriber month', 'Referral revenue from email', 'Box preview engagement correlation'],
  },
  {
    slug: 'b2b-wholesale',
    name: 'B2B wholesale Shopify stores',
    pain: 'account approvals, bulk ordering, and rep follow-up',
    buyingCycle: "Use account approval, price-list access and buyer authority; the account representative owns follow-up and checks open orders before a reorder invitation.",
    emailPriorities: ['Account approval and onboarding', 'Bulk order reminders', 'Rep-triggered follow-up', 'Catalog and MOQ updates'],
    topApps: ['activecampaign', 'klaviyo', 'sequenzy', 'brevo'],
    metrics: ['Account activation rate', 'Bulk reorder frequency', 'Rep-attributed revenue', 'MOQ compliance from email prompts'],
  },
];

export function segmentBySlug(slug: string) {
  return SEGMENTS.find((s) => s.slug === slug);
}
