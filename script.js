const meals = [
    '炒飯', '義大利麵', '拉麵', '便當', '咖哩飯',
    '漢堡', '壽司', '火鍋', '披薩', '炸雞', '沙拉'
];

function pickMeal() {
    const mealDisplay = document.getElementById('meal');
    const lastMealDisplay = document.getElementById('last-meal');
    const currentDisplayedMeal = mealDisplay.textContent;

    if (currentDisplayedMeal !== "按一下按鈕來決定！") {
        lastMealDisplay.textContent = currentDisplayedMeal;
    }

    const randomMeal = meals[Math.floor(Math.random() * meals.length)];
    mealDisplay.textContent = randomMeal;
}

function addMeal() {
    const newMealInput = document.getElementById('new-meal-input');
    const newMeal = newMealInput.value.trim();

    if (newMeal) {
        meals.push(newMeal);
        newMealInput.value = '';
        alert('"' + newMeal + '" 已成功新增！');
    } else {
        alert('請輸入菜色名稱！');
    }
}

document.getElementById('add-meal-button').addEventListener('click', addMeal);
