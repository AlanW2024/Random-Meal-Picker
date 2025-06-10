# Genshin Impact-Style Random Meal Picker

This web application provides a fun, themed way to randomly select what to eat, mimicking the gacha (random pull) experience from the game Genshin Impact.

## Features

-   **Genshin-Themed UI:** Custom styling, fonts, and layout inspired by Genshin Impact.
-   **Gacha Animation:** A "card flip" animation reveals the chosen meal.
-   **Meal Rarity:** Meals are assigned a rarity (3, 4, or 5 stars), influencing the card's appearance.
-   **Visual Effects:** Includes particle effects and light flashes during the meal reveal.
-   **Sound Effects:** Attempts to play sounds for draws and based on meal rarity (Note: audio files are currently linked to external sources and may not be reliable; local audio setup is pending manual file provision).
-   **Meal Images:** Each meal has an associated image displayed on the card.
-   **History:** Shows the "last picked meal."
-   **Pull Counter:** Tracks how many times a meal has been picked.
-   **Dynamic Food List Display:** Shows the available meals.

## How to Use

1.  Ensure all project files (`index.html`, `style.css`, `script.js`, and the `images/` folder) are in the same directory structure.
2.  Open the `index.html` file in a modern web browser.
3.  Click the "抽取美食" (Pick Meal) button to start the gacha animation.
4.  The chosen meal, its image, and rarity will be revealed on the card.

## Project Structure

-   `index.html`: The main HTML file containing the structure of the application and audio elements.
-   `style.css`: Contains all CSS rules for styling the application, including animations.
-   `script.js`: Contains all JavaScript logic for meal selection, animations, effects, and DOM manipulation.
-   `images/`: Contains all local image assets used for backgrounds, UI elements, and meal pictures.
-   `audio/`: This directory is intended for local audio files. Currently, audio sources in `index.html` point to external URLs as automatic download failed. For reliable sound, you would need to place `.mp3` files here and update the `src` paths in `index.html`.

## Customization

-   **Meals:** You can customize the list of meals, their images, and rarities by editing the `meals` array at the beginning of `script.js`. Ensure corresponding images are placed in the `images/` folder and paths are updated.
-   **Styling & Animations:** Further visual customizations can be made by modifying `style.css` and `script.js`.
