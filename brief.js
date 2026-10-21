// Public morning brief: general market only. No portfolio, account or holdings content.
// Written alongside the private brief.js; build_public.py publishes it as brief.js on the public site and leak-checks it first.
window.HQ_BRIEF = {
  date: "2026-10-21",
  edition: "Wednesday 21 October 2026 · Morning edition",
  headline: "UK inflation jumped to 3.5%, making a Bank of England rate rise in November look close to certain, while SpaceX's first profit as a public company lifted it after hours",
  dek: "On Tuesday the Dow rose 1% and small caps 1.7% while the Nasdaq went nowhere, as investors moved out of big tech and into health care and property. Netflix fell about 6% after hours on a weak outlook. This morning UK inflation came in above forecast, driven by petrol prices.",
  market: [
    { k: "S&P 500", v: "7,712.57", d: "Tue close +0.28% · equal-weight +1.15%" },
    { k: "Nasdaq", v: "26,424.82", d: "Tue close −0.02% · chip index −0.29%" },
    { k: "FTSE 100", v: "~10,733", d: "Tue close −0.3% · opened lower after UK CPI" },
    { k: "Gold", v: "~$4,143/oz", d: "Dec futures −0.4% Tue · about $4,138 Wed" },
    { k: "UK inflation", v: "3.5%", d: "Sept CPI, up from 3.1% · forecast 3.4%" }
  ],
  sections: [
    {
      title: "The big picture",
      paras: [
        "Tuesday was a rotation day on Wall Street. The Dow gained 1.0% to 52,496, led by 3M, and the Russell 2000 of smaller companies rose 1.7%, but the Nasdaq slipped 0.02% as big tech lagged and the chip index fell 0.3%. The average stock did better than the giants: the equal-weighted S&P 500 rose 1.15%. Health care (+2.4%) and real estate (+1.7%) led, and technology was the only sector down. The 10-year Treasury yield eased 3 basis points to 5.12% after weak housing data.",
        "This morning's UK numbers were hotter than expected. Consumer prices rose 3.5% in the year to September, up from 3.1% and above the 3.4% forecast, mostly because motor fuel cost nearly 30% more than a year ago. Markets had already priced a Bank of England rate rise on 5 November as very likely, and the data reinforces that. Government borrowing of £24.5 billion also beat forecasts a week before the Budget. In the US, futures show about an 85% chance the Fed holds rates at 3.75–4.00% on 28 October. Brent crude is back around $110, and gold is steady near $4,140."
      ]
    },
    {
      title: "Stocks in the news",
      items: [
        { t: "SPCX", imp: true, h: "SpaceX made its first operating profit as a public company, and the shares rose about 5% after hours.", b: "Third-quarter revenue rose 161% to $14.6 billion, well above the roughly $12.9 billion expected, and net income was $4.4 billion. The AI computing business, which leases capacity to other AI companies, brought in $7.56 billion, more than Starlink's $5.25 billion. The catch is spending: $19.6 billion of capital spending in the quarter and $35–40 billion planned for the fourth, with no full-year forecast. Starlink added 1.6 million subscribers, short of the 2.3 million expected." },
        { t: "NFLX", imp: true, h: "Netflix beat on profit but fell about 6% after hours on a weaker outlook and a cut to its ad forecast.", b: "Earnings were $0.87 a share against $0.82 expected, on revenue of $12.87 billion, up 12%. It guided to about $13.44 billion of fourth-quarter revenue, a little under the $13.51 billion consensus, and cut its 2026 advertising revenue forecast to about $2.7 billion from $3 billion. The shares were already down about 25% this year." },
        { t: "MMM", h: "3M rose 5.8%, leading the Dow, after expanding its data-centre deal with Amazon.", b: "Amazon received warrants for about 3.16 million 3M shares at $164.89, most of which vest only as Amazon buys up to $6 billion of 3M's optical connectivity and other data-centre products. It's a sign that old-economy industrial firms are finding a way into AI spending." },
        { t: "GM", h: "General Motors fell 6.8% despite beating forecasts and announcing a new $20 billion buyback.", b: "Investors focused on rising commodity costs instead. Northrop Grumman (+4.6%) beat on earnings, while GE Aerospace fell 3.7% as free cash flow dropped 14%, even though orders rose 49%." }
      ]
    },
    {
      title: "Deals and catalysts worth researching",
      intro: "Deals with concrete numbers. Big news is often priced in within hours, and the payoff from any deal can take years, so none of this guarantees a profit.",
      items: [
        { t: "BRZE", h: "Salesforce agreed to buy Braze for $47.50 a share in cash, about $5.7 billion including debt and cash.", b: "Braze makes customer-messaging software that Salesforce plans to plug into its AI agents. Braze jumped 52% on Tuesday, so nearly all the premium was priced in on day one, and rival Klaviyo rose 12% on hopes of more deals in marketing software." },
        { t: "MMM", h: "3M's Amazon warrant fully vests at $6 billion of cumulative Amazon purchases.", b: "About 85% of the warrant vests as Amazon buys data-centre products, with the rest tied to milestones. 3M is also buying about 4.7% of Taiwan's Genius Electronic Optical to develop optical parts. The deal gives a concrete number to track in future 3M results." },
        { t: "SPCX", h: "SpaceX's backlog is $63 billion, but it plans $35–40 billion of capital spending next quarter.", b: "The quarter showed how fast AI computing revenue is growing, from $2.56 billion in the second quarter to $7.56 billion. Whether that spending earns its return is the question for the whole space and AI-infrastructure trade." }
      ]
    },
    {
      title: "Worth reading",
      items: [
        { t: "SPCX", h: "SpaceX posts first operating profit as public company as AI revenue nearly triples to $7.6 billion", u: "https://fortune.com/2026/10/20/spacex-q3-profit-ai-si-elon-musk/", b: "The clearest breakdown of SpaceX's three businesses and the spending and debt that come with them. Fortune, 20 Oct." },
        { t: "NFLX", h: "Netflix stock sinks after announcing Q3 earnings, Q4 revenue forecast falls short of estimates", u: "https://finance.yahoo.com/markets/stocks/article/netflix-stock-sinks-after-announcing-q3-earnings-q4-revenue-forecast-falls-short-of-estimates-204545261.html", b: "A short read on why a profit beat still sent the shares lower: guidance and advertising. Yahoo Finance, 20 Oct." },
        { h: "UK inflation picks up more than expected to 3.5% in September", u: "https://www.investing.com/news/economy-news/uk-inflation-picks-up-more-than-expected-to-35-in-september-4961639", b: "The Reuters report on this morning's figures and what they mean for a November rate rise. Reuters via Investing.com, 21 Oct." }
      ]
    }
  ],
  calendar: [
    { d: "Wed 21 Oct", e: "UK inflation 3.5% (out) · US crude stocks · Abbott, NextEra, AT&T (before US open) · Tesla, Meta, IBM, Lam Research, Texas Instruments, SAP (after US close)" },
    { d: "Thu 22 Oct", e: "US jobless claims · Newmont, Western Digital, Lockheed Martin results · Rentokil trading update" },
    { d: "Fri 23 Oct", e: "US flash PMIs · University of Michigan sentiment (final) · American Express, SLB results" },
    { d: "Mon 26 Oct", e: "Quiet start to a heavy week" },
    { d: "Tue 27 Oct", e: "Fed's two-day meeting begins" },
    { d: "Later", e: "Fed decision and UK Budget 28 Oct · Intel 29 Oct · US midterms 3 Nov · Bank of England 5 Nov" }
  ],
  bottomLine: "UK inflation at 3.5% all but locks in a Bank of England rate rise on 5 November, and with US yields above 5% and oil near $110, rates rather than earnings are still setting the mood. Tonight's Tesla, Meta and Lam Research results are the next test for big tech.",
  sources: [
    ["CappNotes: Closing Look, Tuesday 20 October 2026", "https://cappnotes.substack.com/p/closing-look-tuesday-october-20-2026"],
    ["CNBC: Stock market news for 20 October 2026", "https://www.cnbc.com/2026/10/19/stock-market-today-live-updates.html"],
    ["Proactive Investors: FTSE 100 set to edge higher before UK inflation test (21 Oct)", "https://www.proactiveinvestors.com/companies/news/1100440/markets-live-ftse-100-set-to-edge-higher-before-uk-inflation-test-1100440.html"],
    ["Reuters via Investing.com: UK inflation picks up more than expected to 3.5% in September", "https://www.investing.com/news/economy-news/uk-inflation-picks-up-more-than-expected-to-35-in-september-4961639"],
    ["FXStreet: UK CPI climbs to 3.5% vs 3.4% expected", "https://www.fxstreet.com/news/uk-cpi-set-to-accelerate-paving-the-way-for-a-boe-interest-rate-hike-in-november-202610210200"],
    ["investingLive: BoE November rate hike almost fully priced in", "https://investinglive.com/news/heads-up-uk-september-cpi-inflation-report-due-today-boe-rate-hike-for-november-almost-fully-priced-in/"],
    ["Investing.com: Fed rate monitor tool", "https://www.investing.com/central-banks/fed-rate-monitor"],
    ["Fortune: SpaceX posts first operating profit as a public company", "https://fortune.com/2026/10/20/spacex-q3-profit-ai-si-elon-musk/"],
    ["Tesla North: SpaceX Q3 2026 results", "https://teslanorth.com/2026/10/20/spacex-q3-2026-results/"],
    ["Yahoo Finance: Netflix stock sinks after Q3 earnings", "https://finance.yahoo.com/markets/stocks/article/netflix-stock-sinks-after-announcing-q3-earnings-q4-revenue-forecast-falls-short-of-estimates-204545261.html"],
    ["SEC: Braze 8-K (Salesforce merger)", "https://www.sec.gov/Archives/edgar/data/0001676238/000095010326015850/dp254600_ex9902.htm"],
    ["WHTC/Reuters: 3M expands Amazon data-centre partnership", "https://whtc.com/2026/10/19/3m-expands-amazon-data-center-partnership-shares-gain/"]
  ]
};
