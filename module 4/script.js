(function () {

    var names = ["raj", "Justin", "Jay", "Jayant", "Parth", "jaswant", "Lalit", "arav", "udit", "Jimmy"];
    
    for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
    
      if (firstLetter === 'j') {
        byeSpeaker(names[i]);
      }
      else {
        helloSpeaker(names[i]);
      }
    }
    
    })();
