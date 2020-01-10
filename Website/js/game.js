let light;
let game;
let doc;
let difficulty;
let difficulties = {
    "Easy" : 1100,
    "Medium" : 800,
    "Hard" : 500,
    "ExtraHard" : 200
};
let autoPlay = false;
class Game {
    colorBlind;
    delay;
    sequence;
    guessCount;
    colours = ['blue', 'green', 'red', 'orange'];
    coloursHex = ['#0000ff', '#00ff22', '#ff0800', '#ffa200'];
    origColors = ['#8fd4ff', '#8fff8f', '#ff8f8f', '#ffd88f'];
    allowPlay = true;
    allowInput = false;

    constructor() {
        $('#playBtn').removeClass("btn btn-secondary").addClass('btn btn-success');
        this.colorBlind = false;
        this.delay = 1000;
        this.sequence = [this.getRandomInt(0, 3)];
    }

    async correct(id) {
        this.guessCount++;
        light.setLightColour("green");
        if (this.guessCount + 1 === this.sequence.length) {
            doc.currentScore++;
            document.getElementById("currScore").innerText = doc.currentScore;
            light.setLightWhite();
            this.allowInput = false;
            this.allowPlay = true;
            if (autoPlay) {
                setTimeout(function () {
                    game.playSequence();
                }, 1000)
            }
            $('#playBtn').removeClass("btn btn-secondary").addClass('btn btn-success');
        }

        document.getElementById(id).style.backgroundColor = this.coloursHex[id];
        await this.timeout(300).then(function () {
            document.getElementById(id).style.backgroundColor = game.origColors[id];
        });
    }

    async incorrect() {
        document.getElementById("playBtn").innerText = "Start Game";
        doc.gameOver();
        let counter = 0;
        currScore.innerHTML = "0";
        doc.currentScore = 0;
        light.setLightAlert();
        let interval = setInterval(async function () {
            document.getElementById("lightCard").style.backgroundColor = "red";
            await game.timeout(300).then(function () {
                document.getElementById("lightCard").style.backgroundColor = "white";
            });
            if (counter === 4) {
                clearInterval(interval);
                light.setLightWhite();
            }
            counter++;
        }, 400);
    }

    async playSequence() {
        let delay = difficulties[window.localStorage.difficulty];
        if (this.allowPlay) {   //Checks if playing is allowed, this stops the sequence trying to play over itself and
            // stops the user from playing the next sequence without getting the previous one right
            this.allowPlay = false;
            // Change the button to indicate the sequence is playing and button is not clickable
            $('#playBtn').removeClass("btn btn-success").addClass('btn btn-secondary');
            document.getElementById("playBtn").innerText = "Sequence Playing";
            let i = 0;
            while (i !== this.sequence.length) {
                await this.playNextSequence(i, delay);
                await this.timeout(100).then(function () {
                    i++
                });
            }
            //Generate the next number in the sequence
            this.sequence.push(this.getRandomInt(0, 3));
            this.guessCount = 0;
            document.getElementById("playBtn").innerText = "Next Sequence";
            this.allowInput = true;
        }
    }

    async playNextSequence(i, delay) {
        let currentNumber = this.getSequence(i);
        light.setLightColour(this.colours[currentNumber]);
        document.getElementById(currentNumber).style.backgroundColor = this.coloursHex[currentNumber];
        await this.timeout(delay).then(function () {
            document.getElementById(currentNumber).style.backgroundColor = game.origColors[currentNumber];
            light.setLightWhite();
        });
    }

