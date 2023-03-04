import "./profile.scss";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import PlaceIcon from '@mui/icons-material/Place';

const Profile = () => {
    return (
        <div className='profile'>
            <div className="profileContainer">
                {/* Cover Page Image */}
                <div className="coverImage">
                    <img src="https://images.pexels.com/photos/12307800/pexels-photo-12307800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                </div>
                {/* Profile Page Details */}
                <div className="profileDesc">
                    {/* Profile Image */}
                    <img src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    {/* Profile Name */}
                    <div className="profileDetails">
                        <span className="name">Christiano Ronaldo</span>
                        <div className="locationInfo">
                            <div className="location">
                                <PlaceIcon fontSize="smaller"/>
                                <span>Ghana</span>
                            </div>
                            <button>Fellow</button>
                        </div>
                    </div>

                    {/* Social Media Handles */}                   
                    <div className="socialHandles">
                        <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                            <FacebookIcon fontSize="medium"/>
                        </a>
                        <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
                            <InstagramIcon fontSize="medium"/>
                        </a>
                        <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
                            <TwitterIcon fontSize="medium"/>
                        </a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                            <LinkedInIcon fontSize="medium"/>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
