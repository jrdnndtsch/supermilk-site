import React, { Component } from 'react';


class DescriptionSlide extends Component {
  render() {
    return (
      <div className="slide-desc" dangerouslySetInnerHTML={{__html: this.props.desc}}>
      </div>
    );
  }
}

export default DescriptionSlide;
