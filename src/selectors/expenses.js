import moment from 'moment';

//get visible expenses

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter( (expense) => {
        const createdAtMoment = moment(expense.createdAt)
        //if startDate does not exist, we will not filter based off this (leave true).
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        // return true for that specific expense is a complete match (will be kept in array)
        // return false if any of these fails for a specific expense (will be removed from array)
        return startDateMatch && endDateMatch && textMatch;
    }).sort( (a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1;
        }
    });
};