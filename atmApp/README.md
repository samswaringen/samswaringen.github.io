# React ATM App

A simple ATM app to show state is managed and that it runs as a single page application 

## How to Run

Demo at url: https://samswaringen.github.io/atmApp/index.html
or
fork repo and run on local server

## Features

* State of the account balance and account history is managed and saved to pin entered
  * Pin codes are saved as properties of state objects accountBalance and accountHistory 
  * Account History is saved as an array under the correct pin property so ending the session and reopening with same pin loads correct account information acting like a bank.
* Created single page application and uses React to mount/unmount components on demand 

## Future Updates

* When I learn database functionality with Mongo I'd like to tie account history and balance to stored values
* introduce some form of verification of pins IE debit card is physical so make a digital debit card
* change some styling to match overall theme (imput fields, account history)

## Credits

* MIT/xPro boot camp
* stackoverflow.com and the contributors there. They are all awesome.
* w3schools.com great reference tool
