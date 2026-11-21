const tickets = [
  { title: "Проектор не включается", room: "203", category: "Оборудование", done: false },
  { title: "Не закрывается окно", room: "105", category: "Аудитория", done: false },
  { title: "В коридоре не горит свет", room: "Коридор, 2-й этаж", category: "Другое", done: true }, 
];
const listEl = document.getElementById("ticketsList");

const titleInput = document.getElementById("titleInput");
const roomInput = document.getElementById("roomInput");
const categorySelect = document.getElementById("categorySelect");
const addBtn = document.getElementById("addBtn");
const messageEl = document.getElementById("message");

const onlyOpenCheckbox = document.getElementById("onlyOpenCheckbox");
const categoryFilter = document.getElementById("categoryFilter");

function renderTickets() {
  listEl.innerHTML = "";                        
  const onlyOpen = onlyOpenCheckbox.checked;     
  const selectedCategory = categoryFilter.value; 

  if (tickets.length === 0) {
    const emptyLi = document.createElement("li");
    emptyLi.className = "empty";
    emptyLi.textContent = "Заявок пока нет";
    listEl.append(emptyLi);
    return;
  }
}