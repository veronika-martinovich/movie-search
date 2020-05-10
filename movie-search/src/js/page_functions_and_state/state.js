export const state = {
  fetchingPage: false,
  searchQuery: "guys",
  sliderNextPage: 1,
  sliderTotalMovies: 0,
  remainingMovies: 5,
  moviesPerPage: 10,
  activeKeyboardValue: sessionStorage.getItem("activeValue") || "firstValue",
  nextKeyboardValue: sessionStorage.getItem("nextValue") || "secondValue",
  isKeyboardCapsLockOn: false,
  isKeyboardShiftOn: false,
  keyboardButtons: [],
};
