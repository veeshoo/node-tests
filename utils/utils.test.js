const expect = require("expect");

const utils = require("./utils");

it('should add two numbers', () => {
    var result = utils.add(33, 11);

    expect(result).toBe(44).toBeA("number");
});

it('should square a number', () => {
    var result = utils.square(16);

    expect(result).toBe(256).toBeA("number");
    
});

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