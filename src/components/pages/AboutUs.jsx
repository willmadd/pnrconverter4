import React from "react";


const AboutUs = () => {
  return (
    <div>

      <div className="blurb shadow about-us">
        <img src="/images/aboutus.jpg" alt="" />
        <h1> Thanks for stopping by PNR Converter </h1>
        <p>
          We are a small group of travel agents come web developers with one
          simple goal. To make life easier and more efficient for travel agents.
        </p>
        <p>
          Our goal is to create beautiful, and more importantly, easy to use
          tools to help travel agents all over the world. We specialise in the
          personal touch with our websites, so if you send us a suggestion that
          we’re able to implement, we will.
        </p>
        <h1> PNR Converter’s Aim </h1>
        <p>
          PNR Converter’s founder, William, is a seasoned travel agent, working
          in the UK, New Zealand, Australia and Hong Kong in various roles
          within the travel industry. During this time it became apparent how
          not user friendly the state of a lot of software that travel agents
          use was, and hence PNR Converter was born. The Aim of PNR Converter is
          simple. To help travel agents create high quality content to send to
          clients with ease.{" "}
        </p>
        <p>
          While PNR Converter is currently widely used on every continent, We’re
          aware that many of our users are using PNR Converter where internet
          connection is not as quick as it could be. We have developed PNR
          Converter with this in mind. All files sizes and code is written in an
          optimised manner to ensure that PNR Converter works quickly and
          efficiently even when connections are slow.
        </p>
        <h1>Get in Touch</h1>
        <p>
          We’re always keen to hear from our users, so no matter if you’ve got a
          problem, a request, an idea or even just want to get in touch then
          please get in touch <a href="/make-a-suggestion">here</a>!
        </p>
        <p>
          We’re also open to collaborative working, so if you have any projects
          you think we could partner up on then again, please get in touch!
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
