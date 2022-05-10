const Menu = () => {
  return(
<nav className="menu">
<h1>The Tech Hub Blog</h1>
<div className="links">
<a href="/">Home</a>
<a href="/create" style={{
  color:"white",
  backgroundColor:'#f1356d',
  borderRadius: '5px'
}
}>New Blog</a>
</div>

</nav>

  );
}

export default Menu;