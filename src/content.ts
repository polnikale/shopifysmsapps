export type SiteProfile = { domain:string; name:string; shortName:string; primaryKeyword:string; keywordPlural:string; channel:string; angle:string; heroPromise:string; bestOverallReason:string; accent:string; vibe:string; intro:string; };
export const site: SiteProfile = {domain:"shopifysmsapps.com",name:"Shopify SMS Apps",shortName:"SMS Apps",primaryKeyword:"Shopify SMS apps",keywordPlural:"Shopify SMS apps",channel:"sms",angle:"SMS apps that recover urgent Shopify revenue without wrecking consent or margins",heroPromise:"Compare Shopify SMS apps for Shopify stores by lifecycle fit, store data depth, pricing, implementation workload, consent handling, and revenue impact.",bestOverallReason:"Evaluate lifecycle email alongside SMS: assign each channel a purpose and verify shared purchase suppression before enabling overlapping flows.",accent:"cyan",vibe:"dark signal-room SMS operations console",intro:"This site treats SMS as a scarce interrupt. Every recommendation is filtered through consent, timing, quiet hours, message cost, product context, and whether a text actually deserves to interrupt someone."};
export type App = { slug:string; name:string; category:string; bestFor:string; pricing:string; strengths:string[]; limits:string[]; shopifyFit:string; channels:string[]; };
// Supplier scope checked 2026-11-25; the exercises below are proposed, not observed tests.
// Yotpo: https://email-and-sms.yotpo.com/ and https://www.yotpo.com/blog/email-sms-migration-partners/
// Shopify: https://help.shopify.com/en/manual/promoting-marketing/create-marketing/shopify-messaging
// https://changelog.shopify.com/posts/create-sms-marketing-automations-in-shopify-messaging
// Sequenzy: https://www.sequenzy.com/about and https://www.sequenzy.com/pricing
// Postscript: https://postscript.io/launch ; Attentive: https://www.attentive.com/email-marketing
// Drip: https://www.drip.com/sms
export const APPS: App[] = [
  {
    "slug": "postscript",
    "name": "Postscript",
    "category": "Email and SMS marketing",
    "bestFor": "Evaluate for email and SMS coordination",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Cancel a queued cart text after a purchase arrives through the email journey.",
      "Evaluation: Map email and SMS subscriber identities without treating email consent as SMS consent."
    ],
    "limits": [
      "Pilot requirement: Compare message cost and recovered margin against a held-out cart cohort."
    ],
    "shopifyFit": "Proposed evaluation: Cancel a queued cart text after a purchase arrives through the email journey. Compare message cost and recovered margin against a held-out cart cohort.",
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ]
  },
  {
    "slug": "sequenzy",
    "name": "Sequenzy",
    "category": "Lifecycle email; SMS & MMS paid beta",
    "bestFor": "Evaluate for Shopify lifecycle setup with a paid SMS beta",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Reconcile a Shopify customer, product and order before enabling a post-purchase flow.",
      "Evaluation: Check paid SMS beta eligibility, sender provisioning and destination coverage."
    ],
    "limits": [
      "Pilot requirement: Preview generated steps and test purchase suppression before granting sending access."
    ],
    "shopifyFit": "Proposed evaluation: Reconcile a Shopify customer, product and order before enabling a post-purchase flow. Preview generated steps and test purchase suppression before granting sending access.",
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ]
  },
  {
    "slug": "attentive",
    "name": "Attentive",
    "category": "SMS and email marketing",
    "bestFor": "Evaluate for email and SMS program consolidation",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Separate triggered email from campaign email in the proposed contract.",
      "Evaluation: Demonstrate a shared audience exclusion across an email journey and a queued text."
    ],
    "limits": [
      "Pilot requirement: Assign an owner for migration, domain warm-up and reply escalation."
    ],
    "shopifyFit": "Proposed evaluation: Separate triggered email from campaign email in the proposed contract. Assign an owner for migration, domain warm-up and reply escalation.",
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ]
  },
  {
    "slug": "omnisend",
    "name": "Omnisend",
    "category": "Email, SMS, and push",
    "bestFor": "Evaluate for one coordinated cart journey",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Trace a checkout event through email, SMS and purchase cancellation.",
      "Evaluation: Preview product blocks with unavailable variants and incomplete customer data."
    ],
    "limits": [
      "Pilot requirement: Compare contact charges with destination-specific SMS spend."
    ],
    "shopifyFit": "Proposed evaluation: Trace a checkout event through email, SMS and purchase cancellation. Compare contact charges with destination-specific SMS spend.",
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ]
  },
  {
    "slug": "klaviyo",
    "name": "Klaviyo",
    "category": "Email and SMS automation",
    "bestFor": "Evaluate for product-aware audience logic",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Reconcile Shopify order and refund events with a customer segment.",
      "Evaluation: Test a flow split for variant interest without duplicating customer profiles."
    ],
    "limits": [
      "Pilot requirement: Measure held-out margin rather than adding email and SMS attribution totals."
    ],
    "shopifyFit": "Proposed evaluation: Reconcile Shopify order and refund events with a customer segment. Measure held-out margin rather than adding email and SMS attribution totals.",
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ]
  },
  {
    "slug": "yotpo-email-sms",
    "name": "Yotpo Email & SMS",
    "category": "Retired messaging product",
    "bestFor": "Evaluate for migration from retired messaging",
    "pricing": "Retired; evaluate replacement and migration costs",
    "strengths": [
      "Evaluation: Export available consent provenance and suppression records from retained backups.",
      "Evaluation: Separate Reviews and Loyalty integrations from the retired messaging sender."
    ],
    "limits": [
      "Pilot requirement: Validate replacement event mappings before restarting campaigns."
    ],
    "shopifyFit": "Yotpo messaging is decommissioned. Reviews and Loyalty are separate products; these legacy routes support migration research. Export available consent provenance and suppression records from retained backups.",
    "channels": []
  },
  {
    "slug": "privy",
    "name": "Privy",
    "category": "Popups, email, and SMS",
    "bestFor": "Evaluate for capture-to-welcome handoff",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Record which form and disclosure produced each channel subscription.",
      "Evaluation: Test coupon delivery without enrolling unsubscribed visitors in SMS."
    ],
    "limits": [
      "Pilot requirement: Compare usable opted-in subscribers with popup impressions."
    ],
    "shopifyFit": "Proposed evaluation: Record which form and disclosure produced each channel subscription. Compare usable opted-in subscribers with popup impressions.",
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ]
  },
  {
    "slug": "smsbump",
    "name": "SMSBump",
    "category": "Retired messaging product",
    "bestFor": "Evaluate for migration from legacy SMSBump records",
    "pricing": "Retired; evaluate replacement and migration costs",
    "strengths": [
      "Evaluation: Inventory retained keyword, sender and opt-out records before choosing a replacement.",
      "Evaluation: Prevent legacy automations from being recreated twice during migration."
    ],
    "limits": [
      "Pilot requirement: Reconcile consent by destination and collection method."
    ],
    "shopifyFit": "Yotpo messaging is decommissioned. Reviews and Loyalty are separate products; these legacy routes support migration research. Inventory retained keyword, sender and opt-out records before choosing a replacement.",
    "channels": []
  },
  {
    "slug": "recart",
    "name": "Recart",
    "category": "SMS and messenger recovery",
    "bestFor": "Evaluate for mobile cart recovery",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Demonstrate checkout identity matching and purchase cancellation.",
      "Evaluation: Assign reply ownership and distinguish service replies from marketing enrollment."
    ],
    "limits": [
      "Pilot requirement: Compare recovered contribution margin after message and incentive costs."
    ],
    "shopifyFit": "Proposed evaluation: Demonstrate checkout identity matching and purchase cancellation. Compare recovered contribution margin after message and incentive costs.",
    "channels": [
      "sms",
      "marketing",
      "cart recovery"
    ]
  },
  {
    "slug": "shopify-email",
    "name": "Shopify Messaging (formerly Shopify Email)",
    "category": "Native email and SMS automation",
    "bestFor": "Evaluate for native Shopify Messaging automation",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Build an email and SMS automation in Shopify Admin using a real store event.",
      "Evaluation: Verify destination eligibility and SMS spending controls for the store."
    ],
    "limits": [
      "Pilot requirement: Check Shopify Flow needs for custom branching before buying a second sender."
    ],
    "shopifyFit": "Proposed evaluation: Build an email and SMS automation in Shopify Admin using a real store event. Check Shopify Flow needs for custom branching before buying a second sender.",
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ]
  },
  {
    "slug": "mailchimp",
    "name": "Mailchimp",
    "category": "General email marketing",
    "bestFor": "Evaluate for existing audience migration or reuse",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Reconcile Shopify customers with existing audience identities.",
      "Evaluation: Test whether archived and unsubscribed contacts stay suppressed after sync."
    ],
    "limits": [
      "Pilot requirement: Compare ongoing audience maintenance with the cost of rebuilding existing campaigns."
    ],
    "shopifyFit": "Proposed evaluation: Reconcile Shopify customers with existing audience identities. Compare ongoing audience maintenance with the cost of rebuilding existing campaigns.",
    "channels": [
      "email",
      "marketing"
    ]
  },
  {
    "slug": "drip",
    "name": "Drip",
    "category": "Ecommerce automation",
    "bestFor": "Evaluate for email and SMS workflow control",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Test the order of email and SMS steps after a Shopify purchase.",
      "Evaluation: Confirm sender setup, destination eligibility and consent requirements for SMS."
    ],
    "limits": [
      "Pilot requirement: Verify event-based exit rules and refund exclusions in a pilot workflow."
    ],
    "shopifyFit": "Proposed evaluation: Test the order of email and SMS steps after a Shopify purchase. Verify event-based exit rules and refund exclusions in a pilot workflow.",
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ]
  },
  {
    "slug": "activecampaign",
    "name": "ActiveCampaign",
    "category": "Marketing automation and CRM",
    "bestFor": "Evaluate for commerce and sales handoff",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Route a wholesale inquiry to a sales owner without starting a retail promotion.",
      "Evaluation: Reconcile account-level sales state with Shopify customer records."
    ],
    "limits": [
      "Pilot requirement: Test whether a closed sales opportunity cancels automated follow-up."
    ],
    "shopifyFit": "Proposed evaluation: Route a wholesale inquiry to a sales owner without starting a retail promotion. Test whether a closed sales opportunity cancels automated follow-up.",
    "channels": [
      "email",
      "marketing"
    ]
  },
  {
    "slug": "brevo",
    "name": "Brevo",
    "category": "Email, SMS, and transactional messaging",
    "bestFor": "Evaluate for transactional and promotional separation",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Keep order-service messages distinct from promotional consent.",
      "Evaluation: Reconcile Shopify events with the intended contact and sending identity."
    ],
    "limits": [
      "Pilot requirement: Model transactional volume separately from marketing SMS segments."
    ],
    "shopifyFit": "Proposed evaluation: Keep order-service messages distinct from promotional consent. Model transactional volume separately from marketing SMS segments.",
    "channels": [
      "email",
      "sms",
      "marketing"
    ]
  },
  {
    "slug": "sendlane",
    "name": "Sendlane",
    "category": "Email and SMS for ecommerce",
    "bestFor": "Evaluate for retention migration with an assigned operator",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Inventory live flows and their exit conditions before migration.",
      "Evaluation: Demonstrate cancellation across email and SMS after an order event."
    ],
    "limits": [
      "Pilot requirement: Specify who repairs broken mappings and how service scope is priced."
    ],
    "shopifyFit": "Proposed evaluation: Inventory live flows and their exit conditions before migration. Specify who repairs broken mappings and how service scope is priced.",
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ]
  },
  {
    "slug": "aftership-email",
    "name": "AfterShip Email",
    "category": "Email and SMS marketing",
    "bestFor": "Evaluate for delivery-aware retention timing",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Identify which product owns tracking updates and which owns promotions.",
      "Evaluation: Delay review requests until delivery state is reliable."
    ],
    "limits": [
      "Pilot requirement: Suppress promotional recovery when an order is in a returns or support workflow."
    ],
    "shopifyFit": "Proposed evaluation: Identify which product owns tracking updates and which owns promotions. Suppress promotional recovery when an order is in a returns or support workflow.",
    "channels": [
      "email",
      "sms",
      "marketing"
    ]
  },
  {
    "slug": "justuno",
    "name": "Justuno",
    "category": "Conversion and list capture",
    "bestFor": "Evaluate for onsite intent capture handoff",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Map form responses and consent timestamps into the chosen sender.",
      "Evaluation: Verify quiz preferences remain separate from channel permission."
    ],
    "limits": [
      "Pilot requirement: Measure qualified subscribers and downstream purchases rather than form completion alone."
    ],
    "shopifyFit": "Proposed evaluation: Map form responses and consent timestamps into the chosen sender. Measure qualified subscribers and downstream purchases rather than form completion alone.",
    "channels": [
      "marketing"
    ]
  },
  {
    "slug": "rejoiner",
    "name": "Rejoiner",
    "category": "Managed email and SMS lifecycle",
    "bestFor": "Evaluate for managed lifecycle operations",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Specify responsibility for copy, triggers, QA and reply handling.",
      "Evaluation: Review the scope of services separately from software sending access."
    ],
    "limits": [
      "Pilot requirement: Agree on holdout measurement and an exportable flow inventory."
    ],
    "shopifyFit": "Proposed evaluation: Specify responsibility for copy, triggers, QA and reply handling. Agree on holdout measurement and an exportable flow inventory.",
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ]
  },
  {
    "slug": "marsello",
    "name": "Marsello",
    "category": "Email, SMS, and loyalty",
    "bestFor": "Evaluate for loyalty and point-of-sale coordination",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Reconcile online and POS identities before issuing loyalty offers.",
      "Evaluation: Test tier changes, redeemed rewards and refund reversals."
    ],
    "limits": [
      "Pilot requirement: Measure repeat margin without double-counting loyalty discounts."
    ],
    "shopifyFit": "Proposed evaluation: Reconcile online and POS identities before issuing loyalty offers. Measure repeat margin without double-counting loyalty discounts.",
    "channels": [
      "email",
      "sms",
      "marketing"
    ]
  },
  {
    "slug": "firepush",
    "name": "Firepush",
    "category": "Email, SMS, and web push",
    "bestFor": "Evaluate for push and recovery overlap",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Demonstrate which recovery channels can actually be enabled for the store.",
      "Evaluation: Cancel pending reminders across senders after a purchase."
    ],
    "limits": [
      "Pilot requirement: Separate browser permission from email and SMS consent."
    ],
    "shopifyFit": "Proposed evaluation: Demonstrate which recovery channels can actually be enabled for the store. Separate browser permission from email and SMS consent.",
    "channels": [
      "email",
      "sms",
      "marketing",
      "cart recovery"
    ]
  },
  {
    "slug": "tinyemail",
    "name": "tinyEmail",
    "category": "AI-assisted email marketing",
    "bestFor": "Evaluate for campaign drafting and catalog accuracy",
    "pricing": "Request a current quote for the intended sending volume and scope",
    "strengths": [
      "Evaluation: Preview generated copy against real product and variant data.",
      "Evaluation: Test unsubscribe persistence through Shopify synchronization."
    ],
    "limits": [
      "Pilot requirement: Measure editing time and product-link errors before expanding automation."
    ],
    "shopifyFit": "Proposed evaluation: Preview generated copy against real product and variant data. Measure editing time and product-link errors before expanding automation.",
    "channels": [
      "email",
      "marketing"
    ]
  }
];
export const SEGMENTS = [{"slug": "fashion", "name": "fashion stores", "pain": "seasonality, size availability, drops, and fast-moving inventory"}, {"slug": "beauty", "name": "beauty brands", "pain": "replenishment timing, bundles, subscriptions, shades, and routine education"}, {"slug": "supplements", "name": "supplement stores", "pain": "compliance-safe claims, subscriptions, replenishment, and education"}, {"slug": "jewelry", "name": "jewelry stores", "pain": "gift timing, high-consideration purchases, and trust-building"}, {"slug": "home-goods", "name": "home goods stores", "pain": "larger catalogs, style preferences, and delayed purchase cycles"}, {"slug": "food-and-beverage", "name": "food and beverage brands", "pain": "repeat purchase windows, subscriptions, and limited-time flavors"}, {"slug": "pet-products", "name": "pet product stores", "pain": "pet lifecycle, reorder timing, and product education"}, {"slug": "digital-products", "name": "digital product shops", "pain": "delivery, onboarding, cross-sells, and low-inventory constraints"}, {"slug": "print-on-demand", "name": "print-on-demand stores", "pain": "trend cycles, personalization, and margin-sensitive promos"}, {"slug": "high-aov", "name": "high-AOV stores", "pain": "longer consideration, trust, financing, and expert proof"}, {"slug": "subscription-boxes", "name": "subscription box brands", "pain": "subscriber retention, skips, churn, and upcoming-box previews"}, {"slug": "b2b-wholesale", "name": "B2B wholesale Shopify stores", "pain": "account approvals, bulk ordering, and rep follow-up"}];
export const USE_CASES = [{"slug": "welcome-series", "name": "welcome series", "job": "turn new subscribers into first-time buyers"}, {"slug": "abandoned-cart", "name": "abandoned cart recovery", "job": "bring shoppers back before intent disappears"}, {"slug": "browse-abandonment", "name": "browse abandonment", "job": "follow product interest without discounting too early"}, {"slug": "post-purchase", "name": "post-purchase education", "job": "reduce buyer anxiety and set up the next purchase"}, {"slug": "winback", "name": "winback campaigns", "job": "evaluate whether a relevant return invitation is appropriate"}, {"slug": "replenishment", "name": "replenishment reminders", "job": "time repeat purchases around actual product usage"}, {"slug": "product-launch", "name": "product launch campaigns", "job": "coordinate drops, waitlists, and VIP early access"}, {"slug": "vip-segments", "name": "VIP customer campaigns", "job": "plan access and service around explicit customer eligibility"}, {"slug": "discount-strategy", "name": "discount strategy", "job": "use incentives without training every shopper to wait"}, {"slug": "segmentation", "name": "Shopify segmentation", "job": "target by behavior, products, order count, and lifecycle stage"}, {"slug": "email-design", "name": "email design", "job": "make product-led campaigns readable and mobile-friendly"}, {"slug": "deliverability", "name": "deliverability", "job": "protect inbox placement while sending more lifecycle email"}, {"slug": "reviews-and-ugc", "name": "reviews and UGC", "job": "pull social proof into retention campaigns"}, {"slug": "loyalty", "name": "loyalty campaigns", "job": "convert repeat buyers into habitual customers"}, {"slug": "analytics", "name": "revenue analytics", "job": "measure incremental revenue, not only attributed clicks"}, {"slug": "black-friday", "name": "Black Friday campaigns", "job": "prepare high-volume campaigns without burning the list"}, {"slug": "holiday-gifting", "name": "holiday gifting", "job": "match gift timing, deadlines, and bundles"}, {"slug": "back-in-stock", "name": "back-in-stock alerts", "job": "capture demand for unavailable products"}];
export function siteFromHost(){ return site; }
export function appBySlug(slug:string){ return APPS.find(a=>a.slug===slug); }
export function appPairs(){ const pairs:[App,App][]=[]; for(let i=0;i<APPS.length;i++) for(let j=i+1;j<Math.min(APPS.length,i+7);j++) pairs.push([APPS[i],APPS[j]]); return pairs.slice(0,70); }
export function allPaths(){ const paths=['','apps','compare','guides','use-cases','for']; APPS.forEach(a=>paths.push(`apps/${a.slug}`)); appPairs().forEach(([a,b])=>paths.push(`compare/${a.slug}-vs-${b.slug}`)); SEGMENTS.forEach(s=>paths.push(`for/${s.slug}`)); USE_CASES.forEach(u=>paths.push(`use-cases/${u.slug}`)); APPS.slice(1).forEach(a=>paths.push(`alternatives/${a.slug}-alternative`)); return paths; }
export function pageTitle(site:SiteProfile,path:string){ if(!path) return `${site.primaryKeyword}: workflow selection guide`; const p=path.split('/'); if(p[0]==='apps'){ if(!p[1]) return `${site.keywordPlural}: app catalog`; const a=appBySlug(p[1]); return `${a?.name || 'Shopify App'} Review for ${site.primaryKeyword}`;} if(p[0]==='compare'){ if(!p[1]) return `${site.primaryKeyword} Comparison Hub`; const [a,b]=p[1].split('-vs-').map(appBySlug); return `${a?.name} vs ${b?.name}: Shopify workflow comparison`;} if(p[0]==='for'){ if(!p[1]) return `${site.primaryKeyword} by Shopify Store Type`; const s=SEGMENTS.find(x=>x.slug===p[1]); return `Best ${site.primaryKeyword} for ${s?.name || 'Shopify Stores'}`;} if(p[0]==='use-cases'){ if(!p[1]) return `${site.primaryKeyword} Use Cases`; const u=USE_CASES.find(x=>x.slug===p[1]); return `Best ${site.primaryKeyword} for ${u?.name || 'Shopify Growth'}`;} if(p[0]==='alternatives'){ const a=appBySlug((p[1]||'').replace('-alternative','')); return `Best ${a?.name || 'App'} Alternatives for Shopify`;} if(p[0]==='guides'){ if(!p[1]) return `${site.primaryKeyword} Guides and Playbooks`; const gt: Record<string,string> = {'consent':'SMS consent collection on Shopify','deliverability':'SMS deliverability and carrier filtering','discount-discipline':'SMS discount discipline','email-sms-coordination':'Email and SMS coordination playbook','list-growth':'SMS list growth without consent debt','pricing':'Shopify SMS app pricing compared','quiet-hours':'Quiet hours and timezone SMS sending','segmentation':'SMS segmentation on Shopify','tcpa':'TCPA compliance for Shopify SMS','two-way-sms':'Two-way SMS and reply handling'}; return gt[p[1]] || `${site.primaryKeyword} Guide`;} return `Best ${site.primaryKeyword}`; }
export function description(site:SiteProfile,path:string){ return `${pageTitle(site,path)}. Review workflow fit, consent records, Shopify events, message costs and channel ownership before selecting a sender.`; }
