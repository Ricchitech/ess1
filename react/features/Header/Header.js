import React, { useState } from 'react';
import { BsCameraVideo } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { createUseStyles } from 'react-jss';


const styles = createUseStyles({
  body:{
    overflow: "hidden",
  },
     
    
    background : {
        position: "relative",
        height: "580px",
        backgroundImage: `url(../../../images/background.svg)`,
        backgroundColor:"#fff",
        backgroundPosition:"center",
        backgroundSize: "fill",
        backgroundRepeat: "no-repeat",
        left: "200px",
        zIndex: "1",
    },
    info : {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        /* margin-left: "100px", */
        position: "relative",
        top: "100px",
        left: "-100px",
        width: "457px",
        height: "130px",
        fontFamily: "'Poppins'",
        color: "#1A3849",
        /* background-color: "aliceblue", */
    },
    title : {
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "38px",
        lineHeight: "57px",
    },
    
    subHeading : {
        fontStyle:"normal",
        fontWeight: "400",
        fontSize: "18px",
        lineHeight: "27px",
    },
    
    buttonsMeeting : {
        display: "flex",
        justifyContent:"space-between",
        position: "relative",
        width: "365px",
        height: "166px",
        left: "-100px",
        top: "150px",
    },
    
    startNewMeeting : {
        cursor: "pointer",
        width: "166px",
        height: "166px",
        background: "#F4FFF1",
        border: "1px solid #DCDCDC",
        boxSizing: "border-box",
        borderRadius: "12px",
        color: "#649C57",
        fontFamily: "'Poppins'",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "14px",
    },
    videoImg : {
        display: "block",
        position: "relative",
        margin:"0 auto",
        top: "50px",
    },
    spanStartMeeting : {
        position: "relative",
        top: "80px",
        left: "20px",
        
    },
    dropDown : {
        position: "relative",
        top: "84px",
        display: "block",
        margin: "0 auto",
        /* left: "20px", */
    },
    
    startNewOptions : {
        /* opacity: "0", */
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        position: "relative",
        width: "166px",
        height: "97px",
        top: "50px",
        background: "#DEFFD5",
        borderRadius: "8px",
        fontFamily: "'Poppins'",
        fontStyle: "normal",
        // fontWeight: "400",
        fontSize: "13px",
        lineHeight: "20px",
        textAlign: "center",
        color: "#1A3849",
    },
    
    speratorLine : {
        position: "relative",
        width: "126px",
        height: "0px",
        /* margin: "0 auto", */
        border: "1px solid #C1C1C1",
    },
    
    JoinAMeeting : {
        width: "166px",
        height: "166px",
        background: "linear-gradient(225.17deg, #9BD08F 2.02%, #5D9E4F 100%)",
        borderRadius: "12px",
        color: "#ffff",
        fontFamily: "'Poppins'",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "14px",
    },
    plusImg : {
        display: "block",
        position: "relative",
        margin:"0 auto",
        top: "50px",
    },
    spanJoinMeeting : {
        position: "relative",
        top: "80px",
        left: "30px",
    }
    
});


function Header(props) {
  const { startMeetingNow } = props;
  const classes = styles();
  const [startMeetingOptions, setStartMeetingOptions] = useState({show:false});

  const onShowStartMeetingOptions = () => {
    setStartMeetingOptions(prevState => ({...prevState, show:!prevState.show}));
    // alert(startMeetingOptions);
  }
  
  return (
   
      <div className={classes.background}>
        <div className={classes.overlayContents}>
          <div className={classes.info}>
            <div className={classes.title}>Speakout</div>
            <div className={classes.subHeading}>Unlimited end-to-end encrypted <br/> private video call right in your browser.</div></div>
          <div className={classes.buttonsMeeting}>
            <div onClick={onShowStartMeetingOptions} className={classes.startNewMeeting}>
            <BsCameraVideo className={classes.videoImg} size={40}/>
            <span className={classes.spanStartMeeting}>Start new meeting</span>
            <MdOutlineKeyboardArrowDown className={classes.dropDown} size={22}/>
            {startMeetingOptions.show ? <div className={classes.startNewOptions}>
            <span onClick={startMeetingNow}>Start meeting</span>
            <div className={classes.speratorLine}></div>
              <span>Create link for later</span>
            </div> : ''}
          </div>
            <a style={{textDecoration:"none"}} href="#">
            <div className={classes.JoinAMeeting}>
              <AiOutlinePlus className={classes.plusImg} size={40} />
              <span className={classes.spanJoinMeeting}>Join a meeting</span>
            </div>
            </a>
            </div>
        </div>
      </div>
    
  )
}

export default Header;