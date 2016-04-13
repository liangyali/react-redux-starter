export  function* index(){
  this.body=[1,2,3,4,5,6,7,8].map((item)=>{
    return {
      id:item,
      name:`item_${item}`,
      updatedAt:new Date()
    }
  });
}
