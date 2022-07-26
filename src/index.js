import * as mobilenet from "@tensorflow-models/mobilenet";

const img = document.getElementById("blah");
const btn = document.getElementById("predict");
const app = document.getElementById("app");

async function predictObject() {
  const model = await mobilenet.load();
  const predictions = await model.classify(img);

  app.innerHTML =
    "<ul>" +
    predictions
      .map(function (p) {
        return (
          "<li>" +
          p.className.toUpperCase() +
          "   " +
          Math.round(p.probability * 100) +
          "%" +
          "</li>"
        );
      })
      .join("") +
    "</ul>";
}

btn.onclick = predictObject;
