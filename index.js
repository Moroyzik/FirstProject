function changeTab(tabNumber) {
  var percentsByTab = ["0%", "35%", "70%"];

  var tabNumbers = ["1", "2", "3"];

  document.getElementById("line").style.marginLeft =
    percentsByTab[+tabNumber - 1];

  tabNumbers.forEach(function(item) {
    document.getElementById("tab-" + item).style.backgroundColor =
      tabNumber === item ? "#add136" : "#959595";
  });
}
