

test("TestAdd 5", function(){
    function Add() {
        expect(Add(2, 3)).toBe(5);
    }

    Add();
});

test("TestAdd 10", function(){
    function Add() {
        expect(Add(5, 5)).toBe(10);
    }

    Add();
});