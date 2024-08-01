import React, { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaPhone } from "react-icons/fa";
import AxiosService from "../../Utils/ApiService";

const Profile = () => {

  const [user, setUser] = useState("");
 
  useEffect(() => {
    const userData = sessionStorage.getItem("userData");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

//   const id = user._id;

//   const fetchEmployee = async () => {
//     try {
//       const res = await AxiosService.get(`employee/getemployees/${id}`);
//       if (res.status === 200) {
//         setEmployee(res.data.employee);
//       }
//     } catch (error) {
//       console.error('Error fetching employee details:', error);
//     }
//   };

//   useEffect(() => {
//     if (id) {
//       fetchEmployee();
//     }
//   }, [id]);
  return (
    <div className="profile-container text-black mt-20 flex w-full justify-center">
      <div className="md:w-5/6 w-1/2 sm:w-5/6  bg-gray-100 px-5 py-10 shadow-xl shadow-indigo-200 rounded-lg">
        <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">Profile Details</h2>
        <div className="profile-details text-xl space-y-6 pt-10">
      
          <div className="flex items-center space-x-10">
            <FaUser className="text-2xl text-blue-600" />
            <div className="flex text-lg w-full justify-between">
              <div className="w-1/2">
              <p className="font-semibold">Name</p>
              </div>
              <div className="flex justify-start w-1/2">
              <p className="pl-4">samuel</p>
              </div>
              
            </div>
          </div>
          <div className="flex items-center space-x-10">
            <FaEnvelope className="text-blue-600 text-2xl" />
            <div className="flex text-lg w-full justify-between">
              <div className="w-1/2">
              <p className="font-semibold">Email</p>
              </div>
              <div className="flex justify-start w-1/2">
              <p className="pl-4">samuel@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-10">
            <FaPhone className="text-blue-600 text-2xl" />
            <div className="flex text-lg w-full justify-between">
            <div className="w-1/2">
              <p className="font-semibold ">Mobile</p>
              </div>
              <div className="flex justify-start w-1/2">
              <p className="pl-4 ">0000011111</p>
              </div>
            
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  );
};

export default Profile;
