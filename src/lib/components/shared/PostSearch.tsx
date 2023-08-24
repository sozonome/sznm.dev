import { InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

type PostSearchProps = {
  keyword: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
};

const PostSearch = ({
  keyword,
  onChange,
  placeholder = 'Search',
}: PostSearchProps) => {
  return (
    <InputGroup>
      <Input
        variant="filled"
        type="text"
        defaultValue={keyword}
        onChange={onChange}
        placeholder={placeholder}
      />
      <InputRightElement>
        <FaSearch />
      </InputRightElement>
    </InputGroup>
  );
};

export default PostSearch;
