# Інструкція з використання Back-end 

1.  Будь ласка, склонуйте даний репозиторій собі локально.(git clone https://github.com/DenisVoron/test-back-end-game-ts.git)

2.  Будь ласка, встановіть залежності проєкту, командою (npm install)

3.  Будь ласка, командою в терміналі запустіть проєкт (npm run dev)

4.  Маршрути для запитів нижче;

POST http://localhost:8802/api/start_game

POST http://localhost:8802/api/guess (need body - object {"guessNumber": number})

can use postman
