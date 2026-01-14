async function loadPuzzle() {
  try {
    const response = await fetch("puzzles/today.json");
    const puzzle = await response.json();

    // Header
    document.getElementById("puzzle-date").textContent = puzzle.date;
    document.getElementById("puzzle-author").textContent = `By ${puzzle.author}`;

    // Clue
    document.getElementById("clue-text").textContent = puzzle.clue;
    document.getElementById("answer-length").textContent = `(${puzzle.length})`;

    // Answer cells
    const answerBox = document.getElementById("answer-box");
    answerBox.innerHTML = "";

    for (let i = 0; i < puzzle.length; i++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.dataset.index = i;
      answerBox.appendChild(cell);
    }

  } catch (error) {
    console.error("Failed to load puzzle:", error);
  }
}

// Load on page start
loadPuzzle();
