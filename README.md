🎮 Otaku Quiz Game — README
# Otaku G5ux-sam Quiz Game

## Table of Contents

- [Purpose](#purpose)
- [Target Audience](#target-audience)
- [Key Features](#key-features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Testing](#testing)
- [Deployment](#deployment)
- [Bugs](#bugs)
- [Credits](#credits)

---

## Purpose

The Otaku G5ux-sam Quiz Game is an interactive front-end web application that tests
users' anime knowledge through an image-based multiple-choice quiz. It provides
entertainment and learning value for anime fans by covering a wide range of popular
series across three difficulty levels.

The project was built to demonstrate proficiency in HTML, CSS, and JavaScript while
delivering a polished, accessible, and responsive user experience.

## Target Audience

- Anime fans and otaku culture enthusiasts of all ages
- Casual quiz game players looking for a quick and fun challenge
- Students and learners interested in testing their anime trivia knowledge

## Key Features

### 1. Player Name Entry

![image alt](https://github.com/Ivy2023/Otaku-sam-quiz-project/blob/6087954f59f033902aac9af6fa180b766b2e76e8/player%20name%20input.png)

Users enter a unique player name before starting the quiz. Input validation ensures
names are between 2 and 20 characters and are not duplicated on the leaderboard.
Inline error messages guide the user if input is invalid.

### 2. Difficulty Selection

![image alt](https://github.com/Ivy2023/Otaku-sam-quiz-project/blob/bf6b3f70d422fe16d5b76c282a6abaec7c520402/Dificulty%20Levels%20.png)

Three difficulty levels — Easy, Medium, and Hard — allow players to choose a
challenge appropriate to their anime knowledge. A back button allows users to
return to the name screen.

### 3. Speedrun Quiz with Timer

![image alt](https://github.com/Ivy2023/Otaku-sam-quiz-project/blob/71699e24ff8ebe2f67420dbddca4df61e516702c/questions%20with%20image%20and%20time%20remain%20.png)

Each quiz round consists of 10 randomised questions with a 60-second countdown
timer. The timer turns red and pulses when 10 seconds remain, creating urgency.
A progress indicator shows the current question number.

### 4. Immediate Answer Feedback

![Answer feedback showing correct and wrong](docs/screenshots/feedback.png)

After selecting an answer, the correct answer is highlighted in green. If the
user chose incorrectly, their answer turns red and the correct answer is
revealed with a green border. A text message confirms whether the answer was
correct or wrong.

### 5. Local Leaderboard
![Leaderboard table](docs/screenshots/leaderboard.png)

Scores are saved to the browser's localStorage. The top 10 scores are displayed
in a table ranked by score (and then by completion time). The current player's
entry is highlighted in gold. Medal emojis mark the top three positions.

### 6. Responsive Design
![Mobile view of the quiz](docs/screenshots/responsive.png)

The application adapts to all screen sizes using CSS media queries at 768px and
480px breakpoints. The leaderboard table is horizontally scrollable on small
screens.

## Technologies Used

- **HTML5** — semantic markup and structure
- **CSS3** — custom properties, flexbox, grid, media queries, animations
- **JavaScript (ES5/ES6)** — DOM manipulation, event handling, localStorage
- **Git & GitHub** — version control
- **GitHub Pages** — deployment

## Testing

### HTML Validation
All HTML was validated using the [W3C Markup Validation Service](https://validator.w3.org/).
No errors or warnings were found.

### CSS Validation
All CSS was validated using the [W3C CSS Validation Service (Jigsaw)](https://jigsaw.w3.org/css-validator/).
No errors were found.

### JavaScript Validation
All JavaScript was passed through [JSHint](https://jshint.com/) with the following
configuration:
- ES6 features enabled (`esversion: 6`)
- No significant issues found

### Manual Testing

| Feature | Test | Expected Result | Pass |
|---------|------|-----------------|------|
| Name input — empty | Click Continue with empty field | Error message displayed | ✅ |
| Name input — too short | Enter "A" and click Continue | Error message displayed | ✅ |
| Name input — duplicate | Enter a name already on leaderboard | Error message displayed | ✅ |
| Name input — valid | Enter "TestUser" and click Continue | Moves to difficulty screen | ✅ |
| Enter key on name input | Type name and press Enter | Same as clicking Continue | ✅ |
| Difficulty selection | Click Easy/Medium/Hard | Quiz starts with correct questions | ✅ |
| Back button | Click Back on difficulty screen | Returns to name screen | ✅ |
| Answer — correct | Click correct answer | Green highlight, score +1, feedback shown | ✅ |
| Answer — wrong | Click wrong answer | Red highlight, correct revealed, feedback shown | ✅ |
| Buttons disabled after answer | Click any answer | All answer buttons become disabled | ✅ |
| Next button | Click Next Question | Next question loads | ✅ |
| Timer countdown | Wait during quiz | Timer decrements each second | ✅ |
| Timer warning | Timer reaches 10 seconds | Timer turns red and pulses | ✅ |
| Timer expiry | Timer reaches 0 | Game ends with "Time's up!" message | ✅ |
| Quiz completion | Answer all 10 questions | Game ends, leaderboard shown | ✅ |
| Leaderboard display | Complete a quiz | Score appears in ranked table | ✅ |
| Leaderboard highlight | Complete a quiz | Current player row highlighted | ✅ |
| Restart | Click Play Again | Page reloads to start screen | ✅ |
| Broken image | Image file missing | Image hidden, alt text updated | ✅ |
| Responsive — mobile | Resize to 480px or smaller | Layout adjusts, buttons full width | ✅ |
| Responsive — tablet | Resize to 768px | Moderate layout adjustments | ✅ |

### Browser Testing

| Browser | Version | Result |
|---------|---------|--------|
| Chrome | 125+ | ✅ Pass |
| Firefox | 126+ | ✅ Pass |
| Safari | 17+ | ✅ Pass |
| Edge | 125+ | ✅ Pass |

### Accessibility Testing

- Colour contrast ratios checked using WebAIM Contrast Checker
- All interactive elements are keyboard navigable
- Focus indicators are visible on all focusable elements
- ARIA labels and roles applied to dynamic content areas
- Screen reader tested with VoiceOver (macOS)

## Deployment

### GitHub Pages

The site was deployed to GitHub Pages using the following steps:

1. Push all final code to the `main` branch of the GitHub repository
2. Navigate to the repository on GitHub
3. Go to **Settings** > **Pages**
4. Under **Source**, select **Deploy from a branch**
5. Select the `main` branch and `/ (root)` folder
6. Click **Save**
7. Wait for the build to complete — the live URL will appear at the top of the Pages section

The live site can be accessed at:
`https://<your-username>.github.io/otaku-g5ux-sam-quiz/`

### Local Development

To run the project locally:

1. Clone the repository:
   ```bash
   git clone https://github.com/<Ivy2023>/otaku-g5ux-sam-quiz.git
