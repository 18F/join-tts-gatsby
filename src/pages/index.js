import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <main id="main-content">
      <div className="grid-container">
        <div className="grid-row grid-gap">
          <div className="desktop:grid-col-12 usa-prose margin-top-6 margin-bottom-3">
          <p className="usa-intro">
            We’re looking for candidates who are passionate about helping agencies build, buy, and share technology to better serve the public. Our team focuses on all aspects of digital government including account management, software development, product management, procurement, design, content strategy, cloud migration, outreach, and operations.
          </p>
          <p className="usa-prose">
          The Technology Transformation Services (TTS) mission is to design and deliver a digital government with and for the American public. TTS is part of the General Services Administration (GSA).
          </p>
          <p className="usa-prose">
          We are accepting applications for the positions listed below. We also post upcoming positions. <Link to="/newsletter">Join our mailing list</Link> to be notified when we post new jobs.
          </p>
          </div>
        </div>
        <div className="grid-row grid-gap">
          <div className="desktop:grid-col-8 usa-prose">

            <h2>Open positions</h2>
            <p>We are hiring and will be sharing upcoming jobs and open positions as they are available.</p>
            <ul>
              <li>
                <p><a href="/join/bucket-18f-chapter-directors/">18F Chapter Directors</a> (Open now through Wednesday, October  6, 2021 at 11:59pm )</p>
              </li>
              <li>
                <p><a href="/join/coe-director/">Centers of Excellence - Director</a> (Open now through Monday, October 11, 2021 at 11:59pm )</p>
              </li>
            </ul>
            <h2> Upcoming positions</h2>
            <p>No upcoming positions at this time. Check out our open roles or sign up for job alerts for future upcoming roles!</p>
            <h2>Application process</h2>
            <p>
            We have an amazing recruitment team who will usher you from application to interview to onboarding with TTS.
            You’ll have guidance every step of the way! Learn more about our <Link to="/hiring-process">hiring process</Link>.
            </p>
            <p>
              If you have any questions about the process or positions, please contact
              our Talent Team at <Link to="mailto:joinTTS@gsa.gov">joinTTS@gsa.gov</Link>.
            </p>
          </div>
          <div className="desktop:grid-col-4">
            <div className="usa-summary-box">
              <div className="usa-summary-box__body">
                <h3 className="usa-summary-box__heading">
                  Register for a hiring information session
                </h3>
                <div className="usa-summary-box__text">
                  <p>We hold periodic info sessions to offer potential candidates an opportunity to learn more about working at TTS, available positions, and our application process. Register for a session below.</p>
                  <ul>
                    <li>
                      <p><a href="/join/coe-director/">General Hiring Info Session</a> Thursday, October 21 at 12:30 pm EDT / 9:30 am PDT</p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="usa-section usa-section--dark margin-top-6">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <div className="desktop:grid-col-8 usa-prose">
              <h3>About Technology Transformation Services</h3>
              <p>
                Technology Transformation Services (TTS) applies modern methodologies and technologies to improve the public’s experience with government. We help agencies make their services more accessible, efficient, and effective with modern applications, platforms, processes, personnel, and software solutions.
              </p>
              <p>
                TTS is comprised of four business units and front office, operations, and acquisition teams. Find out more below:
              </p>
            </div>
            <div className="desktop:grid-col-4 usa-prose">
              <h4>Our offices</h4>
              <ul>
                <li><a href="https://join.tts.gsa.gov/tts-offices/#centers-of-excellence"><strong>Centers of Excellence</strong></a></li>
                <li><a href="https://join.tts.gsa.gov/tts-offices/#18F"><strong>18F</strong></a></li>
                <li><a href="https://join.tts.gsa.gov/tts-offices/#office-of-solutions"><strong>Office of Solutions</strong></a></li>
                <li><a href="https://join.tts.gsa.gov/tts-offices/#presidential-innovation-fellows"><strong>Presidential Innovation Fellows</strong></a></li>
                <li><a href="https://join.tts.gsa.gov/tts-offices/#tts-front-office"><strong>TTS Front Office</strong></a></li>
                <li><a href="https://join.tts.gsa.gov/tts-offices/#office-of-operations"><strong>Office of Operations</strong></a></li>
                <li><a href="https://join.tts.gsa.gov/tts-offices/#office-of-acquisition"><strong>Office of Acquisition</strong></a></li>
              </ul>
            </div>
          </div>
      </div>
      </section>
    </main>
  </Layout>
);

export default IndexPage;
