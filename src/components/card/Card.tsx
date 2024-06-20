import React, { useState } from 'react'
import '../../styles/App.scss'
import { CardProps, CardVariant } from '../types/Types'
import { setSelectedPost } from '../../redux/postPopUpReducer'
import { useDispatch } from 'react-redux'



interface CardComponentProps extends CardProps {
  isFiltered: boolean
}


const Card = ({ date, title, imgSrc, text, variant, isFiltered }: CardComponentProps) =>  {
  const [likeStatus, setLikeStatus] = useState<'liked' | 'disliked' | undefined>(undefined)
  const dispatch = useDispatch()
  const handleLike = () => {
    setLikeStatus(likeStatus === 'liked' ? undefined : 'liked')
    }

 
  const handleDislike = () => {
    setLikeStatus(likeStatus === 'disliked' ? undefined : 'disliked')
  }

  const handlePopUp = () => {
    dispatch(setSelectedPost({ date, title, imgSrc: imgSrc || '', text, variant }))
  }

  const renderContent = () => {
    const cardClassName = `${variant.toLowerCase()} ${isFiltered ? 'filtered' : ''}`
    switch (variant) {
      case CardVariant.Large:
        return (
          <div className={`card-large ${cardClassName}`}>
            <div className={`card-large-content-wrapper ${cardClassName}`}>
                <div className={`card-large-content ${cardClassName}`}>
                <p className={`card-large-date ${cardClassName}`}>{date}</p>
                <h3 className={`card-large-title ${cardClassName}`}>{title}</h3>
                <h4 className={`card-large-title-small ${cardClassName}`}>{title}</h4>
                <p className={`card-large-text ${cardClassName}`}>{text}</p>
                </div>
                <a className={`card-large-image-wrapper ${cardClassName}`} href="#">{imgSrc && <img src={imgSrc} alt={title} className={`card-large-image ${cardClassName}`} />}</a>
            </div>
            <div className="card-actions-wrapper">
              <div className="card-actions"> 
                      <a href="#" onClick={handleLike} className={likeStatus === 'liked' ? 'liked' : 'neutral'}><svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20.975 12.185l-.739-.128zm-.705 4.08l-.74-.128zM6.938 20.477l-.747.065zm-.812-9.393l.747-.064zm7.869-5.863l.74.122zm-.663 4.045l.74.121zm-6.634.411l-.49-.568zm1.439-1.24l.49.569zm2.381-3.653l-.726-.189zm.476-1.834l.726.188zm1.674-.886l-.23.714zm.145.047l.229-.714zM9.862 6.463l.662.353zm4.043-3.215l-.726.188zm-2.23-1.116l-.326-.675zm8.561 9.925l-.705 4.08l1.478.256l.705-4.08zm-6.991 9.193H8.596v1.5h4.649zm-5.56-.837l-.812-9.393l-1.495.129l.813 9.393zm11.846-4.276c-.507 2.93-3.15 5.113-6.286 5.113v1.5c3.826 0 7.126-2.669 7.764-6.357zM13.255 5.1l-.663 4.045l1.48.242l.663-4.044zm-6.067 5.146l1.438-1.24l-.979-1.136L6.21 9.11zm4.056-5.274l.476-1.834l-1.452-.376l-.476 1.833zm1.194-2.194l.145.047l.459-1.428l-.145-.047zm-1.915 4.038a8.378 8.378 0 0 0 .721-1.844l-1.452-.377A6.878 6.878 0 0 1 9.2 6.11zm2.06-3.991a.885.885 0 0 1 .596.61l1.452-.376a2.384 2.384 0 0 0-1.59-1.662zm-.863.313a.514.514 0 0 1 .28-.33l-.651-1.351c-.532.256-.932.73-1.081 1.305zm.28-.33a.596.596 0 0 1 .438-.03l.459-1.428a2.096 2.096 0 0 0-1.548.107zm2.154 8.176h5.18v-1.5h-5.18zm.581-5.641a5.533 5.533 0 0 0-.104-2.284l-1.452.377a4.03 4.03 0 0 1 .076 1.664zM8.596 21.25a.916.916 0 0 1-.911-.837l-1.494.129a2.416 2.416 0 0 0 2.405 2.208zm.03-12.244c.68-.586 1.413-1.283 1.898-2.19L9.2 6.109c-.346.649-.898 1.196-1.553 1.76zm13.088 3.307a2.416 2.416 0 0 0-2.38-2.829v1.5c.567 0 1 .512.902 1.073zm-9.122-3.168a1.583 1.583 0 0 0 1.562 1.84v-1.5a.083.083 0 0 1-.082-.098zm-5.72 1.875a.918.918 0 0 1 .316-.774l-.98-1.137a2.418 2.418 0 0 0-.83 2.04z"/><path fill="currentColor" d="m3.972 21.47l-.748.066zM3 10.235l.747-.064a.75.75 0 0 0-1.497.064zm1.719 11.172L3.747 10.17l-1.494.129l.971 11.237zm-.969.107v-11.28h-1.5v11.279zm-.526.022a.263.263 0 0 1 .263-.285v1.5c.726 0 1.294-.622 1.232-1.344zm.263-.285c.146 0 .263.119.263.263h-1.5c0 .682.553 1.237 1.237 1.237z" opacity="0.5"/></svg></a>
                      <a href="#" onClick={handleDislike} className={likeStatus === 'disliked' ? 'disliked' : 'neutral'}><svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20.975 11.815l-.739.128zm-.705-4.08l-.74.128zM6.938 3.523l-.747-.065zm-.812 9.393l.747.064zm7.869 5.863l.74-.122zm-.663-4.045l.74-.121zm-6.634-.412l-.49.569zm1.439 1.24l.49-.568zm2.381 3.654l-.726.189zm.476 1.834l.726-.188zm1.674.886l-.23-.714zm.145-.047l.229.714zm-2.951-4.352l.662-.353zm4.043 3.216l-.726-.189zm-2.23 1.115l-.326.675zm8.561-9.925l-.705-4.08l1.478-.256l.705 4.08zM13.245 2.75H8.596v-1.5h4.649zm-5.56.838l-.812 9.392l-1.495-.129l.813-9.393zm11.846 4.275c-.507-2.93-3.15-5.113-6.286-5.113v-1.5c3.826 0 7.126 2.669 7.764 6.357zM13.255 18.9l-.663-4.045l1.48-.242l.663 4.044zm-6.067-5.146l1.438 1.24l-.979 1.137l-1.438-1.24zm4.056 5.274l.476 1.834l-1.452.376l-.476-1.833zm1.194 2.194l.145-.047l.459 1.428l-.145.047zm-1.915-4.038c.312.584.555 1.203.721 1.844l-1.452.377A6.877 6.877 0 0 0 9.2 17.89zm2.06 3.991a.885.885 0 0 0 .596-.61l1.452.376a2.384 2.384 0 0 1-1.59 1.662zm-.863-.313a.513.513 0 0 0 .28.33l-.651 1.351a2.014 2.014 0 0 1-1.081-1.305zm.28.33a.596.596 0 0 0 .438.03l.459 1.428a2.096 2.096 0 0 1-1.548-.107zm2.154-8.176h5.18v1.5h-5.18zm.581 5.641c.125.76.089 1.538-.104 2.284l-1.452-.377c.14-.543.167-1.11.076-1.664zM8.596 2.75a.916.916 0 0 0-.911.838l-1.494-.13A2.416 2.416 0 0 1 8.596 1.25zm.03 12.244c.68.586 1.413 1.283 1.898 2.19l-1.324.707c-.346-.649-.898-1.196-1.553-1.76zm13.088-3.307a2.416 2.416 0 0 1-2.38 2.829v-1.5a.916.916 0 0 0 .902-1.073zm-9.122 3.168a1.583 1.583 0 0 1 1.562-1.84v1.5c-.05 0-.09.046-.082.098zm-5.72-1.875a.918.918 0 0 0 .316.774l-.98 1.137a2.418 2.418 0 0 1-.83-2.04z"/><path fill="currentColor" d="m3.972 2.53l-.748-.065zM3 13.765l.747.064a.75.75 0 0 1-1.497-.064zM4.719 2.594L3.747 13.83l-1.494-.129l.971-11.236zm-.969-.107v11.279h-1.5V2.487zm-.526-.022a.263.263 0 0 0 .263.285v-1.5c.726 0 1.294.622 1.232 1.344zm.263.285a.263.263 0 0 0 .263-.263h-1.5c0-.682.553-1.237 1.237-1.237z" opacity="0.5"/></svg></a>
              </div> 
              <div className="card-actions"> 
                      <a href="#" className="card-actions-bookmark neutral"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M24 4v22.75l-7.1-3.59l-.9-.45l-.9.45L8 26.75V4zm0-2H8a2 2 0 0 0-2 2v26l10-5l10 5V4a2 2 0 0 0-2-2"/></svg></a>
                      <a href="#" onClick={handlePopUp} className="card-actions-link neutral"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"/></svg></a>
              </div> 
            </div>
          </div>
        )
      case CardVariant.Medium:
        return (
          <div className={`card-medium ${cardClassName}`}>
            <div className={`card-medium-content-wrapper ${cardClassName}`}>
              <a className={`card-medium-image-wrapper ${cardClassName}`} href="#">{imgSrc && <img src={imgSrc} alt={title} className={`card-medium-image ${cardClassName}`} />}</a>
              <div className={`card-medium-content ${cardClassName}`}>
                <p className={`card-medium-date ${cardClassName}`}>{date}</p>
                <h4 className={`card-medium-title ${cardClassName}`}>{title}</h4>
                <p className={`card-medium-text ${cardClassName}`}>{text}</p>
              </div>
            </div>
            <div className="card-actions-wrapper">
              <div className={`card-actions ${cardClassName}`}> 
                        <a href="#" onClick={handleLike} className={likeStatus === 'liked' ? 'liked' : 'neutral'}><svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20.975 12.185l-.739-.128zm-.705 4.08l-.74-.128zM6.938 20.477l-.747.065zm-.812-9.393l.747-.064zm7.869-5.863l.74.122zm-.663 4.045l.74.121zm-6.634.411l-.49-.568zm1.439-1.24l.49.569zm2.381-3.653l-.726-.189zm.476-1.834l.726.188zm1.674-.886l-.23.714zm.145.047l.229-.714zM9.862 6.463l.662.353zm4.043-3.215l-.726.188zm-2.23-1.116l-.326-.675zm8.561 9.925l-.705 4.08l1.478.256l.705-4.08zm-6.991 9.193H8.596v1.5h4.649zm-5.56-.837l-.812-9.393l-1.495.129l.813 9.393zm11.846-4.276c-.507 2.93-3.15 5.113-6.286 5.113v1.5c3.826 0 7.126-2.669 7.764-6.357zM13.255 5.1l-.663 4.045l1.48.242l.663-4.044zm-6.067 5.146l1.438-1.24l-.979-1.136L6.21 9.11zm4.056-5.274l.476-1.834l-1.452-.376l-.476 1.833zm1.194-2.194l.145.047l.459-1.428l-.145-.047zm-1.915 4.038a8.378 8.378 0 0 0 .721-1.844l-1.452-.377A6.878 6.878 0 0 1 9.2 6.11zm2.06-3.991a.885.885 0 0 1 .596.61l1.452-.376a2.384 2.384 0 0 0-1.59-1.662zm-.863.313a.514.514 0 0 1 .28-.33l-.651-1.351c-.532.256-.932.73-1.081 1.305zm.28-.33a.596.596 0 0 1 .438-.03l.459-1.428a2.096 2.096 0 0 0-1.548.107zm2.154 8.176h5.18v-1.5h-5.18zm.581-5.641a5.533 5.533 0 0 0-.104-2.284l-1.452.377a4.03 4.03 0 0 1 .076 1.664zM8.596 21.25a.916.916 0 0 1-.911-.837l-1.494.129a2.416 2.416 0 0 0 2.405 2.208zm.03-12.244c.68-.586 1.413-1.283 1.898-2.19L9.2 6.109c-.346.649-.898 1.196-1.553 1.76zm13.088 3.307a2.416 2.416 0 0 0-2.38-2.829v1.5c.567 0 1 .512.902 1.073zm-9.122-3.168a1.583 1.583 0 0 0 1.562 1.84v-1.5a.083.083 0 0 1-.082-.098zm-5.72 1.875a.918.918 0 0 1 .316-.774l-.98-1.137a2.418 2.418 0 0 0-.83 2.04z"/><path fill="currentColor" d="m3.972 21.47l-.748.066zM3 10.235l.747-.064a.75.75 0 0 0-1.497.064zm1.719 11.172L3.747 10.17l-1.494.129l.971 11.237zm-.969.107v-11.28h-1.5v11.279zm-.526.022a.263.263 0 0 1 .263-.285v1.5c.726 0 1.294-.622 1.232-1.344zm.263-.285c.146 0 .263.119.263.263h-1.5c0 .682.553 1.237 1.237 1.237z" opacity="0.5"/></svg></a>
                        <a href="#" onClick={handleDislike} className={likeStatus === 'disliked' ? 'disliked' : 'neutral'}><svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20.975 11.815l-.739.128zm-.705-4.08l-.74.128zM6.938 3.523l-.747-.065zm-.812 9.393l.747.064zm7.869 5.863l.74-.122zm-.663-4.045l.74-.121zm-6.634-.412l-.49.569zm1.439 1.24l.49-.568zm2.381 3.654l-.726.189zm.476 1.834l.726-.188zm1.674.886l-.23-.714zm.145-.047l.229.714zm-2.951-4.352l.662-.353zm4.043 3.216l-.726-.189zm-2.23 1.115l-.326.675zm8.561-9.925l-.705-4.08l1.478-.256l.705 4.08zM13.245 2.75H8.596v-1.5h4.649zm-5.56.838l-.812 9.392l-1.495-.129l.813-9.393zm11.846 4.275c-.507-2.93-3.15-5.113-6.286-5.113v-1.5c3.826 0 7.126 2.669 7.764 6.357zM13.255 18.9l-.663-4.045l1.48-.242l.663 4.044zm-6.067-5.146l1.438 1.24l-.979 1.137l-1.438-1.24zm4.056 5.274l.476 1.834l-1.452.376l-.476-1.833zm1.194 2.194l.145-.047l.459 1.428l-.145.047zm-1.915-4.038c.312.584.555 1.203.721 1.844l-1.452.377A6.877 6.877 0 0 0 9.2 17.89zm2.06 3.991a.885.885 0 0 0 .596-.61l1.452.376a2.384 2.384 0 0 1-1.59 1.662zm-.863-.313a.513.513 0 0 0 .28.33l-.651 1.351a2.014 2.014 0 0 1-1.081-1.305zm.28.33a.596.596 0 0 0 .438.03l.459 1.428a2.096 2.096 0 0 1-1.548-.107zm2.154-8.176h5.18v1.5h-5.18zm.581 5.641c.125.76.089 1.538-.104 2.284l-1.452-.377c.14-.543.167-1.11.076-1.664zM8.596 2.75a.916.916 0 0 0-.911.838l-1.494-.13A2.416 2.416 0 0 1 8.596 1.25zm.03 12.244c.68.586 1.413 1.283 1.898 2.19l-1.324.707c-.346-.649-.898-1.196-1.553-1.76zm13.088-3.307a2.416 2.416 0 0 1-2.38 2.829v-1.5a.916.916 0 0 0 .902-1.073zm-9.122 3.168a1.583 1.583 0 0 1 1.562-1.84v1.5c-.05 0-.09.046-.082.098zm-5.72-1.875a.918.918 0 0 0 .316.774l-.98 1.137a2.418 2.418 0 0 1-.83-2.04z"/><path fill="currentColor" d="m3.972 2.53l-.748-.065zM3 13.765l.747.064a.75.75 0 0 1-1.497-.064zM4.719 2.594L3.747 13.83l-1.494-.129l.971-11.236zm-.969-.107v11.279h-1.5V2.487zm-.526-.022a.263.263 0 0 0 .263.285v-1.5c.726 0 1.294.622 1.232 1.344zm.263.285a.263.263 0 0 0 .263-.263h-1.5c0-.682.553-1.237 1.237-1.237z" opacity="0.5"/></svg></a>
                </div> 
                <div className="card-actions"> 
                      <a href="#" className="card-actions-bookmark neutral"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M24 4v22.75l-7.1-3.59l-.9-.45l-.9.45L8 26.75V4zm0-2H8a2 2 0 0 0-2 2v26l10-5l10 5V4a2 2 0 0 0-2-2"/></svg></a>
                      <a href="#" onClick={handlePopUp} className="card-actions-link neutral"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"/></svg></a>
              </div> 
              </div>
          </div>
        )
      case CardVariant.Small:
        return (
          <div className={`card-small ${cardClassName}`}>
            <div className={`card-small-content-wrapper ${cardClassName}`}>
                <div className={`card-small-content ${cardClassName}`}>
                <p className={`card-small-date ${cardClassName}`}>{date}</p>
                <h4 className={`card-small-title ${cardClassName}`}>{title}</h4>
                </div>
                <a className={`card-small-image-wrapper ${cardClassName}`} href="#">{imgSrc && <img src={imgSrc} alt={title} className={`card-small-image ${cardClassName}`} />}</a>
            </div>
            <div className="card-actions-wrapper">
              <div className={`card-actions ${cardClassName}`}> 
                      <a href="#" onClick={handleLike} className={likeStatus === 'liked' ? 'liked' : 'neutral'}><svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20.975 12.185l-.739-.128zm-.705 4.08l-.74-.128zM6.938 20.477l-.747.065zm-.812-9.393l.747-.064zm7.869-5.863l.74.122zm-.663 4.045l.74.121zm-6.634.411l-.49-.568zm1.439-1.24l.49.569zm2.381-3.653l-.726-.189zm.476-1.834l.726.188zm1.674-.886l-.23.714zm.145.047l.229-.714zM9.862 6.463l.662.353zm4.043-3.215l-.726.188zm-2.23-1.116l-.326-.675zm8.561 9.925l-.705 4.08l1.478.256l.705-4.08zm-6.991 9.193H8.596v1.5h4.649zm-5.56-.837l-.812-9.393l-1.495.129l.813 9.393zm11.846-4.276c-.507 2.93-3.15 5.113-6.286 5.113v1.5c3.826 0 7.126-2.669 7.764-6.357zM13.255 5.1l-.663 4.045l1.48.242l.663-4.044zm-6.067 5.146l1.438-1.24l-.979-1.136L6.21 9.11zm4.056-5.274l.476-1.834l-1.452-.376l-.476 1.833zm1.194-2.194l.145.047l.459-1.428l-.145-.047zm-1.915 4.038a8.378 8.378 0 0 0 .721-1.844l-1.452-.377A6.878 6.878 0 0 1 9.2 6.11zm2.06-3.991a.885.885 0 0 1 .596.61l1.452-.376a2.384 2.384 0 0 0-1.59-1.662zm-.863.313a.514.514 0 0 1 .28-.33l-.651-1.351c-.532.256-.932.73-1.081 1.305zm.28-.33a.596.596 0 0 1 .438-.03l.459-1.428a2.096 2.096 0 0 0-1.548.107zm2.154 8.176h5.18v-1.5h-5.18zm.581-5.641a5.533 5.533 0 0 0-.104-2.284l-1.452.377a4.03 4.03 0 0 1 .076 1.664zM8.596 21.25a.916.916 0 0 1-.911-.837l-1.494.129a2.416 2.416 0 0 0 2.405 2.208zm.03-12.244c.68-.586 1.413-1.283 1.898-2.19L9.2 6.109c-.346.649-.898 1.196-1.553 1.76zm13.088 3.307a2.416 2.416 0 0 0-2.38-2.829v1.5c.567 0 1 .512.902 1.073zm-9.122-3.168a1.583 1.583 0 0 0 1.562 1.84v-1.5a.083.083 0 0 1-.082-.098zm-5.72 1.875a.918.918 0 0 1 .316-.774l-.98-1.137a2.418 2.418 0 0 0-.83 2.04z"/><path fill="currentColor" d="m3.972 21.47l-.748.066zM3 10.235l.747-.064a.75.75 0 0 0-1.497.064zm1.719 11.172L3.747 10.17l-1.494.129l.971 11.237zm-.969.107v-11.28h-1.5v11.279zm-.526.022a.263.263 0 0 1 .263-.285v1.5c.726 0 1.294-.622 1.232-1.344zm.263-.285c.146 0 .263.119.263.263h-1.5c0 .682.553 1.237 1.237 1.237z" opacity="0.5"/></svg></a>
                      <a href="#" onClick={handleDislike} className={likeStatus === 'disliked' ? 'disliked' : 'neutral'}><svg className="card-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m20.975 11.815l-.739.128zm-.705-4.08l-.74.128zM6.938 3.523l-.747-.065zm-.812 9.393l.747.064zm7.869 5.863l.74-.122zm-.663-4.045l.74-.121zm-6.634-.412l-.49.569zm1.439 1.24l.49-.568zm2.381 3.654l-.726.189zm.476 1.834l.726-.188zm1.674.886l-.23-.714zm.145-.047l.229.714zm-2.951-4.352l.662-.353zm4.043 3.216l-.726-.189zm-2.23 1.115l-.326.675zm8.561-9.925l-.705-4.08l1.478-.256l.705 4.08zM13.245 2.75H8.596v-1.5h4.649zm-5.56.838l-.812 9.392l-1.495-.129l.813-9.393zm11.846 4.275c-.507-2.93-3.15-5.113-6.286-5.113v-1.5c3.826 0 7.126 2.669 7.764 6.357zM13.255 18.9l-.663-4.045l1.48-.242l.663 4.044zm-6.067-5.146l1.438 1.24l-.979 1.137l-1.438-1.24zm4.056 5.274l.476 1.834l-1.452.376l-.476-1.833zm1.194 2.194l.145-.047l.459 1.428l-.145.047zm-1.915-4.038c.312.584.555 1.203.721 1.844l-1.452.377A6.877 6.877 0 0 0 9.2 17.89zm2.06 3.991a.885.885 0 0 0 .596-.61l1.452.376a2.384 2.384 0 0 1-1.59 1.662zm-.863-.313a.513.513 0 0 0 .28.33l-.651 1.351a2.014 2.014 0 0 1-1.081-1.305zm.28.33a.596.596 0 0 0 .438.03l.459 1.428a2.096 2.096 0 0 1-1.548-.107zm2.154-8.176h5.18v1.5h-5.18zm.581 5.641c.125.76.089 1.538-.104 2.284l-1.452-.377c.14-.543.167-1.11.076-1.664zM8.596 2.75a.916.916 0 0 0-.911.838l-1.494-.13A2.416 2.416 0 0 1 8.596 1.25zm.03 12.244c.68.586 1.413 1.283 1.898 2.19l-1.324.707c-.346-.649-.898-1.196-1.553-1.76zm13.088-3.307a2.416 2.416 0 0 1-2.38 2.829v-1.5a.916.916 0 0 0 .902-1.073zm-9.122 3.168a1.583 1.583 0 0 1 1.562-1.84v1.5c-.05 0-.09.046-.082.098zm-5.72-1.875a.918.918 0 0 0 .316.774l-.98 1.137a2.418 2.418 0 0 1-.83-2.04z"/><path fill="currentColor" d="m3.972 2.53l-.748-.065zM3 13.765l.747.064a.75.75 0 0 1-1.497-.064zM4.719 2.594L3.747 13.83l-1.494-.129l.971-11.236zm-.969-.107v11.279h-1.5V2.487zm-.526-.022a.263.263 0 0 0 .263.285v-1.5c.726 0 1.294.622 1.232 1.344zm.263.285a.263.263 0 0 0 .263-.263h-1.5c0-.682.553-1.237 1.237-1.237z" opacity="0.5"/></svg></a>
              </div>
              <div className="card-actions"> 
                      <a href="#" className="card-actions-bookmark neutral"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"><path fill="currentColor" d="M24 4v22.75l-7.1-3.59l-.9-.45l-.9.45L8 26.75V4zm0-2H8a2 2 0 0 0-2 2v26l10-5l10 5V4a2 2 0 0 0-2-2"/></svg></a>
                      <a href="#" onClick={handlePopUp} className="card-actions-link neutral"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M3 9.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3"/></svg></a>
              </div> 
            </div> 
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="card">{renderContent()}</div>
    
  )
}

export default Card