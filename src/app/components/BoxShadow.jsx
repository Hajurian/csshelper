export default function BoxShadow() {
  return (
    <>
      <div className="w-1/2 border-2 p-16 border-blue flex flex-col">
        <Box />
      </div>
      <div className="w-1/2 border-2 border-purple"></div>
    </>
  );
}

const Box = ({ boxshadow }) => {
  return <div className="w-full h-1/3 border-2 border-orange"></div>;
};
