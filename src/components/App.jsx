// import { Route, Routes } from "react-router-dom";
// import { Home } from '../pages/Home/Home';
import { IoMdFilm } from "react-icons/io";
import { Container, Header, Link, Logo } from "./App.styled";



export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <IoMdFilm size={40}/>
        </Logo>
          <nav>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
        {/* <Routes>
        <Route path="/" element={<Home />}/>
      </Routes> */}
    </Container>
  );
};
