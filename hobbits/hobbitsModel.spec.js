const Hobbits = require('./hobbitsModel.js')

const db = require('../data/dbConfig')
describe('hobbits model', function() {

    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })
    describe('insert()', function() {
        beforeEach(async () => {
            await db('hobbits').truncate();
        })
        it('adds the new hobbit to the db', async function() {
            // call insert passing a hobbit

            await Hobbits.insert({ name: 'samwise'});

            // open the db and see that the hobbit is there
            const hobbits = await db('hobbits')
            // console.log(hobbits)
            expect(hobbits).toHaveLength(1);

            
        })
    })
    describe('delete()', function() {
        beforeEach(async () => {
            await db('hobbits').truncate();
        })
        it('removes the hobbit from the db', async function() {
            // check that the table is empty

            // add a hobbit

            // check that the hobbit is there

            
        })
    })
    
})
