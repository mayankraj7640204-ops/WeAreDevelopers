import { sessions, sessionsForTrack, toggleSaved } from './sessions.js';

const list = document.querySelector('#sessions');
const count = document.querySelector('#count');
const track = document.querySelector('#track');
let saved = new Set();
let visible = sessions;

function updateCount() {
  count.textContent = `${visible.length} shown · ${saved.size} saved`;
}

function sessionCard(session) {
  const card = document.createElement('li');
  const meta = document.createElement('p');
  meta.className = 'meta';
  meta.textContent = `${session.time} · ${session.track}`;
  const title = document.createElement('h3');
  title.textContent = session.title;
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = 'Save';
  button.setAttribute('aria-label', `Save ${session.title}`);
  const updateButton = () => button.setAttribute('aria-pressed', String(saved.has(session.id)));
  updateButton();
  button.addEventListener('click', () => {
    saved = toggleSaved(saved, session.id);
    updateButton();
    updateCount();
  });
  card.append(meta, title, button);
  return card;
}

for (const name of [...new Set(sessions.map((session) => session.track))].sort()) {
  track.add(new Option(name, name));
}

function renderSchedule() {
  visible = sessionsForTrack(sessions, track.value);
  list.replaceChildren(...visible.map(sessionCard));
  updateCount();
}

track.addEventListener('change', renderSchedule);
renderSchedule();
