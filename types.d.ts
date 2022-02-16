declare type FileData = {
  postId: string,
  postData: PostData
}

declare type ProjectData = {
  projectId: string,
  projectData: ProjectMetaData
}

declare type ProjectMetaData = {
  projectTitle: string,
  imgUrl: string,
  description: string,
  projectUrl: `/images/${string}`
}

declare type PostContentData = {
  topic: string,
  postContentString: string,
  postMetaData: PostData
}

declare type PostData = BasicPostData & (BookData | MovieData | RecipeData | LearningNotesData | MusicData | WeekLinksData | PerspectiveData)

type BasicPostData = { title: string, postDate: string, tags: string[] }

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