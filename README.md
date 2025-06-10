# Random Meal Picker - Web Version

This web application helps you decide what to eat by randomly selecting a meal from a list. You can also add your own meal suggestions to the list.

## Features

- Randomly picks a meal from a predefined list.
- Displays the last meal that was picked.
- Allows users to add new meals to the selection list.
- Simple, clean user interface.

## How to Use

1.  Open the `index.html` file in your web browser.
2.  Click the "隨機選餐" (Pick Random Meal) button to get a meal suggestion.
3.  The chosen meal will be displayed, and your previous choice will be shown below the title.
4.  To add a new meal:
    - Type the name of the meal into the "輸入新菜色..." (Enter new meal...) input field.
    - Click the "新增菜色" (Add Meal) button.
    - You'll receive a confirmation, and the meal will be added to the list for future random selections.

## Files

- `index.html`: The main HTML structure of the application.
- `style.css`: Contains the CSS styles for the application.
- `script.js`: Contains the JavaScript logic, including the meal list and functions for picking and adding meals.

## Initial Meals (in Chinese)

The default list of meals includes:
- 炒飯 (Fried Rice)
- 義大利麵 (Pasta)
- 拉麵 (Ramen)
- 便當 (Bento Box)
- 咖哩飯 (Curry Rice)
- 漢堡 (Burger)
- 壽司 (Sushi)
- 火鍋 (Hot Pot)
- 披薩 (Pizza)
- 炸雞 (Fried Chicken)
- 沙拉 (Salad)

*(These meals are stored in the `meals` array in `script.js` and will be expanded with any meals you add via the input field during your session.)*
