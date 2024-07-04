// FilterButtons.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted } from "../redux/actions";
import { Flex, Button, Select } from "@radix-ui/themes";

const FilterButtons = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  return (
    <Flex align='center' gap='3'>
      <Select.Root value={currentFilter} onValueChange={handleFilter}>
        <Select.Trigger />
        <Select.Content>
          <Select.Group>
            <Select.Item value="ALL">Default</Select.Item>
            <Select.Item value="COMPLETED">Completed</Select.Item>
            <Select.Item value="INCOMPLETE">Incomplete</Select.Item>
          </Select.Group>
        </Select.Content>
      </Select.Root>

      <Button className="text-sm" onClick={() => dispatch(markAllCompleted())}>
        Mark All Completed
      </Button>
    </Flex>
  );
};

export default FilterButtons;
