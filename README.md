# Тест яндекс карт
## Первая часть
- У поля ввода установлена задержка в 2 секунды и минимальная длина строки для запроса 3 символа.
- Поле "ближайший город" высчитывается автоматически для базы городов.
- При нажатии кнопки "Дальше" происходит фиктивная отправка данных о установленных точках, информация выводится модальным окном.
## Вторая часть
- Данные моковые, генерируются от 1000 до 2000 точек. Отображение может произойти с небольшой задержкой.
- Работают некоторые фильтры и сортировка по дате.
- Пагинация объектов по 10 штук на странице.


# Запуск докер-контейнера
docker run -dti -p 3000:80 --restart always --name maps feverus/maps_test

## Перед запуском прописать проброс порта, на котором будет висеть контейнер:
Sudo nano /etc/apache2/sites-available/{ваш_домен}.conf

__Добавить__

ProxyPreserveHost On

ProxyPass /maps/ http://127.0.0.1:3000/

ProxyPassReverse /maps/ http://127.0.0.1:3000/
