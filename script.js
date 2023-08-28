// API used: https://www.cryptocompare.com/api
// Icon Source: https://github.com/cjdowner/cryptocurrency-icons
// Inspiration: https://codepen.io/kathykato/pen/PEjNGQ?editors=0010 by Katherine Kato

class Card extends React.Component {
  constructor() {
    super();
    this.state = {
      coin: [{}, {}, {}, {}, {}, {}, {}, {}],
      loaded: false };

  }

  componentDidMount() {
    fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,LTC,XRP,DASH,XMR,XEM,BCH&tsyms=USD').
    then(results => {
      return results.json();
    }).then(data => {
      let exchange = [];
      const coinType = ['BTC', 'ETH', 'LTC', 'XRP', 'DASH', 'XMR', 'XEM', 'BCH'];

      coinType.forEach(type => {
        exchange.push({
          'coin': data['DISPLAY'][`${type}`]['USD']['FROMSYMBOL'],
          'price': data['DISPLAY'][`${type}`]['USD']['PRICE'],
          'percent': data['DISPLAY'][`${type}`]['USD']['CHANGEPCT24HOUR'] });

      });

      // console.log(exchange);

      this.setState({
        loaded: true,
        coin: exchange });

    }).
    catch(error => console.log('Error: ', error));
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "card-container" }, /*#__PURE__*/
      React.createElement("div", { className: "card" }, /*#__PURE__*/
      React.createElement("img", { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1040483/btc.png" }), /*#__PURE__*/
      React.createElement("div", { className: "coin-data" }, /*#__PURE__*/
      React.createElement("p", null, "Bitcoin (BTC)"), /*#__PURE__*/
      React.createElement("p", null, this.state.coin[0]['price']), /*#__PURE__*/
      React.createElement("p", { className: "" + (Number(this.state.coin[0]['percent']) >= 0 ? "pos" : "neg") }, this.state.coin[0]['percent'], "%"))), /*#__PURE__*/


      React.createElement("div", { className: "card" }, /*#__PURE__*/
      React.createElement("img", { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1040483/eth.png" }), /*#__PURE__*/
      React.createElement("div", { className: "coin-data" }, /*#__PURE__*/
      React.createElement("p", null, "Ethereum (ETH)"), /*#__PURE__*/
      React.createElement("p", null, this.state.coin[1]['price']), /*#__PURE__*/
      React.createElement("p", { className: "" + (Number(this.state.coin[1]['percent']) >= 0 ? "pos" : "neg") }, this.state.coin[1]['percent'], "%"))), /*#__PURE__*/


      React.createElement("div", { className: "card" }, /*#__PURE__*/
      React.createElement("img", { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1040483/ltc.png" }), /*#__PURE__*/
      React.createElement("div", { className: "coin-data" }, /*#__PURE__*/
      React.createElement("p", null, "Litecoin (LTC)"), /*#__PURE__*/
      React.createElement("p", null, this.state.coin[2]['price']), /*#__PURE__*/
      React.createElement("p", { className: "" + (Number(this.state.coin[2]['percent']) >= 0 ? "pos" : "neg") }, this.state.coin[2]['percent'], "%"))), /*#__PURE__*/


      React.createElement("div", { className: "card" }, /*#__PURE__*/
      React.createElement("img", { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1040483/xrp.png" }), /*#__PURE__*/
      React.createElement("div", { className: "coin-data" }, /*#__PURE__*/
      React.createElement("p", null, "Ripple (XRP)"), /*#__PURE__*/
      React.createElement("p", null, this.state.coin[3]['price']), /*#__PURE__*/
      React.createElement("p", { className: "" + (Number(this.state.coin[3]['percent']) >= 0 ? "pos" : "neg") }, this.state.coin[3]['percent'], "%"))), /*#__PURE__*/


      React.createElement("div", { className: "card" }, /*#__PURE__*/
      React.createElement("img", { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1040483/dash.png" }), /*#__PURE__*/
      React.createElement("div", { className: "coin-data" }, /*#__PURE__*/
      React.createElement("p", null, "DigitalCash (DASH)"), /*#__PURE__*/
      React.createElement("p", null, this.state.coin[4]['price']), /*#__PURE__*/
      React.createElement("p", { className: "" + (Number(this.state.coin[4]['percent']) >= 0 ? "pos" : "neg") }, this.state.coin[4]['percent'], "%"))), /*#__PURE__*/


      React.createElement("div", { className: "card" }, /*#__PURE__*/
      React.createElement("img", { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1040483/xmr.png" }), /*#__PURE__*/
      React.createElement("div", { className: "coin-data" }, /*#__PURE__*/
      React.createElement("p", null, "EUROCOIN (EURC)"), /*#__PURE__*/
      React.createElement("p", null, this.state.coin[5]['price']), /*#__PURE__*/
      React.createElement("p", { className: "" + (Number(this.state.coin[5]['percent']) >= 0 ? "pos" : "neg") }, this.state.coin[5]['percent'], "%"))), /*#__PURE__*/


      React.createElement("div", { className: "card" }, /*#__PURE__*/
      React.createElement("img", { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1040483/xem.png" }), /*#__PURE__*/
      React.createElement("div", { className: "coin-data" }, /*#__PURE__*/
      React.createElement("p", null, "NEM (XEM)"), /*#__PURE__*/
      React.createElement("p", null, this.state.coin[6]['price']), /*#__PURE__*/
      React.createElement("p", { className: "" + (Number(this.state.coin[6]['percent']) >= 0 ? "pos" : "neg") }, this.state.coin[6]['percent'], "%"))), /*#__PURE__*/


      React.createElement("div", { className: "card" }, /*#__PURE__*/
      React.createElement("img", { src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/1040483/bch.png" }), /*#__PURE__*/
      React.createElement("div", { className: "coin-data" }, /*#__PURE__*/
      React.createElement("p", null, "Bitcoin Cash (BCH)"), /*#__PURE__*/
      React.createElement("p", null, this.state.coin[7]['price']), /*#__PURE__*/
      React.createElement("p", { className: "" + (Number(this.state.coin[7]['percent']) >= 0 ? "pos" : "neg") }, this.state.coin[7]['percent'], "%")))));




  }}


class Footer extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("footer", null, /*#__PURE__*/
      React.createElement("ul", { className: "footer-links" }, /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "", target: "_blank" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-linkedin-square" }))), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "https://github.com/", target: "_blank" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-github" }))), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "https://codepen.io/", target: "_blank" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-codepen" }))), /*#__PURE__*/
      React.createElement("li", null, /*#__PURE__*/React.createElement("a", { href: "https://medium.com/", target: "_blank" }, /*#__PURE__*/React.createElement("i", { className: "fa fa-medium" })))), /*#__PURE__*/

      React.createElement("p", null, "Created by ", /*#__PURE__*/React.createElement("span", null, "EUROCOIN LLC"))));


  }}


class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "app-container" }, /*#__PURE__*/
      React.createElement("h1", null, "Cryptocurrency Exchange"), /*#__PURE__*/
      React.createElement("h4", null, "Cryptocurrency exchange rates (USD). Percentage change over last 24 hours."), /*#__PURE__*/
      React.createElement(Card, null), /*#__PURE__*/
      React.createElement("p", null, "Data provided by ", /*#__PURE__*/React.createElement("a", { href: "https://www.cryptocompare.com/api", target: "_blank" }, "CryptoCompare")), /*#__PURE__*/
      React.createElement(Footer, null)));


  }}


ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));