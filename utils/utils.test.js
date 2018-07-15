const expect = require("expect");

const utils = require("./utils");

describe('Utils Tests', () => {
    describe('Add tests', () => {
        it('should add two numbers', () => {
            var result = utils.add(33, 11);
        
            expect(result).toBe(44).toBeA("number");
        });
        it('should async add two numbers.', (done) => {
            utils.asyncAdd(33, 22, (sum) => {
                expect(sum).toBe(55);
                done();
            });
        });
    });
    
    describe('Square Tests', () => {

        it('should async square a number', (done) => {
            utils.asyncSquare(7, (square) => {
                expect(square).toBe(49);
                done();
            });
        });
        
        it('should square a number', () => {
            var result = utils.square(16);
        
            expect(result).toBe(256).toBeA("number");
            
        });
    })
    
    
    it('should set First and Last names', () => {
        var user = {location:'Bangalore', age:41};
        var result = utils.setName(user, "Vishal Sehgal");
        expect(result).toBeA('object');
        expect(result).toBe(user);
        expect(user).toInclude({
            firstName:"Vishal"
        }).toInclude({
            lastName:"Sehgal"}
        );
    });
});
