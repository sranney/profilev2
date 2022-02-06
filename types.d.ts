declare enum ActivePageEnum {
  Home = "Home",
  Movies = "Movies",
  Books = "Books",
  Cooking = "Cooking",
  Movies = "Movies",
  Music = "Music",
  LearningNotes = "LearningNotes",
  Projects = "Projects",
  Links = "Links"
}

declare type ActivePageType = {
  activePage: ActivePageEnum
}

declare type LayoutWithActivePage = {
  activePage: ActivePageEnum,
  children: React.ReactNode
}