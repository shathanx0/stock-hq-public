// Public morning brief: general market only. No portfolio, account or holdings content.
// Written alongside the private brief.js; build_public.py publishes it as brief.js on the public site and leak-checks it first.
window.HQ_BRIEF = {
  date: "2026-10-20",
  edition: "Tuesday 20 October 2026 · Morning edition",
  headline: "Chips ended their eight-day slide on a narrow Wall Street rebound, but Korea's chip stocks fell again overnight as bond yields rose",
  dek: "The Nasdaq rose 1.1% and the chip index 1.6% on Monday, led by Amazon and memory makers, yet nearly two-thirds of S&P 500 stocks fell as the 10-year Treasury yield climbed to 5.15%. Korea's Kospi dropped about 3–4% on Tuesday. RTX, GE Aerospace, Netflix and SpaceX all report today.",
  market: [
    { k: "S&P 500", v: "7,690.73", d: "Mon close +0.41% · most stocks fell" },
    { k: "Nasdaq", v: "26,430.89", d: "Mon close +1.11% · chip index +1.61%" },
    { k: "FTSE 100", v: "10,764.69", d: "Mon close −1.1% · called about 49 pts lower Tue" },
    { k: "Gold", v: "~$4,122/oz", d: "Dec futures −0.5% Mon on firmer dollar and yields" },
    { k: "US 10-year", v: "5.15%", d: "+6 bp Mon · Brent above $110 Tue morning" }
  ],
  sections: [
    {
      title: "The big picture",
      paras: [
        "Monday's rebound was narrow. The Nasdaq gained 1.1% and the Philadelphia chip index 1.6%, ending its longest losing streak since 2008, but the chip index gave back more than half of an earlier 3.7% gain, and nearly two-thirds of S&P 500 stocks fell. Amazon (+5%) did a lot of the lifting after Morgan Stanley named it a top pick. The 10-year Treasury yield rose 6 basis points to 5.15%, which hit rate-sensitive sectors: utilities fell 2.0%, real estate 1.2% and financials 0.8%.",
        "Asia didn't follow the US bounce. Korea's Kospi fell about 3–4% on Tuesday, with SK Hynix down about 4–5% and Samsung about 1.5–2%, as doubts about the returns on AI spending returned and Korean bond yields rose. In London the FTSE 100 fell 1.1% on Monday after its best week in six months, with Barclays down 3.5% and Anglo American about 4%, and it was called lower again. Brent is above $110 after Houthi attacks on Saudi energy sites, while gold slipped to about $4,122 as the dollar and yields firmed."
      ]
    },
    {
      title: "Stocks in the news",
      items: [
        { t: "AMZN", h: "Amazon rose about 5% after Morgan Stanley named it a top pick and raised its target to $350 from $335.", b: "The bank argued that the growth runway for AWS, Amazon's cloud business, is under-appreciated. It was the biggest single lift to the S&P 500 on a day when most stocks fell." },
        { t: "CLF", h: "Cleveland-Cliffs jumped 16% after beating forecasts and guiding to more than $4 billion of profit in 2027.", b: "Adjusted earnings were $0.28 a share against $0.21 expected, and third-quarter adjusted EBITDA of $612 million beat its own $575 million guidance. Volume was more than four times normal." },
        { t: "BARC", h: "Barclays fell 3.5%, the biggest bank faller in London, after a report that the Bank of England's regulator is examining its traders.", b: "The Financial Times reported the regulator is looking at how the bank classified some derivatives. Barclays hasn't announced any action, but the report helped pull the FTSE 100 down 1.1%." },
        { t: "MU", h: "Micron rose 3% with the memory rebound, but a union at its Taiwan site plans to strike on Thursday.", b: "Western Digital (+6%) and Sandisk (+5.5%) led the chip bounce. Micron's Taoyuan union says 99% of voting members backed a strike over bonuses; it wants 15% of operating profit shared with staff. There's no word yet on any effect on production." }
      ]
    },
    {
      title: "Deals and catalysts worth researching",
      intro: "Deals and dated events with concrete numbers. None of these guarantees a profit: big news is often priced in within hours, and the payoff can take years.",
      items: [
        { t: "SLN", h: "Merck KGaA agreed to buy Silence Therapeutics for $20 a share in cash, about $1.3 billion.", b: "That's a 130% premium to Friday's close, and the shares jumped 126% on Monday, so almost all of it was priced in within a day. The prize is divesiran, a blood-disorder drug heading into Phase 3. Closing is expected in the first quarter of 2027." },
        { t: "LEU", h: "Centrus Energy bought Westerman, its main centrifuge-casing supplier, for about $116 million.", b: "It paid about $95 million in cash and $21 million in shares. Centrus says making the parts in-house should cut costs for its multibillion-dollar US enrichment expansion, with first new capacity at Piketon, Ohio expected by 2029." },
        { t: "SPCX", h: "SpaceX reports third-quarter results today after the US close, with a webcast at 4:30pm New York time.", b: "Its first report as a public company in August showed revenue of $7.8 billion (up 92%) and a $541 million net loss, and the shares fell after hours on heavy AI spending. Spending plans will matter as much as revenue." }
      ]
    },
    {
      title: "Worth reading",
      items: [
        { h: "Palantir, Datadog and chip stocks bounce back as Amazon lifts Wall Street", u: "https://www.aol.com/articles/palantir-datadog-chip-stocks-bounce-204043000.html", b: "Monday's session in one read, including how narrow the rally was underneath the index gains. Yahoo Finance via AOL, 19 Oct." },
        { h: "Korea's Stock Slide Put AI Chip Bets Under Scrutiny", u: "https://finimize.com/content/koreas-stock-slide-put-ai-chip-bets-under-scrutiny", b: "A short explainer of why rising bond yields hit AI chip stocks harder than steadier businesses. Finimize, 20 Oct (free, needs a sign-in)." },
        { t: "LEU", h: "Centrus Announces $116 Million Acquisition Of Centrifuge Component Supplier Westerman", u: "https://www.nucnet.org/news/centrus-announces-usd116-million-acquisition-of-centrifuge-component-supplier-westerman-10-1-2026", b: "A clear look at how the US is rebuilding its uranium enrichment supply chain. NucNet, 19 Oct." }
      ]
    }
  ],
  calendar: [
    { d: "Tue 20 Oct", e: "UK jobs data (7am) · US housing starts · RTX, GE Aerospace, Northrop Grumman, GM, 3M results · Netflix, Intuitive Surgical and SpaceX (after US close)" },
    { d: "Wed 21 Oct", e: "UK September inflation (7am; August was 3.1%) · Lam Research, Texas Instruments, Tesla, Meta, IBM, SAP (after US close)" },
    { d: "Thu 22 Oct", e: "US jobless claims · Newmont, Western Digital, Lockheed Martin results · Rentokil trading update" },
    { d: "Fri 23 Oct", e: "US flash PMIs · University of Michigan sentiment (final) · American Express, SLB results" },
    { d: "Later", e: "Fed decision 28 Oct · UK Budget 28 Oct · Intel results 29 Oct · US midterms 3 Nov · Bank of England 5 Nov" }
  ],
  bottomLine: "Monday's chip bounce was real but thin, and rising bond yields are now the bigger test for AI stocks. Wednesday's Lam Research, Texas Instruments, Tesla and Meta results are the first hard answers this week.",
  sources: [
    ["CappNotes: Closing Look, Monday 19 October 2026", "https://cappnotes.substack.com/p/closing-look-monday-october-19-2026"],
    ["CNT Trading: Amazon leads a tech rebound, but most stocks fall as yields climb (19 Oct)", "https://cnttrading.substack.com/p/daily-market-2026-10-19"],
    ["Yahoo Finance via AOL: Palantir, Datadog and chip stocks bounce back as Amazon lifts Wall Street", "https://www.aol.com/articles/palantir-datadog-chip-stocks-bounce-204043000.html"],
    ["Proactive Investors: Markets live, Nasdaq powers ahead, FTSE closes red (19 Oct)", "https://www.proactiveinvestors.com/companies/news/1100279/markets-live-nasdaq-powers-ahead-as-tech-stocks-rebound-ftse-closes-red-1100279.html"],
    ["Proactive Investors: London set to extend losses as Asian technology rout deepens (20 Oct)", "https://www.proactiveinvestors.com/companies/news/1100357/markets-live-london-set-to-extend-losses-as-asian-technology-rout-deepens-1100357.html"],
    ["Seoul Economic Daily: KOSPI slides more than 2% despite US chip rebound", "https://en.sedaily.com/finance/2026/10/20/kospi-slides-more-than-2-percent-despite-us-chip-rebound"],
    ["Finimize: Korea's stock slide put AI chip bets under scrutiny", "https://finimize.com/content/koreas-stock-slide-put-ai-chip-bets-under-scrutiny"],
    ["TipRanks: Micron Taiwan union plans strike as bonus dispute deepens", "https://www.tipranks.com/news/micron-stock-news-taiwan-union-plans-strike-as-bonus-dispute-deepens"],
    ["Silicon UK: Micron Taiwan strike", "https://www.silicon.co.uk/cloud/ai/micron-taiwan-strike-631814"],
    ["NucNet: Centrus announces $116 million acquisition of Westerman", "https://www.nucnet.org/news/centrus-announces-usd116-million-acquisition-of-centrifuge-component-supplier-westerman-10-1-2026"],
    ["SEC: Silence Therapeutics DEFA14A (Merck KGaA deal)", "https://www.sec.gov/Archives/edgar/data/0001479615/000119312526425238/d189864dex999.htm"],
    ["SpaceX IR: Q3 2026 results and webcast on 20 October", "https://ir.spacex.com/updates/releases-details/2026/SpaceX-to-Post-Third-Quarter-2026-Results-and-Host-Webcast-on-October-20-2026-2026-QssQGye3im/default.aspx"],
    ["CBS News: SpaceX's first earnings report since going public", "https://www.cbsnews.com/news/spacex-earnings-elon-musk-ipo/"],
    ["ONS: Consumer price inflation, UK, September 2026 (release page)", "https://www.ons.gov.uk/releases/consumerpriceinflationukseptember2026"]
  ]
};
