const hotels = require("./hotels");

describe("hotels", () => {
    //First Test
    it("works", () => {
        expect(1 + 1).toBe(2);
    });

    //Second Test
    it("get hotels with ratings", () => {
        hotels.getHotels = jest.fn();
        hotels.getHotels.mockReturnValue([
            { id: 1, name: "Thiago Hotel" },
            { id: 2, name: "Brucelherme Hotel" },
            { id: 3, name: "Cachorros Hotel" },
        ]);

        //what you expect
        const expected = [{
                id: 1,
                name: "Thiago Hotel",
                ratings: [
                    { hotel_id: 1, client_id: 1, rating: 5 },
                    { hotel_id: 1, client_id: 2, rating: 4 },
                    { hotel_id: 1, client_id: 3, rating: 5 },
                ],
            },
            {
                id: 2,
                name: "Brucelherme Hotel",
                ratings: [
                    { hotel_id: 2, client_id: 1, rating: 2 },
                    { hotel_id: 2, client_id: 2, rating: 4 },
                    { hotel_id: 2, client_id: 3, rating: 3 },
                ],
            },
            {
                id: 3,
                name: "Cachorros Hotel",
                ratings: [{ hotel_id: 3, client_id: 1, rating: 3 },
                    { hotel_id: 3, client_id: 2, rating: 5 },
                    { hotel_id: 3, client_id: 3, rating: 4 }
                ],
            },
        ];

        expect(hotels.getHotelsWithRatings()).toEqual(expected);
    });


    it("get hotels with average ratings", () => {
        //what expect

        const expected = [
            { id: 1, name: 'Thiago Hotel', average: 4.6 },
            { id: 2, name: 'Brucelherme Hotel', average: 7 },
            { id: 3, name: 'Cachorros Hotel', average: 9.3 },
        ]
        expect(hotels.getHotelsAverageRatings()).toEqual(expected);
    });
});