const getDataFromLS = () => {
  const savedData = localStorage.getItem('appsId');

  if (savedData) {
    const dataParse =  JSON.parse(savedData);
    return dataParse;
  }
  return [];
}

const setDataToLS = (id) => {
  const savedData = getDataFromLS();
  if (!savedData.includes(id)) {
    savedData.push(id);
  }

  const stringifyData = JSON.stringify(savedData);
  saveDataToLS(stringifyData);
}

const saveDataToLS = (data) => {
  const setData = localStorage.setItem("appsId", data);
  return setData;
}

const removeDataFromLS = (unInstallId) => {
  const savedId = getDataFromLS();
  const newIDs = savedId.filter((id) => id !== unInstallId);

  const stringifyData = JSON.stringify(newIDs);
  saveDataToLS(stringifyData);
}

export { getDataFromLS, setDataToLS, removeDataFromLS };