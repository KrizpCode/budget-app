import { Dispatch, SetStateAction, useState } from 'react';
import tw from 'twin.macro';

const CategoryForm = ({ setCategories }: { setCategories: Dispatch<SetStateAction<[] | Category[]>> }) => {
  const [categoryName, setCategoryName] = useState('');
  const [maximumSpending, setMaximumSpending] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!categoryName || !maximumSpending) {
      return;
    }

    console.log(`Added Category "${categoryName}" with a budget of ${maximumSpending}$`);

    setCategories((prevState) => {
      return [...prevState, { name: categoryName, spendingAmount: parseInt(maximumSpending) }];
    });

    setCategoryName('');
    setMaximumSpending('');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <FormHeader>New Category</FormHeader>
      <FormTextInput
        onChange={(e) => setCategoryName(e.target.value)}
        value={categoryName}
        id="category"
        type="text"
        placeholder="Category Name"
      />
      <FormTextInput
        onChange={(e) => setMaximumSpending(e.target.value)}
        value={maximumSpending}
        id="category"
        type="number"
        placeholder="Maximum Spending"
      />
      <SubmitButton type="submit">Add</SubmitButton>
    </FormContainer>
  );
};

export default CategoryForm;

const FormContainer = tw.form`
  flex
  flex-col
  gap-3
  items-center
  text-center
  rounded
  border
  p-4
`;

const FormHeader = tw.h2`
  font-bold
  font-size[large]
`;

const FormTextInput = tw.input`
  py-1
  px-3
  focus:outline-none
  rounded
`;

const SubmitButton = tw.button`
  rounded
  font-bold
  py-0.5
  px-3
  border
`;
