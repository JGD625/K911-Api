const MedicineService = {
  getAllMedicine(knex) {
    return knex
      .select('*')
      .from('k911_medicine')
  },
  getById(knex, id) {
    return knex
     .from('k911_medicine')
     .select('*')
     .where('id', id)
     .first()
  },
}


module.exports = MedicineService
