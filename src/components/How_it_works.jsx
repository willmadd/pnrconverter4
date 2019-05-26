import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import { Helmet } from "react-helmet";

const How_it_works = () => {
  return (
    <div>
      <Header />
      <Nav value={"en"} />
      <Helmet>
        <title>{`How it Works | Easy PNR Converter`}</title>
      </Helmet>
      
      <div className="blurb shadow how-to">
        <img
          src="/images/how-to-use.jpg"
          alt="how to use PNR Converter"
          className="how-to-image"
        />
        <h1>Using PNR Converter is Easy</h1>
        <h3>Getting Started</h3>
        <p>
          We've developed one of the most advanced tools on the web to convert
          raw data from any travel agent GDS into a nice, customer friendly
          readable itinerary. Using PNR Converter is about as straight forward
          as it's possible to get! Simply copy and paste your itinerary from any
          of Galileo, Smartpoint, Sabre or Amadeus and PNR Converter will give
          you coherent, comprehensive and easily readable itinerary.
        </p>
        <h4>Step 1</h4>
        <p>
          Get the PNR you want to convert up in the GDS of your choice,
          including passenger names if required
        </p>
        <h4>Step 2</h4>
        <p>Select the itinerary in the GDS and copy it to the clip board</p>
        <h4>Step 3</h4>
        <p>
          Go to www.pnrconverter.com and paste the itinerary into the box at the
          top
        </p>
        <h4>Step 4</h4>
        <p>Hit the 'Convert' Button</p>
        <h4>Step 5</h4>
        <p>Play around with the options to get a format that you like</p>
        <h4>Step 6</h4>
        <p>Copy and Paste the output into an Email and have happy customers!</p>
        <hr />
        <h2>Display Options</h2>
        <h4>Show Airline Name</h4>
        <p>
          With this option selected the airline two letter abreiviation in the
          flight number is replaced with the actual full airline name
        </p>
        <h4>Show Airline Logo</h4>
        <p>
          Displays the airline logo next to the flight details. When copying and
          pasting into other applications, text editos emails clients etc the
          image may not show up. This is somethign we are working on, but is due
          to limitations with the text editors. Image copying works in Apple
          Mail, Outlook and copying directly into webmail (gmail yahoo etc){" "}
        </p>
        <h4>Show Duration</h4>
        <p>Displays the duration of each flight segment</p>
        <h4>Show Airline Logo</h4>
        <p>This option displays the airline logo next to each flight segment. Currently we have over 200 logos loaded onto our system, however if you come across one that isn't displaying let us know and we can add it in very easily</p>
        <h4>Show Cabin</h4>
        <p>
          With 'Cabin' selected this options shows the cabin name i.e. First,
          Business, Premium Economy or Economy. This option is not available
          with all airlines, however we are updating our database all the time.
          If there's an airline you sell frequently and would like us to add
          please let us know!. With 'Class' selected, this shows the booking class of the flight next to the flight number.
        </p>
        <p>
          With 'Class' selected this options shows the booking class next to the
          flight number{" "}
        </p>
        <h4>Transit Time</h4>
        <p>This displays the time between two flights, a warning will appear if there is a long connection (over 4 hours), or a short connection (under 1 hour 30 mins). The transit time is only displayed if the time between two flights is less than 24 hours</p>
        <h4>Show Distance</h4>
        <p>
          Displays the distance between the departure airport and the arrival
          airport. This is an estimate advised to us by the airlines, but should
          not be used for calculations of any mileage based air tickets. This can be set to display in either Miles or KM
        </p>
        <h4>12 Hour Clock</h4>
        <p>
          Some of us use the 24 hour clock (i.e. 14:20) and some use the 12 hour
          clock (i.e. 2:20pm). This option simply toggles between the two
        </p>

        <h4>Show Operated By</h4>
        <p>
          If the flight has a flight number from one airline but operated by
          another then this will be displayed here. Please note that the only
          way PNR Converter can detect that the flight is a code share is if it
          says 'Operated By' in the line after the flight e.g.
          <pre>
            1 KL4602X 24DEC 1 MELCAN HK4 0840 1520 /DCKL*VNSMXR /E 
            <br />
            OPERATED BY
            CHINA SOUTHERN AIRLINES
          </pre>
          will display as <br />
          <div class=" shadow resultsbox" id="selectable"><div class="row"><div class="main-content"><div class="image-container"><img src="/images/airlines/png/kl.png" alt="airline logo"/></div><div class="result-text"><p class="lineOne">Tue, 24 Dec - KLM 4602 <span class="operatedBy">(operated by china southern airlines) </span>- Economy - 9h 40m </p><div><p>Departing: Melbourne Intl Airport (MEL) at 8:40 am<br/>Arriving: Guangzhou Baiyun Airport (CAN) at 3:20 pm</p></div><div class="transit left-margin-75">------------------------------------------------------------------------------------------</div></div></div></div></div>
        </p>
        <hr/>
        <h2>Results Format</h2>
        To see how the results will look like is we enter the below
        <pre>
          1.1JONES/RACHAEL <br />1 DL 46T 19JUL Q JFKAMS*SS1 436P 555A 20JUL F
          /DCDL /E
          <br />
          MOVIES 6**SKY PRIORITY IN C DELTA ONE SVC THIS FLT <br />
          2 DL9355T 20JUL F AMSZAG*SS1 930A 1120A /DCDL /E
          <br />
          OPERATED BY KLM CITYHOPPER <br />
          *DL CODE SHARE-QUOTE OPERATED BY KLMCITYHOPPE AS KL FLT 1939 <br />
          ONLINE CONNECTING TRAFFIC ONLY <br />
          3 DL8329K 29JUL S ZAGCDG*SS1 310P 510P /DCDL /E
          <br />
          OPERATED BY AIR FRANCE
          <br />
          *DL CODE SHARE-QUOTE OPERATED BY AIR FRANCE AS AF FLT 1561
          <br />
          ONLINE CONNECTING TRAFFIC ONLY
          <br />
          4 DL1021K 29JUL S CDGJFK*SS1 710P 925P /DCDL /E <br />
          OPERATED BY AIR FRANCE
          <br />
          *DL CODE SHARE-QUOTE OPERATED BY AIR FRANCE AS AF FLT 8
        </pre>
        <h4>Two Lines:</h4>
        <div class=" shadow resultsbox" id="selectable">
          <div class="names-box">
            <b>Itinerary For:</b>
            <p>
              JONES/RACHAEL <br />
            </p>
          </div>
          <div class="row">
            <div class="main-content">
              <div class="image-container">
                <img src="/images/airlines/png/dl.png" alt="airline logo" />
              </div>
              <div class="result-text">
                <p class="lineOne">
                  Fri, 19 Jul - Delta 46 <span class="operatedBy"> </span>-
                  Economy - 7h 19m{" "}
                </p>
                <div>
                  <p>
                    New York John F Kennedy Airport, (JFK), to Amsterdam
                    Schiphol Airport (AMS), Depart 4:36 pm, Arrive 5:55 am (on
                    the 20 Jul)
                  </p>
                </div>
                <div class="transit left-margin-75">
                  <div>
                    --------
                    <span class="transitwarning" />
                    --Transit Time: 3h 35m--------
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="main-content">
              <div class="image-container">
                <img src="/images/airlines/png/dl.png" alt="airline logo" />
              </div>
              <div class="result-text">
                <p class="lineOne">
                  Sat, 20 Jul - Delta 9355 <span class="operatedBy"> </span>-
                  Economy - 1h 50m{" "}
                </p>
                <div>
                  <p>
                    Amsterdam Schiphol Airport (AMS), to Zagreb Airport (ZAG),
                    Depart 9:30 am, Arrive 11:20 am
                  </p>
                </div>
                <div class="transit left-margin-75">
                  ------------------------------------------------------------------------------------------
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="main-content">
              <div class="image-container">
                <img src="/images/airlines/png/dl.png" alt="airline logo" />
              </div>
              <div class="result-text">
                <p class="lineOne">
                  Mon, 29 Jul - Delta 8329 <span class="operatedBy"> </span>-
                  Economy - 2h 0m{" "}
                </p>
                <div>
                  <p>
                    Zagreb Airport (ZAG), to Paris Charles de Gaulle Airport
                    (CDG), Depart 3:10 pm, Arrive 5:10 pm
                  </p>
                </div>
                <div class="transit left-margin-75">
                  <div>
                    --------
                    <span class="transitwarning" />
                    --Transit Time: 2h 0m--------
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="main-content">
              <div class="image-container">
                <img src="/images/airlines/png/dl.png" alt="airline logo" />
              </div>
              <div class="result-text">
                <p class="lineOne">
                  Mon, 29 Jul - Delta 1021 <span class="operatedBy"> </span>-
                  Economy - 8h 15m{" "}
                </p>
                <div>
                  <p>
                    Paris Charles de Gaulle Airport (CDG), to New York John F
                    Kennedy Airport, (JFK), Depart 7:10 pm, Arrive 9:25 pm
                  </p>
                </div>
                <div class="transit left-margin-75">
                  ------------------------------------------------------------------------------------------
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4>Two Lines Reordered:</h4>
        <div class=" shadow resultsbox" id="selectable">
          <div class="names-box">
            <b>Itinerary For:</b>
            <p>
              JONES/RACHAEL <br />
            </p>
          </div>
          <div class="row">
            <div class="main-content">
              <div class="image-container">
                <img src="/images/airlines/png/dl.png" alt="airline logo" />
              </div>
              <div class="result-text">
                <p class="lineOne">
                  Fri, 19 Jul - Delta 46 <span class="operatedBy"> </span>-
                  Economy - 7h 19m{" "}
                </p>
                <div>
                  <p>
                    Departs: 4:36 pm from New York John F Kennedy Airport,
                    (JFK), Arrives: Amsterdam Schiphol Airport (AMS) at 5:55 am
                    (on the 20 Jul)
                  </p>
                </div>
                <div class="transit left-margin-75">
                  <div>
                    --------<span class="transitwarning" />--Transit Time: 3h
                    35m--------
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="main-content">
              <div class="image-container">
                <img src="/images/airlines/png/dl.png" alt="airline logo" />
              </div>
              <div class="result-text">
                <p class="lineOne">
                  Sat, 20 Jul - Delta 9355 <span class="operatedBy"> </span>-
                  Economy - 1h 50m{" "}
                </p>
                <div>
                  <p>
                    Departs: 9:30 am from Amsterdam Schiphol Airport (AMS),
                    Arrives: Zagreb Airport (ZAG) at 11:20 am
                  </p>
                </div>
                <div class="transit left-margin-75">
                  ------------------------------------------------------------------------------------------
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="main-content">
              <div class="image-container">
                <img src="/images/airlines/png/dl.png" alt="airline logo" />
              </div>
              <div class="result-text">
                <p class="lineOne">
                  Mon, 29 Jul - Delta 8329 <span class="operatedBy"> </span>-
                  Economy - 2h 0m{" "}
                </p>
                <div>
                  <p>
                    Departs: 3:10 pm from Zagreb Airport (ZAG), Arrives: Paris
                    Charles de Gaulle Airport (CDG) at 5:10 pm
                  </p>
                </div>
                <div class="transit left-margin-75">
                  <div>
                    --------<span class="transitwarning" />--Transit Time: 2h
                    0m--------
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="main-content">
              <div class="image-container">
                <img src="/images/airlines/png/dl.png" alt="airline logo" />
              </div>
              <div class="result-text">
                <p class="lineOne">
                  Mon, 29 Jul - Delta 1021 <span class="operatedBy"> </span>-
                  Economy - 8h 15m{" "}
                </p>
                <div>
                  <p>
                    Departs: 7:10 pm from Paris Charles de Gaulle Airport (CDG),
                    Arrives: New York John F Kennedy Airport, (JFK) at 9:25 pm
                  </p>
                </div>
                <div class="transit left-margin-75">
                  ------------------------------------------------------------------------------------------
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4>Three Lines</h4>
        <div class=" shadow resultsbox" id="selectable">
          <div class="names-box">
            <b>Itinerary For:</b>
            <p>
              JONES/RACHAEL <br />
            </p>
          </div>
          <div class="row">
            <div class="main-content">
              <div class="image-container">
                <img src="/images/airlines/png/dl.png" alt="airline logo" />
              </div>
              <div class="result-text">
                <p class="lineOne">
                  Fri, 19 Jul - Delta 46 <span class="operatedBy"> </span>-
                  Economy - 7h 19m{" "}
                </p>
                <div>
                  <p>
                    Departing: New York John F Kennedy Airport, (JFK) at 4:36 pm
                    <br />
                    Arriving: Amsterdam Schiphol Airport (AMS) at 5:55 am (on
                    the 20 Jul)
                  </p>
                </div>
                <div class="transit left-margin-75">
                  <div>
                    --------<span class="transitwarning" />--Transit Time: 3h
                    35m--------
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="main-content">
              <div class="image-container">
                <img src="/images/airlines/png/dl.png" alt="airline logo" />
              </div>
              <div class="result-text">
                <p class="lineOne">
                  Sat, 20 Jul - Delta 9355 <span class="operatedBy"> </span>-
                  Economy - 1h 50m{" "}
                </p>
                <div>
                  <p>
                    Departing: Amsterdam Schiphol Airport (AMS) at 9:30 am
                    <br />
                    Arriving: Zagreb Airport (ZAG) at 11:20 am
                  </p>
                </div>
                <div class="transit left-margin-75">
                  ------------------------------------------------------------------------------------------
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="main-content">
              <div class="image-container">
                <img src="/images/airlines/png/dl.png" alt="airline logo" />
              </div>
              <div class="result-text">
                <p class="lineOne">
                  Mon, 29 Jul - Delta 8329 <span class="operatedBy"> </span>-
                  Economy - 2h 0m{" "}
                </p>
                <div>
                  <p>
                    Departing: Zagreb Airport (ZAG) at 3:10 pm
                    <br />
                    Arriving: Paris Charles de Gaulle Airport (CDG) at 5:10 pm
                  </p>
                </div>
                <div class="transit left-margin-75">
                  <div>
                    --------<span class="transitwarning" />--Transit Time: 2h
                    0m--------
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="main-content">
              <div class="image-container">
                <img src="/images/airlines/png/dl.png" alt="airline logo" />
              </div>
              <div class="result-text">
                <p class="lineOne">
                  Mon, 29 Jul - Delta 1021 <span class="operatedBy"> </span>-
                  Economy - 8h 15m{" "}
                </p>
                <div>
                  <p>
                    Departing: Paris Charles de Gaulle Airport (CDG) at 7:10 pm
                    <br />
                    Arriving: New York John F Kennedy Airport, (JFK) at 9:25 pm
                  </p>
                </div>
                <div class="transit left-margin-75">
                  ------------------------------------------------------------------------------------------
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4>Three Lines Reordered</h4>
        <div class=" shadow resultsbox" id="selectable">
          <div class="names-box">
            <b>Itinerary For:</b>
            <p>
              JONES/RACHAEL <br />
            </p>
          </div>
          <div class="row">
            <div class="main-content">
              <div class="image-container">
                <img src="/images/airlines/png/dl.png" alt="airline logo" />
              </div>
              <div class="result-text">
                <p class="lineOne">
                  Fri, 19 Jul - Delta 46 <span class="operatedBy"> </span>-
                  Economy - 7h 19m{" "}
                </p>
                <p>
                  Departing: 4:36 pm from New York John F Kennedy Airport, (JFK)
                  <br />
                  Arriving: 5:55 am (on the 20 Jul) into Amsterdam Schiphol
                  Airport (AMS)
                </p>
                <div class="transit left-margin-75">
                  <div>
                    --------<span class="transitwarning" />--Transit Time: 3h
                    35m--------
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="main-content">
              <div class="image-container">
                <img src="/images/airlines/png/dl.png" alt="airline logo" />
              </div>
              <div class="result-text">
                <p class="lineOne">
                  Sat, 20 Jul - Delta 9355 <span class="operatedBy"> </span>-
                  Economy - 1h 50m{" "}
                </p>
                <p>
                  Departing: 9:30 am from Amsterdam Schiphol Airport (AMS)
                  <br />
                  Arriving: 11:20 am into Zagreb Airport (ZAG)
                </p>
                <div class="transit left-margin-75">
                  ------------------------------------------------------------------------------------------
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="main-content">
              <div class="image-container">
                <img src="/images/airlines/png/dl.png" alt="airline logo" />
              </div>
              <div class="result-text">
                <p class="lineOne">
                  Mon, 29 Jul - Delta 8329 <span class="operatedBy"> </span>-
                  Economy - 2h 0m{" "}
                </p>
                <p>
                  Departing: 3:10 pm from Zagreb Airport (ZAG)
                  <br />
                  Arriving: 5:10 pm into Paris Charles de Gaulle Airport (CDG)
                </p>
                <div class="transit left-margin-75">
                  <div>
                    --------<span class="transitwarning" />--Transit Time: 2h
                    0m--------
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="main-content">
              <div class="image-container">
                <img src="/images/airlines/png/dl.png" alt="airline logo" />
              </div>
              <div class="result-text">
                <p class="lineOne">
                  Mon, 29 Jul - Delta 1021 <span class="operatedBy"> </span>-
                  Economy - 8h 15m{" "}
                </p>
                <p>
                  Departing: 7:10 pm from Paris Charles de Gaulle Airport (CDG)
                  <br />
                  Arriving: 9:25 pm into New York John F Kennedy Airport, (JFK)
                </p>
                <div class="transit left-margin-75">
                  ------------------------------------------------------------------------------------------
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4>Table</h4>
        <div class="resultsbox margin-table shadow no-margin">
          <div id="restable">
            <div class="names-box">
              <b>Itinerary For:</b>
              <p>
                JONES/RACHAEL <br />
              </p>
            </div>
            <table>
              <thead>
                <tr>
                  <th />
                  <th>Date</th>
                  <th>Airline</th>
                  <th>Flight No</th>
                  <th>Cabin</th>
                  <th>Depart</th>
                  <th>from</th>
                  <th>Arrive</th>
                  <th>at</th>
                  <th>Duration</th>
                  <th>Transit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img src="/images/airlines/png/dl.png" alt="" />
                  </td>
                  <td>Fri, 19 Jul</td>
                  <td>Delta</td>
                  <td>46 </td>
                  <td>Economy</td>
                  <td>4:36 pm</td>
                  <td>New York John F Kennedy Airport, (JFK)</td>
                  <td>5:55 am (on the 20 Jul)</td>
                  <td>Amsterdam Schiphol Airport (AMS)</td>
                  <td>7h 19m</td>
                  <td>3h 35m</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/airlines/png/dl.png" alt="" />
                  </td>
                  <td>Sat, 20 Jul</td>
                  <td>Delta</td>
                  <td>9355 </td>
                  <td>Economy</td>
                  <td>9:30 am</td>
                  <td>Amsterdam Schiphol Airport (AMS)</td>
                  <td>11:20 am </td>
                  <td>Zagreb Airport (ZAG)</td>
                  <td>1h 50m</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/airlines/png/dl.png" alt="" />
                  </td>
                  <td>Mon, 29 Jul</td>
                  <td>Delta</td>
                  <td>8329 </td>
                  <td>Economy</td>
                  <td>3:10 pm</td>
                  <td>Zagreb Airport (ZAG)</td>
                  <td>5:10 pm </td>
                  <td>Paris Charles de Gaulle Airport (CDG)</td>
                  <td>2h 0m</td>
                  <td>2h 0m</td>
                </tr>
                <tr>
                  <td>
                    <img src="/images/airlines/png/dl.png" alt="" />
                  </td>
                  <td>Mon, 29 Jul</td>
                  <td>Delta</td>
                  <td>1021 </td>
                  <td>Economy</td>
                  <td>7:10 pm</td>
                  <td>Paris Charles de Gaulle Airport (CDG)</td>
                  <td>9:25 pm </td>
                  <td>New York John F Kennedy Airport, (JFK)</td>
                  <td>8h 15m</td>
                  <td>-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <br />
    </div>
  );
};

export default How_it_works;
