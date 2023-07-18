# Загрузка шаблонов в customer.io

    1. Заходим в customer.io
    2. В панеле навигации выбираем Content/Layouts
    3. В открывшемся окне нажимаен на кнопку Create layout (вверху)

![create-lauout](./image/upload-templates.png ':size=100%')

    4. Нажимаем на "Start from scratch", вводим название и сохраняем.

![create-from-scratch](./image/create-from-scratch.png ':size=100%')

    5. В репозитории, в созданном файле .env.local в поле TEMPLATE прописываем название файла с шаблоном.
    6. Запускаем npm run minTemplates.
    7. Сгенерируется файл inline.html.
    6. Копируем все из inline.html и в появившееся окно в customer.io вставляем содержимое из inline.html. И не забываем добавить в конец {{content}}.
    
![create-template](./image/create-template.png ':size=100%')

    7. Нажимаем на кнопку "Save Changes"