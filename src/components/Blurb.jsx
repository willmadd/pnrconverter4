import React from 'react';
import blurb from '../data/blurb.json'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const Blurb = (props) => {
const {language} = props;
  return (
    <div className="blurb shadow">
{ReactHtmlParser(blurb[language])}
    </div>
  );
};

export default Blurb;