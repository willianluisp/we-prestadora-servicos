import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const index = await readFile(new URL('../index.html', import.meta.url), 'utf8');
const main = await readFile(new URL('../js/main.js', import.meta.url), 'utf8');
const styles = await readFile(new URL('../css/gallery.css', import.meta.url), 'utf8');

test('provides an accessible gallery dialog with its controls', () => {
  assert.match(index, /id="galleryModal"/);
  assert.match(index, /role="dialog"/);
  assert.match(index, /aria-modal="true"/);
  assert.match(index, /id="galleryModalClose"/);
  assert.match(index, /id="galleryModalPrevious"/);
  assert.match(index, /id="galleryModalNext"/);
});

test('supports opening, closing, keyboard navigation and focus restoration', () => {
  assert.match(main, /function abrirModalGaleria/);
  assert.match(main, /function fecharModalGaleria/);
  assert.match(main, /function navegarGaleria/);
  assert.match(main, /\w+\.key === 'Escape'/);
  assert.match(main, /\w+\.key === 'ArrowLeft'/);
  assert.match(main, /\w+\.key === 'ArrowRight'/);
  assert.match(main, /acionadorGaleria\?\.focus\(\)/);
  assert.match(main, /document\.querySelector\('main'\)\.inert = true/);
  assert.match(main, /document\.querySelector\('main'\)\.inert = false/);
  assert.match(main, /modalGaleria\.addEventListener\('pointerdown'/);
  assert.match(main, /modalGaleria\.addEventListener\('pointerup'/);
  assert.match(main, /Math\.abs\(deslocamentoX\) < 48/);
});

test('keeps gallery modal media responsive and uncropped', () => {
  assert.match(styles, /\.gallery-modal-image[\s\S]*object-fit:contain/);
  assert.match(styles, /\.gallery-modal-backdrop/);
  assert.match(styles, /@media\(prefers-reduced-motion:reduce\)/);
});
