import { useState } from 'react'


function App() {
  const url = "https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts"

  const [formData, setFormData] = useState({
    author: '',
    title: '',
    body: '',
    public: false
  })


  function handleFormData(e) {
    const key = e.target.name
    const val = e.target.value === 'public' ? e.target.checked : e.target.value


    setFormData({
      ...formData,
      [key]: val
    })
  }




  function handleSubmit(e) {
    e.preventDefault()

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

      .then(res => res.json())
      .then(data => {
        console.log(data)
        setFormData({
          author: '',
          title: '',
          body: '',
          public: false
        })
      })

      .catch(error => console.error('errore', error))


  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container">
          <h1 className="text-center">Post Form</h1>
          <div className="card">
            {/*author section */}
            <div className="p-3">
              <label className="form-label">Author</label>
              <input
                type="text"
                className="form-control"
                value={formData.author}
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
                value={formData.title}
                name="title"
                id="title"
                placeholder="Get here the post title"
                onChange={handleFormData}
              />
            </div>


            {/* text post section */}
            <div className="m-3">
              <label className="form-label">Content Post</label>
              <textarea className="form-control" value={formData.body} name="body" id="body" rows="3" onChange={handleFormData}></textarea>
            </div>




            <div className="form-check m-3">
              <input
                className="form-check-input"
                type="checkbox"
                name='public'
                value='public'
                id="public"
                onChange={handleFormData}
              />
              <label className="form-check-label"> Public </label>
            </div>




          </div>
          <div className="d-grid gap-2 mt-3">
            <button
              type="submit"
              name=""
              id=""
              className="btn btn-primary"
            >
              Send
            </button>
          </div>

        </div >
      </form>
    </>
  )
}

export default App