    async timeout(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    getSequence(index) {
        return this.sequence[index];
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    checkGuess(guess) {
        return this.sequence[this.guessCount] == guess;
    }
}

class Lights{
    URI;
    lightNumber;
    colours;
    constructor(){
        this.lightNumber = 1; //Default light to use
        this.setLabLightURI();
        this.colours = {
            "blue":39632,
            "green":25500,
            "red":0,
            "orange":12750
        }
    }
    setLightColour(colour){
        let hue = this.colours[colour];
        this.sendCommand({
            "on":true, "sat":254, "bri":254, "hue": hue
        })
    }
    setLightWhite(){
        this.sendCommand({"sat":0,"bri":100, "alert":"none"});
    }
    setLightAlert(){
        this.sendCommand({"alert":"lselect","hue":0,"sat":254});
    }
    sendCommand(command){
        $.ajax({
            url: this.URI+"/state",
            type: "PUT",
            data: JSON.stringify(command)
        });
    }
    setLightNumber(lightNumber){
        this.lightNumber = lightNumber;
        this.setLabLightURI();
        document.getElementById("lightBadge").innerText = `Current Light: ${lightNumber}`;
    }
    setLabLightURI(){
        this.URI =  `http://192.168.0.50/api/stlaB2I6VZ8O80Qepc-1xfmLrHgyTFvB9IGupaQz/lights/${this.lightNumber}`;
    }
    turnAllOn(){
        let origNumber = this.lightNumber;
        for(let i = 0; i < 6; i++){
            this.lightNumber = i + 1;
            this.setLabLightURI();
            this.sendCommand({"on": true});
        }
        this.lightNumber = origNumber;
        this.setLabLightURI();
    }
    turnAllOff(){
        let origNumber = this.lightNumber;
        for(let i = 0; i < 6; i++){
            this.lightNumber = i + 1;
            this.setLabLightURI();
            this.sendCommand({"on" : false});
        }
        this.lightNumber = origNumber;
        this.setLabLightURI();
    }
    setAll(colour){
        let origNumber = this.lightNumber;
        for(let i = 1; i < 7; i++) {
            this.lightNumber = i;
            this.setLabLightURI();
            this.setLightColour(colour);
        }
        this.lightNumber = origNumber;
        this.setLabLightURI();
    }
    alertAll(){
        let origNumber = this.lightNumber;
        for(let i = 1; i < 7; i++) {
            this.lightNumber = i;
            this.setLabLightURI();
            this.sendCommand({"alert":"lselect"});
        }
        this.lightNumber = origNumber;
        this.setLabLightURI();
    }
    setLightHue(){
        let value = document.getElementById("HUE-input").value;
        let numValue = parseInt(value);
        if(numValue >= 0 || numValue <= 50000){
            this.sendCommand({
                "on" : true,
                "hue" : numValue,
                "sat" : 254
            });
        }
        else{
            alert("HUE input needs to be a number between 0 - 50,000");
        }
    }
}
class Document{
    currentScore = 0;
    previousScore;
    sessionHighScore;
    allTimeHighScore;
    constructor(){
        this.sessionHighScore = 0;
        this.allTimeHighScore = window.localStorage.highScore;
        if(this.allTimeHighScore === undefined){
            window.localStorage.highScore = 0;
        }
        document.getElementById("highScore").innerText = this.allTimeHighScore;
        if(window.localStorage.difficulty === undefined){
            window.localStorage.difficulty = "Easy";
        }
        difficulty = window.localStorage.difficulty;
    }
    showSettings(){
        document.getElementById("lightBadge").innerText = `Current Light: ${light.lightNumber}`;
        $(`#radio${difficulty}`).prop("checked", true);
    }
    saveSettings(){
        window.localStorage.difficulty = difficulty;
        light.setLabLightURI();
    }
    resetHighScore(){
        window.localStorage.highScore = 0;
        document.getElementById("highScore").innerText = "0";
        this.allTimeHighScore = 0;
        this.sessionHighScore = 0;
        document.getElementById("seshHighScore").innerText = "0";
    }
    gameOver(){
        //Delete current game and start a new one
        game = new Game();

        //Set previous score
        this.previousScore = this.currentScore;
        document.getElementById("prevHighScore").innerText = this.previousScore;
        if(this.sessionHighScore < this.currentScore){
            this.sessionHighScore = this.currentScore;
            document.getElementById("seshHighScore").innerText = this.sessionHighScore;
        }
        if(this.allTimeHighScore < this.currentScore){
            this.allTimeHighScore = this.currentScore;
            document.getElementById("highScore").innerText = this.allTimeHighScore;
            //Save the new high-score
            window.localStorage.highScore = this.allTimeHighScore;
        }
    }
}

$( document ).ready(function() {
    light = new Lights();
    game = new Game();
    doc = new Document();
    let i = 0;
    console.log(Object.keys(difficulties));
    $('td').click(function() {
        let id = $(this).attr('id');
        if(game.allowInput){
            if(game.checkGuess(id)){
                game.correct(id);
            }
            else{
                game.incorrect();
                //Set HUE lights to alert red
            }
        }
    });
    $('#autoPlayToggle').click(function() {
        autoPlay = !!$(this).is(":checked");
    });
});