var typeString = ['Futur & Technology', 'Futur & Innovation', 'Futur & projects'];
      var  i = 0;
      var count = 0
      var selectedText = '';
      var text = '';
      (function type() {
        if (count == typeString.length) {
          count = 0;
        }
        selectedText = typeString[count];
        text = selectedText.slice(0, ++i);
        document.getElementById('typing').innerHTML = text;
        if (text.length === selectedText.length) {
          count++;
          i = 0;
        }
        setTimeout(type, 225);
      }());

      function sleep(milliseconds) {
        var start = new Date().getTime();
        for (var i = 0; i < 1e7; i++) {
          if ((new Date().getTime() - start) > milliseconds){
            break;
          }
        }
      }