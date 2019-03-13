function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(katzDeliLine) {
  return katzDeliLine.length ? `Currently serving ${katzDeliLine.shift()}.` : "There is nobody waiting to be served!";
}
function currentLine(line) {
    return line.length ? line.reduce((a,c,i)=>a + ` ${i+1}. ${c},`,"The line is currently:") : "The line is currently empty.";
}
