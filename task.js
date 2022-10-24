function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
 this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if(this.marks === undefined){ 
    this.marks = [mark]; // добавить первую оценку 
    } else {
     this.marks.push(mark); // добавить вторую и последующие оценки в массив
    }
}

Student.prototype.addMarks = function(...marks) {
for (let mark of marks) {
  this.addMark(mark);
}
}

Student.prototype.getAverage = function(subjectName) {
  let sum = 0;
  this.marks.forEach (element => sum += element);
  return sum / this.marks.length;
}

Student.prototype.exclude = function(reason) {
  delete this.subject;
  delete this.marks;
  this.excluded = reason;
}

