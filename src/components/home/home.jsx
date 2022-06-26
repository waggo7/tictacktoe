import { Link, Routes, Route } from "react-router-dom";
import SignIn from "../signin/Signinpage";
import "./home.css";
export default function Home() {
  return (
    <div>
      <p>
        if you'd like to start a game click here to get registered, only a name
        for the game will be required
      </p>
      <Link
        class='btn btn-primary'
        id='signinbtn'
        to='/signin'
        element={<SignIn />}>
        CLICK HERE
      </Link>
    </div>
  );
}
