import User from "../models/User.js";
import HireUser from "../models/HireUser.js";
import CoursesDetails from "../models/CoursesDetails.js";

//Get all the user details
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    console.log(users);
    if (!users || users.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    return res.status(200).json(users);
    
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
};

//update single  Register user
export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
   const data =  await User.findOne({ _id: id }, {password: 0});
    return res.status(200).json({ data });
  } catch (error) {
    next(error);
  }
};


//Get the data on the bases of the current days



//Update the Register user
export const updateUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const updateUserData = req.body;

     const updatedData = await User.updateOne(
       { _id: id },
       { 
        $set: updateUserData,
       }
     );   
     return response.status(200).json(updatedData); 
  } catch (error) {
    next(error);
  }
}

//Delete the Register user
export const deleteUserById = async (req, res) => {
  try {
    const id = req.params.id;
     await User.deleteOne({ _id: id });
    return res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    next(error);

  }
};


//Get all the Courses details
export const getCourseUsers = async (req, res, next) => {
   try {
     const courseusers = await CoursesDetails.find();
     console.log(courseusers);
     if (!courseusers || courseusers.length === 0) {
       return res.status(404).json({ message: "No course users found" });
     }
     return res.status(200).json(courseusers);
   } catch (error) {
     next(error); // Pass the error to the error handling middleware
   }
 };

 //Delete the Courses user
export const deleteCoursesById = async (req, res) => {
  try {
    const id = req.params.id;
     await CoursesDetails.deleteOne({ _id: id });
    return res.status(200).json({ message: "Courses deleted successfully" });
  } catch (error) {
    next(error);

  }
};

//Get all hire users details 
export const getHireUsers = async (req, res, next) => {
  try {
    const hireusers = await HireUser.find();
    console.log(hireusers);
    if (!hireusers || hireusers.length === 0) {
      return res.status(404).json({ message: "No hire users found" });
    }
    return res.status(200).json(hireusers);
  } catch (error) {
    next(error); // Pass the error to the error handling middleware
  }
};

export default {
  getAllUsers,
  getCourseUsers,
  getHireUsers,
  deleteUserById,
  deleteCoursesById,
  getUserById,
  updateUserById,
};
