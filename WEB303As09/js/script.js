$(document).ready(function () {
  const $table = $("table tbody");
  const data = [];
  const order = {
    id: 0,
    name: 0,
    team: 0,
    dob: 0,
    score: 0,
  };

  function renderRow(arr) {
    if (!Array.isArray(arr)) return;
    $("tbody").html("");

    $.each(arr, function (i, obj) {
      $table.append(`
        <tr>
          <td>${obj.id}</td>
          <td>${obj.name}</td>
          <td>${obj.team}</td>
          <td>${obj.dob}</td>
          <td>${obj.score}</td>
        </tr>
      `);
    });
  }

  function changeOrder(column) {
    if (order[column] == 0) return (order[column] = 1);
    if (order[column] == 1) return (order[column] = -1);
    if (order[column] == -1) return (order[column] = 0);
  }

  function sort(column) {
    const currentSort = changeOrder(column);
    let sortedDataList = [...data];

    // sort it in ascending order
    if (currentSort == 1) {
      if (column == "name" || column == "lastname" || column == "team") {
        sortedDataList.sort((a, b) => {
          let x = a[column].toLowerCase();
          let y = b[column].toLowerCase();
          return x == y ? 0 : x > y ? 1 : -1;
        });
      } else if (column == "id" || column == "score") {
        sortedDataList.sort((a, b) => {
          let x = a[column];
          let y = b[column];
          return x == y ? 0 : x > y ? 1 : -1;
        });
      } else if (column == "dob") {
        sortedDataList.sort(function (a, b) {
          let x = new Date(a.dob);
          let y = new Date(b.dob);
          return x == y ? 0 : x > y ? 1 : -1;
        });
      }
    }
    // sort it in descending order
    else if (currentSort == -1) {
      if (column == "name" || column == "team") {
        sortedDataList.sort((a, b) => {
          let x = a[column].toLowerCase();
          let y = b[column].toLowerCase();
          return x == y ? 0 : x > y ? -1 : 1;
        });
      } else if (column == "id" || column == "score") {
        sortedDataList.sort((a, b) => {
          let x = a[column];
          let y = b[column];
          return x == y ? 0 : x > y ? -1 : 1;
        });
      } else if (column == "dob") {
        sortedDataList.sort(function (a, b) {
          let x = new Date(a.dob);
          let y = new Date(b.dob);
          return x == y ? 0 : x > y ? -1 : 1;
        });
      }
    }
    return sortedDataList;
  }

  $("th a").click(function (e) {
    e.preventDefault();
    const column = e.target.id.split("-")[1];
    console.log(column);
    const sortedDataList = sort(column);
    $(`#a-${column}`).html(
      `${column.charAt(0).toUpperCase() + column.slice(1)}`
    );

    if (order[column] == 1) {
      $(`#a-${column}`).append(` &#x25B2;`);
    } else if (order[column] == -1) {
      $(`#a-${column}`).append(` &#x25BC;`);
    }

    renderRow(sortedDataList);
  });

  $.getJSON("data.json", function (result) {
    result.forEach((obj) => data.push(obj));
    renderRow(data);
  });
});
