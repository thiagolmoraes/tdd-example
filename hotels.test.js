const hotels = require("./hotels");

describe("hotels", () => {
  it("works", () => {
    expect(1 + 1).toBe(2);
  });

  it("get hotels with ratings", () => {
    hotels.getHotels = jest.fn();
    hotels.getHotels.mockReturnValue([
      { id: 1, name: "Thiago Hotel" },
      { id: 2, name: "Brucelherme Hotel" },
      { id: 3, name: "Cachorros Hotel" },
    ]);

    // jest.mock(hotels, 'getHotel').toReturn([])
    const expected = [
      {
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
          { hotel_id: 2, client_id: 4, rating: 2 },
          { hotel_id: 2, client_id: 5, rating: 3 },
          { hotel_id: 2, client_id: 6, rating: 4 },
        ],
      },
      {
        id: 3,
        name: "Cachorros Hotel",
        ratings: [{ hotel_id: 3, client_id: 7, rating: 3 }],
      },
    ];

    expect(hotels.getHotelsWithRatings()).toEqual(expected);
  });

  it("get hotels with average ratings", () => {

  });
});
