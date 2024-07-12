import { MdDarkMode } from "react-icons/md";
import { useSetRecoilState } from "recoil";
import { isDarkAtom } from "../stores/atoms";
import styled from "styled-components";

export default function ThemeBtn() {
  const setDarkAtom = useSetRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkAtom((prev) => !prev);

  return <ThemeIcon onClick={toggleDarkAtom} size={30} className="icon" />;
}

const ThemeIcon = styled(MdDarkMode)`
  border-radius: 9999px;
  cursor: pointer;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  margin: 0.5rem;
  padding: 0.75rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15),
    0 16px 16px rgba(0, 0, 0, 0.15);
  color: ${(props) => props.theme.bgColor};
  background-color: ${(props) => props.theme.iconBgColor};
  transition-duration: 300ms;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);

  &:hover {
    scale: 1.1;
  }
`;
