var pytables = '<a href="http://pytables.github.io/">PyTables</a>';
var cyclus = '<a href="http://cyclus.github.io/">Cyclus</a>';
var xdress = '<a href="http://xdress.org/">XDress</a>';

// Row elements have form:
//   * comment
//   * person or null
//   * project or null
//   * Date or null
var msgs = [
    ["Many thanks for keeping such a great piece of work up and running. \
     I've just seen some features in the release notes, features which I \
     was going to need in the very near future! \nGreat job!",
     "Seref Arikan", pytables, new Date(2013, 6, 3, 0, 0, 0, 0)],
    ["Thank you from a happy user :)))", "Julio Trevisan", pytables, 
     new Date(2013, 6, 2, 0, 0, 0, 0)],
    ["Thanks Anthony. You are super helpful as always! Thanks for all your hard work.", 
     "{Private}", pytables, new Date(2013, 6, 2, 0, 0, 0, 0)], 
    ["I look forward to learning from your development experience.", 
     "{Private}", cyclus, new Date(2013, 6, 13, 0, 0, 0, 0)],
    ["You are doing an excellent job with xdress and it does have a lot of potential.", 
     "Sunil Kamalakar", xdress, new Date(2013, 6, 19, 0, 0, 0, 0)],
    ];

function getRandomMessage(){
    var msg = msgs[Math.floor(Math.random()*msgs.length)];
    return msg;
};
