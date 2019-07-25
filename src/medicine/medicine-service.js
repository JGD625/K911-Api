const xss = require('xss')

const MedicineService = {
  getAllMedicine(db) {
    return db
    .from('k991_medicine AS med')
    .select(
      'med.id',
      'med.name',
      'med.toxic',
      'med.toxicity',
      'med.brands',
      'med.symptoms',
    )
  },
  
  getById(db, id) {
  return MedicineService.getAllMedicine(db)
    .where('med.id', id)
    .first()
  },



  serializeMedicine(med) {
    return {
      id: med.id,
      toxicity: med.toxicity,
      toxic: med.toxic,
      name: med.name,
      symptoms: med.symptoms,
      brands: med.brands
    }
  },
}

module.exports = MedicineService
