

export const statusChange = (select, data) => {
  const statusShow = data.filter(characterCard => characterCard.status === select.value);
  return statusShow;
};

export const genderChange = (select, data) => {
  const genderShow = data.filter(characterCard => characterCard.gender === select.value);
  return genderShow;
};

export const speciesChange = (select, data) => {
  const speciesShow = data.filter(characterCard => characterCard.species === select.value);
  return speciesShow;
};

export const originChange = (select, data) => {
  const originShow = data.filter(characterCard => characterCard.origin.name === select.value);
  return originShow;
};

export const locationChange = (select, data) => {
  const locationShow = data.filter(characterCard => characterCard.location.name === select.value);
  return locationShow;
};

export const searchChange = (select, data) => {
  const nameShow = data.filter(characterCard => characterCard.name.startsWith(select.value));
  return nameShow;
};

export const sortCharacters = (sortfilter, data) => {
 
  if(sortfilter === "A"){
    const orderedCharacters = data.sort((a, b) => ((a.name).localeCompare(b.name)));
    return orderedCharacters;
      
  }else if (sortfilter === "Z"){
    const orderedCharacters = data.sort((a, b) => ((a.name).localeCompare(b.name)));
    const orderInReverse = orderedCharacters.reverse();
    return orderInReverse;
  }
  return data;
}