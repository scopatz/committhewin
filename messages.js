var pytables = '<a href="http://pytables.github.io/">PyTables</a>';
var cyclus = '<a href="http://cyclus.github.io/">Cyclus</a>';
var xdress = '<a href="http://xdress.org/">XDress</a>';
var scipy2013 = '<a href="http://conference.scipy.org/scipy2013/">SciPy 2013</a>';

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
    ["you are a great organizer and conference host, i can already tell ;)", 
     "{Private}", scipy2013, 
     new Date(2013, 6, 20, 0, 0, 0, 0)], 
    ["You are geniuses and you are the best organizers in the world!", 
     "{Private}", scipy2013, 
     new Date(2013, 6, 30, 0, 0, 0, 0)], 
    ["I'm so glad that @scopatz provided me with an Air of Authority (Legitimacy?) for chairing a #scipy2013 session: a custom SciPy labcoat", 
     "Paul Ivanov", scipy2013, new Date(2013, 6, 26, 0, 0, 0, 0)], 
    ["I'm a fan of the labcoats all of the timekeepers are wearing. #scipy2013", 
     "Nathan Goldbaum", scipy2013, new Date(2013, 6, 26, 0, 0, 0, 0)], 
    ["RT @NathanGoldbaum: I'm a fan of the labcoats all of the timekeepers are wearing. #scipy2013 Thank the genius of @scopatz", 
     "Andy Terrel", scipy2013, new Date(2013, 6, 26, 0, 0, 0, 0)], 
    ["Cython doesn't do anything automatic, but @scopatz XDress can do it: generate Cython wrappers for C/C++ from a dict description #SciPy2013", 
     "Florian Rathgeber", scipy2013, new Date(2013, 6, 26, 0, 0, 0, 0)], 
    ["@scopatz Use Xdress to generate Clang AST bindings to use as the Xdress parser #scipy2013 (sickest hack yet!)",
     "Andy Terrel", scipy2013, new Date(2013, 6, 26, 0, 0, 0, 0)], 
    ];

function getRandomMessage(){
    var msg = msgs[Math.floor(Math.random()*msgs.length)];
    return msg;
};
