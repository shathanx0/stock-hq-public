// Public morning brief: general market only. No portfolio, account or holdings content.
// Written alongside the private brief.js; build_public.py publishes it as brief.js on the public site and leak-checks it first.
window.HQ_BRIEF = {
  date: "2026-10-08",
  edition: "Thursday 8 October 2026 · Morning edition",
  headline: "Samsung and TSMC both post record quarters, but oil jumps 5% on tanker attacks and bond yields keep climbing",
  dek: "The two biggest chip factories in the world confirmed the AI boom overnight: Samsung guided to a record ₩107.4 trillion (about $80B) of quarterly operating profit and TSMC reported record Q3 revenue of about $46.7B, both above forecasts. Markets are focused elsewhere, though. Brent oil is up about 5% to around $104–105 after more attacks on tankers near the Strait of Hormuz, the UK 30-year gilt yield has hit its highest since 1998, and US futures are lower. Wall Street slipped from its records on Wednesday after the Fed minutes showed most officials expect one more rate rise this year.",
  market: [
    { k: "S&P 500", v: "7,802", d: "−0.2% Wed · off Tuesday's record; futures about −0.4% Thu" },
    { k: "Nasdaq", v: "27,539", d: "−0.2% Wed" },
    { k: "FTSE 100", v: "~10,418", d: "about −0.4% Thu midday · after −0.8% Wed" },
    { k: "Gold", v: "~$4,117/oz", d: "about flat Thu · down ~6% over the past month" },
    { k: "Brent oil", v: "~$104–105", d: "about +5% Thu · tanker attacks near Hormuz" }
  ],
  sections: [
    { title: "The big picture", paras: [
      "Wall Street stepped back from its records on Wednesday. The S&P 500 fell 0.22% to 7,801.77, the Nasdaq slipped 0.22% to 27,538.69 and the Dow lost 0.66%. The US 10-year Treasury yield rose to about 5.36%, its highest since 2002, and the minutes of the Fed's September meeting (when it raised rates to 3.75–4.00%) said most officials think another rise will likely be appropriate by the end of the year. Rising yields hit the most speculative corners hardest: quantum computing and space stocks fell 4–5%.",
      "This morning oil is the story. Brent is up about 5% to around $104–105 after attacks on tankers near the Strait of Hormuz reached their highest level in weeks. In the UK the 30-year gilt yield reached about 6.04%, the highest since 1998, and markets price a better than 90% chance that the Bank of England raises rates on 5 November. The FTSE 100 is down about 0.4% with miners leading the falls, and US futures point lower. The chip news is good: Samsung's record profit guidance beat forecasts, and TSMC's Q3 revenue of NT$1.49 trillion (about $46.7B, up 50% on a year ago) came in above the top of its own guidance."
    ] },
    { title: "Stocks in the news", items: [
      { t: "TSM", h: "TSMC reported record Q3 revenue of NT$1.49 trillion (~$46.7B), up 50% on a year ago.", b: "That beat the LSEG estimate of NT$1.46 trillion and the top of TSMC's own $44.6–45.8B guidance, and September sales alone were up 54.6%. Demand for AI processors from Nvidia, AMD and others is still running ahead of expectations. Full results, margins and the Q4 outlook come on 15 October." },
      { t: "BULL", h: "Webull fell about 20% on Wednesday after a House committee flagged national security concerns.", b: "A congressional panel's assessment said the broker's ties to the Chinese government create a national security risk (CNBC). It was the biggest large drop on a down day for US stocks." },
      { t: "STZ", h: "Constellation Brands beat forecasts but swung between losses and gains.", b: "The beer maker earned $3.74 a share on $2.63B of revenue against expectations of $3.56 on $2.54B. The shares fell about 5% before the open, then traded about 2% higher by midday, a sign of how unsure investors are about beer demand." },
      { t: "APLD", h: "Applied Digital's revenue rose 322% to $341.9M as its AI data-centre campus came online.", b: "It reported fiscal Q1 adjusted EBITDA of $64.4M and said its Polaris Forge 1 campus reached 250 MW of fully operational IT load on 1 October across two buildings." }
    ] },
    { title: "Deals and catalysts worth researching", intro: "Deals and results with concrete numbers. None of these guarantees a profit: big news is often priced in within hours, and the payoff can take years.", items: [
      { t: "Samsung", h: "Samsung: record ₩107.4 trillion (~$80B) Q3 operating profit guidance, up about 783% (8 Oct)", b: "Its fourth record quarter in a row, on revenue of about ₩195 trillion, beating the LSEG SmartEstimate of ₩106.1 trillion. Memory makers such as Micron, SanDisk and SK Hynix still traded lower before the US open, which shows how much was already expected. The division breakdown comes on 29 October." },
      { t: "IONQ", h: "IonQ: DARPA Stage C agreement worth up to $300M, through 2029 (7 Oct)", b: "DARPA will independently test IonQ's quantum systems against its roadmap. It's a technical validation more than a sales contract, and payments depend on future funding. The shares had fallen 4.5% during the day on rising yields and gained about 1% after hours." },
      { t: "RKLB", h: "NASA weighs bulk rocket purchases for a ~$30B moon-base plan (Bloomberg, 6 Oct)", b: "NASA's moon-base programme manager said the first bulk buys could be announced soon, possibly across four or five rocket types. Space stocks rose about 4% on Tuesday and gave it back on Wednesday. Nothing is signed yet." }
    ] }
  ],
  calendar: [
    { d: "Thu 8 Oct", e: "US weekly jobless claims, 1:30pm UK · ECB meeting accounts · PepsiCo results (out, beat estimates)" },
    { d: "Fri 9 Oct", e: "US consumer sentiment (prelim. Oct) · Delta Air Lines results" },
    { d: "Mon 12 Oct", e: "US Columbus Day: stocks open, bond market closed" },
    { d: "Tue 13 Oct", e: "Q3 bank earnings start: JPMorgan, Goldman Sachs, Citi, Wells Fargo, BlackRock, J&J" },
    { d: "Wed 14 Oct", e: "US CPI inflation (Sept), 1:30pm UK · Bank of America, Morgan Stanley" },
    { d: "Thu 15 Oct", e: "TSMC Q3 results and outlook, the key read for AI chip demand · US PPI (Sept)" },
    { d: "Later", e: "Fed decision 27–28 Oct · UK Budget 28 Oct · Samsung full Q3 29 Oct · AMD 3 Nov · Bank of England 5 Nov" }
  ],
  bottomLine: "Samsung and TSMC have confirmed that AI chip demand is still beating forecasts, but today's market is being driven by oil and bond yields. With the US 10-year near 5.4% and the UK 30-year above 6%, next week's US inflation figures (14 Oct) matter more than usual.",
  sources: [
    ["Samsung Newsroom: Earnings guidance for Q3 2026", "https://news.samsung.com/global/samsung-electronics-announces-earnings-guidance-for-third-quarter-2026"],
    ["The Next Web: Samsung expects record $80bn quarterly profit", "https://thenextweb.com/news/samsung-q3-2026-record-profit-ai-memory"],
    ["CNBC: Samsung forecasts record third-quarter profit", "https://www.cnbc.com/2026/10/08/samsung-q3-earnings.html"],
    ["TSMC Form 6-K: September 2026 revenue", "https://www.sec.gov/Archives/edgar/data/0001046179/000104617926000680/tsm-revenue20261008.htm"],
    ["Global Banking & Finance: TSMC Q3 revenue surges 50%, beats forecast", "https://www.globalbankingandfinance.com/tsmcs-third-quarter-revenue-surges-50-y-y-beating-market/"],
    ["TipRanks: Why are Micron, SanDisk and SK Hynix falling today, 8 Oct", "https://www.tipranks.com/news/why-are-micron-sandisk-and-sk-hynix-stocks-falling-today-october-8"],
    ["Yahoo Finance: Stock market today, 7 Oct (records end, bond jitters)", "https://finance.yahoo.com/markets/live/stock-market-today-wednesday-october-7-dow-sp-500-nasdaq-080241833.html"],
    ["Yahoo Finance: Stock market today, 8 Oct (futures fall as oil rises)", "https://finance.yahoo.com/markets/live/stock-market-today-thursday-october-8-dow-sp-500-nasdaq-080537884.html"],
    ["Investing.com: Most Fed members backed future rate hike, September minutes show", "https://investing.com/news/economy/most-fed-members-backed-future-rate-hike-fed-september-minutes-show-3196364"],
    ["Share Talk: FTSE 100 falls 0.8% as bond rout and $100 oil hit markets (7 Oct)", "https://www.share-talk.com/ftse-100-falls-0-8-as-bond-rout-and-100-oil-hit-markets/"],
    ["Investing.com: FTSE 100 slips as US bond yields climb; BoE November hike odds", "https://www.investing.com/news/stock-market-news/ftse-100-today-stocks-slip-as-us-bond-yields-climb-miners-drag-4935692"],
    ["Sunday Guardian: UK stocks fall as oil tops $104 and gilt yields rise (8 Oct)", "https://sundayguardianlive.com/business/why-is-uk-stock-market-down-today-ftse-100-ftse-250-and-ftse-all-share-fall-as-oil-tops-104-and-gilt-yields-rise-what-investors-should-know-301306/"],
    ["Trading Economics: gold", "https://tradingeconomics.com/commodity/gold"],
    ["CNBC: Stocks making the biggest moves midday, 7 Oct (Webull, Constellation Brands)", "https://www.cnbc.com/2026/10/07/stocks-making-the-biggest-moves-midday-gs-bull-ws-mu.html"],
    ["CNBC: Stocks making the biggest moves premarket, 7 Oct", "https://www.cnbc.com/2026/10/07/stocks-making-the-biggest-moves-premarket-stz-flut-neog.html"],
    ["GlobeNewswire: Applied Digital reports fiscal Q1 2027 results", "https://www.globenewswire.com/news-release/2026/10/07/3376854/0/en/applied-digital-reports-fiscal-first-quarter-2027-results.html"],
    ["The Quantum Insider: IonQ advances to Stage C of DARPA QBI", "https://thequantuminsider.com/2026/10/08/ionq-advances-to-final-stage-of-darpa-quantum-benchmarking-initiative/"],
    ["TipRanks: Why did quantum computing stocks plunge Wednesday?", "https://www.tipranks.com/news/why-did-quantum-computing-stocks-ionq-qbts-rgti-and-qubt-plunge-wednesday"],
    ["Benzinga: Rocket Lab stock pulls back after NASA bulk-launch report", "https://www.benzinga.com/trading-ideas/movers/26/10/62221444/rocket-lab-stock-pulls-back-whats-happening"]
  ]
};
