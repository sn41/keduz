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

//    $sql = "SELECT * FROM items";
    $sql = "SELECT * FROM regions";

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