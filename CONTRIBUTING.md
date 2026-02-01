# Cryptic Clues - Puzzle Submission Guide

## 🎯 How to Submit a Puzzle

We welcome puzzle submissions from the community! Follow these steps to contribute:

### Method 1: GitHub Issues (Automated)

1. **Create a New Issue**
   - Go to the [Issues](../../issues) tab
   - Click "New Issue"
   - Select "Submit New Puzzle" template

2. **Fill Out the Form**
   - Enter all required fields:
     - Puzzle ID (unique number)
     - Date
     - Author name
     - Difficulty level
     - Puzzle type(s)
     - Clue text
     - Answer
     - Definition
     - Fodder
     - Indicator
   - Check the submission agreement boxes

3. **Submit the Issue**
   - A maintainer will review your puzzle
   - Once approved, they'll add the `approved` label
   - The automation will automatically:
     - Create a JSON file in `/puzzles/{id}.json`
     - Update `index.html` with your puzzle
     - Close the issue with a confirmation comment

4. **Your Puzzle is Live! 🎉**
   - The puzzle will appear on the main page
   - Users can solve it immediately

### Method 2: Manual Pull Request

If you prefer to create the JSON file yourself:

1. **Fork the Repository**

2. **Create a JSON File**
   - Create a new file in `/puzzles/` folder
   - Name it with the next available number: `{id}.json`
   - Use this structure:

```json
{
  "id": 24,
  "date": "February 2, 2026",
  "author": "Your Name",
  "difficulty": "medium",
  "clue": "Your cryptic clue text (number)",
  "answer": "ANSWER",
  "definition": "definition part",
  "fodder": "fodder part",
  "indicator": "indicator word(s)"
}
```

3. **Update index.html**
   - Add your puzzle to the `clues` array at the top:

```javascript
{
  id: 24,
  clue: "Your cryptic clue text (number)",
  answer: "ANSWER",
  type: "hidden",
  difficulty: "Medium",
  date: "2026-02-02"
}
```

4. **Submit a Pull Request**
   - Describe your puzzle
   - Wait for review and approval

## 📋 Puzzle Guidelines

### Clue Requirements
- Must be a valid cryptic crossword clue
- Include letter count in parentheses: `(5)` or `(5,4)` for multi-word answers
- Should have clear definition and wordplay parts
- Must be solvable and fair

### Field Specifications

| Field | Type | Example | Notes |
|-------|------|---------|-------|
| `id` | number | `24` | Must be unique |
| `date` | string | `"February 2, 2026"` | Publication date |
| `author` | string | `"Andrew Veda"` | Creator's name |
| `difficulty` | string | `"medium"` | easy, medium, or hard |
| `clue` | string | `"Clue text (5)"` | Include letter count |
| `answer` | string | `"ANSWER"` | Uppercase, no spaces |
| `definition` | string | `"definition part"` | The straight definition |
| `fodder` | string | `"wordplay part"` | Letters used in wordplay |
| `indicator` | string | `"anagram indicator"` | Words that signal the technique |

### Puzzle Types
- `anagram` - Letters rearranged
- `acrostic` - First letters form answer
- `charade` - Word parts combined
- `hidden` - Answer hidden in clue
- `homophone` - Sounds like another word
- `double` - Double definition
- `mixed` - Combination of types

## ✅ Review Process

1. **Submission** - Issue or PR created
2. **Review** - Maintainer checks quality and correctness
3. **Approval** - `approved` label added (for issues)
4. **Automation** - Files created automatically
5. **Live** - Puzzle appears on website

## 🤝 Code of Conduct

- Submit only original content or puzzles you have permission to share
- Be respectful in all interactions
- Accept feedback graciously
- Ensure puzzles are appropriate for all audiences

## 🐛 Issues or Questions?

- [Open an issue](../../issues) for technical problems
- Tag maintainers for urgent matters
- Check existing issues before creating new ones

## 📜 License

By submitting a puzzle, you agree to license it under the same terms as this repository.

---

Happy puzzling! 🧩✨