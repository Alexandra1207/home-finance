import {Sidebar} from "./sidebar";

export class CreateExpensesIncome {
    constructor() {
        this.createButton = document.getElementById('create-btn');
        this.cancelButton = document.getElementById('cancel-btn');

        Sidebar.sidebarButtons('income-expenses');
        Sidebar.getSidebarInfo();
        Sidebar.getBalance();

        this.createButton.addEventListener('click', function() {
            location.href = '#/income-expenses'
        });
        this.cancelButton.addEventListener('click', function() {
            location.href = '#/income-expenses'
        });

    }
}