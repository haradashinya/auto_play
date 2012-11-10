
var play_len = $(".play").length;

var i = 0;

var api = {
  check: function(){
    console.log("f");
    var b ;
    if(location.href === "http://soundcloud.com/you/favorites"){
      b = true;
    }else{
      clearInterval(window.watcher);
      b = false;
    }
    return b;
  },

  watch: function(){
    if ($(".playing").length === 0 && api.check()){
      console.log("called");
      $(".play")[i].click();
      i++;
      if (i === play_len){
        i = 0;
      }
    }
  }
};


window.watcher = setInterval(api.watch,3000);





