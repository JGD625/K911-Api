const express = require('express')
const MedicineService = require('./medicine-service')
const medicineRouter = express.Router()

medicineRouter
  .route('/')
  .get((req, res, next) => {
    MedicineService.getAllMedicine(req.app.get('db'))
      .then(medicines => {
        res.json(medicines.map(MedicineService.serializeMedicine))
      })
      .catch(next)
  })

medicineRouter
  .route('/:medicine_id')
  .all(checkMedicineExists)
  .get((req, res) => {
    res.json(MedicineService.serializeMedicine(res.medicine))
  })



/* async/await syntax for promises */
async function checkMedicineExists(req, res, next) {
  try {
    const medicine = await MedicineService.getById(
      req.app.get('db'),
      req.params.medicine_id
    )

    if (!medicine)
      return res.status(404).json({
        error: `Medicine doesn't exist`
      })

    res.medicine = medicine
    next()
  } catch (error) {
    next(error)
  }
}

module.exports = medicineRouter
