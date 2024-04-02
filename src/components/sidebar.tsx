import NavMenuItem from "./nav-menu-item";

const SideBar = () => {
  return (
    <aside className="flex gap-3 min-h-screen max-h-screen overflow-y-auto w-fit md:pr-8 pr-3 pt-2 rounded-e-xl bg-primary pl-12">
      <div className="w-52">
        <NavMenuItem />
      </div>
    </aside>
  );
};

export default SideBar;
