import { InputGroup, Input, InputRightElement } from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

type BlogPostSearchProps = {
  keyword: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
};

const BlogPostSearch = ({ keyword, onChange }: BlogPostSearchProps) => {
  return (
    <InputGroup>
      <Input
        variant="filled"
        type="text"
        defaultValue={keyword}
        onChange={onChange}
        placeholder="Search posts"
      />
      <InputRightElement>
        <FaSearch />
      </InputRightElement>
    </InputGroup>
  );
};

export default BlogPostSearch;
