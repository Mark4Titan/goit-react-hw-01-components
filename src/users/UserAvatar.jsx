
function UserAvatar(props) {

  let name = props.name ? props.name : 'Petra Marica'
  let avatar =  props.avatar  ? props.avatar : "https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg"
      
  if (name && avatar)
    return (
      <img
        src={ avatar }
        alt={ name }
        // class={props.className}
        className="avatarImg"
      />            
    );
  
}

export default UserAvatar;
