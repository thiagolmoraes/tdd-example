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
    { hotel_id: 2, client_id: 4, rating: 2 },
    { hotel_id: 2, client_id: 5, rating: 3 },
    { hotel_id: 2, client_id: 6, rating: 4 },
    { hotel_id: 3, client_id: 7, rating: 3 },
  ];
};
