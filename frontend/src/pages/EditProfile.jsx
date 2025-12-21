import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/context";
import upload_icon from "../assets/upload_icon.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const formatDateForInput = (date) => {
  if (!date) return "";
  const d = new Date(date);
  if (isNaN(d)) return "";
  return d.toISOString().split("T")[0];
};

const EditProfile = () => {
  const [image, setimage] = useState(false);
  const {
    profileData,
    setProfileData,
    dark,
    setProfileOn,
    atoken,
    itoken,
    utoken,
    findProfileData,
  } = useContext(AppContext);

  const navigate = useNavigate();

  const updateUserProfileData = async () => {
    try {
      const formData = new FormData();
      formData.append("name", profileData.name);
      formData.append("phone", profileData.phone);
      formData.append("address", profileData.address);
      formData.append("gender", profileData.gender);
      formData.append("dob", profileData.dob);
      formData.append("bio", profileData.bio);
      utoken&&formData.append("branch",profileData.branch);
      image && formData.append("image", image);

      if (utoken) {
        const { data } = await axios.post(
          import.meta.env.VITE_BACKEND_URL + "/api/user/editprofile",
          formData,
          { headers: { utoken } }
        );
        if (data.success) {
          toast.success("Updated Successfully");
          findProfileData();
        } else {
          toast.error(data.message);
        }
      }

      if (atoken) {
        const { data } = await axios.post(
          import.meta.env.VITE_BACKEND_URL + "/api/admin/editprofile",
          formData,
          { headers: { atoken } }
        );
        if (data.success) {
          toast.success("Updated Successfully");
          findProfileData();
        } else {
          toast.error(data.message);
        }
      }

      if (itoken) {
        const { data } = await axios.post(
          import.meta.env.VITE_BACKEND_URL + "/api/incharge/editprofile",
          formData,
          { headers: { itoken } }
        );
        if (data.success) {
          toast.success("Updated Successfully");
          findProfileData();
        } else {
          toast.error(data.message);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setProfileOn(true);
    return () => setProfileOn(false);
  }, []);

  const renderFormFields = (data, setData, isStudent = false) => {
    if (!data) return null;

    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-[150px_auto] gap-y-3 gap-x-2 px-4 md:px-8 pt-3">
          <div>
            <p className="text-base md:text-lg font-semibold capitalize">
              College :
            </p>
          </div>
          <input
            type="text"
            value={"ABES Engineering College"}
            className="w-full md:w-fit border border-gray-700 px-2 py-1 md:px-1.5 rounded-lg focus:outline-0"
            readOnly
          />

          <div>
            <p className="text-base md:text-lg font-semibold capitalize">
              Mobile No. :
            </p>
          </div>
          <input
            type="text"
            onChange={(e) =>
              setData((prev) => ({ ...prev, phone: e.target.value }))
            }
            value={data.phone || ""}
            className="w-full md:w-fit border border-gray-700 px-2 py-1 md:px-1.5 rounded-lg focus:outline-0"
          />

          <div>
            <p className="text-base md:text-lg font-semibold capitalize">
              Email :
            </p>
          </div>
          <input
            type="text"
            onChange={(e) =>
              setData((prev) => ({ ...prev, email: e.target.value }))
            }
            value={data.email || ""}
            readOnly={true}
            className="w-full md:w-fit border border-gray-700 px-2 py-1 md:px-1.5 rounded-lg focus:outline-0"
          />

          <div>
            <p className="text-base md:text-lg font-semibold capitalize">
              Gender :
            </p>
          </div>
          <select
            value={data.gender || ""}
            onChange={(e) =>
              setData((prev) => ({ ...prev, gender: e.target.value }))
            }
            className={`${
              dark ? "dark" : "light"
            } w-full md:w-fit border border-gray-700 px-2 py-1 md:px-1.5 rounded-lg focus:outline-none bg-transparent`}
          >
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>

          <div>
            <p className="text-base md:text-lg font-semibold capitalize">
              DOB:
            </p>
          </div>
          <input
            type="date"
            value={formatDateForInput(data.dob)}
            className="w-fit border-2 border-gray-800 rounded-lg"
            onChange={(e) =>
              setData((prev) => ({ ...prev, dob: e.target.value }))
            }
          />

          <div>
            <p className="text-base md:text-lg font-semibold capitalize">
              Bio :
            </p>
          </div>
          <textarea
            onChange={(e) =>
              setData((prev) => ({ ...prev, bio: e.target.value }))
            }
            value={data.bio || ""}
            className="w-full border border-gray-700 px-2 py-1 md:px-1.5 h-[100px] resize-none scroller rounded-lg focus:outline-0"
          />
        </div>
      </>
    );
  };

  const renderProfileHeader = (data, setData, type = "student") => {
    if (!data) return null;

    return (
      <div className="border-b border-gray-800 pb-4">
        <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-7 px-4 sm:px-7 items-center justify-between w-full">
          <div className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
            <label htmlFor="image" className="relative">
              <div className="inline-block relative cursor-pointer">
                <img
                  className="w-24 h-24 sm:w-36 sm:h-36 rounded-full object-cover opacity-75"
                  src={image ? URL.createObjectURL(image) : data.profile}
                  alt="Profile"
                />
                <img
                  className="w-6 sm:w-10 absolute bottom-6 sm:bottom-12 right-6 sm:right-12"
                  src={image ? "" : upload_icon}
                  alt="Upload"
                />
              </div>
              <input
                onChange={(e) => setimage(e.target.files[0])}
                type="file"
                id="image"
                hidden
                accept="image/*"
              />
            </label>
            <div className="w-full sm:w-auto">
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  className="text-lg sm:text-xl rounded-lg font-bold border border-gray-700 px-2 py-1 md:px-1.5 focus:outline-0 w-full sm:w-fit"
                  value={data.name || ""}
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, name: e.target.value }))
                  }
                />
                <input
                  type="text"
                  className={`${
                    dark ? "text-gray-300" : "text-gray-800"
                  } w-full sm:w-fit border border-gray-700 px-2 py-1 md:px-1.5 rounded-lg focus:outline-0`}
                  value={
                    atoken || itoken ? data.work : data?.branch
                  }
                  onChange={(e) =>
                   atoken || itoken ? setData((prev) => ({ ...prev, work: e.target.value })):setData((prev) => ({ ...prev, branch: e.target.value }))
                  }
                />
                <textarea
                  className="text-xs mt-2.5 text-gray-500 capitalize w-full md:w-[500px] border border-gray-700 px-2 py-1 md:px-1.5 rounded-lg focus:outline-0 focus:text-white resize-none scroller h-20"
                  value={data.address || ""}
                  placeholder="Enter address"
                  onChange={(e) =>
                    setData((prev) => ({ ...prev, address: e.target.value }))
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleSaveChanges = async (setData, data) => {
    if (image) {
      setData((prev) => ({ ...prev, profile: URL.createObjectURL(image) }));
    }
    updateUserProfileData();
    navigate("/issues/profile");
  };

  return (
    <div
      className={`${
        dark ? "dark" : "light"
      } min-h-screen pb-16 lg:pb-0 w-full md:w-[75%] border border-gray-800 relative`}
    >
      <div className="h-16 sm:h-0"></div>

      {utoken && (
        <div className="overflow-y-scroll w-full scroller h-full relative pb-10">
          {renderProfileHeader(profileData, setProfileData, "student")}
          {renderFormFields(profileData, setProfileData, true)}
          <div className="flex justify-center w-full px-4 md:w-[80%] mt-6">
            <button
              className={`${
                dark ? "bg-white text-black" : "bg-black text-white"
              } px-6 py-2 cursor-pointer rounded-3xl w-full sm:w-fit font-medium`}
              onClick={() => handleSaveChanges(setProfileData, profileData)}
            >
              Apply the changes
            </button>
          </div>
        </div>
      )}

      {itoken && profileData && (
        <div className="overflow-y-scroll w-full scroller h-full relative pb-10">
          {renderProfileHeader(profileData, setProfileData, "incharge")}
          {renderFormFields(profileData, setProfileData)}
          <div className="flex justify-center w-full px-4 md:w-[80%] mt-6">
            <button
              className={`${
                dark ? "bg-white text-black" : "bg-black text-white"
              } px-6 py-2 cursor-pointer rounded-3xl w-full sm:w-fit font-medium`}
              onClick={() => handleSaveChanges(setProfileData, profileData)}
            >
              Apply the changes
            </button>
          </div>
        </div>
      )}

      {atoken && profileData && (
        <div className="overflow-y-scroll w-full scroller h-full relative pb-10">
          {renderProfileHeader(profileData, setProfileData, "admin")}
          {renderFormFields(profileData, setProfileData)}
          <div className="flex justify-center w-full px-4 md:w-[80%] mt-6">
            <button
              className={`${
                dark ? "bg-white text-black" : "bg-black text-white"
              } px-6 py-2 cursor-pointer rounded-3xl w-full sm:w-fit font-medium`}
              onClick={() => handleSaveChanges(setProfileData, profileData)}
            >
              Apply the changes
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditProfile;
