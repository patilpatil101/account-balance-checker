const accountBalanceHistory = [
    {
        monthNumber: 0, // current month
        account: {
            balance: { amount: 180 },
        },
    },
    {
        monthNumber: 1, // last month
        account: {
            balance: { amount: 190 },
        },
    },
    {
        monthNumber: 2, // two months ago
        account: {
            balance: { amount: 200 },
        },
    }
]

const accountTypeChecker = (accountBalanceHistory) => {
    let accBalHist = accountBalanceHistory;
    let result = false;
    let remainingBalance = 0;
    let older = 0;
    let initialBalance = accBalHist[accBalHist.length - 1].account.balance.amount;

    if (accBalHist && accBalHist.length > 0) { //error handling
        for (let i = accBalHist.length - 2; i >= 0; i--) {
            /**
             * Current month balance should not exceed than older month balance
             */
            if (initialBalance > accBalHist[i].account.balance.amount) {
                remainingBalance = initialBalance - accBalHist[i].account.balance.amount;
                if (remainingBalance != older) {
                    result = true
                } else {
                    result = false;
                    older = remainingBalance;
                }
                older = remainingBalance;
                initialBalance = accBalHist[i].account.balance.amount;
            }
        }
    }
    console.log("Type: ", result ? 'A' : 'B')
    return result ? 'A' : 'B';
}
accountTypeChecker(accountBalanceHistory);


/**
 * Things to consider in your solution 🤔
 *
 * Q: Does it solve the basic case? Yes
 *
 * Q: What other cases might need to be considered?
 *      => Negative cases
 *      => Balance greater than or less than
 */



