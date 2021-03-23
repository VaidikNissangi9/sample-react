
import TypographyVariants from './TypographyVariants';

export default {
  title: 'Atom/TypographyVariants',
};

const Template = (args) => <TypographyVariants {...args} />;
export const Default = Template.bind({});

Default.args = {
    variant: "h5",
    color: "textPrimary",
    children: "Expense Tracker"
};
