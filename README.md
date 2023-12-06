# Adverts Rent a Car Application

An app for a car rental company in Ukraine. 

Routes are made in the application:
- "/" - the home page with a general description of the services provided by the
  company
- "/catalogue" - a page containing a catalogue of cars of various configurations
- "/favorites" - a page with ads that have been added to the user's favorites If
  the user visits a route that does not exist, he or she should be redirected to
  the home page.

To work with the list of ads, I created a backend for development using the UI
service https://mockapi.io/.

This project was created with the help of

- React with React Router
- Redux Tool Kit
- Redux Persist
- PropTypes
- Styled Component
- Axios
- Notiflix
- mockapi.io

---
Ігор Чумак
December 05, 2023
Фавікон, тайтл: 1/1
Cursor pointer та Hover на кнопках: 1/1
Помилки в консолі: 1/1
Відповідність макету:
- немає задноього фону у параметрах Rental Conditions
- кнопка закриття модалки не відповідає макету 
- немає жодних селекторів фільтрів
1/2
Розмітка: Присутні зайві теги div, заголовки реалізовані через div або р 1/2
Результат: 5/7

Репозиторій та код 
Зайві файли в репозиторії: Зайвий файл README.en.md 0,5/1
Опис файлу README.md: 1/1
Назви комітів: Дуже багато однаково описаних комітів 1/2
Загальний вигляд репозиторію та коду: Присутній закоменчений код + вищезгадані зауваження 1/2
Результат: 3,5/6

Запит та пагінація
LocalStorage: 2/2
Mockapi: Не зрозуміло навіщо спочатку завантажувати з бекенду увесь каталог, а потім ще окремо по сторінці. Краще просто по сторінці 0,5/1
Пагінація: 2/2
Результат: 4,5/5

Логіка 
Реалізація модального вікна: 2/2
Кома реалізована по ТЗ: Молодець що реалізував, але є простий встроєний метод toLocaleString() 1/1
Компонентний підхід: 2/2
Реалізація логіки: 3/3
Redux: 3/3
Маршрутизація: 2/2
dropdown із марками автомобіля: 0/2
Результат: 13/15

Додаткове завдання
Реалізація додаткового завдання: 0/5

Резюме
В цілому робота виконана не погано. Але не реалізована фільтрація. 

Є невеличкі зауваження до розмітки і стилізації, а саме: немає задноього фону у параметрах Rental Conditions, кнопка закриття модалки не відповідає макету, присутні зайві теги div, заголовки реалізовані через div або р. 

Не варто завантажувати весь каталог заради списків фільтрів і пагінації. Пагінація має бути реалізована на стороні Mockapi. Приховувати кнопку Load more можна перевіривши чи кількість оголошень, що прийшли з бекенду < 12.
Список брендів можна або вручну прописати, або витягувати з уже завантажених оголошень. А для списку цін можна навіть і не створювати масив чисел, а просто створити цикл від 10 до якогось ліміту, з кроком 10.

Молодець що додав фавікон і тайтл.

Загальний результат: 26/38

В цілому, оцінка 7/10
