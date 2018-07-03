import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <div className="slide-about">
        <a className="link-back" onClick={this.props.toggleAbout}>Back</a>
      	<div>
      		<h2>"Art & Communication"</h2>
      		<ul>
      			<li>Branding,</li>
      			<li>Illustration,</li>
      			<li>Layout,</li>
      			<li>Murals,</li>
      			<li>Photography.</li>
      		</ul>
      	</div>
      	<div>
      		<a href="mailto:ahren@supermilk.ca">ahren@supermilk.ca</a>
      		<div className="social-links">
      			<a href="https://www.instagram.com/supermilk.studio/" target="_blank">instagram</a>
      			<a href="">Newsletter Sign-up</a>
      		</div>
      		<div className="contact">
      			<span>supermilk.studio</span>
      			<span>303-260 spadina ave</span>
      			<span>toronto on</span>
      			<span>m5t 2E3</span>
      		</div>
      	</div>
      </div>
    );
  }
}

export default About;
