import "./stories.scss"
import { AuthContext } from "../../context/authAPI";
import { useContext } from "react";
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
// import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';

// Dummy data
const stories = [ 
	{
        "id": 2,
        "name": "Riva Simenon",
        "img": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }, 
      {
        "id": 13,
        "name": "Odette Labeuil",
        "img": "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
     {
        "id": 6,
        "name": "Darlene McTurk",
        "img": "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }, 
      {
        "id": 17,
        "name": "Kimberly Boorer",
        "img": "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }, 
      {
        "id": 20,
        "name": "Obie Glanfield",
        "img": "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      }, 
    //   {
    //     "id": 7,
    //     "name": "Guglielma Ezele",
    //     "img": "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //   }, 
    //   {
    //     "id": 10,
    //     "name": "Agnella Boulger",
    //     "img": "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //   }, 
    //   {
    //     "id": 19,
    //     "name": "Irma Chatel",
    //     "img": "https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //   }, 
    //   {
    //     "id": 4,
    //     "name": "Pearline Huegett",
    //     "img": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"      
    // }, 
    // {
    //     "id": 16,
    //     "name": "Freida Summerton",
    //     "img": "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    //   }
]

const Stories = () => {
    const {currentUser} = useContext(AuthContext);

    return (
        <div className='stories'>
            <div className="container">
              <div className="titleContainer">
                <div className="titleStory title">
                  <AutoStoriesRoundedIcon className='storyIcon' />
                  <span>Stories</span>
                </div>
                {/* Update Reels */}
                {/* <div className="titleReel title">
                  <SubscriptionsRoundedIcon className='reelIcon' />
                  <span>Reels</span>
                </div> */}
              </div>
              <hr />
              <div className="storyContainer">
                {/* Stories Text Heading Should Be Here */}
                <div id="user">
                    <img src={currentUser.profilePicture} alt="" />
                     <span>{/* {currentUser.name} */}
                        <div>
                          <AddCircleRoundedIcon className='addIcon' />
                        </div>
                        <p>Add to Story</p>
                    </span>
                </div>
                {stories.map(story => (
                    <div className='story' key={story.id}>
                        <img src={story.img} alt="" />
                        <span>{story.name}</span>
                    </div>
                ))}
              </div>
            </div>
        </div>
    );
}

export default Stories;