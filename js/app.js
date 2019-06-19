class UI {
  constructor() {
      //feedbacks are red alert-danger messages used to prompt the user.
    this.budgetFeedback = document.querySelector(".budget-feedback");
    this.expenseFeedback = document.querySelector(".expense-feedback");

    // the budget form is the form id of the left budget section
    this.budgetForm = document.getElementById("budget-form");

    // budget input is the field on the left where you enter your amount
    this.budgetInput = document.getElementById("budget-input");

    // budget amount is the span where the entered amount shows up on the right.
    this.budgetAmount = document.getElementById("budget-amount");

    // expense amount is the span where the entered amount shows up on the right.
    this.expenseAmount = document.getElementById("expense-amount");

    // 
    this.balance = document.getElementById("balance");

    // balance amount is the span where the calculated amount shows up on the right.
    this.balanceAmount = document.getElementById("balance-amount");

    // the expense form is the form id of the left expense section
    this.expenseForm = document.getElementById("expense-form");

    // expense input is the field on the left where you enter your expense name
    this.expenseInput = document.getElementById("expense-input");

    // amount input is the field on the left where you enter your expense amount
    this.amountInput = document.getElementById("amount-input");

    // expense list is where your expenses are itemized below the totals on the right.
    this.expenseList = document.getElementById("expense-list");

    // the empty array of items within the expenseList
    this.itemList = [];

    // itemID initially sets the list of items to start with #0
    this.itemID = 0;
  }
  // submit budget method
  submitBudgetForm(){
      const value = this.budgetInput.value;
      if(value===''||value<0) {
          this.budgetFeedback.classList.add('showItem');
          this.budgetFeedback.innerHTML = `<p>Cannot be empty or negative.</p>`;
          const self = this;

          setTimeout(function() {
              self.budgetFeedback.classList.remove('showItem')
              
          }, 4000);
      } else {
         this.budgetAmount.textContent = value;
         this.budgetInput = '';
         this.showBalance();   
    }
  }
  // show balance
  showBalance(){
     const expense = this.totalExpense();
     const total = parseInt(this.budgetAmount.textContent) - expense;
     this.balanceAmount.textContent = total
     if(total < 0) {
       this.balance.classList.remove('showGreen', 'showBlack');
       this.balance.classList.add('showRed');
     } else if(total > 0) {
       this.balance.classList.remove('showRed', 'showBlack');
       this.balance.classList.add('showGreen');
     } else if(total === 0) {
       this.balance.classList.remove('showRed', 'showGreen');
       this.balance.classList.add('showBlack');
    }
  }
  // submit expense
  submitExpenseForm() {
    const expenseValue = this.expenseInput.value;
    const amountValue = this.amountInput.value;
    if(expenseValue === '' || amountValue === '' || amountValue < 0) {
      this.expenseFeedback.classList.add('showItem');
      this.expenseFeedback.innerHTML = `<p>Values cannot be empty or negative.</p>`;
      const self = this;
      setTimeout(function(){
        self.expenseFeedback.classList.remove('showItem');
      }, 4000);
    } else {
       let amount = parseInt(amountValue);
       this.expenseInput.value = "";
       this.amountInput.value = "";

       let expense = {
         id: this.itemID,
         title: expenseValue,
         amount: amount
       };
       this.itemID++;
       this.itemList.push(expense);
       this.addExpense(expense);
    }
  }

  //add expense

  addExpense(expense) {
    const div = document.createElement("div");
    div.classList.add("expense");
    div.innerHTML = `
        <div class="expense-item d-flex justify-content-between align-items-baseline">

         <h6 class="expense-title mb-0 text-uppercase list-item">${expense.title}</h6>
         <h5 class="expense-amount mb-0 list-item">${expense.amount}</h5>

         <div class="expense-icons list-item">

          <a href="#" class="edit-icon mx-2" data-id="${expense.id}">
           <i class="fas fa-edit"></i>
          </a>
          <a href="#" class="delete-icon" data-id="${expense.id}">
           <i class="fas fa-trash"></i>
          </a>
         </div>
        </div>
    `;
    this.expenseList.appendChild(div);
  }

  // total expense
  totalExpense() {
    let total = 400;
    return total;
  }
}

// the three variables that will hold activity on the page
function eventListeners(){
    const budgetForm = document.getElementById('budget-form');
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');

    // new UI class instance.
    const ui = new UI();

    // budget form submit
    budgetForm.addEventListener('submit', function(event){
        event.preventDefault();
        ui.submitBudgetForm();
    })
    // expense form submit
    expenseForm.addEventListener('submit', function(event){
        event.preventDefault();
        ui.submitExpenseForm();
    })
    // expense list submit
    expenseList.addEventListener('click', function(){
        
    })
}




// where we call the event listeners as the DOM is loaded (page loads)
document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
})
