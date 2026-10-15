// Public morning brief: general market only. No portfolio, account or holdings content.
// Written alongside the private brief.js; build_public.py publishes it as brief.js on the public site and leak-checks it first.
window.HQ_BRIEF = {
  date: "2026-10-15",
  edition: "Thursday 15 October 2026 · Morning edition",
  headline: "Hot US inflation hits tech: the Nasdaq falls 1.9% and the AI sell-off spreads to Asia, even as TSMC posts a record profit",
  dek: "US prices rose 3.7% in the year to September, above the 3.6% forecast, and bets on a Fed rate rise jumped. The Nasdaq fell 1.88% and the S&P 500 1.11%, led by AI-infrastructure names such as Oracle and CoreWeave. Overnight Korea's chip giants fell 7–10% before TSMC reported a record quarter and raised its outlook. In London, UK growth beat forecasts and the FTSE 100 is up about 0.4%, led by defensive stocks. Gold is near $4,080 and Brent has eased to about $104.",
  market: [
    { k: "S&P 500", v: "7,718.94", d: "−1.11% Wed · Dow −0.1%" },
    { k: "Nasdaq", v: "26,692.87", d: "−1.88% Wed · biggest fall since July" },
    { k: "FTSE 100", v: "~10,765", d: "about +0.4% Thu morning · Wed close 10,724.86" },
    { k: "Gold", v: "~$4,083/oz", d: "−1.9% Wed after the inflation figure" },
    { k: "US inflation", v: "3.7%", d: "Sept CPI, forecast 3.6% · core 2.6% vs 2.5%" }
  ],
  sections: [
    {
      title: "The big picture",
      paras: [
        "Wednesday's inflation figure was the one markets feared. US consumer prices rose 0.6% in September and 3.7% over the year, up from 3.4% in August and above the 3.6% forecast; core inflation, which leaves out food and energy, was 2.6% against 2.5% expected. Treasury yields rose, and futures now put a meaningful chance (estimates range from about 30% to 46%) on a Fed rate rise on 28 October, with a December rise close to fully priced. The S&P 500 fell 1.11% to 7,718.94 and the Nasdaq 1.88% to 26,692.87, while the Dow slipped only 0.1%. Technology was the worst sector, down about 3%; healthcare and consumer staples rose more than 2%.",
        "The selling centred on companies borrowing heavily to build AI data centres. Oracle fell 8.8%, CoreWeave about 15% and Nebius about 10%, as the cost of insuring their debt rose to records. That spread to Asia overnight: SK Hynix fell more than 10% and Samsung roughly 7–10%, and European chipmakers opened lower. TSMC then reported a record quarter and raised its full-year outlook, a reminder that the worry right now is the cost of financing AI, not demand for chips. In the UK, the economy grew 0.1% in August against forecasts of a small fall; the pound rose and gilt yields eased. Gold dropped about 1.9% to near $4,083 as higher rate expectations lifted the dollar, and Brent eased about 2% to around $104."
      ]
    },
    {
      title: "Stocks in the news",
      items: [
        { t: "TSM", h: "TSMC posted a record profit for a sixth straight quarter and guided to up to 61% sales growth next quarter.", b: "Net profit was NT$763 billion (about $23.6 billion), up 68.7% on a year earlier and ahead of the NT$746 billion forecast, on a 66.4% gross margin. It expects $52.3–54.3 billion of fourth-quarter sales and now sees 2026 revenue growth of about 44%. Management was more cautious on 2027, saying it would plan prudently because of economic uncertainty. Its shares had already fallen in the chip sell-off before the results." },
        { t: "ORCL", h: "Oracle fell 8.8% to $130.55 as higher yields revived worries about debt-funded AI building.", b: "The cost of insuring Oracle's and CoreWeave's debt against default rose to record highs, and CoreWeave's 2032 bonds yielded about 14.8%. CoreWeave's chief executive called the move irrational, pointing to its order backlog. The question for investors is whether higher rates slow the data-centre build, not whether demand for AI has gone." },
        { t: "BAC", h: "Bank of America fell almost 5% after a $1.2 billion penalty and a revenue miss; Morgan Stanley beat but still fell about 3%.", b: "Bank of America's profit fell 17% to $6.93 billion, or $1.08 a share excluding the charge, and revenue was about $570 million below forecasts on weaker trading. Morgan Stanley earned $3.03 a share on $20.34 billion of revenue, both ahead of forecasts, with equities trading up 41%, but fixed-income trading fell." },
        { t: "RKLB", h: "Rocket Lab fell 7.9% to $59.18, then dropped further after hours as it delayed its Neutron rocket to 2027.", b: "The first launch had been targeted for the fourth quarter of 2026. The company blamed manufacturing defects in a propellant tank dome on the first stage and said a new dome and full inspection will be finished before the first quarter. Neutron was first meant to fly in 2024. Barclays started coverage at Overweight with an $85 target on 8 October." }
      ]
    },
    {
      title: "Deals and catalysts worth researching",
      intro: "Deals and dated events with concrete numbers. None of these guarantees a profit: big news is often priced in within hours, and the payoff can take years.",
      items: [
        { t: "IONQ", h: "IonQ priced a $2 billion share sale days after agreeing an all-stock deal for Elisity worth up to $1.3 billion.", b: "The two together mean significant dilution for existing shareholders, and the stock fell about 9.5% on Wednesday, dragging other quantum names with it. The Elisity deal, a cybersecurity company, is expected to close in the fourth quarter." },
        { t: "IRDM", h: "Rocket Lab's $8 billion takeover of Iridium is in US regulatory review, with FCC comments due today.", b: "Iridium shareholders approved the deal with about 99.6% of votes cast; each share becomes $27 in cash plus Rocket Lab stock within a collar. Oppositions are due on 30 October and replies on 9 November, and the deal is expected to close in mid-2027." },
        { t: "TSM", h: "TSMC's 2026 capital spending is reported at $60–65 billion, a dated signal for chip-equipment makers.", b: "Sources differ slightly on the exact range. Last week ASML said demand for its machines would outrun supply in 2027 and 2028; TSMC's more cautious 2027 tone is the counterweight to watch." }
      ]
    }
  ],
  calendar: [
    { d: "Thu 15 Oct", e: "TSMC results (out) · UK GDP (out, +0.1%) · US PPI, retail sales and jobless claims" },
    { d: "Fri 16 Oct", e: "Euro-area final inflation · US industrial production · Travelers, Truist" },
    { d: "Mon 19 Oct", e: "Earnings season continues" },
    { d: "Tue 20 Oct", e: "Netflix results (after the US close) · GE Aerospace, RTX, Philip Morris this week" },
    { d: "Wed 21 Oct", e: "Tesla results expected (some calendars say 28 Oct; not yet confirmed)" },
    { d: "Later", e: "Fed decision 28 Oct · UK Budget 28 Oct · AMD and Booking results 3 Nov · US midterms 3 Nov · Bank of England 5 Nov" }
  ],
  bottomLine: "The market's problem this week isn't AI demand, which TSMC's numbers say is still strong; it's the price of money. With inflation at 3.7% and a Fed rise back on the table, companies that borrow heavily to build data centres are being repriced fastest, and today's US PPI and retail sales will test that mood.",
  sources: [
    ["TheStreet: Stock market today, Oct. 14, 2026", "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-oct-14-2026"],
    ["Yahoo Finance: Hot inflation report drops tech (live, 14 Oct)", "https://finance.yahoo.com/markets/live/stock-market-today-wednesday-october-14-dow-sp-500-nasdaq-081136597.html"],
    ["Yahoo Finance: Oracle tumbles on hotter CPI data", "https://finance.yahoo.com/markets/stocks/articles/stock-market-today-oct-14-211246271.html"],
    ["FXStreet: Gold slumps to near $4,100 as hotter US CPI increases Fed hike odds", "https://www.fxstreet.com/news/gold-slumps-to-near-4-100-as-hotter-us-cpi-increases-fed-rate-hike-odds-202610142323"],
    ["Mitrade: Gold crashes below $4,100 as hot CPI revives October hike bets", "https://mitrade.com/au/insights/news/live-news/article-2-2163371-20261015"],
    ["Trading Economics: Brent crude", "https://tradingeconomics.com/commodity/brent-crude-oil"],
    ["CNBC: TSMC posts record profit for a sixth straight quarter", "https://www.cnbc.com/2026/10/15/tsmc-third-quarter-profit-global-ai-.html"],
    ["Crypto Briefing: TSMC forecasts Q4 revenue jump of up to 61%", "https://cryptobriefing.com/tsmc-q4-revenue-forecast-record-q3-profit/"],
    ["CNBC: Global tech rout on AI funding worries, 15 Oct", "https://www.cnbc.com/2026/10/15/sk-hynix-samsung-softbank-stocks-asia-tech-rout-ai-funding-worries.html"],
    ["Investing.com: European chipmakers tumble as inflation data fuels rate-hike fears", "https://in.investing.com/news/stock-market-news/european-chipmakers-tumble-as-inflation-data-fuels-ratehike-fears-ai-rout-5634348"],
    ["Quartz: CoreWeave stock drops as bond yields rise on AI debt concerns", "https://qz.com/coreweave-stock-bond-yields-ai-debt-101426"],
    ["CNBC: Bank of America Q3 2026 earnings", "https://www.cnbc.com/2026/10/14/bank-of-america-bac-q3-2026-earnings.html"],
    ["Startup Fortune: Morgan Stanley beats on trading while Bank of America misses on a fine", "https://startupfortune.com/morgan-stanley-beats-big-on-trading-while-bank-of-america-misses-on-a-fine/"],
    ["Reuters via Investing.com: Rocket Lab pushes Neutron debut to 2027", "https://www.investing.com/news/stock-market-news/rocket-lab-pushes-neutron-rockets-debut-flight-to-2027-shares-fall-4950171"],
    ["Yahoo Finance: RKLB slides after hours as Neutron slips into 2027", "https://finance.yahoo.com/markets/stocks/articles/rklb-stock-slides-8-hours-222312268.html"],
    ["Yahoo Finance: IonQ falls as $2B equity offering follows Elisity deal", "https://finance.yahoo.com/markets/stocks/articles/ionq-falls-6-2b-equity-134408968.html"],
    ["SDxCentral: Iridium $8B takeover gets stockholder approval", "https://www.sdxcentral.com/news/iridium-8b-takeover-gets-stockholder-approval/"],
    ["CNBC: UK economy grew 0.1% in August", "https://www.cnbc.com/2026/10/15/uk-gdp-august-2026-economy.html"],
    ["Proactive: Markets live, FTSE 100 rebounds as tobacco offsets mining sell-off", "https://www.proactiveinvestors.com/companies/news/1100139/markets-live-ftse-100-set-to-open-lower-as-global-tech-sell-off-deepens-1100139.html"],
    ["Wall Street Horizon: Netflix earnings date", "https://www.wallstreethorizon.com/netflix-earnings-calendar"]
  ]
};
