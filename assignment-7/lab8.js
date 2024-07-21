// Exercise 1: Filter function on the String object
String.prototype.filter = function(bannedWord) {
    return this.split(' ').filter(word => word !== bannedWord).join(' ');
};

console.log("This house is not nice!".filter('not')); // Output: "This house is nice!"

// Exercise 2: BubbleSort algorithm on the Array object
Array.prototype.bubbleSort = function() {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]];
            }
        }
    }
    return this;
};

console.log([6, 4, 0, 3, -2, 1].bubbleSort()); // Output: [-2, 0, 1, 3, 4, 6]

// Exercise 3: Teacher object derived from Person function constructor
function Person(name) {
    this.name = name;
}

Person.prototype.teach = function(subject) {
    console.log(`${this.name} is now teaching ${subject}`);
};

const teacher = new Person('John');
teacher.teach('Mathematics');

// Using Object.create
const personProto = {
    teach: function(subject) {
        console.log(`${this.name} is now teaching ${subject}`);
    }
};

const createTeacher = (name) => {
    const teacher = Object.create(personProto);
    teacher.name = name;
    return teacher;
};

const anotherTeacher = createTeacher('Jane');
anotherTeacher.teach('Physics');

// Exercise 4: Creating person, student, and professor objects
// Prototype approach
const PersonProto = {
    greet: function() {
        console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
    },
    salute: function() {
        console.log(`Good morning!, and in case I don't see you, good afternoon, good evening and good night!`);
    }
};

const StudentProto = Object.create(PersonProto);
StudentProto.greet = function() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

const ProfessorProto = Object.create(PersonProto);
ProfessorProto.greet = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

const student = Object.create(StudentProto);
student.name = 'Alice';
student.age = 20;
student.major = 'Computer Science';
student.greet();
student.salute();

const professor = Object.create(ProfessorProto);
professor.name = 'Dr. Smith';
professor.age = 45;
professor.department = 'Engineering';
professor.greet();
professor.salute();

// Function constructor approach
function PersonFC(name, age) {
    this.name = name;
    this.age = age;
}

PersonFC.prototype.greet = function() {
    console.log(`Greetings, my name is ${this.name} and I am ${this.age} years old.`);
};

PersonFC.prototype.salute = function() {
    console.log(`Good morning!, and in case I don't see you, good afternoon, good evening and good night!`);
};

function StudentFC(name, age, major) {
    PersonFC.call(this, name, age);
    this.major = major;
}

StudentFC.prototype = Object.create(PersonFC.prototype);
StudentFC.prototype.constructor = StudentFC;
StudentFC.prototype.greet = function() {
    console.log(`Hey, my name is ${this.name} and I am studying ${this.major}.`);
};

function ProfessorFC(name, age, department) {
    PersonFC.call(this, name, age);
    this.department = department;
}

ProfessorFC.prototype = Object.create(PersonFC.prototype);
ProfessorFC.prototype.constructor = ProfessorFC;
ProfessorFC.prototype.greet = function() {
    console.log(`Good day, my name is ${this.name} and I am in the ${this.department} department.`);
};

const studentFC = new StudentFC('Bob', 22, 'Mathematics');
studentFC.greet();
studentFC.salute();

const professorFC = new ProfessorFC('Dr. Johnson', 50, 'Physics');
professorFC.greet();
professorFC.salute();

// Displaying the code in the pre tag
document.getElementById('codeReview').textContent = `
// we used https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.1/highlight.min.js library for code highlight 
// Exercise 1: Filter function on the String object
String.prototype.filter = function(bannedWord) {
    return this.split(' ').filter(word => word !== bannedWord).join(' ');
};

console.log("This house is not nice!".filter('not')); // Output: "This house is nice!"

// Exercise 2: BubbleSort algorithm on the Array object
Array.prototype.bubbleSort = function() {
    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 0; j < this.length - i - 1; j++) {
            if (this[j] > this[j + 1]) {
                [this[j], this[j + 1]] = [this[j + 1], this[j]];
            }
        }
    }
    return this;
};

console.log([6, 4, 0, 3, -2, 1].bubbleSort()); // Output: [-2, 0, 1, 3, 4, 6]

// Exercise 3: Teacher object derived from Person function constructor
function Person(name) {
    this.name = name;
}

Person.prototype.teach = function(subject) {
    console.log(\`\${this.name} is now teaching \${subject}\`);
};

const teacher = new Person('John');
teacher.teach('Mathematics');

// Using Object.create
const personProto = {
    teach: function(subject) {
        console.log(\`\${this.name} is now teaching \${subject}\`);
    }
};

const createTeacher = (name) => {
    const teacher = Object.create(personProto);
    teacher.name = name;
    return teacher;
};

const anotherTeacher = createTeacher('Jane');
anotherTeacher.teach('Physics');

// Exercise 4: Creating person, student, and professor objects
// Prototype approach
const PersonProto = {
    greet: function() {
        console.log(\`Greetings, my name is \${this.name} and I am \${this.age} years old.\`);
    },
    salute: function() {
        console.log(\`Good morning!, and in case I don't see you, good afternoon, good evening and good night!\`);
    }
};

const StudentProto = Object.create(PersonProto);
StudentProto.greet = function() {
    console.log(\`Hey, my name is \${this.name} and I am studying \${this.major}.\`);
};

const ProfessorProto = Object.create(PersonProto);
ProfessorProto.greet = function() {
        console.log(\`Good day, my name is \${this.name} and I am in the \${this.department} department.\`);
};

const student = Object.create(StudentProto);
student.name = 'Alice';
student.age = 20;
student.major = 'Computer Science';
student.greet();
student.salute();

const professor = Object.create(ProfessorProto);
professor.name = 'Dr. Smith';
professor.age = 45;
professor.department = 'Engineering';
professor.greet();
professor.salute();

// Function constructor approach
function PersonFC(name, age) {
    this.name = name;
    this.age = age;
}

PersonFC.prototype.greet = function() {
    console.log(\`Greetings, my name is \${this.name} and I am \${this.age} years old.\`);
};

PersonFC.prototype.salute = function() {
    console.log(\`Good morning!, and in case I don't see you, good afternoon, good evening and good night!\`);
};

function StudentFC(name, age, major) {
    PersonFC.call(this, name, age);
    this.major = major;
}

StudentFC.prototype = Object.create(PersonFC.prototype);
StudentFC.prototype.constructor = StudentFC;
StudentFC.prototype.greet = function() {
    console.log(\`Hey, my name is \${this.name} and I am studying \${this.major}.\`);
};

function ProfessorFC(name, age, department) {
    PersonFC.call(this, name, age);
    this.department = department;
}

ProfessorFC.prototype = Object.create(PersonFC.prototype);
ProfessorFC.prototype.constructor = ProfessorFC;
ProfessorFC.prototype.greet = function() {
    console.log(\`Good day, my name is \${this.name} and I am in the \${this.department} department.\`);
};

const studentFC = new StudentFC('Bob', 22, 'Mathematics');
studentFC.greet();
studentFC.salute();

const professorFC = new ProfessorFC('Dr. Johnson', 50, 'Physics');
professorFC.greet();
professorFC.salute();
`;
