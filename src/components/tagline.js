import React from 'react';
import { Link } from 'gatsby';
/*
  This tagline will appear in your homepage
*/

const Tagline = () => (
  <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <h2 className="font-heading-xl margin-top-0 tablet:margin-bottom-0">
        Do you want an opportunity to make a difference?
        </h2>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p className="usa-intro">
           We’re looking for candidates who are passionate about helping agencies build, buy, and share technology to better serve the public. Our team focuses on all aspects of digital government including account management, software development, product management, procurement, design, content strategy, cloud migration, outreach, and operations.
        </p>
        <p className="usa-intro">
        The Technology Transformation Services (TTS) mission is to design and deliver a digital government with and for the American public. TTS is part of the General Services Administration (GSA).

We are accepting applications for the positions listed below. We also post upcoming positions. <Link to="/newsletter">Join our mailing list</Link> to be notified when we post new jobs.
        </p>
      </div>
    </div>
  </section>
);

export default Tagline;
