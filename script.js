// Ждем загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
    // Получаем кнопку
    const changeColorBtn = document.getElementById('changeColorBtn');
    
    // Добавляем обработчик события
    changeColorBtn.addEventListener('click', function() {
        // Генерируем случайный цвет
        const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
        
        // Меняем цвет фона основного контента
        document.getElementById('content').style.backgroundColor = randomColor;
        
        // Показываем сообщение
        alert('Цвет изменен на: ' + randomColor);
    });
    
    // Дополнительный функционал можно добавить здесь
});
