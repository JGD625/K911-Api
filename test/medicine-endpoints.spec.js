const knex = require('knex')
const app = require('../src/app')
const { makeMedicineArray} = require('./test.fixtures')

describe('Medicine Endpoints', function() {
    let db

    before('make knex instance', () => {
        db = knex({
          client: 'pg',
          connection: process.env.TEST_DB_URL,
        })
        app.set('db', db)
      })

      after('disconnect from db', () => db.destroy())

      before('clean the table', () => db('k911_medicine').truncate())
    
      afterEach('cleanup',() => db('k911_medicine').truncate())

      describe(`GET /api/medicine`, () => {
        context(`Given no medicine`, () => {
          it(`responds with 200 and an empty list`, () => {
            return supertest(app)
              .get('/api/medicine')
              .expect(200, [])
          })
        })
        context('Given there are medicines in the database', () => {
            const testMedicine = makeMedicineArray()
      
            beforeEach('insert medicine', () => {
              return db
                .into('k911_medicine')
                .insert(testMedicine)
            })
      
            it('responds with 200 and all of the medicines', () => {
              return supertest(app)
                .get('/api/medicine')
                .expect(200, testMedicine)
            })
          })


      describe(`GET /api/medicine/:medicine_id`, () => {
            context(`Given no medicines`, () => {
              it(`responds with 404`, () => {
                const medicineId = 123456
                return supertest(app)
                  .get(`/api/medicine/${medicineId}`)
                  .expect(404, { error: { message: `Medicine item doesn't exist` } })

                })
            })
        
            context('Given there are medicines in the database', () => {
              const testMedicine = makeMedicineArray()
        
              beforeEach('insert medicine', () => {
                return db
                  .into('k911_medicine')
                  .insert(testMedicine)
              })
        
              it('responds with 200 and the specified medicine', () => {
                const medicineId = 2
                const expectedMedicine = testMedicine[medicineId - 1]
                return supertest(app)
                  .get(`/api/medicine/${medicineId}`)
                  .expect(200, expectedMedicine)
              })
            })
        })
    })
  })