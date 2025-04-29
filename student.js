import fs from 'fs';
import path from 'path';

// Функція для реверсування кожного слова
const reverseWordsInText = (text) => {
    // Розбиваємо текст на частини, зберігаючи пробіли, потім реверсуємо кожну частину
    return text.replace(/\S+/g, word => word.split('').reverse().join(''));
};

// Функція для обробки файлів: читає вхідний, реверсує слова та зберігає результат у вихідний
const processTextFile = (inputFilePath, outputFilePath) => {
    fs.promises.readFile(inputFilePath, 'utf8') // Використовуємо проміси для асинхронного читання
        .then((data) => {
            const reversedText = reverseWordsInText(data); // Реверсуємо текст
            return fs.promises.writeFile(outputFilePath, reversedText, 'utf8'); // Записуємо результат у файл
        })
        .then(() => {
            console.log(`Реверсований текст успішно збережено у файл ${outputFilePath}`);
        })
        .catch((err) => {
            console.error('Помилка:', err);
        });
};

// Шлях до файлів
const inputFilePath = path.join(__dirname, 'input.txt');
const outputFilePath = path.join(__dirname, 'output.txt');

// Викликаємо функцію для обробки
processTextFile(inputFilePath, outputFilePath);
