// Public morning brief: general market only. No portfolio, account or holdings content.
// Written alongside the private brief.js; build_public.py publishes it as brief.js on the public site and leak-checks it first.
window.HQ_BRIEF = {
  date: "2026-10-13",
  edition: "Tuesday 13 October 2026 · Morning edition",
  headline: "China's memory-chip push hits the AI trade: Micron falls 4% and Korea's Kospi drops 5.5%, as bank results open earnings season",
  dek: "Monday ended flat for the S&P 500 (−0.06%) but the Nasdaq fell 0.44% as chip stocks slid after China's CXMT announced progress on a denser type of DRAM. The sell-off spread to Asia overnight: the Kospi closed down 5.5% after a trading curb, with SK Hynix and Samsung down about 8–9%. London is calmer, with the FTSE 100 up about 0.6% near 10,720. Brent has eased to about $105 and gold is up about 0.5% near $4,194. JPMorgan, Goldman Sachs, Wells Fargo and Citi report before the US open.",
  market: [
    { k: "S&P 500", v: "7,807.24", d: "−0.06% Mon · Dow +0.38% · futures slightly softer Tue" },
    { k: "Nasdaq", v: "27,245.90", d: "−0.44% Mon · chip index −2.7%" },
    { k: "FTSE 100", v: "~10,720", d: "about +0.6% Tue morning · Mon close 10,656.28 (+1.0%)" },
    { k: "Gold", v: "~$4,194/oz", d: "about +0.5% Tue morning" },
    { k: "Brent oil", v: "~$105", d: "eased Tue after topping $106 Mon · US 10-year just under 5.20%" }
  ],
  sections: [
    {
      title: "The big picture",
      paras: [
        "Monday was a quiet day for the big indexes but a rough one for chips. The S&P 500 slipped 0.06% to 7,807.24 and the Nasdaq fell 0.44% to 27,245.90, while the Dow rose 0.38% to a third straight gain as money moved into banks and other value stocks ahead of results. The Philadelphia chip index fell about 2.7%. The trigger was China's ChangXin Memory (CXMT), which said it had made key progress on a '4F²' DRAM design that packs more memory cells into the same area, the same approach Samsung and SK Hynix are chasing. It plans to ship server memory using it by the end of 2026. Several analysts noted the sell-off also reflects profit-taking after a huge run in memory stocks this year.",
        "Asia took the news harder overnight. South Korea's Kospi closed down 5.5% after falling more than 7% at one point and briefly below 6,000, and Japan's Nikkei lost over 2%. London is shrugging it off: the FTSE 100 is up about 0.6% near 10,720, led by Whitbread, WPP and Diageo. Oil has eased, with Brent around $105, after briefly topping $106 on Monday on Middle East tensions. Today the big US banks open earnings season, and Fed Governor Waller speaks. Wednesday's US inflation figure (forecast around 3.6% a year) matters most for whether the Fed raises rates again on 28 October."
      ]
    },
    {
      title: "Stocks in the news",
      items: [
        { t: "MU", h: "Micron fell 3.9% to $989.21 after China's CXMT flagged progress on next-generation DRAM.", b: "CXMT says its 4F² design improves density and energy efficiency and that server modules using it will ship by the end of 2026, though it hasn't given specifications, production volumes or customers. Sandisk fell about 6% in sympathy. Analysts point out Chinese makers still lag in the most advanced memory used in AI chips (HBM), so the threat looks gradual rather than immediate." },
        { t: "META", h: "Meta rose 3.4% to $742.96 after launching its Muse AI models.", b: "It was one of the few big tech gainers on a day when money rotated out of chips. Meta is selling the models through monthly subscription tiers, a sign it wants direct revenue from AI as well as advertising." },
        { t: "000660.KS", h: "SK Hynix and Samsung fell about 8–9% in Seoul as foreign investors sold.", b: "The two memory giants make up a large part of the Kospi, which triggered its first sell-side trading curb in about two months. Memory makers had been among the biggest winners of the AI boom, which is why one competitor's announcement moved them so much." },
        { t: "WTB.L", h: "Whitbread (Premier Inn) rose about 2.6% despite a 62% drop in half-year pre-tax profit.", b: "Revenue rose 2% to £1.57 billion and profit fell to £109 million. It also urged shareholders to reject activist investor Corvex's push for a board seat and strategy changes." }
      ]
    },
    {
      title: "Deals and catalysts worth researching",
      intro: "Deals with concrete numbers. None of these guarantees a profit: big news is often priced in within hours, and the payoff can take years.",
      items: [
        { t: "IONQ", h: "IonQ agreed to buy cybersecurity firm Elisity in an all-stock deal worth up to $1.3 billion.", b: "The price includes up to $150 million of performance-based earnouts, and the deal is expected to close in the fourth quarter. IonQ wants to pair its post-quantum encryption with Elisity's 'zero trust' network security; it's the company's fourth acquisition this year. The shares fell about 9% on the day, a reminder that paying in stock dilutes existing shareholders." },
        { t: "SPCX", h: "SpaceX agreed to buy a nationwide block of 800 MHz mobile spectrum to turn Starlink Mobile into a US carrier.", b: "The deal with Grain Management needs FCC approval; reports put it at about $8 billion, but terms weren't disclosed. AT&T, Verizon and T-Mobile fell about 5–7% on Friday on the news, while Morgan Stanley expects any threat to the big carriers to build gradually, starting in rural areas." }
      ]
    }
  ],
  calendar: [
    { d: "Tue 13 Oct", e: "Bank results: JPMorgan, Goldman Sachs, Wells Fargo, Citi · UnitedHealth, Johnson & Johnson · Fed Governor Waller speaks" },
    { d: "Wed 14 Oct", e: "US CPI inflation (Sept), 1:30pm UK, forecast about 3.6% a year · ASML results · Bank of America, Morgan Stanley, BlackRock" },
    { d: "Thu 15 Oct", e: "TSMC Q3 results · US PPI, retail sales and jobless claims · Charles Schwab" },
    { d: "Fri 16 Oct", e: "Euro-area final inflation (Sept) · US industrial production · Travelers" },
    { d: "Later", e: "Fed decision 28 Oct · UK Budget 28 Oct · US midterms 3 Nov · Bank of England 5 Nov" }
  ],
  bottomLine: "The AI chip trade has had its biggest wobble in weeks, and it comes just before ASML (Wednesday) and TSMC (Thursday) report. Their outlooks, plus Wednesday's US inflation figure, will show whether this was a blip or the start of a bigger reset.",
  sources: [
    ["Motley Fool: Stock market today, Oct. 12 (Dow gains as memory stocks weigh on Nasdaq)", "https://www.fool.com/coverage/stock-market-today/2026/10/12/stock-market-today-oct-12-dow-gains-as-memory-stocks-weigh-on-nasdaq/"],
    ["Vista Partners: Stock market today, October 12, 2026", "https://vistapglobal.com/stock-market-today-october-12-2026-bull-celebrates-4th-birthday-as-dow-gains-nasdaq-slips-and-crude-oil-rises-ahead-of-inflation-data-asts-crm-docs-gs-eprx-ionq-jmp-meta-modd-ms-mu/"],
    ["Saxo: Morning Brew, 13 October 2026", "https://home.saxo/en-ch/content/articles/morning-brew/morning-brew-october-13-2026-13102026"],
    ["Saxo: Market Quick Take, 13 October 2026", "https://www.home.saxo/content/articles/macro/market-quick-take---korean-chip-stocks-tumble-as-us-bank-earnings-begin---13-october-2026-13102026"],
    ["Proactive: Markets live, FTSE edges higher despite Asian tech sell-off", "https://proactiveinvestors.com/companies/news/1099993/markets-live-ftse-set-to-edge-higher-despite-asian-technology-sell-off-1099993.html"],
    ["BigGo Finance: Micron down 3.9% as CXMT advances in memory tech", "https://finance.biggo.com/news/fe4fb088-266f-45df-8c2d-3eb1d215190f"],
    ["Korea JoongAng Daily: Global chip stocks tumble as CXMT unveils next-gen DRAM plans", "https://www.koreajoongangdaily.com/business/global-chip-stocks-tumble-as-chinas-cxmt-unveils-nextgeneration-dram-plans/12917865"],
    ["TradingKey: CXMT 4F² DRAM progress", "https://www.tradingkey.com/analysis/stocks/us-stocks/262213148-cxmt-4f2-dram-threat-samsung-sk-hynix-kioxia-tradingkey"],
    ["KED Global: Kospi tumbles as chip rout deepens", "https://www.kedglobal.com/korean-stock-market/newsView/ked202610130001"],
    ["Investing.com: Asia stocks slide as China chip threat hits Samsung, SK Hynix", "https://in.investing.com/news/stock-market-news/asia-stocks-slide-as-china-chip-threat-hits-samsung-sk-hynix-oil-retreats-5629461"],
    ["IonQ: IonQ to acquire Elisity", "https://www.ionq.com/news/ionq-to-acquire-elisity-to-accelerate-zero-trust-for-the-quantum-era"],
    ["CNBC: IonQ to acquire Elisity for up to $1.3 billion", "https://www.cnbc.com/2026/10/12/ionq-elisity-acquisition-cybersecurity.html"],
    ["HDFC Sky: IonQ falls 9.25% on $1.3 billion deal", "https://hdfcsky.com/news/cryo-cell-jumps-9-61percent-on-earnings-beat-euro-tech-surges-37-37percent-on-norway-jv-ionq-falls-9-25percent-on-1-3-billion-deal"],
    ["The Star/Reuters: Telecom stocks slide as SpaceX spectrum deal rattles sector", "https://www.thestar.com.my/tech/tech-news/2026/10/09/us-european-telecom-stocks-slide-as-spacex-spectrum-deal-rattles-sector"],
    ["Admiral Markets: US CPI preview, September 2026", "https://admiralmarkets.com/analytics/traders-blog/us-cpi-preview-september-2026-forecasts-and-the-core-cpi-outlook"]
  ]
};
