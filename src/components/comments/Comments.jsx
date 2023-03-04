import "./comments.scss";
import { useContext } from "react";
import { AuthContext } from "../../context/authAPI";

// const comments = [
//     {
//     "id": 2,
//     "name": "Riva Simenon",
//     "userId": 2,
//     "profilePicture": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
//   }, 
//   {
//     "id": 13,
//     "name": "Odette Labeuil",
//     "userId": 3,
//     "profilePicture": "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     "desc": "Hello World!",
//   },
//  {
//     "id": 6,
//     "name": "Darlene McTurk",
//     "userId": 5,
//     "profilePicture": "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//     "desc": "Love For All, Hatred For None.",
//   },
// ];

const Comments = () => {

    const {currentUser} = useContext(AuthContext);

    const comments = [
        {
        "id": 2,
        "name": "Riva Simenon",
        "userId": 2,
        "profilePicture": "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
      }, 
      {
        "id": 13,
        "name": "Odette Labeuil",
        "userId": 3,
        "profilePicture": "https://images.pexels.com/photos/1310522/pexels-photo-1310522.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "desc": "Hello World!",
      },
     {
        "id": 6,
        "name": "Darlene McTurk",
        "userId": 5,
        "profilePicture": "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "desc": "Love For All, Hatred For None.",
      },
    ];

  return (
    <div className="comments">
        <div className="write">
            <img src={currentUser.profilePicture} alt=""/>
            <input type="text" placeholder="comment" />
            <button>Send</button>
        </div>

      {comments.map((comment) => (
        <div className="comment" key={comment.id}>
            <img src={comment.profilePicture} alt=""/>
            <div className="commentInfo">
                <div className="item">
                    <span className="name">{comment.name}</span>
                    <span className="time">2 hrs ago</span>
                </div>
                <p className="commentDesc">{comment.desc}</p>
            </div>            
        </div>
      ))}
    </div>
  );
};

export default Comments;