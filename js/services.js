angular.module('MyApp')
	.service('GraderCalculator', function(){
		var self = this;
		self.message = "please enter a grade percentage between 0 and 100";
		self.letterGrade = '';
		function isInt(n){
		return n%1===0;
	}
		self.calculateGrade = function(grade){
			// if(grade>=0){
		 //  	if (grade<60) {
			// 		return self.letterGrade = "F";
			// 	}else if (grade>=60 && grade<70) {
			// 		return self.letterGrade = "D";
			// 	}else if (grade>=70 && grade<80) {
			// 		return self.letterGrade   = "C";
			// 	}else if (grade>=80 && grade<90) {
			// 		return self.letterGrade = "B";
			// 	}else if (grade>=90 && grade<=100) {
			// 		return self.letterGrade = "A";
			// 	}else if (grade<0 || grade>100) {
			// 		self.getMessage();
			// 		return self.letterGrade = 'Invalid';
			// 	}
			
			// 	return true;
		 //  }
		 if (grade>=90) {
		 	return self.letterGrade = "A";
		 }else if (grade >=80) {
		 	return self.letterGrade = "B";
		 }else if (grade >=70) {
		 	return self.letterGrade = "C";
		 }else if (grade >=60) {
		 	return self.letterGrade = "D";
		 }else {
		 	return self.letterGrade = "F";
		 }
		 
		  return self.letterGrade;
	}; // calculateGrade function

	self.getMessage = function(){
		
		return self.message;
	};

}) // GraderCalculator Service

