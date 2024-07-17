// type separated from params
// type paramsType = {
//   params: {
//     id: string;
//   };
// };
// type propsType = {
//   props: {
//     title: string;
//     src: string;
//   };
// };
// export default function IdPage({ params }: paramsType, props: propsType) {
//   return (
//     <>
//       <h1>Dynamic page</h1>
//       <p>{params.id}</p>
//     </>
//   );
// }

export default function IdPage({
  params,
  props,
}: {
  params: { id: string | number };
  props: { name: string; title: string; src: string };
}) {
  return (
    <>
      <h1>Dynamic page</h1>
      <p>{params.id}</p>
    </>
  );
}
