import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Explorer from "../components/Explorer";
import Taskbar from "../components/Taskbar";
import { AuthContext } from "../Context/AuthContext";
import StartMenu from "../components/StartMenu";

function Main() {
  const { loggedIn } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isStartOpen, setisStartOpen] = useState(false);
  const [isExplorerOpen, setisExplorerOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [funFact, setFunFact] = useState("");

  useEffect(() => {
    const fetchFunFact = () => {
      fetch("https://uselessfacts.jsph.pl/random.json?language=en")
        .then((response) => response.json())
        .then((data) => setFunFact(data.text))
        .catch((error) => console.error("Error fetching fun fact:", error));
    };

    const intervalID = setInterval(fetchFunFact, 10000);
    fetchFunFact();

    return () => clearInterval(intervalID);
  }, []);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalID);
  }, []);

  const formatDate = (date) => {
    const options = { weekday: "long", month: "long", day: "numeric" };
    return date.toLocaleDateString("en-US", options);
  };

  const formatTime = (time) => {
    const options = { hour: "2-digit", minute: "2-digit", hour12: false };
    return time.toLocaleTimeString([], options);
  };

  useEffect(() => {
    if (loggedIn === false) {
      window.location.replace("/lockscreen", { replace: true });
    }
  }, [loggedIn]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const toggleStart = () => {
    setisStartOpen(!isStartOpen);
  };
  const toggleExplorer = () => {
    setisExplorerOpen(!isExplorerOpen);
  };

  return (
    <>
      <div className="h-screen">
        <div
          className={`absolute top-0 flex justify-center items-center w-full h-full`}
        >
          <StartMenu isStartOpen={isStartOpen} toggleMenu={toggleMenu} toggleStart={toggleStart}/>
        </div>
        <div className="absolute left-[28rem] top-40">
          <Explorer
            toggleExplorer={toggleExplorer}
            isExplorerOpen={isExplorerOpen}
          />
        </div>
        <Taskbar toggleStart={toggleStart} toggleExplorer={toggleExplorer} />
        <motion.nav
          transition={{
            type: "spring",
            damping: 200,
            stiffness: 1000,
          }}
          initial={{
            y: "-100%",
          }}
          animate={{
            y: isMenuOpen ? "0%" : "-100%",
          }}
          className="fixed inset-0 bg-black h-full w-full z-50"
          onClick={(e) => {
            e.stopPropagation();
            toggleMenu();
          }}
          style={{
            background:
              "url(https://img.wallpapersafari.com/desktop/1440/900/11/85/Ra8DH9.jpg)",
            backgroundSize: "100% 100%",
          }}
        >
          <div className="relative flex flex-col justify-center h-full text-primary">
            <div className="absolute flex flex-col items-center w-[100vw] top-32 text-white">
              <div className=" text-9xl font-bold">
                {formatTime(currentTime)}
              </div>
              <div className="font-semibold text-4xl mt-5">
                {formatDate(currentTime)}
              </div>
              <div className="font-semibold text-xl mt-40 w-72 flex justify-center flex-col items-center">
                Did you know? <div className="mt-3">{funFact}</div>
              </div>
            </div>
            <div className="absolute flex top-0 justify-between w-full h-full py-12 px-32 text-white">
              <Link
                to={"https://google.com"}
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="material-symbols-outlined">search</span>
              </Link>
              <Link
                to={
                  "https://i.pinimg.com/564x/3a/08/4e/3a084e04a46b5f0cdf09fec54659dc07.jpg"
                }
                className="btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span class="material-symbols-outlined">photo_camera</span>
              </Link>
            </div>
          </div>
        </motion.nav>
      </div>
    </>
  );
}

export default Main;
