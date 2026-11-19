// ====== BEÁLLÍTÁSOK ======
// A képek a WT kepek/WT kepek mappában vannak.
//   normál kép:    <fájlnév>.png
//   megoldókép:   <fájlnév> map.png   (zöld kiemeléssel)
// A fájlnév alapból a tank neve (name), de a "file" mezővel felülírható.
// A "solvedFile" mezővel a megoldókép fájlneve külön is megadható.
// Ha jpg a formátum, írd át az ext értékét '.jpg'-re.
// Amelyik tankhoz nincs normál kép az images mappában, azt a játék kihagyja.
const CONFIG = {
  imageDir: './WT kepek/WT kepek/',
  ext: '.png',
  solvedSuffix: ' map',
};

// ====== TANKOK ======
// name:    a célpont tank neve
// file:    opcionális fájlnév, ha eltér a névtől
// solvedFile: opcionális eltérő fájlnév a megoldóképhez
// country: a lövő tank származása
// shooter: a lövő tank
// shell:   a lövedék
// troll:   true, ha nincs átütési zóna. Ha a megoldóképen nincs zöld, a játék magától trollnak veszi.
// align:   a normál és a megoldókép eltérő vágásának/nézetének igazítása (affin transzformáció).
//          Ha a két kép pixelre ugyanaz a nézet, hagyd ki. Kalibráció: index.html?calib
const TANKS = [
  { name: 'M4A1 Sherman', file: 'm4a1 sherman', country: 'Japan', shooter: 'M24', shell: 'M61' },
  { name: 'M4A2 Sherman', file: 'm4a2 sherman ', solvedFile: 'm4a2 sherman', country: 'France', shooter: 'M4A4', shell: 'M61' },
  { name: 'T1E1 (90)', file: 't1e1 (90)', country: 'USA', shooter: 'M4A2 (76) W', shell: 'M79' },
  { name: 'M18 GMC', file: 'm18 gmc', country: 'Sweden', shooter: 'T34', shell: 'BR-350A' },
  { name: 'M22', file: 'm22', country: 'Italy', shooter: 'M13 40', shell: 'Gran. Perf mod.35' },
  { name: 'M4A3E2 (76) W', file: 'm4a3e2 (76) w', country: 'G. Britain', shooter: 'Centurion Mk1', shell: 'Shot Mk.6' },
  { name: 'T34 (USA)', file: 't34 usa', solvedFile: 't31 usa', country: 'USA', shooter: 'Super Hellcat', shell: 'M82' },
  { name: 'M60A2', file: 'm60a2', country: 'USSR', shooter: 'BMP-2', shell: '9M113' },
  { name: 'M1A2 Abrams', file: 'm1a2 abrams', country: 'China', shooter: 'VT5', shell: 'DTW2-105' },
  { name: 'M1A1 HC (Premium)', file: 'm1a1 hc', country: 'Germany', shooter: 'Leopard 2A4', shell: 'DM12' },
  { name: 'T29 (Premium)', file: 't29', country: 'Germany', shooter: 'Flakpanzer 1', shell: '20mm API-T' },
  { name: 'T34-85 GAI', file: 't3485 gai', country: 'USSR', shooter: 'T-34-85', shell: 'BR-365' },
  { name: 'ISU152 (China)', file: 'isu 152 c', country: 'USA', shooter: 'M4A2 (76) W', shell: 'M79' },
  { name: 'M64 (China, Premium)', file: 'm64 c', country: 'G. Britain', shooter: 'Centurion Action X', shell: 'Shot Mk.1' },
  { name: 'ZTZ59A', file: 'ztz59a', country: 'Israel', shooter: 'Magach 3 (ERA)', shell: 'M39A2' },
  { name: 'CM11', file: 'cm11', country: 'Germany', shooter: 'Class 3 / TH800', shell: 'DM512' },
  { name: 'ZDB04', file: 'zdb04 ', solvedFile: 'zdb04', country: 'G. Britain', shooter: 'FV4005', shell: 'Shell L1' },
  { name: 'MBT-2000', file: 'mbt2000', country: 'Germany', shooter: 'Boxer MGS', shell: 'DM63' },
  { name: 'M4A3 (76) W', file: 'm4a3 (76) w ', solvedFile: 'm4a3 (76) w', country: 'Germany', shooter: 'T34 747 (r)', shell: 'BR-350A' },
  { name: 'Type 16 (P)', file: 'type 16 (p)', country: 'China', shooter: 'Object 122MT "MC"', shell: '120-I' },
  { name: 'Type 74 (F)', file: 'tyoe 74 (f)', solvedFile: 'type 74 (f)', country: 'Germany', shooter: 'VT1-2', shell: 'DM13' },
  { name: 'TKX', file: 'tkx', country: 'Sweden', shooter: 'Strv 122B+', shell: 'nincs megadva' },
  { name: 'Churchill VII', file: 'churchill 7', country: 'Israel', shooter: 'Rochev', shell: 'M107' },
  { name: 'Tortoise', file: 'tortoise', country: 'USA', shooter: 'M22', shell: 'M74B1' },
  { name: 'Olifant Mk.2', file: 'olifant mk2', country: 'Italy', shooter: 'Palmaria', shell: 'M107' },
  { name: 'Challenger 2E', file: 'challenger 2e', country: 'G. Britain', shooter: 'Chieftain Mk 3', shell: 'Shot L15A3',
    align: { a: 1.12335, b: -0.00807, c: -0.08984, d: 0.0002, e: 0.91699, f: 0.07667 } },
  { name: 'Chi-Nu', file: 'chi nu', country: 'Italy', shooter: '75 / 46 M43', shell: 'G. Perf. mod.39',
    align: { a: 0.92691, b: 0.02627, c: 0.00145, d: 0.00664, e: 0.99246, f: -0.01811 } },
  { name: 'Bhishma TWMP (Squad)', file: 'bhishma twmp', country: 'Italy', shooter: 'L3/33 CC', shell: 'Perforante mod.35' },
  { name: 'Object 279', file: 'object 279', country: 'USA', shooter: 'M22', shell: 'M74B1' },
];