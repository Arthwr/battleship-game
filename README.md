### Battleship Game

### Purpose:
The project is for my personal learning, mainly to better understand TDD, Jest, and how to structure a project. 
In terms of architecture, I was also trying to mimic the MVC pattern where applicable.

### Main Technologies:
- **Languages:** JavaScript
- **Frameworks/Libraries:** Babel, ESLint, Jest, Webpack
- **Others:** HTML, CSS

### Codebase Organization:
- **Source Code:**
  - The `src/` directory contains the main source code of the project.
  - Inside `src/`, we have:
    - **Components:** Contains various functions for creating different elements used in the game interface.
    - **Modules:**
      - **Controller:** Contains the GameController responsible for managing game logic.
      - **Data:** Includes constants used in the game.
      - **Models:** Contains classes for Game, Gameboard, Player, Ship, and PlayerFactory.
      - **View:** Includes classes for managing the view of the game.
    - **Styles:** Contains CSS files for styling the game interface.
    - **Utils:** Contains utility functions for various calculations and validations.
  - **Index.html:** The main HTML file for the game.
  - **Index.js:** The main JavaScript file that initializes the game.

- **Tests:**
  - The `tests/` directory contains test files for the models (Game, Gameboard, Player, Ship) using Jest.

- **Configuration:**
  - Various configuration files like `.gitignore`, `babel.config.js`, `eslint.config.mjs`, `jest.config.js`, `webpack.common.js`, `webpack.dev.js`, `webpack.prod.js`.

### Scripts:
- **start:** Runs the development server using Webpack.
- **build:** Builds the project for production.
- **deploy:** Deploys the built project to the `gh-pages` branch.
- **test:** Runs Jest for testing.

### Development Dependencies:
- Various dependencies for Babel, ESLint, Jest, Webpack, and related plugins for development and testing.

### Live 
- The project is hosted on GitHub at [https://github.com/Arthwr/battleship-game](https://arthwr.github.io/battleship-game/)
