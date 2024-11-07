import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import ReadingTime from "../ReadingTime/ReadingTime";

const Blogs = () => {

    const [blogs,setBlogs] = useState([]);

    const [bookMarks,setBookMarks] = useState(0);


    const [marks,setMarks] = useState([])
    
    const handleMarks = (blog) =>{
        const OldBookMarks = marks;
        const newBookMarks = [...OldBookMarks, blog];
        setMarks(newBookMarks);
    }
    


    const handleBookMark = (blog) =>{
        const time = blog.reading_time;
        const newReadingTime = bookMarks + time;
        setBookMarks(newReadingTime)
    }

    useEffect(()=>{
        fetch('/public/blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="max-w-screen-xl  flex flex-col-reverse md:flex-row lg:flex-row">
            
            <div className="w-full md:w-full lg:w-2/3">
                {
                    blogs.map(blog => <Blog handleMarks={handleMarks}  handleBookMark={handleBookMark} key={blog.id} blog={blog} ></Blog>)
                }
            </div>
            <div className="w-full md:w-full lg:w-1/3 p-3 ">
                {
                    
                     <ReadingTime marks={marks}  bookMarks={bookMarks}></ReadingTime>
                }
            </div>
        </div>
    );
};

export default Blogs;
