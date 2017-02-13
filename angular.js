angular.module('test_app', [])
  .controller('choose_diff', function($scope) {

    this.user_answer = [];

    // Loop data
    this.loop_number = 5;
    this.getNumber = function(num) {
      return new array(num);
    };

    this.number_1 = [0];
    this.number_2 = [1];
    this.answer = [1];

    this.update = function() {

      this.number_1 = [];
      this.number_2 = [];
      this.answer = [];

      for (var i = 0; i < 5; i++) {

        var new_number = Math.floor(Math.random() * this.number_max);
        this.number_1.push(new_number);

        var new_number_2 = Math.floor(Math.random() * this.number_max);
        this.number_2.push(new_number_2);

      };

      for (var i = 0; i < 5; i++) {

        this.answer.push(this.number_1[i] + this.number_2[i]);

      };

    };

  });




  //       this.user_change = function() {
  // console.log("new");
  //         for (var i = 0; i < 5; i++) {
  //
  //           if (this.user_answer[i] != "") {
  //
  //             if (this.user_answer[i] == this.answer[i]) {
  //               console.log("good", i);
  //             };
  //
  //           } else {
  //             msgbox("missing : ", i);
  //           };
  //
  //         };
  //
  //       };

  //       this.myVar = function(num) {
  // console.log("check!");
  //         if (this.user_answer[num] == this.answer[num]) {
  //           console.log("good answer : ", num);
  //
  //         } else {
  //           console.log("bad answer : ", num);
  //         };
  //
  //       };
