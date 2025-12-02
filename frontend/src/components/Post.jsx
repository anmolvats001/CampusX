import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../Context/context";

const Post = () => {
  const { postvis, setPostVis, dark, userData } = useContext(AppContext);
  const [words, setWords] = useState(0);
  const textref = useRef();
  const [images, setImages] = useState([]);
  const fileInputRef = useRef();
  const deleteimage = (index) => {
  setImages(prev => prev.filter((_, i) => i !== index));
};

  const handlePickImages = () => {
    fileInputRef.current.click();
  };

  const handleImagesSelected = (e) => {
    let files = Array.from(e.target.files);

    if (files.length + images.length > 4) {
      alert("You can upload maximum 4 images.");
      files = files.slice(0, 4 - images.length);
    }
    const urls = files.map((file) => URL.createObjectURL(file));

    setImages((prev) => [...prev, ...urls]);
  };

  let maxwords = 650;
  const findwords = (e) => {
    let val = e.target.value;
    let len = val.length;
    setWords(val.length);
    if (len > maxwords) {
      val = val.substring(0, maxwords);
      e.target.value = val;
      setWords(maxwords);
    }
  };
  return (
    <>
      <div
        className={`${
          dark ? "dark" : "light"
        } absolute w-[50%] h-[65%] left-1/2 top-1/2 
     -translate-x-1/2 -translate-y-1/2
     px-4 py-2.5  border-2 rounded-xl z-100 border-gray-800`}
      >
        <div className="h-full overflow-y-scroll w-[100%] pt-5 scroller px-4">
          <div>
            <div className="flex gap-2 px-2.5 ">
                                 {" "}
              <img
                src={userData.image}
                className="w-8 h-8 object-cover rounded-full "
                alt={`Profile picture of ${userData.name}`}
              />
                                 {" "}
              <div>
                                     {" "}
                <p className="font-semibold  text-[10px] ">{userData.name}</p>  
                                   {" "}
                <p className="text-[8px] text-gray-400">({userData.branch})</p> 
                                 {" "}
              </div>
              <div
                className="absolute top-9 rounded-full px-1 flex pt-0.5 right-6  text-white cursor-pointer"
                onClick={() => {
                  setPostVis(false);
                }}
              >
                <i
                  class={
                    (dark ? "text-white" : "text-black") +
                    " fi fi-br-cross-small"
                  }
                ></i>
              </div>
            </div>
          </div>
          <div className="w-full justify-center  flex h-[25%] gap-1">
            <textarea
              ref={textref}
              onChange={(e) => findwords(e)}
              name=""
              placeholder="Enter your thoughts ..."
              className={`border-1 border-gray-800 rounded-xl focus:outline-none w-[90%] h-[100%] resize-none mt-3.5 pt-2 px-3 scroller ${
                dark ? "text-gray-300" : "text-gray-800"
              }`}
              id=""
            ></textarea>
            <div className="flex items-end">
              <p className="text-gray-500 text-xs">
                ({words}/{maxwords})
              </p>
            </div>
          </div>
          <div className="flex gap-3.5 px-10 mt-7 text-white">
            <div
              onClick={handlePickImages}
              className="flex justify-center items-center bg-gray-600 px-3 py-1 gap-1 rounded-2xl text-sm text-white cursor-pointer"
            >
              <i className="fi fi-sr-add-image mt-0.5"></i>
              <p>Images</p>
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              onChange={handleImagesSelected}
              className="hidden"
            />

            <select
              id=""
              className="capitalize  bg-gray-600 px-3 rounded-2xl w-24 flex justify-start focus:outline-none text-sm"
            >
              <option value="Block">Block</option>
              <option value="KC">KC</option>
              <option value="AB">AB</option>
              <option value="bhabha">bhabha</option>
              <option value="RJ">RJ</option>
            </select>
            <select
              id=""
              className="capitalize  bg-gray-600 px-3 rounded-2xl  flex justify-start focus:outline-none text-sm"
            >
              <option value="Block">Problem</option>
              <option value="KC">water</option>
              <option value="AB">administration</option>
              <option value="bhabha">hygiene</option>
              <option value="RJ">security</option>
            </select>
          </div>
          <div className="flex gap-3.5 px-8 py-5">{images.map((e,i)=>(
            <div className="w-fit h-fit  relative"><div
                className="absolute top-0 rounded-full px-1 flex pt-0.5 right-0  text-white cursor-pointer"
                onClick={() => {
                  deleteimage(i);
                }}
              >
                <i
                  class={
                    (dark ? "text-white" : "text-black") +
                    " fi fi-br-cross-small"
                  }
                ></i>
              </div>
            <img src={e} className="w-28 h-28 rounded-lg object-cover" alt="" /></div>
          ))}</div>
          <div className="flex px-8 justify-end pt-3 ">
            <p
              className={
                (dark ? "light" : "dark") +
                " w-fit px-4 font-semibold py-0.5 rounded-3xl  cursor-pointer"
              }
            >
              Post
            </p>
          </div>
        </div>
      </div>
      <div
        className="absolute w-screen z-99 h-full top-0 bg-black opacity-70  "
        onClick={() => {
          setPostVis(false);
        }}
      ></div>
    </>
  );
};

export default Post;
