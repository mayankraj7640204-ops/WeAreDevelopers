import { deepEqual, equal } from 'node:assert/strict';
import { test } from 'node:test';
import { sessions, sessionsForTrack, toggleSaved } from '../docs/planner/sessions.js';

test('session IDs are unique so saves cannot select multiple cards', () => {
  equal(new Set(sessions.map(({ id }) => id)).size, sessions.length);
});

test('saving and removing a session keeps other selections intact', () => {
  const saved = new Set(['keynote']);
  const added = toggleSaved(saved, 'systems');
  deepEqual([...added], ['keynote', 'systems']);
  deepEqual([...toggleSaved(added, 'keynote')], ['systems']);
  deepEqual([...saved], ['keynote']);
});

test('a selected track keeps only its sessions in their original order', () => {
  const engineering = sessionsForTrack(sessions, 'Engineering');
  deepEqual(engineering.map(({ id }) => id), ['systems', 'small-prs']);
  deepEqual(sessionsForTrack(sessions, 'No matching track'), []);
});

test('clearing a track restores all sessions and keeps a hidden saved selection', () => {
  const saved = toggleSaved(new Set(), 'keynote');
  equal(sessionsForTrack(sessions, 'Engineering').some(({ id }) => saved.has(id)), false);
  const restored = sessionsForTrack(sessions, '');
  deepEqual(restored, sessions);
  deepEqual(restored.filter(({ id }) => saved.has(id)).map(({ id }) => id), ['keynote']);
});
