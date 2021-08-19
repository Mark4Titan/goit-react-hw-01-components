// import UserAvatar from './UserAvatar.jsx';

function DescriptionBox(props) {

  let name = props.name ? props.name : 'Petra Marica' 
  let content = props.content ? props.content : '' 

  if (name && content)
    return (         
          <p className={name}>{content}</p>        
    );
  
}

export default DescriptionBox;
