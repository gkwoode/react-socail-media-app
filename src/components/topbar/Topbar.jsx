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
                <HomeRoundedIcon className="icon"/>
                {darkMode ? <LightModeRoundedIcon className="icon" onClick={toggleDarkMode}/> : <DarkModeRoundedIcon className="icon" onClick={toggleDarkMode}/>}
                <GridViewRoundedIcon className="icon"/>
                <div className="search">
                    <SearchRoundedIcon className="icon"/>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
            <div className="right">
                <PersonRoundedIcon className="icon"/>
                <EmailRoundedIcon className="icon"/>
                <NotificationsRoundedIcon className="icon"/>
                <div className="user">
                    <img src={currentUser.profilePicture} alt="" />
                    <span>{currentUser.name}</span>
                </div>
            </div>
        </div>
    );
}

export default Topbar;
