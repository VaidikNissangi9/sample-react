import CustomTextField from './CustomTextField';

export default {
  title: 'Atom/CustomTextField',
};

const Template = (args) => <CustomTextField {...args} />;
export const Default = Template.bind({});

Default.args = {
  label: "Expense",
  placeholder: "Eg: Petrol",
  expenseText: "",
};
