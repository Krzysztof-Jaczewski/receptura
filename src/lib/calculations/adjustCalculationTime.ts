export const adjustExecutionTime = (execution: string, totalAmount: number) => {
    if (totalAmount >= 150) {
        return execution.replace(/2 minuty/g, '5 minut');
    }

    return execution.replace(/5 minut/g, '2 minuty');
};
