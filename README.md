# Лабораторна робота №1

> [!WARNING]
> Для запуску проєкту, на вашому комп'ютері повинен бути встановлений Docker та docker-compose

Для того, щоб запустити цей проєкт локально, вам потрібно спочатку склонувати даний репозиторій командою:

```
git clone https://github.com/GIroSTarK/Lab1_Backend.git
```

Після цього перейти в папку з проєктом, та виконати команду:

```
docker-compose build
```

Для того, щоб запустити сервер, пишемо ось цю команду:

```
docker-compose up
```

По ендпоінту /healthcheck можна перевірити роботу серверу. Також можна перейти на задеплоєний застосунок по ось цьому [посиланню](https://lab1-backend.onrender.com)
