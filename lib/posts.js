import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

// ** get data from files **
// =============================================================
const postsDirectory = path.join(process.cwd(), 'posts');


// ** import for non file reading options (API and DB) **
// =============================================================
import fetch from 'node-fetch';
//import someDatabaseSDK from 'someDatabaseSDK'
// const databaseClient = someDatabaseSDK.createClient(...)


// ** You can get data a few different ways with nextjs **
// =============================================================

// ** 1. API **
// =============================================================
export async function getSortedPostsDataFromAPI() {
  // Instead of the file system,
  // fetch post data from an external API endpoint
  const res = await fetch('..')
  return res.json()
}

// ** DB query **
// =============================================================
export async function getSortedPostsDataFromDB() {
  // Instead of the file system,
  // fetch post data from a database
  // 
  // return databaseClient.query('SELECT posts...')
}

// ** reading file system **
// =============================================================
export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the id
    return {
      id,
      ...matterResult.data
    }
  })
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}
