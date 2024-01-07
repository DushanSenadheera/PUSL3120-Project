import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Users from "./Routes/Users";
import Admin from "./Routes/Admin";

function App() {
  const shouldHideNavAndFooter = () => {
    const hiddenRoutes = ['/admin', '/premiere', '/upcoming', 'logout', '/adminlogin']; // Add more routes if needed
    return hiddenRoutes.includes(window.location.pathname);
  };

  
  return (
    <div>
      
      {!shouldHideNavAndFooter() && <Nav />}
      
      <main>
        <Users />
        <Admin />
      </main>
      
      {/* <Outlet /> */}

      {!shouldHideNavAndFooter() && <Footer />}

    </div>
  );
}

export default App;
