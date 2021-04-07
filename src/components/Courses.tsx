import Card from "./card"

const Courses = () => {
    return (
        <>
        <div>
           <h1 className='courses_heading'>Collection of courses</h1> 
           <p className='courses_text'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti vitae</p>

        </div>
        <div className="courses_cards">
            <Card/>
        </div>
        </>
    )
}

export default Courses