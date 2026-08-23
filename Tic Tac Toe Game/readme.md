# 🎮 Tic Tac Toe Game — JavaScript

> An interactive browser-based Tic Tac Toe game built with **HTML, CSS, and Vanilla JavaScript**, created as part of my journey toward strengthening JavaScript fundamentals and learning how to build interactive web applications.

[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-Markup-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-Styling-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge\&logo=vercel)](https://vercel.com/)

---

## 🚀 Live Demo

### 🎯 [Play Tic Tac Toe Online](https://tic-tac-toe-game-rupesh.vercel.app/)

**🔗 Live Website:** https://tic-tac-toe-game-rupesh.vercel.app/

Play the game directly in your browser — no installation or setup required.

---

## 📌 About The Project

This project is a browser-based **Tic Tac Toe game for two players**, built using **HTML, CSS, and Vanilla JavaScript**.

The project was developed while following the **Apna College JavaScript learning journey by Shradha Khapra** and served as a hands-on exercise for understanding how JavaScript can be used to turn a static webpage into an interactive application.

The game uses JavaScript to manage:

* Player turns
* X and O placement
* Winning combinations
* Winner detection
* Draw conditions
* Board state
* Game reset
* New game functionality
* DOM manipulation
* User interaction through event listeners

The project helped me move from learning individual JavaScript concepts to understanding how those concepts work together inside a complete browser application.

---

# ✨ Features

### 🎮 Two-Player Gameplay

Two players take turns playing on the same 3×3 board:

* Player 1 → `X`
* Player 2 → `O`

The application automatically switches the active player after every valid move.

### 🏆 Winner Detection

The game checks all possible winning combinations after every move.

There are **8 possible winning patterns**:

```text
Horizontal
──────────
[0] [1] [2]
[3] [4] [5]
[6] [7] [8]

Vertical
──────────
[0] [3] [6]
[1] [4] [7]
[2] [5] [8]

Diagonal
──────────
[0] [4] [8]
[2] [4] [6]
```

When the same symbol occupies all three positions of a winning pattern, the game declares the winner.

### 🤝 Draw Detection

If the board is filled without a winning combination, the game identifies the result as a draw.

### 🔒 Move Locking

Once a player selects a cell, that cell is disabled so that it cannot be selected again during the current game.

### 🔄 Reset Game

The **Reset** button clears the board and starts the game again with X as the first player.

### 🆕 New Game

After a game finishes, the **New Game** button allows players to start a fresh match.

### 📱 Browser-Based

The game runs directly in the browser without requiring:

* Backend
* Database
* External API
* JavaScript framework

---

# 🛠️ Technologies Used

| Technology       | Purpose                      |
| ---------------- | ---------------------------- |
| HTML5            | Structure of the game        |
| CSS3             | Layout and visual styling    |
| JavaScript       | Game logic and interactivity |
| DOM Manipulation | Dynamic UI updates           |
| Event Listeners  | Handling player interactions |
| Vercel           | Deployment                   |

---

# 🏗️ How The Game Works

The game follows a simple event-driven flow:

```text
User clicks a cell
       ↓
JavaScript detects the click
       ↓
Current player's symbol is placed
       ↓
Selected cell is disabled
       ↓
Winning combinations are checked
       ↓
 ┌───────────────┐
 │ Winner found? │
 └───────┬───────┘
       YES│       │NO
          ↓       ↓
    Show winner   Check draw
                  ↓
             Switch player
                  ↓
             Continue game
```

The winning combinations are stored as arrays of indexes:

```javascript
const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
```

This allows the program to check all possible winning conditions systematically.

---

# 📂 Project Structure

```text
Tic Tac Toe Game/
│
├── index.html
├── style.css
├── app.js
└── README.md
```

### `index.html`

Defines the structure of the game board, buttons, and result display.

### `style.css`

Controls the visual appearance, layout, spacing, typography, and responsive presentation.

### `app.js`

Contains the core game logic including:

* Player turn management
* Cell interaction
* Winning pattern detection
* Winner detection
* Draw handling
* Reset functionality
* New game functionality

---

# 📚 What I Learned

This project helped me connect multiple JavaScript fundamentals into one working application.

### JavaScript Fundamentals

* Variables
* Boolean state
* Arrays
* Functions
* Loops
* Conditional statements

### DOM Manipulation

I learned how JavaScript can:

* Select HTML elements
* Modify element content
* Change classes
* Disable and enable elements
* Update the interface dynamically

### Event Handling

The project uses click events to respond to player interactions.

The basic relationship is:

```text
User Action
    ↓
Event
    ↓
JavaScript Logic
    ↓
Game State
    ↓
Updated UI
```

### Logical Thinking

One of the biggest lessons from this project was converting real-world rules into programming logic:

> **Board → State → Rules → Conditions → Result**

This way of thinking becomes increasingly important when building larger applications.

---

# 🎯 Key Takeaways

Building this game taught me that a webpage becomes an application when it can respond intelligently to changes in state.

This project gave me practical experience with:

* State management
* Event-driven programming
* DOM manipulation
* Conditional logic
* User interaction
* Input handling
* Game-state validation

These fundamentals provide a foundation for building more complex JavaScript and full-stack applications.

---

# 🚀 Future Improvements

Possible improvements for future versions include:

* [ ] Add Player vs Computer mode
* [ ] Build an AI opponent
* [ ] Add difficulty levels
* [ ] Add score tracking
* [ ] Add player name input
* [ ] Add winning-cell animations
* [ ] Add sound effects
* [ ] Improve mobile responsiveness
* [ ] Add game history
* [ ] Add more advanced game-state architecture

---

# 🎓 Learning Context

This project was created as part of my JavaScript learning journey while following **Apna College's JavaScript course/tutorials by Shradha Khapra**.

The goal was to take concepts learned during the course and apply them by building a functioning browser-based project.

This project represents one of the practical steps in my journey from learning individual programming concepts to building complete interactive applications.

---

# 👨‍💻 About Me

## Rupesh Kumar Chaudhary

**Computer Science & Engineering Student | Full-Stack Developer | AI/ML Learner | DSA in C++**

I am continuously building projects and strengthening my foundations across:

* 💻 Full-Stack Development — MERN
* 🤖 Artificial Intelligence & Machine Learning
* 🧠 Data Structures & Algorithms — C++
* 🐍 Python
* 🌐 Web Development

I believe in **learning by building, solving problems, and turning concepts into working applications.**

---

# 🔗 Project Links

### 🌐 Live Demo

**[Play Tic Tac Toe](https://tic-tac-toe-game-rupesh.vercel.app/)**

### 💻 GitHub Repository

**[View Source Code](https://github.com/rupesh568/JavaScriptProject-1/tree/main/Tic%20Tac%20Toe%20Game)**

---

# ⭐ Support

If you found this project interesting, feel free to explore the source code and give the repository a ⭐.

---

## 📄 License

This project was created for **learning and educational purposes**.

