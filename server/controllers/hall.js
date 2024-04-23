import halls from "../models/hall.js";

// create hall
export const createHall = async (req, res) => {
  const newHall = new halls(req.body);
  try {
    const savedHall = await newHall.save();
    res.status(200).json(savedHall);
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};

// delete hall
export const deleteHall = async (req, res) => {
    try {
    const { hallName, departmentBlock } = req.body;
    const hall = await halls.findOne({ hallName, departmentBlock });

    if (!hall) {
      return res.status(404).json({ message: "Hall not found" });
    }

    const deleteHall = await halls.findByIdAndDelete(hall._id);
    res.status(200).json("Object has been deleted");
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};

// get hall by hallid
export const getHall = async (req, res) => {
  try {
    const hallID = req.params.id;
    if (!hallID) throw error("No Hall Id found");
    const hall = await halls.find({ hallID });

    res.status(200).json(hall);
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};

// get allhalls
export const getAllHalls = async (req, res) => {
  try {
    let params = {};
    if (req.params) {
      params = req.params;
    }
    const hallsList = await halls.find(params);
    res.status(200).json(hallsList);
  } catch (err) {
    res.status(400).json({
      status: "Failed",
      message: err,
    });
  }
};