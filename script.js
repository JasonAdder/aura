const people = ["Jason", "Tejesh", "Joel", "Shahid", "Rahul", "Bucta"];
let aura = {};
let history = [];

people.forEach(name => aura[name] = 1000000);

function updateDisplay() {
  const display = document.getElementById("aura-display");
  display.innerHTML = "";
  people.forEach(name => {
    const p = document.createElement("p");
    p.textContent = `${name}: ${aura[name].toLocaleString()}`;
    display.appendChild(p);
  });
}

function logHistory(entry) {
  history.push(entry);
  const list = document.getElementById("history");
  const item = document.createElement("li");
  item.textContent = entry;
  list.prepend(item);
}

function addAura() {
  const person = document.getElementById("person").value;
  const amount = parseInt(document.getElementById("amount").value);
  if (!isNaN(amount)) {
    aura[person] += amount;
    logHistory(`Added ${amount} aura to ${person}`);
    updateDisplay();
  }
}

function reduceAura() {
  const person = document.getElementById("person").value;
  const amount = parseInt(document.getElementById("amount").value);
  if (!isNaN(amount)) {
    aura[person] -= amount;
    logHistory(`Reduced ${amount} aura from ${person}`);
    updateDisplay();
  }
}

function transferAura() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const amount = parseInt(document.getElementById("transferAmount").value);
  if (!isNaN(amount) && from !== to && aura[from] >= amount) {
    aura[from] -= amount;
    aura[to] += amount;
    logHistory(`Transferred ${amount} aura from ${from} to ${to}`);
    updateDisplay();
  }
}

updateDisplay();
