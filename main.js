// (++ step4) скрипт обработки страницы/
document.addEventListener('DOMContentLoaded', function() {
    // получаем элементы по их id/
    const contentFrame = document.getElementById("contentFrame");
    const geographyBtn = document.getElementById('regionsBtn');

    let currentView = '';
    let data = null;

    geographyBtn.addEventListener('click', () => {
        currentView = 'regions';
        loadRegions().then(r => data = r);
    });

    // (++ step4) Функция, формирующая запрос списка регионов, загружающая данные и вызывающая функцию displayRegions для их отображения/
    async function loadRegions() {
        try {
            // Формируем запрос на сервер/
            const response = await fetch('server.php');
            // Если ответ не OK, то выводим ошибку и оказываемся в блоке catch/
            if (!response.ok) throw new Error('Network response was not ok');
            // Преобразуем ответ сервера в JSON/
            const regionsData = await response.json();
            // Если в ответе есть ошибка, то выводим её и оказываемся в блоке catch/
            if (regionsData.error) throw new Error(data.error);
            // Полученные данные отправляем в функцию displayRegions для отображения/
            displayRegions(regionsData);
        } catch (error) {
            // Если возникла ошибка, то вызываем процедуру showError для отображения ошибки/
            showError('Ошибка при загрузке регионов: ' + error.message);
        } finally {
            // В любом случае закрываем загрузчик/
            hideLoading();
        }
    }

    // (++ step4) Функция, отображающая результаты поиска/
    function displayRegions(regions) {
        // Если результатов нет, то выводим сообщение "Регионы не найдены"/
        if (!regions.length) {
            contentFrame.innerHTML = '<div class="no-results">Регионы не найдены</div>';
            return;
        }

        // (++ step4) Иначе, начинаем формировать HTML код для отображения результатов поиска/
        let html = '<div class="grid-container">';

        regions.forEach(region => {
            html += `
                // Карточка отображающая регион/
                <div class="card"">
                    // Изображение герба региона/
                    <img src="${escapeHtml(region.logo_path)}" alt="${escapeHtml(region.name)}" 
                         onerror="this.src='default_region.png'">
                    // Название региона/
                    <h3>${escapeHtml(region.name)}</h3>
                </div>
            `;
        });

        html += '</div>';
        //

        // (++ step4) Заменяем HTML-код элемента contentFrame на полученный HTML код/
        contentFrame.innerHTML = html;
    }

    // (++ step4) Функция, отображающая сообщение об ошибке в нашем фрейме/
    function showError(message) {
        // Создаём элемент div, мы покажем его в contentFrame/
        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        errorDiv.textContent = message;

        // Добавляем элемент div в contentFrame/
        contentFrame.prepend(errorDiv);
        // Таймен на удаление этого элемента errorDiv через 5 секунд/
        setTimeout(() => errorDiv.remove(), 5000);
    }

    // (++ step4) Служебная функция, заменяющая специальные символы в строке на соответствующие HTML-сущности/
    function escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }

    // (++ step4) Служебная функция, удаляющая загрузчик/
    function hideLoading() {
        const loader = contentFrame.querySelector('.loader');
        if (loader) {
            loader.remove();
        }
    }

});






/*
(-- step4)
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
}*/
