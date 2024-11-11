## MyBudget

# Core ide
It makes it easy to track your budget, including what you spend on your needs, wants, and savings. It lets you decide on a rule for your budget in percent. For example, if you need to spend 50 % of your budget on needs and you decide to put aside 30 % for your wants, it will calculate how much you can spend on each based on the present.

# Features
    • Input income
    • Display income
    • Changethe  budget rule
    • Calculate how much can be spent
    • Input expenses
    • Display expenses

# How to build and run
    1. Clone project
    2. In the root of the project, open ”docker-compose.yml” and change username, password, and db to what you prefer.
    3. In the command line at the root of the project ”docker compose up”.
    4. In the backend/, create ”.env.local”. Add URL_DB, USERNAME_DB, and PASSWORD_DB with it corresponding from ”docker-compose.yml”.
    5. In the frontend/, create ”.env.local”. Add ”VITE_BUDGET_PATH” with the URL for the backend (the backend runs on port 3000). 
