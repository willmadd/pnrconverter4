import React from "react";

const How_it_works = () => {
  return (
    <div>
      <h3>Using PNR Converter is Easy</h3>
      <a href="/">Getting Started</a>
      <a href="/">Display Options</a>
      <a href="/">Results Format</a>
      <h3>Getting Started</h3>
      <p>
        We've developed one of the most advanced tools on the web to convert raw
        data from any travel agent GDS into a nice, customer friendly readable
        itinerary. Using PNR Converter is about as straight forward as it's
        possible to get! Simply copy and paste your itinerary from any of
        Galileo, Smartpoint, Sabre or Amadeus and PNR Converter will give you
        coherent, comprehensive and easily readable itinerary.
      </p>
      <h4>Step 1</h4>
      <p>
        Get the PNR you want to convert up in the GDS of your choice, including
        passenger names if required
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
      <h3>Display Options</h3>
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
        to limitations with the text editors. Image copying works in Apple Mail,
        Outlook and copying directly into webmail (gmail yahoo etc){" "}
      </p>
      <h4>Show Cabin</h4>
      <p>
        With 'Cabin' selected this options shows the cabin name i.e. First,
        Business, Premium Economy or Economy. This option is not available with
        all airlines, however we are updating our database all the time. If
        there's an airline you sell frequently and would like us to add please
        let us know!{" "}
      </p>
      <p>
        With 'Class' selected this options shows the booking class next to the
        flight number{" "}
      </p>
      <h4>Flight Duration</h4>
      <p>Displays the flight duration in hours and minuted</p>
      <h4>Show Distance</h4>
      <p>
        Displays the distance between the starting airport and the ending
        airport. This is an estimate advised to us by the airlines, but should
        not be used for calculations of any mileage based air tickets
      </p>
      <h4>12 Hour Clock</h4>
      <p>
        Some of us use the 24 hour clock (i.e. 14:20) and some use the 12 hour
        clock (i.e. 2:20pm). This option simply toggles between the two
      </p>
      <h4>Transit Time</h4>
      <p>
        Shows the transit time on any flights where the tme on the ground is
        less than 24 hours.
      </p>
      <h4>Show Operated By</h4>
      <p>
        If the flight has a flight number from one airline but operated by
        another then this will be displayed here. Please note that the only way
        PNR Converter can detect that the flight is a code share is if it says
        'Operated By' in the line after the flight e.g.
        <pre>
          1 KL4602X 24DEC 1 MELCAN HK4 0840 1520 /DCKL*VNSMXR /E OPERATED BY
          CHINA SOUTHERN AIRLINES
        </pre>
      </p>
      <h3>Results Format</h3>
      To see how the results will look like is we enter the below
      <pre>
        1.1JONES/RACHAEL <br/>1 DL 46T 19JUL Q JFKAMS*SS1 436P 555A 20JUL F  /DCDL /E<br/>
        MOVIES 6**SKY PRIORITY IN C DELTA ONE SVC THIS FLT <br/>
        2 DL9355T 20JUL F
        AMSZAG*SS1 930A 1120A /DCDL /E<br/>
        OPERATED BY KLM CITYHOPPER <br/>
        *DL CODE SHARE-QUOTE OPERATED BY KLMCITYHOPPE AS KL FLT 1939 <br/>ONLINE CONNECTING
        TRAFFIC ONLY <br/>
        3 DL8329K 29JUL S ZAGCDG*SS1 310P 510P /DCDL /E 
        <br/>OPERATED BY AIR FRANCE<br/>
         *DL CODE SHARE-QUOTE OPERATED BY AIR FRANCE AS AF FLT 1561<br/>
        ONLINE CONNECTING TRAFFIC ONLY<br/>
         4 DL1021K 29JUL S CDGJFK*SS1 710P 925P
        /DCDL /E <br/>OPERATED BY AIR FRANCE<br/>
         *DL CODE SHARE-QUOTE OPERATED BY AIR
        FRANCE AS AF FLT 8
      </pre>
      <h4>Two Lines:</h4>
      <p>Itinerary For</p>
      JONES/RACHAEL <br />
      <br />
    </div>
  );
};

export default How_it_works;
