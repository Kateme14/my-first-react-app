import { useDispatch, useSelector } from "react-redux"
import Card from "../card/Card"
import { RootState } from '../../redux/store'
import '../../styles/ModalPopUp.scss'
import { setSelectedPost } from '../../redux/postPopUpReducer'
import { useNavigate } from "react-router-dom"


export const PostModal = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
    const { selectedPost } = useSelector((state: RootState) => state.postPopUpReducer)
    if (!selectedPost) return null


  //   const handleClose = () => {
  //     dispatch(setSelectedPost(null))
  // }

  const handleClose = (event: React.MouseEvent) => {
    event.stopPropagation()
    dispatch(setSelectedPost(null))
  }

  const handleNavigate = () => {
    dispatch(setSelectedPost(null))
    navigate('/selected-post')
  }

    return (
      <div className="modal-pop-up">
        <div className="modal-pop-up-content" onClick={handleNavigate}>
        <div className="modal-pop-up-close-wrapper"><button className="modal-pop-up-close-button" onClick={handleClose}><svg className="modal-pop-up-close-icon" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/></svg></button></div>
        {selectedPost.variant && <Card {...selectedPost} isFiltered={false} variant={selectedPost.variant} />}</div>
        </div>
    )
  }

