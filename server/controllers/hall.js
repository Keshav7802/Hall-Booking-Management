import halls from "../models/hall.js"

// create booking
export const createHall = async (req, res) => {
    const newHall = new halls(req.body)
    try {
        const savedHall = await newHall.save()
        res.status(200).json(savedHall)
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: err
        })
    }
}

// delete booking
export const deleteHall = async (req, res) => {
    try {
      const deleteHall = await halls.findByIdAndDelete(req.params.id);
      res.status(200).json("Object has been deleted");
    } catch (err) {
      res.status(400).json({
        status: "Failed",
        message: err,
      })
    }
}

// get hall by id
export const getHall = async (req, res) => {
    try {
        const { Hall_ID } = req.params;
        if (!Hall_ID) throw error("No Hall Id found");
        const hall = await halls.find(Hall_ID)
        res.status(200).json(hall)
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: err
        })
    }
}

// get allhalls 
export const getAllHalls = async (req, res) => {
    try {
        let params = {};
        if (req.params) {
            params = req.params
        }
        const hallsList = await halls.find(params)
        res.status(200).json(hallsList)
    } catch (err) {
        res.status(400).json({
            status: 'Failed',
            message: err
        })
    }
}



