import './leftbar.scss';
import friends from '../../assets/friends.png';
import groups from '../../assets/groups.png';
import messages from '../../assets/messages.png';
import watch from '../../assets/watch.png';
import gallery from '../../assets/gallery.png';
import marketplace from '../../assets/marketplace.png';
import events from '../../assets/events.png';
import settings from '../../assets/settings.png';
import { useContext } from 'react';
import { AuthContext } from '../../context/authAPI';

const Leftbar = () => {
    const {currentUser} = useContext(AuthContext);

    return (
        <div className='leftbar'>
            <div className="container">
                <div className="menu">
                    <div className="user">
                        <img src={currentUser.profilePicture} alt="" />
                        <span>{currentUser.name}</span>
                    </div>
                    <hr />
                    <div className="item">
                        <img src={friends} alt="" />
                        <span>Friends</span>
                    </div>
                    <div className="item">
                        <img src={groups} alt="" />
                        <span>Groups</span>
                    </div>
                    <div className="item">
                        <img src={messages} alt="" />
                        <span>Messages</span>
                    </div>
                </div>
                <hr />
                <div className="menu">
                    {/* <span className='other'>Others</span> */}
                    <div className="item">
                        <img src={gallery} alt="" />
                        <span>Gallery</span>
                    </div>
                    <div className="item">
                        <img src={watch} alt="" />
                        <span>Watch</span>
                    </div>
                    <div className="item">
                        <img src={marketplace} alt="" />
                        <span>Marketplace</span>
                    </div>
                    <div className="item">
                        <img src={events} alt="" />
                        <span>Events</span>
                    </div>
                    <div className="item">
                        <img src={settings} alt="" />
                        <span>Settings</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Leftbar;
