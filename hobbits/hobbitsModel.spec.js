const Hobbits = require('./hobbitsModel.js')

const db = require('../data/dbConfig')
describe('hobbits model', function() {

    describe('test environment', function() {
        it('should use the testing environment', function() {
            expect(process.env.DB_ENV).toBe('testing');
        })
    })
    // create
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
    // read
    describe('read()', function() {
        // beforeEach(async () => {
        //     await db('hobbits').truncate();
        // })
        it('reads all hobits from table', async function() {
            const allHobbits = await Hobbits.getAll()

            expect(allHobbits).not.toHaveLength(0)

        })
    })
    describe('read(id)', function() {
        beforeEach(async () => {
            await db('hobbits').truncate();
        })
        it('reads ith hobits from table', async function() {



            await Hobbits.insert({ name: 'samwise'});


            const oneHobbit = await Hobbits.findById(1)
            console.log(oneHobbit)
            expect(oneHobbit).toHaveLength(1)

        })
    })
    // update
    describe('update(id)', function() {
        beforeEach(async () => {
            await db('hobbits').truncate();
        })
        it('update ith hobits from table', async function() {



            await Hobbits.insert({ name: 'samwise'});


            const oneHobbit = await Hobbits.findById(1)
            if(oneHobbit.length > 1) {

            }
            const modifedHobit = await Hobbits.update(oneHobbit[0].id, {name: 'samring'})

            expect(oneHobbit).not.toStrictEqual(modifedHobit)

        })
    })
    // destroy
    describe('delete()', function() {
        beforeEach(async () => {
            await db('hobbits').truncate();
        })
        it('removes the hobbit from the db', async function() {
            // check that the table is empty
            let hobbits = await db('hobbits')
            if(hobbits.length === 0){

            }

            // add a hobbit
            await Hobbits.insert({ name: 'samwise'});


            // check that the hobbit is there
            hobbits = await db('hobbits')

            expect(hobbits).toHaveLength(1);
            // console.log(hobbits)
            // delete the hobbit
            await Hobbits.remove(hobbits[0].id)
            // check that the hobbit is gone 
            hobbits = await db('hobbits')
            expect(hobbits).toHaveLength(0);

        })
    })
    
    
})
// finish testing crud operations
