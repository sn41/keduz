
### 1. Создание базы данных MySQL

- Создаём базу данных my_database
```sql
CREATE DATABASE my_database;
USE my_database;
```

  Создадим таблицу items в MySQL:
```sql
CREATE TABLE items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);
```

- Вставляем записи
```sql
INSERT INTO items (name) VALUES ('Элемент 1'), ('Элемент 2'), ('Элемент 3');
```
