import { useState } from 'react'


function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: true,
  })



  return (
    <>
      
        <div className="container">
          <h1 className="text-center">Post Form</h1>
          <div className="card">
            {/*author section */}
            <div className="p-3">
              <label className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                name="author"
                id="author"
                placeholder="Get here the author"
              />
            </div>


              {/* title section */}
            <div className="p-3">
              <label className="form-label">Title</label>
              <input
                type="text"
                className="form-control"
                name="title"
                id="title"
                placeholder="Get here the post title"
              />
            </div>


              {/* text post section */}
            <div className="m-3">
              <label className="form-label">Content Post</label>
              <textarea className="form-control" name="body" id="body" rows="3"></textarea>
            </div>
            
            

          
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                value="public"
                id="public"
              />
              <label class="form-check-label"> Public </label>
            </div>
            


            
          </div>
            <div class="d-grid gap-2 mt-3">
              <button
                type="button"
                name=""
                id=""
                class="btn btn-primary"
              >
                Send
              </button>
            </div>
            
        </div >
     
    </>
  )
}

export default App
