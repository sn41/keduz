## Step 3

#### index.html:
```html
<!DOCTYPE html>
<html lang="ru">
<!--Заголовок-->
<head>
    <meta charset="UTF-8">
    <title>Запрос данных</title>
</head>

<!--body - тег тела страницы-->
<body>

<!--кнопка для запроса данных, onclick - атрибут, который будет вызывать функцию fetchData -->
    <button onclick="fetchData()">Загрузить список</button>

<!--    таблица для отображения списка строк, полученных от сервера из базы данных, она будет заполняться функцией fetchData-->
    <ul id="dataList"></ul>

<!--    скрипт обработки страницы, он поместит запрос в таблицу dataList-->
    <script src="main.js"></script>

</body>
</html>
```

####  main.js

```javascript
// скрипт обработки страницы/
function fetchData() {
    // поместим данные в список/
    const list = document.getElementById("dataList");

    // запрос на сервер по адресу 'server.php'
    fetch('server.php')
        // обработка ответа/
        .then(response => response.json())
        // обработка данных/
        .then(data => {
            // удаление предыдущих элементов/
            list.innerHTML = "";
            // проверка являються ли полученные данные массивом/
            if (Array.isArray(data)) {
                // добавление каждого элемента массива в список/
                data.forEach(item => {
                    // для каждого элемента данных создаём строку списка, li - это переменная, "li" - тег/
                    const li = document.createElement("li");
                    // Элемент таблицы, полученной из базы данных, — это строка базы данных, у неё есть поля,
                    // Поле с именем name помещаем в строку списка/
                    li.textContent = item.name;
                    // Говорим списку list, что добавляем элемент li /
                    list.appendChild(li);
                });
            } else {
                // если полученные данные не массив, а, например сообщение о том, что список прочитать невозможно, то выводим ошибку/
                console.error("Ошибка: Ожидался массив, но получен объект.", data);
            }
        })
        // Если в процессе обработки запроса возникает ошибка - оказываемся здесь, выполняется обработка ошибок.
        // Выводим сообщение об ошибке в консоль браузера/
        .catch(error => console.error("Ошибка:", error));
}
```

#### server.php

```php
<?php
header("Content-Type: application/json");

$host = "localhost";
$user = "root";     // Укажи пользователя MySQL
$pass = "";         // Пароль (если есть)
$dbname = "my_database";

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);

    $sql = "SELECT * FROM items";
    $stmt = $pdo->prepare($sql);
    $stmt->execute();

    $items = $stmt->fetchAll();

    echo json_encode($items);


//    echo "Привет, мир!";
//    echo json_encode(["message" => "Привет, мир!"]);

} catch (PDOException $e) {
    echo json_encode(["error" => "Ошибка подключения: " . $e->getMessage()]);

}
?>
```

