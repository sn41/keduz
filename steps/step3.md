### Изменим базу данных

**Удалим таблицу items**

```sql
drop table items;
```

**Добавим таблицу для регионов**

```sql
CREATE TABLE regions
(
    id        INT PRIMARY KEY AUTO_INCREMENT,
    name      VARCHAR(100) NOT NULL UNIQUE,
    logo_path VARCHAR(255)
);
```

**Добавим список областей**
INSERT INTO regions (name, logo_path)
VALUES ('Астана', 'img/regions/astana_city.png'),
('Алматы', 'img/regions/almaty_city.png'),
('Шымкент', 'img/regions/shimkent_city.png'),
('Абайская область', 'img/regions/abay.png'),
('Акмолинская область', 'img/regions/akmola.png'),
('Актюбинская область', 'img/regions/aktobe.png'),
('Алматинская область', 'img/regions/almaty.png'),
('Атырауская область', 'img/regions/atyrau.png'),
('Восточно-Казахстанская область', 'img/regions/east_kazakhstan.png'),
('Жамбылская область', 'img/regions/zhambyl.png'),
('Жетысуская область', 'img/regions/zhetysu.png'),
('Западно-Казахстанская область', 'img/regions/west_kazakhstan.png'),
('Карагандинская область', 'img/regions/karaganda.png'),
('Костанайская область', 'img/regions/kostanay.png'),
('Кызылординская область', 'img/regions/kyzylorda.png'),
('Мангистауская область', 'img/regions/mangistau.png'),
('Павлодарская область', 'img/regions/pavlodar.png'),
('Северо-Казахстанская область', 'img/regions/north_kazakhstan.png'),
('Туркестанская область', 'img/regions/turkestan.png'),
('Улытауская область', 'img/regions/ulytau.png'),
('Город республиканского значения область', 'img/regions/city.png');


**Изменим код сервера, чтобы получить теперь список областей**

