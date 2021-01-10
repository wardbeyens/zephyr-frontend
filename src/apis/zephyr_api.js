import axios from "axios";

const BaseUrl = "https://zephyr.wabyte.com";

class MyApi {
  static getAllClothes() {
    return axios.get(BaseUrl + "/clothes");
  }

  //   static getClothesByID(id) {
  //     return axios.get(BaseUrl + "/clothes/" + id);
  //   }

  static getUserByuserName(userName) {
    return axios.get(BaseUrl + "/user/search?userName=" + userName);
  }

  //   static getUserByID(id) {
  //     return axios.get(BaseUrl + "/user/search?uuid=" + id);
  //   }

  //   static createUser(user) {
  //     return axios.post(BaseUrl + "/user", user);
  //   }

  static getOrderByUserID(id) {
    return axios.get(BaseUrl + "/orders/search?userID=" + id);
  }

  static createOrder(order) {
    return axios.post(BaseUrl + "/order", order);
  }

  static updateOrder(order) {
    return axios.put(BaseUrl + "/order/" + order.uuid, order);
  }

  //   static updateOrderPaid(id) {
  //     return axios.post(BaseUrl + "/order/" + id + "/paid");
  //   }

  //   static deleteOrder(id) {
  //     return axios.delete(BaseUrl + "/order/" + id);
  //   }

  //   static createCategory(category) {
  //     return axios.post(BaseUrl + "/categories", category);
  //   }

  //   static updateCategory(category) {
  //     return axios.put(BaseUrl + "/categories/" + category.categoryID, category);
  //   }

  //   static deleteCategory(category) {
  //     return axios.delete(BaseUrl + "/categories/" + category);
  //   }
}

export default MyApi;
