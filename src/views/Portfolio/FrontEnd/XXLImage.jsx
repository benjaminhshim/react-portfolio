import React from "react";
import Paper from '@material-ui/core/Paper';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import javascriptStyles from "assets/jss/material-kit-react/views/componentsSections/javascriptStyles.jsx";
import SlowShiverCarousel from "./SlowShiverCarousel";
import frontEndInfo from './frontEnd.json';

import './CarouselFrontEnd.css';



function Transition(props) {
  return <Slide direction="down" {...props} />;
}

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });
class XXLImage extends React.Component {
    anchorElLeft = null;
    anchorElTop = null;
    anchorElBottom = null;
    anchorElRight = null;
    constructor(props) {
      super(props);
      this.state = {
        classicModal: false,
        openLeft: false,
        openTop: false,
        openBottom: false,
        openRight: false
      };
    }
    handleClickOpen(modal) {
      var x = [];
      x[modal] = true;
      this.setState(x);
    }
    handleClose(modal) {
      var x = [];
      x[modal] = false;
      this.setState(x);
    }
    handleClosePopover(state) {
      this.setState({
        [state]: false
      });
    }
    handleClickButton(state) {
      this.setState({
        [state]: true
      });
    }
    render() {
        const { classes } = this.props;
        console.log(this.props.github);
        return (
            <div>
                <div className="xxl-card-front">
                {/* <Paper> */}
                    <div className="carousel-img" style={{borderRadius: "6px"}}>
                        <img
                            src={require(`assets/img/${this.props.src}`)}
                            alt="first slide"
                            className="slick-image"
                            style={{borderRadius: "6px"}}

                        />
                        <div className="overlay" onClick={() => this.handleClickOpen("classicModal")}>
                            <h4 className="learn-more">Learn More</h4>
                        </div>
                    </div>
                {/* </Paper> */}
                </div>

                 {/* <div className={classes.section}>
                   <div className={classes.container}> */}
                <div>
                    <div>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={6} lg={8}>
                                <GridContainer>
                                    <GridItem xs={12} sm={12} md={6} lg={8}>
                                        <Dialog
                                            classes={{
                                            root: classes.center,
                                            paper: classes.modal
                                            }}
                                            open={this.state.classicModal}
                                            TransitionComponent={Transition}
                                            keepMounted
                                            onClose={() => this.handleClose("classicModal")}
                                            aria-labelledby="classic-modal-slide-title"
                                            aria-describedby="classic-modal-slide-description"
                                        >

                                            <DialogContent>
                                            <div style={{borderRadius: "6px", marginTop: "25px"}}>
                                            
                                                    <Card>
                                                    <img 
                                                    src={require(`assets/img/${this.props.src}`)}
                                                    width="100%" 
                                                    height="100%"
                                                    style={{borderRadius: "6px"}}
                                                   />
                                                                                                          
                                                 </Card>
                                                

                                                </div>
                                            </DialogContent>
                                          
                                            <DialogContent
                                                id="classic-modal-slide-description"
                                                className={classes.modalBody}
                                            >
                                                <div className="modal-body-content" id="xxl-modal-body" style={{fontFamily: "Avenir"}}>
                                                    <h3 style={{fontFamily: "inherit"}}><strong>{this.props.title}</strong></h3>
                                                    <h5 style={{fontFamily: "inherit"}}><em>{this.props.role}</em></h5>

                                                    <hr />
                                                    <h5 style={{fontFamily: "inherit", fontSize: "14px"}}>{this.props.info}</h5>
                                                    {/* <h5><strong>Role:</strong> {this.props.role}</h5> */}

                                                    {this.props.href !== null && 
                                                        <p style={{float: "right"}}>
                                                            <a 
                                                                href={this.props.href} 
                                                                target="_blank"
                                                                style={{color: "teal", fontWeight: '900', fontFamily: "Avenir"}}>
                                                                <Button color="info">
                                                                View Site
                                                                </Button>
                                                            </a>
                                                        </p>
                                                    }

                                                    {this.props.github !== null &&
                                                        <p style={{float: "right"}}>
                                                            <a href={this.props.github} target="_blank">
                                                                <Button color="info">View Repo</Button>
                                                            </a>
                                                        </p> 
                                                    }

                                                    {this.props.github === null && this.props.href === null &&
                                                        <p style={{float: "right"}}>
                                                            <a target="_blank">
                                                                <Button color="info">Coming Soon</Button>
                                                            </a>
                                                        </p>                                                     }
                                                    
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </GridItem>
                                </GridContainer>
                            </GridItem>
                        </GridContainer>
                    </div>
                </div>
            </div>
        )
    }

}




export default withStyles(javascriptStyles)(XXLImage);