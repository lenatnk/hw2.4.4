const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger; // a и b заданы и посчитана сумма. у bonus еще не задано значение 
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger; // сумма и бонус посчитаны. если сумма больше 50, то bonus = 50,
    // в другом случае - bonus равен сумме a и b.
    return bonus;
    };

calculateBonus(10, 5);