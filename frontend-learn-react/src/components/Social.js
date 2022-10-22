import React from 'react';
import SocialItem from './SocialItem';


function Social(){

  return(
    
      
    
       
        
      <ul className='list-group'>
      
        <SocialItem 
        p = {{

        media:'Facebook',
        id:'facebook',
        img:'https://picsum.photos/200',
      }}
        />

       

       <SocialItem 
       p ={{
        media:'Youtube',
        id: 'youtube',
        img:'https://picsum.photos/201',
       }}
     
      />

      <SocialItem 
      p={{
        media:'Instagram' ,
        id:'instagram',
        img:'https://picsum.photos/202',
      }}
     
      />

      <SocialItem 
      p={{
        media:'link', 
        id:'link',
        img:'https://picsum.photos/205',
      }}
     
      />
      

    </ul>
    

  );
}
export default Social;