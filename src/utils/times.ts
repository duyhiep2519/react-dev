import { format } from 'date-fns'
export const formatDate = (timestamp: number) => {
    return format(new Date(timestamp), 'dd/MM/yyyy')
}
