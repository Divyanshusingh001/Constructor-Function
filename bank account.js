function BankAccount(accountNumber, name, type, balance) {
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = true;
  }
  
  BankAccount.prototype.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited ${amount} into account ${this.accountNumber}.`);
    } else console.log('Invalid deposit amount.');
  };
  
  BankAccount.prototype.withdraw = function(amount) {
    if (this.active && amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn ${amount} from account ${this.accountNumber}.`);
    } else console.log('Invalid withdrawal amount or inactive account.');
  };
  
  BankAccount.prototype.checkBalance = function() {
    console.log(`Account ${this.accountNumber} balance: ${this.balance}`);
  };
  
  BankAccount.prototype.isActive = function() {
    return this.active;
  };
  
  function getTotalBalance(accounts) {
    return accounts.reduce((total, account) => account.isActive() ? total + account.balance : total, 0);
  }
  
  const account1 = new BankAccount(1, 'John Doe', 'Savings', 1000);
  const account2 = new BankAccount(2, 'Jane Doe', 'Checking', 500);
  const account3 = new BankAccount(3, 'Bob Smith', 'Savings', 1500);
  
  account1.deposit(500);
  account1.withdraw(200);
  account1.checkBalance();
  
  account2.deposit(1000);
  account2.withdraw(700);
  account2.checkBalance();
  
  account3.deposit(200);
  account3.withdraw(300);
  account3.checkBalance();
  
  console.log(`Account 1 is active: ${account1.isActive()}`);
  console.log(`Account 2 is active: ${account2.isActive()}`);
  console.log(`Account 3 is active: ${account3.isActive()}`);
  
  const allAccounts = [account1, account2, account3];
  console.log(`Total balance of all active accounts: ${getTotalBalance(allAccounts)}`);
  