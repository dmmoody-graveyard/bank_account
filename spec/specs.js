describe('BankAccount', function() {
  it('creates a new account and returns 0 balance', function() {
    var testAccount = Object.create(BankAccount);
    expect(testAccount.balance).to.equal(0);
  })

  describe('withdraw', function() {
    it('takes 5 and returns -5', function() {
      var testAccount = Object.create(BankAccount);
      testAccount.withdraw(5);
      expect(testAccount.balance).to.equal(-5);
    });
  });

  describe('deposit', function() {
    it('takes 5 and returns 5', function() {
      var testAccount = Object.create(BankAccount);
      testAccount.deposit(5);
      expect(testAccount.balance).to.equal(5);
    });
  });
});
