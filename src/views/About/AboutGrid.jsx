import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import DeveloperBoard from "@material-ui/icons/DeveloperBoard";
import PermIdentity from "@material-ui/icons/PermIdentity";

import Skills from './Skills.jsx';

import Badge from "@material-ui/core/Badge";


import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import CustomTabsAbout from "components/CustomTabsAbout/CustomTabsAbout.jsx";

import tabsStyle from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.jsx";
import SkillsBadge from './SkillsBadge.jsx';

import './AboutGrid.css';
import skills from './skills.json';

import basicsStyle from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.jsx";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: [24, 22],
      selectedEnabled: "b",
      checkedA: true,
      checkedB: false
    };
    this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleChangeEnabled(event) {
    this.setState({ selectedEnabled: event.target.value });
  }
  handleToggle(value) {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="about-grid">

      <div className={classes.sections}>
        <div className={classes.container}>

          <div className={classes.title}>
            <h2 className="about-header">About</h2>
          </div>

            {/* <div className="about-grid"> */}

            {/* <GridContainer>
              <GridItem > */}
     
              <div className={classes.description} id="about-body">
                <p>
                {/* Benjamin Shim is a full-stack developer based in Los Angeles, CA. He has spent the last seven years as an audio expert in music, entertainment &amp; digital media production working on music, TV, short films, radio, YouTube and podcasts before he decided to start a new chapter in his career as a developer. */}
                Benjamin Shim is a content creator, digital media producer and musician turned developer. After spending seven years as an audio expert in music, entertainment (including TV, short films &amp; radio) and digital media production (including YouTube &amp; podcasts), he is making a transition to a new career in webdevelopment.
                <br />
                <br />
  
                {/* He is also a musician, content creator and digital media producer specializing in music and audio for short-form visual content. */}
                Why? After working in the entertainment industry creating content, he now looks to create a new type of product leveraging a coding skill set gained from UCLA Extension's Coding Bootcamp and 1000+ hours of practice. He specializes in the MERN stack with his strengths in JavaScript for both front end and back end development.
                <br />
                <br />
  
                {/* He spends his spare time producing content for his podcast and YouTube channel, Kinda Neat, which has amassed over 250,000 subscribers and 60 million views to-date. Subscribe <a href="https://youtube.com/kindaneat" target="_blank">here</a>. */}
                On his free time, he works on his YouTube channel which has accumulated over 250,000 subscribers and 65 million views to date. Check it out <a href="https://youtube.com/kindaneat" target="_blank">here</a>.
                <br />
                <br />
                </p>
              </div>
              {/* </GridItem>
            </GridContainer> */}
            {/* </div> */}

          <div id="skills-div">
            <Skills />
          </div>
          </div>

        </div>
      </div>
    );
  }
}

export default withStyles(basicsStyle)(About);
