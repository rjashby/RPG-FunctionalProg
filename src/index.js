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

const sorcererState = () => {
  let sorcerer = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(sorcerer);
    sorcerer = {...newState};
    return newState;
  };
};

const sorcererControl = sorcererState();

const rogueState = () => {
  let rogue = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(rogue);
    rogue = {...newState};
    return newState;
  };
};

const rogueControl = rogueState();

$(document).ready(function() {
  $('#roll').click(function() {
    const getStats = rangerControl(baseChar1Stats);
    $('#char1').text(`RANGER - Intelligence: ${getStats.intel}; Dexterity: ${getStats.dex}; Strength: ${getStats.str}; Wisdom: ${getStats.wis}; Charisma: ${getStats.char}; Constitution: ${getStats.cons}`);
    document.getElementById("roll").disabled = true;
  });

  $('#roll2').click(function() {
    const getStats = warlockControl(baseChar2Stats);
    $('#char2').text(`WARLOCK - Intelligence: ${getStats.intel}; Dexterity: ${getStats.dex}; Strength: ${getStats.str}; Wisdom: ${getStats.wis}; Charisma: ${getStats.char}; Constitution: ${getStats.cons}`);
    document.getElementById("roll2").disabled = true;
  });

  $('#roll3').click(function() {
    const getStats = sorcererControl(baseChar3Stats);
    $('#char3').text(`SORCERER - Intelligence: ${getStats.intel}; Dexterity: ${getStats.dex}; Strength: ${getStats.str}; Wisdom: ${getStats.wis}; Charisma: ${getStats.char}; Constitution: ${getStats.cons}`);
    document.getElementById("roll3").disabled = true;
  });

  $('#roll4').click(function() {
    const getStats = rogueControl(baseChar4Stats);
    $('#char4').text(`ROGUE - Intelligence: ${getStats.intel}; Dexterity: ${getStats.dex}; Strength: ${getStats.str}; Wisdom: ${getStats.wis}; Charisma: ${getStats.char}; Constitution: ${getStats.cons}`);
    document.getElementById("roll4").disabled = true;
  });

  $('#showstats').click(function() {
    const rangState = rangerControl();
    $('#output').text(`These are your Ranger's current stats: ${rangState.intel}, ${rangState.dex}, ${rangState.str} ,${rangState.wis} ,${rangState.char} ,${rangState.cons}`);
    const warState = warlockControl();
    $('#output2').text(`These are your Warlock's current stats: ${warState.intel}, ${warState.dex}, ${warState.str} ,${warState.wis} ,${warState.char} ,${warState.cons}`);
    const sorcState = sorcererControl();
    $('#output3').text(`These are your Sorcerer's current stats: ${sorcState.intel}, ${sorcState.dex}, ${sorcState.str} ,${sorcState.wis} ,${sorcState.char} ,${sorcState.cons}`);
    const rogState = rogueControl();
    $('#output4').text(`These are your Rogue's current stats: ${rogState.intel}, ${rogState.dex}, ${rogState.str} ,${rogState.wis} ,${rogState.char} ,${rogState.cons}`);
  });
});