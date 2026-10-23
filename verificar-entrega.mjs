import { readFileSync, existsSync } from 'node:fs';
import assert from 'node:assert/strict';
const read = (name) => readFileSync(new URL(`../${name}`, import.meta.url), 'utf8');
const pkg = JSON.parse(read('package.json'));
const eas = JSON.parse(read('eas.json'));
const app = JSON.parse(read('app.json'));
assert.equal(eas.build.preview.android.buildType, 'apk', 'O perfil preview precisa gerar APK');
assert.ok(app.expo.android.package, 'Identificador Android obrigatório');
assert.ok(pkg.dependencies.expo, 'Dependência Expo ausente');
for (const file of ['README.md', 'PLANO_DE_NEGOCIO.md', 'ROTEIRO_PITCH.md', 'CHECKLIST_TESTES.md', 'ENTREGA_SPRINT4_MODELO.txt', 'src/screens/SimuladorScreen.tsx']) {
  assert.ok(existsSync(new URL(`../${file}`, import.meta.url)), `Arquivo ausente: ${file}`);
}
const simulador = read('src/utils/simulador.ts');
assert.ok(simulador.includes('simulado: true') && simulador.includes('Nao e uma medicao real'), 'Simulador precisa identificar os dados como fictícios');
console.log('Verificação estrutural aprovada. Isto NÃO substitui build nem teste em Android.');
