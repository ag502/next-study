export default function Error() {
  return (
    <main className="error">
      <h1>An Error Occur</h1>
      <p>Fail to fetch meals data.</p>
    </main>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  console.log(statusCode);
  return { statusCode };
};
