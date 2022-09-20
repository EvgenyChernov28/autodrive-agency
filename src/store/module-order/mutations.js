export function setShowCard(state, value) {
  state.showCard = value;
}

export function setName(state, value) {
  state.currentName = value;
}
export function setPhone(state, value) {
  state.currentPhone = value;
}
export function setEmail(state, value) {
  state.currentEmail = value;
}
export function setCity(state, value) {
  state.currentCity = value;
}

export function setErrorMessge(state, { key, text }) {
  state.errorMessage[key] = text;
}
export function setResponceMessage(state, message) {
  state.responce = message;
}
