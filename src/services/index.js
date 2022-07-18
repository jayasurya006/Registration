import axios from "axios";

export const registerUser = (values) => {
  return axios("http://192.168.0.112:3003/parent/createparents", {
    method: "POST",
    data: values,
  }).then((resp) => {
    console.log(resp);
  });
};
