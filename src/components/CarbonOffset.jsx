import React, { Component } from 'react';
import Nav from './Nav';
import Header from './Header';
import { Helmet } from "react-helmet";

class CarbonOffset extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Nav value={"en"}/>
        <Helmet>
        <title>{`Carbon Offsetting | Easy PNR Converter`}</title>
      </Helmet>

        <h1>Carbon Offset Your Flights</h1>
        <h3>How do we Calculate Carbon Offset?</h3>
        <p>https://www.gov.uk/government/publications/greenhouse-gas-reporting-conversion-factors-2016</p>

<table>
<thead><tr><th></th><th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th><th>With RF</th><th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th><th>Without RF</th><th>&nbsp;</th><th>&nbsp;</th><th>&nbsp;</th></tr></thead><tbody>
 <tr><td>Activity</td><td>Haul</td><td>Class</td><td>Unit</td><td>kg CO2e</td><td>kg CO2</td><td>kg CH4</td><td>kg N2O</td><td>kg CO2e</td><td>kg CO2</td><td>kg CH4</td><td>kg N2O</td></tr>
 <tr><td>Flights</td><td>Domestic, to/from UK</td><td>Average passenger</td><td>passenger.km</td><td>  0.27867 </td><td>  0.27722 </td><td>  0.00007 </td><td>  0.00138 </td><td>  0.14735 </td><td>  0.1459  </td><td>  0.00007 </td><td>  0.00138 </td></tr>
 <tr><td>&nbsp;</td><td>Short-haul, to/from UK</td><td>Average passenger</td><td>passenger.km</td><td>  0.16844 </td><td>  0.1676  </td><td>  0.00001 </td><td>  0.00083 </td><td>  0.08905 </td><td>  0.08821 </td><td>  0.00001 </td><td>  0.00083 </td></tr>
 <tr><td>&nbsp;</td><td>&nbsp;</td><td>Economy class</td><td>passenger.km</td><td>  0.16508 </td><td>  0.16425 </td><td>  0.00001 </td><td>  0.00082 </td><td>  0.08728 </td><td>  0.08645 </td><td>  0.00001 </td><td>  0.00082 </td></tr>
 <tr><td>&nbsp;</td><td>&nbsp;</td><td>Business class</td><td>passenger.km</td><td>  0.24761 </td><td>  0.24637 </td><td>  0.00001 </td><td>  0.00123 </td><td>  0.13091 </td><td>  0.12967 </td><td>  0.00001 </td><td>  0.00123 </td></tr>
 <tr><td>&nbsp;</td><td>Long-haul, to/from UK</td><td>Average passenger</td><td>passenger.km</td><td>  0.19162 </td><td>  0.19066 </td><td>  0.00001 </td><td>  0.00095 </td><td>  0.10131 </td><td>  0.10035 </td><td>  0.00001 </td><td>  0.00095 </td></tr>
 <tr><td>&nbsp;</td><td>&nbsp;</td><td>Economy class</td><td>passenger.km</td><td>  0.14678 </td><td>  0.14604 </td><td>  0.00001 </td><td>  0.00073 </td><td>  0.07761 </td><td>  0.07687 </td><td>  0.00001 </td><td>  0.00073 </td></tr>
 <tr><td>&nbsp;</td><td>&nbsp;</td><td>Premium economy class</td><td>passenger.km</td><td>  0.23484 </td><td>  0.23367 </td><td>  0.00001 </td><td>  0.00116 </td><td>  0.12415 </td><td>  0.12298 </td><td>  0.00001 </td><td>  0.00116 </td></tr>
 <tr><td>&nbsp;</td><td>&nbsp;</td><td>Business class</td><td>passenger.km</td><td>  0.42565 </td><td>  0.42353 </td><td>  0.00001 </td><td>  0.00211 </td><td>  0.22503 </td><td>  0.22291 </td><td>  0.00001 </td><td>  0.00211 </td></tr>
 <tr><td>&nbsp;</td><td>&nbsp;</td><td>First class</td><td>passenger.km</td><td>  0.58711 </td><td>  0.58418 </td><td>  0.00002 </td><td>  0.00291 </td><td>  0.31039 </td><td>  0.30746 </td><td>  0.00002 </td><td>  0.00291 </td></tr>
 <tr><td>&nbsp;</td><td>International, to/from non-UK</td><td>Average passenger</td><td>passenger.km</td><td>  0.17901 </td><td>  0.17811 </td><td>  0.00001 </td><td>  0.00089 </td><td>  0.09464 </td><td>  0.09374 </td><td>  0.00001 </td><td>  0.00089 </td></tr>
 <tr><td>&nbsp;</td><td>&nbsp;</td><td>Economy class</td><td>passenger.km</td><td>  0.137125</td><td>  0.13644 </td><td>  0.000005</td><td>  0.00068 </td><td>  0.072495</td><td>  0.07181 </td><td>  0.000005</td><td>  0.00068 </td></tr>
 <tr><td>&nbsp;</td><td>&nbsp;</td><td>Premium economy class</td><td>passenger.km</td><td>  0.21939 </td><td>  0.21829 </td><td>  0.00001 </td><td>  0.00109 </td><td>  0.11599 </td><td>  0.11489 </td><td>  0.00001 </td><td>  0.00109 </td></tr>
 <tr><td>&nbsp;</td><td>&nbsp;</td><td>Business class</td><td>passenger.km</td><td>  0.39764 </td><td>  0.39566 </td><td>  0.00001 </td><td>  0.00197 </td><td>  0.21022 </td><td>  0.20824 </td><td>  0.00001 </td><td>  0.00197 </td></tr>
 <tr><td>&nbsp;</td><td>&nbsp;</td><td>First class</td><td>passenger.km</td><td>  0.54846 </td><td>  0.54572 </td><td>  0.00002 </td><td>  0.00272 </td><td>  0.28996 </td><td>  0.28722 </td><td>  0.00002 </td><td>  0.00272</td></tr>
</tbody></table>
      </div>
    );
  }
}

export default CarbonOffset;