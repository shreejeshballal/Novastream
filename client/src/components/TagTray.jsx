import { useState, useEffect } from "react";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
const TagTray = () => {
  //State to determing if scroll happened or not
  const [scrollActive, setScrollActive] = useState(false);
  // Try Items state
  const [allState, setAllState] = useState({
    id: 1,
    name: "All",
    active: true,
  });
  const [trayItems, setTrayItems] = useState([
    {
      id: 2,
      name: "Gaming",
      active: false,
    },
    { id: 3, name: "Songs", active: false },
    {
      id: 4,
      name: "Education",
      active: false,
    },
    { id: 5, name: "Sports", active: false },
    { id: 6, name: "Motivation", active: false },
    { id: 7, name: "Technology", active: false },
    { id: 8, name: "Fitness", active: false },
    { id: 9, name: "Space", active: false },
  ]);

  //Fuction to handle tray item click
  const handleTrayItemClick = (id) => {
    setAllState({ ...allState, active: false });
    trayItems.forEach((element) => {
      if (element.id === id) {
        element.active = !element.active;
      }
    });
    const sortedArray = trayItems.sort((a, b) => {
      return b.active - a.active || a.id - b.id;
    });
    setTrayItems([...sortedArray]);
  };

  //Function to handle all tag click
  const handleAllClick = () => {
    setAllState({ ...allState, active: true });
    trayItems.forEach((element) => {
      element.active = false;
    });
    setTrayItems([...trayItems]);
  };

  //Use effect for scrolling functionality
  useEffect(() => {
    const container = document.getElementById("tagTray");
    container.addEventListener("scroll", () => {
      let pos = container.scrollLeft;
      if (pos > 50) {
        setScrollActive(true);
      } else {
        setScrollActive(false);
      }
    });
  }, [scrollActive]);

  const [show, setShow] = useState(true);
  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function (e) {
      // Get the new Value
      currentScrollPosition = window.pageYOffset;

      //Subtract the two and conclude
      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      // Update the previous value
      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  //Function to scroll right on button click
  const scrollRight = () => {
    const container = document.getElementById("tagTray");
    console.log(container.offsetWidth);
    container.scrollBy(container.offsetWidth / 2, 0);
  };

  //Function to scroll left on button click
  const scrollLeft = () => {
    const container = document.getElementById("tagTray");
    container.scrollLeft -= 200;
  };

  return (
    <div
      className={` md:flex md:flex-[2] md:w-[20rem] ${
        !show && "hidden"
      } md:flex  text-white absolute bg-background h-fit flex left-0 top-[5rem] md:items-center px-3 pb-3 md:pb-0 md:static w-full md:gap-2`}
    >
      <div
        className="flex w-[100vw] md:flex-[100%] overflow-x-scroll  no-scrollbar gap-3  "
        id="tagTray"
      >
        {scrollActive && (
          <div
            className=" p-2 transition-all hidden sm:absolute  h-[40px]   sm:flex justify-center items-center bg-background  z-10 "
            onClick={scrollLeft}
          >
            <AiOutlineLeft className=" right-0 text-light text-xl" />
          </div>
        )}
        <button
          onClick={handleAllClick}
          key={allState.id}
          className={`bg-dark-gray py-2 w-fit px-3 rounded-lg flex items-center justify-center hover:bg-light-gray transition-all cursor-pointer ${
            allState.active ? "bg-light-gray text-dark-gray" : ""
          }}`}
        >
          {allState.name}
        </button>
        {trayItems.map((item, key) => {
          return (
            <button
              onClick={() => handleTrayItemClick(item.id)}
              key={key}
              className={`bg-dark-gray py-2 w-fit px-3 rounded-lg flex items-center justify-center hover:bg-light-gray transition-all cursor-pointer ${
                item.active ? "bg-light-gray text-dark-gray" : ""
              }}`}
            >
              {item.name}
            </button>
          );
        })}
      </div>
      <div className="p-2 transition-all hidden sm:block" onClick={scrollRight}>
        <AiOutlineRight className="  md:right-0 text-light text-xl" />
      </div>
    </div>
  );
};

export default TagTray;
