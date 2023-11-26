const express = require('express');
const path = require('path');

const app = express();

//  папки для статических файлов  изображений
app.use(express.static(path.join(__dirname, 'images')));

// отправка HTML страницы с каруселью
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
