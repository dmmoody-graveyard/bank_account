var BankAccount = {
  balance: 0,
  withdraw: function(amount) {
    this.balance = this.balance - amount;
  },
  deposit: function(amount) {
    this.balance = this.balance + amount;
  }
};

$(document).ready(function() {
  $("form#create-account").submit(function(event) {
    event.preventDefault();

    var newAccount = Object.create(BankAccount);
    var accountName = $("input#name").val();
    var initialDeposit = parseFloat($("input#initial-deposit").val());

    newAccount.name = accountName;
    newAccount.deposit(initialDeposit);

    $("#balance").text("$ " + newAccount.balance);

    $('input#name').val("");
    $('input#initial-deposit').val("");

    $("form#transactions").submit(function(event) {
      event.preventDefault();

      var deposit = parseFloat($("input#deposit").val());
      var withdraw = parseFloat($("input#withdraw").val());

      newAccount.deposit(deposit);
      newAccount.withdraw(withdraw);

      $("#balance").text("$ " + newAccount.balance);
      
      $('input#deposit').val('');
      $('input#withdraw').val('');
    });
  });
});
