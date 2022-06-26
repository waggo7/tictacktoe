import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { QueryClient, QueryClientProvider } from "react-query";

import "./App";
import Game from "./game/Game.jsx";
import Home from "./components/home/home";
import SignIn from "./components/signin/Signinpage";

function App() {
  return (
    //<QueryClientProvider client={QueryClient}>
    <BrowserRouter>
      <Game />
      <div>
        <Routes>
          <Route path='/' />
          <Route path='/Game' element={<Game />} />
        </Routes>
      </div>
    </BrowserRouter>
    //    </QueryClientProvider>
  );
}
export default App;
