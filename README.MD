Клиент Minecraft, запущенный на веб-странице. **Демонстрация на https://prismarinejs.github.io/prismarine-web-client/**


## Как это работает
prismarine-web-client запускает mineflayer и prismarine-viewer в вашем браузере, которые подключаются к прокси через WebSocket
который переводит соединение WebSocket в TCP для подключения к обычным серверам Minecraft. Prismarine-web-client основан на:
* [prismarine-viewer](https://github.com/PrismarineJS/prismarine-viewer) для рендера мира
* [mineflayer](https://github.com/PrismarineJS/mineflayer) для высокоуровневого API клиента minecraft

Проверьте эти модули, если вы хотите больше понять, как это работает, и внести свой вклад!

## Скриншот
![Screenshot of prismarine-web-client in action](screenshot.png)

## Демонстация
Нажмите на эту ссылку, чтобы открыть ее в вашем браузере, установка не требуется: https://prismarinejs.github.io/prismarine-web-client/

*Протестировано в Chrome и Firefox для настольных платформ.*

## Использование
Чтобы хостить его самостоятельно, выполните эти команды в bash:
```bash
$ npm install -g prismarine-web-client
$ prismarine-web-client
``` 
Наконец, откройте `http://localhost:8080` в вашем браузере.

## Функции

* Показывание мобов и игроков
* Показывание блоков 
* Передвижение (Вы можете двигаться, и вы можете видеть передвижение других сущностей)
* Установка и ломание блоков

## Roadmap
* Контейнеры (Инвентарь, сундуки, и так далее.)
* Звуки
* Больше взаимодействий с Миром (Атаковать мобов и других игроков, и так далее.)
* Косметические особенности рендера (Цикл дня и ночи, fog, и так далее.)

## Разработка

Если вы ввносите изменения, вам нужно установить его по-другому.

Во-первых, клонируйте репозиторий.

Затем установите свой рабочий каталог в каталог репозитория. Например:
```bash
$ cd ~/prismarine-web-client/
```

Наконец, запустите.

```bash
$ npm install
$ npm start
```

Это запустит express и webpack в режиме разработки: всякий раз, когда вы сохраняете файл, сборка будет переделана (это займет 5 секунд),
и вы можете обновить страницу, чтобы получить новый результат.

Для входа в Prismarine Web Client откройте http://localhost:8080 в вашем браузере.

Если вы захотите отключить автоматическое сохранение в своем IDE, чтобы избежать постоянной пересборки Web Client'а, смотрите: https://webpack.js.org/guides/development/#adjusting-your-text-editor

Чтобы проверить сборку Web Client'а (на сборку потребуется минута), вы можете запустить `npm run build-start`

Если вы заинтересованы в участии, вы можете проверить проекты [тут](https://github.com/PrismarineJS/prismarine-web-client/projects)

Некоторые переменные которые отображаются в окне для отладки:
* bot
* viewer
* mcData
* worldView
* Vec3
* pathfinder
* debugMenu

### Как добавить дополнительные элементы в меню отладки ?

debugMenu.customEntries['myKey'] = 'myValue'
delete debugMenu.customEntries['myKey']

### Некоторые примеры отладки

В инструментах chrome dev

* `bot.chat('test')` позволяет вам использовать чат
* `bot.chat(JSON.stringify(Object.values(bot.players).map(({username, ping}) => ({username, ping}))))` показывает пинг всех игроков
* `window.bot.entity.position.y += 5` прыжок
* `bot.chat(JSON.stringify(bot.findBlock({matching:(block) => block.name==='diamond_ore', maxDistance:256}).position))` ищет позицию алмазной руды
* `bot.physics.stepHeight = 2` позволяет вам взбиратся по блокам
* `bot.physics.sprintSpeed = 5` более быстрый бег
* `bot.loadPlugin(pathfinder.pathfinder)` затем `bot.pathfinder.goto(new pathfinder.goals.GoalXZ(100, 100))` идет к координатам 100, 100

Для получения дополнительных идей по отладке прочитайте [mineflayer](https://github.com/PrismarineJS/mineflayer) документацию