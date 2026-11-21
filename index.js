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
let visibleCount = 0; 
  tickets.forEach((ticket, index) => {
    if (onlyOpen && ticket.done !== false) return;                              
    if (selectedCategory !== "all" && ticket.category !== selectedCategory) return; 

    visibleCount++;
    listEl.append(createTicketElement(ticket, index));
  });
  if (visibleCount === 0) {
    const emptyLi = document.createElement("li");
    emptyLi.className = "empty";
    emptyLi.textContent = onlyOpen && selectedCategory === "all"
      ? "Открытых заявок нет"
      : "Нет заявок по выбранным фильтрам";
    listEl.append(emptyLi);
  }



  function createTicketElement(ticket, index) {
  const li = document.createElement("li");
  li.className = "ticket";

  const info = document.createElement("div");
  info.className = "ticket-info";

  const titleEl = document.createElement("p");
  titleEl.className = "ticket-title";
  titleEl.textContent = ticket.title; 
  
  const meta = document.createElement("div");
  meta.className = "ticket-meta";
  const roomSpan = document.createElement("span");
  roomSpan.textContent = ticket.room;
  const catSpan = document.createElement("span");
  catSpan.textContent = ticket.category;
  meta.append(roomSpan, catSpan);

   const status = document.createElement("span");
  status.className = "status " + (ticket.done ? "done" : "open"); 
  status.textContent = ticket.done ? "Выполнена" : "Открыта";

    info.append(titleEl, meta, status);

  const actions = document.createElement("div");
  actions.className = "ticket-actions"
  if (!ticket.done) {                          
    const completeBtn = document.createElement("button");
    completeBtn.className = "btn-complete";
    completeBtn.textContent = "Выполнить";
    completeBtn.addEventListener("click", () => {
      tickets[index].done = true;             
      renderTickets();
    });
    actions.append(completeBtn);
  }
  const deleteBtn = document.createElement("button"); 
  deleteBtn.className = "btn-delete";
  deleteBtn.textContent = "Удалить";
  deleteBtn.addEventListener("click", () => {
    tickets.splice(index, 1);
 