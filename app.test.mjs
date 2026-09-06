import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import { exercises, weeks } from '../data.js';

test('exercise ids are unique and library is broad', () => {
  const ids = exercises.map(x => x.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.length >= 60);
});

test('program contains 12 weeks and exactly 48 workouts', () => {
  assert.equal(weeks.length, 12);
  weeks.forEach(w => assert.equal(w.days.length, 4));
  assert.equal(weeks.reduce((n, w) => n + w.days.length, 0), 48);
});

test('all workout exercise references resolve', () => {
  const ids = new Set(exercises.map(x => x.id));
  for (const w of weeks) {
    for (const d of w.days) {
      assert.ok(d.items.length >= 5, `week ${w.week} ${d.name} is too short`);
      for (const [id, prescription] of d.items) {
        assert.ok(ids.has(id), `${id} missing in week ${w.week}`);
        assert.ok(String(prescription).length >= 3, `${id} has no useful prescription`);
      }
    }
  }
});

test('manifest has standalone display and required icons', () => {
  const manifest = JSON.parse(fs.readFileSync(new URL('../manifest.webmanifest', import.meta.url)));
  assert.equal(manifest.display, 'standalone');
  const sizes = new Set(manifest.icons.map(x => x.sizes));
  assert.ok(sizes.has('192x192'));
  assert.ok(sizes.has('512x512'));
});

test('service worker app shell references existing files', () => {
  const root = new URL('../', import.meta.url);
  const sw = fs.readFileSync(new URL('../sw.js', import.meta.url), 'utf8');
  for (const file of ['index.html', 'app.css', 'app.js', 'data.js', 'state.js', 'manifest.webmanifest']) {
    assert.ok(sw.includes(`./${file}`), `${file} missing from service worker cache`);
    assert.ok(fs.existsSync(new URL(file, root)), `${file} missing on disk`);
  }
});

test('UI is deliberately limited to training and 12-week plan', () => {
  const html = fs.readFileSync(new URL('../index.html', import.meta.url), 'utf8');
  assert.equal((html.match(/data-view=/g) || []).length, 2);
  assert.ok(html.includes('data-view="training"'));
  assert.ok(html.includes('data-view="plan"'));
  assert.ok(!html.includes('data-view="exercises"'));
  assert.ok(!html.includes('data-view="progress"'));
});

test('adaptive coach moves at most one progression step and requires repeated feedback', async () => {
  const {resolveExercise,applyRating} = await import('../coach.js');
  const ratings = {}, adapt = {};
  applyRating({family:'pull',value:1,previous:undefined,ratings,adapt});
  assert.equal(adapt.pull, undefined);
  applyRating({family:'pull',value:1,previous:undefined,ratings,adapt});
  assert.equal(adapt.pull, 1);
  assert.equal(resolveExercise('pullup', adapt).id, 'chest-bar');
  applyRating({family:'pull',value:1,previous:undefined,ratings,adapt});
  applyRating({family:'pull',value:1,previous:undefined,ratings,adapt});
  assert.equal(adapt.pull, 1);
});
