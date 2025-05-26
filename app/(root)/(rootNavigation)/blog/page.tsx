import BlogContainer from "@/components/BlogComponents/BlogContainer"
import React from 'react'
import { BlogMeta } from '../../../../src/meta/BlogMeta';

export const metadata=BlogMeta;
const Blog = () => {
  return (
    <div>
      <BlogContainer />
    </div>
  )
}

export default Blog
