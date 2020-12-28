const getHotels = () => {
    return [
        { id: 1, name: "Thiago Hotel" },
        { id: 2, name: "Brucelherme Hotel" },
        { id: 3, name: "Cachorros Hotel" },
    ];
};

const getRatings = () => {
    return [
        { hotel_id: 1, client_id: 1, rating: 5 },
        { hotel_id: 1, client_id: 2, rating: 4 },
        { hotel_id: 1, client_id: 3, rating: 5 },

        { hotel_id: 2, client_id: 1, rating: 2 },
        { hotel_id: 2, client_id: 2, rating: 4 },
        { hotel_id: 2, client_id: 3, rating: 3 },

        { hotel_id: 3, client_id: 1, rating: 3 },
        { hotel_id: 3, client_id: 2, rating: 5 },
        { hotel_id: 3, client_id: 3, rating: 4 },
    ];
};

const getHotelsWithRatings = () => {
    return getHotels().map((hotel) => {
        hotel.ratings = getRatings().filter((r) => r.hotel_id === hotel.id);
        return hotel;
    });

};

const getHotelsAverageRatings = () => {
    return getHotels().map(hotel => {
        const ratings = getRatings().filter((r) => r.hotel_id === hotel.id);
        hotel.average = ratings.reduce((acc, el) => acc + el.rating, 0 / ratings.length)
        return hotel

    })
}

console.log(getHotelsAverageRatings());

module.exports = { getHotels, getRatings, getHotelsWithRatings, getHotelsAverageRatings }