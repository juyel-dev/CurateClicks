export interface Post {
  id: string
  title: string
  description: string
  coverImage: string
  content: ContentSection[]
  tags: string[]
  authorId: string
  authorName: string
  authorAvatar?: string
  createdAt: number
  likes: number
  saves: number
  views: number
  isApproved: boolean
  blurHash?: string
}

export interface ContentSection {
  type: 'text' | 'image' | 'link' | 'embed' | 'tool'
  content: string
  metadata?: Record<string, string>
}

export interface User {
  uid: string
  email: string
  displayName: string
  photoURL?: string
  username: string
  bio?: string
  socialLinks?: string[]
  createdAt: number
  isAdmin?: boolean
}
