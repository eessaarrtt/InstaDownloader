"use client";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import LoadedFeed from "./LoadedFeed";
import { IgtvIcon, LoadedIcon, PhotoIcon, ReelsIcon, StoriesIcon, VideoIcon } from "../Media/Svgicons";

interface ResponseObj {
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
}

const Feed = () => {
  const [userId, setUserId] = useState("");
  const [responseObj, setResponseObj] = useState<ResponseObj>({
    feed: {
      data: [],
    },
    profile_pic_url: "",
    username: "",
    full_name: "",
    media_count: 0,
    follower_count: 0,
    following_count: 0,
    biography: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    const storedResponseObj = localStorage.getItem("responseObj");
    if (storedResponseObj) {
      setResponseObj(JSON.parse(storedResponseObj));
      setHasLoaded(true);
    }
  }, []);

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    if (userId.length === 0) {
      alert("Empty Username!");
      return;
    }
    setIsLoading(true);
    fetchProfile();
  }

  function onChangehandler(e: ChangeEvent<HTMLInputElement>) {
    setUserId(e.target.value);
  }

  async function fetchProfile() {
    const id = userId;
    const response = await fetch(
      `https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/ig_profile?ig=${id}&response_type=feeds&corsEnabled=true`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "8b5d568d52mshecc6f312461c5a7p12604ajsnd1e56b9cb8f2",
          "x-rapidapi-host": "instagram-bulk-profile-scrapper.p.rapidapi.com",
        },
      }
    );
    const data = await response.json();
    setResponseObj(data[0]);
    setIsLoading(false);
    setHasLoaded(true);
    localStorage.setItem("responseObj", JSON.stringify(data[0]));
  }
  

  return (
    <section id="story-section">
      {isLoading && <LoadedIcon />}
      {hasLoaded ? (
        <LoadedFeed responseObj={responseObj} />
      ) : (
        <div className=" absolute w-screen  left-0 top-0 bg-gradient-to-r from-violet-600 to-indigo-600 z-0 ">
          <div className="container   py-28 flex flex-col items-center justify-center mx-auto gap-y-10 text-white">
            <div className=" text-center w-full">
              <div className="">
                <ul className=" inline-flex w-full">
                  <li className="inline-flex justify-center py-3 gap-x-2 w-full bg-white/50 uppercase border-r rounded-s-md">
                    <VideoIcon /> <span className=" hidden sm:block">Video</span>
                  </li>
                  <li className="inline-flex justify-center py-3 gap-x-2 w-full bg-white/50 uppercase border-r ">
                    <PhotoIcon size="w-6 h-6" /> <span className=" hidden sm:block">Photo</span>
                  </li>
                  <li className="inline-flex justify-center py-3 gap-x-2 w-full bg-white/50 uppercase border-r ">
                    <ReelsIcon size="w-6 h-6 invert" /> <span className=" hidden sm:block">Reels</span>
                  </li>
                  <li className="inline-flex justify-center py-3 gap-x-2 w-full bg-white/50 uppercase border-r ">
                    <IgtvIcon size="w-6 h-6" /> <span className=" hidden sm:block">Igtv</span>
                  </li>
                  <li className="inline-flex justify-center py-3 gap-x-2 w-full bg-white/50 uppercase rounded-e-md">
                    <StoriesIcon size="w-6 h-6" /> <span className=" hidden sm:block">Stories</span>
                  </li>
                </ul>
              </div>
              <h1 className=" text-4xl font-black uppercase mt-10">
                Fast Instagram Downloader
              </h1>
              <h2>
                Download Videos, Photos, Reels, Stories and IGTV from Instagram
              </h2>
            </div>
            <form className="input-form" onSubmit={submitHandler}>
              <input
                type="text"
                className=" w-[50vw]  h-[50px] rounded-s-md border-2 text-black font-bold pl-2 focus:outline-none focus:border-sky-500"
                onChange={onChangehandler}
                placeholder="Enter Username"
              />
              <input
                type="submit"
                className=" h-[50px] rounded-e-md hover:cursor-pointer bg-sky-500  px-5 text-white "
                value="Search"
              />
            </form>
            <div className="mt-5 space-y-4">
              <h2 className=" text-3xl font-black ">
                Why should you use FastSaveInsta - Instagram Downloader?
              </h2>
              <p>
                <strong>What is Instagram?</strong> Instagram (often abbreviated
                as IG or Insta) is a social network that allows users to share
                popular photos and videos. Users can download the free Instagram
                app on iOS and Android platforms to enjoy a variety of
                experiences by photo, story, reels and video editing modes.
              </p>
              <p>
                Every day, millions of new photos and videos are posted on
                Instagram, but Instagram does not allow users to download and
                store photos and videos to your device. The best way to get
                Instagram content is through third-party sites like{" "}
                <strong>FastSaveInsta</strong> downloader.
              </p>
              <p>
                <b>Features of FastSaveInsta:</b>
              </p>
              <div className="mg-left-15">
                <p>
                  - <b>Download Instagram Video</b>: FastSaveInsta allow
                  download videos from Instagram (IG, Insta) with HD video
                  quality (without changing the quality of the original video).
                </p>
                <p>
                  - <b>Instagram Photo Download</b>: Instagram Photo Downloader
                  on FastSaveInsta makes it easy to download and save Instagram
                  images easily. Allows image download of any Insta post.
                </p>
                <p>
                  - <b>Download Instagram Reels Video</b>: FastSaveInsta.app
                  allows you to download Instagram Reels videos in mp4 format on
                  all devices (PC, Mac, Android, iOS).
                </p>
                <p>
                  - <b>Download IGTV Video</b>: IGTV is a long video on
                  Instagram, FastSaveInsta supports download IGTV videos to your
                  device for storage or playback when there is no 3G, wifi
                  connection.
                </p>
                <p>
                  - <b>Download Instagram Story</b>: Instagram Story is a
                  combination of photos and videos, creating a story that users
                  want to share with the world. Using{" "}
                  <strong>FastSaveInsta.app</strong>, you can download Instagram
                  Stories to view them offline.
                </p>
                <p>
                  - <b>Private Downloader</b>: This feature allows you to
                  download private Instagram photos, videos, stories, reels and
                  IGTV without installing software.
                </p>
              </div>
            </div>
            <div className="mt-5 space-y-4">
              <h2 className=" text-3xl font-black ">
                How to download photos and videos on Instagram?
              </h2>
              <p>
                <b>Step 1</b>: Open the Instagram app on phone or go to the{" "}
                <a target="_blank" href="https://www.instagram.com">
                  Instagram.com
                </a>{" "}
                website on PC and login your account.
              </p>
              <p>
                <b>Step 2</b>: Find the content you want to download and click
                on the icon (...) above the post and then continue pressing the{" "}
                <strong>Copy Link</strong> option.
              </p>
              <p>
                <img
                  src="https://SaveInsta.app/imgs/copy-link-min.jpg"
                  alt="FastSaveInsta"
                  className=" mx-auto "
                />
              </p>
              <p>
                <b>Step 3</b>: Go to the website{" "}
                <a target="_blank" href="https://FastSaveInsta.vercel.app/">
                  <b>FastSaveInsta.app</b>
                </a>
                , paste the Instagram link you just copied into input box and
                press the <strong>Download</strong> button.
              </p>
              <p>
                <b>Step 4</b>: <strong>Photo</strong> and <strong>Video</strong>{" "}
                you want to download will appear, click{" "}
                <strong>Download Photo</strong> or{" "}
                <strong>Download Video</strong> button inside under a photo or
                video, then the file will be saved to your device.
              </p>
              <p>
                <i>
                  With FastSaveInsta.app you can download any Instagram content
                  (Videos, Photos, Reels, Story, IGTV). We will continuously
                  upgrade to bring you the best experience! Please share this
                  tool with friends and family. Thank you!
                </i>
              </p>
              <div className="terms-note">
                <p>
                  Our download tool is designed to assist you in downloading
                  videos and images posted by your own account. However, we
                  reserve the right not to provide the service if you use this
                  tool to violate the privacy and materials of others.
                </p>
              </div>
            </div>
            <div className="mt-5 space-y-4">
              <section itemScope itemType="https://schema.org/FAQPage">
                <div className="section_faq">
                  <h3 className=" text-3xl font-black  center">FAQ</h3>
                  <div
                    className="faq_item"
                    itemProp="mainEntity"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <h4 itemProp="name">What is Instagram Downloader?</h4>
                    <div
                      className="faq_item_content"
                      id="divId1"
                      itemProp="acceptedAnswer"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <div itemProp="text">
                        Instagram Downloader is a tool that allows to download
                        Videos, Photos, Story, Reels and IGTV from Instagram.
                        Supports downloadi any photos and videos from Instagram
                        (Insta) on all devices (PC, Mac, Android, iPhone, iPad).
                      </div>
                    </div>
                  </div>
                  <div
                    className="faq_item"
                    itemProp="mainEntity"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <h4 itemProp="name">
                      How to download videos and photos on Instagram?
                    </h4>
                    <div
                      className="faq_item_content"
                      id="divId2"
                      itemProp="acceptedAnswer"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <div itemProp="text">
                        <ul>
                          <li>
                            Step 1: Paste the Instagram url into the input box
                            and press the <strong>Download</strong> button.
                          </li>
                          <li>
                            Step 2: <strong>Photo</strong> and{" "}
                            <strong>Video</strong> you want to download will
                            appear, click <strong>Download Photo</strong> or{" "}
                            <strong>Download Video</strong> button inside under
                            a photo or video, then the file will be saved to
                            your device.
                          </li>
                          <li>
                            <i>
                              (FastSaveInsta.app works well on all devices (PC,
                              Mac, Android, iOS).)
                            </i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* <div
                    className="faq_item"
                    itemProp="mainEntity"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <h4 itemProp="name">
                      How to download Instagram videos and photos on iPhone,
                      iPad?
                    </h4>
                    <div
                      className="faq_item_content"
                      id="divId3"
                      itemProp="acceptedAnswer"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <div itemProp="text">
                        For iPhone, you need to use <b>Safari</b> browser on iOS
                        13 or get <b>Documents by Readdle</b> app and go to
                        FastSaveInsta.app → Paste Instagram video link → Download (
                        <a
                          target="_blank"
                          href="https://FastSaveInsta.app/en/how-to-download-instagram-videos-on-iphone"
                        >
                          see instructions here
                        </a>
                        ).
                      </div>
                    </div>
                  </div> */}
                  <div
                    className="faq_item"
                    itemProp="mainEntity"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <h4 itemProp="name">
                      How to download Instagram photos and videos on Android
                      phone?
                    </h4>
                    <div
                      className="faq_item_content"
                      id="divId4"
                      itemProp="acceptedAnswer"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <div itemProp="text">
                        Copy the Instagram link → Go to FastSaveInsta.app →
                        Paste the copied Instagram link into the input box →
                        Download.
                      </div>
                    </div>
                  </div>
                  <div
                    className="faq_item"
                    itemProp="mainEntity"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <h4 itemProp="name">Can I download Instagram Story?</h4>
                    <div
                      className="faq_item_content"
                      id="divId5"
                      itemProp="acceptedAnswer"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <div itemProp="text">
                        Yes, you can download any Instagram Story. Click on the
                        (...) icon above the Story post and continue pressing
                        the <strong>Copy Link</strong> option → Paste the copied
                        link into <strong>FastSaveInsta</strong> → Download.
                      </div>
                    </div>
                  </div>
                  <div
                    className="faq_item"
                    itemProp="mainEntity"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <h4 itemProp="name">
                      Can I download videos and photos directly on Instagram?
                    </h4>
                    <div
                      className="faq_item_content"
                      id="divId6"
                      itemProp="acceptedAnswer"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <div itemProp="text">
                        Unfortunately, <b>Instagram</b> does not allow you to
                        download any content. You can go to the{" "}
                        <a
                          target="_blank"
                          href="https://FastSaveInsta.vercel.app/"
                        >
                          FastSaveInsta.app
                        </a>{" "}
                        website and follow the instructions to download any
                        content on IG.
                      </div>
                    </div>
                  </div>
                  <div
                    className="faq_item"
                    itemProp="mainEntity"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <h4 itemProp="name">
                      Do I have to pay to download Instagram videos and photos?
                    </h4>
                    <div
                      className="faq_item_content"
                      id="divId7"
                      itemProp="acceptedAnswer"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <div itemProp="text">
                        <strong>FastSaveInsta.app</strong> is a free Instagram
                        downloader. You can download any Instagram content
                        (Videos, Photos, Reels, Story, IGTV) without any feature
                        limitation.
                      </div>
                    </div>
                  </div>
                  <div
                    className="faq_item"
                    itemProp="mainEntity"
                    itemScope
                    itemType="https://schema.org/Question"
                  >
                    <h4 itemProp="name">
                      Where are Instagram videos and photos saved after
                      downloading?
                    </h4>
                    <div
                      className="faq_item_content"
                      id="divId8"
                      itemProp="acceptedAnswer"
                      itemScope
                      itemType="https://schema.org/Answer"
                    >
                      <div itemProp="text">
                        Please check the Downloads folder in your phone or the
                        download history section of your browser.
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Feed;
