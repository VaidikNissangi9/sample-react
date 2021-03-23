
import ExpenseItem from './ExpenseItem';

export default {
  title: 'Molecule/ExpenseItem',
};

const Template = (args) => <ExpenseItem {...args} />;
export const Default = Template.bind({});

Default.args = {
    expense: {
        text: "Petrol",
        amount: 111
    },
};
