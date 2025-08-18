import { Star } from 'lucide-react'
import React from 'react'

const RatingReview = ({rating, review}:{rating:number,review:number}) => {
  return (
    <div className='flex items-center text-yellow-600'>
        <span className='text-black dark:text-white text-md mx-1'>({rating})</span>
        {Array(5).fill(null).map((_,i) => (
            <Star className={`${rating >= i + 1 ? 'text-yellow-400' : 'text-gray-500'}`} key={i} size={12}/>
        ))}
        <span className='h-8 w-[2px] bg-gray-500 mx-2'/>
        <p className='text-black dark:text-white text-md'>({review}) Đánh giá</p>
    </div>
  )
}

export default RatingReview