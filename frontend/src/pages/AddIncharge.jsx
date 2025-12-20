import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../Context/context";
import user from "../assets/user.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Shrimmer from "../components/Shrimmer";

const AddIncharge = () => {
  const [inchargeImg, setinchargeImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setbio] = useState("");
  const [work, setwork] = useState("Water");
  const [address, setAddress] = useState("");
  const { dark, adminlogin, setcommvis,atoken } = useContext(AppContext);
  const [loading,setLoading]=useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setcommvis(false);
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, []);

  const onSubmitHandler = async (e) => {

    e.preventDefault();
    setLoading(true)
    const formData = new FormData();
    formData.append("name", name);
    formData.append("password", password);
    formData.append("address", address);
    formData.append("bio", bio);
    formData.append("work", work.toLowerCase());
    formData.append("email", email);
    inchargeImg && formData.append("image", inchargeImg);
    
    const {data}=await axios.post(import.meta.env.VITE_BACKEND_URL+"/api/admin/addincharge",formData,{headers:{atoken}});
    if(data.success){
        toast.success("Added Incharge Successfully");
        navigate("/issues/home")
    }
    else{
        toast.error("Error Occured")
    }
    setLoading(false)
  };

  return (
    adminlogin && (
      <div
        className={`${
          dark ? "dark" : "light"
        } min-h-screen w-full md:w-[45%] border border-gray-800 relative`}
      >
        {/* Mobile Header Spacing */}
        <div className="h-16 sm:h-0"></div>

        <p className="text-xl sm:text-2xl font-semibold capitalize px-5 pt-4 sm:pt-7 w-full">
          Add Incharge
        </p>

        {loading?<Shrimmer/>:(<div className="w-full px-4 sm:px-3.5 flex pt-5 items-center">
          <div className="px-4 sm:px-8 py-6 sm:py-8 border border-gray-700 rounded-xl sm:rounded-2xl w-full max-w-4xl max-h-[80vh] scroller overflow-y-auto">
            {/* Profile Image Upload */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 sm:mb-8">
              <label htmlFor="inch-img" className="cursor-pointer">
                <img
                  className="w-20 h-20 sm:w-24 sm:h-24 object-cover overflow-hidden rounded-full"
                  src={inchargeImg ? URL.createObjectURL(inchargeImg) : user}
                  alt="Incharge"
                />
              </label>
              <input
                onChange={(e) => setinchargeImg(e.target.files[0])}
                type="file"
                id="inch-img"
                hidden
              />
              <div>
                <p className="text-center sm:text-left">Upload Incharge</p>
                <p className="text-center sm:text-left text-sm text-gray-500">
                  Picture
                </p>
              </div>
            </div>

            {/* Form Fields */}
            <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-10">
              {/* Left Column */}
              <div className="w-full lg:flex-1 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm sm:text-base">Incharge Name</p>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    className="border border-gray-700 rounded px-3 py-2 text-sm sm:text-base"
                    type="text"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm sm:text-base">Incharge Email</p>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className="border border-gray-700 rounded px-3 py-2 text-sm sm:text-base"
                    type="email"
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-sm sm:text-base">Incharge Password</p>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    className="border border-gray-700 rounded px-3 py-2 text-sm sm:text-base"
                    type="password"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>

              {/* Right Column */}
              <div className="w-full lg:flex-1 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <p className="text-sm sm:text-base">Work</p>
                  <select
                    onChange={(e) => setwork(e.target.value)}
                    value={work}
                    className={`border border-gray-700 rounded px-3 py-2 text-sm sm:text-base ${
                      dark ? "dark" : "light"
                    }`}
                  >
                    <option value="Water">Water</option>
                    <option value="Administration">Administration</option>
                    <option value="Food">Food</option>
                    <option value="security">Security</option>
                    <option value="Hygiene">Hygiene</option>
                    <option value="Building">Building</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-sm sm:text-base">Address</p>
                  <input
                    onChange={(e) => setAddress(e.target.value)}
                    value={address}
                    className="border border-gray-700 rounded px-3 py-2 text-sm sm:text-base"
                    type="text"
                    placeholder="Address"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Bio Section */}
            <div className="mt-6">
              <p className="text-sm sm:text-base mb-2">Bio Incharge</p>
              <textarea
                onChange={(e) => setbio(e.target.value)}
                value={bio}
                className="w-full px-4 py-3 border rounded border-gray-700 focus:outline-none resize-none text-sm sm:text-base"
                rows="4"
                placeholder="Write bio Incharge"
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="primary px-8 sm:px-10 py-3 mt-4 sm:mt-6 rounded-full text-white w-full sm:w-auto"
              onClick={onSubmitHandler}
            >
              Add Incharge
            </button>
          </div>
        </div>)}
      </div>
    )
  );
};

export default AddIncharge;
