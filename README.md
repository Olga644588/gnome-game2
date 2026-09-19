# Убей гоблина

Простая браузерная игра: управляй героем и уничтожай гоблинов. Проект демонстрирует работу с ES-модулями, структурированием кода и автоматизированным деплоем через GitHub Actions.

[![Build Status](https://img.shields.io/github/actions/workflow/status/Olga644588/gnome-game2/deploy.yml?style=for-the-badge)](https://github.com/Olga644588/gnome-game2/actions)

**[Открыть игру на GitHub Pages](https://Olga644588.github.io/gnome-game2/)**


##  Что умеет игра
- Управление персонажем.
- Атака по гоблинам.
- Простая система очков и перезапуска.

## Особенности реализации
- **Модульность**: основная логика вынесена в класс `Game` (`src/classes/Game.js`).
- **ES-модули**: используется `import/export` для разделения кода.
- **CI/CD**: настроен автоматический деплой на GitHub Pages через GitHub Actions.

##  Стек технологий
- HTML5, CSS3
- JavaScript
- GitHub Actions
- GitHub Pages

## Как запустить локально
1. Клонировать репозиторий.
2. Установить зависимости: `yarn install`.
3. Запустить dev-сервер: `yarn dev`.
4. Открыть `http://localhost:8080` в браузере.


