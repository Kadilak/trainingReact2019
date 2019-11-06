it('should add two numberz', () => {
    //given

    const a = 1;
    const b = 100;

    //act
    const sum = (a,b) => { return a + b};

    const result = sum(a,b);
    //assert
    expect(result).toEqual(101)
})