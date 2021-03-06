import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Code from "@material-ui/icons/Code";
import StayCurrentPortant from "@material-ui/icons/StayCurrentPortrait";
import Developer_Mode from "@material-ui/icons/DeveloperMode";
// core components

import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import NavPills from "components/NavPills/NavPills.jsx";

import CarouselFrontEnd from "./FrontEnd/CarouselFrontEnd.jsx";
import CarouselFullStack from "./FullStack/CarouselFullStack.jsx";
import CarouselMobile from "./Mobile/CarouselMobile.jsx";


import studio1 from "assets/img/studio-1.jpg";
import studio2 from "assets/img/studio-2.jpg";
import studio3 from "assets/img/studio-3.jpg";
import studio4 from "assets/img/studio-4.jpg";
import studio5 from "assets/img/studio-5.jpg";
import work1 from "assets/img/olu-eletu.jpg";
import work2 from "assets/img/clem-onojeghuo.jpg";
import work3 from "assets/img/cynthia-del-rio.jpg";
import work4 from "assets/img/mariya-georgieva.jpg";
import work5 from "assets/img/clem-onojegaw.jpg";
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";

import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";
import Carousel from "react-slick";


import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import './Portfolio.css';

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
    return (
 
            <div style={{border: "1px solid red"}}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Full-Stack",
                        tabIcon: Developer_Mode,
                        tabContent: (
                          <CarouselFullStack />
                        )
                      },
                      {
                        tabButton: "Front-End",
                        tabIcon: Code,
                        tabContent: (
                            <CarouselFrontEnd />
                        )
                      },
                      {
                        tabButton: "Mobile",
                        tabIcon: StayCurrentPortant
                        ,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={6}>
                              <CarouselMobile />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
            </div>



            <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                  <NavPills
                    alignCenter
                    color="primary"
                    tabs={[
                      {
                        tabButton: "Studio",
                        tabIcon: Camera,
                        tabContent: (
                          <div className={classes.section}>
                            <div className={classes.container} style={{marginTop: "100PX"}}>
                              <GridContainer justify="center">
                                <GridItem xs={12} sm={12} md={12} className={classes.marginAuto}>
                                  <Card carousel>
                                    <Carousel {...settings}>
                                      <div >
                                        <img
                                          src={image1}
                                          alt="First slide"
                                          className="slick-image"
                                        />
                                        <div className="slick-caption">
                                          
                                        </div>
                                      </div>
                                      <div>
                                        <img
                                          src={image2}
                                          alt="Second slide"
                                          className="slick-image"
                                        />
                                        <div className="slick-caption">
                                          
                                        </div>
                                      </div>
                                      <div>
                                        <img
                                          src={image3}
                                          alt="Third slide"
                                          className="slick-image"
                                        />
                                        <div className="slick-caption">
                                          
                                        </div>
                                      </div>
                                    </Carousel>
                                  </Card>
                                </GridItem>
                              </GridContainer>
                            </div>
                          </div>
                        )
                      },
                      {
                        tabButton: "Work",
                        tabIcon: Palette,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work5}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      },
                      {
                        tabButton: "Favorite",
                        tabIcon: Favorite,
                        tabContent: (
                          <GridContainer justify="center">
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work4}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio3}
                                className={navImageClasses}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={4}>
                              <img
                                alt="..."
                                src={work2}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={work1}
                                className={navImageClasses}
                              />
                              <img
                                alt="..."
                                src={studio1}
                                className={navImageClasses}
                              />
                            </GridItem>
                          </GridContainer>
                        )
                      }
                    ]}
                  />
                </GridItem>
              </GridContainer>
    );
  }
}

export default withStyles(profilePageStyle)(ProfilePage);
