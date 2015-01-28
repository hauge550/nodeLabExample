
//Just some example testing.
describe('testing basic functions', function(){
    it('should return the correct string length', function(){
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function(){
        expect(returnKittens()).toBe("kittens");
    });

    //this test should fail.
    it('this test should (no longer) fail!', function(){
        expect(returnKittens()).toBe("kittens");
    });

    it('5-3 should return 2', function(){
        expect(subtractTwo(5,3)).toBe(2);
    });

    it('A for a 4 credit class, B for a 3 credit class, and C for a 4 credit class', function(){
       expect(GPACalculator("A", 4, "B", 3, "C", 4).toBe(3));
    });

    it("B should return 3.0", function(){
        expect(switchFunction("B").toBe(3.0));
    });
});

