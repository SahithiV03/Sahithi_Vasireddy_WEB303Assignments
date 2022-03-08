/*
    Assignment 05
*/

$(document).ready(function () {
  // your code here
  class ContentItem {
    id;
    name;
    description;
    category;

    constructor(id, title, description, category) {
      this.id = id;
      this.name = title;
      this.description = description;
      this.category = category;
    }

    updateContent(id, title, description, category) {
      if (id == this.id) {
        if (title) {
          this.name = title;
        }
        if (description) {
          this.description = description;
        }
        if (category) {
          this.category = category;
        }
      }
    }

    toString() {
      return `
        <div class="content-item-wrapper" id="content-item-${this.id}">
            <h2>${this.name}</h2>
            <p>${this.description}</p>
            <div>${this.category}</div>
        </div>
    `;
    }
  }

  const items = [
    new ContentItem(
      1,
      "Bulbasaur",
      "There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger.",
      "Seed"
    ),
    new ContentItem(
      2,
      "Pikachu",
      "Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
      "Mouse"
    ),
    new ContentItem(
      3,
      "Butterfree",
      "In battle, it flaps its wings at great speed to release highly toxic dust into the air.",
      "Butterfly"
    ),
    new ContentItem(
      4,
      "Charmeleon",
      "It has a barbaric nature. In battle, it whips its fiery tail around and slashes away with sharp claws.",
      "Lizard"
    ),
    new ContentItem(
      5,
      "Charmander",
      "It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
      "Lizard"
    ),
  ];

  items.forEach((card) => {
    const cardHtml = card.toString();
    const $card = $(cardHtml);
    $card
      .css("border", "1px solid gray")
      .css("margin", "10px 0")
      .css("width", "433px")
      .css("padding", "5px");
    $("div#content-item-list").append($card);
  });

  $("#btn-success").click(function () {
    items[0].updateContent(1, "Venusaur", null, null);
  });

  $("#btn-fail").click(function () {
    items[0].updateContent(6, "Ivysaur", null, null);
  });
});
