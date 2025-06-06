# 🏁 F1 Points Calculator

This is a simple web-based F1 Points Calculator built with vanilla JavaScript. It allows users to input race finish positions and calculates total points based on the official Formula 1 scoring system.

## 🚀 Features

- Accepts up to 10 race results  
- Validates input to allow only:
  - Whole numbers between 1 and 10
  - Empty fields
  - The literal string "`<10`"
- Highlights invalid entries
- Calculates total points based on F1 scoring:
  - `1st`: 25, `2nd`: 18, ..., `10th`: 1 point
- Smooth scroll to results
- Clears inputs after calculation

## 🛠️ Technologies Used

- HTML  
- CSS  
- JavaScript (ES6)

## ✅ How to Use

1. Open the HTML file in your browser.  
2. Enter race positions (1–10) in the input fields, or leave them blank / enter "`<10`" if not in top 10.  
3. Click the **Calculate** button.  
4. View total F1 points at the bottom of the page.

## 📁 Project Structure

```
index.html
styles.css
script.js
```

## 📝 Notes

- All fields must be valid to perform the calculation.
- Fields with invalid entries will be highlighted, and an alert will be shown.
