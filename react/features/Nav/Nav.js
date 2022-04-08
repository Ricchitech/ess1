import React from 'react';
import { MdOutlineFeedback, MdHelpOutline } from 'react-icons/md';
import { FiSettings } from 'react-icons/fi';
import { createUseStyles } from 'react-jss';
import { Watermarks } from '../base/react';
import {SettingsButton, SETTINGS_TABS} from '../settings';
import downAero from '../../../images/down aero.png';


declare var interfaceConfig: Object;

const styles = createUseStyles({


     nav : {
       position: "relative",
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
        padding: "15px 0",
        width: "100vw",
       
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
        color: "#222",
    }
});


function WelcomePage() {
    const classes = styles();
  const { DEFAULT_WELCOME_PAGE_LOGO_URL, DISPLAY_WELCOME_FOOTER } = interfaceConfig;
    return (
    
     <div className={classes.nav}> 
        <a
          href="#"
          style={{ textDecoration: "none", color: 'inherit' }} >
        <img src={DEFAULT_WELCOME_PAGE_LOGO_URL} alt="Logo" className='welcome-watermark' style={{marginLeft:"10px"}} />
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
          <FiSettings size={25}  />            
          <MdHelpOutline size={25} />
          <MdOutlineFeedback size={25} />
      </div>
    </div>
    
  )
}

export default WelcomePage;
