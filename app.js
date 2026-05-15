const STORAGE_KEY = "lifetag_entries_v1";

const form = document.getElementById("entry-form");
const titleInput = document.getElementById("title");
const tagInput = document.getElementById("tag");
const noteInput = document.getElementById("note");
const tagFilter = document.getElementById("tag-filter");
const stats = document.getElementById("stats");
const entryList = document.getElementById("entry-list");
const emptyState = document.getElementById("empty-state");
const entryTemplate = document.getElementById("entry-template");

let entries = loadEntries();

render();

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = titleInput.value.trim();
  const tag = tagInput.value.trim().toLowerCase();
  const note = noteInput.value.trim();

  if (!title || !tag) {
    return;
  }

  entries.unshift({
    id: crypto.randomUUID(),
    title,
    tag,
    note,
    complete: false,
    createdAt: Date.now(),
  });

  persistEntries();
  form.reset();
  titleInput.focus();
  render();
});

tagFilter.addEventListener("change", () => {
  render();
});

entryList.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLButtonElement)) {
    return;
  }

  const listItem = target.closest("li[data-entry-id]");
  if (!listItem) {
    return;
  }

  const entryId = listItem.dataset.entryId;
  const entryIndex = entries.findIndex((entry) => entry.id === entryId);
  if (entryIndex === -1) {
    return;
  }

  if (target.classList.contains("toggle-btn")) {
    entries[entryIndex].complete = !entries[entryIndex].complete;
  }

  if (target.classList.contains("delete-btn")) {
    entries.splice(entryIndex, 1);
  }

  persistEntries();
  render();
});

function render() {
  const selectedTag = tagFilter.value;
  const filteredEntries =
    selectedTag === "all" ? entries : entries.filter((entry) => entry.tag === selectedTag);

  entryList.innerHTML = "";

  filteredEntries.forEach((entry) => {
    const node = entryTemplate.content.firstElementChild.cloneNode(true);
    node.dataset.entryId = entry.id;
    node.classList.toggle("is-complete", entry.complete);

    node.querySelector(".entry-title").textContent = entry.title;
    node.querySelector(".entry-tag").textContent = `#${entry.tag}`;
    node.querySelector(".entry-note").textContent = entry.note || "No note provided.";
    node.querySelector(".toggle-btn").textContent = entry.complete ? "Mark Active" : "Mark Complete";

    entryList.append(node);
  });

  emptyState.hidden = filteredEntries.length > 0;
  refreshTagFilter(selectedTag);
  refreshStats();
}

function refreshTagFilter(selectedTag) {
  const uniqueTags = [...new Set(entries.map((entry) => entry.tag))].sort();
  tagFilter.innerHTML = `<option value="all">All tags</option>`;

  uniqueTags.forEach((tag) => {
    const option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    tagFilter.append(option);
  });

  tagFilter.value = uniqueTags.includes(selectedTag) ? selectedTag : "all";
}

function refreshStats() {
  const completeCount = entries.filter((entry) => entry.complete).length;
  stats.textContent = `${completeCount} complete / ${entries.length} total`;
}

function loadEntries() {
  try {
    const rawValue = localStorage.getItem(STORAGE_KEY);
    if (!rawValue) {
      return [];
    }
    const parsedEntries = JSON.parse(rawValue);
    return Array.isArray(parsedEntries) ? parsedEntries : [];
  } catch (_error) {
    return [];
  }
}

function persistEntries() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}
