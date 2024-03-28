// controllers/studentRegistrationController.js
import UserInterface from "../models/UserInterface.js"

export const getRegistrationCountByPeriod = async (req, res) => {
  const { period } = req.query;

  if (!period) {
    return res.status(400).json({ error: "Period parameter is required" });
  }

  let startDate, endDate;

  switch (period) {
    case "day":
      startDate = new Date();
      startDate.setHours(0, 0, 0, 0);
      endDate = new Date();
      endDate.setHours(23, 59, 59, 999);
      break;
    case "week":
      startDate = new Date();
      startDate.setDate(startDate.getDate() - startDate.getDay());
      startDate.setHours(0, 0, 0, 0);
      endDate = new Date();
      endDate.setDate(endDate.getDate() + (6 - endDate.getDay()));
      endDate.setHours(23, 59, 59, 999);
      break;
    case "month":
      startDate = new Date();
      startDate.setDate(1);
      startDate.setHours(0, 0, 0, 0);
      endDate = new Date();
      endDate.setMonth(endDate.getMonth() + 1);
      endDate.setDate(0);
      endDate.setHours(23, 59, 59, 999);
      break;
    default:
      return res.status(400).json({ error: "Invalid period parameter" });
  }

  try {
    const count = await StudentRegistration.countDocuments({
      registrationDate: {
        $gte: startDate,
        $lte: endDate,
      },
    });

    res.json({ count });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

export default getRegistrationCountByPeriod;
