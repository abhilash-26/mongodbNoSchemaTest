const DataUpload = require("../model/dataupload");

const saveData = async (req, res) => {
  try {
    const dataToSave = req.body;
    console.log(dataToSave);
    const result = await DataUpload.create(dataToSave);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { saveData };
