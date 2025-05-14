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
VALUES ('Астана', 'region_img/astana_city.png'),
('Алматы', 'region_img/almaty_city.png'),
('Шымкент', 'region_img/shimkent_city.png'),
('Абайская область', 'region_img/abay.png'),
('Акмолинская область', 'region_img/akmola.png'),
('Актюбинская область', 'region_img/aktobe.png'),
('Алматинская область', 'region_img/almaty.png'),
('Атырауская область', 'region_img/atyrau.png'),
('Восточно-Казахстанская область', 'region_img/east_kazakhstan.png'),
('Жамбылская область', 'region_img/zhambyl.png'),
('Жетысуская область', 'region_img/zhetysu.png'),
('Западно-Казахстанская область', 'region_img/west_kazakhstan.png'),
('Карагандинская область', 'region_img/karaganda.png'),
('Костанайская область', 'region_img/kostanay.png'),
('Кызылординская область', 'region_img/kyzylorda.png'),
('Мангистауская область', 'region_img/mangistau.png'),
('Павлодарская область', 'region_img/pavlodar.png'),
('Северо-Казахстанская область', 'region_img/north_kazakhstan.png'),
('Туркестанская область', 'region_img/turkestan.png'),
('Улытауская область', 'region_img/ulytau.png'),
('Город республиканского значения область', 'region_img/city.png');


**Изменим код сервера, чтобы получить теперь список областей**

