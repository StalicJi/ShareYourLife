import React from "react";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singoPostTitle">
          Lorem, ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Stalic</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
          perspiciatis laudantium facilis corrupti ipsam optio expedita dolores
          quibusdam, suscipit totam voluptas placeat rerum numquam officia
          recusandae enim saepe ex nihil.Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Est perspiciatis laudantium facilis corrupti ipsam
          optio expedita dolores quibusdam, suscipit totam voluptas placeat
          rerum numquam officia recusandae enim saepe ex nihil.Lorem ipsum
          dolor, sit amet consectetur adipisicing elit. Est perspiciatis
          laudantium facilis corrupti ipsam optio expedita dolores quibusdam,
          suscipit totam voluptas placeat rerum numquam officia recusandae enim
          saepe ex nihil.Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Est perspiciatis laudantium facilis corrupti ipsam optio
          expedita dolores quibusdam, suscipit totam voluptas placeat rerum
          numquam officia recusandae enim saepe ex nihil.Lorem ipsum dolor, sit
          amet consectetur adipisicing elit. Est perspiciatis laudantium facilis
          corrupti ipsam optio expedita dolores quibusdam, suscipit totam
          voluptas placeat rerum numquam officia recusandae enim saepe ex
          nihil.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
          perspiciatis laudantium facilis corrupti ipsam optio expedita dolores
          quibusdam, suscipit totam voluptas placeat rerum numquam officia
          recusandae enim saepe ex nihil.
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
