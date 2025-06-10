// --- DATA ---

// meals: Array of meal objects, each with a name, image path, and rarity level.
// This is the pool of available meals for the random selection.
const meals = [
    { name: '炒飯', image: 'images/meal_fried_rice.jpg', rarity: 3 }, /* img_url_4 */
    { name: '義大利麵', image: 'images/meal_pasta.jpg', rarity: 3 }, /* img_url_5 */
    { name: '拉麵', image: 'images/meal_ramen.jpg', rarity: 3 }, /* img_url_6 */
    { name: '便當', image: 'images/meal_bento.jpg', rarity: 3 }, /* img_url_7 */
    { name: '咖哩飯', image: 'images/meal_curry_rice.jpg', rarity: 3 }, /* img_url_8 */
    { name: '漢堡', image: 'images/meal_burger.jpg', rarity: 4 }, /* img_url_9 */
    { name: '壽司', image: 'images/meal_sushi.jpg', rarity: 4 }, /* img_url_10 */
    { name: '火鍋', image: 'images/meal_hot_pot.jpg', rarity: 4 }, /* img_url_11 */
    { name: '披薩', image: 'images/meal_pizza.jpg', rarity: 4 }, /* img_url_12 */
    { name: '炸雞', image: 'images/meal_fried_chicken.jpg', rarity: 4 }, /* img_url_13 */
    { name: '沙拉', image: 'images/meal_salad.jpg', rarity: 3 }, /* img_url_14 */
    { name: '牛排', image: 'images/meal_steak.jpg', rarity: 5 }, /* img_url_15 */
    { name: '烤鴨', image: 'images/meal_roast_duck.jpg', rarity: 5 }, /* img_url_16 */
    { name: '海鮮拼盤', image: 'images/meal_seafood_platter.jpg', rarity: 5 }, /* img_url_17 */
    { name: '龍蝦', image: 'images/meal_lobster.jpg', rarity: 5 } /* img_url_18 */
];

// --- DOM ELEMENT REFERENCES ---

// card: The main card element that flips.
const card = document.getElementById('card');
// mealName: Displays the name of the selected meal.
const mealName = document.getElementById('meal-name');
// mealImage: Displays the image of the selected meal.
const mealImage = document.getElementById('meal-image');
// rarityElement: Container for displaying rarity stars.
const rarityElement = document.getElementById('rarity');
// gachaButton: The button to trigger meal selection.
const gachaButton = document.getElementById('gacha-button');
// lastMeal: Displays the name of the previously selected meal.
const lastMeal = document.getElementById('last-meal');
// lightEffect: Element for the flashing light animation.
const lightEffect = document.getElementById('light-effect');
// particles: Container for particle animations.
const particles = document.getElementById('particles');
// pullCountElement: Displays the total number of pulls.
const pullCountElement = document.getElementById('pull-count');

// --- AUDIO ELEMENT REFERENCES ---

// drawSound: Sound played on every meal draw.
const drawSound = document.getElementById('draw-sound');
// rareSound: Sound played for rarity 3 meals (placeholder, currently same as draw).
const rareSound = document.getElementById('rare-sound'); // Note: Currently same sound as drawSound
// epicSound: Sound played for rarity 4 meals.
const epicSound = document.getElementById('epic-sound');
// legendarySound: Sound played for rarity 5 meals.
const legendarySound = document.getElementById('legendary-sound');

// --- STATE VARIABLES ---

// pullCount: Counter for the number of times a meal has been picked.
let pullCount = 0;
// lastSelectedMeal: Stores the previously selected meal object to display in history.
let lastSelectedMeal = null;

// --- FUNCTIONS ---

/**
 * pickMeal: Handles the core logic of selecting a random meal and updating the UI.
 * - Resets the card's flipped state and rarity styling.
 * - Randomly selects a meal from the `meals` array.
 * - Updates the "last meal" display if a previous meal was selected.
 * - Plays a base draw sound.
 * - Increments and displays the pull count.
 * - After a short delay (100ms):
 *   - Updates the meal name and image on the card.
 *   - Generates and displays rarity stars.
 *   - Applies rarity-specific styling to the card.
 *   - Flips the card to reveal the meal.
 *   - Updates `lastSelectedMeal` for the next round.
 *   - Plays rarity-specific sound effects (epic or legendary).
 *   - Triggers particle and light animations.
 */
