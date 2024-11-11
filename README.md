##MyBudget

#Core ide
Make it easy to track your budget on what you spend on your needs, whants and what you save. It lets you deside on a rule on your budget in procent for exampel if you need to spend 50 % of your budget on needs and you deside that you will put aside 30 % to your whants it will calculate how mutch you can spend on each base on the present.

#Featchers
    • Input income
    • Display income
    • Change budget rule
    • Calculate how much can be spent
    • Input expens
    • Display expens

#How to build and run
    1. Clone project
    2. In root of project, open ”docker-compose.yml” and change username, password and db to what you prefer.
    3. In the commandline in root of project ”docker compose up”.
    4. In backend/src/main/resources/, create ”application-dev.yml”. Add URL_DB, USERNAME_DB and PASSWORD_DB with it corospending from ”docker-compose.yml”.
    5. In frontend/, create ”.env.local”. Add ”VITE_BUDGET_PATH” with the url for the backend (backend runs on port 3000). 
