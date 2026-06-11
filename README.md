🎮 Otaku Quiz Game — README

📌 Overview

Otaku G5ux‑sam Quiz Game is a responsive, accessible, image‑based quiz web application built using HTML5, CSS3, and vanilla JavaScript.
Players enter a unique name, choose a difficulty level, and answer anime‑themed questions against the clock. Scores are saved locally and displayed in a ranked leaderboard with medals and highlights.

This project demonstrates front‑end interactivity, UX‑focused design, accessibility compliance, and clean code structure suitable for deployment on GitHub Pages.

![image alt](https://github.com/Ivy2023/Otaku-sam-quiz-project/blob/6087954f59f033902aac9af6fa180b766b2e76e8/player%20name%20input.png)

⏱️ Speedrun Mode
60‑second countdown

Low‑time visual warning

Timer resets automatically

🧑‍💻 Player System
Unique player name entry

Duplicate name prevention

Smooth screen transitions

![image alt](https://github.com/Ivy2023/Otaku-sam-quiz-project/blob/bf6b3f70d422fe16d5b76c282a6abaec7c520402/Dificulty%20Levels%20.png)

🎯 Quiz Gameplay
Three difficulty levels: Easy, Medium, Hard

Randomized question order

Image‑based questions with alt text for accessibility

Instant feedback (correct/wrong styling + ARIA live region)

Score tracking in real time

![image alt](https://github.com/Ivy2023/Otaku-sam-quiz-project/blob/71699e24ff8ebe2f67420dbddca4df61e516702c/questions%20with%20image%20and%20time%20remain%20.png)

🖼 Custom Anime Images per Question

💾 LocalStorage Save System

🏅 Always‑Visible Live Leaderboard

🔁 Restart System

📱 Responsive & Accessible UI

Features
⚡ Speedrun Mode
-The game runs on a 60‑second global timer.

-When time reaches zero → Game Over.

-Score is based on correct answers before time runs out.

👤 Player Name Input
-Players enter their name before starting.

-Name is saved in LocalStorage.

-Used for leaderboard entries.

🎚 Difficulty Levels
-Easy

-Medium

-Hard
Each difficulty has its own randomized question pool.

💾 LocalStorage

-Saves player name.

-Can also store local high scores if needed.

🎞 Smooth Animations

-Fade‑in transitions between screens.

-Animated question image transitions.

This project is designed for learning, fun, and showcasing front‑end development s

Validator Testing

HTML

No errors were returned when passing through the official W3C validator

CSS

No errors were found when passing through the official (Jigsaw) validator

JavaScript

No errors were found when passing through the official Jshint validator
There are 22 functions in this file.

Function with the largest signature take 2 arguments, while the median is 0.

Largest function has 10 statements in it, while the median is 4.

The most complex function has a cyclomatic complexity value of 4 while the median is 1.

🛠️ Technologies Used
HTML5 (semantic structure, accessibility)

CSS3 (responsive layout, animations, consistent styling)

JavaScript (ES6) (game logic, interactivity, LocalStorage)

Git & GitHub (version control and deployment)

GitHub Pages (hosting)

✔ Functional Testing
No console errors

All buttons and interactions work as intended

Responsive layout verified on mobile and desktop

All images load correctly

No broken internal links

♿ Accessibility & UX Compliance
This project follows accessibility guidelines:

High‑contrast color palette

Alt text for all images

ARIA live regions for feedback

Semantic HTML structure

Clear navigation flow

No distracting backgrounds

Consistent visual style

📚 Credits & Attributions
All code written by Ivy (Otaku G5ux‑sam).

Anime images used for educational/demo purposes.

Shuffle logic inspired by the Fisher‑Yates method (MDN documentation).

No external libraries or frameworks used.

📄 License
This project is for educational and demonstration purposes.
