import React, { useState } from "react";
import { AllPostsIcon, ArrowPath, CommentIcon, LikeIcon, PhotoIcon, ReelsFullFill, ReelsIcon, ViewIcon } from "../Media/Svgicons";

interface LoadedFeedProps {
  responseObj: {
    message?: string;
    feed: {
      data: Array<{
        media_type: number;
        video_versions: Array<{
          url: string;
        }>;
        image_versions2: {
          candidates: Array<{
            url: string;
          }>;
        };
        carousel_media?: Array<{
          image_versions2: {
            candidates: Array<{
              url: string;
            }>;
          };
        }>;
        view_count: number;
        like_count: number;
        comment_count: number;
      }>;
    };
    profile_pic_url: string;
    username: string;
    full_name: string;
    media_count: number;
    follower_count: number;
    following_count: number;
    biography: string;
  };
}

const LoadedFeed: React.FC<LoadedFeedProps> = (props) => {

  const [postType, setPostType] = useState< number >(1)
  
  const handlerPostType = (postType : number) =>{
    setPostType(postType);
  }


  const responseObj = props.responseObj;

  function forceDownload(url: string, fileName: string) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function () {
      var urlCreator = window.URL || window.webkitURL;
      var imageUrl = urlCreator.createObjectURL(this.response);
      var tag = document.createElement("a");
      tag.href = imageUrl;
      tag.download = fileName;
      document.body.appendChild(tag);
      tag.click();
      document.body.removeChild(tag);
    };
    xhr.send();
  }
  function reloadAndClearCache() {
    localStorage.clear();
    window.location.reload();
  }

  const storyArray = responseObj.feed.data;
  if (!storyArray) {
    return (
      <>
        <header className="user-info">
          <img
            src={responseObj.profile_pic_url}
            className="profile-picture"
            alt="Profile"
          />
          <div className="right-section">
            <h3>{responseObj.username}</h3>
            <p>{responseObj.full_name}</p>
          </div>
        </header>
        <div className="error-page">
          <h1>No profile Found</h1>
          <p>User has Private Profile</p>
        </div>
      </>
    );
  }
  return (
    <div className="flex gap-8 flex-col">
      <article className="profile-description">
        <div className="profile-header flex sm:gap-x-14 gap-x-5">
          <img
            src={responseObj.profile_pic_url}
            className="profile-picture sm:w-[150px] sm:h-[150px] w-[100px] h-[100px] rounded-full my-auto"
            alt="Profile"
          />
          <section className="profile-counts flex flex-col gap-y-5 ">
            <h4 className=" lg:text-[3rem] text-[1.5rem] ">
              {responseObj.username}{" "}
            </h4>
            <div className="flex gap-x-5 lg:text-base text-sm">
              <div className=" ">
                <h6>
                  Posts{" "}
                  <span className=" font-extrabold">
                    {responseObj.media_count}
                  </span>
                </h6>
              </div>
              <div className="">
                <h6>
                  Followers{" "}
                  <span className=" font-extrabold">
                    {responseObj.follower_count}
                  </span>
                </h6>
              </div>
              <div className="">
                <h6>
                  Followings{" "}
                  <span className=" font-extrabold">
                    {responseObj.following_count}
                  </span>
                </h6>
              </div>
              {responseObj.full_name !== "" ||
                (responseObj.biography !== "" && (
                  <div className="following-count flex">
                    <p className="fullname">
                      Full Name : {responseObj.full_name}
                    </p>
                    <p className="bio">Profile Bio : {responseObj.biography}</p>
                  </div>
                ))}
            </div>
            <div className="following-count flex lg:text-base text-sm">
              <p className="bio"> {responseObj.biography}</p>
            </div>
          </section>
          <button
            onClick={reloadAndClearCache}
            className=" relative sm:right-0 right-10 ml-auto mb-auto bg-sky-500 font-bold uppercase text-sm px-5 py-2.5 rounded-lg text-white inline-flex items-center justify-center gap-x-2"
          >
            <span className="sm:block hidden"> Dowloadr other </span>
            <ArrowPath size=" w-5 h-5 " />{" "}
          </button>
        </div>
      </article>
      <nav className=" text-center border-t-2 border-black/20">
        <ul className=" inline-flex sm:gap-x-10 gap-x-5 mx-auto -mt-0.5">
          <li className=" ">
            <button
              className={` ${
                postType === 1
                  ? "opacity-100 border-t-2 border-black"
                  : " opacity-50"
              } uppercase sm:text-sm text-xs tracking-wider font-semibold pt-7 flex items-center justify-center gap-x-2`}
              type="button"
              onClick={() => handlerPostType(1)}
            >
              <AllPostsIcon /> All posts
            </button>
          </li>
          <li className=" ">
            <button
              className={` ${
                postType === 2
                  ? "opacity-100 border-t-2 border-black"
                  : " opacity-50"
              } uppercase sm:text-sm text-xs tracking-wider font-semibold pt-7 flex items-center justify-center gap-x-2`}
              type="button"
              onClick={() => handlerPostType(2)}
            >
              <ReelsIcon size="w-3 h-3" /> Video/Reels/Igtv
            </button>
          </li>
          <li className=" ">
            <button
              className={` ${
                postType === 3
                  ? "opacity-100 border-t-2 border-black"
                  : " opacity-50"
              } uppercase sm:text-sm text-xs tracking-wider font-semibold pt-7 flex items-center justify-center gap-x-2`}
              type="button"
              onClick={() => handlerPostType(3)}
            >
              <PhotoIcon size="w-3 h-3" /> Photo
            </button>
          </li>
        </ul>
      </nav>
      <section className="grid sm:grid-cols-3 grid-cols-2 sm:gap-2">
        {postType === 1 &&
          storyArray.map((element, index) => {
            if (element.media_type === 2) {
              if (element.video_versions && element.video_versions[0]?.url) {
                return (
                  <div className="story-item  relative" key={index}>
                    {/* <video className="story-item w-full" key={index} controls>
                      <source
                        src={element.video_versions[0].url}
                        className="story-media"
                        type="video/webm"
                      ></source>
                    </video> */}
                    <img
                      src={element.image_versions2.candidates[4].url}
                      className=" w-full h-[50vw] sm:h-[25vw] object-cover "
                      alt="Download Instagram Video, Photo, Reels, Story, IGTV | FastSaveInsta"
                    />
                    <div className=" absolute right-0 top-0 m-2">
                      <ReelsFullFill />
                    </div>
                    <div className=" gap-y-5 absolute top-0 w-full h-full flex items-center justify-center flex-col bg-black/20 text-white backdrop-blur-sm opacity-0 transition-opacity hover:opacity-100 z-10">
                      <div className="likes flex gap-x-4">
                        <div className=" flex gap-x-1 font-bold">
                          <LikeIcon /> <p>{element.like_count}</p>
                        </div>
                        <div className=" flex gap-x-1 font-bold">
                          <ViewIcon /> <p>{element.view_count}</p>
                        </div>
                        <div className=" flex gap-x-1 font-bold">
                          <CommentIcon /> <p>{element.comment_count}</p>
                        </div>
                      </div>
                      <button
                        className="buttonDownload"
                        onClick={() =>
                          forceDownload(
                            element.video_versions[0].url,
                            `video_${index}.mp4`
                          )
                        }
                      >
                        Download Video
                      </button>
                    </div>
                  </div>
                );
              }
            }
            if (element.media_type === 1) {
              if (
                element.image_versions2 &&
                element.image_versions2.candidates[4]?.url
              ) {
                return (
                  <div className="story-item  relative" key={index}>
                    <img
                      src={element.image_versions2.candidates[4].url}
                      className=" w-full h-[50vw] sm:h-[25vw] object-cover "
                      alt="Download Instagram Video, Photo, Reels, Story, IGTV | FastSaveInsta"
                    />
                    <div className=" gap-y-5 absolute top-0 w-full h-full flex items-center justify-center flex-col bg-black/20 text-white backdrop-blur-sm opacity-0 transition-opacity hover:opacity-100 z-10">
                      <div className="likes flex gap-x-4">
                        <div className=" flex gap-x-1 font-bold">
                          <LikeIcon /> <p>{element.like_count}</p>
                        </div>
                        <div className=" flex gap-x-1 font-bold">
                          <ViewIcon /> <p>{element.view_count}</p>
                        </div>
                        <div className=" flex gap-x-1 font-bold">
                          <CommentIcon /> <p>{element.comment_count}</p>
                        </div>
                      </div>
                      <button
                        className="buttonDownload"
                        onClick={() =>
                          forceDownload(
                            element.image_versions2.candidates[4].url,
                            `image_${index}.jpg`
                          )
                        }
                      >
                        Download Image
                      </button>
                    </div>
                  </div>
                );
              }
            }
            if (element.media_type === 8) {
              if (
                element.carousel_media &&
                element.carousel_media[0]?.image_versions2.candidates[0]?.url
              ) {
                return (
                  <div className="story-item  relative" key={index}>
                    <img
                      src={
                        element.carousel_media[0].image_versions2.candidates[0]
                          .url
                      }
                      className=" w-full h-[50vw] sm:h-[25vw] object-cover "
                      alt="Download Instagram Video, Photo, Reels, Story, IGTV | FastSaveInsta"
                    />
                    <div className=" gap-y-5 absolute top-0 w-full h-full flex items-center justify-center flex-col bg-black/20 text-white backdrop-blur-sm opacity-0 transition-opacity hover:opacity-100 z-10">
                      <div className="likes flex gap-x-4">
                        <div className=" flex gap-x-1 font-bold">
                          <LikeIcon /> <p>{element.like_count}</p>
                        </div>
                        <div className=" flex gap-x-1 font-bold">
                          <ViewIcon /> <p>{element.view_count}</p>
                        </div>
                        <div className=" flex gap-x-1 font-bold">
                          <CommentIcon /> <p>{element.comment_count}</p>
                        </div>
                      </div>
                      <button
                        className="buttonDownload"
                        onClick={() =>
                          forceDownload(
                            element.image_versions2.candidates[4].url,
                            `image_${index}.jpg`
                          )
                        }
                      >
                        Download Image
                      </button>
                    </div>
                  </div>
                );
              }
            }
          })}
        {postType === 2 &&
          storyArray.map((element, index) => {
            if (element.media_type === 2) {
              if (element.video_versions && element.video_versions[0]?.url) {
                return (
                  <div className="story-item  relative" key={index}>
                    {/* <video className="story-item w-full" key={index} controls>
                      <source
                        src={element.video_versions[0].url}
                        className="story-media"
                        type="video/webm"
                      ></source>
                    </video> */}
                    <img
                      src={element.image_versions2.candidates[4].url}
                      className=" w-full h-[50vw] sm:h-[25vw] object-cover "
                      alt="Download Instagram Video, Photo, Reels, Story, IGTV | FastSaveInsta"
                    />
                    <div className=" gap-y-5 absolute top-0 w-full h-full flex items-center justify-center flex-col bg-black/20 text-white backdrop-blur-sm opacity-0 transition-opacity hover:opacity-100 z-10">
                      <div className="likes flex gap-x-4">
                        <div className=" flex gap-x-1 font-bold">
                          <LikeIcon /> <p>{element.like_count}</p>
                        </div>
                        <div className=" flex gap-x-1 font-bold">
                          <ViewIcon /> <p>{element.view_count}</p>
                        </div>
                        <div className=" flex gap-x-1 font-bold">
                          <CommentIcon /> <p>{element.comment_count}</p>
                        </div>
                      </div>
                      <button
                        className="buttonDownload"
                        onClick={() =>
                          forceDownload(
                            element.video_versions[0].url,
                            `video_${index}.mp4`
                          )
                        }
                      >
                        Download Video
                      </button>
                    </div>
                  </div>
                );
              }
            }
          })}
        {postType === 3 &&
          storyArray.map((element, index) => {
            if (element.media_type === 1) {
              if (
                element.image_versions2 &&
                element.image_versions2.candidates[4]?.url
              ) {
                return (
                  <div className="story-item  relative" key={index}>
                    <img
                      src={element.image_versions2.candidates[4].url}
                      className=" w-full h-[50vw] sm:h-[25vw] object-cover "
                      alt="Download Instagram Video, Photo, Reels, Story, IGTV | FastSaveInsta"
                    />
                    <div className=" gap-y-5 absolute top-0 w-full h-full flex items-center justify-center flex-col bg-black/20 text-white backdrop-blur-sm opacity-0 transition-opacity hover:opacity-100 z-10">
                      <div className="likes flex gap-x-4">
                        <div className=" flex gap-x-1 font-bold">
                          <LikeIcon /> <p>{element.like_count}</p>
                        </div>
                        <div className=" flex gap-x-1 font-bold">
                          <ViewIcon /> <p>{element.view_count}</p>
                        </div>
                        <div className=" flex gap-x-1 font-bold">
                          <CommentIcon /> <p>{element.comment_count}</p>
                        </div>
                      </div>
                      <button
                        className="buttonDownload"
                        onClick={() =>
                          forceDownload(
                            element.image_versions2.candidates[4].url,
                            `image_${index}.jpg`
                          )
                        }
                      >
                        Download Image
                      </button>
                    </div>
                  </div>
                );
              }
            }
            if (element.media_type === 8) {
              if (
                element.carousel_media &&
                element.carousel_media[0]?.image_versions2.candidates[0]?.url
              ) {
                return (
                  <div className="story-item  relative" key={index}>
                    <img
                      src={
                        element.carousel_media[0].image_versions2.candidates[0]
                          .url
                      }
                      className=" w-full h-[25vw] object-cover "
                      alt="Download Instagram Video, Photo, Reels, Story, IGTV | FastSaveInsta"
                    />
                    <div className=" gap-y-5 absolute top-0 w-full h-full flex items-center justify-center flex-col bg-black/20 text-white backdrop-blur-sm opacity-0 transition-opacity hover:opacity-100 z-10">
                      <div className="likes flex gap-x-4">
                        <div className=" flex gap-x-1 font-bold">
                          <LikeIcon /> <p>{element.like_count}</p>
                        </div>
                        <div className=" flex gap-x-1 font-bold">
                          <ViewIcon /> <p>{element.view_count}</p>
                        </div>
                        <div className=" flex gap-x-1 font-bold">
                          <CommentIcon /> <p>{element.comment_count}</p>
                        </div>
                      </div>
                      <button
                        className="buttonDownload"
                        onClick={() =>
                          forceDownload(
                            element.image_versions2.candidates[4].url,
                            `image_${index}.jpg`
                          )
                        }
                      >
                        Download Image
                      </button>
                    </div>
                  </div>
                );
              }
            }
          })}
      </section>
    </div>
  );
};

export default LoadedFeed;
