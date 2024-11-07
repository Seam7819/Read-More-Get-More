import { BsBookmarksFill } from "react-icons/bs";

const Blog = ({blog,handleBookMark,handleMarks}) => {
    // console.log(blog);
    const {id,cover,title,author,author_img,posted_date,reading_time,hashtags}= blog;
    return (
        <div>
            <img className="px-10 py-5 w-full h-[400px]" src={cover} alt="" />
            <h3 className="text-2xl font-bold py-2 px-10">{title}</h3>
            <div className="flex justify-between">
            <div className="flex items-center gap-4 px-10">
                <img className="w-10 h-10 rounded-full" src={author_img} alt="" />
                <div>
                    <h3 className="text-lg font-bold">{author}</h3>
                    <p>{posted_date}</p>
                </div>
            </div>
            <div className="flex items-center px-10 gap-2">
                <h5 className="text-md">{reading_time}  <span>min read</span></h5>
                <button onClick={()=>handleBookMark(blog)}><BsBookmarksFill />
                </button>
            </div>
            </div>
            <div className="px-10 py-3">
            <button onClick={()=>handleMarks(blog)} className="btn btn-outline btn-success">Mark As Read</button>
            </div>
        </div>
    );
};

export default Blog;