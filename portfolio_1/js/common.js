$(function(){
  let imgList = ["./img/mainbanner_0.jpg","./img/mainbanner_1.jpg","./img/mainbanner_2.jpg"];
  var count = 0;
  let t = null;

  function show(){
    // console.log(count);
    $(".mainImg").attr("src", imgList[count]).animate({opacity: "1"});
    count++;
    if ( count == 3 ) {
      count = 0;
    }
    t = setTimeout(show, 2000);
  }

  // let timeID = null;
  // let auto = function(){
  //   timeID = setInterval(function(){
  //     show();
  //   },1000)
  //   return timeID;
  // }
  // auto();
  show();
  $(".mainImg").fadeIn();



  function btnFunc(el){
    el.click(function(){
      let ssInMarginLeft = parseInt(ssInner.css("margin-left"));
      let isAni = ssInner.is(":animated");
      if ( !isAni ) {
        if ( el.hasClass("nextbtn") ) {
          ssInner.animate({marginLeft: ssInMarginLeft - widthNum}, "slow", "swing", function(){
            sameFunc("nextbtn");
          });
       }else {
         ssInner.animate({marginLeft: ssInMarginLeft + widthNum}, "slow", "swing", function(){
           sameFunc("prevbtn");
         });
       }
      }
    })
  }

  $(".news-second .btn").each(function(){
    btnFunc($(this));
  });

  let timeID = null;
  let auto = function(){
    timerID = setInterval(function(){
      $(".nextbtn").trigger("click");
    },3000)
    return timerID;
  }
  auto();

  function autoType(elementClass, typingSpeed){
    let thisElem = $(elementClass);
    thisElem.prepend('<div class="cursor" style="left: 0; right: initial";></div>');
    thisElem = thisElem.find(".text");
    let text = thisElem.text().split('');
    thisElem.text("");
    let amntOFchars = text.length;
    let newString = '';

    setTimeout(function(){
      thisElem.css("opacity",1);
      thisElem.prev().removeAttr("style");
      for (var i = 0; i < amntOFchars; i++) {
        (function(count, char){
          setTimeout(function () {
            newString += char;
            thisElem.text(newString);
          },count*typingSpeed)
        })(i+1, text[i])
      }
    },1000);

  }
  $(function(){
    autoType(".typing",100);
  });


// 오른쪽 btn click 기능
  function gnbFunc(el){
    el.click(function(){
      $("#gnb2").css("display", "block");
      $(this).css("display", "none");
      $(".x-btn-wrap").css("display","block");
      $("#gnb").css("display", "none");
      return false;
    })
  }
  gnbFunc($(".nav-btn"));

  function gnbCloseFunc(el){
    el.click(function(){
      $("#gnb2").css("display", "none");
      $(".x-btn-wrap").css("display","none");
      $(".nav-btn").css("display","block");
      $("#gnb").css("display","block");
      return false;
    })
  }
  gnbCloseFunc($(".x-btn"));



// 헤더 서브메뉴 내려오는 기능
  $("#gnb ul li").hover(function(){
    $("#submenu-wrap").css("display","block");
    $("#header").css("background", "white");
    $(".koen .en").css("color", "black");
    $(".white-block").css("display","block");
    $("#submenu-wrap").hover(function(){
      $("#submenu-wrap").css("display","block");
      $("#header").css("background", "white");
      $(".koen .en").css("color", "black");
      $(".white-block").css("display","block");
    },function(){
      $("#submenu-wrap").css("display","none");
      $("#header").css("background", "none");
      $(".koen .en").css("color", "white");
      $(".white-block").css("display","none");
    })
  },function(){
    $("#submenu-wrap").css("display","none");
    $("#header").css("background", "none");
    $(".koen .en").css("color", "white");
    $(".white-block").css("display","none");
  });

  $("#submenu-wrap").hover(function(){
    $(this).css("display", "blcok");
  })


// 스크롤시 작동 부분
  $(window).scroll(function(){
    let scTop = $(this).scrollTop();
    // console.log(scTop);

    // 상단 header 스크롤 내릴시 fix, background 색상 변경
    if ( scTop == 0 ) {
      $("#header").css("background", "none");
      $(".koen .en").css("color", "white");
    }else if ( scTop != 0 ) {
      $("#header").css("background", "white");
      $(".koen .en").css("color", "black");
    }

    // 스크롤시 하단 타이핑 작동
    let typingTop = $("#typing-area").offset();
    let windowHeght = $(this).height();
    console.log(typingTop.top);
    // if ( typingTop.top +  windowHeght ) {
    //
    // }
  });


  // 하단 이미지 박스 hover
  $(".img-box").each(function(){
    $(this).hover(function(){
      $(this).css("background", "red");
    },function(){
      $(this).css("background", "white");
    });
  });


});
