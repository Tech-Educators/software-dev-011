//import useParams to build nested params
//we need to import Outlet to be the placeholder of any child routes

import { useParams, Outlet, Link } from "react-router-dom";

export default function UserProfile() {
  //I have destructured one variable from useParams
  let { username } = useParams();
  return (
    <>
      <h1>User Profile</h1>
      <h2>Username: {username}</h2>
      {/* we need a dynamic url for each user, so we use the variable user in template literals */}
      <Link to={`/profile/${username}`}>My Profile</Link>
      <Link to={`/profile/${username}/testimonials`}>My Testimonials</Link>

      <Outlet />
    </>
  );
}
