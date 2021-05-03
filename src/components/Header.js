import Restaurant from "./Restaurant";
import TopBar from "./TopBar";

const Header = ({ restaurant }) => {
  return (
    <header>
      <div className="top">
        <TopBar />
      </div>

      <Restaurant restaurant={restaurant} />
    </header>
  );
};

export default Header;
