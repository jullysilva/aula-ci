const Add = require('./app.js');

test("TestAdd 5", function(){
        expect(Add(2, 3)).toBe(5);
});

test("TestAdd 10", function(){
        expect(Add(5, 5)).toBe(10);

});