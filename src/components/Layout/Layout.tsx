import Sidebar from "../Sidebar/Sidebar";
import MainHeader from "./MainHeader";

const Layout: React.FC<{ children: React.ReactNode }> = (props) => {
  const sidebarActive = true;

  return (
    <>
      {sidebarActive && (
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1">
            <MainHeader sidebarActive={sidebarActive} />
            <div
              className="overflow-y-auto p-4"
              style={{ maxHeight: "calc(100vh - 8rem)" }}
            >
              {props.children}
            </div>
          </main>
        </div>
      )}
      {!sidebarActive && (
        <main className="flex h-screen flex-col">
          <MainHeader sidebarActive={sidebarActive} />
          <div className="overflow-y-auto p-4">{props.children}</div>
        </main>
      )}
    </>
  );
};

export default Layout;
