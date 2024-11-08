import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation, useScroll } from "framer-motion";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

const Nav = styled(motion.nav)`
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  color: ${(props) => props.theme.red};
  font-size: 18px;
  position: fixed;
  top: 0;
  z-index: 1;
`;

const Col = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

const Logo = styled(motion.svg)`
  width: 95px;
  height: 25px;
  fill: ${(props) => props.theme.red};
  cursor: pointer;
  path {
    stroke-width: 10px;
    stroke: ${(props) => props.theme.white.darker};
  }
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  transition: opacity 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: ${(props) => props.theme.red};
`;

const Search = styled.form`
  color: ${(props) => props.theme.red};
  display: flex;
  align-items: center;
  gap: 4px;
  position: relative;
  cursor: pointer;
  svg {
    width: 18px;
    height: 18px;
    fill: ${(props) => props.theme.red};
  }
`;

const Input = styled(motion.input)`
  width: 200px;
  position: absolute;
  left: -170px;
  transform-origin: right center;
  background: transparent;
  color: ${(props) => props.theme.red};
  font-size: 18px;
  border: none;
  border-bottom: 1px solid ${(props) => props.theme.white.darker};
  &:focus {
    outline: none;
  }
`;

const logoVariants = {
  normal: { fillOpacity: 1 },
  active: {
    fillOpacity: [0, 1, 0],
    transition: {
      repeat: Infinity,
    },
  },
};

interface Form {
  keyword: string;
}

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const homeMatch = useMatch("/");
  const modalMatch = useMatch("/movies/*");
  const tvMatch = useMatch("/tv");
  const inputAnimation = useAnimation();
  const navAnimation = useAnimation();
  const { scrollY } = useScroll();
  const main = useNavigate();

  const goToMain = () => {
    main("/");
  };

  const { register, handleSubmit, setValue } = useForm<Form>();
  const onValid = (data: Form) => {
    main(`/search?keyword=${data.keyword}`);
    setValue("keyword", "");
  };

  const navVariants = {
    top: { background: "rgba(0, 0, 0, 1)" },
    scroll: { background: "rgba(255, 255, 255, 1)" },
  };

  useEffect(() => {
    scrollY.on("change", () => {
      if (scrollY.get() > 60) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY]);

  const openSearch = () => {
    if (searchOpen) {
      inputAnimation.start({
        scaleX: 0,
      });
    } else {
      inputAnimation.start({
        scaleX: 1,
      });
    }
    setSearchOpen((prev) => !prev);
  };

  return (
    <Nav variants={navVariants} animate={navAnimation} initial={"top"}>
      <Col>
        <Logo
          onClick={goToMain}
          variants={logoVariants}
          initial="normal"
          whileHover="active"
          width="1024"
          height="276.742"
          viewBox="0 0 1024 276.742"
        >
          <motion.path d="M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z" />
        </Logo>
        <Items>
          <Item>
            <Link to={"/"}>
              Home
              {homeMatch && <Circle layoutId="circle" />}
              {modalMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
          <Item>
            <Link to={"/tv"}>
              TV Shows {tvMatch && <Circle layoutId="circle" />}
            </Link>
          </Item>
        </Items>
      </Col>
      <Col>
        <Search onSubmit={handleSubmit(onValid)}>
          <motion.svg
            onClick={openSearch}
            animate={{ x: searchOpen ? -194 : 0 }}
            transition={{ type: "linear" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
          </motion.svg>
          <Input
            {...register("keyword", { required: true, minLength: 2 })}
            type="text"
            transition={{ type: "linear" }}
            placeholder="Search for MOVIE or TV"
            animate={inputAnimation}
            initial={{ scaleX: 0 }}
          />
        </Search>
      </Col>
    </Nav>
  );
};

export default Header;
