import React, { Component } from 'react';


class PhotoSlide extends Component {
  render() {
    return (
      <div className="slide-photo">
       	{this.props.photos.map((photo, i) => {
       		return(
       			<div key={i} className={`slide-photo-img ${this.props.photos.length < 2 ? 'slide-photo-img-full' : null}`}>
       				<img src={photo.fields.file.url} />
       			</div>
       		)
       	})}
      </div>
    );
  }
}

export default PhotoSlide;
