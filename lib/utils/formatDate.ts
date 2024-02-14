import { format } from 'date-fns';

function formatDate(dateString) {
    return format(new Date(dateString), 'MMMM dd, yyyy');
}

export {
    formatDate
}