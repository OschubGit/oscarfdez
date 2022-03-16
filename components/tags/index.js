export default function Tags({tagName}) {
  return (
    <>
      <span className="tag">{tagName}</span>
      <style jsx>
        {`
          span{
            cursor: pointer;
          }
      `}
      </style>
    </>
  );
}
