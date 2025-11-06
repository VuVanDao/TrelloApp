export const mapOrder = (originalArray, orderArray, key) => {
  if (!originalArray || !orderArray || !key) return [];

  const clonedArray = [...originalArray];
  const orderedArray = clonedArray.sort((a, b) => {
    return orderArray.indexOf(a[key]) - orderArray.indexOf(b[key]);
    //     +. a - b = giá trị âm(<0) => a trước b,
    //     +. a - b = giá trị dương(>0) => b trước a,
    //     +. a - b = bằng 0(=0) =>  Giữ nguyên thứ tự hiện tại
  });

  return orderedArray;
};
