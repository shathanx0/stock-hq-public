// Public morning brief: general market only. No portfolio, account or holdings content.
// Written alongside the private brief.js; build_public.py publishes it as brief.js on the public site and leak-checks it first.
window.HQ_BRIEF = {
  date: "2026-10-18",
  edition: "Sunday 18 October 2026 · Sunday edition",
  headline: "After the chip index's longest losing run since 2008, this week brings the first hard numbers: Lam Research and Texas Instruments on Wednesday, Tesla and Meta the same night, and oil goes into Monday near $110",
  dek: "No trading since Friday, when the Nasdaq fell 2.1% and finished its worst week since June. Over the weekend Iran's Revolutionary Guard targeted more ships near the Strait of Hormuz, keeping Brent crude near its highest since May. About 212 companies worth $2 billion or more report this week.",
  market: [
    { k: "S&P 500", v: "7,659.44", d: "−1.09% Fri · about −1.9% on the week" },
    { k: "Nasdaq", v: "26,140.03", d: "−2.14% Fri · about −4.5% on the week" },
    { k: "FTSE 100", v: "10,881.90", d: "+0.38% Fri · defensives led" },
    { k: "Gold", v: "~$4,168/oz", d: "about flat Fri · about −0.5% on the week" },
    { k: "Oil (Brent)", v: "$109.86", d: "+3.7% Fri · highest close since May; WTI $101.41" }
  ],
  sections: [
    {
      title: "The big picture",
      paras: [
        "Friday's closes stand over the weekend: the Nasdaq ended a 4.5% weekly fall at 26,140.03 and the S&P 500 at 7,659.44, while the Dow finished the week slightly higher. The Philadelphia Semiconductor Index fell for an eighth straight day, its longest losing run since 2008 and about 16% in total. The worry is who pays for the AI data-centre build-out, after yields on CoreWeave's bonds rose above 15%. This week brings the first hard data since the sell-off: Netflix on Tuesday, then Lam Research, Texas Instruments, Tesla, Meta, IBM and SAP on Wednesday evening. Analysts expect Lam to report about $2.15 a share on $7.59 billion of revenue, but its outlook for chipmakers' orders matters more than the quarter.",
        "Oil is the other story. Brent closed Friday at $109.86, its highest since May, and the UK maritime agency UKMTO issued fresh warnings over the weekend as Iran's Revolutionary Guard kept targeting ships near the Strait of Hormuz. US Central Command says most attacks have failed and the strait remains open; Iran's foreign minister says it could reopen fully within six days if the US accepts his proposal, while President Trump wants Iran's nuclear programme included in any deal. The Fed is in its quiet period before its 28 October decision, and UK inflation figures for September come out on Wednesday morning."
      ]
    },
    {
      title: "Stocks in the news",
      items: [
        { t: "LRCX", h: "Lam Research reports on Wednesday, with analysts expecting about $2.15 a share on $7.59 billion of revenue.", b: "Chip-equipment makers fell about 5% on Friday alone (Lam −4.9%, Applied Materials −4.8%, KLA −5.0%). Lam's outlook is the first read on whether chipmakers are slowing equipment orders, or whether ASML's comment that customers are already booking machines for 2029–30 holds up." },
        { t: "VST", h: "CIBC started covering Vistra, Constellation, NRG and Talen at Outperformer on 15 October.", b: "Its Constellation target of $358 is about 32% above Friday's close. The call is that power demand from data centres keeps growing, even though power stocks tied to AI fell with the chip sell-off last week." },
        { t: "NEM", h: "Newmont reports on Thursday, the first big gold miner to publish third-quarter results.", b: "Its production and cost figures are the first read on how much of this year's high gold price is reaching miners' profits. Newmont rose 2.4% on Friday while gold was flat." },
        { t: "NFLX", h: "Netflix opens the big-tech results on Tuesday after the US close.", b: "Analysts expect about $0.82 a share on about $12.9 billion of revenue, and investors want evidence that slower growth is about timing rather than a trend. The shares fell 2.9% on Friday." }
      ]
    },
    {
      title: "Deals and catalysts worth researching",
      intro: "Deals and dated events with concrete numbers. None of these guarantees a profit: big news is often priced in within hours, and the payoff can take years.",
      items: [
        { t: "VRNS", h: "Proofpoint, owned by Thoma Bravo, agreed to buy data-security company Varonis for $49.75 a share in cash, about $6.3 billion.", b: "The price is 17% above Varonis's 1 September close, but the shares rose only about 2–3% on the news because takeover talk had been reported since June. It's a clear case of a deal being priced in before it was announced. Closing is expected in the first half of 2027." },
        { t: "RTX", h: "RTX, Northrop Grumman and GE Aerospace report on Tuesday, after a run of big defence contracts.", b: "RTX won a $24.4 billion SM-6 missile contract on 1 October and an Air Force nuclear communications contract worth up to $8 billion on 13 October (only $800,000 obligated so far). Tuesday shows how much of that backlog is turning into revenue." },
        { t: "CPRT", h: "Copart completed its takeover of ACV Auctions on 16 October at $10.50 a share in cash, about $1.9 billion.", b: "Holders of 68.4% of ACV shares accepted, and ACV keeps its own management as a Copart subsidiary. Once a cash deal like this is agreed, the target's shares trade close to the offer price, so most of the gain goes to whoever held before the announcement." }
      ]
    }
  ],
  calendar: [
    { d: "Mon 19 Oct", e: "China Q3 GDP · US homebuilder sentiment · Fifth Third and Zions results" },
    { d: "Tue 20 Oct", e: "RTX, Northrop Grumman, GE Aerospace, General Motors results · US housing starts · Netflix (after US close)" },
    { d: "Wed 21 Oct", e: "UK September inflation (7am; August was 3.1%) · Lam Research, Texas Instruments, Tesla, Meta, IBM, SAP (after US close)" },
    { d: "Thu 22 Oct", e: "US jobless claims · Newmont, Western Digital, Lockheed Martin, Procter & Gamble, Blackstone results" },
    { d: "Fri 23 Oct", e: "US flash PMIs · University of Michigan sentiment (final) · American Express, SLB results" },
    { d: "Later", e: "Fed decision 28 Oct · UK Budget 28 Oct · Intel results 29 Oct · US midterms 3 Nov · Bank of England 5 Nov" }
  ],
  bottomLine: "Last week the market sold first and asked questions later about AI spending; this week the companies answer. Lam Research, Texas Instruments, Tesla and Meta on Wednesday are the first hard read on whether the build-out is slowing, with Brent near $110 as the backdrop.",
  sources: [
    ["ABC News/AP: How major US stock indexes fared Friday 10/16/2026", "https://abcnews.com/Business/wireStory/major-us-stock-indexes-fared-friday-10162026-137331951"],
    ["CNBC: Nasdaq slides 2% Friday to post worst week since June", "https://www.cnbc.com/2026/10/15/stock-market-today-live-updates.html"],
    ["24/7 Wall St: Chip stocks just fell 8 days in a row", "https://247wallst.com/investing/2026/10/17/chip-stocks-just-fell-8-days-in-a-row-their-longest-losing-streak-since-2008/"],
    ["CNBC: CoreWeave shares tumble as bond yields near 15%", "https://www.cnbc.com/2026/10/14/coreweave-stock-bond-yields-ai-debt.html"],
    ["Share Talk: Weekly stock market news review, Sunday 18 October 2026", "https://share-talk.com/share-talk-weekly-stock-market-news-review-sunday-18th-october-2026"],
    ["The National: Oil touches $110 on Middle East supply uncertainty", "https://www.thenationalnews.com/business/energy/2026/10/16/oil-prices-ease-but-head-for-another-weekly-gain-on-middle-east-supply-concerns/"],
    ["Invezz: Crude oil forecast as IRGC shipping attacks persist (18 Oct)", "https://invezz.com/news/2026/10/18/crude-oil-forecast-why-brent-could-reach-120-as-irgc-shipping-attacks-persist/"],
    ["Fox News live updates: Iran, Strait of Hormuz, 18 October", "https://www.foxnews.com/live-news/us-iran-war-peace-talks-oil-strait-hormuz-trump-october-18"],
    ["CNBC: Gold set for a weekly drop as traders assess Fed signals", "https://www.cnbc.com/2026/10/16/gold-gains-on-softer-dollar-but-heads-for-weekly-fall.html"],
    ["Earnings Whispers: Lam Research (LRCX)", "https://beta.earningswhispers.com/go/w/LRCX"],
    ["TipRanks/The Fly: CIBC starts four US independent power producers at Outperformer", "https://www.tipranks.com/news/the-fly/cibc-starts-four-u-s-independent-power-producers-at-outperformer-thefly-news"],
    ["TipRanks/The Fly: Constellation Energy initiated with an Outperformer at CIBC", "https://www.tipranks.com/news/the-fly/constellation-energy-initiated-with-an-outperformer-at-cibc-thefly-news"],
    ["Proofpoint: Proofpoint to acquire Varonis in a $6.3 billion transaction", "https://www.proofpoint.com/us/newsroom/press-releases/proofpoint-acquire-varonis-creating-global-leader-data-and-ai-security"],
    ["RTX: $24.4 billion SM-6 contract", "https://www.rtx.com/news/news-center/2026/10/01/rtxs-raytheon-awarded-24-4-billion-multi-year-contract-for-sm-6-interceptors"],
    ["Defence Blog: Raytheon wins $8B deal for nuclear command terminals", "https://defence-blog.com/raytheon-wins-8b-deal-for-nuclear-command-terminals/"],
    ["ACV Auctions SEC filing: Copart completes tender offer", "https://www.sec.gov/Archives/edgar/data/0001637873/000119312526423456/d123963dex99a5ix.htm"],
    ["Opening Bell Daily: Stock market week ahead, 19 October", "https://www.openingbelldailynews.com/p/stock-market-week-ahead-oct-19-2026"],
    ["Stock Titan: Earnings calendar for the week of 19 October 2026", "https://www.stocktitan.net/articles/earnings-calendar-week-of-october-19-2026"],
    ["Kiplinger: Earnings calendar, 19–23 October", "https://www.kiplinger.com/investing/stocks/17494/next-week-earnings-calendar-stocks"],
    ["ONS: Consumer price inflation, UK, September 2026 (release page)", "https://www.ons.gov.uk/releases/consumerpriceinflationukseptember2026"],
    ["YouTube: US semiconductor stocks plummet, Nasdaq down 2.2% (picked by title, not watched)", "https://www.youtube.com/watch?v=zNjEE8DhS9M"]
  ]
};
