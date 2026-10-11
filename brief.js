// Public morning brief: general market only. No portfolio, account or holdings content.
// Written alongside the private brief.js; build_public.py publishes it as brief.js on the public site and leak-checks it first.
window.HQ_BRIEF = {
  date: "2026-10-11",
  edition: "Sunday 11 October 2026 · Weekend edition",
  headline: "Stocks shook off the OpenAI scare to end the week higher; SpaceX's airwaves deal wiped about $39 billion off US phone carriers",
  dek: "The S&P 500 rose 0.6% on Friday and 1.2% over the week, close to its record, as worries about OpenAI's revenue faded. The FTSE 100 had its best day of the week, up 1.1%, as oil and gilt yields eased. Gold rose about 1.5% to around $4,220. US consumer sentiment fell to its lowest since May. Next week brings US inflation data on Wednesday, the start of bank earnings and TSMC's results on Thursday.",
  market: [
    { k: "S&P 500", v: "7,811.54", d: "+0.59% Fri · +1.2% on the week, near its record" },
    { k: "Nasdaq", v: "27,366.17", d: "+0.64% Fri · +0.6% on the week" },
    { k: "FTSE 100", v: "10,552.05", d: "+1.06% Fri · best day of the week as gilt yields eased" },
    { k: "Gold", v: "~$4,220/oz", d: "about +1.5% Fri" },
    { k: "Brent oil", v: "~$104", d: "about −0.4% Fri · WTI ~$92 · US 10-year yield 5.24%" }
  ],
  sections: [
    {
      title: "The big picture",
      paras: [
        "Friday undid much of Thursday's AI wobble. Investors went back to tech after reports painted OpenAI's finances in a better light, and all three big US indexes rose: the S&P 500 0.59% to 7,811.54, the Nasdaq 0.64% to 27,366.17 and the Dow 0.83%. It was a fourth weekly gain in a row. The mood under the surface was weaker: the University of Michigan's consumer sentiment reading fell to 46.3, its lowest since May, as people complained about the cost of living.",
        "In London the FTSE 100 rose 1.06% to 10,552.05 as oil eased and gilt yields came off the multi-decade highs reached earlier in the week. Brent ended around $104 and the US 10-year yield at 5.24%, below Wednesday's 24-year high of 5.37%. Next week brings US inflation on Wednesday (forecast 3.6% a year, up from 3.4%), and a hot number could revive talk of a Fed rate rise at the 27–28 October meeting. TSMC reports on Thursday, the next big test of AI demand."
      ]
    },
    {
      title: "Stocks in the news",
      items: [
        { t: "HUM", h: "Humana jumped about 12–15% after 95% of its Medicare Advantage members landed in four-star-or-better plans for 2027.", b: "A year ago that figure was about 20%, and JPMorgan analysts had expected 60–70%. Plans rated four stars or higher earn government bonus payments; reports put Humana's potential 2028 bonus at about $4.8 billion, though how much reaches profit depends on how much it reinvests." },
        { t: "TMUS", h: "T-Mobile, AT&T and Verizon fell 8.5–13% after SpaceX agreed to buy $8 billion of airwaves.", b: "Investors worry SpaceX's Starlink could become a real mobile competitor. Together the three carriers lost about $39 billion in market value, almost five times what SpaceX paid. Tower owners went the other way: Crown Castle, American Tower and SBA rose 7–16% on hopes of new ground-based demand." },
        { t: "LITE", h: "Lumentum rose about 5% on strong demand for optical parts used in AI data centres.", b: "The company pointed to demand lasting through 2029 for the lasers and optical components that connect AI servers. It reports on 5 November." },
        { t: "VST", h: "Vistra rose 3.4% on Friday and about 15% over the week.", b: "On Tuesday the US Energy Department conditionally committed up to $4.2 billion to help Vistra upgrade four nuclear plants. Power producers have rallied all week as tech companies sign long-term deals for nuclear power." }
      ]
    },
    {
      title: "Deals and catalysts worth researching",
      intro: "Deals with concrete numbers. None of these guarantees a profit: big news is often priced in within hours, and the payoff can take years.",
      items: [
        { t: "SpaceX", h: "SpaceX: $8B cash for Grain Management's 800 MHz airwaves (8 Oct)", b: "Low-band airwaves travel further and reach inside buildings, filling a gap for satellite-to-phone service. It needs FCC approval, and any real threat to the carriers would take years to build." },
        { t: "VST", h: "Vistra: up to $4.2B conditional US Energy Department loan for 433 MW of reactor upgrades (6 Oct)", b: "It covers four nuclear plants in Pennsylvania and Ohio and lowers how much Vistra must fund upfront. 'Conditional' means it isn't final yet, and the shares are already up about 15% on the week." },
        { t: "SHEL", h: "Shell: buying a 30% stake in Equinor's Bay du Nord oil project off Canada (9 Oct)", b: "Shell rose 0.4% on the news. Big offshore projects take years to reach first oil, so the payoff depends on oil prices well beyond today's." }
      ]
    }
  ],
  calendar: [
    { d: "Mon 12 Oct", e: "US Columbus Day: stocks open, bond market closed · IMF meetings begin" },
    { d: "Tue 13 Oct", e: "Q3 bank results: JPMorgan, Goldman Sachs, Citi, Wells Fargo · J&J" },
    { d: "Wed 14 Oct", e: "US CPI inflation (Sept), 1:30pm UK, forecast 3.6% y/y · ASML results · Bank of America, Morgan Stanley, BlackRock · Fed Beige Book" },
    { d: "Thu 15 Oct", e: "TSMC Q3 results and outlook · US PPI and retail sales (Sept)" },
    { d: "Fri 16 Oct", e: "US industrial production (Sept)" },
    { d: "Later", e: "Fed decision 27–28 Oct · UK Budget 28 Oct · US midterms 3 Nov · Bank of England 5 Nov · Nvidia 18 Nov" }
  ],
  bottomLine: "The market treated Thursday's OpenAI scare as a blip and finished the week near its record, but next week holds the real tests: Wednesday's US inflation number, which could put a Fed rate rise back on the table, and TSMC's read on AI demand on Thursday.",
  sources: [
    ["La Nación/AP: How major US stock indexes fared, Friday 9 Oct", "https://www.lanacion.com.ar/usa/how-major-us-stock-indexes-fared-friday-1092026-nid09102026/"],
    ["Yahoo Finance: Markets news, 9 Oct (oil, yields, movers)", "https://finance.yahoo.com/markets/stocks/articles/markets-news-oct-9-2026-105547352.html"],
    ["Yahoo Finance: Stock market today, 9 Oct (consumer sentiment)", "https://finance.yahoo.com/markets/live/stock-market-today-friday-october-9-dow-sp-500-nasdaq-080148117.html"],
    ["Vista Global: Weekly market summary, 9 Oct (gold, Lumentum)", "https://vistapglobal.com/weekly-market-summary-friday-october-9-2026-stocks-close-higher-as-ai-rebounds-and-consumer-sentiment-weakens-amwl-dal-docs-eprx-lite-lly-lpl-modd-mrna-nvda-ser-tsla-ysg/"],
    ["Share Talk: FTSE 100 jumps 1.1% as oil and bond yields ease (Shell)", "https://www.share-talk.com/ftse-100-jumps-1-1-as-oil-and-bond-yields-ease/"],
    ["TIKR: Humana soars on Medicare star ratings", "https://www.tikr.com/blog/humana-soars-15-on-medicare-star-ratings-95-of-members-in-four-star-plans"],
    ["Broadband Breakfast: SpaceX pays $8B for Grain Management airwaves", "https://broadbandbreakfast.com/earthquake-in-the-sky-spacex-pays-8-billion-for-grain-management-airwaves-to-advance-starlink-mobile/"],
    ["Benzinga: AT&T, Verizon and T-Mobile tumble on SpaceX deal", "https://www.benzinga.com/markets/tech/26/10/62271617"],
    ["Neutron Bytes: Nuclear deals roundup, incl. DOE loan to Vistra", "https://neutronbytes.com/2026/10/09/googles-20-year-4-3-billion-deal-with-constellation-to-uprate-11-reactors"],
    ["TIKR: Vistra rallies on Energy Department nuclear investment", "https://www.tikr.com/blog/vistra-stock-rallies-energy-department-nuclear-investment"],
    ["FXEmpire: The week ahead, banks and CPI", "https://www.fxempire.com/forecasts/article/the-week-ahead-jpmorgan-goldman-sachs-earnings-and-cpi-test-stock-market-strength-1637135"],
    ["Akrostec: ASML Q3 results, 14 Oct", "https://www.akrostec.com/indices/KGAIS/events/2026-10-14t00-00-00z-asml-holding-nv-asml-financial-results-7deceb62"]
  ]
};
