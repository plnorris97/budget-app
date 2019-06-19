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
      if(value===''||value<0){
          this.budgetFeedback.classList.add('showItem');
          this.budgetFeedback.innerHTML = `<p>Cannot be empty or negative.</p>`;
          const self = this;

          setTimeout(function(){
              self.budgetFeedback.classList.remove('showItem')
              
          }, 4000);
      }
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
    })
    // expense list submit
    expenseList.addEventListener('click', function(){
        
    })
}




// where we call the event listeners as the DOM is loaded (page loads)
document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
})
