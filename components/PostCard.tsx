import { Post } from '@/lib/types'
import { Heart, Bookmark, Eye, Share2 } from 'lucide-react'
import Link from 'next/link'

interface PostCardProps {
  post: Post
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/post/${post.id}`}>
      <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden cursor-pointer group">
        <div className="relative overflow-hidden">
          <img
            src={post.coverImage || '/placeholder-image.jpg'}
            alt={post.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button className="bg-white/90 p-2 rounded-full backdrop-blur-sm">
              <Heart className="w-4 h-4" />
            </button>
            <button className="bg-white/90 p-2 rounded-full backdrop-blur-sm">
              <Bookmark className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
            {post.description}
          </p>
          
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {post.views}
              </span>
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                {post.likes}
              </span>
            </div>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>
          
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-3">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
