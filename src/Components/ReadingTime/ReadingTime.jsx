

const ReadingTime = ({bookMarks,marks}) => {
    return (
        <div className="">
            <h2 className="py-5 text-2xl border-2 text-center rounded-lg">
                Spent Time On Read : {bookMarks}
            </h2>
            <h2 className="py-4 text-3xl">
                Marked As Read Blogs : {marks.length}
            </h2>
            {
                marks.map(mark => <p className=" bg-gray-400 text-black my-2 rounded-lg p-3 text-xl" key={mark.id} mark={mark}>{mark.title}</p> )
            }
        </div>
    );
};

export default ReadingTime;