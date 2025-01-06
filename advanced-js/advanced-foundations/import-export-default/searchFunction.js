export default function getMatchingTrips(arr, keyword) {
  return arr.filter(function (trip) {
    return trip.description.toLowerCase().includes(keyword);
  });
}
