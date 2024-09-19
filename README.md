# % Calculator
[![Status overview badge](../../blob/badges/.github/badges/main/badge.svg)](#-results)


This calculator app is mostly complete, but will draw on your knowledge of modules and event handlers to finish.

## Tasks

Before starting, take a look at the provided file;

- [modules/percentage.js](./modules/percentage.js)

You will have to use this logic to complete the functionality for the UI.

The [HTML](./index.html) has already been written for you. You can use Live Server to view this page.

### Task 1

1. Export the function from the above file
2. Import it into [modules/main.js](./modules/main.js)
3. Import the JavaScript file [modules/main.js](./modules/main.js) into [index.html](./index.html)

### Task 2

We want to capture and process all the changes to the `<form>` with the id `percentage-change-form`.

In [main.js](./modules/main.js);

- Add a `change` event listener to the id `percentage-change-form`
- Every time the `change` handler is triggered;
  - capture the user input from the `<input>` elements with the id `change_1` and `change_2`
  - use the `difference` function you imported to calculate the result
  - set the result as the value of the element with the id `change_result`

### Task 3

Test the UI!

If correctly setup, the result should show automatically after the user enters both values.

[//]: # (autograding info start)
# <img src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" alt="" data-canonical-src="https://github.com/DCI-EdTech/autograding-setup/raw/main/assets/bot-large.svg" height="31" /> Results
> ⌛ Give it a minute. As long as you see the orange dot ![processing](https://raw.githubusercontent.com/DCI-EdTech/autograding-setup/main/assets/processing.svg) on top, CodeBuddy is still processing. Refresh this page to see it's current status.
>
> This is what CodeBuddy found when running your code. It is to show you what you have achieved and to give you hints on how to complete the exercise.


### Export

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status0.svg) | `percentage.js` has a `difference` export |

### Import

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status1.svg) | `main.js` imports the `difference` function |
| ![Status](../../blob/badges/.github/badges/main/status2.svg) | `modules/main.js` should be included in `index.html` using script tag |

### Percentage Calculation

|                 Status                  | Check                                                                                    |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/main/status3.svg) | Page should display correct difference percentage result based on entered values |



[🔬 Results Details](../../actions)
[🐞 Tips on Debugging](https://github.com/DCI-EdTech/autograding-setup/wiki/How-to-work-with-CodeBuddy)
[📢 Report Problem](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=spa-modules-calculator.git)


[//]: # (autograding info end)