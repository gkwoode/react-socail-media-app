// import React from 'react';
import './rightbar.scss';
import VideoCallRoundedIcon from '@mui/icons-material/VideoCallRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import gkw from '../../assets/gkw.jpeg';
import godwin from '../../assets/godwin.jpg';
import elizabeth from '../../assets/elizabeth.jpg';

const Rightbar = () => {
    return (
        <div className='rightbar'>
            <div className="container">
                {/* Online Friends Section */}
                <div className="item">
                    <span className='title'>Friend Requests</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={godwin} alt="" />
                            <span>Ebenezer Dadzie</span>
                        </div>
                        <div className="buttons">
                            <button className='accept'>Accept</button>
                            <button className='decline'>Decline</button>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={gkw} alt="" />
                            <span>Nathan Yennupiak</span>
                        </div>
                    <div className="buttons">
                            <button className='accept'>Accept</button>
                            <button className='decline'>Decline</button>
                        </div>
                    </div>
                </div>
                {/* Latest Activities Section */}
                <div className="item">
                    <span className='title'>Latest Activities</span>
                    <div className="user">
                        <div className="userInfo">
                            <img src={godwin} alt="" />
                            <p><span>Ebenezer Dadzie</span> update profile picture</p>
                        </div>
                        <span className='time'>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={gkw} alt="" />
                            <p><span>Nathan Yennupiak</span> changed cover picture</p>
                        </div>
                        <span className='time'>1 min ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={elizabeth} alt="" />
                            <p><span>Elizabeth Sam</span> posted on timeline</p>
                        </div>
                        <span className='time'>2 mins ago</span>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={godwin} alt="" />
                            <p><span>Ebenezer Dadzie</span> update profile picture</p>
                        </div>
                        <span className='time'>3 mins ago</span>
                    </div>
                </div>
                {/* Pages and Profile Section */}
                {/* <div className="item">
                    <span>Pages and Profiles</span>
                </div> */}
                {/* Contacts Section */}
                <div className="item">
                    <div className="contacts">
                        <span className='title'>Contacts</span>
                        <div className="contactsIcons">
                            <div className="icon">
                                <VideoCallRoundedIcon />
                            </div>
                            <div className="icon">
                                <SearchRoundedIcon />
                            </div>
                            <div className="icon">
                                <MoreHorizRoundedIcon />
                            </div>                            
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={godwin} alt="" />
                            <div className="online"/>
                            <span>Ebenezer Dadzie</span>
                        </div>
                    </div>
                    <div className="user">
                        <div className="userInfo">
                            <img src={gkw} alt="" />
                            <div className="online"/>
                            <span>Nathan Yennupiak</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Rightbar;
