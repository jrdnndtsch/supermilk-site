import React, { Component } from 'react';


class VideoSlide extends Component {
  render() {
    return (
      <div className="slide-video">
      	<div className="slide-video-wrapper">
       		<iframe  src="https://www.youtube.com/embed/ifY4wfli3KY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
      	</div>
      </div>
    );
  }
}

export default VideoSlide;
