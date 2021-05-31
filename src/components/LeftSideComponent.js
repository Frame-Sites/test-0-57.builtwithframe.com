import createImageUrl from '../utils/createImageUrl'

const LeftSideComponent = ({first_name,last_name,coursework,assets,socials,skills,intro}) => {
  const key = assets.filter(asset => (asset.type == "primary"))[0].url
  const url = createImageUrl(key);
  const name = `${first_name} ${last_name}`
  const about = !!intro[0]?intro[0].content:""
  const facebook_url =!!socials.filter(item => item.type=="Facebook")[0]
                      ?socials.filter(item => item.type=="Facebook")[0].url
                      :""
  const twitter_url = !!socials.filter(item => item.type=="Twitter")[0]
                      ?socials.filter(item => item.type=="Twitter")[0].url
                      :""    
  const linkedin_url = !!socials.filter(item => item.type=="Linkedin")[0]
                      ?socials.filter(item => item.type=="Linkedin")[0].url
                      :""
  const github_url = !!socials.filter(item => item.type=="GitHub")[0]
                      ?socials.filter(item => item.type=="GitHub")[0].url
                      :""
  const instagram_url = !!socials.filter(item => item.type=="Instagram")[0]
                      ?socials.filter(item => item.type=="Instagram")[0].url
                      :""
  const medium_url = !!socials.filter(item => item.type=="Medium")[0]
                      ?socials.filter(item => item.type=="Medium")[0].url
                      :""
  //function for cleaning html tags from String
    return(
      <div className="left-content-wrapper">
        <div className="profile-content">
          <img src={url} alt="profile_photo" width="220" height="220"></img>
          <h2>{name}</h2>
          <p>{about}</p>
          <div className="social-icons">
            {facebook_url && (
              <a href={facebook_url}>
                <span className="facebook-icon"></span>
              </a>
            )}
            {twitter_url && (
              <a href={twitter_url}>
                <span className="twitter-icon"></span>
              </a>
            )}
            {linkedin_url && (
              <a href={linkedin_url}>
                <span className="linkedin-icon"></span>
              </a>
            )}
            {instagram_url && (
              <a href={instagram_url}>
                <span className="instagram-icon"></span>
              </a>
            )}
            {github_url && (
              <a href={github_url}>
                <span className="github-icon"></span>
              </a>
            )}
            {medium_url && (
              <a href={medium_url}>
                <span className="medium-icon"></span>
              </a>
            )}
          </div>
        </div>
        <div className="profile-skills">
          <p>Skills</p>
          <ul>
            {skills.map(item => {
              return(
                <li key={item.id}>{item.content}</li>
              )
            })
            }
          </ul>
        </div>
        <div className="profile-coursework">
          <p>Coursework</p>
          <ul>
            {coursework.map(item => {
              return(
                <li key={item.id}>{item.course_name}</li>
              )
            })
            }   
          </ul>
        </div>
      </div>
    )
  }
export default LeftSideComponent