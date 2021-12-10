## Задание

Добавить возможность покупки товаров в корзине.

Для этого необходимо дополнить проект, созданный в предыдущем домашнем задании [homework4](../homework4/readme.md).

#### Технические требования:

Расширить функционал приложения, реализованного в ДЗ 1-4.
1. На странице корзины добавить несколько полей для получения от пользователя информации о нем и о адресе доставки. В частности, форма как минимум должна включать следующие поля:
 - Имя пользователя
 - Фамилия пользователя
 - Возраст пользователя
 - Адрес доставки
 - Мобильный телефон
2. К полям добавить минимальные валидации (текст, число). Все поля должны быть обязательными для заполнения.
3. Добавить кнопку `Checkout`, которая будет имитировать процесс покупки товаров в корзине.

Общая схема следующая:
 - Создаем и отображаем компонент с формой.
 - При вводе значений выполняем валидации для `touched` полей. Если что-то не так – выводим сообщение об ошибке под соответствующим полем. 
 - При корректной информации в полях после нажатия на `Checkout` вызываем action, который в свою очередь очищает из `localStorage` данные о корзине. При этом в консоль должна быть выведена информация о приобретенных товарах, а также информация, которую пользователь заполнил в форме.

4. Для считывания данных, введенны в форму, а также для их валидации, обязательно необходимо использовать библиотеки `formik` и `yup`. 

#### Необязательное задание продвинутой сложности:

Показывать пользователю маску на поле для ввода мобильного телефона в виде `(###)###-##-##`. Для этого можно использовать библиотеку [react-number-format](https://github.com/s-yadav/react-number-format).