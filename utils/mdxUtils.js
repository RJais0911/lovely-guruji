import fs from 'fs'
import path from 'path'

export const BLOGS_PATH = path.join(process.cwd(), 'content/blogs')
export const COURSES_PATH = path.join(process.cwd(), 'content/courses')

export const blogFilePaths = fs
  .readdirSync(BLOGS_PATH)
  .filter((path) => /\.mdx?$/.test(path))
export const courseFilePaths = fs
  .readdirSync(COURSES_PATH)
  .filter((path) => /\.mdx?$/.test(path))