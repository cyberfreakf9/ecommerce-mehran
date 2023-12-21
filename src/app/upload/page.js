import React from 'react'
import { writeFile } from 'fs/promises'
const page = () => {
  // const [file, setFile] = useState()
  const onSubmit = async (e) => {
    // e.preventDefault()
    // console.log(file)
    // // const data = new FormData()
    // // data.set('file', file)return
    // try {
    //   const data = new FormData()
    //   data.set('file', file)
    //   const res = await fetch('/api/upload', {
    //     method: 'POST',
    //     body: data,
    //   })
    //   // handle the error
    //   if (!res.ok) throw new Error(await res.text())
    // } catch (e) {
    //   // Handle errors here
    //   console.error(e)
    // }
  }
  async function create(formData) {
    'use server'
    const file = formData.get('image')
    console.log(file)
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)

    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
    const path = `./public/${file.name}`
    await writeFile(path, buffer)
    console.log(`open ${path} to see the uploaded file`)
  }
  return (
    <div>
      <h1>File Upload </h1>
      <div>
        <form action={create}>
          <input
            id="image"
            type="file"
            name="image"
            required
            // onChange={(e) => setFile(e.target.files?.[0])}
            className="w-[300px] md:w-[500px] h-12 border border-transparent rounded-md focus:outline-none bg-white"
          />
          <button
            type="submit"
            className="px-4 py-2 cursor-pointer border border-slate-100 rounded-md bg-slate-200"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  )
}

export default page
