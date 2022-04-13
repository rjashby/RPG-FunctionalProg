const assignStats = (intel, dex, str, char, wis, cons) => {
  return (val1, val2, val3, val4, val5, val6) => {
    return (obj) => ({
      ...obj,
      [intel] : (obj[intel] || 0) + val1,
      [dex] : (obj[dex] || 0) + val2,
      [str] : (obj[str] || 0) + val3,
      [char] : (obj[char] || 0) + val4,
      [wis] : (obj[wis] || 0) + val5,
      [cons] : (obj[cons] || 0) + val6,
    })
  }
};

statRoll = function() {
  let dice1 = Math.floor(Math.random() * 6 ) + 1; 
  let dice2 = Math.floor(Math.random() * 6 ) + 1; 
  let dice3 = Math.floor(Math.random() * 6 ) + 1; 
  let dice4 = Math.floor(Math.random() * 6 ) + 1; 
  let stats = dice1 + dice2 + dice3 + dice4
  return stats
};


const baseChar1Stats = assignStats("intel", "dex", "str", "char", "wis", "cons")(statRoll(), statRoll(), statRoll(), statRoll(), statRoll(), statRoll());

const baseChar2Stats = assignStats("intel", "dex", "str", "char", "wis", "cons")(statRoll(), statRoll(), statRoll(), statRoll(), statRoll(), statRoll());

const baseChar3Stats = assignStats("intel", "dex", "str", "char", "wis", "cons")(statRoll(), statRoll(), statRoll(), statRoll(), statRoll(), statRoll());

const baseChar4Stats = assignStats("intel", "dex", "str", "char", "wis", "cons")(statRoll(), statRoll(), statRoll(), statRoll(), statRoll(), statRoll());

const rangerState = () => {
  let ranger = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(ranger);
    ranger = {...newState};
    return newState;
  };
};

const rangerControl = rangerState();

const warlockState = () => {
  let warlock = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(warlock);
    warlock = {...newState};
    return newState;
  };
};

const warlockControl = warlockState();

const warlockState = () => {
  let warlock = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(warlock);
    warlock = {...newState};
    return newState;
  };
};

const warlockControl = warlockState();

const warlockState = () => {
  let warlock = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(warlock);
    warlock = {...newState};
    return newState;
  };
};

const warlockControl = warlockState();

$(document).ready(function() {
  $('#roll').click(function() {
    console.log("is this thing on?");
    const getStats = rangerControl(baseChar1Stats);
    $('#char1').text(`Intelligence: ${getStats.intel}; Dexterity: ${getStats.dex}; Strength: ${getStats.str}; Wisdom: ${getStats.wis}; Charisma: ${getStats.char}; Constitution: ${getStats.cons}`);
    console.log(rangerControl());
  });

    $('#roll2').click(function() {
      console.log("is this thing on?");
      const getStats = warlockControl(baseChar2Stats);
      $('#char2').text(`Intelligence: ${getStats.intel}; Dexterity: ${getStats.dex}; Strength: ${getStats.str}; Wisdom: ${getStats.wis}; Charisma: ${getStats.char}; Constitution: ${getStats.cons}`);
      console.log(warlockControl());
    });

  $('#showstats').click(function() {
    console.log("is this thing on?");
    const rangState = rangerControl();
    $('#output').text(`These are your current stats: ${rangState.intel}, ${rangState.dex}, ${rangState.str} ,${rangState.wis} ,${rangState.char} ,${rangState.cons}`);
    const warState = warlockControl();
    $('#output2').text(`These are your current stats: ${warState.intel}, ${warState.dex}, ${warState.str} ,${warState.wis} ,${warState.char} ,${warState.cons}`);
  });
});