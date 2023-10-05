import { GridLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="loader">
      <GridLoader color="#0040ff" loading={true} size={30} />
    </div>
  );
};
export default Loading;
