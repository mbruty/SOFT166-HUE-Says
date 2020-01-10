# HUE Says

Welcome to the HUE says memory game. To get started please **Click Download**
Then extract it to your computer and open any file in the **HTML** Folder.

## Watch how to play the game
![YouTube video](https://img.youtube.com/vi/lv7-E4kgNeE/0.jpg)https://www.youtube.com/watch?v=lv7-E4kgNeE

## The game
![Game Page](https://i.imgur.com/6CwrY7z.png)
Navigate to the game page to get started. Watch the YouTube video above to see how to play the game.

To play the game, click the **Start game** button, this will show the sequence, just click the same buttons that light up to win!

Ticking the **Auto Play** box will automatically start the next sequence on completion.
### Settings
In settings you can change the light you use, change the difficulty and reset the high score

![Game Settings](https://i.imgur.com/83qcl25.png)
The difficulty speeds in Ms are as follows:

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

The high score for the game will update once you get a sequence wrong and the game resets. The *session high score* will reset if you re-load the web browser. The *All-time high score* will only reset if you click the **Reset High Score** button in settings or clear your browsers cache

**Note: None of your data will be saved online OR will be access able by anyone else**

## The Lights Page
![Lights page](https://i.imgur.com/4ouQl9D.png)

### Controlling the lights

Here you can control the lights with a push of a button.
It will set all lights to a colour, turn them all on or all off.

### Set Light Colour
This will allow you to control the specific HUE value of a single light. 
*The light can be selected on the left*

The hue value is a number between 0 and 55000.

[Click to find out more about the HUE values](https://community.boomi.com/s/news/aBU1W000000bmFhWAI/what-are-hue-talking-about)

## Web Accessibility
- Colour blindness
A large problem with creating a colour memory game is that colour-blind people cannot use it. I decided to tackle this problem by indicating which button is changing during the sequence, so if you cannot distinguish colours, you'll just have to remember the order that the buttons flash!
Nowhere is colour exclusively used to show the form of a button, it always has text supporting it.

- Text contrast
Text contrast is very important, it can stop a visually impaired user from using the website out right. Almost all of the text is black on a white background, which is the best contrast possible. Where text is not black-on-white i.e. on buttons, the contrast is taken in to account and is enough to meet standards.
- Text size
The text size isn't as big as it could be for users who are visually impaired, but the website works exactly the same when zoomed in upon.

### WCAG1.0
- Guideline 1: No audio content included, visual assistance couldn't be given as the game wouldn't work if the user is blind,
- Guideline 2: Colour only shows form and text is always used as well as colour.
- Guideline 3: Bootstrap default style sheet is used
- Guideline 4: Language is clear under explanations; very little understanding of English is needed to operate the game fully.
- Guideline 5: All tables transform and stay together upon resizing.
- Guideline 6: The whole website has a dynamic style.
- Guideline 7: No changes are time-sensitive on the website.
- Guideline 8: There are no embedded UI's.
- Guideline 9: The website is designed to be used on any computer and browser and can work on phone sized screens too.
- Guideline 10: The only text box is empty, however has a clear title on what it is used for.
- Guideline 11: Template was from Bootstrap which should use W3C guidelines.
- Guideline 12: Context is always shown to the user as indicated by the highlighted item on the search bar
- Guideline 13: Navigation bar is clear and always accessible.
- Guideline 14: Lay-out is clear, clean and simple.


[Guidelines from here](https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines)
## Supported browsers
All browsers that can run JavaScript are supported, Chrome and Firefox have been tested and work as you can see from the video.

## Wire Frame
![wire frame](https://github.com/mbruty/HUE-Says/blob/master/Every%20thing%20else/wireframe.png?raw=true)

## Site Map
![site map](https://github.com/mbruty/HUE-Says/blob/master/Every%20thing%20else/sitemap.png?raw=true)
