$(document).ready(function () {
  $(".navmenu").css("right", "-100%");

  $(".navbtn").click(function () {
    $(".navmenu").animate({ right: "0" }, "fast");
  });

  $(".closeNav").click(function () {
    $(".navmenu").animate({ right: "-100%" }, "fast");
  });
});

$(document).ready(function () {
  $(".dropdown-menu").hide();
  $(".dropdown-menu2").hide();
  $(".up").hide();
  $(".up2").hide();

  $(".dropdown-toggle").click(function () {
    var dropdown = $(this).closest(".smCon");
    var menu = dropdown.find(".dropdown-menu");
    var isMenuVisible = menu.is(":visible");
    $(".dropdown-menu").hide();
    $(".up").hide();
    $(".down").show();
    if (!isMenuVisible) {
      menu.show();
      $(".up", dropdown).show();
      $(".down", dropdown).hide();
    }
  });

  $(".dropdown-toggle2").click(function () {
    var dropdown = $(this).closest(".smAbt");
    var menu = dropdown.find(".dropdown-menu2");
    var isMenuVisible = menu.is(":visible");
    $(".dropdown-menu2").hide();
    $(".up2").hide();
    $(".down2").show();
    if (!isMenuVisible) {
      menu.show();
      $(".up2", dropdown).show();
      $(".down2", dropdown).hide();
    }
  });

  $(document).click(function (e) {
    if (!$(e.target).closest(".smCon").length) {
      $(".dropdown-menu").hide();
      $(".up").hide();
      $(".down").show();
    }
    if (!$(e.target).closest(".smAbt").length) {
      $(".dropdown-menu2").hide();
      $(".up2").hide();
      $(".down2").show();
    }
  });
});

$(document).ready(function () {
  var scrollInterval;
  var isScrolling = false;

  $(document).keydown(function (event) {
    var keyCode = event.keyCode;

    if (keyCode === 40) {
      // Down arrow key
      if (!isScrolling) {
        isScrolling = true;
        startScrollingDown();
      }
    }

    if (keyCode === 38) {
      // Up arrow key
      if (!isScrolling) {
        isScrolling = true;
        startScrollingUp();
      }
    }
  });

  $(document).keyup(function (event) {
    var keyCode = event.keyCode;

    if (keyCode === 40 || keyCode === 38) {
      stopScrolling();
    }
  });

  function startScrollingDown() {
    scrollInterval = setInterval(function () {
      window.scrollBy(0, 10);
    }, 100);
  }

  function startScrollingUp() {
    scrollInterval = setInterval(function () {
      window.scrollBy(0, -10);
    }, 100);
  }

  function stopScrolling() {
    clearInterval(scrollInterval);
    isScrolling = false;
  }

  $(document).keydown(function (event) {
    var keyCode = event.keyCode;

    if (keyCode === 32) {
      // Spacebar
      var activeElement = document.activeElement;
      if ($(activeElement).is("button, input, select, textarea")) {
        return; // Ignore spacebar press if focused on form elements
      }

      var target = $("[data-scroll-target]").eq(0);
      if (target.length) {
        $("html, body").animate({ scrollTop: target.offset().top }, 300);
      }
    }
  });
});
