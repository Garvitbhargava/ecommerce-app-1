export const base_url = "http://localhost:4000/api/";

const getTokenFromLocalStorage = localStorage.getItem("customer")
    ? JSON.parse(localStorage.getItem("user")) : null;
  
export const config = {
    headers: {
        Authorization: `Bearer ${getTokenFromLocalStorage?.token}`,
        Accept: "application/json"
        }
    }