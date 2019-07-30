const express = require('express')
const MedicineService = require('./medicine-service')
const medicineRouter = express.Router()



const serializeMedicine = medicine => ({
  id: medicine.id,
  name: medicine.name,
  toxic: medicine.toxic,
  toxicity: medicine.toxicity,
  symptom: medicine.symptom,
  brands: medicine.brands
})

medicineRouter
  .route('/')
  .get((req, res) => {
    MedicineService.getAllMedicine(req.app.get('db'))
      .then(medicine => {
        res.json(medicine.map(serializeMedicine))
      })
  })

medicineRouter
  .route('/:medicine_id')
  .get((req, res, ) => {
    const { medicine_id } = req.params
    MedicineService.getById(req.app.get('db'), medicine_id)
      .then(medicine => {
        if (!medicine) {
          return res.status(404).json({
            error: { message: `Medicine Not Found` }
          })
        }
        res.json(serializeMedicine(medicine))
      })
  })




module.exports = medicineRouter