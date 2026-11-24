import { APPS as CATALOG } from '../content';

export type ShopifyApp = {
  slug: string;
  name: string;
  category: string;
  bestFor: string;
  pricing: string;
  priceDetail: string;
  rating: string;
  shopifyDepth: 'Native' | 'Deep' | 'Basic' | 'Integration' | 'Not assessed';
  automationDepth: 'Advanced' | 'Solid' | 'Basic' | 'Minimal' | 'Not assessed';
  tagline: string;
  strengths: string[];
  limits: string[];
  features: string[];
  channels: string[];
  shopifyFit: string;
};

// Preserve this catalog order: comparisonPairs depends on it.
const ORDER = ["postscript", "sequenzy", "attentive", "smsbump", "recart", "omnisend", "klaviyo", "yotpo-email-sms", "privy", "firepush", "sendlane", "brevo", "drip", "rejoiner", "marsello", "aftership-email", "justuno", "shopify-email", "mailchimp", "activecampaign", "tinyemail"];

export const APPS: ShopifyApp[] = ORDER.map((slug) => {
  const app = CATALOG.find((entry) => entry.slug === slug);
  if (!app) throw new Error(`Missing catalog entry: ${slug}`);
  return { ...app, priceDetail: app.pricing, rating: "Not independently rated",
    shopifyDepth: "Not assessed", automationDepth: "Not assessed",
    tagline: app.bestFor, features: [...app.strengths, ...app.limits] };
});

export function appBySlug(slug: string) {
  return APPS.find((a) => a.slug === slug);
}

export function channelApps(channel: string) {
  return APPS.filter((app) => app.channels.includes(channel));
}

export function comparisonPairs() {
  const pairs: [ShopifyApp, ShopifyApp][] = [];
  // Keep the existing editorial pair inventory, including legacy migration routes.
  const smsApps = APPS;
  for (let i = 0; i < smsApps.length; i++) {
    for (let j = i + 1; j < Math.min(smsApps.length, i + 7); j++) {
      pairs.push([smsApps[i], smsApps[j]]);
    }
  }
  return pairs.slice(0, 70);
}
