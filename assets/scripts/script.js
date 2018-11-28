$(document).ready(function() {
  var techniqueVisibility = [];
  var ingredientVisibility = [];
  var current = "general";
  var expanded = false;
  var breadSayings = ["get this bread", "yeet this yeast", "finesse this flour", "cop this crust", "snag this sourdough", "bag this baguette", "gain this grain", "obtain this grain", "land this loaf", "retrieve this roll"];

  $(".expand").click(function() {
      let id = $(this).attr("id");
      let className = $(this).attr("class");
      let divNum = id.slice(6, id.length);
      console.log(id + "      " + divNum);

      let visibilityMatrix;
      if (className.includes("techniques")){
        visibilityMatrix = techniqueVisibility;
      } else {
        visibilityMatrix = ingredientVisibility;
      }

      if (visibilityMatrix[divNum] == null || visibilityMatrix[divNum] == false) {
        $(this).text("-");
        $("#result" + divNum).css("display", "block");
        visibilityMatrix[divNum] = true;
      } else {
        $(this).text("+");
        $("#result" + divNum).css("display", "none");
        visibilityMatrix[divNum] = false;
      }
  });


  $("#nav_search").click(function(){
    if ($(this).text() == " Search ") {
      let random = Math.floor(Math.random() * breadSayings.length);
      let placeholder = "Let's " + breadSayings[random];
      $(".hidden_search").attr("placeholder", placeholder);
      $(".hidden_search").css("display", "block");
      $(".hidden_search_icon").css("display", "block");
      $(".hide").hide();
      $(this).text(" Close Search ");
    } else {
      $(".hide").show();
      $(".hidden_search").css("display", "none");
      $(".hidden_search_icon").css("display", "none");
      $(this).text(" Search ");
    }
  });

  $(".section_label").click(function() {
    let id = $(this).attr("id");
    console.log("Current: " + current);
    let tabName = id.slice(0, id.lastIndexOf("_label"));
    console.log("TabName: " + tabName);
    $("#" + current + "_header").addClass("hidden");
    $("#" + current + "_text").addClass("hidden");
    console.log($("#general_header").attr("class"));
    $("#" + tabName + "_header").removeClass("hidden");
    $("#" + tabName + "_text").removeClass("hidden");
    current = tabName;
    expanded = false;
    $("#main_text").css("height", "40vh");
    $(".read_more").attr("src", "assets/img/read more.png");
  });

  $(".footer_text").click(function() {
    $("#correction_form").css("display", "flex");
  });

  $("#cancel_button").click(function() {
    $("#correction_form").css("display", "none");
    $("#message_input").val("");
    $("#email_input").val("");
  });

  $("#submit_button").click(function() {
    $("#correction_form").css("display", "none");
    $("#message_input").val("");
    $("#email_input").val("");
    alert("Thank you for your email! I look forward to reading it and will get back to you shortly!");
  });

  $(".read_more").click(function() {
    console.log("clicked");
    if (!expanded) {
      $("#main_text").css("height", "auto");
      $(this).attr("src", "assets/img/close.png");
    } else {
      $("#main_text").css("height", "40vh");
      $(this).attr("src", "assets/img/read more.png");
    }
    expanded = !expanded;
  });

});
