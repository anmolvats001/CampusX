import { useContext } from "react";
import { AppContext } from "../Context/context";

const MainPage = () => {
  const { dark } = useContext(AppContext);

  return (
    <div className={`${dark ? "dark" : "light"} h-screen w-[100%] border border-gray-800`}>
      <div className="overflow-y-scroll scroller h-full">
        <div className=" h-fit w-[30%]">

        </div>
      </div>
    </div>
  );
};

export default MainPage;
