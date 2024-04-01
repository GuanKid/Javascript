const adjectives = [
    "awesome",
    "brilliant",
    "charming",
    "dazzling",
    "elegant",
    "fantastic",
    "graceful",
    "handsome",
    "intelligent",
    "jovial",
    "kind",
    "lively",
    "magnificent",
    "nice",
    "outstanding",
    "pleasant",
    "quick-witted",
    "radiant",
    "smart",
    "talented",
    "unique",
    "vibrant",
    "witty",
    "youthful",
    "zesty"
  ];
  

  function describeName() {
    const name = prompt("Enter a name:");
    
    if (name) {
      const randomIndex = Math.floor(Math.random() * adjectives.length);
      const adjective = adjectives[randomIndex];
      
      console.log(`The name "${name}" is ${adjective}.`);
    } else {
      console.log("No name entered. Please try again.");
    }
  }
  
  describeName();
  
