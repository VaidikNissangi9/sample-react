import MainPageTemplate from './MainPageTemplate';

export default {
  title: 'Template/MainPageTemplate',
};

const Template = (args) => <MainPageTemplate {...args} />;
export const Default = Template.bind({});

Default.args = {
  expenses: [{
    text: "Petrol",
    amount: 111
}],
expenseAmount: 111,
expenseText: "petrol",
};
