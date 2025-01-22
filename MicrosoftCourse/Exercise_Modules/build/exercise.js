"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greetings_utilities_module_1 = require("./greetings-utilities_module");
const greetings_module_1 = require("./greetings_module");
(0, greetings_module_1.returnGreeting)('Hola!'); // Displays 'The message from Greetings_module is Hola!'
(0, greetings_module_1.returnGreeting)('Bonjour'); // Displays 'The message from Greetings_module is Bonjour!'
(0, greetings_utilities_module_1.returnGreeting)('Ciao!'); // Displays 'The message from GreetingsWithLength_module is Ciao! It is 5 characters long.'
