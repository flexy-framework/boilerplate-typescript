# Webpack2 + Typescript2 + (jquery, React or preact) + scss

В сборку включен typescript2, webpack2 и вариации каждая в своей ветке:

* React
* Preact
* Jquery (master)

Тесты с karma и phantomjs включены

## Flexyconfig

`dst` - путь для сборки

`proxy` - browser-sync прокси адрес

## Команды

`npm run build` - Сборка для продакшена

`npm run watch:webpack` - Для сборки js

`npm run watch:web` - Для сборки scss, images, fonts

`npm run lint:scss` - Проверка scss

`npm run lint:ts` - Проверка typescript

`npm test` - Запуск тестов