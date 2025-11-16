export const loadingManager = {
  set: () => {},
};

export const registerLoadingSetter = (setter) => {
  loadingManager.set = setter;
};
