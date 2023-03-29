/**
 * Дефолтное время кручения 22 сек.
 *
 * Длина кручения 22 сек:
 * 'video.webm'
 *
 * Длина кручения 22 сек, видео начнётся с 4 секунды:
 * ['video.webm', 4]
 *
 * Длина кручения 30 сек, видео начнётся с 4 секунды:
 * ['video.webm', 4, 30]
 *
 * Выберется случайное видео из списка, рандомится только при перезапуске всего списка видосов:
 * () => p5Wheel.random([
 *    ['video.webm', 4, 30],
 *    ['video.webm', 45],
 * ]),
 */
const videosFree = [
['videos/Бегу по качалке.mp4', 0, 16],
['videos/01.mp4', 0, 22],
['videos/04.mp4', 0, 22],
['videos/06.mp4', 0, 22],
['videos/08.mp4', 0, 24],
['videos/09.mp4', 0, 24],
['videos/12.mp4', 0, 24],
['videos/18.mp4', 0, 23],
['videos/19.mp4', 0, 23],
['videos/16.mp4', 0, 23],
['videos/karta.mp4', 0, 24],
['videos/Peter Parker edit Lordly.mp4', 0, 20],
['videos/U GOT Яйца.mp4', 0, 20],
['videos/flopa.mp4', 0, 24],
['videos/JOJO MAKEUP TUTORIAL.mp4', 3, 24],
['videos/Квас Закамский это хит.mp4', 0, 14],
['videos/gavno.mp4', 0, 24],
['videos/dj-eban2.mp4', 0, 26],
['videos/Music make you lose control triangle.mp4', 0, 26],
['videos/hey.mp4', 0, 20],
['videos/tarakan.mp4', 0, 20],
['videos/mel.mp4', 0, 20],
['videos/PeepoClown ft. Segall - bass boosted HONK.mp4', 0, 25],
['videos/turboremix.mp4', 0, 26],
['videos/The less I know the better.mp4', 0, 27],
['videos/petecat.mp4', 0, 27],
['videos/billy.mp4', 0, 24],
['videos/riba.mp4', 0, 24],
['videos/pelmen.mp4', 0, 25],
['videos/ching.mp4', 0, 28],
['videos/forsenBounce.mp4', 0, 26],
['videos/mel pops.mp4', 0, 27],
['videos/anime01.mp4', 0, 27],
['videos/cake.mp4', 0, 30],
['videos/Не Твое Дело - Я буду рядом.mp4', 0, 25],
['videos/flexair5.mp4', 0, 26],
['videos/ChinChinDe.mp4', 0, 24],
['videos/Road.mp4', 0, 28],
['videos/ritorraria.mp4', 0, 25],
['videos/liz0N - Пятница (песенка про Minecraft).mp4', 30, 51],
['videos/jojo.mp4', 0, 25],
['videos/Пузантос - Бумаги.mp4', 18, 44],
['videos/taburet.mp4', 0, 24],
['videos/темоинэгу.mp4', 0, 20],
['videos/kal.mp4', 0, 24],
['videos/umad.mp4', 0, 27],
['videos/pontifik.mp4', 0, 27],
['videos/butirka.mp4', 0, 22],
['videos/bean.mp4', 0, 26],
['videos/vocaboca.mp4', 0, 18],
['videos/namanariva.mp4', 0, 19]
];