// Public morning brief: general market only. No portfolio, account or holdings content.
// Written alongside the private brief.js; build_public.py publishes it as brief.js on the public site and leak-checks it first.
window.HQ_BRIEF = {
  date: "2026-10-16",
  edition: "Friday 16 October 2026 · Morning edition",
  headline: "Money rotates out of AI and into the rest of the market: the Dow jumps 1.1% while the Nasdaq barely moves, despite the biggest US producer-price jump in four and a half years",
  dek: "US producer prices rose 1.3% in September against a 0.5% forecast, a day after a hot consumer-price figure, yet stocks held up: the Dow rose 1.08%, small caps 1.4% and the S&P 500 0.33%, while the Nasdaq finished flat after recovering from early losses. Fed Chair Kevin Warsh gave no guidance on rates overnight, and Asian chip stocks bounced. The FTSE 100 is flat this morning after closing at a five-week high, and gold has recovered to around $4,170.",
  market: [
    { k: "S&P 500", v: "7,744.06", d: "+0.33% Thu · Dow +1.08% to 52,177.69" },
    { k: "Nasdaq", v: "26,713.02", d: "+0.08% Thu · down about 3% this week" },
    { k: "FTSE 100", v: "~10,830", d: "about −0.1% Fri morning · Thu close 10,840.35 (+1.08%)" },
    { k: "Gold", v: "~$4,170/oz", d: "+1.3% Thu as the dollar slipped · higher again Fri" },
    { k: "US producer prices", v: "6.3%", d: "Sept PPI y/y, forecast 5.3% · Oct Fed hike odds ~27–34%" }
  ],
  sections: [
    {
      title: "The big picture",
      paras: [
        "Thursday brought a second hot inflation figure: producer prices, what businesses charge each other, rose 1.3% in September and 6.3% over the year, against forecasts of 0.5% and 5.3%. Core producer prices rose 5%, the biggest gain in about four years, and retail sales rose 0.8%, well above the 0.3% forecast. Yet the market didn't repeat Wednesday's sell-off. Treasury yields fell to a three-week low and the dollar slipped about 0.5%, and investors moved money out of AI and chip stocks into consumer, defensive and smaller companies. The Dow rose 1.08% to 52,177.69, the Russell 2000 of small caps 1.38%, and the S&P 500 0.33% to 7,744.06. The Nasdaq ended up 0.08% at 26,713.02 after being down about 1.5% at its low.",
        "Futures put roughly a 27–34% chance on a Fed rate rise on 28 October and more than 90% on one by December. Speaking in Bangkok overnight, Fed Chair Kevin Warsh described AI as a boost to productivity and gave no guidance on rates, which markets took as a relief: Japan's Nikkei rose 1.4% and Korea's Kospi 2.1% as Asian tech stocks recovered some of the week's losses. In London the FTSE 100 closed at a five-week high of 10,840.35 on Thursday and is broadly flat this morning, with banks lower on talk of higher bank taxes in the 28 October Budget. Gold rose 1.3% on Thursday to about $4,157 as yields and the dollar eased, and edged higher again overnight; oil is still around $105 a barrel on Middle East tensions."
      ]
    },
    {
      title: "Stocks in the news",
      items: [
        { t: "INTU", h: "Intuit rose 6.4% to $330.17 after agreeing to buy Sequence, an AI revenue-automation start-up.", b: "The deal adds automated billing and revenue tools to Intuit's small-business software; terms weren't disclosed in the coverage, and analysts said the payoff depends on integration and customer take-up. The shares are still down about half this year as investors worry AI will erode software pricing, which is why a bounce like this can be sharp." },
        { t: "NKE", h: "Nike rose about 5% and Lululemon about 4% as investors rotated into beaten-down consumer names.", b: "There was no new company news: the move came from money leaving AI and tech. Consumer staples were the best sector of the week, up about 3.7%, with Coca-Cola and Kimberly-Clark also strong. Nike had fallen more than 10% after missing revenue forecasts earlier this month." },
        { t: "RKLB", h: "Rocket Lab fell another 6.6% to $55.25 as analysts cut targets after its Neutron rocket slipped to 2027.", b: "It had been down as much as 16% during the day. KeyBanc cut its target to $100 from $135 and Goldman to $67 from $75; Cantor kept $122. The company blamed a defect in how a propellant tank dome was made and says it has been fixed. The stock is about 65% below its May high." },
        { t: "ASML", h: "ASML says chipmakers are already booking machines for 2029 and 2030, and that 2027–28 capacity won't fully meet demand.", b: "It expects 2026 sales of €44–45 billion at about a 56% gross margin. The supply warning weighed on chip designers such as Broadcom on Thursday, since it hints at tight factory capacity for years." }
      ]
    },
    {
      title: "Deals and catalysts worth researching",
      intro: "Deals and dated events with concrete numbers. None of these guarantees a profit: big news is often priced in within hours, and the payoff can take years.",
      items: [
        { t: "GFS", h: "GlobalFoundries will run two new New York chip plants funded by Japan with up to $21 billion, and the US will take a 4% stake.", b: "Japan provides the money under its $550 billion US investment pledge; GlobalFoundries earns fees for building, running and licensing technology to the plants. The first, about $10 billion, is due online in 2029. US government ownership rises to about 7%. The shares rose about 5% on the news on Wednesday." },
        { t: "RTX", h: "Raytheon won a sole-source US Air Force contract worth up to $8 billion to modernise nuclear command communications, running to about 2036.", b: "The figure is a ceiling, not committed money: only $800,000 has been obligated so far. It follows a $24.4 billion multi-year SM-6 interceptor contract on 1 October and $729 million of counter-drone awards on 13 October." },
        { t: "NVDA", h: "Nvidia's Jensen Huang announced plans to invest another $2 billion in European AI deals, including four French start-ups.", b: "The named companies are Doctolib, Genesis AI, Pigment and Entalpic. Investments like this tend to deepen demand for Nvidia's own chips. Deal sizes for each start-up weren't given in the coverage." }
      ]
    }
  ],
  calendar: [
    { d: "Fri 16 Oct", e: "US industrial production · Travelers, Truist, Regions, M&T, Citizens results · Apple foldable pre-orders open" },
    { d: "Mon 19 Oct", e: "China Q3 GDP · Texas Instruments results (expected, after US close)" },
    { d: "Tue 20 Oct", e: "US housing starts · Netflix and United Airlines results (after US close) · GE Aerospace this week" },
    { d: "Wed 21 Oct", e: "UK September inflation (7am; August was 3.1%) · Tesla results expected (date not confirmed) · IBM, Lam Research" },
    { d: "Thu 22 Oct", e: "US jobless claims · Intuitive Surgical, Abbott this week" },
    { d: "Later", e: "US flash PMIs 23 Oct · Fed decision 28 Oct · UK Budget 28 Oct · AMD results 3 Nov · US midterms 3 Nov · Bank of England 5 Nov" }
  ],
  bottomLine: "Two hot inflation figures in two days didn't sink the market; they moved it. Money is leaving the most expensive AI names for consumer, defensive and smaller companies, and with a Fed rise now a live possibility for 28 October, next week's UK inflation figure and the first big tech results (Netflix, Tesla) will show whether that rotation continues.",
  sources: [
    ["TheStreet: Stock market today, Oct. 15, 2026", "https://www.thestreet.com/stock-market-today/stock-market-today-dow-jones-sp-500-nasdaq-updates-oct-15-2026"],
    ["TS2: Dow jumps 1.1%, Russell 2000 rises 1.4% as broad rotation beats tech", "https://ts2.tech/en/dow-jumps-1-1-russell-2000-rises-1-4-as-broad-rotation-beats-tech/"],
    ["Pomegra: Dow gains 1% as money leaves AI trade", "https://pomegra.io/news/stock-market-today-dow-gains-1-as-money-leaves-ai-trade"],
    ["Schwab: Stocks slip early after wholesale inflation surges", "https://www.schwab.com/learn/story/stock-market-update-open"],
    ["CNBC: Gold rebounds on weaker dollar, yields; October Fed hike bets subdued", "https://www.cnbc.com/2026/10/15/gold-rebounds-from-one-week-low-as-dollar-slips.html"],
    ["Forbes: Gold rebounds as Treasury yields and dollar fall", "https://www.forbes.com/sites/conormurray/2026/10/15/gold-rebounds-from-steep-losses-as-treasury-yields-and-us-dollar-fall/"],
    ["Swissinfo/Bloomberg: Asian stocks rise, US futures gain after Warsh", "https://www.swissinfo.ch/eng/asian-stocks-rise,-us-futures-gain-after-warsh:-markets-wrap/92225060"],
    ["FXStreet: Warsh gives little away despite hotter inflation prints", "https://www.fxstreet.com/analysis/warsh-gives-little-away-despite-hotter-inflation-prints-202610160600"],
    ["Asia Business Daily: Warsh remarks lift Nasdaq futures; Asian stocks rally", "https://www.asiae.co.kr/en/article/world-stockmarket/2026101614305673083"],
    ["Trading Economics: UK stock market", "https://tradingeconomics.com/united-kingdom/stock-market"],
    ["Yahoo Finance UK: Markets live, FTSE 100", "https://uk.finance.yahoo.com/news/markets-live-ftse-100-set-060300466.html"],
    ["CNBC: Friday's big stock stories", "https://www.cnbc.com/2026/10/15/fridays-big-stock-stories-whats-likely-to-move-the-market.html"],
    ["Benzinga: Intuit bets on AI revenue automation with Sequence acquisition", "https://www.benzinga.com/m-a/26/10/62391226/intuit-bets-on-ai-powered-revenue-automation-with-sequence-acquisition"],
    ["GuruFocus: Intuit after 6.4% gain", "https://www.gurufocus.com/news/9126573/a-look-at-intuit-inc-intu-after-64-gain-gf-value-83199-vs-price-33017"],
    ["24/7 Wall St.: Nike climbs 5% as beaten-down consumer names catch a bid", "https://247wallst.com/investing/2026/10/15/nike-climbs-5-as-beaten-down-consumer-names-catch-a-bid-lululemon-rises-4-on-holding-dips/"],
    ["Motley Fool: Why Rocket Lab stock plummeted as much as 16% today", "https://www.fool.com/investing/2026/10/15/why-rocket-lab-stock-plummeted-as-much-as-16-today/"],
    ["Yahoo Finance: Rocket Lab stock tumbles as Neutron slips to 2027", "https://finance.yahoo.com/markets/stocks/article/rocket-lab-stock-tumbles-as-effort-to-take-market-share-from-spacex-slips-to-2027-163503484.html"],
    ["Startup Fortune: ASML says chipmakers are already booking tools for 2029 and 2030", "https://startupfortune.com/asml-says-chipmakers-are-already-booking-tools-for-2029-and-2030/"],
    ["ASML Q3 2026 results (SEC 6-K)", "https://www.sec.gov/Archives/edgar/data/0000937966/000162828026065813/pressreleasefinancialresul.htm"],
    ["GlobalFoundries press release (SEC 6-K)", "https://www.sec.gov/Archives/edgar/data/0001709048/000170904826000252/gfpressreleasefinal.htm"],
    ["Korea Times: Japan to invest up to $21 billion in two US chip factories run by GlobalFoundries", "https://www.koreatimes.co.kr/world/20261014/japan-to-invest-up-to-21-billion-in-two-us-chip-factories-to-be-run-by-globalfoundries"],
    ["The National: GlobalFoundries, Japan and US chips", "https://www.thenationalnews.com/future/technology/2026/10/14/globlafoundries-japan-us-chips/"],
    ["Hoodline: Raytheon's $8B nuclear terminal contract explained", "https://hoodline.com/2026/10/raytheon-wins-8-billion-nuclear-comms-deal-plus-15-million-navy-radar-order"],
    ["RTX: $24.4 billion SM-6 contract", "https://www.rtx.com/news/news-center/2026/10/01/rtxs-raytheon-awarded-24-4-billion-multi-year-contract-for-sm-6-interceptors"],
    ["RTX: $729 million in counter-drone contracts", "https://rtx.com/news/news-center/2026/10/13/rtxs-raytheon-awarded-729-million-in-counter-drone-contracts-for-u-s-qatar-a"],
    ["Bloomberg Tech, 14 Oct: Nvidia bets on Europe", "https://www.bloomberg.com/news/videos/2026-10-14/bloomberg-tech-10-14-2026-video"],
    ["ii: US earnings season Q3 2026", "https://www.ii.co.uk/investing-with-ii/international-investing/us-earnings-season"],
    ["ONS: Consumer price inflation, UK, September 2026 (release page)", "https://www.ons.gov.uk/releases/consumerpriceinflationukseptember2026"],
    ["MarketChameleon: Economic calendar", "https://marketchameleon.com/Economic-Calendar"]
  ]
};
