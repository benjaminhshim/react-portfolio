import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Code from "@material-ui/icons/Code";
import Storage from "@material-ui/icons/Storage";
import StayCurrentPortrait from "@material-ui/icons/StayCurrentPortrait";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

import skillsIcons from './skills.json';

class Skills extends React.Component {
  state = {

  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>Skills</h2>
            <h5 className={classes.description}>
              MERN Stack
            </h5>
            
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Front End"
                description="HTML5. CSS3. JavaScript. React. jQuery."
                icon={Code}
                iconColor="info"
                vertical
              />
              {/* <img className="skills-icon" src={require(`../../assets/img/icons/html-icon.png`)}/>
              <img className="skills-icon" src={require(`../../assets/img/icons/css-icon.png`)}/>
              <img className="skills-icon" src={require(`../../assets/img/icons/javascript-icon.png`)}/>
              <img className="skills-icon" src={require(`../../assets/img/icons/react-icon.png`)}/>
              <img className="skills-icon" src={require(`../../assets/img/icons/jquery-icon.png`)}/> */}
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Back End"
                description="Node.js. Express.js. MySQL. MongoDB."
                icon={Storage}
                iconColor="info"
                vertical
              />

              {/* <img className="skills-icon" src={require(`../../assets/img/icons/node-icon.png`)}/>
              <img className="skills-icon" src={require(`../../assets/img/icons/mysql-icon.png`)}/>
              <img className="skills-icon" src={require(`../../assets/img/icons/mongo-icon.png`)}/> */}
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <InfoArea
                title="Mobile"
                description="React Native."
                icon={StayCurrentPortrait}
                iconColor="info"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(Skills);
