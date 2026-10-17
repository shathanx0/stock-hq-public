// Public morning brief: general market only. No portfolio, account or holdings content.
// Written alongside the private brief.js; build_public.py publishes it as brief.js on the public site and leak-checks it first.
window.HQ_BRIEF = {
  date: "2026-10-17",
  edition: "Saturday 17 October 2026 · Weekend edition",
  headline: "Chip stocks fall for an eighth straight day, the longest run since 2008, and the Nasdaq has its worst week since June as investors question how the AI build-out gets paid for",
  dek: "The Nasdaq fell 2.1% on Friday and about 4.5% over the week; the chip index fell 3.8%, its eighth loss in a row, after CoreWeave's bonds slid deeper into distressed territory. Oil rose about 3.5% to $101 a barrel and energy led the S&P 500. The Dow held up best and finished the week higher. Gold was flat near $4,168, and the FTSE 100 edged up as investors bought defensive stocks.",
  market: [
    { k: "S&P 500", v: "7,659.44", d: "−1.09% Fri · about −1.9% on the week" },
    { k: "Nasdaq", v: "26,140.03", d: "−2.14% Fri · about −4.5% on the week, worst since June" },
    { k: "FTSE 100", v: "~10,882", d: "+0.38% Fri · defensives led, banks lagged" },
    { k: "Gold", v: "~$4,168/oz", d: "about flat Fri · about −0.5% on the week" },
    { k: "Oil (WTI)", v: "$101.41", d: "+3.5% Fri · Brent $109.86 (+3.7%)" }
  ],
  sections: [
    {
      title: "The big picture",
      paras: [
        "Friday was the worst day of a bad week for anything tied to AI spending. The Nasdaq fell 2.14% to 26,140.03, the S&P 500 1.09% to 7,659.44 and the Russell 2000 of small caps 1.7%, while the Dow slipped only 0.34% to 52,002.41 and still finished the week up about 0.7%. The Philadelphia Semiconductor Index fell 3.8%, its eighth straight daily loss and its longest losing streak since 2008, taking it about 15.7% below its 6 October close. The trigger was again CoreWeave, which rents out AI data-centre capacity: its shares fell about 12% after yields on its bonds rose above 15%, a sign investors doubt it can easily refinance about $52 billion of debt and lease obligations. Memory makers were also hit by worries about Chinese competition, and the VIX fear gauge touched 22.3 intraday, its highest since June.",
        "Oil added to the pressure: US crude rose 3.5% to $101.41 and Brent 3.7% to $109.86 on Middle East supply risks, making energy the best S&P 500 sector (+2.5%), with utilities next (+1.4%). The week's hot consumer and producer price figures suggest inflation is spreading beyond energy, but futures still see roughly an 82% chance the Fed holds rates on 28 October; Fed officials are now in their pre-meeting quiet period. Gold was flat at about $4,168 and slightly lower for the week. In London the FTSE 100 rose 0.38% to about 10,882 as investors bought defensive stocks, while Lloyds fell after an RBC downgrade."
      ]
    },
    {
      title: "Stocks in the news",
      items: [
        { t: "CRWV", h: "CoreWeave fell about 12% on Friday and about 25% over the week as its bonds traded at distressed levels.", b: "Yields on its 2031 and 2032 bonds rose above 15%, which signals that lenders want a much higher return to hold its debt. Higher yields don't change payments on existing fixed-rate bonds, but they make refinancing and new borrowing far more expensive for a company that has borrowed heavily to build data centres. CEO Mike Intrator said its backlog 'more than supports' its debt. ARK Invest bought about $13.4 million of shares on 15 October." },
        { t: "AVGO", h: "Broadcom fell 4.5% as the chip sell-off widened beyond memory makers.", b: "Intel (−5.8%), Marvell (−5.6%), KLA (−5.0%), Lam Research (−4.9%) and Applied Materials (−4.8%) also fell sharply, while Nvidia lost only 1.4%. The iShares Semiconductor ETF (SOXX) is about 16% below its 6 October close but still up about 64% this year, so much of the year's gain remains." },
        { t: "NFLX", h: "Netflix fell 2.9% ahead of its results on Tuesday, a day after naming Peter Rice chief content officer.", b: "Analysts expect about $0.82 a share on about $12.9 billion of revenue. Investors want evidence that slower growth is about timing rather than a trend." },
        { t: "NEM", h: "Newmont rose 2.4% while gold was flat, ahead of its results on Thursday.", b: "It is the first big gold miner to report third-quarter results. Its results and cost figures are the first read on how much of the gold price is reaching miners' profits." }
      ]
    },
    {
      title: "Deals and catalysts worth researching",
      intro: "Deals and dated events with concrete numbers. None of these guarantees a profit: big news is often priced in within hours, and the payoff can take years.",
      items: [
        { t: "VRNS", h: "Proofpoint, owned by Thoma Bravo, agreed to buy data-security company Varonis for $49.75 a share in cash, about $6.3 billion.", b: "The price is 17% above Varonis's 1 September close, but the shares rose only about 2–3% after the announcement because takeover talk had been reported since June. It's a clean example of a deal being priced in before it was announced. Closing is expected in the first half of 2027." },
        { t: "LRCX", h: "Lam Research and Texas Instruments report on Wednesday, after the chip index's longest losing streak since 2008.", b: "Their outlooks will show whether chipmakers are slowing equipment orders, or whether ASML's comment that customers are already booking machines for 2029–30 holds up." },
        { t: "RTX", h: "RTX, Northrop Grumman and GE Aerospace report on Tuesday, after a run of large defence contracts.", b: "RTX won a $24.4 billion SM-6 missile contract on 1 October and an Air Force nuclear communications contract worth up to $8 billion on 13 October (only $800,000 obligated so far). Tuesday's results show how much of that backlog is turning into revenue." }
      ]
    }
  ],
  calendar: [
    { d: "Mon 19 Oct", e: "US homebuilder sentiment · Fifth Third and Zions results · China Q3 GDP" },
    { d: "Tue 20 Oct", e: "RTX, Northrop Grumman, GE Aerospace, General Motors results · US housing starts · Netflix (after US close)" },
    { d: "Wed 21 Oct", e: "UK September inflation (7am; August was 3.1%) · Tesla, Meta, IBM, Texas Instruments, Lam Research, SAP (after US close)" },
    { d: "Thu 22 Oct", e: "US jobless claims · Newmont, Western Digital, Lockheed Martin, Procter & Gamble, Blackstone results" },
    { d: "Fri 23 Oct", e: "US flash PMIs · University of Michigan sentiment (final) · American Express, SLB results" },
    { d: "Later", e: "Fed decision 28 Oct · UK Budget 28 Oct · Intel results 29 Oct · US midterms 3 Nov · Bank of England 5 Nov" }
  ],
  bottomLine: "The market spent this week asking who pays for the AI build-out, and the answer so far has hit chipmakers and heavily borrowed data-centre operators hardest while energy, utilities and the Dow held up. Next week's results from Lam Research, Texas Instruments, Tesla and Meta are the first hard data on whether AI spending is slowing.",
  sources: [
    ["ABC News/AP: How major US stock indexes fared Friday 10/16/2026", "https://abcnews.com/Business/wireStory/major-us-stock-indexes-fared-friday-10162026-137331951"],
    ["Yoopya: Why Wall Street fell, and what investors are watching before Monday", "https://www.yoopya.com/business/markets/wall-street-today-october-17-2026"],
    ["CNBC: Nasdaq slides 2% Friday to post worst week since June", "https://www.cnbc.com/2026/10/15/stock-market-today-live-updates.html"],
    ["24/7 Wall St: Chip stocks just fell 8 days in a row", "https://247wallst.com/investing/2026/10/17/chip-stocks-just-fell-8-days-in-a-row-their-longest-losing-streak-since-2008/"],
    ["BigGo Finance: Nasdaq tumbles 2.15%, chip index plunges 3.83%", "https://finance.biggo.com/news/4653f52e-d964-4a23-90e0-9b2091a94646"],
    ["Motley Fool: Why is CoreWeave stock falling today?", "https://www.fool.com/investing/2026/10/16/why-is-coreweave-stock-falling-today/"],
    ["CNBC: CoreWeave shares tumble as bond yields near 15%", "https://www.cnbc.com/2026/10/14/coreweave-stock-bond-yields-ai-debt.html"],
    ["TipRanks: Cathie Wood buys CoreWeave and Rocket Lab", "https://www.tipranks.com/news/crwv-rklb-or-pltr-cathie-wood-buys-22-7m-in-two-stocks-sells-one"],
    ["Cardano Capital: Nasdaq falls 4.5% in its worst week since June as the VIX hits 22", "https://cardanocapital.substack.com/p/nasdaq-falls-45-in-its-worst-week"],
    ["Rio Times: Gold and silver, Friday 16 October 2026", "https://www.riotimesonline.com/gold-silver-precious-metals-friday-october-16-2026/"],
    ["CNBC: Gold set for a weekly drop as traders assess Fed signals", "https://www.cnbc.com/2026/10/16/gold-gains-on-softer-dollar-but-heads-for-weekly-fall.html"],
    ["Sharecast: London close, FTSE in the black as investors snap up defensive stocks", "https://www.sharecast.com/news/market-report-close/ftse-100-london-close-market-shares-lloyds-natwest-babcock--23873442.html"],
    ["Proofpoint: Proofpoint to acquire Varonis in a $6.3 billion transaction", "https://www.proofpoint.com/us/newsroom/press-releases/proofpoint-acquire-varonis-creating-global-leader-data-and-ai-security"],
    ["KSL/Reuters: Thoma Bravo's Proofpoint to buy Varonis", "https://www.ksl.com/article/51636970/thoma-bravos-proofpoint-to-buy-varonis-systems-in-63-billion-all-cash-deal"],
    ["RTX: $24.4 billion SM-6 contract", "https://www.rtx.com/news/news-center/2026/10/01/rtxs-raytheon-awarded-24-4-billion-multi-year-contract-for-sm-6-interceptors"],
    ["Defence Blog: Raytheon wins $8B deal for nuclear command terminals", "https://defence-blog.com/raytheon-wins-8b-deal-for-nuclear-command-terminals/"],
    ["Opening Bell Daily: Stock market week ahead, 19 October", "https://www.openingbelldailynews.com/p/stock-market-week-ahead-oct-19-2026"],
    ["CNBC: Major earnings reports are due next week", "https://www.cnbc.com/2026/10/16/major-earnings-reports-market-fears-next-week.html"],
    ["Kiplinger: Earnings calendar, 19–23 October", "https://www.kiplinger.com/investing/stocks/17494/next-week-earnings-calendar-stocks"],
    ["ONS: Consumer price inflation, UK, September 2026 (release page)", "https://www.ons.gov.uk/releases/consumerpriceinflationukseptember2026"]
  ]
};
