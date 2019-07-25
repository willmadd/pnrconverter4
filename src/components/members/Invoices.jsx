import React, { Component } from "react";
import * as api from "../../db/api";
import Loader from "../Loader";

class Invoices extends Component {
  state = {
    invoices: [],
    loading: true
  };

  componentDidMount = () => {
    api.getInvoices(this.props.user.id).then(res => {
      this.setState({
        invoices: res.data.invoices,
        loading: false
      });
    });
  };

  handleClick = invoice_id => {
    api
      .getSingleInvoice(this.props.user.id, invoice_id)
      .then(res => {
        //Create a Blob from the PDF Stream
        const file = new Blob([res.data], { type: "application/pdf" });
        //Build a URL from the file
        const fileURL = URL.createObjectURL(file);
        //Open the URL on new Window
        window.open(fileURL);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    let { loading } = this.state;
    return (
      <div className="invoices member-content-area">
        <h2>{loading ? "Fetching Your Inovices..." : "Download Invoices:"}</h2>
        {loading && <Loader />}
        <ul>
          {this.state.invoices.map(invoice => {
            return (
              <li key={invoice.id} onClick={() => this.handleClick(invoice.id)}>
                {/* <div className="download-icon" /> */}
                <img className="download-icon" src="./images/icons/pdf.svg" alt="" height="20" width="20"/>
                <div className="invoice-data">
                  <p className="bold">Date: {invoice.date}</p>
                  <p>Invoice ID: {invoice.id}</p>

                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Invoices;
