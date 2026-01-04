# Short Response

## Question 1

For each scenario, identify whether the relationship is **inheritance** or **composition**, and provide a brief explanation.

For example, a `Song` and a `MediaItem` have an inheritance relationship because "a song is a type of media item". Meanwhile a team and player have a composition relationship because "a team has many players".

1. A `Car` class and an `Engine` class, where a car contains an engine
2. A `Dog` class and an `Animal` class, where a dog is a type of animal
3. A `Classroom` class and a `Student` class, where a classroom contains multiple students
4. A `Rectangle` class and a `Shape` class, where a rectangle is a type of shape
5. A `Computer` class and a `CPU` class, where a computer contains a CPU
6. A `Manager` class and an `Employee` class, where a manager is a type of employee

### Response 1

1. Composition, a car has an engine, an engine is a part of a car
2. Inheritance, a dog is an animal, the dog class can inherit the properties and methods from the Animal class
3. Composition, a classroom has multiple students, these student are a part of the class, not a type of class
4. Inheritance, a rectangle is a shape so it can inherit the properties and methods from the shape class
5. Composition, a cpu is not a type of computer it is a part of the computer
6. Inheritance, a manager is a type of employee, so managers can inherit the properties and methods from the employee class

---

## Question 2

In Problem 1, you are asked to implement a `Song`, `Podcast`, and `Audiobook` classes that all extend the `MediaItem` base class. Each class has their own `play()` method. This demonstrates **polymorphism**.

In your own words, explain what polymorphism means and why it is useful. Use the `MediaItem` example from this assignment to support your explanation.

### Response 2

Polymorphism means the same method can behave or be used differently depending on the object that calls it. In the MediaItem example, each subclass `Song`, `Podcast`, `Audiobook` has its own version of the `play()` method. When `play()` is called on a song, it returns "Playing: Bohemian Rhapsody by Queen", while calling it on a podcast returns "Playing: Tech Talk with host Jane Smith, Episode 42". This is really useful because we can treat all media items as `MediaItem` objects, call the same method, and get the correct behavior for each type without rewriting separate logic for each one

---

## Question 3

In JavaScript classes, properties and methods can be either **instance-level** or **static**.

a) What is the difference between an instance property and a static property?

b) Give an example of when you would want to use a static property or method instead of an instance property or method.

### Response 3

a) Your response...

b) Your response...