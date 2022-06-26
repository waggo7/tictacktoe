import { Link, useNavigate, Routes, Route } from "react-router-dom";
import "./signinpage.css";
import Game from "../../game/Game";
//import { useState } from "react";
export default function SignIn() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("../Game");
  };
  return (
    <form id='playersignform' action='submit' class=''>
      <p class='text-center' id='h5'>
        please just put your name so we can track players less robotically
      </p>
      <input class='form-control' />
      <Link to='/game'> Submit</Link>
      <Routes>
        <Route path='/game' elements={<Game />} />
      </Routes>
    </form>
  );
}
