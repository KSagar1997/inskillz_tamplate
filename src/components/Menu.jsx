const menus = [
  { name: "Courses", href: "", id: 0 },
  { name: "Teach On Inskillz", href: "", id: 1 },
  { name: "Contact", href: "", id: 2 },
];

const className = "mx-6 text-white font-thin";

const MenuList = () =>
  menus.map(({ name, href, id }) => (
    <a className={className} key={id} href={href}>
      {name}
    </a>
  ));

const Menu = () => <MenuList />;

export default Menu;
