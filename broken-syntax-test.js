const badFunction = () => {
  console.log("This line has an unclosed parenthesis");
  const a = 10;
  if (a == 10) {
    console.log("Another syntax mistake");
  }
}; // Fixed: added closing brace and semicolon
// All syntax errors have been fixed
