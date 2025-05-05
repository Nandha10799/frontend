import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { resetActivePage, setActivePage } from "../redux-store/slice/activePageSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux-store/store";
import { useProfile } from "../hooks/useProfile";
import { setUserProfile } from "../redux-store/slice/userProfileSlice";
import photosImg from "../../assets/photos-img.jpg";
import postsImg from "../../assets/posts-img.jpg";

export const HomePage = () => {
    const navigate = useNavigate();
    
    const {data} = useProfile();

    const { profile } = useSelector((state: RootState) => state.userProfile);

    const dispatch = useDispatch();

  useEffect(() => {
    if (!profile?.email) {
      dispatch(setUserProfile(data));
    }
    dispatch(resetActivePage());
  }, [data, dispatch]);

  const handleClick = (page: "photos" | "posts") => {
    dispatch(setActivePage(page));
    navigate(`/${page}`);
  };
    return (
        <div className="flex flex-col md:flex-row gap-10 h-full px-5 items-center justify-center">
        <div className="card bg-base-100 image-full w-80 md:w-96 shadow-sm">
          <figure>
            <img
              src={photosImg}
              alt="Photos" />
          </figure>
          <div className="card-body justify-between">
            <h2 className="card-title text-2xl">Photos</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={() => handleClick("photos")}>Click to Open</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 image-full w-80 md:w-96 shadow-sm">
          <figure>
            <img
              src={postsImg}
              alt="Posts" />
          </figure>
          <div className="card-body justify-between">
            <h2 className="card-title text-2xl">Posts</h2>
            <div className="card-actions justify-end">
              <button className="btn btn-primary" onClick={() => handleClick("posts")}>Click to Open</button>
            </div>
          </div>
        </div>
      </div>
    );
};