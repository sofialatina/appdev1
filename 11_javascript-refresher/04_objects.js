let aboutMe = {
  name: "Sofia Isabel I. Latina",
  age: 20,
  course: "BS in Information Systems",
  introduce: function() {
    console.log("Greetings, my name is " + this.name + ", " + this.age + " years old.");
  }
};

aboutMe.introduce();
aboutMe.hobby = "Watching, Reading, and Gaming(occasionally).";
console.log("My hobbies are:", aboutMe.hobby);
