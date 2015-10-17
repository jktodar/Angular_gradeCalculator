angular.module('MyApp')
	.factory('StudentFactory', function(){
		

		function Student(){
			this.name = '';
			this.assignmentArray = [];
			this.studentReportArray = [];
			this.passing = null;

		}

		Student.prototype.addGrade = function(currentAssignment, score, letterGrade){
			this.assignment = {
				assignmentName: currentAssignment,
				assignmentScore: score,
				grade: letterGrade
			};
			this.assignmentArray.push(this.assignment);
			this.getAverage();

			// this.name = '';
			this.assignmentName = '';
			this.assignmentScore = '';
		};

		Student.prototype.getAverage = function(){
			this.average = 0;
			var res = 0;
			for (var i = 0; i <= this.assignmentArray.length - 1; i++) {
				res += this.assignmentArray[i].assignmentScore;
			}
			this.average = Math.round(res/(this.assignmentArray.length));
			if (this.average>=60) {
				this.passing = true;
			}else{
				this.passing = false;
			}
		};

		Student.prototype.addReport = function(studentName, currentAverage, passValue, arrayOfAssignments, letterGrade){
			
				passValue == false ? passValue = "failing" : passValue = "passing";
				console.log(passValue);
				console.log(studentName, currentAverage, passValue, arrayOfAssignments);

				this.studentReport = {
					name: studentName,
					assignments: arrayOfAssignments,
					currentStudentAverage: currentAverage,
					passOrFail: passValue,
					grade: letterGrade

				};
				this.studentReportArray.push(this.studentReport);
				this.name = '';
		};

		return Student;

	}) // StudentFactory

