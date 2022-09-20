import API from "@/API/API";

function isEmpty(obj) {
  let empty = true;
  for (let key in obj) {
    if (obj[key] != "") {
      empty = false;
    }
  }
  return empty;
}

export function setShowCardAC({ commit }, value) {
  commit("setShowCard", value);
}
export async function setOrderAC({ commit, dispatch, getters }) {
  if (!getters.getCurrentName) {
    commit("setErrorMessge", { key: "name", text: "*Обязательное поле" });
  } else {
    commit("setErrorMessge", { key: "name", text: "" });
  }
  if (!getters.getCurrentPhone) {
    commit("setErrorMessge", { key: "phone", text: "*Обязательное поле" });
  } else if (getters.getCurrentPhone.length < 18) {
    commit("setErrorMessge", { key: "phone", text: "*Введите валидный номер" });
  } else {
    commit("setErrorMessge", { key: "phone", text: "" });
  }
  if (!getters.getCurrentEmail) {
    commit("setErrorMessge", { key: "email", text: "*Обязательное поле" });
  } else if (getters.getErrorMessage["email"]) {
    commit("setErrorMessge", {
      key: "email",
      text: getters.getErrorMessage["email"],
    });
  } else {
    commit("setErrorMessge", { key: "email", text: "" });
  }

  if (isEmpty(getters.getErrorMessage)) {
    let getPhoneNumber = (phone) => {
      return (
        phone[0] +
        phone[1] +
        phone[4] +
        phone[5] +
        phone[6] +
        phone[9] +
        phone[10] +
        phone[11] +
        phone[13] +
        phone[14] +
        phone[16] +
        phone[17]
      );
    };

    let resp = await API.sendOrder({
      name: getters.getCurrentName,
      phone: getPhoneNumber(getters.getCurrentPhone),
      email: getters.getCurrentEmail,
      city_id: getters.getCity.find(
        (elem) => elem.name == getters.getCurrentCity
      ).id,
    });
    if (resp.status != 400) {
      dispatch("setShowCardAC", false);
      commit("setResponceMessage", resp);
    }
    commit("setName", "");
    commit("setPhone", "");
    commit("setEmail", "");
    commit("setCity", "");
  }
}
