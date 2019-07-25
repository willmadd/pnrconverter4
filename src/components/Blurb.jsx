import React from 'react';
import Translate from '../translations/Translate'

const Blurb = (props) => {
// const {language} = props;
  return (
    <div className="blurb">
      <h1><Translate string={'main.blurb.title'}/></h1>
      <h3><Translate string={'main.blurb.what-is'}/></h3>
      <p><Translate string={'main.blurb.1'}/></p>
      <p><Translate string={'main.blurb.2'}/></p>
      <p><Translate string={'main.blurb.3'}/></p>
      <h3><Translate string={'main.blurb.raw'}/></h3>

      <pre> 2  NZ 456 H 26OCT 5 WLGAKL HK1  1945 2050  26OCT  E  NZ/W268NH <br/> 3  NZ 002 W 26OCT 5 AKLLAX HK1  2250 1500  26OCT  E  NZ/W268NH <br/> 4  CM 362 T 26OCT 5 LAXPTY HK1  2200 0637  27OCT  E  CM/BIDQUI <br/> 5  CM 472 T 03NOV 6 PTYLAX HK1  1229 1735  03NOV  E  CM/BIDQUI <br/> 6  NZ 005 W 03NOV 6 LAXAKL HK1  2240 0730  05NOV  E  NZ/W268NH <br/>7  NZ 413 H 05NOV 1 AKLWLG HK1  0900 1005  05NOV  E  NZ/W268NH </pre>

      <h3> <Translate string={'main.blurb.into'}/></h3>
      <img src='/images/emailblurb.png' alt='email version of PNR converter output'/>
      <h3><Translate string={'main.blurb.or-this'}/></h3>
      <img src='/images/emailtable.png' alt='email version of PNR converter table output'/>

    </div>
  );
};

export default Blurb;