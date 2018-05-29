import React, { Component } from 'react';


class VideoSlide extends Component {
  render() {
    return (
      <div className="slide-video">
       <iframe width="560" height="315" src="https://www.youtube.com/embed/ifY4wfli3KY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      </div>
    );
  }
}

export default VideoSlide;
