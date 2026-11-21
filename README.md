# Webpack Static Site Starter Kit

Стартовый шаблон для статических сайтов: HTML, SCSS и JavaScript, сборка на webpack 5.

Если вы раньше не работали с webpack, сначала прочитайте [how-to-start.md](how-to-start.md).

## Что нужно

- **Node.js, текущая LTS-версия** (npm ставится вместе с ним). Минимальная версия 24.11.
- Git

### Установка Node.js

**Windows**: выберите один из способов.

- Скачайте установщик **LTS** с [nodejs.org](https://nodejs.org/ru/download) и запустите его.
- Или выполните в PowerShell: `winget install OpenJS.NodeJS.LTS`
- Или, если вы пользуетесь [nvm-windows](https://github.com/coreybutler/nvm-windows/releases), укажите точную версию (nvm-windows не читает `.nvmrc`):

  ```powershell
  nvm install 26.12.1
  nvm use 26.12.1
  ```

  Номер последней LTS-версии можно найти на [nodejs.org](https://nodejs.org/en/about/previous-releases).

**macOS / Linux**: с [nvm](https://github.com/nvm-sh/nvm) выполните в папке проекта (версия берётся из `.nvmrc`):

```bash
nvm install
nvm use
```

После установки закройте и снова откройте терминал (и VS Code), затем проверьте версию. Она должна быть **24.11.0 или новее**:

```bash
node -v
```

---

## Как пользоваться

1. Клонируйте репозиторий:

   ```bash
   git clone https://github.com/Habsida-Projects/webpack-static-template-ru
   ```

   **Windows:** держите проект по короткому пути, например `C:\dev\my-project`. В глубоко вложенных папках пути внутри `node_modules` могут превысить ограничение Windows в 260 символов, и сборка падает с непонятными ошибками вроде `Package import specifier "#..." is not defined`.

2. Откройте терминал в папке `webpack-static-template-ru`.

3. Удалите папку `.git` в Проводнике или Finder либо командой:

   ```bash
   # PowerShell
   Remove-Item -Recurse -Force .git

   # macOS / Linux / Git Bash
   rm -rf .git
   ```

   Старая папка `.git` связана с репозиторием шаблона. Вы создадите новую, которая будет связана с вашим собственным репозиторием.

4. Установите зависимости:

   ```bash
   npm install
   ```

5. Запустите dev-сервер. Сайт откроется по адресу http://localhost:9000 и будет перезагружаться, когда вы сохраняете файл:

   ```bash
   npm start
   ```

## Скрипты

| Команда | Что делает |
| --- | --- |
| `npm start` | Dev-сервер на http://localhost:9000 с автоперезагрузкой |
| `npm run build` | Сборка для продакшена в `dist/` (минифицированная) |
| `npm run dev` | Сборка для разработки в `dist/` (без минификации) |
| `npm run watch` | Сборка для разработки, которая пересобирает `dist/` при каждом сохранении |
| `npm run deploy` | Собирает проект и публикует `dist/` на GitHub Pages |
| `npm run lint` | Проверяет JavaScript с помощью ESLint |
| `npm run format` | Форматирует все файлы с помощью Prettier |

---

## Свой репозиторий на GitHub

Создайте на github.com пустой репозиторий (без README), затем в папке проекта выполните:

```bash
git init -b main
git add .
git commit -m "initial commit"
```

_Если `git init -b main` выдаёт ошибку, у вас устаревшая версия Git. Обновите Git._

Свяжите проект со своим репозиторием. Замените _USER_ (ваше имя пользователя на GitHub) и _REPO_ (имя репозитория):

```bash
git remote add origin https://github.com/USER/REPO.git
git remote -v
git push -u origin main
```

---

## Публикация на GitHub Pages

Сначала отправьте проект на GitHub (см. выше).

1. Соберите и опубликуйте проект:

   ```bash
   npm run deploy
   ```

   Команда собирает проект и отправляет содержимое `dist/` в ветку `gh-pages`.

2. На github.com откройте свой репозиторий → **Settings** → **Pages**. В разделе **Build and deployment** выберите **Deploy from a branch**, ветку **`gh-pages`**, папку **`/ (root)`** и сохраните.

3. Через минуту сайт будет доступен по адресу `https://USER.github.io/REPO/`.

Чтобы опубликовать изменения, снова выполните `npm run deploy`.

Что важно знать:

- Папка `dist/` указана в `.gitignore`. Не коммитьте её в `main`: она живёт только в ветке `gh-pages`.
- Сайт лежит в подпапке (`/REPO/`), поэтому **всегда используйте относительные пути**: `./img/logo.svg`, а не `/img/logo.svg`. Путь, который начинается с `/`, работает на localhost, но ломается на GitHub Pages.

---

Что ещё почитать: [Webpack 5 guide for beginners](https://dev.to/anitaparmar26/webpack-5-guide-for-beginners-314c) (на английском).
