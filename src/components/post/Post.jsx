import "./post.scss";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import ThumbUpOffAltRoundedIcon from '@mui/icons-material/ThumbUpOffAltRounded';
import { Link } from "@mui/material";
import { useState } from "react";
import Comments from "../comments/Comments";

const Post = ({post}) => {

    // const [liked, setLiked] = useState(false);
    const liked = false;
    
    const [commentOpen, setComments] = useState(false);

    return (
        <div className="post">
            <div className="container">
                <div className="user">

                    {/* UserInfo: Image, Name, When posted, and Option */}
                    <div className="userLeft">
                        <Link to={`/profile/${post.userId}`}>
                            <img src={post.profilePicture} alt="" />
                        </Link>
                        <div className="details">
                            <Link to={`/profile/${post.userId}`} style={{textDecoration: "none"}}>
                                <span className="name">{post.name}</span>
                            </Link>
                            <span className="time">1 hour ago</span>
                        </div>
                    </div>
                    <div className="userRight">
                        <MoreHorizOutlinedIcon />
                    </div>
                </div>
                
                {/* PostInfo: Description and Media */}
                <div className="postInfo">
                    <span>{post.desc}</span>
                    <img src={post.profilePicture} alt="" />
                </div>

                <hr />

                {/* PostActions: Like, Comment, and Share */}
                <div className="postActions">
                    <div className="like">
                        {!liked ? <ThumbUpOutlinedIcon /> : <ThumbUpOffAltRoundedIcon/>}
                        <span>Like</span>
                    </div>
                    <div className="comment" onClick={()=>setComments(!commentOpen)}>
                        <TextsmsOutlinedIcon />
                        <span>Comment</span>
                    </div>
                    <div className="share">
                        <ShareOutlinedIcon />
                        <span>Share</span>
                    </div>
                </div>

                {/* PostComments: Comments */}
                {/* {commentOpen && <Comments comments={commentOpen} />} */}
                {commentOpen && <Comments/>}
            </div>
        </div>
    )
}

export default Post;
