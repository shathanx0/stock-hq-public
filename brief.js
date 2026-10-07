// Public morning brief: general market only. No portfolio, account or holdings content.
// Written alongside the private brief.js; build_public.py publishes it as brief.js on the public site and leak-checks it first.
window.HQ_BRIEF = {
  date: "2026-10-07",
  edition: "Wednesday 7 October 2026 · Morning edition",
  headline: "Google signs a 20-year nuclear power deal with Constellation and the stock jumps 12%, while Micron slips on a Taiwan strike threat",
  dek: "Yesterday's Bloomberg report turned into a signed deal: Google will buy 890 MW of new nuclear output from upgrades at 11 Constellation reactors under a 20-year contract, plus 2,700 MW under a separate 15-year supply deal. Constellation closed up 12.2% at $300.40 and the whole nuclear group rallied. The S&P 500 and Nasdaq both closed at records. London is about 0.5% lower this morning as bond yields rise again and metals fall, and Micron is down about 2% before the US open after workers at its Taiwan plant voted to authorise a strike.",
  market: [
    { k: "S&P 500", v: "7,819", d: "+0.6% Tue · record close, first above 7,800" },
    { k: "Nasdaq", v: "27,600", d: "+0.5% Tue · record close" },
    { k: "FTSE 100", v: "~10,489", d: "about −0.5% Wed morning · miners and utilities lower" },
    { k: "Gold", v: "~$4,135/oz", d: "−0.7% Wed · stronger dollar, higher yields" },
    { k: "US 10-yr yield", v: "~5.32%", d: "Wed · up from 5.27% Tue; Fed minutes 7pm UK" }
  ],
  sections: [
    { title: "The big picture", paras: [
      "Wall Street set more records on Tuesday. The S&P 500 rose 0.58% to 7,818.93, its fourth gain in a row and its first close above 7,800, and the Nasdaq added 0.45% to 27,599.79. Lower oil and a dip in Treasury yields helped, and chip stocks led again: Marvell rose 5.8% after its investor day and AMD gained nearly 3%. Constellation's 12% jump on the Google deal lifted the whole nuclear group. Reuters reports that Australian uranium miners had their best session in weeks overnight.",
      "This morning the mood is cooler. The FTSE 100 is down about 0.5% and the DAX about 0.8%. The US 10-year yield is back up at about 5.32%, near its highest since 2002, and gold (about $4,135), silver and copper are all lower. Brent oil is up about 0.7% at around $101. Tonight at 7pm UK the Fed publishes minutes from its September meeting. Traders currently price roughly an 80% chance that the Fed holds rates at its 27–28 October meeting, helped by Friday's soft jobs report."
    ] },
    { title: "Stocks in the news", items: [
      { t: "CEG", h: "Google signs a 20-year nuclear power deal; the shares jumped 12.2% to $300.40.", b: "Google will buy 890 MW of new capacity that Constellation will create by upgrading 11 existing reactors in Illinois, Pennsylvania and New Jersey, which Constellation says means more than $4.3B of investment. A separate 15-year agreement covers another 2,700 MW from its PJM fleet, and Constellation also picked Google Cloud and Gemini under a five-year technology deal. It's the second Big Tech nuclear contract in a week, after Amazon's 690 MW. The new power arrives over several years, and the stock is up about 13.5% in a week, so a lot of the good news is already in the price. Results are due 6 November." },
      { t: "MU", h: "Down about 2% before the open on a Taiwan strike vote and softer memory prices.", b: "Workers at Micron's Taoyuan plant in Taiwan voted with 99% support to authorise a strike over bonuses and profit-sharing, after mediation failed in September (Reuters, TipRanks). NAND flash prices have also softened this week. Separately, Micron agreed a $600M patent settlement and cross-licence with Netlist, paid at $30M a quarter for five years, which is small next to Micron's revenue. Samsung's preliminary Q3 numbers land early Thursday UK time and are the next big read for memory." },
      { t: "AMD", h: "Rose 2.8% to a 52-week high of about $649 after Lisa Su said supply will rise substantially in 2027.", b: "Su said demand is still running ahead of capacity. Citi raised its target to $800 from $575 and Mizuho to $705 from $580 (TipRanks). On her Asia tour, Su told Reuters on Wednesday that AMD is still exploring memory and foundry partnerships with Samsung. Results are due 3 November." }
    ] },
    { title: "Deals and catalysts worth researching", intro: "Deals with concrete numbers. None of these guarantees a profit: a big deal is often priced in within hours, and the payoff can take years.", items: [
      { t: "CEG", h: "Google–Constellation: 890 MW for 20 years plus 2,700 MW for 15 years (6 Oct)", b: "Described by the WSJ as the largest reactor 'uprate' deal between a nuclear operator and a tech company. Vistra rose about 8% and Talen about 7% in sympathy. Constellation added about $33 a share in one day, so the market priced the deal in immediately." },
      { t: "MRVL", h: "Marvell targets $70–90B of revenue by fiscal 2031 (6 Oct investor day)", b: "It raised its fiscal 2028 outlook to $20B, above the roughly $18.2B analysts expected, and its fiscal 2029 custom-chip target to more than $12B. The shares rose about 10% early and closed up 5.8%. It's a sign of how much AI spending chip designers expect." },
      { t: "BWXT", h: "BWXT's BANR microreactor picked for a Canadian transportable nuclear plant (5 Oct), plus a $189M naval fuel contract (1 Oct)", b: "BWXT rose 7.6% on Tuesday in the nuclear rally, but Truist cut its target to $182 from $202 after the company's investor day." }
    ] }
  ],
  calendar: [
    { d: "Wed 7 Oct", e: "Fed minutes from the September meeting, 7pm UK" },
    { d: "Thu 8 Oct", e: "Samsung preliminary Q3 results (around 1am UK) · ECB meeting accounts · PepsiCo results", t: "MU" },
    { d: "Fri 9 Oct", e: "US consumer sentiment (prelim. Oct) · Delta Air Lines results" },
    { d: "Mon 12 Oct", e: "US Columbus Day: stocks open, bond market closed" },
    { d: "Tue 13 Oct", e: "Q3 bank earnings start: JPMorgan, Goldman Sachs, Citi, Wells Fargo, BlackRock, J&J" },
    { d: "Wed 14 Oct", e: "US CPI inflation (Sept), 1:30pm UK · Bank of America, Morgan Stanley" },
    { d: "Thu 15 Oct", e: "TSMC Q3 results, the key read for AI chip demand" },
    { d: "Later", e: "Fed decision 27–28 Oct · UK Budget 28 Oct · AMD 3 Nov · Bank of England 5 Nov · Constellation 6 Nov" }
  ],
  bottomLine: "Constellation's Google deal is the biggest story for the nuclear-power trade, but the stock rose 12% in a day, so the market has already reacted. For chip stocks, tonight's Fed minutes and Samsung's results in the early hours of Thursday matter most, especially for memory makers like Micron.",
  sources: [
    ["Constellation: Google and Constellation announce 890 MW nuclear agreement (6 Oct)", "https://www.constellationenergy.com/news/2026/10/google-and-constellation-announce-landmark-agreement-to-bring-890-mw-of-new-nuclear-capacity-to-pjm-grid.html"],
    ["Axios: Google and Constellation sign latest nuclear deal", "https://www.axios.com/2026/10/06/google-constellation-nuclear-energy"],
    ["WSJ: Google and Constellation strike a sweeping nuclear-power deal", "https://www.wsj.com/business/energy-oil/google-and-constellation-energy-strike-a-sweeping-nuclear-power-deal-4287b372"],
    ["Yahoo Finance: Constellation soars 12%; Vistra and Talen climb", "https://finance.yahoo.com/energy/articles/constellation-energy-soars-12-google-140600039.html"],
    ["Upstox: Constellation closes at $300.40", "https://upstox.com/news/market-news/us-stocks/constellation-energy-shares-jump-15-on-nasdaq-after-long-term-890-mw-nuclear-power-deal-with-google/article-201392/"],
    ["Video: Bloomberg, Constellation surges 12% on Google nuclear deal (Closing Bell; not watched, chosen by title)", "https://www.youtube.com/watch?v=iPkKBgquLoM"],
    ["Reuters: Australian uranium miners rally after Google–Constellation deal", "https://www.reuters.com/business/energy/australian-uranium-miners-rally-after-googles-power-deal-with-constellation-2026-10-07/"],
    ["CNBC: Stock market news for 6 Oct (record closes)", "https://www.cnbc.com/2026/10/06/stock-market-today-live-updates.html"],
    ["CNBC: Treasury yields slide as surge to multiyear highs cools (6 Oct)", "https://www.cnbc.com/2026/10/06/treasury-yields-fed-fomc-minutes.html"],
    ["Yahoo Finance UK: FTSE 100 falls as US Treasury yields rise and miners decline (7 Oct)", "https://uk.finance.yahoo.com/news/ftse-100-falls-us-treasury-085534155.html"],
    ["Trading Economics: gold", "https://tradingeconomics.com/commodity/gold"],
    ["TipRanks: Micron, SanDisk and SK Hynix extend losses premarket (7 Oct)", "https://www.tipranks.com/news/micron-sandisk-and-sk-hynix-stocks-extend-losses-in-premarket-today-whats-behind-the-sell-off"],
    ["Reuters: Micron's Taoyuan union secures authorisation to strike", "https://www.reuters.com/business/world-at-work/microns-taoyuan-union-taiwan-secures-authorisation-strike-2026-10-07/"],
    ["Invezz: Micron to pay Netlist $30M a quarter for 5 years", "https://invezz.com/news/2026/10/06/netlist-stock-why-micron-will-pay-nlst-30m-a-quarter-for-5-years/"],
    ["TipRanks: Nvidia and AMD hit 52-week highs; what drove the rally", "https://www.tipranks.com/news/nvidia-and-amd-stocks-what-drove-the-rally-and-which-stock-has-more-upside"],
    ["Reuters: AMD CEO says it continues to explore foundry partnership with Samsung", "https://www.reuters.com/world/asia-pacific/amd-ceo-says-continues-explore-foundry-partnership-with-samsung-electronics-2026-10-07/"],
    ["Investing.com: Marvell rallies after ambitious investor day targets", "https://www.investing.com/news/stock-market-news/marvell-technology-stock-rallies-following-ambitious-investor-day-targets-4934767"],
    ["Yahoo Finance: Marvell targets up to $90B revenue by 2031", "https://finance.yahoo.com/technology/ai/articles/marvell-technology-targets-90b-revenue-200205162.html"],
    ["Business Wire: BWXT's BANR microreactor chosen for Canadian project (5 Oct)", "https://www.businesswire.com/news/home/20261005162770/en/BWXT%E2%80%99s-BANR-Microreactor-Chosen-for-Canadian-Transportable-Nuclear-Power-Plant-Project/"],
    ["TipRanks/TheFly: BWXT target cut to $182 at Truist", "https://www.tipranks.com/news/the-fly/bwx-technologies-price-target-lowered-to-182-from-202-at-truist-thefly-news"],
    ["Motley Fool: Samsung may report its first 100 trillion won quarter; what it means for Micron", "https://www.fool.com/investing/2026/10/05/samsung-may-report-its-first-100-trillion-won-quarter-micron-stock-has-more-to-lose-than-to-gain/"]
  ]
};
