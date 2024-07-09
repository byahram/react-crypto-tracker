import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coins from "./pages/Coins";
import Coin from "./pages/Coin";

// interface IRouterProps {
//   toggleDark: () => void;
//   isDark: boolean;
// }

// export default function Router({ toggleDark, isDark }: IRouterProps) {
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Coins toggleDark={toggleDark} />}></Route>
        <Route path="/:coinId" element={<Coin isDark={isDark} />}></Route> */}
        <Route path="/" element={<Coins />}></Route>
        <Route path="/:coinId" element={<Coin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
