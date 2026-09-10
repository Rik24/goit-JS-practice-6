// TODO //Напиши функцію конструктор User для створення користувача з такими властивостями
//a. userName - ім'я, рядок
//b. age - вік, число
//c. numbersOfPost - кількість постів, число
//d. клас очікує 1 параметр - об'єкт налаштувань з однойменними властивостями

//Додай метод getInfo(), який повертає рядок:
//`Користувачеві ${} років і в нього ${} публікацій.`

// function User(user) {
//     this.userName = user.userName,
//     this.age = user.age,
//     this.numbersOfPost = user.numbersOfPost,                        //!!!! БЕДА !!!!!

// }

// console.log(new User({ userName: 'Poly', age: 12, numbersOfPost: 416 }));

// TODO Створіть метод getInfo(), який повертає ім’я та вік користувача.

// const user = {
//   name: 'Alice',
//   age: 28,

//   getInfo() {
//     return `${this.name}, ${this.age}`;
//   },
// };

// console.log(user.getInfo());

// TODO Створіть notificationService.send() і передайте його у execute(). Збережіть контекст

// const notificationService = {
//   prefix: 'NOTIFICATION',
//   send() {
//     return this.prefix;
//   },
// };

// const execute = callback => callback();

// console.log(execute(notificationService.send.bind(notificationService)));

// TODO Створіть метод activate(), який змінює active поточного об’єкта на true.

// const user = {
//   name: 'Bob',
//   active: false,
//   activate() {
//     this.active = true;
//   },
// };

// user.activate();
// console.log(user.active);

// TODO Метод getName() має використовувати this.prefix. Передайте його в map() без втрати контексту.

// const users = [{ name: 'Alice' }, { name: 'Bob' }, { name: 'John' }];

// const userService = {
//   prefix: 'user',

//   getNames(user) {
//     return {
//       name: user.name,
//       prefix: this.prefix,
//     };
//   },
// };

// const result = users.map(userService.getNames.bind(userService)); // getNames() === ()=>{}

// console.log(result);

// TODO bind вміє фіксувати не лише контекст, а й перші аргументи. Створи з універсального методу відправки повідомлень готову функцію, у якої канал уже підставлений, а текст передається під час виклику.

// const messenger = {
//   sender: 'Shop Bot',
//   send(channel, text, tetx2) {
//     return `[${channel}] ${this.sender}: ${text}`;
//   },
// };

// const sendToSms = messenger.send.bind(messenger, 'SMS');
// console.dir(sendToSms);
// const sendToEmail = messenger.send.bind(messenger, 'Email');

// console.log(sendToSms('Ваше замовлення готове'));
// // console.log(sendToEmail('Чек у вкладеннi'));

// TODO Є об'єкт співробітника. Додай йому метод getFullName(), який повертає повне ім'я, звертаючись до полів через this. Жорстко вписувати ім'я всередину методу не можна — метод має працювати для будь-якого об'єкта з такими полями.

// const employee = {
//   firstName: 'Іван',
//   lastName: 'Петренко',
//   position: 'Frontend Developer',

//   getFullName() {
//     return `${this.firstName}, ${this.lastName}`;
//   },
// };

// const employee2 = {
//   firstName: 'Петрео',
//   lastName: 'Іваненко',
//   position: 'Backend Developer',
// };

// console.log(employee.getFullName());

// console.log(employee.getFullName.call(employee2));

// TODO Напиши функцію createCounter(start), яка повертає об'єкт з методами increment(), decrement() і value(). Лічильник має зберігатись у замиканні, а не в полі об'єкта — тоді методи не втрачають працездатність навіть якщо їх передати кудись без контексту.

// function createCounter(start = 0) {
//   let count = start;
//   return {
//     increment() {
//       count += 1;
//       return count;
//     },
//     decrement() {
//       count -= 1;
//       return count;
//     },
//     value() {
//       return count;
//     },
//   };
// }

// const counter = createCounter();

// console.dir(counter);

// counter.increment();
// counter.increment();
// counter.increment();
// console.log(counter.value());

// const counter2 = createCounter(7);
// counter2.increment();
// console.log(counter2.value());
