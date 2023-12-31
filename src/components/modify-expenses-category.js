import {Sidebar} from "./sidebar.js";

export class ModifyExpensesCategory {
    constructor() {
        this.saveButton = document.getElementById('save');
        this.cancelButton = document.getElementById('cancel');

        Sidebar.sidebarButtons('expenses');
        Sidebar.getSidebarInfo();
        Sidebar.getBalance();

        this.saveButton.addEventListener('click', function() {
            location.href = '#/expenses'
        });
        this.cancelButton.addEventListener('click', function() {
            location.href = '#/expenses'
        });

    }
}