// Public morning brief: general market only. No portfolio, account or holdings content.
// Written alongside the private brief.js; build_public.py publishes it as brief.js on the public site and leak-checks it first.
window.HQ_BRIEF = {
  date: "2026-10-19",
  edition: "Monday 19 October 2026 · Morning edition",
  headline: "US futures bounce about 1% after the chip sell-off and oil slips below $108, as China's growth edges past forecasts ahead of a big week for AI results",
  dek: "Nasdaq 100 futures rose about 1.2–1.4% overnight and Brent fell about 1.8% after President Trump signalled some easing of Russia sanctions. China grew 4.5% in the third quarter, against 4.4% expected, lifting London's miners. Lam Research, Texas Instruments, Tesla and Meta all report on Wednesday.",
  market: [
    { k: "S&P 500", v: "7,659.44", d: "Fri close −1.09% · futures about +0.7% early Mon" },
    { k: "Nasdaq", v: "26,140.03", d: "Fri close −2.14% · Nasdaq 100 futures about +1.3% early Mon" },
    { k: "FTSE 100", v: "~10,835", d: "flat-to-lower at Monday's open · Fri close 10,881.90" },
    { k: "Gold", v: "~$4,183/oz", d: "slightly firmer Mon morning" },
    { k: "Oil (Brent)", v: "~$107.9", d: "about −1.8% Mon · WTI about $97–100" }
  ],
  sections: [
    {
      title: "The big picture",
      paras: [
        "After last week's AI sell-off (Nasdaq −4.5%, the Philadelphia chip index down eight days in a row, its longest run since 2008), US futures point to a rebound: early on Monday S&P 500 futures were up about 0.7–0.8% and Nasdaq 100 futures about 1.2–1.4%. Two things helped. Oil eased, with Brent down about 1.8% to around $107.9 after President Trump indicated he could ease some sanctions on Russian energy (he later said no final decision had been made), and Treasury yields slipped. Asia didn't share the mood: Japan's Nikkei fell about 1.2% and Taiwan about 1.4% on worries about the cost of AI data centres.",
        "China's third-quarter growth came in at 4.5% a year, against 4.4% expected and 4.3% in the second quarter. That lifted miners in London, while the FTSE 100 opened little changed after its best week in six months. A rebound in futures isn't the same as a rebound in results: Netflix reports on Tuesday, then Lam Research, Texas Instruments, Tesla, Meta, IBM and SAP on Wednesday evening, and Newmont on Thursday. Iran's Revolutionary Guard is still targeting ships near the Strait of Hormuz, so oil can turn quickly."
      ]
    },
    {
      title: "Stocks in the news",
      items: [
        { t: "CRWV", h: "CoreWeave fell 12% on Friday and about 25% in five days as its bond yields rose above 15%.", b: "The AI cloud provider has borrowed heavily to build data centres, and rising financing costs became the centre of last week's worry about who pays for the AI build-out. Nebius (−12%) and Super Micro (−10%) fell with it on Friday. Monday's futures bounce is the first test of whether that selling has run its course." },
        { t: "ANTO", h: "Antofagasta and Glencore led London's early risers, up about 1.1% each, after China's GDP beat.", b: "China is the biggest buyer of copper, so a growth figure of 4.5% against 4.4% expected helps the metal and its miners. BP and Shell also edged higher despite the drop in crude, while 3i Group (−3.9%) led the fallers." },
        { t: "LRCX", h: "Lam Research reports on Wednesday, with analysts expecting about $2.15 a share on $7.59 billion of revenue.", b: "Chip-equipment makers fell about 5% on Friday alone (Lam −4.9%, Applied Materials −4.8%, KLA −5.0%). Lam's outlook is the first read on whether chipmakers are slowing equipment orders after the sell-off." },
        { t: "NFLX", h: "Netflix opens the big-tech results on Tuesday after the US close.", b: "Analysts expect about $0.82 a share on about $12.9 billion of revenue, and investors want evidence that slower growth is about timing rather than a trend. The shares fell 2.9% on Friday." }
      ]
    },
    {
      title: "Deals and catalysts worth researching",
      intro: "Deals and dated events with concrete numbers. None of these guarantees a profit: big news is often priced in within hours, and the payoff can take years.",
      items: [
        { t: "RCAT", h: "US drone maker Red Cat offered €39 a share in cash for Austrian engine maker Steyr Motors.", b: "That's 28.9% above Steyr's 16 October close, and shareholder B&C Group (about 15%) has agreed to sell. It needs 50% acceptance plus approvals in Austria, Italy, Australia and the UK. Steyr's shares jumped about 20% straight away, so most of the gap to the offer price closed within minutes." },
        { t: "RTX", h: "RTX, Northrop Grumman and GE Aerospace report on Tuesday, after a run of big defence contracts.", b: "RTX won a $24.4 billion SM-6 missile contract on 1 October and an Air Force nuclear communications contract worth up to $8 billion on 13 October (only $800,000 obligated so far). Tuesday shows how much of that backlog is turning into revenue." },
        { t: "VRNS", h: "Proofpoint agreed to buy data-security company Varonis for $49.75 a share in cash, about $6.3 billion.", b: "The price is 17% above Varonis's 1 September close, but the shares rose only about 2–3% on the news because takeover talk had been reported since June. It's a clear case of a deal being priced in before it was announced. Closing is expected in the first half of 2027." }
      ]
    }
  ],
  calendar: [
    { d: "Mon 19 Oct", e: "China Q3 GDP (out: 4.5%, vs 4.4% expected) · US homebuilder sentiment · Fifth Third and Zions results" },
    { d: "Tue 20 Oct", e: "RTX, Northrop Grumman, GE Aerospace, General Motors results · US housing starts · Netflix (after US close)" },
    { d: "Wed 21 Oct", e: "UK September inflation (7am; August was 3.1%) · Lam Research, Texas Instruments, Tesla, Meta, IBM, SAP (after US close)" },
    { d: "Thu 22 Oct", e: "US jobless claims · Newmont, Western Digital, Lockheed Martin, Procter & Gamble, Blackstone results" },
    { d: "Fri 23 Oct", e: "US flash PMIs · University of Michigan sentiment (final) · American Express, SLB results" },
    { d: "Later", e: "Fed decision 28 Oct · UK Budget 28 Oct · Intel results 29 Oct · US midterms 3 Nov · Bank of England 5 Nov" }
  ],
  bottomLine: "Futures are bouncing and oil is easing, but the questions behind last week's AI sell-off are still open. Wednesday's Lam Research, Texas Instruments, Tesla and Meta results are the first hard answers.",
  sources: [
    ["Proactive Investors: Markets live, London set to open lower (19 Oct)", "https://www.proactiveinvestors.com/companies/news/1100279/markets-live-london-set-to-open-lower-after-strongest-week-in-six-months-1100279.html"],
    ["Investing.com: US stock futures climb as investors return to AI trade after selloff", "https://investing.com/news/stock-market-news/us-stock-futures-climb-as-investors-return-to-ai-trade-after-selloff-4956195"],
    ["HDFC Sky: Global markets today, 19 October 2026", "https://hdfcsky.com/news/global-markets-today-october-19-2026-sensex-nifty-seen-opening-cautiously-as-asian-shares-slip-oil-prices-ease"],
    ["Seeking Alpha: Stock futures rebound as oil nears $110, AI earnings loom", "https://seekingalpha.com/news/4654081-stock-futures-rebound-as-oil-nears-110-ai-earnings-loom"],
    ["ABC News/AP: How major US stock indexes fared Friday 10/16/2026", "https://abcnews.com/Business/wireStory/major-us-stock-indexes-fared-friday-10162026-137331951"],
    ["24/7 Wall St: Chip stocks just fell 8 days in a row", "https://247wallst.com/investing/2026/10/17/chip-stocks-just-fell-8-days-in-a-row-their-longest-losing-streak-since-2008/"],
    ["CNBC: CoreWeave shares tumble as bond yields near 15%", "https://www.cnbc.com/2026/10/14/coreweave-stock-bond-yields-ai-debt.html"],
    ["Invezz: Crude oil forecast as IRGC shipping attacks persist (18 Oct)", "https://invezz.com/news/2026/10/18/crude-oil-forecast-why-brent-could-reach-120-as-irgc-shipping-attacks-persist/"],
    ["Earnings Whispers: Lam Research (LRCX)", "https://beta.earningswhispers.com/go/w/LRCX"],
    ["Investing.com: Steyr Motors surges 20% on Red Cat tender offer", "https://investing.com/news/stock-market-news/steyr-motors-stock-surges-20-premarket-on-red-cat-tender-offer-4956449"],
    ["RTX: $24.4 billion SM-6 contract", "https://www.rtx.com/news/news-center/2026/10/01/rtxs-raytheon-awarded-24-4-billion-multi-year-contract-for-sm-6-interceptors"],
    ["Defence Blog: Raytheon wins $8B deal for nuclear command terminals", "https://defence-blog.com/raytheon-wins-8b-deal-for-nuclear-command-terminals/"],
    ["Proofpoint: Proofpoint to acquire Varonis in a $6.3 billion transaction", "https://www.proofpoint.com/us/newsroom/press-releases/proofpoint-acquire-varonis-creating-global-leader-data-and-ai-security"],
    ["Opening Bell Daily: Stock market week ahead, 19 October", "https://www.openingbelldailynews.com/p/stock-market-week-ahead-oct-19-2026"],
    ["Stock Titan: Earnings calendar for the week of 19 October 2026", "https://www.stocktitan.net/articles/earnings-calendar-week-of-october-19-2026"],
    ["ONS: Consumer price inflation, UK, September 2026 (release page)", "https://www.ons.gov.uk/releases/consumerpriceinflationukseptember2026"],
    ["YouTube: US semiconductor stocks plummet, Nasdaq down 2.2% (picked by title, not watched)", "https://www.youtube.com/watch?v=zNjEE8DhS9M"]
  ]
};
