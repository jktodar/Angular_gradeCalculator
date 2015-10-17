
angular.module("MyApp",[])
  .controller('MyController', function (StudentFactory, GraderCalculator){
	var self = this;

	self.studentA = new StudentFactory(self.name, self.assignmentName, self.assignmentScore);

	self.studentAverage = '';
	

	self.addGrade = function(currentAssignment, score) {
		
		GraderCalculator.calculateGrade(score);
		
		var newletterGrade = GraderCalculator.letterGrade;
		self.studentA.addGrade(currentAssignment, score, newletterGrade);
		
		self.studentAverage = GraderCalculator.calculateGrade(self.studentA.average);

		

		self.gradeSet = true;
		self.showGrades = true;

	};
	
	self.addReport = function(studentName, currentAverage, passValue, letterGrade){
		self.studentA.addReport(studentName, currentAverage, passValue, self.studentA.assignmentArray, self.studentAverage);
	};

});




