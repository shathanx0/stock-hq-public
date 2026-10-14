// Public morning brief: general market only. No portfolio, account or holdings content.
// Written alongside the private brief.js; build_public.py publishes it as brief.js on the public site and leak-checks it first.
window.HQ_BRIEF = {
  date: "2026-10-14",
  edition: "Wednesday 14 October 2026 · Morning edition",
  headline: "ASML says chip-tool demand will outrun supply into 2028 as the chip sell-off pauses; US inflation lands at 1:30pm",
  dek: "Tuesday ended flat for the S&P 500 (−0.02%) and slightly lower for the Nasdaq (−0.15%), as a mixed start to bank earnings and a sixth straight fall for chipmakers cancelled out. This morning ASML beat profit forecasts and raised its outlook, lifting European tech. The FTSE 100 is up about 0.2%, Brent is around $106 on Saudi–Houthi fighting, and gold has slipped for a third day to about $4,145. US inflation for September is due at 1:30pm UK time.",
  market: [
    { k: "S&P 500", v: "7,805.45", d: "−0.02% Tue · futures about +0.2% Wed" },
    { k: "Nasdaq", v: "27,204.38", d: "−0.15% Tue · Dow −0.35% to 51,670.10" },
    { k: "FTSE 100", v: "+0.2%", d: "Wed morning, ahead of US inflation · BP +3.7% Tue" },
    { k: "Gold", v: "~$4,145/oz", d: "about −0.4% Wed · third day lower" },
    { k: "Brent oil", v: "~$106", d: "up on Saudi–Houthi fighting · US 10-year about 5.20%" }
  ],
  sections: [
    {
      title: "The big picture",
      paras: [
        "Tuesday was another day where the indexes barely moved but the details did. The S&P 500 slipped 0.02% to 7,805.45, the Nasdaq fell 0.15% to 27,204.38 and the Dow lost 0.35%. Bank results were mixed: JPMorgan's profit rose 6% but missed forecasts, Wells Fargo fell about 3% on disappointing revenue, and Goldman Sachs beat on strong share trading. Chip stocks fell for a sixth session in a row, led by chip-equipment makers: Applied Materials dropped about 7% and Micron about 3.6%. Johnson & Johnson fell around 5% despite raising its full-year forecast.",
        "The mood is a little better this morning. ASML, which makes the machines every leading chipmaker relies on, said customers want to place orders through 2030 and that it probably won't have enough capacity to meet demand in 2027 and 2028. Its shares and European tech rose in early trading. Oil is the worry in the background: Brent is near $106 after Houthi attacks on Saudi Arabia, including a fire at a Saudi Aramco office building. The big event is US inflation at 1:30pm UK time, forecast to rise to about 3.6% a year from 3.4%. Markets see about an 80% chance the Fed holds rates on 28 October but have almost fully priced a rise in December. In the UK, the Bank of England's chief economist Huw Pill said he was sceptical of market bets on four rate rises over the next year."
      ]
    },
    {
      title: "Stocks in the news",
      items: [
        { t: "ASML", h: "ASML beat profit forecasts and raised its outlook for a third time this year.", b: "Third-quarter sales were €11.7 billion, just below forecasts, but net profit of €5.0 billion was better than expected and the gross margin was 57.5%. It expects €14.2–15.2 billion of sales in the fourth quarter and €44–45 billion for 2026. The shares had fallen 4.2% on Tuesday in the chip sell-off, so part of this morning's rise is a rebound." },
        { t: "AMAT", h: "Applied Materials fell about 7%, its sixth losing day in a row.", b: "At its investor day it declined to give a forecast for industry spending, and its 2030 targets underwhelmed some investors. The fall came after a huge run: the stock is still up about 80% this year. Lam Research and KLA fell about 4%." },
        { t: "JNJ", h: "Johnson & Johnson fell about 5% despite beating forecasts and raising its 2026 outlook.", b: "Sales rose 5.9% to $25.4 billion and adjusted earnings per share were $2.59, six cents ahead of forecasts. But a one-time charge linked to its proposed talc settlement cut reported profit to $210 million, and medical-device sales grew only 2.5%." },
        { t: "BP.L", h: "BP rose about 3.7% in London on Tuesday after a trading update showed faster debt reduction.", b: "It expects net debt of $13.5–14.5 billion at the end of the quarter, down from $22.3 billion at the end of June, partly from paying off $1 billion of hybrid bonds. It also flagged $3–4.5 billion of write-downs, mainly in gas and low-carbon businesses. Full results are on 30 October." }
      ]
    },
    {
      title: "Deals and catalysts worth researching",
      intro: "Deals with concrete numbers. None of these guarantees a profit: big news is often priced in within hours, and the payoff can take years.",
      items: [
        { t: "FRMI", h: "AMD agreed to back the lease on the first 222 MW phase of Fermi's Texas AI data-centre campus; Fermi rose about 14%.", b: "The lease, with a TensorWave subsidiary, is projected to bring in about $6.5 billion over 15 years. A separate framework covers expansion to 650 MW, none of it leased yet. Fermi still needs a binding financing package, so this is a step, not a done deal." },
        { t: "WOLF", h: "Wolfspeed has a conditional $1.5 billion, 30-year loan offer from the US Department of War.", b: "Announced on 7 October, it would fund silicon-carbide and gallium-nitride production in New York and North Carolina. Reports say it comes with warrants for 7.5% of the company and needs $750 million of new money from other sources first, so existing shareholders face dilution." },
        { t: "ASML", h: "ASML says supply will fall short of demand in both 2027 and 2028.", b: "That is a dated claim to test: watch whether TSMC (results Thursday) and other chipmakers raise their spending plans. ASML no longer publishes quarterly orders, so guidance and customer spending are the main signals." }
      ]
    }
  ],
  calendar: [
    { d: "Wed 14 Oct", e: "US CPI inflation (Sept), 1:30pm UK, forecast about 3.6% a year · Bank of America, Morgan Stanley, BlackRock results · China CPI" },
    { d: "Thu 15 Oct", e: "TSMC Q3 results · US PPI, retail sales and jobless claims · Charles Schwab, US Bancorp, PNC" },
    { d: "Fri 16 Oct", e: "Euro-area final inflation · US industrial production · Travelers, Truist, HDFC Bank" },
    { d: "Mon 19 Oct", e: "Quieter macro day; earnings season continues" },
    { d: "Tue 20 Oct", e: "Earnings season continues" },
    { d: "Later", e: "Fed decision 28 Oct · UK Budget 28 Oct · AMD and Booking results 3 Nov · US midterms 3 Nov · Bank of England 5 Nov" }
  ],
  bottomLine: "ASML has given the chip trade a bit of support after six days of selling, but today's US inflation figure matters more: with a December Fed rate rise almost fully priced in, a hot number could push yields and oil-sensitive worries back to the front.",
  sources: [
    ["AP via 10TV: How major US stock indexes fared Tuesday 10/13/2026", "https://www.10tv.com/article/syndication/associatedpress/how-major-us-stock-indexes-fared-tuesday-10132026/616-79e921f9-f51b-49be-8ffb-40f942bd73c3"],
    ["CNBC: Bank earnings live updates, 13 October 2026", "https://www.cnbc.com/2026/10/13/bank-earnings-live-updates.html"],
    ["24/7 Wall St.: Goldman rises, JPMorgan treads water, Wells Fargo declines 3%", "https://247wallst.com/investing/2026/10/13/goldman-sachs-rises-on-equities-led-earnings-beat-jpmorgan-chase-treads-water-wells-fargo-declines-3/"],
    ["Saxo: Morning Brew, 14 October 2026", "https://www.home.saxo/en-ch/content/articles/morning-brew/morning-brew-october-14-2026-14102026"],
    ["Fortune: Europe, US futures rise as ASML beats expectations", "https://fortune.com/2026/10/14/europe-us-futures-rise-semiconductor-supplier-asml-beats-expectations/"],
    ["ASML Q3 2026 results (SEC 6-K)", "https://www.sec.gov/Archives/edgar/data/0000937966/000162828026065813/pressreleasefinancialresul.htm"],
    ["Yahoo Finance: ASML raises sales forecast for a third time", "https://finance.yahoo.com/markets/stocks/articles/asml-raises-sales-forecast-third-061145434.html"],
    ["Motley Fool: Why Applied Materials sank today", "https://www.fool.com/investing/2026/10/13/why-applied-materials-sank-today/"],
    ["24/7 Wall St.: Chip equipment stocks slide; Applied Materials sinks 7%", "https://247wallst.com/investing/2026/10/13/semiconductor-equipment-stocks-slide-as-investors-take-profits-on-a-huge-year-applied-materials-sinks-7-lam-research-and-kla-drop-4/"],
    ["CNBC: Johnson & Johnson Q3 2026 earnings", "https://www.cnbc.com/2026/10/13/jnj-earnings-q3-2026.html"],
    ["24/7 Wall St.: J&J drops 5% as one-time charges overshadow raised outlook", "https://247wallst.com/investing/2026/10/13/johnson-johnson-drops-5-as-one-time-charges-overshadow-raised-full-year-outlook-eli-lilly-dips-pfizer-sits-out-the-selloff/"],
    ["BP: Third quarter 2026 trading statement", "https://www.bp.com/press-and-publications/press-releases/third-quarter-2026-trading-statement"],
    ["CNBC: Oil rises amid tensions between Saudis and Houthis", "https://www.cnbc.com/2026/10/14/oil-rises-amid-growing-tensions-between-saudis-and-iran-backed-houthis.html"],
    ["Kitco: Gold price today", "http://www.kitco.com/charts/gold"],
    ["FXStreet: BoE's Pill sceptical about pricing of four rate hikes", "https://www.fxstreet.com/news/boes-pill-says-a-bit-more-sceptical-about-market-pricing-of-four-rate-hikes-over-the-next-year-202610140617"],
    ["Motley Fool: Fermi surges 14% on AMD credit support", "https://www.fool.com/coverage/stock-market-today/2026/10/13/stock-market-today-oct-13-fermi-surges-14-on-amd-credit-support-for-project-matador/"],
    ["Stock Titan: Fermi signs AMD credit support agreement", "https://www.stocktitan.net/news/FRMI/fermi-signs-credit-support-agreement-with-amd-and-announces-9sis5mi3oexc.html"],
    ["Wolfspeed: Conditional $1.5 billion loan commitment", "https://www.wolfspeed.com/company/news-events/news/wolfspeed-announces-conditional-30-year-loan-commitment-from-us-department-of-war-to-advance-domestic-wide-bandgap-supply-chain/"],
    ["Proactive: Wolfspeed shares rise after conditional $1.5 billion loan", "https://www.proactiveinvestors.com/companies/news/1099834/wolfspeed-shares-rise-after-conditional-1-5-billion-government-loan-agreement-1099834.html"]
  ]
};
