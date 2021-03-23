import ExpensesList from './ExpensesList';

export default {
  title: 'Organism/ExpensesList',
};

const Template = (args) => <ExpensesList {...args} />;
export const Default = Template.bind({});

Default.args = {
  expenses: [{
    text: "Petrol",
    amount: 111
}],
};
