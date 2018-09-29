$(function(){
  var te = $("#te");
  $(".font-aaaa").click(function(){
    te.css("font-family","'Orbitron', sans-serif");
  });
  $(".font-aaab").click(function(){
    te.css("font-family","'Anonymous Pro', monospace");
  });
  $(".font-aaac").click(function(){
    te.css("font-family","'Source Code Pro', monospace");
  });
  $(".font-aaad").click(function(){
    te.css("font-family","'Cookie', cursive");
  });
  $(".font-aaae").click(function(){
    te.css("font-family","Arial");
  });
  $(".font-aaaf").click(function(){
    te.css("font-family","'Aldrich', sans-serif");
  });
  $(".font-aaag").click(function(){
    te.css("font-family","'Indie Flower', cursive");
  });
  $(".font-aaah").click(function(){
    te.css("font-family","'Monoton', cursive");
  });
  $(".font-aaai").click(function(){
    te.css("font-family","'Almendra', serif");
  });
  $(".font-aaaj").click(function(){
    te.css("font-family","'Cabin Sketch', cursive");
  });
  $(".font-aaak").click(function(){
    te.css("font-family","'Kelly Slab', cursive");
  });
  $(".font-aaal").click(function(){
    te.css("font-family","'Lekton', cursive");
  });
  $(".font-aaam").click(function(){
    te.css("font-family","'Henny Penny', cursive");
  });
  $(".font-aaan").click(function(){
    te.css("font-family","'Great Vibes', cursive");
  });
  $(".font-aaao").click(function(){
    te.css("font-family","'Grand Hotel', cursive");
  });
  $(".font-aaap").click(function(){
    te.css("font-family","'Audiowide', cursive");
  });
  $(".font-aaaq").click(function(){
     te.css("font-family","'UnifrakturCook', cursive"); 
  });
  $(".font-aaar").click(function(){
    te.css("font-family","'UnifrakturMaguntia', cursive");
  });
  $(".font-aaas").click(function(){
    te.css("font-family","'Underdog', cursive");
  });
  $(".font-aaat").click(function(){
    te.css("font-family","'EB Garamond', serif");
  });
  $(".font-aaau").click(function(){
    te.css("font-family","'Eagle Lake', cursive");
  });
  $(".font-aaav").click(function(){
    te.css("font-family","'Dynalight', cursive");
  });
  $(".font-aaaw").click(function(){
    te.css("font-family","'Goudy Bookletter 1911', serif");
  });
  $("#size11").click(function(){
    te.css("font-size","11px");
  });
  $("#size12").click(function(){
    te.css("font-size","12px");
  });
  $("#size13").click(function(){
    te.css("font-size","13px");
  });
  $("#size14").click(function(){
    te.css("font-size","14px");
  });
  $("#size15").click(function(){
    te.css("font-size","15px");
  });
  $("#size16").click(function(){
    te.css("font-size","16px");
  });
  $("#size17").click(function(){
    te.css("font-size","17px");
  });
  $("#normal").click(function(){
    te.css("font-weight","normal");
    te.css("font-style","normal");
    te.css("text-decoration","none");
  });
  $("#bold").click(function(){
    te.css("font-weight","bold");
  });
  $("#italic").click(function(){
    te.css("font-style","italic");
  });
  $("#left").click(function(){
    te.css("text-align","left");
  });
  $("#right").click(function(){
    te.css("text-align","right");
  });
  $("#center").click(function(){
    te.css("text-align","center");
  });
  $("#white").click(function(){
    te.css("color","white");
  });
  $("#black").click(function(){
    te.css("color","black");
  });
  $("#red").click(function(){
    te.css("color","red");
  });
  $("#crimson").click(function(){
    te.css("color","crimson");
  });
  $("#blue").click(function(){
    te.css("color","blue");
  });
  $("#dgblue").click(function(){
    te.css("color","dodgerblue");
  });
  $("#darkblue").click(function(){
    te.css("color","darkblue");
  });
  $("#teal").click(function(){
    te.css("color","teal");
  });
  $("#purple").click(function(){
    te.css("color","purple");
  });
  $("#magenta").click(function(){
    te.css("color","magenta");
  });
  $("#pink").click(function(){
    te.css("color","pink");
  });
  $("#hotpink").click(function(){
    te.css("color","hotpink");
  });
  $("#deeppink").click(function(){
    te.css("color","deeppink");
  });
  $("#bgwhite").click(function(){
    te.css("background-color","white");
  });
  $("#bgred").click(function(){
    te.css("background-color","red");
  });
  $("#bgcrimson").click(function(){
    te.css("background-color","crimson");
  });
  $("#bgblue").click(function(){
    te.css("background-color","blue");
  });
  $("#bgdgblue").click(function(){
    te.css("background-color","dodgerblue");
  });
  $("#bgdarkblue").click(function(){
    te.css("background-color","darkblue");
  });
  $("#bgteal").click(function(){
    te.css("background-color","teal");
  });
  $("#bgpurple").click(function(){
    te.css("background-color","purple");
  });
  $("#bgmagenta").click(function(){
    te.css("background-color","magenta");
  });
  $("#bgpink").click(function(){
    te.css("background-color","pink");
  });
  $("#bghotpink").click(function(){
    te.css("background-color","hotpink");
  });
  $("#bgdeeppink").click(function(){
    te.css("background-color","deeppink");
  });
  $(document).ready(function(){
    $("#save").click(function(){
          var text1 = te.val();
          var background = te.css("background-color");
          var font = te.css("font-family");
          var weight = te.css("font-weight");
          var fstyle = te.css("font-style");
          var color = te.css("color");
          var align = te.css("text-align");
          var size = te.css("font-size");
          $.cookie('editor', text1, { expires : 7 });
          $.cookie('background', background, { expires : 7 });
          $.cookie('font', font, { expires : 7 });
          $.cookie('weight', weight, { expires : 7 });
          $.cookie('fstyle', fstyle, { expires : 7 });
          $.cookie('color', color, { expires : 7 });
          $.cookie('align', align, { expires : 7 });
          $.cookie('size', size, { expires : 7 });
      });
      checkCookieValues();
  });
  function checkCookieValues(){
    if ($.cookie('editor')!=="undefined") {
      te.val($.cookie('editor'));
      te.css("background-color", $.cookie('background'));
      te.css("font-family", $.cookie('font'));
      te.css("font-weight", $.cookie('weight'));
      te.css("font-style", $.cookie('fstyle'));
      te.css("color", $.cookie('color'));
      te.css("text-align", $.cookie('align'));
      te.css("font-size", $.cookie('size'));
    }
  }
});
