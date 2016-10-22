import React from 'react';
import {Link} from 'react-router';
import ChartistGraph from 'react-chartist';

class Customize extends React.Component {

  constructor() {
    super();
    this.state = {
      inv: 663,
      trans: 505,
      asig: 870,
      serv: 795,
      dezv: 433,
      cult: 762,
      eco: 926,
      sana: 498,
      energ: 798,
      apar: 560,
      alt: 630
    }
  }

  render() {
    var data = {
      series: [
        [this.state.inv, this.state.trans, this.state.asig, this.state.serv, this.state.dezv, this.state.cult, this.state.eco, this.state.sana, this.state.energ, this.state.apar, this.state.alt]
      ],
      labels: [
      'Invatamant' + '<br />' + `${this.state.inv} mld`,
      'Transporturi' + '<br />' + `${this.state.trans} mld`,
      'Asigurari' + '<br />' + `${this.state.asig} mld`,
      'Servicii' + '<br />' + `${this.state.serv} mld`,
      'Dezvoltare' + '<br />' + `${this.state.dezv} mld`,
      'Cultura' + '<br />' + `${this.state.cult} mld`,
      'Ecologie' + '<br />' + `${this.state.eco} mld`,
      'Sanatate' + '<br />' + `${this.state.sana} mld`,
      'Energie' + '<br />' + `${this.state.energ} mld`,
      'Aparare' + '<br />' + `${this.state.apar} mld`,
      'Altele' + '<br />' + `${this.state.alt} mld`
    ]};
    var options = {
      width: '80vw',
      height: '50vh',
    };
    var type = 'Bar';
    var county = localStorage.getItem("county");
    return (
      <div>
        <p className="text">{county}</p>
        <ChartistGraph data={data} options={options} type={type} />
      </div>
    )
  }
}

export default Customize;
