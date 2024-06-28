import { MdDarkMode } from "react-icons/md";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../utils/atoms";

export default function ThemeBtn() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);

  return <MdDarkMode onClick={toggleDarkAtom} size={30} className="icon" />;
}
