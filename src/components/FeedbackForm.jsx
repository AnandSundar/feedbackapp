import React, {useState, useContext, useEffect} from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Card from './shared/Card'
import Button from './shared/Button'
import RatingSelect from './RatingSelect'

function FeedbackForm() {

  const {addFeedback, feedbackEdit, updateFeedback} = useContext(FeedbackContext)

  useEffect(() => {
    if(feedbackEdit.edit === true) {
        setBtnDisabled(false)
        setText(feedbackEdit.item.text)
        setRating(feedbackEdit.item.rating)
    }
  },[feedbackEdit])

  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')

  const handleTextChange = (e) => {
    //   console.log(e.target.value)
    if (e.target.value === "") {
        setMessage('')
        setBtnDisabled(true)
    }else if (e.target.value.length >= 10) {
        setBtnDisabled(false)
        setMessage('')
    }else{
        setMessage('You need atleast 10 characters')
        setBtnDisabled(true)
    }

    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text.trim().length > 10) {
        const newFeedback = {
            text: text,
            rating: rating
        }

        if (feedbackEdit.edit === true) {
            updateFeedback(feedbackEdit.item.id, newFeedback)
        }else{
            addFeedback(newFeedback)
        }
        setText('')
    }

  }

  return (
    <Card>
        <form onSubmit={handleSubmit}>
            <h2>how would you rate your service with us ?</h2>
            <RatingSelect select={(rating) => setRating(rating)} />
            <div className="input-group">
                <input onChange={handleTextChange} type='text' placeholder='Write a review' value={text} />
                <Button type='submit' isDisabled={btnDisabled}>Submit</Button>
            </div>

            {message && <div className='message'>{message}</div>}
        </form>
    </Card>
  )
}

export default FeedbackForm