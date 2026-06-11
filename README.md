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

<img width="658" height="471" alt="pp2 player name entry" src="https://github.com/user-attachments/assets/5944a8fe-5028-4db3-b2d6-f2a3e084db27" />


Users enter a unique player name before starting the quiz. Input validation ensures
names are between 2 and 20 characters and are not duplicated on the leaderboard.
Inline error messages guide the user if input is invalid.

### 2. Difficulty Selection

<img width="658" height="372" alt="pp2 dificulty secction" src="https://github.com/user-attachments/assets/47455b8b-0319-47ff-82e8-a67900f060c2" />


Three difficulty levels — Easy, Medium, and Hard — allow players to choose a
challenge appropriate to their anime knowledge. A back button allows users to
return to the name screen.

### 3. Speedrun Quiz with Timer

Each quiz round consists of 10 randomised questions with a 60-second countdown
timer. The timer turns red and pulses when 10 seconds remain, creating urgency.
A progress indicator shows the current question number.

### 4. Immediate Answer Feedback

After selecting an answer, the correct answer is highlighted in green. If the
user chose incorrectly, their answer turns red and the correct answer is
revealed with a green border. A text message confirms whether the answer was
correct or wrong.

<img width="779" height="885" alt="pp2 timer and feedback" src="https://github.com/user-attachments/assets/ed7b8710-c273-452d-815b-9b0005db3bff" />


### 5. Local Leaderboard

Scores are saved to the browser's localStorage. The top 10 scores are displayed
in a table ranked by score (and then by completion time). The current player's
entry is highlighted in gold. Medal emojis mark the top three positions.

<img width="735" height="625" alt="pp2 local leaderboard" src="https://github.com/user-attachments/assets/9ec87a41-1091-46cd-932d-ec192adf262b" />


### 6. Responsive Design

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
