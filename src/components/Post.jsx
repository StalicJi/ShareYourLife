import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          <Link to="/post/:postId" className="link">
            Lorem ipsum dolor sit, amet
          </Link>
        </span>
        <hr />
        <span className="postDate">1 hous ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, illo
        vero! Reiciendis illo doloribus aliquid cupiditate qui sunt repudiandae
        necessitatibus, unde quaerat quam, non illum. Unde maxime libero
        voluptate accusantium! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Dolor, illo vero! Reiciendis illo doloribus aliquid
        cupiditate qui sunt repudiandae necessitatibus, unde quaerat quam, non
        illum. Unde maxime libero voluptate accusantium! Lorem ipsum dolor sit
        amet consectetur adipisicing elit. Dolor, illo vero! Reiciendis illo
        doloribus aliquid cupiditate qui sunt repudiandae necessitatibus, unde
        quaerat quam, non illum. Unde maxime libero voluptate accusantium!
      </p>
    </div>
  );
};

export default Post;
