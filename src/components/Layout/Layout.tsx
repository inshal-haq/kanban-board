import MainHeader from "./MainHeader";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  return (
    <>
      <MainHeader />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
