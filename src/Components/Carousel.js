import React from "react";
import { Carousel } from "react-responsive-carousel";
import './Carousel.css'

export default () => (
  // <Carousel autoPlay repeat>
  <Carousel autoPlay showArrows={true}>
    <div className="carousel">
      <img id="image-family" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/51346013_10101741428196437_1556390302896357376_n.jpg?_nc_cat=111&_nc_oc=AQnJ_SiAkxQ3M4Hh9s8MvttMtRnlvNLVwpQLXNU2MF31mK0I_LWPaybYuPCheOXWDf4&_nc_ht=scontent-ort2-1.xx&oh=a0dea33c2742a80dc20859f1612a174a&oe=5E8993B2"/>
    </div>
    <div>
      <img className="image image-ski" src={require('../Images/ski.png')} />
    </div>
    <div>
      <img className="image image-dogs" src={require('../Images/family2.png')} />
    </div>
    <div>
      <img className="image image-family3" src={require('../Images/family3.png')} />
    </div>
    <div>
      <img className="image image-family4" src={require('../Images/family4.png')} />
    </div>
    <div>
      <img className="image image-family5" src={require('../Images/family5.png')} />
    </div>
  </Carousel>
);


// import React from 'react';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';
 
// export default class Carousel extends React.Component {
//   render() {
//     return (
//       <CarouselProvider
//         naturalSlideWidth={100}
//         naturalSlideHeight={125}
//         totalSlides={3}
//       >
//         <Slider>
//           <Slide index={0} >
//             <img id="image-family" src="https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-9/51346013_10101741428196437_1556390302896357376_n.jpg?_nc_cat=111&_nc_oc=AQnJ_SiAkxQ3M4Hh9s8MvttMtRnlvNLVwpQLXNU2MF31mK0I_LWPaybYuPCheOXWDf4&_nc_ht=scontent-ort2-1.xx&oh=a0dea33c2742a80dc20859f1612a174a&oe=5E8993B2"></img>
//           </Slide>
//           <Slide index={1}>
//             <img id="image-ski" src={require('../Images/ski.png')}>
//             </img>
//           </Slide>
//           <Slide index={2}>I am the third Slide.</Slide>
//         </Slider>
//         <ButtonBack>Back</ButtonBack>
//         <ButtonNext>Next</ButtonNext>
//       </CarouselProvider>
//     );
//   }
// }