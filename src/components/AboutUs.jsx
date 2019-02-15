import React from "react";
import Header from "./Header";
import Nav from "./Nav";

const AboutUs = () => {
  return (
    <div>
      <Header />
      <Nav value={"en"}/>

      <div className="blurb shadow">
      <img src="/images/aboutus.jpg" alt=""/>
        <h2>Thanks for stopping by PNRConverter.com</h2>

        <p>
          We are a small group of travel agents come web developers with one
          simple goal. To make life easier and more efficient for travel agents.
        </p>

        <p>
          Our goal is to create beautiful, and more importantly, easy to use tools to help travel agents all over the world. We specialise in the
          personal touch with out websites, so if you send us a suggestion that
          we're able to implement, we will.
        </p>
        <h2>PNRconverter's Aim</h2>

        <p>
          PNRconverter.com's founder, William, is a seasoned travel agent,
          working in the UK, New Zealand, Australia and Hong Kong in various
          roles within the travel industry. He was amazed at the format that
          some agents we're sending quotes out to clients in and decided to do
          soemthing about it. Hence PNRconverter was born
        </p>

        <p>
          While PNRconverter is currently widely used on every continent, We're
          aware that many of our users are using PNRconverter where internet
          connection is not as quick as it could be. We have developed
          PNRconverter with this in mind. All files sizes and code is written in
          an iptomised manner to ensure that pnrconverter works quickly and
          efficiently even when connections are slow
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
