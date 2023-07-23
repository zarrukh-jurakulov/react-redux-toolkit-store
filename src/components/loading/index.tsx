import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="container  p-0 mt-5  d-flex align-items-center justify-content-center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="100"
        visible={true}
      />
    </div>
  );
};

export default Loading;
