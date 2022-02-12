export const Tags = ({tags}: { tags: string[]}): JSX.Element => (
  <>
    {tags.map(tag => <span key={tag} className="chip">{tag}</span>)}
  </>
)