import React from "react";

const NavBar = () => {
  return (
    <div className="ui teal inverted menu" style={{ marginBottom: "0px" }}>
      <div className="header item">KitchenSync</div>
      <div className="ui item">Recipes</div>
      <div className="ui item">Meals</div>
      <div className="right menu">
        <div className="ui item">Get Cooking!</div>
      </div>
    </div>
  );
};

export default NavBar;

// <div className="ui blue inverted menu" style={{marginBottom: "0px"}}>
//   <div className="header item">
//     Learn. Love. Travel.
//   </div>
//   <div className= "ui item">
//   <Link to={`/about`} >About Us</Link>
//   </div>
//   {user ?
//     <React.Fragment>
//       <Link to={`/map`} className="ui item" >Map</Link>
//       <Link to={`/yourTrips`} className="ui item" >Your Trips</Link>
//     </React.Fragment>
//     : null }
//   <div className="right menu">
//     <div className="ui item">
//       <i className="suitcase icon"></i>
//     </div>
//
//     {user ?
//       <React.Fragment>
//       <Link to={`/users/${props.currentUser.id}`} className="ui item">{user.username}</Link>
//       <a onClick={props.logOut} className="ui item">Log Out</a>
//       </React.Fragment>
//       : <Link to={`/signUp`} className="ui item">Sign Up</Link>
//     }
//   </div>
// </div>
