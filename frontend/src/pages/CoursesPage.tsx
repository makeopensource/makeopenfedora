// page for creating and deleting courses

// TODO: make a Course type
//  - id, name, maybe code / description?
//  - check what fields the backend Course entity has so they match

function CoursesPage() {
  // TODO: state for the list of courses -> useState<Course[]>([])
  // TODO: state for the new course form (name etc)

  // TODO: load courses when the page opens
  //  - useEffect -> fetch GET /api/courses -> setCourses
  //  - ask backend what the actual endpoint is

  // TODO: create course
  //  - on submit, POST /api/courses with the form data
  //  - add the new course to the list (or just re-fetch)
  //  - clear the form after
  //  - don't allow empty name

  // TODO: delete course
  //  - DELETE /api/courses/{id}
  //  - remove it from the list
  //  - maybe confirm() before deleting?

  return (
    <div>
      <h1>Courses</h1>

      {/* TODO: form - input for course name + Create button */}

      {/* TODO: list of courses, each with a Delete button */}
      {/* TODO: show "no courses yet" if the list is empty */}
    </div>
  )
}

export default CoursesPage
