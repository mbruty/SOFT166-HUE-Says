# HUE Says

Weclome to the HUE says memory game. To get started please **Click Download**
Then extract it to your computer and open any file in the **HTML** Folder.

## Watch how to play the game
![Youtube video](https://img.youtube.com/vi/lv7-E4kgNeE/0.jpg)https://www.youtube.com/watch?v=lv7-E4kgNeE

## The game
![Game Page](https://i.imgur.com/6CwrY7z.png)
Navigate to the game page to get started. Watch the youtube video above to see how to play the game.

To play the game, click the **Start game** button, this will show the sequence, just click the same buttons that light up to win!

Ticking the **Auto Play** box will automatically start the next sequence on completion.
### Settings
In settings you can change the light you use, change the dificulty and reset the high score

![Game Settings](https://i.imgur.com/83qcl25.png)
The dificulty speeds in ms are as follows:

 - Easy : 1100
 - Medium : 800
 - Hard : 500
 - Extra Hard : 200

*Note: For the lights to work, you need to log-in to a computer in **SMB109** or change the **setLightURI** function in **game.js** to use the lights on your home network.**

[Click to find out how to get your HUE light URI](https://huetips.com/help/how-to-find-my-bridge-ip-address/)


### How the lights will change during the game


Once you hit the **Start Game** button, the colour sequence is played on the lights.
*Note : If the network is slow, the lights MAY not work on Extra Hard*

Once you start entering the sequence, the **Selected light** will turn green
If you enter a wrong combination, the lights will flash red for a few seconds.

### High scores

The high score for the game will update once you get a squence wrong and the game resets. The *session high score* will reset if you re-load the web browser. The *All-time high score* will only reset if you click the **Reset High Score** button in settings or clear your browsers cache

**Note: None of your data will be saved online OR will be  accessable by any one else**

## The Lights Page
![Lights page](https://i.imgur.com/4ouQl9D.png)

### Controling the lights

Here you can control the lights with a push of a button.
It will set all lights to a colour, turn them all on or all off.

### Set Light Colour
This will allow you to control the specific HUE value of a single light. 
*The light can be selected on the left*

The hue value is a number between 0 and 55000.

[Click to find out more about the HUE values](https://community.boomi.com/s/news/aBU1W000000bmFhWAI/what-are-hue-talking-about)

## Web Accessability
- Colour blindness
A large problem with creating a colour memory game is that colourblind people cannot use it. I decided to tackle this problem by indicating which button is changing during the sequence, so if you cannot distinguish colours, you'll just have to remember the order that the buttons flash!
No where is colour exclusively used to show the form of a button, it always has text supporting it.

- Text contrast
Text contrast is very important, it can stop a visually ipared user from using the website out right. Almost all of the text is black on a white background, which is the best contrast possible. Where text is not black-on-white i.e. on buttons, the contrast is taken in to account and is enough to meet standards.
- Text size
The text size isn't as big as it could be for users who are visually impared, but the website works exactly the same when zoomed in upon.

## Supported browsers
All browsers that can run javascript are supported, Chrome and FireFox have been tested and work as you can see from the video.