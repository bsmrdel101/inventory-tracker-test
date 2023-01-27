export const addItem = () => {
  // 
};

export const removeItem = (id: number) => {
  document.getElementById(`inventory__item-${id}`)?.remove();
};
