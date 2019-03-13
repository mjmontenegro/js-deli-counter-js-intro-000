function takeANumber(currentLine, name) {
  currentLine.push(name);
  return `Welcome, ${name}. You are number ${currentLine.length} in line.`;
}
function nowServing(currentLine) {
  return currentLine.length ? currentLine.shift() : "There is nobody waiting to be served!"
}
