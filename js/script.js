var names1 = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

for (var i = 0; i < names1.length; i++) {
    var firstletter = names1[i].charAt(0);

if (firstletter === "J") {
    goodbyespeaker(names1[i])
    
} else {
    hellospeaker(names1[i])
    
}    
}