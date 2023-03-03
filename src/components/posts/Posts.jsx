import "./posts.scss";
import Post from "../post/Post";

const posts = [ 
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
      {
        "id": 17,
        "name": "Kimberly Boorer",
        "userId": 6,
        "profilePicture": "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "desc": "Change the world by being yourself.",
      }, 
      {
        "id": 20,
        "name": "Obie Glanfield",
        "userId": 8,
        "profilePicture": "https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "desc": "Every moment is a fresh beginning.",
      }, 
      {
        "id": 7,
        "name": "Guglielma Ezele",
        "userId": 9,
        "profilePicture": "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "desc": "Never regret anything that made you smile. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      }, 
      {
        "id": 10,
        "name": "Agnella Boulger",
        "userId": 10,
        "profilePicture": "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "desc": "Die with memories, not dreams. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      }, 
      {
        "id": 19,
        "name": "Irma Chatel",
        "userId": 13,
        "profilePicture": "https://images.pexels.com/photos/1821095/pexels-photo-1821095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "desc": "Whatever you do, do it well. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
      }, 
      {
        "id": 4,
        "name": "Pearline Huegett",
        "userId": 14,
        "profilePicture": "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "desc": "Better days are yet to come." 
    }, 
    {
        "id": 16,
        "name": "Freida Summerton",
        "userId": 15,
        "profilePicture": "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        "desc": "Never regret anything that made you smile."
      }
]

const Posts = () => {
    return (
        <div className='posts'>
            {posts.map(post => (
                <Post post={post} key={post.id}/>
            ))}
        </div>
    );
}

export default Posts;
