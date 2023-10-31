function github(n) {
  if (n === "bmw") {
    window.open("https://github.com/Felobateer/BMW-clone");
  } else if (n === "gotel") {
    window.open("https://github.com/Felobateer/Gotel");
  } else if (n === "sweetMarket") {
    window.open("https://github.com/Felobateer/Sweet-Market/tree/master");
  } else if (n === "solidstock") {
    window.open("https://github.com/Felobateer/Solid-Stock");
  } else {
    window.open("https://github.com/Felobateer");
  }
}

function seeWebsite(n) {
  if (n === "bmw") {
    window.open("https://felobateer-saadalla.netlify.app/bmw/bmw", "_blank");
  } else if (n === "gotel") {
    window.open(
      "https://felobateer-saadalla.netlify.app/gotel/gotel",
      "_blank"
    );
  } else if (n === "sweetMarket") {
    window.open(
      "https://felobateer-saadalla.netlify.app/sm/sweetmarket",
      "_blank"
    );
  } else if (n === "solidstock") {
    window.open(
      "https://felobateer-saadalla.netlify.app/SolidStock/SolidStock",
      "_blank"
    );
  } else {
    alert("No link found");
  }
}

const resume = () => window.open("icons/CV.pdf");
