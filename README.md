# INSI: Modern Insulin Maintainance 

## INSI link:
https://insi-73c0b.firebaseapp.com/#!/

## Technologies used for this application:

* Styling: Bootstrap
* Application:  AngularJS
* Data Storage: Firebase
* Food Search: NutritionIX API https://www.nutritionix.com/

## What is INSI?
INSI is an Insulin to Carbohydrate Converter. 

## Why was INSI created?
INSI was created to help busy parents manage their childs type-1 diabetes quickly and more effiecently.

Reduces TIME and ENERGY into calculating Carbohydrates in every meal to give correct Insulin for each meal! INSI provides personal Carb : Insulin conversions [for the specified meal] giving it’s user(s) accurate Insulin results!

I created INSI with my 6 year old nephew in mind. He recently found out he has type-1 dibetes and it has been an adjustment for the family. With two younger brothers, meal time becomes a more time consuming event- looking up the carbohydrates in every food (per amount eaten) every meal and calculate his always changing insulin.

The goal of INSI was to give the caregiver a quick, effecent, and accurate result for food consumed at each meal. The user is promted to create their INSI profile on account creation with basic information and their insulin conversions for each meal: Breakfast, Lunch, Snack, Dinner. This information is used on the Calculate page.

## What does Insulin Conversion mean? 
A ratio that specifies the number of grams of carbohydrates covered by each unit of insulin. This ratio can differ per meal: breakfast can be one conversion while dinner is another. These ratios can also change as the child grows older etc. To get the correct amount of insulin per meal you have to accurately calculate and log every single item you ate and divide that by the specific meal ratio.


## How to use INSI
When a user comes to INSI they will see the Log-In/Register page. The user is able to Log-In/Register via email and password.
A user will not be able to use the functionality of INSI unless they have Logged-In and/or Registered.

## On Register
The User will enter in an email address and a password.
### When a New User clicks Register:
    1. The User is taken to a "Create Your Profile Page".
    2. There the user is promted to enter their: Personal Information: First Name, Last Name, Age. Insulin Conversions for: Breakfast, Snack, Lunch, Dinner. Emergency Contact Information: Name, Relationship, Phone Number.
### When the User Presses Save:
The profile information they just entered will be saved to Firebase for future use.

## On Log-In
The User will be taken directly to the "Calcuator" Page.
The user is able to search: 
* a database of food
* select the amount of food eaten
* then select their meal

Meal selection information comes directly from the users INSI Profile page. These factors are used to get the accurate Insulin to Carbohydrate Conversion for the user decreasing meal time routines!!

The user is also able to View and Edit their INSI Profile page at all times. 

## On Log-Out
The user is taken directly back to the INSI Log-In Page. 

## Version Two the user will be able to:

1. Search and select foods more specifically.
2. Complie searched foods into data that will be saved.
3. Be promted to log blood sugar every time the user wants to: 
    * Calculate their food
    * A timer will go off two hours later to promt the user again to log thier blood sugar.
4. The user will be able to calculate multiple foods at one time for each meal.

5. All INSI information will go into a graph that will be able to compile into a PDF to be sent via email to healthcare providors.
