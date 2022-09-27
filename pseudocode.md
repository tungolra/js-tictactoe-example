1. Define required constants:
   - [x] two players, 'X' & 'O'
   - [x] winning combos matrix 

2. Define required variables used to track the state of the game:
   - [x] Use a board array to represent the squares. 
   - [x] Use a turn variable to remember whose turn it is.

3. Upon loading/reloading the app should:
      - [x] Initialize the board array to 9 nulls to represent empty squares. 
      - [x] Reset textContent of cells to null
4. Handle a player clicking a square:
   - [x] "Extracting" the index from an id assigned to the element in the HTML and updating innerText to equal value of currentPlayer ('X' or 'O')
      -  [x] If the board has a value at the index, immediately return because that square is already taken.
      - [x] after current player has chosen, flip turn by intializing currentPlayer to the other player
      - [x] run function to see if game has ended/anyone won
         - [x] match winning combinations to boxes clicked on the board by currentPlayer
         - [x] loop through boxes currently filled; if there's no longer null, then game is tied

5. Handle a player clicking the replay button:
   - [x] play again display box should revert to none
6. Styling
- [x] change alerts to display boxes
7. Addt'l Functions
- [x] add scores