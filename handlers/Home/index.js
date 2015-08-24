/** @flow */
require('./styles.css');

import React from 'react';
import Hero from 'Hero';
import MajorSectionElement from 'MajorSectionElement';
import FeaturedPosts from 'FeaturedPosts';
import Clients from 'Clients';
import CaseStudy from 'CaseStudy';
import Locations from 'Locations';
import Button from 'Button';
import Services from 'Services';
import {nameToRgba} from 'nameToColor';

var cn = s => `Home-${s}`;

class Home extends React.Component {
  render(): ReactElement {
    return (
      <div className="Home">
        <Hero
          childrenPosition="before"
          color="black"
          image="/public/images/hero-case-studies.png"
          video="/public/videos/home-mov.MOV"
          title={<img className="Home-wordmark-image" src="/public/images/wordmark.svg" alt="Skookum" />}
          subtitle={<span>Custom software for companies and the <span style={{color: nameToRgba('orange')}}>people</span> they empower.</span>} />
        <div className="Home-statement">
          Skookum is a full service software development shop.
        </div>
        <Services />
        <CaseStudy />
        <div className="Home-content">
          <div className="Home-content-container">
            <div className="Home-content-title">
              There is no limit.
            </div>
            <div className="Home-content-description">
              We’re a technically diverse bunch of strategists, designers and engineers. We have no proprietary platforms to sell. Your business needs determine our technology–not the other way around.
            </div>
            <Button className="Home-content-button" to="blog" style={{color: '#393939', backgroundColor: '#fff', textTransform: 'none', border: '0', borderRadius: '0'}}>Learn more about our capabilities</Button>
          </div>
        </div>
        <Clients />
      </div>
    );
  }
}

Home.propTypes = {};

Home.displayName = 'Home';

export default Home;
