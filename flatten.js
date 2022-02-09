
    const flatten = (data) => {
    	// return only one array of element
      // data?.map(ele => )
      
      let result = [];
      
      for(let i = 0; i < data.length; i++){
        let item = data[i];
        
        // if item is an array
        if(typeof item === 'object'){
         
         let subResult = flatten(item); //
         
          result.push(...subResult);

          
        } else result.push(item); 
        
        
      }
      
      return result;
    }
    
    
    
    
    console.log(flatten([5, 6, [1,2,3,], [1,3,4]]))
    console.log(flatten([5, 6, [1,2,3,[777]], [1,3,4]]))// [5,6 1,2,3,1,3,4]
  
