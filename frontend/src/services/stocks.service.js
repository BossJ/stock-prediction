import http from "../http-common";

class StocksDataService {
    getStocks(values) {
      console.log(values)
      return http.get("/stocks/history", {params: values} );
    }
    create(values) {
      console.log(values)
      return http.get("/stocks/create", {params: values} );
    }

}

export default new StocksDataService();