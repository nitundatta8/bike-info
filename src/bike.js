export class BikeService {
  async getBikeByCity(city) {
    try {
      let response = await fetch(`https://bikeindex.org:443/api/v3/search?location=${city}&distance=10`);
      let jsonifiedResponse;
      if (response.ok && response.status == 200) {
        jsonifiedResponse = await response.json();
      } else {
        jsonifiedResponse = false;
      }
      return jsonifiedResponse;
    } catch(error) {
      return false;
    }
  }
}