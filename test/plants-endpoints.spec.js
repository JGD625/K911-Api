const knex = require('knex')
const app = require('../src/app')
const { makePlantsArray} = require('./test.fixtures')

describe('Plants Endpoints', function() {
    let db

    before('make knex instance', () => {
        db = knex({
          client: 'pg',
          connection: process.env.TEST_DB_URL,
        })
        app.set('db', db)
      })

      after('disconnect from db', () => db.destroy())

      before('clean the table', () => db('k911_plants').truncate())
    
      afterEach('cleanup',() => db('k911_plants').truncate())

      describe(`GET /api/plants`, () => {
        context(`Given no plants`, () => {
          it(`responds with 200 and an empty list`, () => {
            return supertest(app)
              .get('/api/plants')
              .expect(200, [])
          })
        })
        context('Given there are plants in the database', () => {
            const testPlants = makePlantsArray()
      
            beforeEach('insert plants', () => {
              return db
                .into('k911_plants')
                .insert(testPlants)
            })
      
            it('responds with 200 and all of the plants', () => {
              return supertest(app)
                .get('/api/plants')
                .expect(200, testPlants)
            })
          })


      describe(`GET /api/plants/:plant_id`, () => {
            context(`Given no plants`, () => {
              it(`responds with 404`, () => {
                const plantId = 123456
                return supertest(app)
                  .get(`/api/plants/${plantId}`)
                  .expect(404, { error: { message: `Plant item doesn't exist` } })

                })
            })
        
            context('Given there are plants in the database', () => {
              const testPlants = makePlantsArray()
        
              beforeEach('insert plants', () => {
                return db
                  .into('k911_plants')
                  .insert(testPlants)
              })
        
              it('responds with 200 and the specified plant', () => {
                const plantId = 2
                const expectedPlant = testPlants[plantId - 1]
                return supertest(app)
                  .get(`/api/plants/${plantId}`)
                  .expect(200, expectedPlant)
              })
            })
        })
    })
  })