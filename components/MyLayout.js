import Header from './Header';

const layoutstyle = {
  margin: 20,
  paddng: 20,
  border: '1px solid #DDD'
};

const Layout = props => (
  <div style={layoutstyle}>
    <Header />
    {props.children}
  </div>
);

export default Layout;
