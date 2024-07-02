import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { PostType, CardVariant } from '../../src/components/types/Types'

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log('API Response:', response.data)


    const postsWithVariant = response.data.map((post: PostType) => {
        let variant: CardVariant
        const postId = Number(post.id)

        if (postId % 3 === 0) {
            variant = CardVariant.Large
        } else if (postId % 3 === 1) {
            variant = CardVariant.Medium
        } else {
            variant = CardVariant.Small
        }
        const imgSrc = `https://via.placeholder.com/150?text=${postId}`

        return {
            ...post,
            variant,
            imgSrc,
            text: post.body
        }
    })

    console.log('Modified API Response:', postsWithVariant)

    return postsWithVariant as PostType[]
})

