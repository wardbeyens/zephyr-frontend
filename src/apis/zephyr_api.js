import axios from "axios";

const BaseUrl = "https://zephyr.wabyte.com";

class MyApi {
  static getAllClothes() {
    return axios.get(BaseUrl + "/clothes");
  }

  static createClothes(clothes) {
    return axios.post(BaseUrl + "/clothes", clothes);
  }

  static updateClothes(clothes) {
    return axios.put(BaseUrl + "/clothes/" + clothes.uuid, clothes);
  }

  static deleteClothes(clothes) {
    return axios.delete(BaseUrl + "/clothes/" + clothes.uuid);
  }

  //   static getClothesByID(id) {
  //     return axios.get(BaseUrl + "/clothes/" + id);
  //   }

  static createUser(user) {
    return axios.post(BaseUrl + "/user", user);
  }

  static getAllUsers() {
    return axios.get(BaseUrl + "/users");
  }

  static getUserByuserName(userName) {
    return axios.get(BaseUrl + "/user/search?userName=" + userName);
  }

  //   static getUserByID(id) {
  //     return axios.get(BaseUrl + "/user/search?uuid=" + id);
  //   }

  static updateUser(user) {
    let newUser = {};
    newUser.userName = user.userName;
    newUser.firstName = user.firstName;
    newUser.lastName = user.lastName;
    newUser.email = user.email;
    newUser.password = user.password;
    newUser.streetName = user.streetName;
    newUser.number = user.number;
    newUser.postalCode = user.postalCode;
    newUser.city = user.city;
    newUser.phoneNumber = user.phoneNumber;

    return axios.put(BaseUrl + "/user/" + user.userName, newUser);
  }

  static deleteUser(user) {
    return axios.delete(BaseUrl + "/user/" + user.userName);
  }

  //   static deleteCategory(category) {
  //     return axios.delete(BaseUrl + "/categories/" + category);
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
