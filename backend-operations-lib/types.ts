export type FileData = {
  postId: string,
  postData: PostData
}

export type PostData = BookData | MovieData | RecipeData | LearningNotesData | MusicData | WeekLinksData | PerspectiveData

type BookData = {
  title:String,
  author:String,
  postDate:String
}

type MovieData = {
  title: String,
  director: String,
  posterImg: String,
  movieUrl: String,
  postDate: String
}

type RecipeData = {
  title: String,
  recipeAuthor: String,
  tags: String[]
  postDate: String
}

type LearningNotesData = {
  title: String,
  tags: String[]
  postDate: String
}

type MusicData = {
  title: String,
  musician: String,
  musicUrl: String,
  genre: String,
  postDate: String
}

type WeekLinksData = {
  title: String,
  postDate: String
}

type PerspectiveData = {
  title: String,
  postDate: String
}