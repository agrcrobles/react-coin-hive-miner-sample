# react-coin-hive-miner-sample

![buildstate](https://travis-ci.org/agrcrobles/react-coin-hive-miner-sample.svg?branch=master)

Mine cryptocurrency while your users are idle

## Why Monero?

Monero is different. To mine Monero, you have to calculate hashes with an algorithm called Cryptonight. This algorithm is very compute heavy and – while overall pretty slow – was designed to run well on consumer CPUs.
There are solutions to run the Cryptonight algorithm on a GPU instead, but the benefit is about 2x, not 10000x like for other algorithms used by Bitcoin or Ethereum. This makes Cryptonight a nice target for JavaScript and the Browser.

## Dependencies

* [react](https://reactjs.org/) for building user interface
* [react-native-web](https://github.com/necolas/react-native-web) to handle native like components in the web
* [react-coin-hive](https://github.com/cazala/react-coin-hive) to mine XMR

## Disclaimer

It is your responsibility to inform your visitors if you are running this code and allow them to opt out! Cryptocurrency mining may be considered malware if done without user consent.

## License

MIT
