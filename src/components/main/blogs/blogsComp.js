import BookcardComp from "../../shared/bookcard/bookcardComp";
import './blogs.css'

function BlogsComp() {
  let arr = ['testing','is','it','gonna','work']
   

  return(
    <div className="blogs-wrapper">
      blogs working properly
      {arr.map((item,index)=>
      item
      )}
      
    </div>
  );
}
export default BlogsComp;