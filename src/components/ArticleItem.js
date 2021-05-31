import createImageUrl from '../utils/createImageUrl'
import Link from 'next/link'

const ArticleItem = ({title, caption, imageUrl, id}) => {
  const imageurl = imageUrl?createImageUrl(imageUrl):""
  return(
    <Link href={`article/${id}`}>
    <div className="article_content_wrapper" style={{cursor:"pointer"}}>
      <img src={imageurl} height="300" width="380" alt="article-image"></img>
      <div className="article_content">
          <p><strong>{title}</strong>< br />{caption}</p>
      </div>
    </div>
    </Link>
  )
}

export default ArticleItem