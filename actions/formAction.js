'use server'
import { revalidatePath } from 'next/cache'
import { writeFile } from 'fs/promises'
export const submitFile = async (FormData, fullpath) => {
  try {
    if (fullpath) {
      const file = FormData.get('image')
      console.log(file)
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      // With the file data in the buffer, you can do whatever you want with it.
      // For this, we'll just write it to the filesystem in a new location
      const path = `${fullpath}/${file.name}`
      //   const path = `./public/${file.name}`
      await writeFile(path, buffer)
      console.log(`open ${path} to see the uploaded file`)
    } else {
      console.log('path is not available try again')
    }
  } catch (error) {
    console.log(error)
  }
  // const file = FormData.get('image')
  // console.log(file)
  // const bytes = await file.arrayBuffer()
  // const buffer = Buffer.from(bytes)

  // // With the file data in the buffer, you can do whatever you want with it.
  // // For this, we'll just write it to the filesystem in a new location
  // const path = `${fullpath}/${file.name}`
  // //   const path = `./public/${file.name}`
  // await writeFile(path, buffer)
  // console.log(`open ${path} to see the uploaded file`)
}
