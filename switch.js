// task 1

const drink = prompt("Ведіть назву напоя");

switch (drink) {
  case "Кава":
    console.log("Ви вибрали каву");
    break;
  case "Чай":
    console.log("Ви вибрали чай");
    break;
  case "Сік":
    console.log("Ви вибрали сік");
    break;
  default:
    console.log("Ви вибрали щось інше");
    break;
}

// Створити розмітку з формою, що містить список (select) з трьома варіантами вибору: "Кава", "Чай" та "Сік".
//  При виборі кожного варіанту виводити відповідне повідомлення в блок на сторінці.

// task 2

const day = prompt("Ведіть день тижня");

switch (day) {
  case "понеділок":
    console.log(`${day} Це є будний день`);
    break;

  case "вівторок":
    console.log(`${day} Це є будний день`);
    break;

  case "среда":
    console.log(`${day} Це є будний день`);
    break;

  case "четверк":
    console.log(`${day} Це є будний день`);
    break;

  case "пятнися":
    сonsole.log(`${day} Це є будний день`);
    break;
  case "субота":
    сonsole.log(`${day} Це є вихідний день`);
    break;
  case "неділя":
    сonsole.log(`${day} Це є вихідний день`);
    break;

  default:
    console.log(`${day}Ви невели день тижня`);
    break;
}

// Створити розмітку  з полем введення, що приймає рядок та кнопкою.
// При натисканні на кнопку перевіряти, чи введений рядок є днем тижня (наприклад: "понеділок", "вівторок" і т.д.),
// виводити відповідне повідомлення про робочий день або вихідний.

// task 3

const month = prompt("Ведіть номер місяця");

switch (month) {
  case "12":
    console.log("Це зима");
    break;

  case "1":
    console.log("це зима");
    break;

  case "2":
    console.log("це зима");
    break;

  case "3":
    console.log("це весна");
    break;

  case "4":
    console.log("це весна");
    break;

  case "5":
    console.log("це весна");
    break;

  case "6":
    console.log("це літо");
    break;

  case "7":
    console.log("це літо");
    break;

  case "8":
    console.log("це літо");
    break;

  case "9":
    console.log("це осінь");
    break;

  case "10":
    console.log("це осінь");
    break;

  case "11":
    console.log("це осінь");
    break;

  default:
    break;
}

// Створити розмітку  з полем введення, що приймає номер місяця та кнопкою.
// При натисканні на кнопку виводити повідомлення про пору року, до якої належить цей місяць.

// task 4

const month2 = prompt("Ведіть номер місяця");

switch (month2) {
  case "12":
    console.log("Тут 30 днів");
    break;

  case "1":
    console.log("Тут 31 днів");
    break;

  case "2":
    console.log("Тут 28 днів");
    break;

  case "3":
    console.log("Тут 30 днів");
    break;

  case "4":
    console.log("Тут 31 днів");
    break;

  case "5":
    console.log("Тут 30 днів");
    break;

  case "6":
    console.log("Тут 31 днів");
    break;

  case "7":
    console.log("Тут 30 днів");
    break;

  case "8":
    console.log("Тут 31 днів");
    break;

  case "9":
    console.log("Тут 31 днів");
    break;

  case "10":
    console.log("Тут 30 днів");
    break;

  case "11":
    console.log("Тут 31 днів");
    break;

  default:
    break;
}
// Створити розмітку з полем введення, що приймає номер місяця та кнопкою.
// При натисканні на кнопку виводити кількість днів у цьому місяці.

// task 5

const color = promt("ведіть колір");

switch (color) {
  case "червоний":
    console.log(`${color} стоп`);
    break;
  case "жовтий":
    console.log(`${color} зачекай`);
    break;
  case "зелений":
    console.log(`${color} йди`);
    break;

  default:
    console.log('Ведіть червоний, жовтий чи зелений');
}

// Створити розмітку  з полем введення, що приймає назву кольору (наприклад, "червоний", "синій" і т.д.) та кнопкою.
// При натисканні на кнопку виводити відповідне повідомлення про дію:
// якщо це "червоний" — "стоп", якщо "зелений" — "йти", якщо "жовтий" — "чекати".

// task 6

// Створити розмітку  з двома полями введення, що приймають числа та список (select) з варіантами вибору операцій:
// "+", "-", "*", "/". При натисканні на кнопку виводити результат обраної операції над цими числами.
// Користувач повинен бути попереджений про можливість ділення на нул
