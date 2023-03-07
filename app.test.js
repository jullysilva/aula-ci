

test("TestAdd 5", function(){
    function Add() {
        equal(Add(2, 3), 5);
    }

    Add();
});

test("TestAdd 10", function(){
    function Add() {
        equal(Add(5, 5), 10);
    }

    Add();
});