import ExpensesForm from './ExpensesForm';

export default {
  title: 'Molecule/ExpenseForm',
};

const Template = (args) => <ExpensesForm {...args} />;
export const Default = Template.bind({});

Default.args = {
    expenseAmount: 111,
    expenseText: "petrol",
};
