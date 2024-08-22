const xhr = new XMLHttpRequest();

xhr.open("GET", "student2.json");
xhr.send();

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const student2 = JSON.parse(xhr.responseText);
    const result = document.querySelector("#result");
    result.innerHTML = `
    <h1>${student2.name}</h1>
    <ul>
      <li>전공 : ${student2.major}</li>
      <li>학년 : ${student2.grade}</li>
    </ul>
    `;
  }
};
