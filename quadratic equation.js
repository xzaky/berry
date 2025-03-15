function solveQuadraticEquation(a, b, c) {
    // Вычисляем дискриминант
    const discriminant = b * b - 4 * a * c;

    if (discriminant > 0) {
        // Два различных действительных корня
        const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `Корни уравнения: x1 = ${root1}, x2 = ${root2}`;
    } else if (discriminant === 0) {
        // Один действительный корень
        const root = -b / (2 * a);
        return `Уравнение имеет один корень: x = ${root}`;
    } else {
        // Нет действительных корней
        return 'Уравнение не имеет действительных корней.';
    }
}

// Запрашиваем коэффициенты у пользователя
const a = parseFloat(prompt('Введите коэффициент a (a ≠ 0):'));
if (a === 0) {
    console.log('Коэффициент a не может быть равен 0.');
} else {
    const b = parseFloat(prompt('Введите коэффициент b:'));
    const c = parseFloat(prompt('Введите коэффициент c:'));

    // Вызываем функцию и выводим результат
    const result = solveQuadraticEquation(a, b, c);
    console.log(result);
}
