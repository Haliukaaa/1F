import useDownloader from "react-use-downloader";
import {useState, useEffect} from 'react';
import Menu from '../ui/Menu';

export const Header = ({handleClick, clickExp, clickWork, clickContact}) => {
  const { download } = useDownloader();
  const fileUrl = "./khaliun_resume.pdf";
  const filename = "khaliun_resume.pdf";

  const [darkMode, setDarkMode] = useState("light");

  useEffect(() => {
    if(darkMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode])

  const handleDarkMode = () => {
    setDarkMode(darkMode === "dark" ? "light" : "dark")
  };

  return (
    <div className="navbar flex gap-8 justify-end py-5 px-20 dark:bg-slate-950">
      <div className="nav-right invisible sm:visible">
        <ul className="menu flex gap-4 *:dark:white-text"> 
          <li onClick={handleClick}>About</li>
          <li onClick={clickExp}>Experience</li>
          <li onClick={clickWork}>Work</li>
          <li onClick={clickContact}>Contact</li>
        </ul>
      </div>
      <div className="nav-left flex gap-3 invisible sm:visible" >
        <div onClick={handleDarkMode}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Icon">
              <path
                id="Vector"
                d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_2"
                d="M12 2V4"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_3"
                d="M12 20V22"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_4"
                d="M4.92993 4.92999L6.33993 6.33999"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_5"
                d="M17.6599 17.66L19.0699 19.07"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_6"
                d="M2 12H4"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_7"
                d="M20 12H22"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_8"
                d="M6.33993 17.66L4.92993 19.07"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                id="Vector_9"
                d="M19.0699 4.92999L17.6599 6.33999"
                stroke="#4B5563"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </svg>
        </div>
        <div
          className="py-1 px-5 rounded-xl w-fit dark:bg-slate-300 dark:bg-gray-950"
          style={{ backgroundColor: "#111827", color: "#F9FAFB" }}
          onClick={() => download(fileUrl, filename)}
        >
          Download CV
        </div>
      </div>
      <Menu/>
    </div>
  );
};
