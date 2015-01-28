describe('testing basic functions', function(){
    it('A for a 4 credit class, B for a 3 credit class, and C for a 4 credit class', function(){
        expect(GPACalculator("A", 4, "B", 3, "C", 4).toBe(3));
    });

    it("B should return 3.0", function(){
        expect(ifFunction("F").toBe(0.0));
    });
});