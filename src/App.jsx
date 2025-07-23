import { useState } from 'react'


function App() {

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  })


  function handleFormData(e){
    const key = e.target.name
    const val = e.target.value === 'public' ? e.target.checked : e.target.value 


    setFormData({
      ...formData,
      [key] : val
    })
  }


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
                onChange={handleFormData}
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
                onChange={handleFormData}
              />
            </div>


              {/* text post section */}
            <div className="m-3">
              <label className="form-label">Content Post</label>
              <textarea className="form-control" name="body" id="body" rows="3" onChange={handleFormData}></textarea>
            </div>
            
            

          
            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name='public'
                value="public"
                id="public"
                onChange={handleFormData}
              />
              <label className="form-check-label"> Public </label>
            </div>
            


            
          </div>
            <div className="d-grid gap-2 mt-3">
              <button
                type="button"
                name=""
                id=""
                className="btn btn-primary"
              >
                Send
              </button>
            </div>
            
        </div >
     
    </>
  )
}

export default App
