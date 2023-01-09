import { InfinitySpin } from 'react-loader-spinner';
import { LoaderBox } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderBox>
      <InfinitySpin width="200" color="#dc1818" />
    </LoaderBox>
  );
};
