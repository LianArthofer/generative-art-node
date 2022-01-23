const layersOrder = [
    { name: 'background', number: 1 },
    { name: 'eye', number: 2 },
    { name: 'hair', number: 2},
];
  
const format = {
    width: 400,
    height: 400
};

const rarity = [
    { key: "", val: "original" },
    { key: "_r", val: "rare" },
    { key: "_sr", val: "super rare" },
];

const defaultEdition = 5;

module.exports = { layersOrder, format, rarity, defaultEdition };