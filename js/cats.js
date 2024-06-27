function getFacts() {
  let facts;
  $.ajax({
    url: "js/data/facts.json",
    type: "GET",
    async: false,
    data: {},
    success: (data) => {
      facts = data;
    },
  });
  return facts;
}

const myColor = "#FF1744";

facts = getFacts();

let r = Math.round(Math.random() * facts.all.length);
$(".intro p").text(facts.all[r].text);
$(".intro p").append(
  `<br>~ <span style="color: ${myColor}; font-size: 16px;">${facts.all[r].user.name.first} ${facts.all[r].user.name.last}<span>`
);

setInterval(() => {
  r = Math.round(Math.random() * facts.all.length);
  $(".intro p").text(facts.all[r].text);
  $(".intro p").append(
    `<br>- <span style="color: ${myColor}; font-size: 16px;">${facts.all[r].user.name.first} ${facts.all[r].user.name.last}<span>`
  );
}, 20000);
