import ExpensesArea from './ExpensesArea';

export default {
  title: 'Organism/ExpensesArea',
};

const Template = (args) => <ExpensesArea {...args} />;
export const Default = Template.bind({});

Default.args = {
    expenses: [{
        text: "Petrol",
        amount: 111
    }],
    expenseAmount: 111,
    expenseText: "petrol",
};