function pickMeal() {
    // Reset card state: remove flipped class and any previous rarity classes
    card.classList.remove('flipped');
    card.classList.remove('rarity-3', 'rarity-4', 'rarity-5');
    // Note: `mealImage.style.backgroundImage = '';` is commented out to prevent image flash during flip

    // Randomly select a meal from the list
    const randomIndex = Math.floor(Math.random() * meals.length);
    const selectedMeal = meals[randomIndex];

    // Update and display the name of the previously selected meal
    if (lastSelectedMeal) {
        lastMeal.textContent = lastSelectedMeal.name;
    }

    // Play the basic draw sound effect
    drawSound.currentTime = 0; // Rewind sound to start
    drawSound.play();

    // Increment and display the pull counter
    pullCount++;
    pullCountElement.textContent = pullCount;

    // Optional: Could update the front of the card immediately if desired
    // const frontMealImage = card.querySelector('.card-front .genshin-logo');
    // frontMealImage.style.backgroundImage = `url('${selectedMeal.image}')`;

    // Delay the reveal to allow flip animation to start and feel more like a "draw"
    setTimeout(() => {
        // Update card back with new meal's information
        mealName.textContent = selectedMeal.name;
        mealImage.style.backgroundImage = `url('${selectedMeal.image}')`;

        // Generate and display rarity stars
        rarityElement.innerHTML = ''; // Clear previous stars
        for (let i = 0; i < selectedMeal.rarity; i++) {
            const star = document.createElement('i');
            star.className = 'fas fa-star star'; // Font Awesome star icon
            rarityElement.appendChild(star);
        }

        // Apply rarity-specific styling (border, background) to the card back
        card.classList.add(`rarity-${selectedMeal.rarity}`);

        // Flip the card to show the back face
        card.classList.add('flipped');

        // Store the current meal as the last selected for the next pick
        lastSelectedMeal = selectedMeal;

        // Play sound effects based on rarity after a delay (sync with animation)
        if (selectedMeal.rarity === 4) {
            setTimeout(() => epicSound.play(), 800); // Play epic sound for 4-star
        } else if (selectedMeal.rarity === 5) {
            setTimeout(() => legendarySound.play(), 800); // Play legendary sound for 5-star
        }

        // Trigger particle animation based on rarity
        createParticles(selectedMeal.rarity);

        // Trigger light flash animation
        lightEffect.style.opacity = '1';
        lightEffect.style.animation = 'flash 1.5s forwards';
        // Reset light effect animation properties once it finishes to allow re-triggering
        lightEffect.addEventListener('animationend', () => {
            lightEffect.style.animation = 'none';
            lightEffect.style.opacity = '0';
        }, { once: true }); // Event listener removed after first trigger

    }, 100); // 100ms delay before revealing content
}

/**
 * createParticles: Generates and animates floating particles for visual effect.
 * - Clears any existing particles.
 * - Determines particle count and color scheme based on meal rarity.
 * - Creates individual particle elements with randomized size, position, color,
 *   animation duration, and delay.
 * - Appends particles to the designated container in the DOM.
 * @param {number} rarity - The rarity level of the selected meal.
 */
function createParticles(rarity) {
    // Clear any previously existing particles
    particles.innerHTML = '';

    // Determine particle count and color palette based on rarity
    const particleCount = rarity * 10 + 20; // More particles for higher rarity
    const colors = rarity === 3 ? ['#4d9de0'] : // Blue for 3-star
                 rarity === 4 ? ['#b16cea', '#ff7de3'] : // Purple/pink for 4-star
                 ['#ffce7f', '#ff8e6e', '#ff4d4d']; // Gold/orange/red for 5-star

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Randomize particle properties for varied appearance
        const size = Math.random() * 6 + 3; // Particle size
        const posX = Math.random() * 100;    // Horizontal start position (%)
        const posY = Math.random() * 100;    // Vertical start position (%)
        const color = colors[Math.floor(Math.random() * colors.length)]; // Random color from palette
        const duration = Math.random() * 3 + 2; // Animation duration (seconds)
        const delay = Math.random() * 1;      // Animation delay (seconds)

        // Apply randomized styles and animation
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.background = color;
        particle.style.animation = `float ${duration}s ease-in ${delay}s forwards`;

        particles.appendChild(particle);
    }
}

// --- EVENT LISTENERS ---

// Attach the pickMeal function to the gacha button's click event.
gachaButton.addEventListener('click', pickMeal);

// Initial particle effect (commented out - not to run on page load)
// createParticles(3);
