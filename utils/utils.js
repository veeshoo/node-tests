module.exports.add = (a, b) => a+b;

module.exports.square = (a) => a*a;

module.exports.asyncAdd = (a, b, callback) => {
    setTimeout(() => {
        callback(a+b);
    }, 1000);
}

module.exports.asyncSquare = (a, callback) => {
    setTimeout(() => {
        callback(a*a);
    }, 1000);
}

module.exports.setName = (user, fullname) => {
    var names = fullname.split(" ");
    user.firstName = names[0];
    user.lastName = names[1];
    return user;
}