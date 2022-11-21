/*
@title: the RUN
@author: lumos studio
*/

const player = "p";
const enemy1 = "a";
const enemy2 = "b";
const enemy3 = "c";
const enemy4 = "d";
const enemy5 = "e";
const enemy6 = "f";
const enemy7 = "g";
const loser = "l";
setLegend(
  [ player, bitmap`
................
................
................
................
................
......000000....
.....00202000...
.....00202000...
.....00202000...
.....00202000...
......000000....
................
................
................
................
................`],
  [ enemy1, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333000000003333
3333000000003333
3333000000003333
3333000000003333
3333000000003333
3333000000003333
3333000000003333
3333000000003333
3333000000003333
3333000000003333
3333333333333333
3333333333333333
3333333333333333`],
  [ enemy2, bitmap`
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLL00000000LLLL
LLLL00000000LLLL
LLLL00000000LLLL
LLLL00000000LLLL
LLLL00000000LLLL
LLLL00000000LLLL
LLLL00000000LLLL
LLLL00000000LLLL
LLLL00000000LLLL
LLLL00000000LLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL
LLLLLLLLLLLLLLLL`],
  [ enemy3, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777000000007777
7777000000007777
7777000000007777
7777000000007777
7777000000007777
7777000000007777
7777000000007777
7777000000007777
7777000000007777
7777000000007777
7777777777777777
7777777777777777
7777777777777777`],
  [ enemy4, bitmap`
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDD00000000DDDD
DDDD00000000DDDD
DDDD00000000DDDD
DDDD00000000DDDD
DDDD00000000DDDD
DDDD00000000DDDD
DDDD00000000DDDD
DDDD00000000DDDD
DDDD00000000DDDD
DDDD00000000DDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD
DDDDDDDDDDDDDDDD`],
  [ enemy5, bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`],
  [ enemy6, bitmap`
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777
7777777777777777`],
  [ enemy7, bitmap`
3333333333333333
3333333333333333
3333333333333333
3333000000003333
3333000000003333
3333000000003333
3333000000003333
3333000000003333
3333000000003333
3333000000003333
3333000000003333
3333000000003333
3333000000003333
3333333333333333
3333333333333333
3333333333333333`],
  [ loser, bitmap`
................
........0.......
............0...
................
........0000....
.......00..0....
......0.....0...
.....00......0..
.....0.......0..
....0........00.
....0.........0.
....0.........0.
...00.........0.
...0............
................
................`],
);
const back = tune`
519.4805194805194,
129.87012987012986: d5~129.87012987012986,
129.87012987012986: d5~129.87012987012986,
129.87012987012986: d5~129.87012987012986,
129.87012987012986: d5~129.87012987012986 + c5~129.87012987012986,
129.87012987012986: c5~129.87012987012986,
129.87012987012986: c5~129.87012987012986,
129.87012987012986: c5~129.87012987012986,
129.87012987012986: c5~129.87012987012986,
129.87012987012986: c5~129.87012987012986,
129.87012987012986: c5~129.87012987012986,
129.87012987012986: d5~129.87012987012986,
129.87012987012986: d5~129.87012987012986 + e5~129.87012987012986,
129.87012987012986: e5~129.87012987012986 + f5~129.87012987012986,
129.87012987012986: g5~129.87012987012986,
129.87012987012986: g5~129.87012987012986 + a5~129.87012987012986,
129.87012987012986: a5~129.87012987012986,
129.87012987012986: a5~129.87012987012986 + g5~129.87012987012986,
129.87012987012986: g5~129.87012987012986 + f5~129.87012987012986,
129.87012987012986: e5~129.87012987012986,
129.87012987012986: d5~129.87012987012986 + c5~129.87012987012986,
129.87012987012986: c5~129.87012987012986 + b4~129.87012987012986,
129.87012987012986: b4~129.87012987012986,
129.87012987012986: b4~129.87012987012986,
129.87012987012986: b4~129.87012987012986,
129.87012987012986: b4~129.87012987012986,
129.87012987012986: c5~129.87012987012986,
129.87012987012986: c5~129.87012987012986,
129.87012987012986: c5~129.87012987012986 + d5~129.87012987012986`


setSolids([]);

let level = 0;
const levels = [
  map`
......................
......................
g.....................
......................
......................
.....................f
......................
e.....................
......................
.....................d
......................
......................
c.....................
......................
......................
.....................b
......................
......................
a.....................
..........p...........`,
   map`
l`,
];
const dash = tune`
78.125,
78.125: f5-78.125,
2343.75`
setMap(levels[level]);

setInterval(function(){
  const found1 = tilesWith(enemy1)[0][0].x == tilesWith(player)[0][0].x && tilesWith(enemy1)[0][0].y == tilesWith(player)[0][0].y 
  const found2 = tilesWith(enemy2)[0][0].x == tilesWith(player)[0][0].x && tilesWith(enemy2)[0][0].y == tilesWith(player)[0][0].y 
  const found3 = tilesWith(enemy3)[0][0].x == tilesWith(player)[0][0].x && tilesWith(enemy3)[0][0].y == tilesWith(player)[0][0].y 
  const found4 = tilesWith(enemy4)[0][0].x == tilesWith(player)[0][0].x && tilesWith(enemy4)[0][0].y == tilesWith(player)[0][0].y 
  const found5 = tilesWith(enemy5)[0][0].x == tilesWith(player)[0][0].x && tilesWith(enemy5)[0][0].y == tilesWith(player)[0][0].y 
  const found6 = tilesWith(enemy6)[0][0].x == tilesWith(player)[0][0].x && tilesWith(enemy6)[0][0].y == tilesWith(player)[0][0].y 
  const found7 = tilesWith(enemy7)[0][0].x == tilesWith(player)[0][0].x && tilesWith(enemy7)[0][0].y == tilesWith(player)[0][0].y 
  if (found1 || found2 || found3 || found4 || found5 || found6 || found7){
     playTune(back)
    setMap(levels[1]);
    addText("failed", { 
  x: 10,
  y: 4,
  color: color`3`
})
  }
}, 5);
setInterval(function(){
  
    num = Math.floor(Math.random() * 2);
   step1 = Math.floor(Math.random() * 4);
 step3 = Math.floor(Math.random() * 3);

 step4 = Math.floor(Math.random() * 3);

 step2 = Math.floor(Math.random() * 4);
  if(num == 1){
    getAll(enemy1)[0].x += step1
    getAll(enemy2)[0].x += step2
    getAll(enemy3)[0].x += step3
    getAll(enemy4)[0].x += step4
    getAll(enemy5)[0].x += step2
    getAll(enemy6)[0].x += step3
    getAll(enemy7)[0].x += step4
  }
  if(num == 0){
    getAll(enemy1)[0].x -= step1
    getAll(enemy2)[0].x -= step2
    getAll(enemy3)[0].x -= step3
    getAll(enemy4)[0].x -= step4
    getAll(enemy5)[0].x -= step2
    getAll(enemy6)[0].x -= step3
    getAll(enemy7)[0].x -= step4
  }

}, 10);

onInput("s", () => {
  playTune(dash)
  getFirst(player).y += 1

});
onInput("w", () => {
    getFirst(player).y -= 1
  playTune(dash)

});

afterInput(() => {

  
});

var num = Math.floor(Math.random() * 2);
var step1 = Math.floor(Math.random() * 4);
var step3 = Math.floor(Math.random() * 3);

var step4 = Math.floor(Math.random() * 3);

var step2 = Math.floor(Math.random() * 4);

