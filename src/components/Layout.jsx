import Header from "./Header";
import MovieHeader from "./MovieHeader";
import Movies from "./MoviesHomeGrid";
import Footer from "./Footer";

function Layout() {
  return (
    <>
      <Header />

      <main className="page-container">
        <MovieHeader />
        <Movies />
      </main>

      <Footer />
    </>
  );
}

export default Layout;