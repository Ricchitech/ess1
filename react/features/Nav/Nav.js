import React from 'react';
import logoImg from '../../../images/Group 10523.png';
import settingsIcon from '../../../images/Vector.png';
import helpIcon from '../../../images/help_outline_black_24dp (2) 1.png';
import feedbackIcon from '../../../images/feedback_black_24dp 1.png';
// import { Link, NavLink } from 'react-router-dom';
import { createUseStyles } from 'react-jss';


const styles = createUseStyles({
     nav : {
        display: "flex",
        justifyContent: "space-between",
        height: "93px",
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderBottom: "0.7px solid rgba(174, 174, 174, 1) ",
        fontFamily: "Poppins",
    },
    
    logo : {
        width: "194px",
        height: "52px",
        margin: "auto 26px",
    },
    
    buttons : {
       display: "flex",
       alignItems: "center",
       justifyContent: "space-between",
       minWidth: "237px", 
       height: "40px",
       margin: "auto 0",
    },
    
    signInButton : {
        fontWeight: "600",
        fontStyle: "normal",
        fontSize: "16px",
        color: "#649C57",
        textDecoration: "none",
    },
    
    sperator : {
        width: "30px",
        height: "0px",
        border: "0.8px solid rgba(209, 209, 209, 0.8)",
        transform: "rotate(90deg)",
    },
    
    signUpButton : {
        display: "flex",
        justifyContent : "space-between",
        alignItems: "center",
        width: "150px",
        height: "40px",
        background: "rgba(155, 208, 143, 1)",
        fontWeight: "600",
        fontStyle: "normal",
        fontSize: "16px",
        borderRadius: "8px",
        color: "rgba(255, 255, 255, 1)",
        boxShadow: "0px 0px 12px rgba(116, 200, 149, 0.4)",
        textDecoration: "none",
    },
    
    menu : {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "auto 64px",
        width: "156px",
        height: "28px",
        /* background-color: "#AEAEAE", */
    }
});


function WelcomePage() {
    const classes = styles();
    return (
    
     <div className={classes.nav}>
        <a 
          href="/"
          className={classes.logo}><img src={logoImg} alt='Logo'/>
        </a>

      <div className={classes.buttons}>
          <a
            href="#"
            style={{textDecoration:"none",color:'inherit'}} 
            className={({isActive}) => (isActive ? classes.signUpButton : classes.signInButton)}>Sign in
          </a>
          <div className={classes.sperator}></div>
          <a 
            href="#"
            style={{textDecoration:"none",color:'inherit'}} 
            className={({isActive}) => (isActive ? classes.signUpButton : classes.signInButton)}>Sign up
          </a>
      </div>

      <div className={classes.menu}>
          <a href="#"><img src={settingsIcon} alt="settings" /></a>
          <a href="#"><img src={helpIcon} alt="help" /></a>
          <a href="#"><img src={feedbackIcon} alt="feedback" /></a>
      </div>
    </div>
    
  )
}

export default WelcomePage;
