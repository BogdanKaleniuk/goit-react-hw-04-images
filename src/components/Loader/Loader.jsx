import { LoaderStyle } from './Loader.styled';

export default function Loader() {
  return (
    <LoaderStyle>
      <div
        color="#3f51b5"
        width="100"
        visible={true}
        ariaLabel="falling-lines-loading"
      ></div>
    </LoaderStyle>
  );
}