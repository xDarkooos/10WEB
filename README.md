Відкрити термінал у папці з файлами проєкту і запустити потрібний файл командою: node <назва_файлу>.js

Виконані вправи:
ENV Config
Файл: env_config.js
Маршрут: /
Сервер запускається з використанням process.env.PORT (або значення за замовчуванням) та обробляє GET-запит на /, повертаючи статус 200.

GitHub Actions (CI)
Файл: .github/workflows/autograde.yml
Автоматично запускає перевірку проєкту при push або pull_request: встановлює Node.js, встановлює залежності, запускає тести (npm test)

Production Hardening
Файл: production_hardening.js
Маршрути:
/health
Повертає JSON: { "ok": true }

/boom
Імітує помилку сервера та повертає:
500 Internal Server Error
