export const loadingManager = {
  set: () => {}, // sau registerLoadingSetter(setIsCallingApi) thi loadingManager.set = setIsCallingApi
};

export const registerLoadingSetter = (setter) => {
  loadingManager.set = setter;
};
