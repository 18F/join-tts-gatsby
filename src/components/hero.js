import React from 'react';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = () => (
  <section className="usa-hero">
    <div className="grid-container">
        <h2 className="usa-hero__heading--alt font-heading-l font-family-sans margin-top-0 tablet:margin-bottom-0">
          Do you want an opportunity to make a difference?
        </h2>
        <h2 className="usa-hero__heading margin-top-2">
          Help us <span className="usa-hero__heading--highlight">design and deliver a digital government</span> with and for the American public
        </h2>
    </div>
  </section>
);

export default Hero;
