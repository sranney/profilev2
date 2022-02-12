export type FileData = {
  postId: string,
  postData: PostData
}

export type PostContentData = {
  postContentString: string,
  postMetaData: PostData
}

type BasicPostData = { title: string, postDate: string, tags: string[] }
export type PostData = BasicPostData & (BookData | MovieData | RecipeData | LearningNotesData | MusicData | WeekLinksData | PerspectiveData)

type BookData = {
  author:String,
}

type MovieData = {
  director: String,
  posterImg: String,
  movieUrl: String,
}

type RecipeData = {
  recipeAuthor: String,
}

type LearningNotesData = {}

type MusicData = {
  musician: String,
  musicUrl: String,
  genre: String,
}

type WeekLinksData = {}

type PerspectiveData = {}