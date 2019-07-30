const knex = require('knex')
const app = require('../src/app')
const { makeFoodsArray} = require('./test.fixtures')

describe('Foods Endpoints', function() {
    let db

    before('make knex instance', () => {
        db = knex({
          client: 'pg',
          connection: process.env.TEST_DB_URL,
        })
        app.set('db', db)
      })

      after('disconnect from db', () => db.destroy())

      before('clean the table', () => db('k911_foods').truncate())
    
      afterEach('cleanup',() => db('k911_foods').truncate())

      describe(`GET /api/foods`, () => {
        context(`Given no foods`, () => {
          it(`responds with 200 and an empty list`, () => {
            return supertest(app)
              .get('/api/foods')
              .expect(200, [])
          })
        })
        context('Given there are foods in the database', () => {
            const testFoods = makeFoodsArray()
      
            beforeEach('insert foods', () => {
              return db
                .into('k911_foods')
                .insert(testFoods)
            })
      
            it('responds with 200 and all of the foods', () => {
              return supertest(app)
                .get('/api/foods')
                .expect(200, testFoods)
            })
          })


      describe(`GET /api/foods/:food_id`, () => {
            context(`Given no foods`, () => {
              it(`responds with 404`, () => {
                const foodId = 123456
                return supertest(app)
                  .get(`/api/foods/${foodId}`)
                  .expect(404, { error: { message: `Food item doesn't exist` } })

                })
            })
        
            context('Given there are foods in the database', () => {
              const testFoods = makeFoodsArray()
        
              beforeEach('insert foods', () => {
                return db
                  .into('k911_foods')
                  .insert(testFoods)
              })
        
              it('responds with 200 and the specified food', () => {
                const foodId = 2
                const expectedFood = testFoods[foodId - 1]
                return supertest(app)
                  .get(`/api/foods/${foodId}`)
                  .expect(200, expectedFood)
              })
            })
        })
    })
  })