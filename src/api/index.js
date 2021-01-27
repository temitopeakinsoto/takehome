export const submitFormData = async (url = "", data) => {
  const option = {
    method: "POST",
    data: JSON.stringify(data),
    header: {
      "content-type": "application/json",
    },
  };
  try {
    return await fetch(url, option);
  } catch (error) {
    throw new Error(error.message);
  }
};
