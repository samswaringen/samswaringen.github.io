# React Crypto Tracker
Gives data for top 100 cryptocurrencies, updates regularly, plots data on graph

## How to Run
demo at url: https://samswaringen.github.io/reactApp/index.html
or fork repo and run on local server

## Features
* Fetches data from multiple APIs. Gets live coin data, coin information, and updates news from multiple news APIs.(news has been disabled because I need to purchase more premium access to API)
* Pricing/supply/valuation data pulled from coincap and more precise coin info pulled form coingecko
* Plots data onto a chart where each coin is a collapsable hiding more info and the graph inside. Fetch more coin info happens on click of collapsable to improve performance and not upset the server gods
  * this allows for a better single page application experience
* Compare new data on fetch to previous data and apply styling to reflect change( green is positie change, red is negative)

## Future Updates
* Fix news api situation
* thinking about expanding wesite to incorporate more social aspects which include:
  * ability to create account that will track favorite coins
  * allow for account customization such as profile, info, pictures, portfolio info
  * create comment section for coins for discussion between users
  * create messaging inside app for direct messaging
* simulate purchase and sale of coins using a virtual money maker
* change some styling to make website more visible and data more readable
* when I find a good data history api will change left graph to be historical graph and right graph will remain current data since visiting site

## Credits
* MIT/xPro boot camp
* Coincap for api
* Coingecko for api
* stackoverflow.com and the contributors. They are all awesome
* w3schools.com for constant reference
