
//Just some example testing.
describe('testing basic functions', function() {
    it('should return the correct string length', function () {
        expect(testStringLength("kittens")).toEqual(7);
    });

    it('returnKittens should return kittens', function () {
        expect(returnKittens()).toBe("kittens");
    });

    //this test should fail.
    it('this test should (no longer) fail!', function () {
        expect(returnKittens()).toBe("kittens");
    });

    it('5-3 should return 2', function () {
        expect(subtractTwo(5, 3)).toBe(2);
    });

});


