// Public morning brief: general market only. No portfolio, account or holdings content.
// Written alongside the private brief.js; build_public.py publishes it as brief.js on the public site and leak-checks it first.
window.HQ_BRIEF = {
  date: "2026-10-09",
  edition: "Friday 9 October 2026 · Morning edition",
  headline: "A report that OpenAI earns less than thought knocks chip stocks; SpaceX's $8B spectrum buy shakes up telecoms",
  dek: "The Nasdaq fell 1.25% on Thursday and the Philadelphia chip index about 3.4% after the Financial Times reported OpenAI's annualised revenue is about $50 billion, not the roughly $70 billion investors had assumed. Chip stocks are bouncing before Friday's open, with Nasdaq futures up about 0.8%. Oil eased about 1% to around $103 after President Trump said talks with Iran were productive and no attack was planned before the US midterms. SpaceX agreed to buy an $8 billion block of airwaves, sending phone carriers on both sides of the Atlantic sharply lower and tower owners higher. Delta cut its 2026 profit forecast on fuel costs.",
  market: [
    { k: "S&P 500", v: "7,765", d: "−0.47% Thu · second daily fall; futures about +0.3% Fri" },
    { k: "Nasdaq", v: "27,193", d: "−1.25% Thu · chip index about −3.4%" },
    { k: "FTSE 100", v: "~10,440", d: "−0.2% Thu · lowest in over three months; energy at a record" },
    { k: "Gold", v: "~$4,190/oz", d: "about +1.3% Fri morning · after +0.4% Thu" },
    { k: "Brent oil", v: "~$103", d: "about −1% Fri · after +4.5% Thu; still up on the week" }
  ],
  sections: [
    { title: "The big picture", paras: [
      "Thursday was about two things: how much money AI actually makes, and oil. The Financial Times reported that OpenAI's annualised revenue was about $50 billion at the end of September, around $20 billion below the figure investors had been using. The gap comes mostly from how revenue sold through cloud partners is counted, and Bloomberg separately reported OpenAI expects to reach $70 billion or more by the end of 2026, but it was enough to rattle a market that has leaned heavily on AI spending. Nvidia fell 2.9%, AMD 3.9%, Micron 4.8% and Oracle more than 5%. The S&P 500 lost 0.47% to 7,765.36 and the Nasdaq 1.25% to 27,193.34, while the Dow edged up 0.1%.",
      "Oil swung hard. Brent jumped about 4.5% to above $104 on more attacks on shipping near the Strait of Hormuz and a hurricane disrupting US Gulf production, then eased after President Trump said there would be no attack on Iran before the 3 November midterms. That helped the US 10-year Treasury yield slip to about 5.23%. In London the picture was harsher: the 10-year gilt yield touched 5.53%, a 19-year high, and the 20- and 30-year yields both passed 6%. The FTSE 100 fell 0.2% to its lowest in more than three months, though energy shares hit a record. US jobless claims fell to 197,000, another sign the jobs market is holding up."
    ] },
    { title: "Stocks in the news", items: [
      { t: "ORCL", h: "Oracle fell more than 5% after the OpenAI revenue report.", b: "Oracle's huge cloud backlog depends heavily on OpenAI, so any sign that OpenAI's income is smaller than assumed hits it directly. OpenAI is valued at about $1.4 trillion, roughly 28 times the reported $50 billion run-rate, and is raising another $30 billion." },
      { t: "DAL", h: "Delta cut its 2026 profit forecast to $5.10–5.60 a share from $6.50–7.50 as fuel costs bite.", b: "Third-quarter revenue rose 21% to $20.2 billion, but adjusted earnings of $1.72 a share were slightly below forecasts. It also cut its free cash flow outlook to $2.5 billion from up to $4 billion and guided to $1.15–1.65 a share for the fourth quarter. The CEO said demand is still strong; the problem is the price of jet fuel." },
      { t: "TMUS", h: "US and European phone carriers fell 2–7% after SpaceX bought spectrum for its satellite-to-phone service.", b: "T-Mobile, Verizon and AT&T fell 5.5–7.4% before the US open, Deutsche Telekom about 6.5% and Vodafone about 4%. Tower owners went the other way: American Tower, Crown Castle and SBA rose 6.7–8.3%, on the idea that SpaceX could become another paying tenant." },
      { t: "TSCO.L", h: "Tesco rose 5.2% after raising its profit forecast to £3.15–3.3 billion.", b: "It was one of the best performers in a weak London market on Thursday, alongside Imperial Brands (+5.1%), which announced a £1.5 billion buyback." }
    ] },
    { title: "Deals and catalysts worth researching", intro: "Deals and results with concrete numbers. None of these guarantees a profit: big news is often priced in within hours, and the payoff can take years.", items: [
      { t: "SpaceX", h: "SpaceX: about $8 billion cash for Grain Management's nationwide 800 MHz spectrum (9 Oct)", b: "Low-band airwaves travel through walls and trees, which matters for beaming signal from satellites straight to phones. The deal needs regulatory approval. Morgan Stanley said it shows SpaceX will be a more aggressive buyer of spectrum, but expects any threat to carriers to build slowly, starting in rural areas." },
      { t: "Tower REITs", h: "Tower owners up 6.7–8.3% on the same deal (9 Oct)", b: "The bull case is that a SpaceX ground network would need towers. The bear case is that buying spectrum is not a commitment to build anything, so the rally rests on an option, not a signed lease." },
      { t: "IMB.L", h: "Imperial Brands: £1.5 billion share buyback, trading on track with guidance (8 Oct)", b: "Buybacks return cash by shrinking the share count. The shares rose 5.1% on the day." }
    ] }
  ],
  calendar: [
    { d: "Fri 9 Oct", e: "US consumer sentiment (prelim. Oct), 3pm UK · Delta results (out: guidance cut)" },
    { d: "Mon 12 Oct", e: "US Columbus Day: stocks open, bond market closed" },
    { d: "Tue 13 Oct", e: "Q3 bank earnings start: JPMorgan, Goldman Sachs, Citi, Wells Fargo, BlackRock, J&J" },
    { d: "Wed 14 Oct", e: "US CPI inflation (Sept), 1:30pm UK · Bank of America, Morgan Stanley" },
    { d: "Thu 15 Oct", e: "TSMC Q3 results and outlook, the key read for AI chip demand · US PPI (Sept)" },
    { d: "Later", e: "Fed decision 27–28 Oct · UK Budget 28 Oct · Samsung full Q3 29 Oct · US midterms 3 Nov · Bank of England 5 Nov" }
  ],
  bottomLine: "The AI trade got its first real wobble in a while, not from weak chip demand but from doubts about how much the biggest AI customer earns. With bond yields near multi-decade highs in the US and UK, next week's US inflation figures (14 Oct) and TSMC's outlook (15 Oct) are the two things to watch.",
  sources: [
    ["Vista Global: Stock market today, 8 Oct (index closes)", "https://vistapglobal.com/stock-market-today-october-8-2026-nasdaq-falls-1-25-as-oil-and-rate-worries-weigh-on-wall-street-amzn-docs-eprx-eras-gs-hpp-modd-nvda-pltr-ser-soc-spcx-t-ysg/"],
    ["Motley Fool: Stock market today, 8 Oct", "https://fool.com/coverage/stock-market-today/2026/10/08/stock-market-today-oct-8-tech-stocks-slide-as-treasury-yields-and-oil-prices-surge"],
    ["Yahoo Finance: Stock market today, 8 Oct (AI trade takes a hit)", "https://finance.yahoo.com/markets/live/stock-market-today-thursday-october-8-dow-sp-500-nasdaq-080537884.html"],
    ["Yahoo Finance: OpenAI revenue $20B below previous reports; ORCL, NVDA tumble", "https://finance.yahoo.com/technology/ai/articles/openai-revenue-20b-below-previous-181839907.html"],
    ["Trading Economics: Tech shares plunge on Thursday", "https://tradingeconomics.com/united-states/stock-market/news/590599"],
    ["BigGo Finance: Philadelphia Semiconductor Index falls 3.4%", "https://finance.biggo.com/news/5d793ce5-4589-4eb3-9393-8e6c175795b7"],
    ["Yahoo Finance: US stock futures rise as investors assess OpenAI reports and Delta (9 Oct)", "https://finance.yahoo.com/markets/stocks/articles/us-stock-futures-rise-investors-092540495.html"],
    ["CNBC: Delta cuts 2026 forecast on fuel surge", "https://www.cnbc.com/2026/10/09/delta-air-lines-dal-q3-2026-earnings.html"],
    ["Alphastreet: Delta Q3 2026 key financials", "https://news.alphastreet.com/delta-air-lines-dal-q3-2026-earnings-key-financials-and-quarterly-highlights/"],
    ["Investing.com/Reuters: Telecom stocks slide as SpaceX spectrum deal rattles sector", "https://www.investing.com/news/stock-market-news/us-european-telecom-stocks-slide-as-spacex-spectrum-deal-rattles-sector-4940422"],
    ["Investing.com: SpaceX spectrum deal lifts US cell tower stocks", "https://www.investing.com/news/stock-market-news/spacex-spectrum-deal-lifts-us-cell-tower-stocks-bull-and-bear-cases-outlined-93CH-4940234"],
    ["Euronext/Reuters: FTSE 100 slips as bond yields hit multi-decade highs, energy shares soar", "https://live.euronext.com/en/financial-news/ftse-100-slips-bond-yields-hit-multi-decade-highs-energy-shares-soar"],
    ["HDFC Sky: Brent falls 1% as Trump signals Iran talks (9 Oct)", "https://hdfcsky.com/news/brent-crude-oil-price-today-october-9-2026-brent-falls-1percent-to-103-2-as-trump-signals-iran-talks"],
    ["Trading Economics: gold", "https://tradingeconomics.com/commodity/gold"]
  ]
};
