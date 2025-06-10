import random

MEALS = ["Pizza", "Pasta", "Salad", "Sushi", "Tacos", "Burger", "Soup"]

def select_meal(meals_list):
  """
  Selects a random meal from a list of meals.

  Args:
    meals_list: A list of strings, where each string is a meal.

  Returns:
    A string representing a randomly selected meal from the list, or None if the list is empty.
  """
  if not meals_list:
    return None
  return random.choice(meals_list)

if __name__ == "__main__":
  print("Welcome to the Meal Picker!")
  user_choice = input("Would you like to pick a random meal? (yes/no): ")
  if user_choice.lower() == "yes":
    chosen_meal = select_meal(MEALS)
    if chosen_meal is None:
      print("Sorry, there are no meals to choose from right now.")
    else:
      print(f"Tonight, you should have: {chosen_meal}")
  else:
    print("Okay, maybe next time. Goodbye!")
