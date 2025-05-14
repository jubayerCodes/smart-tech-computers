let progressStarted = false; // Track if progress bar animation has started

      $(window).on("scroll", function () {
        var progressBarTop = $(".ce_ixelgen_progress_bar").offset().top;
        var windowHeight = $(window).height();
        var scrollPosition = $(window).scrollTop();

        // Trigger the progress bar animation when it's visible in the viewport
        if (!progressStarted && scrollPosition + windowHeight > progressBarTop) {
          progress_bar();
          progressStarted = true; // Ensure the animation only triggers once
        }
      });

      function progress_bar() {
        var speed = 30;
        var items = $(".progress_bar").find(".progress_bar_item");

        items.each(function () {
          var item = $(this).find(".progress");
          var itemValue = item.data("progress");
          var i = 0;
          var value = $(this);

          var count = setInterval(function () {
            if (i <= itemValue) {
              var iStr = i.toString();
              item.css({
                width: iStr + "%",
              });
              value.find(".item_value").html(iStr + "%");
            } else {
              clearInterval(count);
            }
            i++;
          }, speed);
        });
      }