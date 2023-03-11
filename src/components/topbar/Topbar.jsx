import "./topbar.scss";
import { Link } from "react-router-dom";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded';
import { useContext } from "react";
import { DarkModeContext } from "../../context/darkModeAPI";
import { AuthContext } from "../../context/authAPI";


const Topbar = () => {
    const {toggleDarkMode, darkMode} = useContext(DarkModeContext);
    const {currentUser} = useContext(AuthContext);

    return (
        <div className="topbar">
            <div className="left">
                <Link to="/" style={{textDecoration: "none"}}>
                    <span>gksocial</span>
                </Link>
                <div className="icons">
                    <HomeRoundedIcon className="icon"/>
                </div>
                <div className="icons mobileIcon">
                    {darkMode ? <LightModeRoundedIcon className="icon" onClick={toggleDarkMode}/> :
                     <DarkModeRoundedIcon className="icon" onClick={toggleDarkMode}/>}
                </div>
                <div className="icons">
                    <GridViewRoundedIcon className="icon"/>
                </div>
                <div className="search">
                    <SearchRoundedIcon className="icon"/>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="right">
                <div className="icons">
                    <PersonRoundedIcon className="icon"/>
                </div>
                <div className="icons mobileIcon">
                    <EmailRoundedIcon className="icon"/>
                </div>
                <div className="icons mobileIcon">
                    <NotificationsRoundedIcon className="icon"/>
                </div>
                <div className="darkThemeIcon mobileIcon">
                    {darkMode ? <LightModeRoundedIcon className="icon" onClick={toggleDarkMode}/> :
                     <DarkModeRoundedIcon className="icon" onClick={toggleDarkMode}/>}
                </div>
                <div className="user">
                    <img src={currentUser.profilePicture} alt="" />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
