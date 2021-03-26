$(document).ready(function () {
  $("#form").submit(function (event) {
    event.preventDefault();
    var checked = $("input[type=checkbox]:checked").length;
    if (!checked) {
      alert("Sie müssen mindestens eine Farbauswahl treffen.");
      return false;
    }
    var dataArray = $(this).serializeArray();
    for (var i = 0; i < dataArray.length; i++) {
      if (dataArray[i].name === "day") {
        var day = dataArray[i].value;
        $(".answers .answer.day").html(day + ". ");
      } else if (dataArray[i].name === "month") {
        var month = dataArray[i].value;
        $(".answers .answer.month").html(month + " ");
      } else if (dataArray[i].name === "color1" || dataArray[i].name === "color2" || dataArray[i].name === "color3" || dataArray[i].name === "color4") {
        var color = dataArray[i].value;
        $(".answers .answer." + color).prop("checked", true);
      } else{
        var val = dataArray[i].value;
        $(".answers .answer." + dataArray[i].name).html(val);
      }
    }
  });
});