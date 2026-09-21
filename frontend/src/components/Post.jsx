import React, { useContext, useRef, useState } from "react";
import { AppContext } from "../Context/context";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { compressMultipleImages } from "../utils/imageCompressor";

const Post = () => {
  const { postvis, setPostVis, dark, profileData, utoken, findProfileData } = useContext(AppContext);
  const [words, setWords] = useState(0);
  const textref = useRef();
  const [textdata, setTextdata] = useState("");
  const [images, setImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [location, setLocation] = useState("");
  const [floor, setFloor] = useState("0");
  const [problem, setProblem] = useState("");
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const fileInputRef = useRef();
  const navigate = useNavigate();

  const maxwords = 650;

  const postData = async () => {
    if (!textdata.trim()) {
      toast.error("Please enter a description for your complaint");
      return;
    }
    if (!location || location === "Block") {
      toast.error("Please select a valid location block");
      return;
    }
    if (!problem || problem === "Problem") {
      toast.error("Please select a problem category");
      return;
    }
    if (imageFiles.length === 0) {
      toast.error("Please attach at least one photo");
      return;
    }

    try {
      setLoading(true);
      setStatusMessage("Optimizing images for faster upload...");

      // Compress photos on client side (reduces 10MB to ~150KB in milliseconds)
      const compressedFiles = await compressMultipleImages(
        imageFiles,
        (current, total) => {
          setStatusMessage(`Optimizing photo ${current} of ${total}...`);
        }
      );

      setStatusMessage("Uploading post...");
      const formData = new FormData();
      formData.append("data", textdata.trim());
      formData.append("floor", floor || "0");
      formData.append("problem", problem);
      formData.append("block", location);

      compressedFiles.forEach((file) => {
        formData.append("images", file);
      });

      const res = await axios.post(
        import.meta.env.VITE_BACKEND_URL + "/api/user/post",
        formData,
        { headers: { utoken } }
      );

      if (res.data?.success) {
        toast.success("Post published successfully!");
        setPostVis(false);
        findProfileData();
        navigate("/issues/home");
      } else {
        toast.error(res.data?.message || "Failed to publish post");
      }
    } catch (error) {
      console.error("Upload error:", error);
      toast.error(error.response?.data?.message || "Post upload failed");
    } finally {
      setLoading(false);
      setStatusMessage("");
    }
  };

  const deleteimage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handlePickImages = () => {
    fileInputRef.current?.click();
  };

  const handleImagesSelected = (e) => {
    const files = Array.from(e.target.files || []);
    if (files.length + images.length > 4) {
      toast.info("You can upload a maximum of 4 images.");
    }
    const remainingSlots = 4 - images.length;
    const selectedFiles = files.slice(0, remainingSlots);

    const urls = selectedFiles.map((file) => URL.createObjectURL(file));
    setImages((prev) => [...prev, ...urls]);
    setImageFiles((prev) => [...prev, ...selectedFiles]);
    // Reset file input so same file can be re-selected if needed
    e.target.value = "";
  };

  const handleTextChange = (e) => {
    let val = e.target.value;
    if (val.length > maxwords) {
      val = val.substring(0, maxwords);
      e.target.value = val;
    }
    setTextdata(val);
    setWords(val.length);
  };

  if (!postvis) return null;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-5 bg-black/75 backdrop-blur-sm animate-fadeIn">
      {/* Click outside to close (disabled while uploading) */}
      <div
        className="absolute inset-0"
        onClick={() => {
          if (!loading) setPostVis(false);
        }}
      />

      {/* Modal Container */}
      <div
        className={`relative z-10 w-full max-w-2xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl border transition-all duration-300 ${
          dark
            ? "bg-[#111827] border-slate-700/80 text-slate-100"
            : "bg-white border-slate-200 text-slate-900"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-700/40">
          <div className="flex items-center gap-3">
            <img
              src={profileData?.profile}
              className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/40"
              alt="Avatar"
            />
            <div>
              <p className="font-semibold text-sm sm:text-base leading-snug">
                {profileData?.name || "Student"}
              </p>
              <p className="text-xs text-blue-500 font-medium">
                {profileData?.branch || "Campus Connect Member"}
              </p>
            </div>
          </div>
          <button
            disabled={loading}
            onClick={() => setPostVis(false)}
            className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors cursor-pointer ${
              dark
                ? "hover:bg-slate-800 text-slate-300"
                : "hover:bg-slate-100 text-slate-600"
            }`}
          >
            <i className="fi fi-br-cross-small text-lg"></i>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto scroller flex-1 flex flex-col gap-4">
          {/* Textarea */}
          <div className="flex flex-col gap-1.5">
            <textarea
              ref={textref}
              disabled={loading}
              value={textdata}
              onChange={handleTextChange}
              placeholder="Describe the issue in detail (location, problem, what needs fixing)..."
              className={`w-full h-36 sm:h-40 rounded-xl p-3.5 text-sm sm:text-base resize-none border focus:outline-none focus:ring-2 focus:ring-blue-500/40 transition-all ${
                dark
                  ? "bg-slate-900/70 border-slate-700/80 text-slate-100 placeholder-slate-400"
                  : "bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400"
              }`}
            ></textarea>
            <div className="flex justify-between items-center text-xs px-1 text-slate-400">
              <span>Be specific to help incharge resolve faster</span>
              <span
                className={`font-mono ${
                  words >= maxwords - 20 ? "text-amber-500 font-bold" : ""
                }`}
              >
                {words}/{maxwords}
              </span>
            </div>
          </div>

          {/* Selectors and Action Row */}
          <div className="flex flex-wrap gap-2.5 items-center">
            {/* Image Picker Trigger */}
            <button
              type="button"
              disabled={loading || images.length >= 4}
              onClick={handlePickImages}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border transition-all cursor-pointer ${
                images.length >= 4
                  ? "opacity-50 cursor-not-allowed border-slate-700 bg-slate-800 text-slate-400"
                  : dark
                  ? "bg-slate-800 border-slate-700 text-slate-200 hover:bg-slate-700"
                  : "bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
              }`}
            >
              <i className="fi fi-sr-add-image text-sm"></i>
              <span>Add Photos</span>
              <span className="text-[11px] px-1.5 py-0.5 rounded-full bg-blue-500/20 font-bold">
                {images.length}/4
              </span>
            </button>
            <input
              type="file"
              accept="image/*"
              multiple
              ref={fileInputRef}
              onChange={handleImagesSelected}
              className="hidden"
            />

            {/* Location Select */}
            <select
              disabled={loading}
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-medium border focus:outline-none focus:ring-2 focus:ring-blue-500/40 cursor-pointer ${
                dark
                  ? "bg-slate-800 border-slate-700 text-slate-200"
                  : "bg-slate-100 border-slate-200 text-slate-800"
              }`}
            >
              <option value="">Select Block</option>
              <option value="KC">KC Block</option>
              <option value="AB">AB Block</option>
              <option value="bhabha">Bhabha Block</option>
              <option value="RJ">RJ Block</option>
              <option value="ground">Campus Ground</option>
            </select>

            {/* Floor Select (only if not Ground) */}
            {location !== "ground" && (
              <select
                disabled={loading}
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
                className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-medium border focus:outline-none focus:ring-2 focus:ring-blue-500/40 cursor-pointer ${
                  dark
                    ? "bg-slate-800 border-slate-700 text-slate-200"
                    : "bg-slate-100 border-slate-200 text-slate-800"
                }`}
              >
                <option value="0">Ground Floor</option>
                <option value="1">1st Floor</option>
                <option value="2">2nd Floor</option>
                <option value="3">3rd Floor</option>
                {(location === "KC" || !location) && <option value="4">4th Floor</option>}
                {(location === "KC" || !location) && <option value="5">5th Floor</option>}
                {(location === "KC" || !location) && <option value="6">6th Floor</option>}
              </select>
            )}

            {/* Problem Category Select */}
            <select
              disabled={loading}
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
              className={`px-3 py-2 rounded-xl text-xs sm:text-sm font-medium border focus:outline-none focus:ring-2 focus:ring-blue-500/40 cursor-pointer ${
                dark
                  ? "bg-slate-800 border-slate-700 text-slate-200"
                  : "bg-slate-100 border-slate-200 text-slate-800"
              }`}
            >
              <option value="">Problem Category</option>
              <option value="water">Drinking Water / Taps</option>
              <option value="hygiene">Washroom / Hygiene</option>
              <option value="food">Canteen / Food</option>
              <option value="building">Infrastructure / Electricity</option>
              <option value="security">Safety / Security</option>
              <option value="administration">Administration</option>
            </select>
          </div>

          {/* Image Previews */}
          {images.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {images.map((src, i) => (
                <div
                  key={i}
                  className="relative group aspect-square rounded-xl overflow-hidden border border-slate-700/60 bg-slate-900 shadow-sm"
                >
                  <img
                    src={src}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    alt={`Preview ${i + 1}`}
                  />
                  {!loading && (
                    <button
                      type="button"
                      onClick={() => deleteimage(i)}
                      className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-red-600/90 hover:bg-red-700 text-white flex items-center justify-center text-xs shadow-md transition-all duration-200 hover:scale-110"
                      title="Remove image"
                    >
                      <i className="fi fi-br-cross-small"></i>
                    </button>
                  )}
                  <div className="absolute bottom-1 left-1.5 text-[10px] px-1.5 py-0.5 rounded bg-black/60 text-white font-mono">
                    Photo {i + 1}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Loading status text & animation */}
          {loading && (
            <div className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-medium animate-pulse">
              <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              <span>{statusMessage || "Submitting your issue..."}</span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between px-5 py-4 border-t border-slate-700/40 bg-slate-900/20">
          <button
            type="button"
            disabled={loading}
            onClick={() => setPostVis(false)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
              dark
                ? "hover:bg-slate-800 text-slate-400"
                : "hover:bg-slate-100 text-slate-600"
            }`}
          >
            Cancel
          </button>

          <button
            type="button"
            disabled={loading}
            onClick={postData}
            className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-md hover:shadow-blue-500/20 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {loading ? (
              <>
                <div className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Publishing...</span>
              </>
            ) : (
              <>
                <i className="fi fi-ss-paper-plane text-xs"></i>
                <span>Publish Complaint</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;