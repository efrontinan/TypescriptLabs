"use strict";
/// <reference path="module08_loans.ts" />
/*  TODO Create LoanPrograms namespace. */
var LoanPrograms;
(function (LoanPrograms) {
    function calculateInterestOnlyLoanPayment(loanTerms) {
        let payment;
        payment = loanTerms.principle * calculateInterestRate(loanTerms.interestRate);
        return 'The interest only loan payment is ' + payment.toFixed(2);
    }
    LoanPrograms.calculateInterestOnlyLoanPayment = calculateInterestOnlyLoanPayment;
    function calculateConventionalLoanPayment(loanTerms) {
        let interest = calculateInterestRate(loanTerms.interestRate);
        let payment;
        payment = loanTerms.principle * interest / (1 - (Math.pow(1 / (1 + interest), loanTerms.months)));
        return 'The conventional loan payment is ' + payment.toFixed(2);
    }
    LoanPrograms.calculateConventionalLoanPayment = calculateConventionalLoanPayment;
    function calculateInterestRate(interestRate) {
        let interest = interestRate / 1200;
        return interest;
    }
})(LoanPrograms || (LoanPrograms = {}));
