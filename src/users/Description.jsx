import UserAvatar from './UserAvatar.jsx';
import DescriptionBox from './DescriptionBox.jsx';

function Description(props) {  
  

  return (   
      <div className="description">
      
      <UserAvatar avatar={ props.avatar } name={ props.avatar } />
      
      
      <DescriptionBox name="name" content={ props.name }/>
      <DescriptionBox name="tag" content={ props.tag } />
      <DescriptionBox name="location" content={ props.location } />
      
      </div>    
  );
}

export default Description;
