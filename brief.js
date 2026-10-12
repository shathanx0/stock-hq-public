// Public morning brief: general market only. No portfolio, account or holdings content.
// Written alongside the private brief.js; build_public.py publishes it as brief.js on the public site and leak-checks it first.
window.HQ_BRIEF = {
  date: "2026-10-12",
  edition: "Monday 12 October 2026 · Morning edition",
  headline: "A calm start to a big week: oil eases on Trump's Russia 'energy ceasefire' claim, while inflation, bank results and TSMC wait",
  dek: "US futures are up about 0.1–0.2% and the FTSE 100 is up about 0.6% this morning, near 10,616, led by banks. Brent is slightly lower at about $104.5 after the US eased sanctions on Russian diesel and Trump claimed an energy ceasefire between Russia and Ukraine, though the Houthis struck Riyadh's airport twice over the weekend. Gold is down about 0.4% to around $4,176. Recruiter Hays fell about 11% on weak permanent hiring.",
  market: [
    { k: "S&P 500", v: "7,811.54", d: "+0.59% Fri · futures about +0.1–0.2% Mon morning" },
    { k: "Nasdaq", v: "27,366.17", d: "+0.64% Fri · Nasdaq-100 futures roughly flat to +0.3%" },
    { k: "FTSE 100", v: "~10,616", d: "about +0.6% Mon morning · banks lead · Fri close 10,552.05" },
    { k: "Gold", v: "~$4,176/oz", d: "about −0.4% Mon as oil eases" },
    { k: "Brent oil", v: "~$104.5", d: "about −0.3% Mon · WTI ~$91.6 · US 10-year 5.24%" }
  ],
  sections: [
    {
      title: "The big picture",
      paras: [
        "There's no fresh US session to report: Friday's rally (S&P 500 +0.59% to 7,811.54, Nasdaq +0.64%) ended a fourth winning week in a row. Over the weekend two things pulled oil in opposite directions. On Friday the US issued a temporary licence allowing Russian diesel to be sold, including into the US, until April 2027, and Russia said it would lift its diesel export ban; on Saturday Trump said Russia and Ukraine had agreed an 'energy ceasefire'. Zelenskiy said Ukraine would accept it but was waiting to hear when it starts, and the Kremlin hadn't confirmed it. Against that, Houthi strikes on Riyadh's main airport killed at least 12 people on Saturday and another hit on Sunday, and Trump suggested the US could join the fight. The net result this morning is Brent a touch lower, at about $104.5.",
        "Futures are slightly higher and London is up about 0.6%, led by HSBC and Standard Chartered. US bond markets are shut for Columbus Day, but stocks trade. The week's three tests: big US bank results from Tuesday (JPMorgan, Goldman, Citi), September US inflation on Wednesday (forecasts 3.6–3.7% a year, with core prices expected up about 0.2% on the month) and TSMC's results on Thursday. A hot core number could put a Fed rate rise on 28 October back on the table."
      ]
    },
    {
      title: "Stocks in the news",
      items: [
        { t: "HAS.L", h: "Hays fell about 11% after first-quarter fees dropped 3% and it saw no near-term recovery.", b: "Net fees fell 3% like-for-like, slightly better than the 4% analysts expected, but permanent hiring fees were down 7%, with Germany down 6% and the UK down 5%. The company has saved £10 million of its £50 million cost-cutting target so far. Recruiters are often an early read on the jobs market." },
        { t: "PNN.L", h: "Pennon (South West Water) fell about 10% after two brokers downgraded it.", b: "RBC cut it to sector perform on Friday with a 400p target (from 575p), citing a tougher outlook for returns over the current regulatory period, and Deutsche Bank also cut it to hold, with a 380p target (from 550p)." },
        { t: "JPM", h: "JPMorgan kicks off bank results on Tuesday, with earnings expected up about 16%.", b: "Analysts expect third-quarter earnings of about $5.90 a share on revenue near $51.3 billion, and options pricing implies a move of about 3.3% either way. Banks tend to set the tone for the earnings season." },
        { t: "TSM", h: "TSMC reports on Thursday, the week's big test of AI chip demand.", b: "It guided to $44.6–45.8 billion of revenue for the quarter with a 65–67% gross margin. Its outlook will be read across the whole chip sector." }
      ]
    },
    {
      title: "Deals and catalysts worth researching",
      intro: "Deals with concrete numbers. None of these guarantees a profit: big news is often priced in within hours, and the payoff can take years.",
      items: [
        { t: "RTX", h: "Raytheon: up to $6.3B multi-year Pentagon deal for SM-3 Block IB missile interceptors (8 Oct)", b: "The base contract is $4.4 billion over five years, with about $2 billion more in options. It adds to recent Raytheon deals worth $24.4 billion (SM-6) and $22.9 billion (Tomahawk), part of a push to rebuild missile stocks." },
        { t: "BA", h: "Boeing: up to $14.7B to boost production of Patriot PAC-3 interceptor seekers (5 Oct)", b: "It is an 'undefinitized' contract, meaning the final terms and price are still to be agreed, so the headline number is a ceiling rather than guaranteed revenue." },
        { t: "VTRS", h: "Viatris to buy Pacira BioSciences for $1.65B, $36.50 a share in cash (8 Oct)", b: "That's a 44.8% premium; Pacira jumped about 44% and Viatris slipped about 2%, the usual pattern where the buyer pays up. Pacira made about $746 million of revenue in the year to June. Closing is expected by the end of 2026." }
      ]
    }
  ],
  calendar: [
    { d: "Mon 12 Oct", e: "US Columbus Day: stocks open, bond market closed · Hays results" },
    { d: "Tue 13 Oct", e: "Q3 bank results: JPMorgan, Goldman Sachs, Citi · UK: BP trading update, Rio Tinto output, Whitbread, Bellway" },
    { d: "Wed 14 Oct", e: "US CPI inflation (Sept), 1:30pm UK, forecast 3.6–3.7% y/y · ASML results · Bank of America, Morgan Stanley" },
    { d: "Thu 15 Oct", e: "TSMC Q3 results, 7pm UK · US PPI and retail sales (Sept) · UK GDP (Aug), date per calendars" },
    { d: "Fri 16 Oct", e: "Man Group update · US industrial production (Sept)" },
    { d: "Later", e: "UK jobs data 20 Oct · Fed decision 28 Oct · UK Budget 28 Oct · US midterms 3 Nov · Bank of England 5 Nov" }
  ],
  bottomLine: "Today is quiet; Wednesday's US inflation figure is the one that matters. If core prices rise faster than the 0.2% expected, talk of a Fed rate rise on 28 October will return, and with the 10-year yield already at 5.24%, that would test a market sitting near its record.",
  sources: [
    ["Yahoo Finance: Stock market today, Monday 12 Oct", "https://finance.yahoo.com/markets/live/stock-market-today-monday-october-12-dow-sp-500-nasdaq-080321571.html"],
    ["Bloomberg: Oil rises on Mideast attacks, dollar edges higher (markets wrap, 11 Oct)", "https://www.bloomberg.com/news/articles/2026-10-11/oil-rises-on-mideast-attacks-dollar-edges-higher-markets-wrap"],
    ["AskTraders: Monday morning markets, finance stocks lift FTSE 100", "https://www.asktraders.com/analysis/monday-morning-markets-finance-stocks-lift-ftse-100-as-hays-pennon-and-aep-slump/"],
    ["Sunday Guardian: FTSE 100 extends gains to 10,615", "https://sundayguardianlive.com/business/uk-stock-market-today-october-12-why-is-the-uk-stock-market-up-today-ftse-100-extends-gains-to-10615-as-ftse-250-advances-amid-banking-rally-and-falling-oil-prices-check-top-gainers-losers-304028"],
    ["Trading Economics: Gold", "https://tradingeconomics.com/commodity/gold"],
    ["NBC News: Trump eases Russia sanctions, says Putin will release diesel (9 Oct)", "https://www.nbcnews.com/business/energy/trump-putin-diesel-prices-rcna602566"],
    ["Axios: Trump claims Russia and Ukraine agree to energy ceasefire (11 Oct)", "https://www.axios.com/2026/10/11/trump-russia-ukraine-energy-ceasefire-zelensky"],
    ["CBS News: Strike on Riyadh airport kills at least 12", "https://www.cbsnews.com/news/riyadh-saudi-airport-attack-deaths-injuries/"],
    ["NBC News: Trump says US could join fight against Houthis", "https://www.nbcnews.com/world/middle-east/saudi-airport-attack-trump-us-join-fight-houthis-rcna602744"],
    ["investingLive: MUFG sees US CPI at 3.6%; core must surprise to revive an October hike", "https://investinglive.com/news/mufg-us-cpi-seen-at-3-6-core-must-surprise-to-revive-an-october-fed-hike"],
    ["Admiral Markets: US CPI September 2026 preview", "https://admiralmarkets.com/analytics/traders-blog/us-cpi-preview-september-2026-forecasts-and-the-core-cpi-outlook"],
    ["CMC Markets: The week ahead (JPMorgan, CPI, TSMC guidance)", "https://www.cmcmarkets.com/en-ie/news-and-analysis/the-week-ahead-us-cpi-eurozone-cpi-jpmorgan-earnings"],
    ["TSMC investor relations: quarterly results", "https://investor.tsmc.com/quarterly-results"],
    ["Hargreaves Lansdown: Next week on the stock market, 12 Oct", "https://www.hl.co.uk/shares/share-research/next-week-on-the-stock-market-12-10-2026"],
    ["Investing.com: Hays shares sink over 11%", "https://uk.investing.com/news/stock-market-news/hays-quarterly-fees-fall-3-as-permanent-recruitment-remains-weak-4904598"],
    ["Proactive Investors: Hays shares fall despite first-quarter beat", "https://www.proactiveinvestors.com/companies/news/1099949/hays-shares-fall-nearly-10-despite-panmure-backing-after-first-quarter-beat-1099949.html"],
    ["Breaking Defense: Raytheon up to $6.3B SM-3 IB contract", "https://breakingdefense.com/2026/10/pentagon-raytheon-ink-up-to-6-3-billion-multi-year-contract-for-sm-3-ib-missiles/"],
    ["Breaking Defense: Boeing nabs potential $14.7B PAC-3 seeker contract", "https://breakingdefense.com/2026/10/boeing-nabs-potential-14-7-billion-pac-3-seeker-contract/"],
    ["Pharmaphorum: Viatris builds in pain relief with $1.65bn Pacira purchase", "https://pharmaphorum.com/news/viatris-builds-pain-relief-165bn-pacira-purchase"],
    ["KSL/AP: Viatris to buy Pacira for $1.65 billion", "https://www.ksl.com/article/51633920/viatris-to-buy-pain-therapy-maker-pacira-biosciences-for-165-billion"]
  ]
};
