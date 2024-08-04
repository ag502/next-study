import MainHeader from "./main-header";

export default function CommonLayout(props: any) {
  return (
    <>
      <MainHeader />
      <header />
      <main>{props.children}</main>
    </>
  );
}
