import React, { Component } from 'react';
import './App.css';
import data from './data.json';

import PhotoSlide from './Components/PhotoSlide.js';
import VideoSlide from './Components/VideoSlide.js';
import DescriptionSlide from './Components/DescriptionSlide.js';
import Flickity from 'react-flickity-component';
import About from './Components/About.js';

// import createClient directly
import {createClient} from 'contentful'
const client = createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: 'd1msts2kk73z',
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: 'a76324795549c236fc3b30303ce1ec9ee207b47a796fc9580da4fb7ef3009cd4'
})
const flickityOptions = {
    draggable: true,
    prevNextButtons: false

}
class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [], 
      aboutOpen: false
    }
  }

  getProjectData(){
    client.getEntries({
      'content_type': 'project'
    })
    .then((response) => {
      console.log(response)
      this.setState({
        projects: response.items
      })
    })

  }
  componentDidMount() {
    // this.setState({
    //   projects: data.projects
    // })
    this.getProjectData()
  }
  render() {
    return (
      <div className="App">
        {this.state.projects.map((project, i) => {
          return(

            <section className="project" key={i} id={`section-${i}`}>
              <h2>{project.fields.title}</h2>
              <Flickity
                 className={'carousel'} // default ''
                 elementType={'div'} // default 'div'
                 options={flickityOptions} // takes flickity options {}
                 disableImagesLoaded={false} // default false
                 reloadOnUpdate // default false

               
              >
                {project.fields.slides.map((slide, i) => {
                  if(slide.fields.type === 'image') {
                    return (
                      <PhotoSlide key={i} photos={slide.fields.photos}/>
                    )
                  } else if (slide.fields.type === 'video') {
                    return(
                      <VideoSlide key={i}/>
                    )
                  }
                })}
                <DescriptionSlide desc={project.fields.description}/>
               </Flickity>  
               <a href={`#section-${i + 1}`} className="link-scroll">Scroll Down</a>
            </section>
          )
        })}
        {this.state.aboutOpen &&
          (
            <About/>
          )
        }
      </div>
    );
  }
}

export default App;
