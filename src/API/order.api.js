import axios from "axios";
import { PAHT_ORDER } from "./path.api";

export async function sendOrder(obj) {
  let rez = await axios
    .post(PAHT_ORDER, obj)
    .then((resp) => {
      return resp.data;
    })
    .catch((error) => {
      return error;
    });
  return rez;
}
