# :zap: Javascript Whackamole Game

Creates famous whackamole game using javascript. Final tutorial 30 of Wes Bos Javascript30 Youtube series.
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/javascript-whackamole-game?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/javascript-whackamole-game?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/javascript-whackamole-game?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/javascript-whackamole-game?style=plastic)

## :page_facing_up: Table of contents

* [:zap: Javascript Whackamole Game](#zap-javascript-whackamole-game)
  * [:page_facing_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal_strength: Technologies](#signal_strength-technologies)
  * [:floppy_disk: Setup](#floppy_disk-setup)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status & To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Uses event listeners, timout functions etc. to keep score of the number of times a mole is clicked on.

## :camera: Screenshots

![Example screenshot](./img/random-hole.png).

## :signal_strength: Technologies

[Javascript v1.9 ECMA-262 ECMAScript 2020](http://www.ecma-international.org/publications/standards/Ecma-262.htm)

## :floppy_disk: Setup

* Open `index.html` in browser.

## :computer: Code Examples

* function to hit mole and remove up class if hit so mole stays hidden.

```javascript
// mouseclick event isTrusted means it is a real click.
// increment score and show on scoreboard using textContent
function bonk(e) {
 if(!e.isTrusted) return;
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

```

## :cool: Features

* The `time` variable in the peep function can be adjusted to make the game more difficult.
* The `background-size` css variable in the .mole class can be reduced (eg from 60% to 40% to make the game more difficult.

## :clipboard: Status & To-Do List

* Status: Working.
* To-Do: Nothing.

## :clap: Inspiration

* [Wes Bos Youtube Javascript30 tutorial 30](https://www.youtube.com/watch?v=toNFfAaWghU&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=30)

## :file_folder: License

* N/A

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: gomezbateman@yahoo.com
